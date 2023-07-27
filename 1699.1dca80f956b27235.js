"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[1699], {
    91699: (sh,vt,g)=>{
        g.r(vt),
        g.d(vt, {
            PAIR_EXPLORER_ROUTES: ()=>Zd
        });
        var t = g(94650)
          , f = g(53763)
          , c = g(99703)
          , at = g(15861)
          , dt = g(77575)
          , ht = g(71208)
          , E = g(77579)
          , mt = g(61135)
          , R = g(4326)
          , se = g(22529)
          , I = g(39300)
          , it = g(63900)
          , Q = g(39646)
          , M = g(18505)
          , J = g(95698)
          , rt = g(32076)
          , _e = g(71884)
          , ge = g(62843)
          , pe = g(69751)
          , O = g(82722)
          , K = g(70262)
          , ct = g(54004)
          , B = g(78372)
          , St = g(17414)
          , de = g(54009)
          , X = g(82805)
          , At = g(14818)
          , Zt = g(28746)
          , m = g(24006)
          , x = g(69585)
          , b = g(49319)
          , p = g(36895)
          , y = g(37340)
          , h = g(89383)
          , z = g(62289)
          , P = g(12113);
        function ut(n) {
            const i = function fe(n) {
                let i = 0
                  , e = 0
                  , o = 0
                  , a = 0
                  , r = 0
                  , l = 0
                  , _ = 0
                  , d = 0
                  , k = 0;
                n.forEach(v=>{
                    k += v.amountToken,
                    r = Math.max(r, v.price),
                    l = Math.min(l || v.price, v.price),
                    d += v.amountToken * v.price,
                    i = Math.max(i, v.priceETH),
                    e = Math.min(e || v.priceETH, v.priceETH),
                    a += v.amountToken * v.priceETH
                }
                ),
                _ = d / k,
                o = a / k;
                let H = 2;
                l < .01 ? H = 8 : l < 1 && (H = 4);
                let N = 2;
                return e < .01 ? N = 8 : e < 1 && (N = 4),
                {
                    eth: {
                        maximum: i,
                        minimum: e,
                        average: o,
                        fraction: N
                    },
                    usd: {
                        maximum: r,
                        minimum: l,
                        average: _,
                        fraction: H
                    }
                }
            }(n);
            return {
                timestamp: me(n),
                type: ue(n.map(e=>e.type)),
                priceETH: i.eth,
                price: i.usd,
                amountToken: ft(n, "amountToken"),
                amountRef: ft(n, "amountRef"),
                amountETH: ft(n, "amountETH", "chupacabring"),
                isBot: he(n)
            }
        }
        function he(n) {
            return n.some(i=>i.others && i.others.bot)
        }
        function me(n) {
            return n.map(i=>i.timestamp).reduce((i,e)=>i < e ? i : e)
        }
        function ue(n) {
            const i = n.filter(e=>e === c.iU1.SELL).length;
            return {
                buys: n.length - i,
                sells: i
            }
        }
        function ft(n, i, e) {
            const o = n.filter(d=>d.type === c.iU1.SELL).map(d=>d[i])
              , a = n.filter(d=>d.type !== c.iU1.SELL).map(d=>d[i]);
            return {
                sells: o.length && o.reduce((d,k)=>d + k) || 0,
                buys: a.length && a.reduce((d,k)=>d + k) || 0,
                hasIcon: !!e && n.some(d=>!!d[e])
            }
        }
        var s = g(52413);
        class w {
            constructor(i) {
                this.voteType = i,
                this._voteType = i
            }
            toString() {
                return null != this._voteType ? this._voteType + "" : null
            }
            static parse(i) {
                return null == i ? w.NO_VOTE : !0 === i || i instanceof w && !0 === i.getValue() ? w.UPVOTE : w.DOWNVOTE
            }
            getValue() {
                return this._voteType
            }
            equals(i) {
                return i.getValue() === this.getValue()
            }
        }
        w.UPVOTE = new w(!0),
        w.DOWNVOTE = new w(!1),
        w.NO_VOTE = new w(null);
        var Z = (()=>{
            return (n = Z || (Z = {}))[n.NONE = 0] = "NONE",
            n[n.WARNING = 1] = "WARNING",
            n[n.DANGER = 2] = "DANGER",
            n[n.HIGH_DANGER = 3] = "HIGH_DANGER",
            Z;
            var n
        }
        )();
        class Ce {
            static isVotedScam(i) {
                return !i || i.downvotes.percent < 85 ? Z.NONE : i.total >= 5 && i.downvotes.percent >= 99 ? Z.HIGH_DANGER : i.total >= 10 && i.downvotes.percent >= 95 ? Z.DANGER : i.total >= 10 && i.downvotes.percent >= 85 ? Z.WARNING : Z.NONE
            }
        }
        var u = g(92216);
        const be = function() {
            return ["far", "external-link"]
        };
        function Pe(n, i) {
            1 & n && (t.TgZ(0, "div", 5),
            t._UZ(1, "img", 6),
            t.TgZ(2, "h4"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA(),
            t.TgZ(5, "span", 7)(6, "a", 8),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA()(),
            t.TgZ(9, "span", 9)(10, "a", 10),
            t._uU(11),
            t.ALo(12, "translate"),
            t._UZ(13, "fa-icon", 11),
            t.qZA()()()),
            2 & n && (t.xp6(3),
            t.Oqu(t.lcZ(4, 5, "pair_explorer.limit_text")),
            t.xp6(3),
            t.Q6J("appRouterLink", "/user"),
            t.xp6(1),
            t.Oqu(t.lcZ(8, 7, "pair_explorer.limit_link")),
            t.xp6(4),
            t.hij(" ", t.lcZ(12, 9, "pair_explorer.limit_velox"), " "),
            t.xp6(2),
            t.Q6J("icon", t.DdM(11, be)))
        }
        function xe(n, i) {
            if (1 & n && (t.TgZ(0, "div", 5),
            t._UZ(1, "iframe", 12),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("src", e.veloxUrl, t.uOi)("width", e.screenWidth >= 1100 ? 1e3 : e.screenWidth >= 992 ? 700 : e.screenWidth >= 526 ? 430 : 300)
            }
        }
        const Me = function() {
            return ["fal", "times"]
        };
        let Lt = (()=>{
            class n {
                constructor(e) {
                    this.modal = e,
                    this.screenWidth = window.innerWidth
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.Kz))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-velox-modal"]],
                inputs: {
                    user_access: "user_access",
                    veloxUrl: "veloxUrl"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 7,
                vars: 7,
                consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], ["class", "modal-body text-center", 4, "ngIf"], [1, "modal-footer"], [1, "modal-body", "text-center"], ["src", "assets/img/logo/dextools_logo_header_35.png", "alt", "dextools logo", "width", "35", 1, "mb-3"], [1, "my-3", "d-block"], ["tabindex", "-1", 3, "appRouterLink"], [1, "d-block"], ["href", "https://www.velox.global/assets/files/Velox-User-Guide.pdf", "rel", "noopener", "tabindex", "-1", "target", "_blank"], [3, "icon"], ["frameBorder", "0", "height", "600", 3, "src", "width"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "button", 1),
                    t.NdJ("click", function() {
                        return o.modal.close("Close click")
                    }),
                    t._UZ(2, "fa-icon", 2),
                    t.ALo(3, "translate"),
                    t.qZA()(),
                    t.YNc(4, Pe, 14, 12, "div", 3),
                    t.YNc(5, xe, 2, 2, "div", 3),
                    t._UZ(6, "div", 4)),
                    2 & e && (t.xp6(2),
                    t.Q6J("icon", t.DdM(6, Me))("ngbTooltip", t.lcZ(3, 4, "home.close")),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.user_access),
                    t.xp6(1),
                    t.Q6J("ngIf", o.user_access))
                },
                dependencies: [u.uH, u.BN, b._L, p.O5, f.jY, h.aw, h.X$],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        var Ct = g(97185);
        const Oe = function() {
            return ["fal", "times"]
        }
          , ke = function() {
            return ["fal", "sparkles"]
        }
          , ye = function(n, i) {
            return {
                pair: n,
                price: i
            }
        }
          , we = function() {
            return ["fab", "twitter"]
        }
          , Te = function() {
            return ["fab", "telegram"]
        }
          , ve = function() {
            return ["fab", "reddit"]
        };
        let Se = (()=>{
            class n {
                constructor(e, o, a) {
                    this.modal = e,
                    this._translate = o,
                    this.toastr = a,
                    this.currentURL = "",
                    this.currentURL = window.location.href
                }
                copyText(e, o) {
                    e.target.blur(),
                    (0,
                    P.vQ)(o);
                    const r = this._translate.instant("pair_explorer.copied");
                    this.toastr.success(r, void 0, {
                        closeButton: !0,
                        positionClass: "toast-bottom-right",
                        timeOut: 3e3
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.Kz),t.Y36(h.sK),t.Y36(Ct._W))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-social-media-modal"]],
                inputs: {
                    tokenData: "tokenData",
                    iframeWidget: "iframeWidget"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 54,
                vars: 61,
                consts: [[1, "modal-header"], [1, "mt-3"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "modal-body", "pt-0"], [1, "share-info-block"], [1, "share-info-block__title"], [1, "share-info-block__content"], [1, "token-page"], ["type", "button", 1, "btn", "btn-primary", "btn-swap-1", 3, "click"], [1, "share-info-block", "mt-4"], [1, "badge", "bg-info", "new-tag"], [1, "me-1", 3, "icon"], [1, "share-info-block", "links"], [1, "share-info-block__content", "share-info-block__links"], [1, "share-btn"], ["data-id", "tw", 1, "btn-twitter"], [1, "pe-2", 3, "icon"], ["data-id", "tg", 1, "btn-telegram"], ["data-id", "re", 1, "btn-reddit"], [1, "modal-footer", "d-flex", "justify-content-center"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "h4", 1),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "button", 2),
                    t.NdJ("click", function() {
                        return o.modal.close("Close click")
                    }),
                    t._UZ(5, "fa-icon", 3),
                    t.ALo(6, "translate"),
                    t.qZA()(),
                    t.TgZ(7, "div", 4)(8, "div", 5)(9, "div", 6),
                    t._uU(10),
                    t.ALo(11, "translate"),
                    t.qZA(),
                    t.TgZ(12, "div", 7)(13, "div", 8),
                    t._uU(14),
                    t.qZA(),
                    t.TgZ(15, "button", 9),
                    t.NdJ("click", function(r) {
                        return o.copyText(r, o.currentURL)
                    }),
                    t._uU(16),
                    t.ALo(17, "translate"),
                    t.qZA()()(),
                    t.TgZ(18, "div", 10)(19, "div", 6),
                    t._uU(20),
                    t.ALo(21, "translate"),
                    t.TgZ(22, "span", 11),
                    t._UZ(23, "fa-icon", 12),
                    t._uU(24),
                    t.ALo(25, "translate"),
                    t.qZA()(),
                    t.TgZ(26, "div", 7)(27, "div", 8),
                    t._uU(28),
                    t.qZA(),
                    t.TgZ(29, "button", 9),
                    t.NdJ("click", function(r) {
                        return o.copyText(r, o.iframeWidget)
                    }),
                    t._uU(30),
                    t.ALo(31, "translate"),
                    t.qZA()()(),
                    t.TgZ(32, "div", 13)(33, "div", 6),
                    t._uU(34),
                    t.ALo(35, "translate"),
                    t.qZA(),
                    t.TgZ(36, "div", 14)(37, "div", 15),
                    t.ALo(38, "translate"),
                    t.ALo(39, "translate"),
                    t.ALo(40, "number"),
                    t.TgZ(41, "a", 16),
                    t._UZ(42, "fa-icon", 17),
                    t._uU(43),
                    t.ALo(44, "translate"),
                    t.qZA(),
                    t.TgZ(45, "a", 18),
                    t._UZ(46, "fa-icon", 17),
                    t._uU(47),
                    t.ALo(48, "translate"),
                    t.qZA(),
                    t.TgZ(49, "a", 19),
                    t._UZ(50, "fa-icon", 17),
                    t._uU(51),
                    t.ALo(52, "translate"),
                    t.qZA()()()()(),
                    t._UZ(53, "div", 20)),
                    2 & e && (t.xp6(2),
                    t.hij(" ", t.lcZ(3, 23, "pair_explorer.share_modal_title"), " "),
                    t.xp6(3),
                    t.Q6J("icon", t.DdM(53, Oe))("ngbTooltip", t.lcZ(6, 25, "home.close")),
                    t.xp6(5),
                    t.Oqu(t.lcZ(11, 27, "pair_explorer.share_modal_section1_title")),
                    t.xp6(4),
                    t.hij(" ", o.currentURL, " "),
                    t.xp6(2),
                    t.Oqu(t.lcZ(17, 29, "pair_explorer.share_modal_section1_button")),
                    t.xp6(4),
                    t.Oqu(t.lcZ(21, 31, "pair_explorer.share_modal_embeded_chart")),
                    t.xp6(3),
                    t.Q6J("icon", t.DdM(54, ke)),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(25, 33, "pools_creator.new"), ""),
                    t.xp6(4),
                    t.hij(" ", o.iframeWidget, " "),
                    t.xp6(2),
                    t.Oqu(t.lcZ(31, 35, "pair_explorer.share_modal_section1_button")),
                    t.xp6(4),
                    t.Oqu(t.lcZ(35, 37, "pair_explorer.share_modal_section2_title")),
                    t.xp6(3),
                    t.uIk("data-desc", t.lcZ(38, 39, "pair_explorer.shared_title"))("data-title", t.xi3(39, 41, "pair_explorer.shared_text", t.WLB(55, ye, o.tokenData.symbol, t.xi3(40, 44, o.tokenData.priceUSD, "1.2-5")))),
                    t.xp6(4),
                    t.uIk("data-share-twitter", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(58, we)),
                    t.xp6(1),
                    t.hij("", t.lcZ(44, 47, "pair_explorer.twitter"), " "),
                    t.xp6(2),
                    t.uIk("data-share-telegram", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(59, Te)),
                    t.xp6(1),
                    t.hij("", t.lcZ(48, 49, "pair_explorer.telegram"), " "),
                    t.xp6(2),
                    t.uIk("data-share-reddit", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(60, ve)),
                    t.xp6(1),
                    t.hij("", t.lcZ(52, 51, "pair_explorer.reddit"), " "))
                },
                dependencies: [u.uH, u.BN, b._L, p.JJ, h.aw, h.X$],
                styles: [".share-info-block__title[_ngcontent-%COMP%]{color:#142028}.share-info-block__content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:.75rem}.share-info-block__content[_ngcontent-%COMP%]   .token-page[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;flex:auto;margin-right:.625rem;border-radius:.625rem;cursor:default;width:22.1875rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:.4375rem .625rem;font-size:13px}.share-info-block__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:13px;height:2.125rem;line-height:2.125rem;border-radius:3.125rem;box-shadow:none!important}.share-info-block__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#00a2bf;border-color:#00a2bf}.share-info-block__content[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#142028}.share-info-block.links[_ngcontent-%COMP%]{margin-top:1.875rem}.share-info-block__links[_ngcontent-%COMP%]{display:block}.share-info-block__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;display:block;margin-top:1.25rem}.share-info-block__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#00b8d8}body.dark-theme   [_nghost-%COMP%]     .share-info-block__title{color:#fff}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .token-page{background-color:#23323c;color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .share-btn a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .share-btn a:hover{text-decoration:none;color:#00b8d8!important}.new-tag[_ngcontent-%COMP%]{position:relative;left:0;margin-left:.25rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        const Ae = function() {
            return ["fal", "times"]
        }
          , Ze = function(n) {
            return {
                "d-none": n
            }
        };
        let Le = (()=>{
            class n {
                constructor(e, o) {
                    this.modal = e,
                    this.modalService = o
                }
                doTrade() {
                    this.modal.close("do trade")
                }
                openModal() {
                    if (!this.isMobileDevice || !this.userAccess) {
                        const e = this.modalService.open(Lt, {
                            centered: !0,
                            scrollable: !0,
                            size: "xl",
                            windowClass: "wide-modal"
                        }).componentInstance;
                        e.user_access = this.userAccess,
                        e.veloxUrl = this.href
                    }
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.Kz),t.Y36(b.FF))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-scam-modal"]],
                inputs: {
                    tokenData: "tokenData",
                    href: "href",
                    userAccess: "userAccess",
                    screenWidth: "screenWidth",
                    isMobileDevice: "isMobileDevice"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 16,
                vars: 21,
                consts: [[1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "modal-body", "text-center"], ["src", "assets/img/logo/dextools_logo_header_35.png", "alt", "dextools logo", "width", "35", 1, "mb-3"], [1, "m-0", "text-start"], [1, "modal-footer"], [1, "btn", "btn-icon-absolute", "ms-2", "velox", 3, "click"], ["src", "assets/img/velox.png", 1, "me-1", 3, "alt"], [3, "ngClass"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "button", 1),
                    t.NdJ("click", function() {
                        return o.modal.dismiss("Close Click")
                    }),
                    t._UZ(2, "fa-icon", 2),
                    t.ALo(3, "translate"),
                    t.qZA()(),
                    t.TgZ(4, "div", 3),
                    t._UZ(5, "img", 4),
                    t.TgZ(6, "p", 5),
                    t._uU(7),
                    t.ALo(8, "translate"),
                    t.qZA()(),
                    t.TgZ(9, "div", 6)(10, "a", 7),
                    t.NdJ("click", function() {
                        return o.modal.dismiss("Close Click"),
                        o.openModal()
                    }),
                    t._UZ(11, "img", 8),
                    t.ALo(12, "translate"),
                    t.TgZ(13, "span", 9),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA()()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("icon", t.DdM(18, Ae))("ngbTooltip", t.lcZ(3, 10, "home.close")),
                    t.xp6(5),
                    t.Oqu(t.lcZ(8, 12, "pair_explorer.scam_modal")),
                    t.xp6(3),
                    t.uIk("href", o.userAccess && o.isMobileDevice ? o.href : null, t.LSH)("rel", o.userAccess && o.isMobileDevice ? "noopener" : null)("target", o.userAccess && o.isMobileDevice ? "blank" : null)("data-velox", o.tokenData.symbol),
                    t.xp6(1),
                    t.MGl("alt", "", t.lcZ(12, 14, "pair_explorer.limit"), " + 'icon'"),
                    t.xp6(2),
                    t.Q6J("ngClass", t.VKq(19, Ze, o.screenWidth > 1199 && o.screenWidth < 1431)),
                    t.xp6(1),
                    t.hij("", t.lcZ(15, 16, "pair_explorer.limit"), " "))
                },
                dependencies: [u.uH, u.BN, b._L, p.mk, h.aw, h.X$],
                styles: [".velox[_ngcontent-%COMP%]{background:#232f3f;box-shadow:0 0 2px #4a4e62;color:#fff;border-radius:50px}.velox[_ngcontent-%COMP%]:hover, .velox[_ngcontent-%COMP%]:focus{background-color:#303d54;box-shadow:0 5px 15px #0000000d,0 4px 10px #4a4e62}.velox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:15px;width:15px}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Ie = g(74017)
          , It = g(48178);
        const De = function(n, i, e, o) {
            return {
                left: n,
                center: i,
                right: e,
                active: o
            }
        };
        function Ee(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "a", 2),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit;
                    return t.oxw().emitTabSelected(r.id),
                    t.KtG(!1)
                }),
                t.TgZ(2, "span", 3),
                t._UZ(3, "fa-icon", 4),
                t.TgZ(4, "span"),
                t._uU(5),
                t.ALo(6, "translate"),
                t.qZA()()(),
                t.BQk()
            }
            if (2 & n) {
                const e = i.$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngClass", t.l5B(5, De, "market" === e.id, "swap" === e.id, "favorites" === e.id, o.tabSelected === e.id)),
                t.xp6(2),
                t.Q6J("icon", e.icon),
                t.xp6(2),
                t.Oqu(t.lcZ(6, 3, e.titleTranslate))
            }
        }
        let Je = (()=>{
            class n {
                set footerTabs(e) {
                    e && e.length && (this._footerTabs = e,
                    this._cdRef.detectChanges())
                }
                get footerTabs() {
                    return this._footerTabs
                }
                set tabSelected(e) {
                    this._tabSelected = e,
                    this._cdRef.detectChanges()
                }
                get tabSelected() {
                    return this._tabSelected
                }
                constructor(e) {
                    this._cdRef = e,
                    this.tabSelectedChange = new t.vpe
                }
                emitTabSelected(e) {
                    this.tabSelected = e,
                    this.tabSelectedChange.emit(e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-footer-tabs"]],
                inputs: {
                    footerTabs: "footerTabs",
                    tabSelected: "tabSelected"
                },
                outputs: {
                    tabSelectedChange: "tabSelectedChange"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 2,
                vars: 1,
                consts: [["id", "footerTabsNavigation", "role", "list", 1, "footer-tabs"], [4, "ngFor", "ngForOf"], ["href", "javascript:", "role", "button", 3, "ngClass", "click"], [1, "content-element"], [3, "icon"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Ee, 7, 10, "ng-container", 1),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngForOf", o.footerTabs))
                },
                dependencies: [p.ax, p.mk, u.uH, u.BN, h.aw, h.X$],
                styles: [".footer-tabs[_ngcontent-%COMP%]{background-color:#e2e7ec;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:4.0625rem;position:fixed;bottom:0;overflow:visible;z-index:2;align-content:space-between}body.dark-theme   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%]{background-color:#e2e7ec}.footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}.footer-tabs[_ngcontent-%COMP%] > a.center[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:absolute;bottom:1.25rem;left:50%;transform:translate(-50%);width:4.0625rem;height:4.0625rem;border-radius:50%;background-color:#00b8d8}.footer-tabs[_ngcontent-%COMP%] > a.center[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#fff!important}.footer-tabs[_ngcontent-%COMP%] > a.center[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.footer-tabs[_ngcontent-%COMP%] > a.left[_ngcontent-%COMP%]{margin-left:6.25rem}@media (max-width: 599px){.footer-tabs[_ngcontent-%COMP%] > a.left[_ngcontent-%COMP%]{margin-left:1.875rem}}.footer-tabs[_ngcontent-%COMP%] > a.right[_ngcontent-%COMP%]{margin-right:6.25rem}@media (max-width: 599px){.footer-tabs[_ngcontent-%COMP%] > a.right[_ngcontent-%COMP%]{margin-right:1.875rem}}.footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#818ea3;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}body.dark-theme   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#818ea3}.footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;font-size:1.375rem}.footer-tabs[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.6875rem}.footer-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .footer-tabs[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]   .content-element[_ngcontent-%COMP%]{color:#142028}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Ue = g(23745);
        function Ne(n, i) {
            1 & n && t._UZ(0, "img", 25)
        }
        function qe(n, i) {
            1 & n && t._UZ(0, "img", 26)
        }
        function Qe(n, i) {
            1 & n && t._UZ(0, "img", 27)
        }
        function Fe(n, i) {
            1 & n && t._UZ(0, "img", 28)
        }
        function He(n, i) {
            1 & n && t._UZ(0, "img", 29)
        }
        function Re(n, i) {
            1 & n && t._UZ(0, "img", 30)
        }
        function Ye(n, i) {
            1 & n && t._UZ(0, "img", 31)
        }
        function We(n, i) {
            1 & n && t._UZ(0, "img", 32)
        }
        const Be = function(n) {
            return {
                alwaysTop: n
            }
        }
          , Dt = function(n, i) {
            return {
                active: n,
                disabled: i
            }
        };
        var S = (()=>{
            return (n = S || (S = {})).default = "default",
            n.flipped = "flipped",
            n.columns = "columns",
            n.fullScreen = "fullScreen",
            S;
            var n
        }
        )();
        let ze = (()=>{
            class n {
                onDocumentClicked(e, o) {
                    o && !o.closest("#change-layout-container") && this.emitHideMenu.emit(!1)
                }
                constructor() {
                    this.isDarkTheme = !0,
                    this.layoutOptionsChanged = new t.vpe,
                    this.emitHideMenu = new t.vpe,
                    this.LayoutTypes = S
                }
                changeLayoutOptions(e, o) {
                    ("poolInfo" !== e && "swapButton" !== e || "fullScreen" !== this.layoutOptions.layoutType) && this.layoutOptionsChanged.emit({
                        type: e,
                        value: o
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-tooltip-layout-types"]],
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("click", function(r) {
                        return o.onDocumentClicked(r, r.target)
                    }, !1, t.evT)
                },
                inputs: {
                    layoutOptions: "layoutOptions",
                    isDarkTheme: "isDarkTheme"
                },
                outputs: {
                    layoutOptionsChanged: "layoutOptionsChanged",
                    emitHideMenu: "emitHideMenu"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 52,
                vars: 42,
                consts: [["id", "layoutOptionsContainer", 1, "layout-options-container", 3, "ngClass"], [1, "layout-options-list"], [1, "form-check"], ["name", "layout-type", "id", "layout-type-1", "type", "radio", "value", "default", 1, "me-2", "form-check-input", 3, "checked", "click"], ["for", "layout-type-1", 1, "form-check-label"], ["src", "assets/img/layout-fav-right.png", "alt", "Favs on the right", "class", "layout-image ms-2", 4, "ngIf"], ["src", "assets/img/layout-fav-right-light.png", "alt", "Favs on the right", "class", "layout-image ms-2", 4, "ngIf"], [1, "form-check", "custom-radio"], ["name", "layout-type", "id", "layout-type-2", "type", "radio", "value", "flipped", 1, "me-2", "form-check-input", 3, "checked", "click"], ["for", "layout-type-2", 1, "form-check-label"], ["src", "assets/img/layout-fav-left.png", "alt", "Favs on the left", "class", "layout-image ms-2", 4, "ngIf"], ["src", "assets/img/layout-fav-left-light.png", "alt", "Favs on the left", "class", "layout-image ms-2", 4, "ngIf"], ["name", "layout-type", "id", "layout-type-3", "type", "radio", "value", "columns", 1, "me-2", "form-check-input", 3, "checked", "click"], ["for", "layout-type-3", 1, "form-check-label", "custom-control-label-radio"], ["src", "assets/img/layout-col-left.png", "alt", "Columns on the left", "class", "layout-image ms-2", 4, "ngIf"], ["src", "assets/img/layout-col-left-light.png", "alt", "Columns on the left", "class", "layout-image ms-2", 4, "ngIf"], ["name", "layout-type", "id", "layout-type-4", "type", "radio", "value", "fullScreen", 1, "me-2", "form-check-input", 3, "checked", "click"], ["for", "layout-type-4", 1, "form-check-label", "custom-control-label-radio"], ["src", "assets/img/layout-chart-full.png", "alt", "Full screen chart", "class", "layout-image ms-2", 4, "ngIf"], ["src", "assets/img/layout-chart-full-light.png", "alt", "Full screen chart", "class", "layout-image ms-2", 4, "ngIf"], [1, "layout-show-elements-list"], ["ngbTooltip", "This option is not available in this view", "placement", "auto", 3, "ngClass", "disableTooltip"], [3, "click"], ["icon", "check", 1, "icon"], [3, "ngClass"], ["src", "assets/img/layout-fav-right.png", "alt", "Favs on the right", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-fav-right-light.png", "alt", "Favs on the right", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-fav-left.png", "alt", "Favs on the left", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-fav-left-light.png", "alt", "Favs on the left", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-col-left.png", "alt", "Columns on the left", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-col-left-light.png", "alt", "Columns on the left", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-chart-full.png", "alt", "Full screen chart", 1, "layout-image", "ms-2"], ["src", "assets/img/layout-chart-full-light.png", "alt", "Full screen chart", 1, "layout-image", "ms-2"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "form")(2, "ul", 1)(3, "li")(4, "div", 2)(5, "input", 3),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("layoutType", o.LayoutTypes.default)
                    }),
                    t.qZA(),
                    t.TgZ(6, "label", 4)(7, "span"),
                    t._uU(8),
                    t.ALo(9, "translate"),
                    t.qZA(),
                    t.YNc(10, Ne, 1, 0, "img", 5),
                    t.YNc(11, qe, 1, 0, "img", 6),
                    t.qZA()()(),
                    t.TgZ(12, "li")(13, "div", 7)(14, "input", 8),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("layoutType", o.LayoutTypes.flipped)
                    }),
                    t.qZA(),
                    t.TgZ(15, "label", 9)(16, "span"),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.qZA(),
                    t.YNc(19, Qe, 1, 0, "img", 10),
                    t.YNc(20, Fe, 1, 0, "img", 11),
                    t.qZA()()(),
                    t.TgZ(21, "li")(22, "div", 7)(23, "input", 12),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("layoutType", o.LayoutTypes.columns)
                    }),
                    t.qZA(),
                    t.TgZ(24, "label", 13)(25, "span"),
                    t._uU(26),
                    t.ALo(27, "translate"),
                    t.qZA(),
                    t.YNc(28, He, 1, 0, "img", 14),
                    t.YNc(29, Re, 1, 0, "img", 15),
                    t.qZA()()(),
                    t.TgZ(30, "li")(31, "div", 7)(32, "input", 16),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("layoutType", o.LayoutTypes.fullScreen)
                    }),
                    t.qZA(),
                    t.TgZ(33, "label", 17)(34, "span"),
                    t._uU(35),
                    t.ALo(36, "translate"),
                    t.qZA(),
                    t.YNc(37, Ye, 1, 0, "img", 18),
                    t.YNc(38, We, 1, 0, "img", 19),
                    t.qZA()()()(),
                    t.TgZ(39, "ul", 20)(40, "li", 21)(41, "div", 22),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("poolInfo")
                    }),
                    t._UZ(42, "fa-icon", 23),
                    t.TgZ(43, "span"),
                    t._uU(44),
                    t.ALo(45, "translate"),
                    t.qZA()()(),
                    t.TgZ(46, "li", 24)(47, "div", 22),
                    t.NdJ("click", function() {
                        return o.changeLayoutOptions("swapButton")
                    }),
                    t._UZ(48, "fa-icon", 23),
                    t.TgZ(49, "span"),
                    t._uU(50),
                    t.ALo(51, "translate"),
                    t.qZA()()()()()()),
                    2 & e && (t.Q6J("ngClass", t.VKq(34, Be, "flipped" === o.layoutOptions.layoutType || "fullScreen" === o.layoutOptions.layoutType)),
                    t.xp6(5),
                    t.Q6J("checked", "default" === o.layoutOptions.layoutType),
                    t.xp6(3),
                    t.Oqu(t.lcZ(9, 22, "header.favs_right")),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isDarkTheme),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isDarkTheme),
                    t.xp6(3),
                    t.Q6J("checked", "flipped" === o.layoutOptions.layoutType),
                    t.xp6(3),
                    t.Oqu(t.lcZ(18, 24, "header.favs_left")),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isDarkTheme),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isDarkTheme),
                    t.xp6(3),
                    t.Q6J("checked", "columns" === o.layoutOptions.layoutType),
                    t.xp6(3),
                    t.Oqu(t.lcZ(27, 26, "header.cols_left")),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isDarkTheme),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isDarkTheme),
                    t.xp6(3),
                    t.Q6J("checked", "fullScreen" === o.layoutOptions.layoutType),
                    t.xp6(3),
                    t.Oqu(t.lcZ(36, 28, "header.full_screen")),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isDarkTheme),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isDarkTheme),
                    t.xp6(2),
                    t.Q6J("ngClass", t.WLB(36, Dt, o.layoutOptions.showPoolInfo && o.layoutOptions.layoutType !== o.LayoutTypes.fullScreen, o.layoutOptions.layoutType === o.LayoutTypes.fullScreen))("disableTooltip", o.layoutOptions.layoutType !== o.LayoutTypes.fullScreen),
                    t.xp6(4),
                    t.Oqu(t.lcZ(45, 30, "header.pool_info")),
                    t.xp6(2),
                    t.Q6J("ngClass", t.WLB(39, Dt, o.layoutOptions.showSwapButton && o.layoutOptions.layoutType !== o.LayoutTypes.fullScreen, o.layoutOptions.layoutType === o.LayoutTypes.fullScreen)),
                    t.xp6(4),
                    t.Oqu(t.lcZ(51, 32, "header.swap_button")))
                },
                dependencies: [p.mk, m.u5, m._Y, m.JL, m.F, p.O5, b._L, u.uH, u.BN, h.aw, h.X$],
                styles: [".layout-options-container[_ngcontent-%COMP%]{background-color:#f4f5f6;position:absolute;width:18.75rem;border-radius:.9375rem;padding:1.25rem;font-size:13px;top:3.125rem;right:0;z-index:999992}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]{background-color:#f4f5f6}.layout-options-container.alwaysTop[_ngcontent-%COMP%]{z-index:999993}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]{padding:0;padding-bottom:.3125rem;border-bottom:.0625rem solid #23323c}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-bottom:.9375rem;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3d5170}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:center}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex:auto;align-items:center;margin-bottom:0}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   .custom-radio[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]:before{border-radius:50%;top:50%!important;transform:translateY(-50%)}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   .form-check-label-radio[_ngcontent-%COMP%]:after{transform:scale(0) translateY(-50%);top:50%!important}.layout-options-container[_ngcontent-%COMP%]   .layout-options-list[_ngcontent-%COMP%]   .custom-radio[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked ~ .form-check-label[_ngcontent-%COMP%]:after{opacity:1;transform:scale(1) translateY(-50%)}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]{padding:0;margin:0}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin-bottom:.9375rem;opacity:.3;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#3d5170}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#fff}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#142028}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-right:.625rem}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{opacity:1}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{cursor:pointer}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{cursor:default}.layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]:hover{color:#cacedb}body.light   [_nghost-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   .layout-options-container[_ngcontent-%COMP%]   .layout-show-elements-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]:hover{color:#3d5170}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Ve = g(98979)
          , Ge = g(85533)
          , $e = g(71928)
          , je = g(73923)
          , C = g(92498);
        const Ke = function(n, i) {
            return [n, i]
        };
        let tn = (()=>{
            class n {
                constructor() {
                    this.updateInfoClicked = new t.vpe
                }
                getDescription() {
                    return this.tokenData.description ? s.LC.ellipsis(this.tokenData.description, 250) : "No description available yet for this token."
                }
                openModalOrPanel() {
                    this.updateInfoClicked.emit()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-token-description"]],
                inputs: {
                    tokenData: "tokenData"
                },
                outputs: {
                    updateInfoClicked: "updateInfoClicked"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 11,
                vars: 13,
                consts: [[1, "line-banners"], [1, "description-container"], [1, "description-title"], [3, "innerHTML"], ["href", "javascript:", 1, "blue-text", 3, "click"]],
                template: function(e, o) {
                    if (1 & e && (t._UZ(0, "hr", 0),
                    t.TgZ(1, "div", 1)(2, "div", 2),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA(),
                    t.TgZ(5, "div"),
                    t._UZ(6, "span", 3),
                    t.ALo(7, "appHighlightText"),
                    t.qZA(),
                    t.TgZ(8, "a", 4),
                    t.NdJ("click", function() {
                        return o.openModalOrPanel(),
                        !1
                    }),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA()()),
                    2 & e) {
                        let a;
                        t.xp6(3),
                        t.Oqu(t.lcZ(4, 3, "pair_explorer.token_description")),
                        t.xp6(3),
                        t.Q6J("innerHTML", t.xi3(7, 5, o.getDescription(), t.WLB(10, Ke, null !== (a = o.tokenData.name) && void 0 !== a ? a : "", null !== (a = o.tokenData.symbol) && void 0 !== a ? a : "")), t.oJD),
                        t.xp6(3),
                        t.Oqu(t.lcZ(10, 8, "pair_explorer.add_social_icons"))
                    }
                },
                dependencies: [C.Lw, h.aw, h.X$],
                styles: [".line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6;width:15rem;height:.0625rem;border:none;opacity:.8;margin:0 1.25rem}body.dark-theme   [_nghost-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6}.description-container[_ngcontent-%COMP%]{cursor:pointer;padding:.625rem 1.25rem 1.25rem;height:inherit;line-height:1.125rem}.description-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:.375rem}.description-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px}.description-container[_ngcontent-%COMP%]   .description-title[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;color:#142028;margin-bottom:.5rem}body.dark-theme   [_nghost-%COMP%]   .description-container[_ngcontent-%COMP%]   .description-title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .description-title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .description-container[_ngcontent-%COMP%]   .description-title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .description-title[_ngcontent-%COMP%]{color:#142028}.blue-text[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;background-color:#00b8d833;border-radius:3.125rem;color:#00b8d8;height:1.375rem;line-height:1.375rem;padding:0 .375rem}.blue-text[_ngcontent-%COMP%]:hover{background-color:#00b8d8;color:#fff;text-decoration:none}@media (max-width: 1023px){.line-banners[_ngcontent-%COMP%]{margin:0 1.25rem;width:auto}}"],
                data: {
                    animation: [(0,
                    y.X$)("simpleAnimation", [(0,
                    y.eR)("*=>*", [(0,
                    y.oB)({
                        height: "auto"
                    }), (0,
                    y.jt)(200)])])]
                },
                changeDetection: 0
            }),
            n
        }
        )();
        function en(n, i) {
            if (1 & n && (t.TgZ(0, "a", 18),
            t.GkF(1, 19),
            t.qZA()),
            2 & n) {
                const e = t.oxw().$implicit
                  , o = t.MAs(5)
                  , a = t.oxw(3);
                t.Q6J("href", a.getProviderUrl(e), t.LSH),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function nn(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t.GkF(1, 19),
            t.qZA()),
            2 & n) {
                t.oxw();
                const e = t.MAs(5);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function on(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2).$implicit;
                t.Tol("pinksale" !== e.providerId ? "lock-blue" : null),
                t.xp6(1),
                t.AsE("", e.percent > 0 && e.percent < 1 ? "< 1" : t.xi3(2, 4, e.percent, "1.2-2"), "% ", t.lcZ(3, 7, "pair_explorer.locked_supply"), " ")
            }
        }
        function an(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2).$implicit;
                t.Tol("pinksale" !== e.providerId ? "lock-blue" : null),
                t.xp6(1),
                t.AsE("", e.percent > 0 && e.percent < 1 ? "< 1" : t.xi3(2, 4, e.percent, "1.2-2"), "% ", t.lcZ(3, 7, "pair_explorer.locked_liq"), " ")
            }
        }
        function rn(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "number"),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2).$implicit
                  , o = t.oxw(3);
                t.Tol("pinksale" !== e.providerId ? "lock-blue" : null),
                t.xp6(1),
                t.HOy("", t.xi3(2, 6, e.amount, "1.2-2"), " ", o.tokenData.symbol, "-", o.tokenData.symbol_vs, " ", t.lcZ(3, 9, "pair_explorer.locked_liq"), "")
            }
        }
        function cn(n, i) {
            if (1 & n && (t._UZ(0, "img", 20),
            t.YNc(1, on, 4, 9, "span", 21),
            t.YNc(2, an, 4, 9, "span", 21),
            t.YNc(3, rn, 4, 11, "span", 21)),
            2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw(3);
                t.Akn(o.getStyleForProvider(e.providerId)),
                t.Q6J("src", o.getProviderIcon(e.providerId), t.LSH),
                t.xp6(1),
                t.Q6J("ngIf", void 0 !== e.percent && (!e.type || "token" === e.type)),
                t.xp6(1),
                t.Q6J("ngIf", void 0 !== e.percent && "pair" === e.type),
                t.xp6(1),
                t.Q6J("ngIf", void 0 === e.percent)
            }
        }
        function ln(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.locked_month"), " "))
        }
        function sn(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.locked_months"), " "))
        }
        function _n(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.locked_years"), " "))
        }
        function gn(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.locked_day"), " "))
        }
        function pn(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.locked_days"), " "))
        }
        function dn(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t.YNc(1, en, 2, 2, "a", 14),
            t.YNc(2, nn, 2, 1, "ng-template", null, 15, t.W1O),
            t.YNc(4, cn, 4, 6, "ng-template", null, 16, t.W1O),
            t.TgZ(6, "span"),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t.TgZ(9, "span", 17)(10, "span"),
            t._uU(11),
            t.qZA(),
            t.YNc(12, ln, 3, 3, "span", 8),
            t.YNc(13, sn, 3, 3, "span", 8),
            t.YNc(14, _n, 3, 3, "span", 8),
            t.YNc(15, gn, 3, 3, "span", 8),
            t.YNc(16, pn, 3, 3, "span", 8),
            t.qZA()()),
            2 & n) {
                const e = i.$implicit
                  , o = i.index
                  , a = t.MAs(3)
                  , r = t.oxw(3);
                t.Gre("lock-info ", r.liquidityLock.length !== o + 1 ? "lock-border" : null, ""),
                t.xp6(1),
                t.Q6J("ngIf", "pinksale" !== e.providerId)("ngIfElse", a),
                t.xp6(6),
                t.hij(" ", t.lcZ(8, 13, "pair_explorer.locked_for"), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", r.getReadableDate(e.unlockDate)),
                t.xp6(2),
                t.hij(" ", r.getMonthsFromDate(e.unlockDate), " "),
                t.xp6(1),
                t.Q6J("ngIf", 1 === r.getMonthsFromDate(e.unlockDate) && !r.isDays),
                t.xp6(1),
                t.Q6J("ngIf", r.getMonthsFromDate(e.unlockDate) > 1 && !r.isDays && !r.isYears),
                t.xp6(1),
                t.Q6J("ngIf", r.getMonthsFromDate(e.unlockDate) > 1 && r.isYears),
                t.xp6(1),
                t.Q6J("ngIf", 1 === r.getMonthsFromDate(e.unlockDate) && r.isDays),
                t.xp6(1),
                t.Q6J("ngIf", r.getMonthsFromDate(e.unlockDate) > 1 && r.isDays)
            }
        }
        function hn(n, i) {
            if (1 & n && (t.TgZ(0, "div", 11)(1, "div", 12),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.YNc(4, dn, 17, 15, "div", 13),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 2, "pair_explorer.locked_tooltip")),
                t.xp6(2),
                t.Q6J("ngForOf", e.liquidityLock)
            }
        }
        function mn(n, i) {
            1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.other_locked")))
        }
        function un(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.other_locked")))
        }
        function fn(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.not_locked")))
        }
        function Cn(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t.YNc(1, un, 3, 3, "span", 8),
            t.YNc(2, fn, 3, 3, "span", 8),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.lockPairWithoutPercent),
                t.xp6(1),
                t.Q6J("ngIf", !e.lockPairWithoutPercent)
            }
        }
        function bn(n, i) {
            if (1 & n && (t.TgZ(0, "a", 22),
            t._UZ(1, "img", 23),
            t.TgZ(2, "span"),
            t._uU(3, "UniCrypt"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("unicrypt"), t.LSH),
                t.xp6(1),
                t.Q6J("src", e.getProviderIcon("unicrypt"), t.LSH)
            }
        }
        function Pn(n, i) {
            if (1 & n && (t.TgZ(0, "a", 22),
            t._UZ(1, "img", 24),
            t.TgZ(2, "span"),
            t._uU(3, "Team Finance"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("teamfinance"), t.LSH),
                t.xp6(1),
                t.Q6J("src", e.getProviderIcon("teamfinance"), t.LSH)
            }
        }
        function xn(n, i) {
            if (1 & n && (t.TgZ(0, "a", 22),
            t._UZ(1, "img", 24),
            t.TgZ(2, "span"),
            t._uU(3, "Mudra"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("mudra"), t.LSH),
                t.xp6(1),
                t.Q6J("src", e.getProviderIcon("mudra"), t.LSH)
            }
        }
        function Mn(n, i) {
            if (1 & n && (t.TgZ(0, "a", 22),
            t._UZ(1, "img", 23),
            t.TgZ(2, "span"),
            t._uU(3, "DXSale Lock"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("dxsale"), t.LSH),
                t.xp6(1),
                t.Akn(e.getStyleForProvider("dxsale", !0)),
                t.Q6J("src", e.getProviderIcon("dxsale"), t.LSH)
            }
        }
        function On(n, i) {
            if (1 & n && (t.TgZ(0, "a", 22),
            t._UZ(1, "img", 24),
            t.TgZ(2, "span"),
            t._uU(3, "Floki Lock"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("floki"), t.LSH),
                t.xp6(1),
                t.Q6J("src", e.getProviderIcon("floki"), t.LSH)
            }
        }
        function kn(n, i) {
            if (1 & n && (t.TgZ(0, "a", 18),
            t._UZ(1, "img", 24),
            t.TgZ(2, "span"),
            t._uU(3, "Gempad Lock"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getProviderUrl("gempad"), t.LSH),
                t.xp6(1),
                t.Q6J("src", e.getProviderIcon("gempad"), t.LSH)
            }
        }
        function yn(n, i) {
            if (1 & n && (t.YNc(0, hn, 5, 4, "div", 5),
            t.TgZ(1, "div", 6)(2, "div", 7),
            t.YNc(3, mn, 3, 3, "div", 8),
            t.YNc(4, Cn, 3, 2, "div", 8),
            t.YNc(5, bn, 4, 2, "a", 9),
            t.YNc(6, Pn, 4, 2, "a", 9),
            t.YNc(7, xn, 4, 2, "a", 9),
            t.YNc(8, Mn, 4, 4, "a", 9),
            t.YNc(9, On, 4, 2, "a", 9),
            t.YNc(10, kn, 4, 2, "a", 10),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.showLock),
                t.xp6(3),
                t.Q6J("ngIf", e.totalLocked > 0),
                t.xp6(1),
                t.Q6J("ngIf", e.totalLocked <= 0),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("unicrypt") && !e.lockUni),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("teamfinance") && !e.lockTeamF),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("mudra") && !e.lockMudra),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("dxsale") && !e.lockDxsale),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("floki") && !e.lockFloki),
                t.xp6(1),
                t.Q6J("ngIf", e.isLockSupportedInChain("gempad") && !e.lockGempad)
            }
        }
        const Et = "unicrypt"
          , tt = "teamfinance"
          , et = "team-finance"
          , bt = "fair-token-project"
          , V = "dxsale"
          , Jt = "pinksale"
          , lt = "mudra"
          , st = "floki"
          , _t = "gempad";
        let wn = (()=>{
            class n {
                get _toChecksumAddress() {
                    return c.LJP.checkIsEVMAddress(this.pairSelected, this.chain) ? this._web3UtilsService.toChecksumAddress(this.pairSelected) : this.pairSelected
                }
                get liquidityLock() {
                    return this._liquidityLock ?? []
                }
                set liquidityLock(e) {
                    if (e) {
                        for (const o of e)
                            this._removeDuplicateLocks(o);
                        this._liquidityLock = this.liquidityLock.length > 0 ? [...this.liquidityLock, ...e] : e,
                        this._filterValidLocks()
                    }
                }
                constructor(e, o) {
                    this._web3UtilsService = e,
                    this._cdRef = o,
                    this.totalSupply = 0,
                    this.liquidityLockList = new t.vpe,
                    this._liquidityLock = [],
                    this.totalLocked = 0,
                    this.isYears = !1,
                    this.isDays = !1,
                    this.showLock = !1,
                    this.lockUni = !1,
                    this.lockDxsale = !1,
                    this.lockFTP = !1,
                    this.lockTeamF = !1,
                    this.lockMudra = !1,
                    this.lockFloki = !1,
                    this.lockGempad = !1,
                    this.lockPairWithoutPercent = !1
                }
                ngOnChanges() {
                    this.totalLocked = 0,
                    this.liquidityLock = this.tokenData.locks,
                    this.showLock = this.liquidityLock.length > 0,
                    this._calculateTotalLocked(),
                    this._cdRef.detectChanges()
                }
                getFullCircle() {
                    return 22 * Math.PI
                }
                getCircleBorder() {
                    const e = (100 - this.totalLocked) / 100 * this.getFullCircle();
                    return this.totalLocked <= 5 ? 0 : e >= 100 ? 100 : e
                }
                getMonthsFromDate(e) {
                    const o = new Date
                      , a = new Date(e)
                      , r = a.getMonth() - o.getMonth() + 12 * (a.getFullYear() - o.getFullYear());
                    this.isYears = r > 100,
                    this.isDays = r < 1;
                    let l = Math.round(Math.abs((a.getTime() - o.getTime()) / s.HR));
                    return l = l < 1 ? 1 : l,
                    r > 100 ? Math.round(100 * r / 12) / 100 : r < 1 ? l : r
                }
                getProviderIcon(e) {
                    const o = "assets/img/";
                    switch (e) {
                    case et:
                    case tt:
                        return o + "team.png";
                    case bt:
                        return o + "fair-token-project.png";
                    case V:
                        return o + "dx.png";
                    case Jt:
                        return o + "pinksale.png";
                    case lt:
                        return o + "mudra.png";
                    case st:
                        return o + "floki.png";
                    case _t:
                        return o + "gempad.svg";
                    default:
                        return o + "unicrypt_v3.svg"
                    }
                }
                getProviderUrl(e) {
                    switch (null != e.providerId ? e.providerId : e) {
                    case et:
                    case tt:
                        return this.tokenData.id ? `https://team.finance/view-coin/${this.tokenData.id}?name=${this.tokenData.name}&symbol=${this.tokenData.symbol}` : "https://team.finance";
                    case bt:
                        return "https://fairtokenproject.com/#locks";
                    case V:
                        return `https://dx.app/dxlockview?id=0&add=${this._toChecksumAddress}&type=lplock&chain=${c.nm_[this.chain]}`;
                    case lt:
                        return `https://mudra.website/?certificate=yes&type=0&lp=${this.pairSelected}`;
                    case st:
                        return "pair" === e?.type ? `https://locker.flokifi.com/view-lp-token/chain/${c.q2m[this.chain]}/token/${this.pairSelected}` : `https://locker.flokifi.com/view-token/chain/${c.q2m[this.chain]}/token/${this.tokenData.id}`;
                    case _t:
                        return "pair" === e?.type ? `https://gempad.app/other-liquidity-lock-detail/${this.pairSelected}?chainId=${c.FJI[this.chain]}` : `https://gempad.app/token-lock-detail/${this.tokenData.id}?chainId=${c.FJI[this.chain]}`;
                    default:
                        {
                            const a = c.i9O.getExchangeUnicryptUrl(this.tokenData.exchange || c.ibW, this.chain);
                            return a && `${a}${this.pairSelected}`
                        }
                    }
                }
                isLockSupportedInChain(e) {
                    switch (e) {
                    case Et:
                        return c.n9D[this.chain];
                    case Jt:
                        return c.RD2[this.chain];
                    case V:
                        return c.nm_[this.chain];
                    case et:
                    case tt:
                        return c.H_p[this.chain];
                    case lt:
                        return this.chain === c.qop.Binance;
                    case st:
                        return c.q2m[this.chain];
                    case _t:
                        return c.FJI[this.chain];
                    default:
                        return !1
                    }
                }
                _calculateTotalLocked() {
                    if (this.showLock) {
                        for (const r of this.liquidityLock)
                            this.totalSupply && !r.percent && "token" === r.type ? r.percent = r.amount / this.totalSupply * 100 : (!this.totalSupply || !r.percent && "pair" === r.type) && (this.lockPairWithoutPercent = !0);
                        const e = this.liquidityLock.filter(r=>("pair" === r.type || !r.type) && r.percent).reduce((r,l)=>r + (l.percent ?? 0), 0)
                          , o = this.liquidityLock.filter(r=>"token" === r.type).reduce((r,l)=>r + (l.percent ?? 0), 0);
                        this.totalLocked = Math.min((e > o ? e : o) || 0, 100)
                    } else
                        this.totalLocked = 0;
                    this._cdRef.detectChanges()
                }
                getReadableDate(e) {
                    return new Date(e).getTime() - (new Date).getTime() < s.HR ? s.k3.formatDate(e, "DD/MM/YYYY HH:mm") : s.k3.formatDate(e, "DD/MM/YYYY")
                }
                getStyleForProvider(e, o=!1) {
                    return e === tt || e === et || e !== V && o ? "width: auto" : e === V ? o ? "width: auto; background: white; border-radius: 50%; padding: 0.04rem;" : "background: white; border-radius: 50%; padding: 0.04rem;" : null
                }
                _setLockProvider(e) {
                    switch (e) {
                    case Et:
                        this.lockUni = !0;
                        break;
                    case V:
                        this.lockDxsale = !0;
                        break;
                    case bt:
                        this.lockFTP = !0;
                        break;
                    case et:
                    case tt:
                        this.lockTeamF = !0;
                        break;
                    case lt:
                        this.lockUni = !0;
                        break;
                    case st:
                        this.lockFloki = !0;
                        break;
                    case _t:
                        this.lockGempad = !0
                    }
                }
                _checkValidLock(e) {
                    return new Date(e.unlockDate).getTime() - Date.now() > 0 && !Number.isNaN(e.amount)
                }
                _removeDuplicateLocks(e) {
                    this._liquidityLock = this._liquidityLock.filter(o=>e.lockId ? e.lockId !== o.lockId : e.unlockDate !== o.unlockDate && e.amount !== o.amount)
                }
                _filterValidLocks() {
                    this._liquidityLock = this._liquidityLock.filter(e=>this._checkValidLock(e));
                    for (const e of this._liquidityLock)
                        this._setLockProvider(e.providerId)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(c.j4Y),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-liquidity-lock"]],
                inputs: {
                    tokenData: "tokenData",
                    pairSelected: "pairSelected",
                    chain: "chain",
                    totalSupply: "totalSupply"
                },
                outputs: {
                    liquidityLockList: "liquidityLockList"
                },
                standalone: !0,
                features: [t.TTD, t.jDz],
                decls: 6,
                vars: 8,
                consts: [["tooltipClass", "liquidity-lock-tooltip", "placement", "bottom-left", "triggers", "click", 1, "progress-value-container", 3, "ngbTooltip", "autoClose", "click"], ["xmlns", "http://www.w3.org/2000/svg", "height", "22", "width", "22", "viewBox", "10 10 26 26"], ["id", "bar", "r", "11", "cx", "22", "cy", "22", "fill", "transparent"], ["icon", "lock", "size", "xs"], ["tooltipLockedContent", ""], ["class", "tooltip-content", 4, "ngIf"], [1, "tooltip-content", "mt-2"], [1, "text-center"], [4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "me-2", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], [1, "tooltip-content"], [1, "tooltip-title"], [3, "class", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf", "ngIfElse"], ["pinksaleTemplate", ""], ["lockDataTemplate", ""], ["placement", "top", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener", 3, "href"], [3, "ngTemplateOutlet"], ["alt", "lock-icon", 1, "lock-icon", 3, "src"], [3, "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "me-2", 3, "href"], ["alt", "lock-icon", 1, "lock-icon", "me-1", 3, "src"], ["alt", "lock-icon", 1, "lock-icon", "me-1", 2, "width", "auto", 3, "src"]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0),
                    t.NdJ("click", function(r) {
                        return r.stopPropagation()
                    }),
                    t.O4$(),
                    t.TgZ(1, "svg", 1),
                    t._UZ(2, "circle", 2),
                    t.qZA(),
                    t.kcU(),
                    t._UZ(3, "fa-icon", 3),
                    t.qZA(),
                    t.YNc(4, yn, 11, 9, "ng-template", null, 4, t.W1O)),
                    2 & e) {
                        const a = t.MAs(5);
                        t.Q6J("ngbTooltip", a)("autoClose", "outside"),
                        t.xp6(2),
                        t.Tol(o.totalLocked > 5 && o.showLock ? "locked-color" : "not-locked-color"),
                        t.uIk("stroke-dasharray", o.getFullCircle())("stroke-dashoffset", o.getCircleBorder()),
                        t.xp6(1),
                        t.Tol(o.totalLocked <= 5 && !o.lockPairWithoutPercent || !o.showLock && !o.lockPairWithoutPercent ? "not-locked-color" : null)
                    }
                },
                dependencies: [b._L, u.uH, u.BN, p.O5, p.ax, p.JJ, h.aw, h.X$, p.tP],
                styles: ["[_nghost-%COMP%]{display:inline-block;height:1rem;line-height:0;width:1rem}.progress-value-container[_ngcontent-%COMP%]{cursor:pointer;height:1rem;position:relative;top:-.242rem;width:1rem}.progress-value-container[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{position:absolute;transform:rotate(270deg)}.progress-value-container[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-width:.125rem}.progress-value-container[_ngcontent-%COMP%] > fa-icon[_ngcontent-%COMP%]{color:#17c671;font-size:.8rem;left:.37rem;position:absolute;top:.4rem}.locked-color[_ngcontent-%COMP%]{stroke:#17c671}.not-locked-color[_ngcontent-%COMP%]{color:#818ea380!important;stroke:#818ea380}.tooltip-content[_ngcontent-%COMP%]{max-height:25rem;overflow-y:auto;text-align:left;white-space:nowrap}@media screen and (max-width: 768px){.tooltip-content[_ngcontent-%COMP%]{white-space:normal}}.tooltip-content[_ngcontent-%COMP%]   .tooltip-title[_ngcontent-%COMP%]{margin-bottom:.25rem}.tooltip-content[_ngcontent-%COMP%]   .lock-info[_ngcontent-%COMP%]{padding:.25rem 0}.tooltip-content[_ngcontent-%COMP%]   .lock-info[_ngcontent-%COMP%]   .lock-blue[_ngcontent-%COMP%]{color:#00b8d8}.tooltip-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.tooltip-content[_ngcontent-%COMP%]   .lock-border[_ngcontent-%COMP%]{border-bottom:.0625rem solid #23323c}.lock-icon[_ngcontent-%COMP%]{height:1rem;margin-right:.25rem;vertical-align:top;width:1rem}@media screen and (max-width: 768px){  .liquidity-lock-tooltip{max-width:13.75rem}}  .liquidity-lock-tooltip .tooltip-inner{max-width:none;width:100%}@media (max-width: 1023px){[_nghost-%COMP%]{margin-left:.5rem;margin-right:.5rem}.progress-value-container[_ngcontent-%COMP%]{top:-.23rem}.progress-value-container[_ngcontent-%COMP%] > fa-icon[_ngcontent-%COMP%]{left:.368rem}}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function Tn(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 18)(2, 18)(3, 18)(4, 18)(5, 18)(6, 18),
            t.BQk()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(5)
                  , o = t.MAs(7)
                  , a = t.MAs(15)
                  , r = t.MAs(19)
                  , l = t.MAs(25)
                  , _ = t.MAs(31);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", l),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", _)
            }
        }
        function vn(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(9);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Sn(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(11);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function An(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(9);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Zn(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(11);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Ln(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 18),
            t.YNc(2, An, 1, 1, "ng-container", 19),
            t.GkF(3, 18),
            t.YNc(4, Zn, 1, 1, "ng-container", 19),
            t.GkF(5, 18)(6, 18)(7, 18),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(17)
                  , a = t.MAs(21)
                  , r = t.MAs(13)
                  , l = t.MAs(23)
                  , _ = t.MAs(27);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenPoolInfo.marketCap),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenPoolInfo.marketCap || e.tokenPoolInfo.totalMarketCap),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", l),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", _)
            }
        }
        function In(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 21),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleMobileCollapsed())
                }),
                t._UZ(1, "fa-icon", 22),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("icon", e.mobileCollapsed ? "chevron-down" : "chevron-up")
            }
        }
        function Dn(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 17)(2, "div")(3, "ul"),
            t.GkF(4, 18),
            t.YNc(5, Tn, 7, 6, "ng-container", 0),
            t.qZA()(),
            t.TgZ(6, "div")(7, "ul"),
            t.GkF(8, 18),
            t.YNc(9, vn, 1, 1, "ng-container", 19),
            t.YNc(10, Sn, 1, 1, "ng-container", 19),
            t.YNc(11, Ln, 8, 7, "ng-container", 0),
            t.qZA()(),
            t.YNc(12, In, 2, 1, "button", 20),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw()
                  , o = t.MAs(3)
                  , a = t.MAs(29);
                t.xp6(4),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngIf", !e.mobileCollapsed),
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(1),
                t.Q6J("ngIf", !e.tokenPoolInfo.marketCap),
                t.xp6(1),
                t.Q6J("ngIf", !e.tokenPoolInfo.marketCap && !e.tokenPoolInfo.totalMarketCap),
                t.xp6(1),
                t.Q6J("ngIf", !e.mobileCollapsed),
                t.xp6(1),
                t.Q6J("ngIf", e.mobile)
            }
        }
        function En(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Oqu(e.tokenData.pool.symbol)
            }
        }
        function Jn(n, i) {
            if (1 & n && t._UZ(0, "fa-icon", 33),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngbTooltip", e.tokenData.pool.name)
            }
        }
        function Un(n, i) {
            if (1 & n && (t.TgZ(0, "span", 31),
            t.YNc(1, En, 2, 1, "span", 0),
            t.YNc(2, Jn, 1, 1, "fa-icon", 32),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !!e.tokenData.pool.symbol),
                t.xp6(1),
                t.Q6J("ngIf", !!e.tokenData.pool.name)
            }
        }
        const Nn = function() {
            return ["far", "external-link"]
        };
        function qn(n, i) {
            1 & n && (t.TgZ(0, "a", 34),
            t._uU(1),
            t.ALo(2, "translate"),
            t._UZ(3, "fa-icon", 22),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 2, "pair_explorer.unknown_exchange_link"), " "),
            t.xp6(2),
            t.Q6J("icon", t.DdM(4, Nn)))
        }
        function Qn(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(31);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Fn(n, i) {
            if (1 & n && t.GkF(0, 18),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(33);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Hn(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 23)(2, "div", 24)(3, "strong")(4, "span"),
                t._uU(5),
                t.ALo(6, "translate"),
                t.TgZ(7, "span"),
                t._uU(8),
                t.ALo(9, "translate"),
                t.qZA()(),
                t.YNc(10, Un, 3, 2, "span", 25),
                t.qZA(),
                t.YNc(11, qn, 4, 5, "a", 26),
                t.TgZ(12, "ul"),
                t.GkF(13, 18)(14, 18)(15, 18)(16, 18)(17, 18)(18, 18)(19, 18)(20, 18)(21, 18)(22, 18),
                t.qZA(),
                t.TgZ(23, "div", 27)(24, "ul", 28),
                t.GkF(25, 18)(26, 18)(27, 18)(28, 18),
                t.YNc(29, Qn, 1, 1, "ng-container", 19),
                t.YNc(30, Fn, 1, 1, "ng-container", 19),
                t.qZA()()(),
                t.TgZ(31, "button", 29),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleInfoCollapsed())
                })("keyup.enter", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleInfoCollapsed())
                }),
                t.TgZ(32, "span"),
                t._uU(33),
                t.ALo(34, "translate"),
                t.ALo(35, "translate"),
                t._UZ(36, "fa-icon", 30),
                t.qZA()()(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw()
                  , o = t.MAs(3)
                  , a = t.MAs(5)
                  , r = t.MAs(7)
                  , l = t.MAs(15)
                  , _ = t.MAs(29)
                  , d = t.MAs(17)
                  , k = t.MAs(9)
                  , H = t.MAs(21)
                  , N = t.MAs(13)
                  , v = t.MAs(11)
                  , $ = t.MAs(23)
                  , W = t.MAs(19)
                  , j = t.MAs(25)
                  , Tt = t.MAs(27);
                t.xp6(5),
                t.AsE("", e.exchange === e.unknownDex ? t.lcZ(6, 26, "pair_explorer.unknown_exchange") : e.exchange, " ", e.exchangeVersion, " "),
                t.xp6(3),
                t.hij("", t.lcZ(9, 28, "pair_explorer.pool_info"), " "),
                t.xp6(2),
                t.Q6J("ngIf", null == e.tokenData ? null : e.tokenData.pool),
                t.xp6(1),
                t.Q6J("ngIf", e.exchange === e.unknownDex),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", l),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", _),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", d),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", k),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", H),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", N),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", v),
                t.xp6(1),
                t.Q6J("hidden", e.isInfoCollapsed),
                t.xp6(2),
                t.Q6J("ngTemplateOutlet", $),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", W),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", j),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", Tt),
                t.xp6(1),
                t.Q6J("ngIf", e.hasPoolRatios),
                t.xp6(1),
                t.Q6J("ngIf", !!e.usdBonded),
                t.xp6(1),
                t.uIk("aria-expanded", !e.isInfoCollapsed),
                t.xp6(2),
                t.hij(" ", e.isInfoCollapsed ? t.lcZ(34, 30, "pair_explorer.more_info") : t.lcZ(35, 32, "pair_explorer.less_info"), " "),
                t.xp6(3),
                t.Q6J("@simpleFadeAnimation", e.isInfoCollapsed)("icon", e.isInfoCollapsed ? "chevron-down" : "chevron-up")
            }
        }
        function Rn(n, i) {
            1 & n && (t.TgZ(0, "label"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "pair_explorer.liquidity"), ":"))
        }
        function Yn(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "pair_explorer.total_liquidity"), ":"))
        }
        function Wn(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-liquidity-lock", 38),
                t.NdJ("liquidityLockList", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.liquidityLockList.emit(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("chain", e.chain)("tokenData", e.tokenData)("pairSelected", e.pairSelected)("totalSupply", e.tokenPoolInfo.totalSupply)
            }
        }
        function Bn(n, i) {
            1 & n && t._UZ(0, "div", 39)
        }
        function zn(n, i) {
            if (1 & n && (t.TgZ(0, "li"),
            t.YNc(1, Rn, 3, 3, "label", 0),
            t.YNc(2, Yn, 3, 3, "span", 0),
            t.TgZ(3, "span", 35)(4, "span"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.qZA(),
            t.YNc(7, Wn, 1, 4, "app-liquidity-lock", 36),
            t.qZA(),
            t.YNc(8, Bn, 1, 0, "div", 37),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.mobile),
                t.xp6(1),
                t.Q6J("ngIf", !e.mobile),
                t.xp6(2),
                t.Tol(e.mobile ? "d-inline-block" : null),
                t.xp6(1),
                t.hij(" $", t.lcZ(6, 8, e.tokenData.liquidity), ""),
                t.xp6(2),
                t.Q6J("ngIf", e.isLiquidityLockSupported),
                t.xp6(1),
                t.Q6J("ngIf", e.mobile)
            }
        }
        function Vn(n, i) {
            if (1 & n && t.YNc(0, zn, 9, 10, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", null != e.tokenData.liquidity)
            }
        }
        function Gn(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appRoundNumber"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("$", t.lcZ(2, 1, e.volume24h), "")
            }
        }
        function $n(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Oqu(e.volumeChecked ? 0 === e.volume24h ? "$0" : t.lcZ(3, 3, "pair_explorer.no_volume") : t.lcZ(2, 1, "pair_explorer.calculate"))
            }
        }
        function jn(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-liquidity-lock", 38),
                t.NdJ("liquidityLockList", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.liquidityLockList.emit(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("chain", e.chain)("tokenData", e.tokenData)("pairSelected", e.pairSelected)("totalSupply", e.tokenPoolInfo.totalSupply)
            }
        }
        function Kn(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.YNc(4, Gn, 3, 3, "span", 0),
            t.YNc(5, $n, 4, 5, "span", 0),
            t.YNc(6, jn, 1, 4, "app-liquidity-lock", 36),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.hij("", t.lcZ(3, 4, "pair_explorer.daily_volume"), ":"),
                t.xp6(2),
                t.Q6J("ngIf", !!e.volume24h),
                t.xp6(1),
                t.Q6J("ngIf", !e.volume24h),
                t.xp6(1),
                t.Q6J("ngIf", e.isLiquidityLockSupported && null == e.tokenData.liquidity)
            }
        }
        function Xn(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.ALo(4, "appSafe"),
            t.qZA(),
            t.TgZ(5, "span"),
            t._uU(6),
            t.ALo(7, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 3, "pair_explorer.pooled"), " ", t.lcZ(4, 5, e.tokenData.symbol_vs), ":"),
                t.xp6(4),
                t.Oqu(t.lcZ(7, 7, e.tokenData.pooledETH))
            }
        }
        function to(n, i) {
            if (1 & n && t.YNc(0, Xn, 8, 9, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !e.hasFeePercentagePools && !!e.tokenData.pooledETH)
            }
        }
        function eo(n, i) {
            1 & n && (t.TgZ(0, "label"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "pair_explorer.total_market_cap"), ": "))
        }
        function no(n, i) {
            1 & n && (t.TgZ(0, "label"),
            t._uU(1, "TMCap: "),
            t.qZA())
        }
        function oo(n, i) {
            if (1 & n && (t.TgZ(0, "li"),
            t.YNc(1, eo, 3, 3, "label", 0),
            t.YNc(2, no, 2, 0, "label", 0),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !e.mobile),
                t.xp6(1),
                t.Q6J("ngIf", e.mobile),
                t.xp6(2),
                t.hij("$", t.lcZ(5, 3, e.tokenPoolInfo.totalMarketCap), "")
            }
        }
        function ao(n, i) {
            if (1 & n && t.YNc(0, oo, 6, 5, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.totalMarketCap && "0" !== e.tokenPoolInfo.totalMarketCap)
            }
        }
        function io(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_explorer.total_tx"), ": "),
                t.xp6(3),
                t.Oqu(t.Dn7(6, 4, e.tokenData.txCount, void 0, 0))
            }
        }
        function ro(n, i) {
            if (1 & n && t.YNc(0, io, 7, 8, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.tokenData.txCount)
            }
        }
        function co(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_explorer.holders"), ":"),
                t.xp6(3),
                t.hij(" ", t.Dn7(6, 4, e.tokenData.holders, void 0, 0), " ")
            }
        }
        function lo(n, i) {
            if (1 & n && t.YNc(0, co, 7, 8, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.tokenData.holders > 0)
            }
        }
        function so(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.ALo(4, "appSafe"),
            t.qZA(),
            t.TgZ(5, "span", 40),
            t.ALo(6, "number"),
            t.ALo(7, "number"),
            t._uU(8),
            t.ALo(9, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 4, "pair_explorer.pooled"), " ", t.lcZ(4, 6, e.tokenData.symbol), ":"),
                t.xp6(3),
                t.Q6J("ngbTooltip", e.tokenData.pooledToken && t.xi3(6, 8, e.tokenData.pooledToken, "1.2-2").length > 15 ? t.xi3(7, 11, e.tokenData.pooledToken, "1.2-2") : null),
                t.xp6(3),
                t.hij(" ", t.lcZ(9, 14, e.tokenData.pooledToken), " ")
            }
        }
        function _o(n, i) {
            if (1 & n && t.YNc(0, so, 10, 16, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !e.hasFeePercentagePools && !!e.tokenData.pooledToken)
            }
        }
        function go(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2, "Circ. Supply:"),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(4),
                t.AsE("", t.lcZ(5, 2, e.tokenPoolInfo.circulatingSupply), " ", " " + e.tokenData.symbol, "")
            }
        }
        function po(n, i) {
            if (1 & n && t.YNc(0, go, 6, 4, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.marketCap && !!e.tokenPoolInfo.circulatingSupply)
            }
        }
        function ho(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2, "Pool created:"),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(4),
                t.Oqu(e.tokenPoolInfo.created)
            }
        }
        function mo(n, i) {
            if (1 & n && t.YNc(0, ho, 5, 1, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.created)
            }
        }
        function uo(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2, "Total Supply:"),
            t.qZA(),
            t.TgZ(3, "span", 40),
            t.ALo(4, "appSafe"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.ALo(7, "appSafe"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(3),
                t.Q6J("ngbTooltip", e.tokenPoolInfo.totalSupply.toString().length > 15 ? e.tokenPoolInfo.totalSupply + " " + t.lcZ(4, 3, e.tokenPoolInfo.tokenSymbol) : null),
                t.xp6(2),
                t.AsE(" ", t.lcZ(6, 5, e.tokenPoolInfo.totalSupply), " ", t.lcZ(7, 7, e.tokenPoolInfo.tokenSymbol), " ")
            }
        }
        function fo(n, i) {
            if (1 & n && t.YNc(0, uo, 8, 9, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.totalMarketCap && !!e.tokenPoolInfo.totalSupply && e.tokenPoolInfo.totalSupply > 0)
            }
        }
        function Co(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2, "Max Supply:"),
            t.qZA(),
            t.TgZ(3, "span", 40),
            t.ALo(4, "appSafe"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.ALo(7, "appSafe"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(3),
                t.Q6J("ngbTooltip", e.tokenPoolInfo.maxSupply.toString().length >= 16 ? e.tokenPoolInfo.maxSupply + " " + t.lcZ(4, 3, e.tokenPoolInfo.tokenSymbol) : null),
                t.xp6(2),
                t.AsE(" ", t.lcZ(6, 5, e.tokenPoolInfo.maxSupply), " ", t.lcZ(7, 7, e.tokenPoolInfo.tokenSymbol), " ")
            }
        }
        function bo(n, i) {
            if (1 & n && t.YNc(0, Co, 8, 9, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !e.tokenPoolInfo.circulatingSupply && !e.tokenPoolInfo.totalSupply && !!e.tokenPoolInfo.maxSupply && "0" !== e.tokenPoolInfo.maxSupply)
            }
        }
        function Po(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "appSafe"),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("% Pooled ", t.lcZ(3, 2, e.tokenPoolInfo.tokenSymbol), ":"),
                t.xp6(3),
                t.hij("", t.lcZ(6, 4, e.tokenPoolInfo.pooled), "%")
            }
        }
        function xo(n, i) {
            if (1 & n && t.YNc(0, Po, 7, 6, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.pooled)
            }
        }
        function Mo(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "appSafe"),
            t.qZA(),
            t.TgZ(4, "span", 40),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.ALo(7, "appSafe"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("1 ", t.lcZ(3, 4, e.tokenPoolInfo.vsSymbol), ":"),
                t.xp6(2),
                t.Q6J("ngbTooltip", e.tokenPoolInfo.value.length > 15 ? e.tokenPoolInfo.value + " " + e.tokenPoolInfo.tokenSymbol : null),
                t.xp6(1),
                t.AsE(" ", t.lcZ(6, 6, e.tokenPoolInfo.value), " ", t.lcZ(7, 8, e.tokenPoolInfo.tokenSymbol), "")
            }
        }
        function Oo(n, i) {
            if (1 & n && t.YNc(0, Mo, 8, 10, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.value)
            }
        }
        function ko(n, i) {
            1 & n && (t.TgZ(0, "label"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij("", t.lcZ(2, 1, "pair_explorer.market_cap"), ":"))
        }
        function yo(n, i) {
            1 & n && (t.TgZ(0, "label", 42),
            t._uU(1, "MCap:"),
            t.qZA())
        }
        function wo(n, i) {
            if (1 & n && (t.TgZ(0, "li"),
            t.YNc(1, ko, 3, 3, "label", 0),
            t.YNc(2, yo, 2, 0, "label", 41),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !e.mobile),
                t.xp6(1),
                t.Q6J("ngIf", e.mobile),
                t.xp6(2),
                t.hij("$", t.lcZ(5, 3, e.tokenPoolInfo.marketCap), "")
            }
        }
        function To(n, i) {
            if (1 & n && t.YNc(0, wo, 6, 5, "li", 0),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.marketCap)
            }
        }
        function vo(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_explorer.ratio"), ":"),
                t.xp6(3),
                t.Oqu(e.tokenPoolInfo.ratio)
            }
        }
        function So(n, i) {
            if (1 & n && (t.TgZ(0, "li")(1, "label"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5),
            t.ALo(6, "appRoundNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij("", t.lcZ(3, 2, "pair_explorer.amp"), ":"),
                t.xp6(3),
                t.Oqu(t.lcZ(6, 4, e.tokenPoolInfo.amp))
            }
        }
        function Ao(n, i) {
            if (1 & n && (t.YNc(0, vo, 6, 4, "li", 0),
            t.YNc(1, So, 7, 6, "li", 0)),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", !!e.tokenPoolInfo.ratio),
                t.xp6(1),
                t.Q6J("ngIf", !!e.tokenPoolInfo.amp)
            }
        }
        const Zo = function(n) {
            return {
                "link-container": n
            }
        };
        function Lo(n, i) {
            if (1 & n && (t.TgZ(0, "li", 43)(1, "a", 44),
            t._UZ(2, "img", 45),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(4, Zo, !e.mobile)),
                t.xp6(3),
                t.hij(" ", t.lcZ(4, 2, "pair_explorer.usd_bonded"), " ")
            }
        }
        let Io = (()=>{
            class n extends s.K9 {
                constructor(e) {
                    super(),
                    this._cdRef = e,
                    this.exchangeVersion = null,
                    this.hasPoolRatios = !1,
                    this.hasFeePercentagePools = !1,
                    this.volumeChecked = !1,
                    this.volume24h = null,
                    this.mobile = !1,
                    this.mobileCollapsed = !0,
                    this.isUpdatingInfo = !1,
                    this.isInfoCollapsed = !0,
                    this.liquidityLockList = new t.vpe,
                    this.unknownDex = c.D0O
                }
                ngOnInit() {
                    this.isLiquidityLockSupported = c.CXF.getChainData(this.chain).liquidityProviderSupported
                }
                onDestroy() {}
                toggleMobileCollapsed() {
                    this.mobileCollapsed = !this.mobileCollapsed,
                    this._cdRef.detectChanges()
                }
                toggleInfoCollapsed() {
                    this.isInfoCollapsed = !this.isInfoCollapsed,
                    this._cdRef.detectChanges()
                }
                getFeraRisk(e) {
                    switch (e) {
                    case 0:
                        return "low";
                    case 1:
                        return "medium";
                    case 2:
                        return "high"
                    }
                    return null
                }
                get defaultExchange() {
                    return c.bAW
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-pool-info"]],
                inputs: {
                    exchange: "exchange",
                    exchangeVersion: "exchangeVersion",
                    chain: "chain",
                    tokenData: "tokenData",
                    hasPoolRatios: "hasPoolRatios",
                    hasFeePercentagePools: "hasFeePercentagePools",
                    volumeChecked: "volumeChecked",
                    volume24h: "volume24h",
                    mobile: "mobile",
                    mobileCollapsed: "mobileCollapsed",
                    isUpdatingInfo: "isUpdatingInfo",
                    tokenPoolInfo: "tokenPoolInfo",
                    pairSelected: "pairSelected"
                },
                outputs: {
                    liquidityLockList: "liquidityLockList"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 34,
                vars: 2,
                consts: [[4, "ngIf"], ["totalLiquidity", ""], ["volume24hrs", ""], ["pooled", ""], ["marketTotalCap", ""], ["totalTx", ""], ["holders", ""], ["pooledToken", ""], ["circulatingSupply", ""], ["poolCreated", ""], ["totalSupply", ""], ["maxSupply", ""], ["pooledPercent", ""], ["tokenValue", ""], ["marketCap", ""], ["poolRatios", ""], ["usdBoundedTemplate", ""], [1, "pool-info-mobile-container"], [3, "ngTemplateOutlet"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"], [3, "icon"], [1, "pool-info-container"], [1, "pool-info"], ["class", "pool-name", 4, "ngIf"], ["class", "unknown-link", "href", "https://docs.google.com/forms/d/e/1FAIpQLSd8Uj2r5zeURx-i6CvRRfipvoOzIHHH2XvqasbiAAbAnZW8DQ/viewform?usp=share_link", "target", "_blank", "rel", "noopener", 4, "ngIf"], [3, "hidden"], [1, "extra-information"], ["tabindex", "0", "role", "button", 1, "mt-0", "more-info-button", 3, "click", "keyup.enter"], [1, "icon", "ms-1", 3, "icon"], [1, "pool-name"], ["icon", "info-circle", "placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["icon", "info-circle", "placement", "top", 3, "ngbTooltip"], ["href", "https://docs.google.com/forms/d/e/1FAIpQLSd8Uj2r5zeURx-i6CvRRfipvoOzIHHH2XvqasbiAAbAnZW8DQ/viewform?usp=share_link", "target", "_blank", "rel", "noopener", 1, "unknown-link"], [1, "reduce-margin"], [3, "chain", "tokenData", "pairSelected", "totalSupply", "liquidityLockList", 4, "ngIf"], ["class", "info-separator", 4, "ngIf"], [3, "chain", "tokenData", "pairSelected", "totalSupply", "liquidityLockList"], [1, "info-separator"], ["placement", "top", 3, "ngbTooltip"], ["class", "collapsed-mcap-title", 4, "ngIf"], [1, "collapsed-mcap-title"], [3, "ngClass"], ["href", "https://syncbond.com/", "rel", "noopener", "tabindex", "-1", "target", "_blank"], ["height", "16", "src", "assets/img/sync.png", "alt", "syncbond logo"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, Dn, 13, 7, "ng-container", 0),
                    t.YNc(1, Hn, 37, 34, "ng-container", 0),
                    t.YNc(2, Vn, 1, 1, "ng-template", null, 1, t.W1O),
                    t.YNc(4, Kn, 7, 6, "ng-template", null, 2, t.W1O),
                    t.YNc(6, to, 1, 1, "ng-template", null, 3, t.W1O),
                    t.YNc(8, ao, 1, 1, "ng-template", null, 4, t.W1O),
                    t.YNc(10, ro, 1, 1, "ng-template", null, 5, t.W1O),
                    t.YNc(12, lo, 1, 1, "ng-template", null, 6, t.W1O),
                    t.YNc(14, _o, 1, 1, "ng-template", null, 7, t.W1O),
                    t.YNc(16, po, 1, 1, "ng-template", null, 8, t.W1O),
                    t.YNc(18, mo, 1, 1, "ng-template", null, 9, t.W1O),
                    t.YNc(20, fo, 1, 1, "ng-template", null, 10, t.W1O),
                    t.YNc(22, bo, 1, 1, "ng-template", null, 11, t.W1O),
                    t.YNc(24, xo, 1, 1, "ng-template", null, 12, t.W1O),
                    t.YNc(26, Oo, 1, 1, "ng-template", null, 13, t.W1O),
                    t.YNc(28, To, 1, 1, "ng-template", null, 14, t.W1O),
                    t.YNc(30, Ao, 2, 2, "ng-template", null, 15, t.W1O),
                    t.YNc(32, Lo, 5, 6, "ng-template", null, 16, t.W1O)),
                    2 & e && (t.Q6J("ngIf", !!o.tokenData && o.mobile),
                    t.xp6(1),
                    t.Q6J("ngIf", !!o.tokenData && !o.mobile))
                },
                dependencies: [p.O5, p.tP, u.uH, u.BN, b._L, wn, p.mk, p.JJ, C.yl, C.WA, h.aw, h.X$],
                styles: ['ul-container[_ngcontent-%COMP%], .link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:0;padding-inline-start:0}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:1rem 1rem 0 0;color:#142028;padding:1.2rem}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]{color:#142028}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:flex;margin-bottom:.5rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;flex-direction:column;text-transform:uppercase}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.125rem;height:1.125rem;border-radius:50%;background:#fff;margin-right:.3125rem}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]{font-size:12px;color:#818ea3;display:flex;gap:.4375rem;align-items:center}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]{color:#818ea3}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:12px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .pool-name[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{overflow-wrap:break-word;display:flex;flex-direction:column;gap:.125rem}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:50%;font-size:12px;margin-bottom:0}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;display:inline-block;width:50%;overflow:hidden;text-overflow:ellipsis}.pool-info-container[_ngcontent-%COMP%]   .pool-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-right:.5rem;width:auto}.pool-info-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:0}.pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{border-radius:0 0 .75rem .75rem;text-align:center;cursor:pointer;padding:.375rem;width:100%;background-color:#e2e7ec;color:#3d5170;font-size:12px}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]{color:#3d5170}.pool-info-container[_ngcontent-%COMP%]   button.more-info-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:12px}.pool-info-mobile-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem;width:100%;font-size:12px;line-height:1.125rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#142028}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0;margin-right:.125rem}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170;text-overflow:ellipsis;overflow:hidden}body.dark-theme   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}.pool-info-mobile-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child){flex-direction:column}.pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0;background-color:transparent;border:0;margin-left:.5rem;display:flex;align-content:center;justify-content:center}.pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{border-radius:3.125rem;display:flex;align-items:center;justify-content:center;font-size:.625rem;width:1rem;height:1rem;background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .pool-info-mobile-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.info-separator[_ngcontent-%COMP%]{padding:0 .0625rem;font-size:12px;line-height:1.125rem;display:flex;flex:1;justify-content:center}.info-separator[_ngcontent-%COMP%]:after{content:"";border-right:.0625rem solid;border-color:#142028;max-height:.75rem;margin-top:.1875rem}body.dark-theme   [_nghost-%COMP%]   .info-separator[_ngcontent-%COMP%]:after{border-color:#fff}body.dark-theme[_ngcontent-%COMP%]   .info-separator[_ngcontent-%COMP%]:after{border-color:#fff}body.light   [_nghost-%COMP%]   .info-separator[_ngcontent-%COMP%]:after{border-color:#142028}body.light[_ngcontent-%COMP%]   .info-separator[_ngcontent-%COMP%]:after{border-color:#142028}.link-container[_ngcontent-%COMP%]{border-top:.0625rem solid;border-color:#e2e7ec;margin-top:.5rem;padding-top:.5rem}body.dark-theme   [_nghost-%COMP%]   .link-container[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .link-container[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .link-container[_ngcontent-%COMP%]{border-color:#e2e7ec}.link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;display:flex;width:50%;overflow:hidden;text-overflow:ellipsis;align-items:center}.link-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;display:inline-block;width:50%;overflow:hidden;text-overflow:ellipsis}.link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-top:.0625rem solid;border-color:#e2e7ec;margin-top:.5rem;padding-top:.5rem;display:flex}body.dark-theme   [_nghost-%COMP%]   .link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-color:#e2e7ec}.link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;width:100%}.link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;display:flex;width:50%;overflow:hidden;text-overflow:ellipsis;align-items:center}.link-container-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;display:inline-block;width:50%;overflow:hidden;text-overflow:ellipsis}.unknown-link[_ngcontent-%COMP%]{display:flex;margin-top:-.375rem;margin-bottom:.5rem;font-size:.6875rem;font-weight:400;gap:.25rem;align-items:center}.unknown-link[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.625rem}.reduce-margin[_ngcontent-%COMP%]{margin-bottom:-.3rem}'],
                data: {
                    animation: [(0,
                    y.X$)("simpleFadeAnimation", [(0,
                    y.eR)("*=>*", [(0,
                    y.oB)({
                        opacity: 0
                    }), (0,
                    y.jt)(600)])])]
                },
                changeDetection: 0
            }),
            n
        }
        )();
        const Do = function(n, i) {
            return {
                "background-color": n,
                color: i
            }
        }
          , Eo = function(n, i) {
            return {
                value: n,
                maxValue: i
            }
        };
        function Jo(n, i) {
            if (1 & n && (t.TgZ(0, "div", 13)(1, "span"),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngStyle", t.WLB(6, Do, e.alertLimitStatusBackgroundColor, e.alertLimitStatus.color)),
                t.xp6(2),
                t.Oqu(e.alertLimitStatus.icon),
                t.xp6(2),
                t.Oqu(t.xi3(5, 3, e.alertLimitStatus.description, t.WLB(9, Eo, e.currentNumberAlerts, e.maxAlerts)))
            }
        }
        function Uo(n, i) {
            1 & n && t._UZ(0, "fa-icon", 14)
        }
        const No = function() {
            return ["fal", "times"]
        }
          , qo = function(n) {
            return {
                isEdit: n
            }
        }
          , Qo = function(n) {
            return {
                maxValue: n
            }
        };
        let Fo = (()=>{
            class n extends s.K9 {
                get currentPrice() {
                    return this._currentPrice
                }
                set currentPrice(e) {
                    this._currentPrice = e,
                    this._cdRef.markForCheck()
                }
                set editPrice(e) {
                    this._editPrice = e,
                    this._isRender$.asObservable().pipe((0,
                    s.sL)(this)).subscribe({
                        complete: ()=>{
                            void 0 !== e && this.alertForm.controls.price.setValue(s.C6.toFixed(e).slice(0, 25))
                        }
                    })
                }
                get editPrice() {
                    return this._editPrice
                }
                constructor(e, o, a) {
                    super(),
                    this.modal = e,
                    this._fb = o,
                    this._cdRef = a,
                    this._isRender$ = new E.x,
                    this._currentPrice = 0,
                    this.numberAlerts = 0,
                    this.progressChangeList = [],
                    this.alertForm = this._fb.group({
                        price: new m.NI("",{
                            nonNullable: !0,
                            validators: [m.kI.required, m.kI.pattern(s.LC.REGEX_ONLY_REAL)]
                        })
                    })
                }
                ngAfterViewInit() {
                    this._isRender$.complete()
                }
                onDestroy() {}
                get currentNumberAlerts() {
                    return this.numberAlerts + 1
                }
                get alertLimitStatus() {
                    return this.progressChangeList.find(e=>this.currentNumberAlerts <= e.maxValue && this.currentNumberAlerts >= e.minValue)
                }
                get alertLimitStatusBackgroundColor() {
                    return s.lM.hexToRGB(this.alertLimitStatus.color, .4)
                }
                setCurrentPrice() {
                    const e = s.C6.toFixed(this._currentPrice).slice(0, 25);
                    this.alertForm.controls.price.setValue(e),
                    this._cdRef.detectChanges()
                }
                close(e="") {
                    if ("close" === e)
                        this.modal.close(e);
                    else {
                        const o = e.replace(/,/g, "");
                        this.modal.close(o)
                    }
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.Kz),t.Y36(m.qu),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-price-alert-modal"]],
                inputs: {
                    currentPrice: "currentPrice",
                    maxAlerts: "maxAlerts",
                    editPrice: "editPrice",
                    numberAlerts: "numberAlerts",
                    progressChangeList: "progressChangeList"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 29,
                vars: 35,
                consts: [[1, "modal-body", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"], [1, "header-title", 3, "ngClass"], ["class", "alert-status", 3, "ngStyle", 4, "ngIf"], [3, "formGroup"], ["appRestrictInput", "^[0-9.]*$", "type", "text", "formControlName", "price", "id", "price", "maxlength", "25", 1, "form-control", 3, "ngClass", "placeholder"], [1, "current-price"], ["href", "javascript:", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-cancel", "me-1", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["icon", "plus", 4, "ngIf"], [1, "alert-status", 3, "ngStyle"], ["icon", "plus"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "button", 1),
                    t.NdJ("click", function() {
                        return o.close("close")
                    }),
                    t._UZ(2, "fa-icon", 2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "div", 3)(5, "h4"),
                    t._uU(6),
                    t.ALo(7, "translate"),
                    t.qZA(),
                    t.TgZ(8, "span"),
                    t._uU(9),
                    t.ALo(10, "translate"),
                    t.qZA()(),
                    t.YNc(11, Jo, 6, 12, "div", 4),
                    t.TgZ(12, "div")(13, "form", 5),
                    t._UZ(14, "input", 6),
                    t.ALo(15, "translate"),
                    t.qZA()(),
                    t.TgZ(16, "div", 7),
                    t._uU(17, "Current price: "),
                    t.TgZ(18, "a", 8),
                    t.NdJ("click", function() {
                        return o.setCurrentPrice()
                    }),
                    t._uU(19),
                    t.ALo(20, "appRoundPrices"),
                    t.qZA()()(),
                    t.TgZ(21, "div", 9)(22, "button", 10),
                    t.NdJ("click", function() {
                        return o.close("close")
                    }),
                    t._uU(23),
                    t.ALo(24, "translate"),
                    t.qZA(),
                    t.TgZ(25, "button", 11),
                    t.NdJ("click", function() {
                        return o.close(o.alertForm.controls.price.value)
                    }),
                    t.YNc(26, Uo, 1, 0, "fa-icon", 12),
                    t._uU(27),
                    t.ALo(28, "translate"),
                    t.qZA()()),
                    2 & e && (t.xp6(2),
                    t.Q6J("icon", t.DdM(30, No))("ngbTooltip", t.lcZ(3, 14, "home.close")),
                    t.xp6(2),
                    t.Q6J("ngClass", t.VKq(31, qo, !!o.editPrice)),
                    t.xp6(2),
                    t.Oqu(t.lcZ(7, 16, o.editPrice ? "pair_explorer.price_alert.edit_price_alert" : "pair_explorer.price_alert.set_price_alert")),
                    t.xp6(3),
                    t.Oqu(t.xi3(10, 18, "pair_explorer.price_alert.max_alerts", t.VKq(33, Qo, o.maxAlerts))),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.editPrice),
                    t.xp6(2),
                    t.Q6J("formGroup", o.alertForm),
                    t.xp6(1),
                    t.Q6J("ngClass", o.alertForm.controls.price.invalid ? "is-invalid" : "is-valid")("placeholder", t.lcZ(15, 21, "pair_explorer.price_alert.enter_target_price")),
                    t.xp6(5),
                    t.hij("$", t.xi3(20, 23, o.currentPrice, 4), ""),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(24, 26, "pair_explorer.price_alert.cancel"), " "),
                    t.xp6(2),
                    t.Q6J("disabled", o.alertForm.controls.price.invalid),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.editPrice),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(28, 28, o.editPrice ? "pair_explorer.price_alert.edit_alert" : "pair_explorer.price_alert.add_new_alert"), " "))
                },
                dependencies: [u.uH, u.BN, b._L, p.mk, p.O5, p.PC, m.u5, m._Y, m.Fj, m.JJ, m.JL, m.nD, m.UX, m.sg, m.u, C.pt, h.aw, h.X$, C.O7],
                styles: [".close[_ngcontent-%COMP%]{display:flex;margin-left:auto;margin-top:-1.0625rem;margin-right:-1.6875rem}button[_ngcontent-%COMP%]{border-radius:3.125rem;height:2.5rem}.btn-cancel[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{color:#142028}input[_ngcontent-%COMP%]{border-radius:.625rem;height:2.125rem}.current-price[_ngcontent-%COMP%]{margin-top:.625rem;font-size:.6875rem;color:#818ea3;display:flex;gap:.25rem}body.dark-theme   [_nghost-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]{color:#818ea3}.current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.header-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:.125rem;margin-bottom:.625rem}.header-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .header-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#818ea3}.header-title.isEdit[_ngcontent-%COMP%]{margin-bottom:1.25rem}.alert-status[_ngcontent-%COMP%]{padding:.625rem;display:flex;align-items:flex-start;align-content:center;gap:.125rem;border-radius:.625rem;margin-bottom:.875rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        const Ho = ["pairs_alert_table"];
        function Ro(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1, "*"),
            t.qZA())
        }
        function Yo(n, i) {
            if (1 & n && t._UZ(0, "div", 12),
            2 & n) {
                const e = t.oxw();
                t.Q6J("appLoading", e.loader || e.alertLoader)
            }
        }
        function Wo(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, e.price, 4))
            }
        }
        function Bo(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appDateFormat"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.matchedAt, "YYYY-MM-DD HH:mm:ss"), " ")
            }
        }
        function zo(n, i) {
            if (1 & n && t.YNc(0, Bo, 3, 4, "span", 4),
            2 & n) {
                const e = i.row;
                t.Q6J("ngIf", "matched" === e.state && e.matchedAt)
            }
        }
        function Vo(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appDateFormat"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.hij(" ", t.xi3(2, 1, e.matchedAtBrowser, "YYYY-MM-DD HH:mm:ss"), " ")
            }
        }
        function Go(n, i) {
            1 & n && t.YNc(0, Vo, 3, 4, "span", 4),
            2 & n && t.Q6J("ngIf", i.row.matchedAtBrowser)
        }
        function $o(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2);
                t.Tol(o.isExpired(e) ? "sell-color" : ""),
                t.xp6(1),
                t.hij(" ", o.isExpired(e) ? "Expired" : "-", " ")
            }
        }
        function jo(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row;
                t.Tol("expired" === e.state ? "sell-color" : ""),
                t.xp6(1),
                t.hij(" ", "expired" === e.state, " ")
            }
        }
        function Ko(n, i) {
            if (1 & n && (t.YNc(0, $o, 2, 3, "span", 20),
            t.YNc(1, jo, 2, 3, "span", 20)),
            2 & n) {
                const e = i.row;
                t.Q6J("ngIf", "expired" !== e.state),
                t.xp6(1),
                t.Q6J("ngIf", "expired" === e.state)
            }
        }
        function Xo(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 22),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw().row
                      , r = t.oxw(2);
                    return t.KtG(r.renewAlert(a))
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 23),
                t.qZA()
            }
            2 & n && t.Q6J("ngbTooltip", t.lcZ(1, 1, "pair_explorer.price_alert.reactivate"))
        }
        function ta(n, i) {
            if (1 & n && t.YNc(0, Xo, 3, 3, "button", 21),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Q6J("ngIf", !o.maxAlertsExceeded && (!!e.matchedAt || o.isExpired(e) || "matched" === e.state || "expired" === e.state))
            }
        }
        function ea(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 26),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw()
                      , r = a.rowIndex
                      , l = a.row
                      , _ = t.oxw(2);
                    return t.KtG(_.openPriceAlertModal(r, l.price, l._id))
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 27),
                t.qZA()
            }
            2 & n && t.Q6J("ngbTooltip", t.lcZ(1, 1, "pair_explorer.price_alert.edit_price_alert"))
        }
        function na(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div"),
                t.YNc(1, ea, 3, 3, "button", 24),
                t.TgZ(2, "button", 22),
                t.NdJ("click", function() {
                    const r = t.CHM(e).rowIndex
                      , l = t.oxw(2);
                    return t.KtG(l.deleteAlert(r))
                }),
                t.ALo(3, "translate"),
                t._UZ(4, "fa-icon", 25),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !e.maxAlertsExceeded),
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(3, 2, "pair_explorer.remove"))
            }
        }
        function oa(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable", 13, 14)(2, "ngx-datatable-column", 15),
            t.ALo(3, "translate"),
            t.YNc(4, Wo, 3, 4, "ng-template", 16),
            t.qZA(),
            t.TgZ(5, "ngx-datatable-column", 17),
            t.ALo(6, "translate"),
            t.YNc(7, zo, 1, 1, "ng-template", 16),
            t.qZA(),
            t.TgZ(8, "ngx-datatable-column", 18),
            t.ALo(9, "translate"),
            t.YNc(10, Go, 1, 1, "ng-template", 16),
            t.qZA(),
            t.TgZ(11, "ngx-datatable-column", 18),
            t.ALo(12, "translate"),
            t.YNc(13, Ko, 2, 2, "ng-template", 16),
            t.qZA(),
            t.TgZ(14, "ngx-datatable-column", 18),
            t.ALo(15, "translate"),
            t.YNc(16, ta, 1, 1, "ng-template", 16),
            t.qZA(),
            t.TgZ(17, "ngx-datatable-column", 19),
            t.ALo(18, "translate"),
            t.YNc(19, na, 5, 4, "ng-template", 16),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("scrollbarV", e.myAlerts.length > 10)("scrollbarH", !0)("columnMode", e.ColumnMode.force)("count", e.myAlerts.length)("footerHeight", e.myAlerts.length > 11 ? 50 : 0)("rows", e.myAlerts)("rowHeight", 50),
                t.xp6(2),
                t.Q6J("resizeable", !1)("width", 170)("minWidth", 170)("sortable", !1)("name", t.lcZ(3, 39, "pair_explorer.price_usd"))("frozenLeft", !0),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 180)("sortable", !1)("headerClass", e.isUserConnected ? "" : "disable-header-table")("name", t.lcZ(6, 41, "pair_explorer.price_alert.issued")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 140)("minWidth", 140)("sortable", !1)("name", t.lcZ(9, 43, "pair_explorer.price_alert.issued_browser")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 130)("sortable", !1)("name", t.lcZ(12, 45, "pair_explorer.price_alert.expired")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 80)("sortable", !1)("name", t.lcZ(15, 47, "pair_explorer.price_alert.reactivate")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 80)("sortable", !1)("name", t.lcZ(18, 49, "pair_explorer.options"))
            }
        }
        function aa(n, i) {
            1 & n && (t.ynx(0),
            t.TgZ(1, "div", 28),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.BQk()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_explorer.price_alert.not_supported")))
        }
        function ia(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "span"),
                t._uU(1),
                t.ALo(2, "translate"),
                t.TgZ(3, "a", 29),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw().openSettings.emit(),
                    t.KtG(!1)
                }),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t._uU(6),
                t.ALo(7, "translate"),
                t._UZ(8, "br"),
                t.qZA()
            }
            2 & n && (t.xp6(1),
            t.hij(" * ", t.lcZ(2, 3, "pair_explorer.price_alert.activate_notifications_1"), " "),
            t.xp6(3),
            t.hij(" ", t.lcZ(5, 5, "pair_explorer.price_alert.activate_notifications_2"), " "),
            t.xp6(2),
            t.hij(" ", t.lcZ(7, 7, "pair_explorer.price_alert.activate_notifications_3"), " "))
        }
        function ra(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1, "*"),
            t.qZA())
        }
        function ca(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, ra, 2, 0, "span", 4),
                t._uU(2),
                t.ALo(3, "translate"),
                t.TgZ(4, "a", 29),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw().openSettings.emit(),
                    t.KtG(!1)
                }),
                t._uU(5),
                t.ALo(6, "translate"),
                t.qZA(),
                t._uU(7),
                t.ALo(8, "translate"),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !e.notifications && (null == e.notificationsStatus ? null : e.notificationsStatus.supported)),
                t.xp6(1),
                t.hij(" * ", t.lcZ(3, 4, "pair_explorer.price_alert.tg_1"), " "),
                t.xp6(3),
                t.hij(" ", t.lcZ(6, 6, "pair_explorer.price_alert.tg_2"), " "),
                t.xp6(2),
                t.hij(" ", t.lcZ(8, 8, "pair_explorer.price_alert.tg_3"), " ")
            }
        }
        function la(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1, "*"),
            t.qZA())
        }
        function sa(n, i) {
            1 & n && (t.ynx(0),
            t._uU(1, " * "),
            t.BQk())
        }
        function _a(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div"),
                t.YNc(2, la, 2, 0, "span", 4),
                t._uU(3, " *"),
                t.YNc(4, sa, 2, 0, "ng-container", 4),
                t._uU(5),
                t.ALo(6, "translate"),
                t.TgZ(7, "a", 29),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw().openSettings.emit(),
                    t.KtG(!1)
                }),
                t._uU(8),
                t.ALo(9, "translate"),
                t.qZA(),
                t._uU(10),
                t.ALo(11, "translate"),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngIf", !e.notifications && (null == e.notificationsStatus ? null : e.notificationsStatus.supported)),
                t.xp6(2),
                t.Q6J("ngIf", !e.alertsStatus.telegram),
                t.xp6(1),
                t.hij(" ", t.lcZ(6, 5, "pair_explorer.price_alert.mail_1"), " "),
                t.xp6(3),
                t.hij(" ", t.lcZ(9, 7, "pair_explorer.price_alert.mail_2"), " "),
                t.xp6(2),
                t.hij(" ", t.lcZ(11, 9, "pair_explorer.price_alert.mail_3"), " ")
            }
        }
        function ga(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1, "*"),
            t.qZA())
        }
        function pa(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, ga, 2, 0, "span", 4),
            t._uU(2),
            t.ALo(3, "translate"),
            t.BQk()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !e.notifications && (null == e.notificationsStatus ? null : e.notificationsStatus.supported)),
                t.xp6(1),
                t.hij(" * ", t.lcZ(3, 2, "pair_explorer.price_alert.not_holder"), " ")
            }
        }
        function da(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "button", 30),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.openPriceAlertModal())
                }),
                t._UZ(2, "fa-icon", 31),
                t._uU(3),
                t.ALo(4, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("disabled", e.maxAlertsReached || e.alertLoader || e.loader),
                t.xp6(2),
                t.hij(" ", t.lcZ(4, 2, "pair_explorer.price_alert.add_new_alert"), " ")
            }
        }
        const ha = function(n) {
            return {
                tokenName: n
            }
        }
          , ma = function(n) {
            return {
                "background-color": n
            }
        }
          , ua = function() {
            return {
                width: 3
            }
        }
          , fa = function(n) {
            return {
                color: n
            }
        }
          , Ca = function(n) {
            return {
                items: n
            }
        }
          , ba = function(n) {
            return {
                maxValue: n
            }
        };
        let Pa = (()=>{
            class n extends s.K9 {
                set isUserConnected(e) {
                    this._isUserConnected = e,
                    e ? (this.maxAlerts = c.ImM,
                    this.progressChangeList = [{
                        ...this.progressChangeList[0],
                        maxValue: 148,
                        minValue: 0
                    }, {
                        ...this.progressChangeList[1],
                        maxValue: 169,
                        minValue: 149
                    }, {
                        ...this.progressChangeList[2],
                        maxValue: c.ImM,
                        minValue: 170
                    }]) : (this.maxAlerts = 5,
                    this.progressChangeList = [{
                        ...this.progressChangeList[0],
                        maxValue: 2,
                        minValue: 0
                    }, {
                        ...this.progressChangeList[1],
                        maxValue: 4,
                        minValue: 3
                    }, {
                        ...this.progressChangeList[2],
                        maxValue: 5,
                        minValue: 4
                    }]),
                    this._cdRef.detectChanges()
                }
                get isUserConnected() {
                    return this._isUserConnected
                }
                get tokenData() {
                    return this._tokenData
                }
                set tokenData(e) {
                    this._tokenData = {
                        ...e
                    },
                    this._componentModalRef && this._componentModalRef.componentInstance && (this._componentModalRef.componentInstance.currentPrice = e?.priceUSD),
                    this._cdRef.detectChanges()
                }
                set toggleFav(e) {
                    this._recalculate()
                }
                set fullScreen(e) {
                    this._recalculate()
                }
                set showFavoritesColumn(e) {
                    this._recalculate()
                }
                get maxAlertsReached() {
                    return !!this._maxAlertsReached || this.maxAlerts - this.totalAlerts <= 0
                }
                get maxAlertsExceeded() {
                    return this.maxAlerts - this.totalAlerts < 0
                }
                onResize() {
                    this._recalculate()
                }
                constructor(e, o, a, r) {
                    super(),
                    this._priceAlertsService = e,
                    this._cdRef = o,
                    this._modalService = a,
                    this._settingsService = r,
                    this._isUserConnected = !1,
                    this.alertsStatus = {
                        email: !1,
                        telegram: !1
                    },
                    this.loader = !1,
                    this.pairSelected = null,
                    this.notificationsStatus = {
                        enabled: !1,
                        granted: !1,
                        supported: !1
                    },
                    this.alertLoader = !1,
                    this.openSettings = new t.vpe,
                    this.myAlerts = [],
                    this.totalAlerts = 0,
                    this.maxAlerts = c.ImM,
                    this._maxAlertsReached = !1,
                    this.ColumnMode = x.hq,
                    this.progressChangeList = [{
                        maxValue: 148,
                        minValue: 0,
                        color: "#00B8D8",
                        icon: "\u{1f680}",
                        description: "pair_explorer.price_alert.limit_1"
                    }, {
                        maxValue: 169,
                        minValue: 149,
                        color: "#EFB90A",
                        icon: "\u26a0",
                        description: "pair_explorer.price_alert.limit_2"
                    }, {
                        maxValue: c.ImM,
                        minValue: 170,
                        color: "#EA3943",
                        icon: "\u203c",
                        description: "pair_explorer.price_alert.limit_3"
                    }]
                }
                ngOnInit() {
                    this._settingsService.getConfigChanged$("notifications").pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        this.notifications = e,
                        this._cdRef.detectChanges()
                    }
                    ),
                    this.shouldHideAlerts || this._initAlerts()
                }
                isExpired(e) {
                    return this._priceAlertsService.isExpired(e)
                }
                isMobileDevice() {
                    return s.lM.isMobileDevice()
                }
                deleteAlert(e) {
                    const o = this.myAlerts[e];
                    this.alertLoader = !0,
                    this._priceAlertsService.deleteAlertNotification(o, this.chain).pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._maxAlertsReached = !1,
                        this._initAlerts()
                    }
                    ),
                    this._cdRef.detectChanges()
                }
                saveEditAlert(e, o, a) {
                    const r = Number.parseFloat(e);
                    let _, l = {};
                    o ? (_ = this.myAlerts[a],
                    null != _ && (l = {
                        ..._
                    })) : l = {
                        pair: this.pairSelected || void 0,
                        symbol: this.tokenData.symbol,
                        chain: this.chain,
                        type: null,
                        wallet: null
                    },
                    l.price = r,
                    l.matchedAt = void 0,
                    l.matchedAtBrowser = void 0,
                    l.expiredAt = void 0,
                    l.state = "pending",
                    l.createdAt = new Date,
                    l.alertType = r > this.tokenData.priceUSD ? 0 : 1,
                    l._id = o,
                    this.alertLoader = !0,
                    this._priceAlertsService.postAlertNotification(l, _).pipe((0,
                    s.sL)(this), (0,
                    M.b)(d=>{
                        "Max alerts reached" === d && (this._maxAlertsReached = !0),
                        this._initAlerts()
                    }
                    )).subscribe(),
                    this._cdRef.detectChanges()
                }
                renewAlert(e) {
                    this.alertLoader = !0;
                    const o = {
                        ...e,
                        symbol: this.tokenData.symbol
                    };
                    o.expiredAt = void 0,
                    o.matchedAt = void 0,
                    o.matchedAtBrowser = void 0,
                    o.state = "pending",
                    o.createdAt = new Date(e.createdAt),
                    o.alertType = e.price > this.tokenData.priceUSD ? 0 : 1,
                    o._id = e._id,
                    this._priceAlertsService.postAlertNotification(o, e).pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._initAlerts()
                    }
                    )
                }
                _initAlerts() {
                    this.alertLoader = !0,
                    this._priceAlertsService.refreshAlertsCountersForAllChains().pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this.totalAlerts = this._priceAlertsService.getAlertsCounterByChain(this.chain),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._priceAlertsService.getStoredPairPriceAlerts(this.chain, this.pairSelected).pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        const o = e.get(this.pairSelected ?? "");
                        this.myAlerts = o && o.length > 0 ? [...o] : []
                    }
                    )).subscribe(()=>{
                        null != this.pairSelected && this._priceAlertsService.setCheckedPair(this.pairSelected, this.chain),
                        this.alertLoader = !1,
                        this._recalculate(),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._priceAlertsService.priceAlertsIssued$.pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        const o = e.filter(r=>r.pair !== this.pairSelected).filter(r=>{
                            const l = this._priceAlertsService.getUncheckedPriceAlerts(r.pair, this.chain).lastChecked
                              , _ = new Date(l ?? 0);
                            return !l || new Date(r.matchedAt ?? 0) > _ || new Date(r.matchedAtBrowser ?? 0) > _
                        }
                        ).map(r=>r.pair);
                        for (const r of o)
                            this._priceAlertsService.addUncheckedPriceAlert(r);
                        let a = !1;
                        for (const r of e)
                            for (const l of this.myAlerts)
                                if (r._id === l._id) {
                                    l.state = r.state,
                                    l.matchedAtBrowser = r.matchedAtBrowser,
                                    l.matchedAt = r.matchedAt,
                                    a = !0;
                                    break
                                }
                        a && (this.myAlerts = [...this.myAlerts],
                        this._cdRef.detectChanges())
                    }
                    )).subscribe()
                }
                openPriceAlertModal(e, o, a) {
                    this.maxAlertsReached && null == a || (this._componentModalRef = this._modalService.open(Fo, {
                        centered: !0,
                        scrollable: !0,
                        keyboard: null != this.pairSelected,
                        backdrop: null != this.pairSelected || "static"
                    }),
                    this._componentModalRef.componentInstance.numberAlerts = this.totalAlerts,
                    this._componentModalRef.componentInstance.editPrice = o,
                    this._componentModalRef.componentInstance.progressChangeList = this.progressChangeList,
                    this._componentModalRef.componentInstance.currentPrice = this.tokenData?.priceUSD,
                    this._componentModalRef.componentInstance.maxAlerts = this.maxAlerts,
                    (0,
                    rt.D)(this._componentModalRef.result).pipe((0,
                    s.sL)(this)).subscribe(r=>{
                        "close" !== r && (a ? this.saveEditAlert(r, a, e) : this.saveEditAlert(r)),
                        this._componentModalRef = null,
                        this._cdRef.detectChanges()
                    }
                    ))
                }
                get alertLimitStatus() {
                    return this.maxAlertsExceeded ? this.progressChangeList[this.progressChangeList.length - 1] : this.progressChangeList.find(e=>this.myAlerts.length <= e.maxValue && this.myAlerts.length >= e.minValue && 0 !== e.minValue) ?? null
                }
                get alertLimitStatusBackgroundColor() {
                    const e = this.alertLimitStatus;
                    return e ? s.lM.hexToRGB(e.color, .3) : null
                }
                onDestroy() {}
                _recalculate() {
                    this.table && this.table.recalculate()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(c.Pld),t.Y36(t.sBO),t.Y36(b.FF),t.Y36(f.gb))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-price-alerts"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(Ho, 5),
                    2 & e) {
                        let a;
                        t.iGM(a = t.CRH()) && (o.table = a.first)
                    }
                },
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    isUserConnected: "isUserConnected",
                    alertsStatus: "alertsStatus",
                    tokenData: "tokenData",
                    loader: "loader",
                    pairSelected: "pairSelected",
                    chain: "chain",
                    notificationsStatus: "notificationsStatus",
                    shouldHideAlerts: "shouldHideAlerts",
                    toggleFav: "toggleFav",
                    fullScreen: "fullScreen",
                    showFavoritesColumn: "showFavoritesColumn"
                },
                outputs: {
                    openSettings: "openSettings"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 31,
                vars: 45,
                consts: [[1, "card-body", "p-0", "pb-1"], [1, "header-price-alerts"], [1, "info-price-alerts"], [1, "title"], [4, "ngIf"], [1, "limit-alerts-container", 3, "ngStyle"], [1, "progress-limit"], [3, "height", "maxValue", "value", "progressChanges", "strokeProps"], [3, "ngStyle"], ["class", "loading", 3, "appLoading", 4, "ngIf"], ["class", "material", 3, "scrollbarV", "scrollbarH", "columnMode", "count", "footerHeight", "rows", "rowHeight", 4, "ngIf"], [1, "card-footer"], [1, "loading", 3, "appLoading"], [1, "material", 3, "scrollbarV", "scrollbarH", "columnMode", "count", "footerHeight", "rows", "rowHeight"], ["pairs_alert_table", ""], [3, "resizeable", "width", "minWidth", "sortable", "name", "frozenLeft"], ["ngx-datatable-cell-template", ""], [3, "resizeable", "width", "minWidth", "sortable", "headerClass", "name"], [3, "resizeable", "width", "minWidth", "sortable", "name"], ["headerClass", "right-column-table", "cellClass", "right-column-table", 3, "resizeable", "width", "minWidth", "sortable", "name"], [3, "class", 4, "ngIf"], ["type", "button", "class", "button-option", "placement", "auto", 3, "ngbTooltip", "click", 4, "ngIf"], ["type", "button", "placement", "auto", 1, "button-option", 3, "ngbTooltip", "click"], ["icon", "redo"], ["type", "button", "class", "button-option me-1", "placement", "auto", 3, "ngbTooltip", "click", 4, "ngIf"], ["icon", "trash-can"], ["type", "button", "placement", "auto", 1, "button-option", "me-1", 3, "ngbTooltip", "click"], ["icon", "edit"], [1, "text-center", "mt-3"], ["href", "javascript:", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["icon", "plus"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.YNc(6, Ro, 2, 0, "span", 4),
                    t.qZA(),
                    t.TgZ(7, "span"),
                    t._uU(8),
                    t.ALo(9, "translate"),
                    t.qZA()(),
                    t.TgZ(10, "div")(11, "div", 5)(12, "div", 6),
                    t._UZ(13, "app-progress-circle", 7),
                    t.TgZ(14, "span"),
                    t._uU(15),
                    t.qZA()(),
                    t.TgZ(16, "span", 8),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.ALo(19, "translate"),
                    t.qZA()()()(),
                    t.YNc(20, Yo, 1, 1, "div", 9),
                    t.YNc(21, oa, 20, 51, "ngx-datatable", 10),
                    t.YNc(22, aa, 4, 3, "ng-container", 4),
                    t.qZA(),
                    t.TgZ(23, "div", 11)(24, "div"),
                    t.YNc(25, ia, 9, 9, "span", 4),
                    t.TgZ(26, "span"),
                    t.YNc(27, ca, 9, 10, "ng-container", 4),
                    t.YNc(28, _a, 12, 11, "ng-container", 4),
                    t.YNc(29, pa, 4, 4, "ng-container", 4),
                    t.qZA()(),
                    t.YNc(30, da, 5, 4, "div", 4),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Akn(o.notificationsStatus.granted ? null : "border:none"),
                    t.xp6(3),
                    t.hij(" ", t.xi3(5, 23, "pair_explorer.price_alert.title", t.VKq(34, ha, o.tokenData ? o.tokenData.symbol : "")), " "),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.notifications || !o.notificationsStatus || !o.notificationsStatus.granted),
                    t.xp6(2),
                    t.Oqu(t.lcZ(9, 26, "pair_explorer.price_alert.info")),
                    t.xp6(3),
                    t.Q6J("ngStyle", t.VKq(36, ma, o.alertLimitStatusBackgroundColor)),
                    t.xp6(2),
                    t.Q6J("height", 20)("maxValue", o.maxAlerts)("value", o.totalAlerts)("progressChanges", o.progressChangeList)("strokeProps", t.DdM(38, ua)),
                    t.xp6(2),
                    t.AsE("", o.totalAlerts, "/", o.maxAlerts, ""),
                    t.xp6(1),
                    t.Q6J("ngStyle", t.VKq(39, fa, o.alertLimitStatus ? o.alertLimitStatus.color : null)),
                    t.xp6(1),
                    t.hij(" ", o.alertLimitStatus ? t.xi3(18, 28, "pair_explorer.price_alert.alerts_left", t.VKq(41, Ca, o.maxAlertsReached ? 0 : o.maxAlerts - o.totalAlerts)) : t.xi3(19, 31, "pair_explorer.price_alert.set_max_alerts", t.VKq(43, ba, o.maxAlerts)), " "),
                    t.xp6(3),
                    t.Q6J("ngIf", o.loader || o.alertLoader),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.alertLoader && !o.loader && (o.myAlerts.length > 0 || (null == o.notificationsStatus ? null : o.notificationsStatus.granted) || o.isUserConnected && (o.alertsStatus.email || o.alertsStatus.telegram))),
                    t.xp6(1),
                    t.Q6J("ngIf", !(null != o.notificationsStatus && o.notificationsStatus.supported)),
                    t.xp6(3),
                    t.Q6J("ngIf", !o.notifications && (null == o.notificationsStatus ? null : o.notificationsStatus.supported)),
                    t.xp6(2),
                    t.Q6J("ngIf", o.isUserConnected && !o.alertsStatus.telegram),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isUserConnected && !o.alertsStatus.email),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.isUserConnected),
                    t.xp6(1),
                    t.Q6J("ngIf", o.alertsStatus.telegram || o.alertsStatus.email || o.notifications && (null == o.notificationsStatus ? null : o.notificationsStatus.granted)))
                },
                dependencies: [p.O5, p.PC, P.cV, P.TH, x.xD, x.nE, x.UC, x.vq, b._L, u.uH, u.BN, C.Ek, C.pt, h.aw, h.X$],
                styles: ["thead[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important;color:#142028}body.dark-theme   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#142028}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}.card-footer[_ngcontent-%COMP%]{font-size:12px;display:flex;justify-content:space-between;align-items:center;color:#142028}body.dark-theme   [_nghost-%COMP%]   .card-footer[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .card-footer[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{color:#142028}.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:1.5rem;height:2.5rem}@media (max-width: 599px){.card-footer[_ngcontent-%COMP%]{padding:1.2rem 1rem;gap:.625rem;flex-direction:column-reverse;align-items:flex-end}}.card-body[_ngcontent-%COMP%]{overflow-x:auto;padding-left:1rem!important;padding-right:1rem!important}@media (max-width: 599px){.card-body[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}}td[_ngcontent-%COMP%]{font-size:12px;border:none}@media (max-width: 599px){td[_ngcontent-%COMP%]{min-width:11.25rem}}td.options[_ngcontent-%COMP%]{min-width:0}td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-right:.75rem}tr[_ngcontent-%COMP%]{border-color:#e2e7ec;border-bottom:.0625rem solid}body.dark-theme   [_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]     .card-footer{border-top-color:#23323c!important}.header-price-alerts[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.625rem 0 .9375rem;border-color:#e2e7ec;border-bottom:1px solid}@media (max-width: 599px){.header-price-alerts[_ngcontent-%COMP%]{padding:.625rem .625rem .9375rem}}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]{border-color:#e2e7ec}.header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:16px;line-height:22px;color:#142028;line-height:24px}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}.header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170;font-size:.625rem;margin-top:.25rem}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .info-price-alerts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}.header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]{border-radius:.625rem;background-color:#e2e7ec;padding:.3125rem .625rem}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]{justify-content:flex-end;display:flex;align-items:center;gap:.375rem}.header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:16px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   .progress-limit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}.header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.625rem;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .header-price-alerts[_ngcontent-%COMP%]   .limit-alerts-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}.button-option[_ngcontent-%COMP%]{background:none;border:none;font-size:14px}.button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}.button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#cacedb}body.light   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}body.light[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .button-option[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}[_nghost-%COMP%]     .ngx-datatable.material{max-height:calc(100vh - 288px);min-height:0;height:auto}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover{background-color:transparent}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028;border-color:#e2e7ec;background-color:#f4f5f6!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#e2e7ec}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-row-left{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028;border-color:#e2e7ec;background-color:#f4f5f6!important;background-image:none}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#e2e7ec}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{border-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-row-left{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{color:#142028!important}[_nghost-%COMP%]     .ngx-datatable.material .empty-row{font-size:13px;font-weight:400}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer{border:none}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .datatable-body-row .datatable-row-group .datatable-body-cell{display:flex;align-items:center}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028;border-color:#e2e7ec;font-weight:400;font-size:13px;box-shadow:none;border-bottom:.0625rem solid}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#fff!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#142028!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell.disable-header-table{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell.disable-header-table{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell.disable-header-table{color:#818ea3!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell.disable-header-table{color:#818ea3!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell.disable-header-table{color:#818ea3!important}.btn-primary[_ngcontent-%COMP%]{color:#fff}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function xa(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij("(", e.tokenVotes.total, " votes)")
            }
        }
        function Ma(n, i) {
            1 & n && (t._UZ(0, "fa-icon", 13),
            t.ALo(1, "translate")),
            2 & n && t.Q6J("ngbTooltip", t.lcZ(1, 1, "pair_explorer.trust"))
        }
        const Nt = function(n) {
            return {
                "is-opposite-vote": n
            }
        };
        function Oa(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 14),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.verifyVote("up"))
                }),
                t._UZ(1, "fa-icon", 15),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(1, Nt, e.VoteType.DOWNVOTE.equals(e.tokenVotes.vote)))
            }
        }
        function ka(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, Ma, 2, 3, "fa-icon", 11),
            t.YNc(2, Oa, 2, 3, "a", 12),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.VoteType.UPVOTE.equals(e.tokenVotes.vote)),
                t.xp6(1),
                t.Q6J("ngIf", !e.VoteType.UPVOTE.equals(e.tokenVotes.vote))
            }
        }
        function ya(n, i) {
            1 & n && (t.ynx(0),
            t._UZ(1, "fa-icon", 16),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.Q6J("ngbTooltip", t.lcZ(2, 1, "pair_explorer.subscribed_votes")))
        }
        function wa(n, i) {
            1 & n && (t._UZ(0, "fa-icon", 19),
            t.ALo(1, "translate")),
            2 & n && t.Q6J("ngbTooltip", t.lcZ(1, 1, "pair_explorer.dont_trust"))
        }
        function Ta(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 20),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.verifyVote("down"))
                }),
                t._UZ(1, "fa-icon", 21),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(1, Nt, e.VoteType.UPVOTE.equals(e.tokenVotes.vote)))
            }
        }
        function va(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, wa, 2, 3, "fa-icon", 17),
            t.YNc(2, Ta, 2, 3, "a", 18),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.VoteType.DOWNVOTE.equals(e.tokenVotes.vote)),
                t.xp6(1),
                t.Q6J("ngIf", !e.VoteType.DOWNVOTE.equals(e.tokenVotes.vote))
            }
        }
        function Sa(n, i) {
            1 & n && (t.ynx(0),
            t._UZ(1, "fa-icon", 22),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.Q6J("ngbTooltip", t.lcZ(2, 1, "pair_explorer.subscribed_votes")))
        }
        const Aa = function(n) {
            return {
                negative_overall: n
            }
        }
          , Za = function(n) {
            return {
                width: n
            }
        };
        function La(n, i) {
            if (1 & n && (t.TgZ(0, "div", 2)(1, "strong"),
            t._uU(2, " Community trust "),
            t.YNc(3, xa, 2, 1, "span", 3),
            t.TgZ(4, "a", 4),
            t.ALo(5, "translate"),
            t._UZ(6, "fa-icon", 5),
            t.qZA()(),
            t.TgZ(7, "div", 6),
            t.YNc(8, ka, 3, 2, "ng-container", 3),
            t.YNc(9, ya, 3, 3, "ng-container", 3),
            t.TgZ(10, "span", 7),
            t._uU(11),
            t.ALo(12, "number"),
            t.qZA()(),
            t.TgZ(13, "div", 8),
            t._UZ(14, "div", 9),
            t.ALo(15, "number"),
            t.ALo(16, "number"),
            t.qZA(),
            t.TgZ(17, "div", 10),
            t.YNc(18, va, 3, 2, "ng-container", 3),
            t.YNc(19, Sa, 3, 3, "ng-container", 3),
            t.TgZ(20, "span", 7),
            t._uU(21),
            t.ALo(22, "number"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(30, Aa, e.isNegativeOverall)),
                t.xp6(3),
                t.Q6J("ngIf", e.tokenVotes.total > 0),
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(5, 16, "pair_explorer.community_trust")),
                t.xp6(4),
                t.Q6J("ngIf", e.userConnected),
                t.xp6(1),
                t.Q6J("ngIf", !e.userConnected),
                t.xp6(1),
                t.ekj("buy-color", e.tokenVotes.upvotes.percent >= 90),
                t.xp6(1),
                t.hij(" ", t.xi3(12, 18, e.tokenVotes.upvotes.percent, "1.1-1"), "% "),
                t.xp6(3),
                t.Akn(t.VKq(32, Za, (e.isNegativeOverall ? e.tokenVotes.downvotes.percent : t.xi3(15, 21, e.tokenVotes.upvotes.percent, "1.1")) + "%")),
                t.uIk("aria-valuenow", t.xi3(16, 24, e.tokenVotes.upvotes.percent, "1.1")),
                t.xp6(4),
                t.Q6J("ngIf", e.userConnected),
                t.xp6(1),
                t.Q6J("ngIf", !e.userConnected),
                t.xp6(1),
                t.ekj("sell-color", e.tokenVotes.downvotes.percent >= 90),
                t.xp6(1),
                t.hij(" ", t.xi3(22, 27, e.tokenVotes.downvotes.percent, "1.1-1"), "% ")
            }
        }
        function Ia(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 23),
                t.NdJ("captchaTokenResolved", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.verifiedVote(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("isDarkTheme", e.isDarkTheme)("action", e.turnstileAction)
            }
        }
        let Da = (()=>{
            class n {
                set tokenVotes(e) {
                    this._tokenVotes = e,
                    this._tokenVotes && (this.isNegativeOverall = this._tokenVotes.upvotes.percent < 50),
                    this._cdRef.detectChanges()
                }
                get tokenVotes() {
                    return this._tokenVotes
                }
                constructor(e, o) {
                    this._cdRef = e,
                    this._captchaService = o,
                    this.VoteType = w,
                    this.turnstileAction = "votes",
                    this.userConnected = !1,
                    this.verifyingVoteType = null,
                    this.voteUp = new t.vpe,
                    this.voteDown = new t.vpe,
                    this.isDarkTheme = !0,
                    this.isNegativeOverall = !1
                }
                emitVoteUp() {
                    this.voteUp.emit(!0)
                }
                emitVoteDown() {
                    this.voteDown.emit(!0)
                }
                verifyVote(e) {
                    this.verifyingVoteType = e,
                    this._cdRef.detectChanges()
                }
                verifiedVote(e) {
                    e ? this._captchaService.checkTokenCaptcha(e).pipe((0,
                    J.q)(1)).subscribe(o=>{
                        o && o.success && ("up" === this.verifyingVoteType ? this.emitVoteUp() : this.emitVoteDown()),
                        this.verifyingVoteType = null,
                        this._cdRef.detectChanges()
                    }
                    ) : (this.verifyingVoteType = null,
                    this._cdRef.detectChanges())
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO),t.Y36(f.n))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-votes-bar"]],
                inputs: {
                    userConnected: "userConnected",
                    tokenVotes: "tokenVotes",
                    isDarkTheme: "isDarkTheme"
                },
                outputs: {
                    voteUp: "voteUp",
                    voteDown: "voteDown"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 2,
                vars: 2,
                consts: [["class", "vote-score", 3, "ngClass", 4, "ngIf"], ["class", "vote-score", "appCaptcha", "", 3, "isDarkTheme", "action", "captchaTokenResolved", 4, "ngIf"], [1, "vote-score", 3, "ngClass"], [4, "ngIf"], ["href", "javascript:", "placement", "top-right", 3, "ngbTooltip"], ["icon", "info-circle"], [1, "progress-hand"], [1, "percent"], [1, "progress", "progress-sm", "mb-2"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "aria-label", "Positive feedback", 1, "progress-bar"], [1, "progress-hand", "text-center"], ["icon", "thumbs-up", "class", "is-vote hand", "placement", "auto", 3, "ngbTooltip", 4, "ngIf"], ["href", "javascript:", "class", "d-block mb-1 action buy-color", 3, "click", 4, "ngIf"], ["icon", "thumbs-up", "placement", "auto", 1, "is-vote", "hand", 3, "ngbTooltip"], ["href", "javascript:", 1, "d-block", "mb-1", "action", "buy-color", 3, "click"], ["icon", "thumbs-up", 1, "hand", "is-not-vote", 3, "ngClass"], ["icon", "thumbs-up", "placement", "auto", 1, "hand", "is-not-vote", 3, "ngbTooltip"], ["icon", "thumbs-down", "class", "negative-hand hand is-vote", "placement", "auto", 3, "ngbTooltip", 4, "ngIf"], ["href", "javascript:", "class", "negative-hand d-block mb-1 action", 3, "click", 4, "ngIf"], ["icon", "thumbs-down", "placement", "auto", 1, "negative-hand", "hand", "is-vote", 3, "ngbTooltip"], ["href", "javascript:", 1, "negative-hand", "d-block", "mb-1", "action", 3, "click"], ["icon", "thumbs-down", 1, "negative-hand", "hand", "is-not-vote", 3, "ngClass"], ["icon", "thumbs-down", "placement", "auto", 1, "negative-hand", "hand", "is-not-vote", 3, "ngbTooltip"], ["appCaptcha", "", 1, "vote-score", 3, "isDarkTheme", "action", "captchaTokenResolved"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, La, 23, 34, "div", 0),
                    t.YNc(1, Ia, 1, 2, "div", 1)),
                    2 & e && (t.Q6J("ngIf", !!o.tokenVotes && !o.verifyingVoteType),
                    t.xp6(1),
                    t.Q6J("ngIf", o.verifyingVoteType))
                },
                dependencies: [p.O5, p.mk, b._L, u.uH, u.BN, C._7, p.JJ, h.aw, h.X$],
                styles: [".vote-score[_ngcontent-%COMP%]{padding:.5rem 1.2rem 1.2rem}.vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;line-height:1.125rem;margin-bottom:1rem;text-align:left;text-transform:uppercase;display:flex;align-items:center;justify-content:space-between;color:#142028}body.dark-theme   [_nghost-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{text-transform:none}.vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{vertical-align:middle;text-decoration:none;margin-left:.1875rem}.vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .vote-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.vote-score[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background-color:#ea394380;border-radius:.2rem;display:inline-block;height:.375rem;margin-left:.625rem;margin-right:.625rem;vertical-align:middle;width:calc(100% - 120px)}.vote-score[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:#17c671;height:.375rem}.vote-score[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:3.125rem;text-align:center}.vote-score[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]{color:#17c671}.vote-score[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]   .negative-hand[_ngcontent-%COMP%]{color:#ea394380}.vote-score[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]   .percent[_ngcontent-%COMP%]{font-size:13px}.vote-score.negative_overall[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{background-color:#17c67180}.vote-score.negative_overall[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:#ea3943;float:right}.vote-score.negative_overall[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%]{color:#17c67180}.vote-score.negative_overall[_ngcontent-%COMP%]   .progress-hand[_ngcontent-%COMP%]   .hand.negative-hand[_ngcontent-%COMP%]{color:#ea3943}.vote-score[_ngcontent-%COMP%]   .iframe-captcha[_ngcontent-%COMP%]     iframe{width:100%!important}.is-vote[_ngcontent-%COMP%]{font-size:1.625rem}.is-not-vote[_ngcontent-%COMP%]{font-size:1.125rem}.is-opposite-vote[_ngcontent-%COMP%]{font-size:13px}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var gt = g(1321)
          , A = g(33269);
        function Ea(n, i) {
            1 & n && (t.TgZ(0, "span", 5),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "saved_wallet.title_saved")))
        }
        function Ja(n, i) {
            1 & n && (t.TgZ(0, "span", 13),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "wallet_info.no_results"), " "))
        }
        function Ua(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 15)(1, "input", 16, 17),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const a = t.oxw().$implicit
                      , r = t.oxw();
                    return t.KtG(r.selectWallet(a))
                }),
                t.qZA(),
                t.TgZ(3, "fa-icon", 18),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.MAs(2)
                      , r = t.oxw().$implicit
                      , l = t.oxw();
                    return t.KtG(l.filterByColor(r.color, !a.checked))
                }),
                t.ALo(4, "translate"),
                t.qZA(),
                t.TgZ(5, "label", 19),
                t._uU(6),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.MGl("id", "wall_", e.id, ""),
                t.Q6J("checked", o.isWalletSelected(e)),
                t.xp6(2),
                t.Q6J("ngClass", "text-" + e.color)("ngbTooltip", t.lcZ(4, 6, "pair_explorer.filter_color")),
                t.xp6(2),
                t.MGl("for", "wall_", e.id, ""),
                t.xp6(1),
                t.Oqu(e.name)
            }
        }
        function Na(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, Ua, 7, 8, "div", 14),
            t.BQk()),
            2 & n) {
                const e = i.$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", o.known_wallets_filtered.includes(e.id))
            }
        }
        function qa(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 20),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return a.clearWalletSearch(),
                    t.KtG(a.searchFilteredWallet(a.searchWallet))
                }),
                t.qZA()
            }
        }
        function Qa(n, i) {
            1 & n && (t.TgZ(0, "div", 21),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.wallet_found")))
        }
        let Fa = (()=>{
            class n extends s.K9 {
                set data_transactions(e) {
                    this._data_transactions = [...e]
                }
                get data_transactions() {
                    return this._data_transactions
                }
                set walletsSelected(e) {
                    this._walletsSelected = [...e]
                }
                get walletsSelected() {
                    return this._walletsSelected
                }
                set historicalWalletsSelected(e) {
                    this._historicalWalletsSelected = [...e]
                }
                get historicalWalletsSelected() {
                    return this._historicalWalletsSelected
                }
                constructor(e) {
                    super(),
                    this._cdRef = e,
                    this.isLoading = !1,
                    this.known_wallets = [],
                    this._data_transactions = [],
                    this._walletsSelected = [],
                    this._historicalWalletsSelected = [],
                    this.known_wallets_filtered = [],
                    this.botFiltered = !1,
                    this.user_access = !1,
                    this.walletsFiltered = new t.vpe,
                    this._knownWalletsCopy = [],
                    this.searchWallet = "",
                    this.searchLoad = !1,
                    this.walletIdFound = !1,
                    this.typed$ = new E.x,
                    this.Chain = c.qop
                }
                ngOnInit() {
                    this.typed$.pipe((0,
                    M.b)(()=>this.searchLoad = !0), (0,
                    s.sL)(this), (0,
                    B.b)(500), (0,
                    M.b)(e=>{
                        e && "" !== e ? this.searchFilteredWallet(e) : (this.clearWalletSearch(),
                        this.searchFilteredWallet(this.searchWallet))
                    }
                    )).subscribe(),
                    this._knownWalletsCopy = [...this.known_wallets]
                }
                onDestroy() {}
                selectWallet(e, o) {
                    let a = !this.isWalletSelected(e);
                    void 0 !== o && (a = o),
                    a && !this.isWalletSelected(e) ? this.walletsSelected.push(e) : !a && this.isWalletSelected(e) && this.walletsSelected.splice(this.walletsSelected.indexOf(e), 1),
                    this._cdRef.detectChanges()
                }
                isWalletSelected(e) {
                    return this.walletsSelected.some(o=>o.id === e.id)
                }
                searchFilteredWallet(e) {
                    if (this.searchLoad = !1,
                    this._cdRef.markForCheck(),
                    e) {
                        e = c.CXF.getMakerFormatByChain(e, this.chain),
                        this.searchWallet = e,
                        this.known_wallets = [];
                        for (const o of this._knownWalletsCopy)
                            c.CXF.getMakerFormatByChain(o.name, this.chain).includes(e) && this.known_wallets.push(o);
                        if (e.length <= 9)
                            this.walletIdFound = !1;
                        else {
                            for (const o of this.data_transactions)
                                o.maker.includes(e) && (this.walletIdFound = !0,
                                this.historicalWalletsSelected.push(o.maker));
                            this.historicalWalletsSelected = this.historicalWalletsSelected.filter((o,a,r)=>s.gS.unique(o, a, r)),
                            this._cdRef.detectChanges()
                        }
                    } else
                        this.known_wallets = this._knownWalletsCopy
                }
                clearWalletSearch() {
                    this.searchWallet = "",
                    this.walletIdFound = !1,
                    this.searchLoad = !1,
                    this._cdRef.detectChanges()
                }
                clearWalletFilter() {
                    this.walletsSelected = [],
                    this.historicalWalletsSelected = [],
                    this.clearWalletSearch(),
                    this.filterByWallet()
                }
                filterByColor(e, o) {
                    for (const a of this.known_wallets)
                        a.color === e && this.known_wallets_filtered.includes(a.id) && this.selectWallet(a, o)
                }
                filterByWallet() {
                    (this.known_wallets_filtered.length > 0 && this.known_wallets.length > 0 || this.walletIdFound) && this.walletsFiltered.emit({
                        historicalWalletSelected: this.historicalWalletsSelected,
                        walletsSelected: this.walletsSelected
                    })
                }
                knownWalletsTrackBy(e, o) {
                    return o.id
                }
                get walletListIsEmpty() {
                    return 0 === this.known_wallets_filtered.length && this.searchWallet.length <= 9 || 0 === this.known_wallets.length && this.searchWallet.length <= 9 || 0 === this.known_wallets.length && this.searchWallet.length > 9 && !this.walletIdFound && !this.searchLoad
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-saved-wallets"]],
                inputs: {
                    isLoading: "isLoading",
                    known_wallets: "known_wallets",
                    data_transactions: "data_transactions",
                    walletsSelected: "walletsSelected",
                    historicalWalletsSelected: "historicalWalletsSelected",
                    known_wallets_filtered: "known_wallets_filtered",
                    botFiltered: "botFiltered",
                    chain: "chain",
                    user_access: "user_access"
                },
                outputs: {
                    walletsFiltered: "walletsFiltered"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 20,
                vars: 19,
                consts: [[1, "saved-wallets-container"], ["class", "section-title", 4, "ngIf"], [1, "wallet-selection-container"], ["class", "list-empty", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "section-title"], [1, "wallet-search-container"], ["appRestrictInput", "^[A-Za-z0-9:.<>\\-\\s]*$", 1, "wallet-search", 3, "ngModel", "disabled", "maxlength", "keyup", "ngModelChange"], ["icon", "times", 3, "click", 4, "ngIf"], ["class", "wallet-found", 4, "ngIf"], [1, "buttons-container"], [1, "apply", 3, "disabled", "click"], [1, "clear", 3, "click"], [1, "list-empty"], ["class", "form-check custom-checkbox wallet-selection", 4, "ngIf"], [1, "form-check", "custom-checkbox", "wallet-selection"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id", "change"], ["checkbox", ""], ["icon", "circle", "placement", "right", 3, "ngClass", "ngbTooltip", "click"], [1, "form-check-label", "custom-control-label-checkbox", 3, "for"], ["icon", "times", 3, "click"], [1, "wallet-found"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Ea, 3, 3, "span", 1),
                    t.TgZ(2, "div", 2),
                    t.YNc(3, Ja, 3, 3, "span", 3),
                    t.YNc(4, Na, 2, 1, "ng-container", 4),
                    t.qZA(),
                    t.TgZ(5, "span", 5),
                    t._uU(6),
                    t.ALo(7, "translate"),
                    t.qZA(),
                    t.TgZ(8, "div", 6)(9, "input", 7),
                    t.NdJ("keyup", function() {
                        return o.typed$.next(o.searchWallet)
                    })("ngModelChange", function(r) {
                        return o.searchWallet = r
                    }),
                    t.qZA(),
                    t.YNc(10, qa, 1, 0, "fa-icon", 8),
                    t.qZA(),
                    t.YNc(11, Qa, 3, 3, "div", 9),
                    t.TgZ(12, "div", 10)(13, "button", 11),
                    t.NdJ("click", function() {
                        return o.filterByWallet()
                    }),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.TgZ(16, "button", 12),
                    t.NdJ("click", function() {
                        return o.clearWalletFilter()
                    }),
                    t._uU(17),
                    t.ALo(18, "translate"),
                    t.qZA()(),
                    t._UZ(19, "div"),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", o.user_access && !o.walletIdFound),
                    t.xp6(2),
                    t.Q6J("ngIf", o.walletListIsEmpty),
                    t.xp6(1),
                    t.Q6J("ngForOf", o.known_wallets)("ngForTrackBy", o.knownWalletsTrackBy),
                    t.xp6(2),
                    t.Oqu(t.lcZ(7, 13, "saved_wallet.title_search")),
                    t.xp6(3),
                    t.Q6J("ngModel", o.searchWallet)("disabled", o.isLoading)("maxlength", o.chain === o.Chain.Aptos ? 820 : 128),
                    t.xp6(1),
                    t.Q6J("ngIf", o.searchWallet),
                    t.xp6(1),
                    t.Q6J("ngIf", o.walletIdFound && !o.searchLoad),
                    t.xp6(2),
                    t.Q6J("disabled", 0 === o.known_wallets_filtered.length && 0 === o.known_wallets.length && !o.walletIdFound || o.searchLoad || o.isLoading),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(15, 15, "saved_wallet.apply"), " "),
                    t.xp6(3),
                    t.Oqu(t.lcZ(18, 17, "saved_wallet.clear")))
                },
                dependencies: [p.O5, p.ax, u.uH, u.BN, p.mk, b._L, m.u5, m.Fj, m.JJ, m.nD, m.On, h.aw, h.X$, C.O7],
                styles: [".saved-wallets-container[_ngcontent-%COMP%]{padding:1.09375rem;display:flex;flex-direction:column;gap:.5rem}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;position:relative;width:100%}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:absolute;font-size:13px;z-index:999;background-color:#e2e7ec;color:#142028;cursor:pointer;top:.625rem;right:.25rem;padding:.25rem .375rem;border-radius:3.125rem;display:flex;justify-content:center;align-items:center}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]{width:16.5625rem;height:2.625rem;border-radius:.375rem;background-color:#f4f5f6;border:none;padding-right:1.75rem}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]{background-color:#f4f5f6}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-search-container[_ngcontent-%COMP%]   .wallet-search[_ngcontent-%COMP%]:focus{border:none;outline:none}.saved-wallets-container[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{border-radius:3.125rem}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .list-empty[_ngcontent-%COMP%]{font-size:12px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .list-empty[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .list-empty[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .list-empty[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .list-empty[_ngcontent-%COMP%]{color:#818ea3}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.375rem}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{margin-top:0;width:1.375rem;height:1.375rem;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{background-color:#f4f5f6}.saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{font-size:13px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-selection-container[_ngcontent-%COMP%]   .wallet-selection[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{color:#142028}.saved-wallets-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], .saved-wallets-container[_ngcontent-%COMP%]   .wallet-found[_ngcontent-%COMP%]{font-size:13px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-found[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-found[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-found[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .wallet-found[_ngcontent-%COMP%]{color:#142028}.saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:.625rem;gap:.4375rem;width:100%}.saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{border-radius:3.125rem;border:none;height:1.875rem;padding:.3125rem .625rem;display:flex;justify-content:center;align-items:center;width:50%}.saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.apply[_ngcontent-%COMP%]{background-color:#00b8d8;color:#fff}.saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{color:#142028;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .saved-wallets-container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] > button.clear[_ngcontent-%COMP%]{background-color:#f4f5f6}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var D = (()=>{
            return (n = D || (D = {})).Date = "timestamp",
            n.Type = "type",
            n.Price = "priceUSD",
            n.PriceETH = "priceETH",
            n.AmountToken = "amountToken",
            n.AmountETH = "amountETH",
            n.AmountUSD = "amountUSD",
            n.AmountRef = "amountRef",
            n.Maker = "maker",
            n.Others = "others",
            D;
            var n
        }
        )();
        const Ha = ["mempoolTable"];
        function Ra(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appDateFormat"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.Oqu(t.xi3(2, 3, e.txDate, "MMMM DD HH:mm:ss"))
            }
        }
        function Ya(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.Oqu(e.type)
            }
        }
        function Wa(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.hij("$", t.xi3(2, 3, e.priceUSD, 4), " ")
            }
        }
        function Ba(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.hij("$", t.Dn7(2, 3, e.amountUSD, 2, 2), " ")
            }
        }
        function za(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.Oqu(t.xi3(2, 3, e.priceETH, 4))
            }
        }
        function Va(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 3, e.amountToken))
            }
        }
        function Ga(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 3, e.amountRef))
            }
        }
        function $a(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable-column", 6),
            t.ALo(1, "translate"),
            t.YNc(2, Ga, 3, 5, "ng-template", 4),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.AmountRef].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.AmountRef].minWith)("prop", "amountRef")("name", t.lcZ(1, 6, "pair_explorer.col_6") + " " + e.tokenRef)
            }
        }
        function ja(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.Tol(e.cellClass),
                t.xp6(1),
                t.hij("", t.lcZ(2, 3, e.txGas), " ETH")
            }
        }
        function Ka(n, i) {
            if (1 & n && (t.TgZ(0, "a", 14),
            t.ALo(1, "scannerWalletUrl"),
            t._uU(2),
            t.ALo(3, "slice"),
            t.ALo(4, "slice"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2);
                t.s9C("ngbTooltip", e.maker),
                t.Q6J("href", t.xi3(1, 4, o.chain, e.id.maker), t.LSH),
                t.xp6(2),
                t.AsE(" ", t.Dn7(3, 7, e.id.maker, 0, 4), "...", t.Dn7(4, 11, e.id.maker, 38, 42), " ")
            }
        }
        function Xa(n, i) {
            1 & n && (t.TgZ(0, "div"),
            t._uU(1, "-"),
            t.qZA())
        }
        function ti(n, i) {
            if (1 & n && (t.YNc(0, Ka, 5, 15, "a", 12),
            t.YNc(1, Xa, 2, 0, "div", 13)),
            2 & n) {
                const e = i.row;
                t.Q6J("ngIf", null == e.id ? null : e.id.maker),
                t.xp6(1),
                t.Q6J("ngIf", !(null != e && e.id.maker))
            }
        }
        function ei(n, i) {
            if (1 & n && (t.TgZ(0, "a", 15),
            t.NdJ("click", function(o) {
                return o.stopImmediatePropagation()
            }),
            t.ALo(1, "scannerTransactionUrl"),
            t.ALo(2, "translate"),
            t._UZ(3, "img", 16),
            t.ALo(4, "scannerLogoUrl"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.s9C("ngbTooltip", t.lcZ(2, 6, "pair_explorer.view_tx")),
                t.Q6J("href", t.xi3(1, 3, o.chain, e.id.hash), t.LSH),
                t.xp6(3),
                t.Q6J("src", t.lcZ(4, 8, o.chain), t.LSH)
            }
        }
        const ni = function() {
            return {
                prop: "txGas",
                dir: "asc"
            }
        }
          , oi = function(n) {
            return [n]
        };
        function ai(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable", 1, 2)(2, "ngx-datatable-column", 3),
            t.ALo(3, "translate"),
            t.YNc(4, Ra, 3, 6, "ng-template", 4),
            t.qZA(),
            t.TgZ(5, "ngx-datatable-column", 5),
            t.ALo(6, "translate"),
            t.YNc(7, Ya, 2, 3, "ng-template", 4),
            t.qZA(),
            t.TgZ(8, "ngx-datatable-column", 6),
            t.ALo(9, "translate"),
            t.YNc(10, Wa, 3, 6, "ng-template", 4),
            t.qZA(),
            t.TgZ(11, "ngx-datatable-column", 7),
            t.ALo(12, "translate"),
            t.YNc(13, Ba, 3, 7, "ng-template", 4),
            t.qZA(),
            t.TgZ(14, "ngx-datatable-column", 6),
            t.ALo(15, "translate"),
            t.YNc(16, za, 3, 6, "ng-template", 4),
            t.qZA(),
            t.TgZ(17, "ngx-datatable-column", 6),
            t.ALo(18, "translate"),
            t.YNc(19, Va, 3, 5, "ng-template", 4),
            t.qZA(),
            t.YNc(20, $a, 3, 8, "ngx-datatable-column", 8),
            t.TgZ(21, "ngx-datatable-column", 9),
            t.YNc(22, ja, 3, 5, "ng-template", 4),
            t.qZA(),
            t.TgZ(23, "ngx-datatable-column", 10),
            t.ALo(24, "translate"),
            t.YNc(25, ti, 2, 2, "ng-template", 4),
            t.qZA(),
            t.TgZ(26, "ngx-datatable-column", 11),
            t.ALo(27, "translate"),
            t.YNc(28, ei, 5, 10, "ng-template", 4),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Tol("rows-" + (e.mempoolDataList.length >= e.numberOfVisibleRows ? e.numberOfVisibleRows : e.mempoolDataList.length).toString()),
                t.Q6J("trackByProp", "id.hash")("sorts", t.VKq(80, oi, t.DdM(79, ni)))("scrollbarH", !0)("columnMode", e.ColumnMode.force)("count", e.visibleMempoolList.length)("footerHeight", 0)("rows", e.visibleMempoolList)("rowHeight", 35)("limit", e.numberOfVisibleRows),
                t.xp6(2),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.Date].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.Date].minWith)("prop", "txDate")("name", t.lcZ(3, 63, "pair_explorer.col_1")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.Type].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.Type].minWith)("name", t.lcZ(6, 65, "pair_explorer.col_2")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.Price].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.Price].minWith)("prop", "price")("name", t.lcZ(9, 67, "pair_explorer.col_3") + " USD"),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.AmountUSD].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.AmountUSD].minWith)("prop", "amountUSD")("name", t.lcZ(12, 69, "pair_explorer.total_usd_column")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.PriceETH].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.PriceETH].minWith)("prop", "priceETH")("name", t.lcZ(15, 71, "pair_explorer.col_4") + " " + e.refTokenSymbol),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.AmountToken].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.AmountToken].minWith)("prop", "amountToken")("name", t.lcZ(18, 73, "pair_explorer.col_5") + " " + e.tokenData.symbol),
                t.xp6(3),
                t.Q6J("ngIf", e.tokenRef),
                t.xp6(1),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.AmountETH].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.AmountETH].minWith)("prop", "txGas"),
                t.xp6(2),
                t.Q6J("sortable", !1)("resizeable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.Maker].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.Maker].minWith)("prop", "id.maker")("name", t.lcZ(24, 75, "pair_explorer.col_8")),
                t.xp6(3),
                t.Q6J("resizeable", !1)("sortable", !1)("width", e.tableRowOptions[e.TradeHistoryProp.Others].width)("minWidth", e.tableRowOptions[e.TradeHistoryProp.Others].minWith)("name", t.lcZ(27, 77, "pair_explorer.col_9"))
            }
        }
        let ii = (()=>{
            class n extends s.K9 {
                onResize() {
                    this._recalculateTableSize()
                }
                set allTransactionsSwaps(e) {
                    this._allTransactionsSwaps = [...e].sort((o,a)=>a.timestamp - o.timestamp),
                    this._processAndUpdateMempoolDataWithNewsSwaps()
                }
                get allTransactionsSwaps() {
                    return this._allTransactionsSwaps
                }
                set numberOfVisibleRows(e) {
                    this._numberOfVisibleRows !== e && (this._numberOfVisibleRows = e,
                    this._recalculateTableSize())
                }
                get numberOfVisibleRows() {
                    return this._numberOfVisibleRows
                }
                constructor(e, o, a, r) {
                    super(),
                    this._mempoolService = e,
                    this._cdRef = o,
                    this._chainWebSocketsService = a,
                    this._commonService = r,
                    this._allTransactionsSwaps = [],
                    this.mempoolIsEmpty = new t.vpe,
                    this.tablePage = 0,
                    this.mempoolDataList = [],
                    this.loading = !0,
                    this.ColumnMode = x.hq,
                    this.TradeHistoryProp = D
                }
                ngAfterViewInit() {
                    this._getMempoolTimeSeries(),
                    this.triggerTableSizeRecalculation$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._recalculateTableSize()
                    }
                    ),
                    this._commonService.coinPrice$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this.mempoolDataList.length > 0 && (this.mempoolDataList = [...this._mempoolService.formatMempoolTransactionList([...this.mempoolDataList], this.tokenData, [...this._allTransactionsSwaps], this.tokenRef)],
                        this._recalculateTableSize())
                    }
                    )
                }
                _getMempoolTimeSeries() {
                    this._mempoolService.getMempoolTimeSeries(this.chain, this.pairAddress).pipe((0,
                    J.q)(1)).subscribe(e=>{
                        const o = e ?? [];
                        for (const a of o)
                            this.mempoolDataList.push(this._mempoolService.formatMempoolTransaction(a, this.tokenData, this.allTransactionsSwaps, this.tokenRef));
                        this._processSortAndSliceMempoolList(),
                        this._emitMempoolIsEmpty(),
                        this.loading = !1,
                        this._checkWebsocketIsConnected(),
                        this._recalculateTableSize(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _pairSubscribe(e) {
                    this._pairSubscription = this._chainWebSocketsService.listenWebSocket(`${this.chainData.chainPrefix}${c.Qvc}`, {
                        chain: this.chain,
                        pair: e
                    }).pipe((0,
                    I.h)(o=>o.id.pair === this.pairAddress), (0,
                    At.e)(200), (0,
                    I.h)(o=>o && o.length > 0), (0,
                    M.b)(o=>{
                        for (const a of o) {
                            const r = this._mempoolService.formatMempoolTransaction(a, this.tokenData, this._allTransactionsSwaps, this.tokenRef);
                            this.mempoolDataList.unshift(r)
                        }
                        this.mempoolDataList = this._mempoolService.formatMempoolTransactionList(this.mempoolDataList, this.tokenData, this._allTransactionsSwaps, this.tokenRef),
                        this._processSortAndSliceMempoolList(),
                        this._emitMempoolIsEmpty(),
                        this._recalculateTableSize()
                    }
                    )).subscribe()
                }
                _checkWebsocketIsConnected() {
                    this._chainWebSocketsService.isConnected$().pipe((0,
                    s.sL)(this), (0,
                    I.h)(e=>e && !this._pairSubscription), (0,
                    M.b)(()=>{
                        this._pairSubscribe(this.pairAddress)
                    }
                    )).subscribe()
                }
                _processAndUpdateMempoolDataWithNewsSwaps() {
                    this.mempoolDataList = this._mempoolService.processMempoolData(this.mempoolDataList, this._allTransactionsSwaps),
                    this.mempoolDataList = this._mempoolService.formatMempoolTransactionList(this.mempoolDataList, this.tokenData, this._allTransactionsSwaps, this.tokenRef),
                    this._emitMempoolIsEmpty(),
                    this._recalculateTableSize()
                }
                _processSortAndSliceMempoolList() {
                    this.mempoolDataList = this._mempoolService.processMempoolData(this.mempoolDataList, this.allTransactionsSwaps)
                }
                _recalculateTableSize() {
                    this.table && (this.table.recalculate(),
                    this._cdRef.detectChanges())
                }
                _emitMempoolIsEmpty() {
                    this.mempoolIsEmpty.emit(0 === this.mempoolDataList.length)
                }
                onDestroy() {
                    this._pairSubscription?.unsubscribe()
                }
                get visibleMempoolList() {
                    return this.mempoolDataList.sort((e,o)=>o.txGas - e.txGas).slice(0, this._numberOfVisibleRows)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(c.uXi),t.Y36(t.sBO),t.Y36(c.p9V),t.Y36(c.v_H))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-mempool"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(Ha, 5),
                    2 & e) {
                        let a;
                        t.iGM(a = t.CRH()) && (o.table = a.first)
                    }
                },
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    tokenData: "tokenData",
                    pairAddress: "pairAddress",
                    tableRowOptions: "tableRowOptions",
                    chain: "chain",
                    chainData: "chainData",
                    tokenRef: "tokenRef",
                    allTransactionsSwaps: "allTransactionsSwaps",
                    numberOfVisibleRows: "numberOfVisibleRows",
                    triggerTableSizeRecalculation$: "triggerTableSizeRecalculation$",
                    refTokenSymbol: "refTokenSymbol"
                },
                outputs: {
                    mempoolIsEmpty: "mempoolIsEmpty"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "material table", 3, "trackByProp", "class", "sorts", "scrollbarH", "columnMode", "count", "footerHeight", "rows", "rowHeight", "limit", 4, "ngIf"], [1, "material", "table", 3, "trackByProp", "sorts", "scrollbarH", "columnMode", "count", "footerHeight", "rows", "rowHeight", "limit"], ["mempoolTable", ""], [3, "resizeable", "sortable", "width", "minWidth", "prop", "name"], ["ngx-datatable-cell-template", ""], ["cellClass", "center-column-table", "headerClass", "center-column-table", 3, "resizeable", "sortable", "width", "minWidth", "name"], ["cellClass", "right-column-table", "headerClass", "right-column-table", 3, "resizeable", "sortable", "width", "minWidth", "prop", "name"], ["cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "sortable", "width", "minWidth", "prop", "name"], ["cellClass", "right-column-table", "headerClass", "right-column-table", 3, "resizeable", "sortable", "width", "minWidth", "prop", "name", 4, "ngIf"], ["name", "Gas", "cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "sortable", "width", "minWidth", "prop"], ["cellClass", "right-column-table", "headerClass", "right-column-table", 3, "sortable", "resizeable", "width", "minWidth", "prop", "name"], ["cellClass", "right-column-table", "headerClass", "right-column-table", 3, "resizeable", "sortable", "width", "minWidth", "name"], ["target", "_blank", "rel", "noopener", "class", "maker-color", "placement", "top", 3, "href", "ngbTooltip", 4, "ngIf"], [4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", 1, "maker-color", 3, "href", "ngbTooltip"], ["target", "_blank", "rel", "noopener", 3, "href", "ngbTooltip", "click"], ["width", "18", "alt", "scanner logo", 1, "icon-bg-white-rounded", 3, "src"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, ai, 29, 82, "ngx-datatable", 0),
                    2 & e && t.Q6J("ngIf", !o.loading && o.mempoolDataList.length > 0)
                },
                dependencies: [p.O5, u.uH, x.xD, x.nE, x.UC, x.vq, C.Ek, C.$p, C.pt, h.aw, h.X$, c.tAw, c.Atn, b._L, c.P2u, p.OU],
                styles: ["[_nghost-%COMP%]     .ngx-datatable.material.rows-1{height:99px;min-height:99px}[_nghost-%COMP%]     .ngx-datatable.material.rows-2{height:134px;min-height:134px}[_nghost-%COMP%]     .ngx-datatable.material.rows-3{height:169px;min-height:169px}[_nghost-%COMP%]     .ngx-datatable.material.rows-4{height:204px;min-height:204px}[_nghost-%COMP%]     .ngx-datatable.material.rows-5{height:239px;min-height:239px}[_nghost-%COMP%]     .ngx-datatable.material.rows-6{height:274px;min-height:274px}[_nghost-%COMP%]     .ngx-datatable.material.rows-7{height:309px;min-height:309px}[_nghost-%COMP%]     .ngx-datatable.material.rows-8{height:344px;min-height:344px}[_nghost-%COMP%]     .ngx-datatable.material.rows-9{height:379px;min-height:379px}[_nghost-%COMP%]     .ngx-datatable.material.rows-10{height:414px;min-height:414px}[_nghost-%COMP%]     .ngx-datatable.material.rows-11{height:449px;min-height:449px}[_nghost-%COMP%]     .ngx-datatable.material.rows-12{height:484px;min-height:484px}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row{opacity:.5}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.buy-color){color:#17c671!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.sell-color){color:#ea3943!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.burn-color){color:#ffdbad!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.mint-color){color:#b2e1ff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important;opacity:.5}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important;color:#818ea3;border-color:#e2e7ec;border-bottom:.0625rem solid;font-weight:400}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row.active, [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row.active:hover .datatable-row-group{background-color:#a4f2c230}[_nghost-%COMP%]     .ngx-datatable.material .datatable-summary-row .datatable-body-row{background-color:inherit;padding:.3125rem 0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{font-size:13px!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{border-radius:3.125rem;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#cacedb}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#3d5170}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#3d5170}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:active{border-radius:.9375rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        const ri = ["pairs_table"]
          , ci = ["popoverFilterPrice"]
          , li = ["popoverFilterAmountUSD"]
          , si = ["popoverFilterPriceETH"]
          , _i = ["popoverFilterSymbol"]
          , gi = ["popoverFilterTokenRef"]
          , pi = ["popoverFilterAmountETH"]
          , di = ["popoverFilterTxType"]
          , hi = ["popoverFilterWallets"];
        function mi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-dropdown-select", 18),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.changeShowRowsMempool(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("items", e.mempoolRowsDropDownItems)("selectedItem", e.mempoolRowsSelected)
            }
        }
        function ui(n, i) {
            1 & n && (t.TgZ(0, "span", 19),
            t._UZ(1, "fa-icon", 20),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "mempool.is_empty")))
        }
        function fi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-mempool", 21),
                t.NdJ("mempoolIsEmpty", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.changeMempoolIsEmpty(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                let o;
                t.Q6J("@toggleAnimation", e.showMempool && e.pairAddress && e.tokenData && !e.mempoolIsEmpty)("triggerTableSizeRecalculation$", e.triggerTableSizeRecalculationObservable$)("numberOfVisibleRows", null !== (o = null == e.mempoolRowsSelected ? null : e.mempoolRowsSelected.value) && void 0 !== o ? o : 3)("chainData", e.chainData)("tokenData", e.tokenData)("pairAddress", e.pairAddress)("chain", e.chain)("tableRowOptions", e.tradeHistoryRowOptions)("refTokenSymbol", e.refTokenSymbol)("allTransactionsSwaps", e.allTransactions)("tokenRef", e.tokenRef)
            }
        }
        function Ci(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 12)(2, "button", 13),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleShowMempool())
                }),
                t._UZ(3, "fa-icon", 14),
                t.TgZ(4, "span"),
                t._uU(5, "Mempool"),
                t.qZA()(),
                t.YNc(6, mi, 1, 2, "app-dropdown-select", 15),
                t.YNc(7, ui, 4, 3, "span", 16),
                t.qZA(),
                t.YNc(8, fi, 1, 11, "app-mempool", 17),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.ekj("not-show", !e.showMempool),
                t.xp6(1),
                t.Q6J("icon", e.showMempool ? "eye" : "eye-slash"),
                t.xp6(3),
                t.Q6J("ngIf", !e.mempoolIsEmpty && e.showMempool),
                t.xp6(1),
                t.Q6J("ngIf", !!e.mempoolIsEmpty && e.showMempool),
                t.xp6(1),
                t.Q6J("ngIf", e.showMempool && e.pairAddress && e.tokenData)
            }
        }
        function bi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 24),
                t.NdJ("click", function() {
                    const r = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.selectWallet(r))
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "span", 25),
                t.TgZ(4, "span"),
                t._uU(5),
                t.qZA(),
                t._UZ(6, "fa-icon", 26),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = i.$implicit;
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 3, "pair_explorer.remove_wallet_filter")),
                t.xp6(2),
                t.Q6J("ngClass", "bg-" + e.color),
                t.xp6(2),
                t.Oqu(e.name)
            }
        }
        const Pi = function() {
            return ["fal", "times"]
        };
        function xi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 24),
                t.NdJ("click", function() {
                    const r = t.CHM(e).index
                      , l = t.oxw(2);
                    return t.KtG(l.removeHistoricalWalletSelected(r))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "span"),
                t._uU(4),
                t.ALo(5, "slice"),
                t.qZA(),
                t._UZ(6, "fa-icon", 14),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = i.$implicit;
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 3, "pair_explorer.remove_wallet_filter")),
                t.xp6(3),
                t.Oqu(t.xi3(5, 5, e, 35)),
                t.xp6(2),
                t.Q6J("icon", t.DdM(8, Pi))
            }
        }
        function Mi(n, i) {
            if (1 & n && (t.TgZ(0, "div", 22),
            t.YNc(1, bi, 7, 5, "ng-container", 23),
            t.ALo(2, "slice"),
            t.YNc(3, xi, 7, 9, "ng-container", 23),
            t.ALo(4, "slice"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngForOf", t.Dn7(2, 4, e.walletsSelected, 0, 3))("ngForTrackBy", e.walletSelectedTrackBy),
                t.xp6(2),
                t.Q6J("ngForOf", t.Dn7(4, 8, e.historicalWalletsSelected, 0, 3))("ngForTrackBy", e.historicalWalletsSelectedTrackBy)
            }
        }
        function Oi(n, i) {
            1 & n && (t._uU(0),
            t.ALo(1, "appDateFormat"),
            t.ALo(2, "appDateFromUnix")),
            2 & n && t.hij(" ", t.xi3(1, 1, t.lcZ(2, 4, i.row.timestamp), "MMMM DD HH:mm:ss"), " ")
        }
        const Y = function(n) {
            return {
                "is-apply": n
            }
        };
        function ki(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 41),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterTxType"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(20);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 5, "pair_explorer.col_2")),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(7, Y, !(null == o.txTypeFilterSelected || !o.txTypeFilterSelected.value)))
            }
        }
        function yi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 45),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw().row;
                    return t.oxw(2).emitAddPosition(a),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 46),
                t.qZA()
            }
            2 & n && t.Q6J("ngbTooltip", t.lcZ(1, 1, "pair_explorer.add_positions"))
        }
        function wi(n, i) {
            if (1 & n && (t.TgZ(0, "span", 43),
            t._uU(1),
            t.qZA(),
            t.YNc(2, yi, 3, 3, "a", 44)),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Q6J("ngClass", o.getRowCellClass(e)),
                t.xp6(1),
                t.Oqu(e.type),
                t.xp6(1),
                t.Q6J("ngIf", o.user_access && "buy" === e.type && !!o.currentFav)
            }
        }
        function Ti(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 47),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterPrice"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(6);
                t.xp6(2),
                t.hij("", t.lcZ(3, 5, "pair_explorer.col_3"), " USD"),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(7, Y, !!o.amountFilters.get(o.filterKey.PriceUSD)))
            }
        }
        function vi(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.hij("$", t.xi3(2, 3, e.priceUSD || e.price, 4), " ")
            }
        }
        function Si(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 48),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterAmountUSD"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(8);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 5, "pair_explorer.total_usd_column")),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(7, Y, !!o.amountFilters.get(o.filterKey.AmountUSD)))
            }
        }
        function Ai(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.hij("$", t.Dn7(2, 3, e.amountUSD, 2, 2), " ")
            }
        }
        function Zi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 49),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterPriceETH"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(10);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 6, "pair_explorer.col_4"), " ", o.refTokenSymbol, ""),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(8, Y, !!o.amountFilters.get(o.filterKey.PriceETH)))
            }
        }
        function Li(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.Oqu(t.xi3(2, 3, e.priceUSD_ETH || e.priceETH, 4))
            }
        }
        function Ii(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 50),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterSymbol"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(12);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 6, "pair_explorer.col_5"), " ", o.tokenData.symbol, ""),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(8, Y, !!o.amountFilters.get(o.filterKey.AmountToken)))
            }
        }
        function Di(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.Oqu(t.lcZ(2, 3, e.amountToken))
            }
        }
        function Ei(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 51),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.togglePopover("FilterTokenRef"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(3)
                  , a = t.MAs(14);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 6, "pair_explorer.col_6"), " ", o.tokenRef, ""),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(8, Y, !!o.amountFilters.get(o.filterKey.AmountRef)))
            }
        }
        function Ji(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(3);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.hij("", t.lcZ(2, 3, e.amountRef), " ")
            }
        }
        function Ui(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable-column", 33),
            t.ALo(1, "translate"),
            t.YNc(2, Ei, 8, 10, "ng-template", 32),
            t.YNc(3, Ji, 3, 5, "ng-template", 30),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountRef].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountRef].minWith)("prop", "amountRef")("name", t.lcZ(1, 5, "pair_explorer.col_6") + " " + e.tokenRef)
            }
        }
        function Ni(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 38),
                t.NdJ("click", function() {
                    const r = t.CHM(e).sortFn;
                    return t.KtG(r())
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t._UZ(4, "i", 39),
                t.qZA(),
                t.TgZ(5, "button", 40, 52),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.togglePopover("FilterAmountETH"))
                }),
                t._UZ(7, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                const e = i.sortDir
                  , o = t.oxw(2)
                  , a = t.MAs(16);
                t.xp6(2),
                t.AsE("", t.lcZ(3, 6, "pair_explorer.col_6"), " ", o.refTokenSymbol, ""),
                t.xp6(2),
                t.Q6J("ngClass", e ? "asc" === e ? "sort-up" : "sort-down" : "sort"),
                t.xp6(1),
                t.Q6J("ngbPopover", a)("autoClose", "outside")("ngClass", t.VKq(8, Y, !!o.amountFilters.get(o.filterKey.AmountETH)))
            }
        }
        function qi(n, i) {
            if (1 & n && (t._UZ(0, "fa-icon", 54),
            t.ALo(1, "translate"),
            t.ALo(2, "appNumber")),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2);
                t.cQ8("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.drained"), ": ", t.lcZ(2, 5, e.chupacabring), " ", o.refTokenSymbol, "")
            }
        }
        function Qi(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "appNumber"),
            t.YNc(3, qi, 3, 7, "fa-icon", 53),
            t.qZA()),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.Tol(o.getRowCellClass(e)),
                t.xp6(1),
                t.hij("", t.lcZ(2, 4, e.amountETH), " "),
                t.xp6(2),
                t.Q6J("ngIf", e.chupacabring)
            }
        }
        function Fi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "span"),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA(),
                t.TgZ(3, "button", 56, 57),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.togglePopover("FilterWallets"))
                }),
                t._UZ(5, "fa-icon", 42),
                t.qZA()
            }
            if (2 & n) {
                t.oxw(3);
                const e = t.MAs(18);
                t.xp6(1),
                t.Oqu(t.lcZ(2, 3, "pair_explorer.col_8")),
                t.xp6(2),
                t.Q6J("ngbPopover", e)("autoClose", "outside")
            }
        }
        function Hi(n, i) {
            if (1 & n && (t.TgZ(0, "a", 59),
            t.ALo(1, "scannerWalletUrl"),
            t._uU(2),
            t.ALo(3, "slice"),
            t.ALo(4, "slice"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(3);
                t.s9C("ngbTooltip", e.maker),
                t.Q6J("href", t.xi3(1, 4, o.chain, e.maker), t.LSH),
                t.xp6(2),
                t.AsE(" ", t.Dn7(3, 7, e.maker, 0, 4), "...", t.Dn7(4, 11, e.maker, 38, 42), " ")
            }
        }
        function Ri(n, i) {
            if (1 & n && (t.TgZ(0, "a", 63),
            t._UZ(1, "app-icon", 64),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.Gre("text-", e.walletSaved.color, ""),
                t.cQ8("appRouterLink", "/", o.chain, "/", o.ChainPage.WalletInfo, "/", e.maker, ""),
                t.xp6(1),
                t.Gre("row-icon me-2 text-", e.walletSaved.color, ""),
                t.Q6J("width", 13)
            }
        }
        function Yi(n, i) {
            if (1 & n && (t.TgZ(0, "a", 65),
            t.ALo(1, "scannerWalletUrl"),
            t._UZ(2, "img", 66),
            t.ALo(3, "scannerLogoUrl"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.Q6J("href", t.xi3(1, 2, o.chain, e.maker), t.LSH),
                t.xp6(2),
                t.Q6J("src", t.lcZ(3, 5, o.chain), t.LSH)
            }
        }
        function Wi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, Ri, 2, 10, "a", 60),
                t.YNc(2, Yi, 4, 7, "a", 61),
                t.TgZ(3, "a", 62),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2).row;
                    return t.oxw(3).viewWallet(a.maker),
                    t.KtG(!1)
                }),
                t._uU(4),
                t.ALo(5, "ellipsis"),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2).row
                  , o = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", o.isPageAvailableInChain(o.ChainPage.WalletInfo, o.chain)),
                t.xp6(1),
                t.Q6J("ngIf", o.wallet_to_see === e.maker),
                t.xp6(1),
                t.Gre("text-", e.walletSaved.color, ""),
                t.Q6J("ngbTooltip", e.walletSaved.name.length > o.maxWalletNameLength ? e.walletSaved.name : ""),
                t.xp6(1),
                t.hij(" ", t.xi3(5, 7, e.walletSaved.name, o.maxWalletNameLength), " ")
            }
        }
        function Bi(n, i) {
            if (1 & n && (t.TgZ(0, "a", 63),
            t._UZ(1, "app-icon", 69),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.cQ8("appRouterLink", "/", o.chain, "/", o.ChainPage.WalletInfo, "/", e.maker, ""),
                t.xp6(1),
                t.Q6J("width", 13)
            }
        }
        function zi(n, i) {
            if (1 & n && (t.TgZ(0, "a", 65),
            t.ALo(1, "scannerWalletUrl"),
            t._UZ(2, "img", 66),
            t.ALo(3, "scannerLogoUrl"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.Q6J("href", t.xi3(1, 2, o.chain, e.maker), t.LSH),
                t.xp6(2),
                t.Q6J("src", t.lcZ(3, 5, o.chain), t.LSH)
            }
        }
        function Vi(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, Bi, 2, 4, "a", 67),
                t.YNc(2, zi, 4, 7, "a", 61),
                t.TgZ(3, "a", 68),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2).row;
                    return t.oxw(3).viewWallet(a.maker),
                    t.KtG(!1)
                }),
                t._uU(4),
                t.ALo(5, "slice"),
                t.ALo(6, "slice"),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2).row
                  , o = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", o.wallet_to_see === e.maker && o.isPageAvailableInChain(o.ChainPage.WalletInfo, o.chain)),
                t.xp6(1),
                t.Q6J("ngIf", o.wallet_to_see === e.maker),
                t.xp6(1),
                t.s9C("ngbTooltip", e.maker),
                t.xp6(1),
                t.AsE(" ", t.Dn7(5, 5, e.maker, 0, 4), "...", t.Dn7(6, 9, e.maker, 38, 42), " ")
            }
        }
        function Gi(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, Wi, 6, 10, "ng-container", 0),
            t.YNc(2, Vi, 7, 13, "ng-container", 0),
            t.BQk()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.Q6J("ngIf", e.walletSaved),
                t.xp6(1),
                t.Q6J("ngIf", !e.walletSaved)
            }
        }
        function $i(n, i) {
            if (1 & n && (t.YNc(0, Hi, 5, 15, "a", 58),
            t.YNc(1, Gi, 3, 2, "ng-container", 0)),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngIf", !e.user_access),
                t.xp6(1),
                t.Q6J("ngIf", e.user_access)
            }
        }
        function ji(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable-column", 55),
            t.YNc(1, Fi, 6, 5, "ng-template", 32),
            t.YNc(2, $i, 2, 2, "ng-template", 30),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.Maker].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.Maker].minWith)("sortable", !1)
            }
        }
        function Ki(n, i) {
            if (1 & n && (t.ynx(0),
            t._UZ(1, "fa-icon", 75),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2);
                t.xp6(1),
                t.MT6("icon-table ms-2 ", o.dextScore.color, " ", e.type === o.TransactionType.SELL ? "sell-color" : "buy-color", ""),
                t.s9C("ngbTooltip", t.lcZ(2, 5, "pair_explorer.team_wallet"))
            }
        }
        function Xi(n, i) {
            1 & n && (t._UZ(0, "fa-icon", 76),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.bot_smart_contract"))
        }
        function tr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 77),
                t.NdJ("click", function(a) {
                    t.CHM(e);
                    const r = t.oxw().row;
                    return t.oxw(2).emitToggleMarkedWallet(a, r.maker),
                    t.KtG(!1)
                })("mouseenter", function() {
                    t.CHM(e);
                    const a = t.oxw().row
                      , r = t.oxw(2);
                    return t.KtG(r.setToolTipData(r.data_wallets[a.maker]))
                }),
                t.TgZ(1, "span"),
                t._uU(2),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2)
                  , a = t.MAs(4);
                t.Q6J("ngbTooltip", a),
                t.xp6(1),
                t.Gre("badge bg-secondary ", o.data_wallets[e.maker].color, " ms-2"),
                t.xp6(1),
                t.Oqu(o.data_wallets[e.maker].numTx)
            }
        }
        function er(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 78),
                t.NdJ("click", function(a) {
                    t.CHM(e);
                    const r = t.oxw().row;
                    return t.oxw(2).emitToggleMarkedWallet(a, r.maker, !0),
                    t.KtG(!1)
                }),
                t._UZ(1, "fa-icon", 79),
                t.qZA()
            }
        }
        function nr(n, i) {
            if (1 & n && (t.TgZ(0, "a", 70),
            t.NdJ("click", function(o) {
                return o.stopImmediatePropagation()
            }),
            t.ALo(1, "scannerTransactionUrl"),
            t.ALo(2, "translate"),
            t._UZ(3, "img", 71),
            t.ALo(4, "scannerLogoUrl"),
            t.qZA(),
            t.YNc(5, Ki, 3, 7, "ng-container", 0),
            t.YNc(6, Xi, 2, 3, "fa-icon", 72),
            t.YNc(7, tr, 3, 5, "a", 73),
            t.YNc(8, er, 2, 0, "a", 74)),
            2 & n) {
                const e = i.row
                  , o = t.oxw(2);
                t.s9C("ngbTooltip", t.lcZ(2, 10, "pair_explorer.view_tx")),
                t.Q6J("href", t.xi3(1, 7, o.chain, e.id), t.LSH),
                t.xp6(3),
                t.Q6J("src", t.lcZ(4, 12, o.chain), t.LSH),
                t.xp6(2),
                t.Q6J("ngIf", o.teamWallet === e.maker),
                t.xp6(1),
                t.Q6J("ngIf", null == e.others ? null : e.others.bot),
                t.xp6(1),
                t.Q6J("ngIf", o.data_wallets[e.maker] && !o.isMySwapsTable),
                t.xp6(1),
                t.Q6J("ngIf", !o.filteredTx && o.data_wallets[e.maker] && !o.isMySwapsTable)
            }
        }
        function or(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 80)(1, "button", 81),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.scrollToLatest())
                }),
                t._UZ(2, "fa-icon", 82),
                t.qZA(),
                t.TgZ(3, "button", 81),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.scrollToOldest())
                }),
                t._UZ(4, "fa-icon", 83),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("disabled", e.isScrollToLatestDisabled),
                t.xp6(2),
                t.Q6J("disabled", e.isScrollToOldestDisabled)
            }
        }
        const ar = function() {
            return {
                prop: "indexedTimestamp",
                dir: "desc"
            }
        }
          , ir = function(n) {
            return [n]
        }
          , rr = function(n) {
            return {
                emptyMessage: n
            }
        };
        function cr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "ngx-datatable", 27, 28),
                t.NdJ("activate", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.emitOnRowActivated(a))
                })("scroll", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onScroll(a.offsetY))
                }),
                t.ALo(2, "translate"),
                t.TgZ(3, "ngx-datatable-column", 29),
                t.ALo(4, "translate"),
                t.YNc(5, Oi, 3, 6, "ng-template", 30),
                t.qZA(),
                t.TgZ(6, "ngx-datatable-column", 31),
                t.ALo(7, "translate"),
                t.YNc(8, ki, 8, 9, "ng-template", 32),
                t.YNc(9, wi, 3, 3, "ng-template", 30),
                t.qZA(),
                t.TgZ(10, "ngx-datatable-column", 33),
                t.ALo(11, "translate"),
                t.YNc(12, Ti, 8, 9, "ng-template", 32),
                t.YNc(13, vi, 3, 6, "ng-template", 30),
                t.qZA(),
                t.TgZ(14, "ngx-datatable-column", 33),
                t.ALo(15, "translate"),
                t.YNc(16, Si, 8, 9, "ng-template", 32),
                t.YNc(17, Ai, 3, 7, "ng-template", 30),
                t.qZA(),
                t.TgZ(18, "ngx-datatable-column", 33),
                t.ALo(19, "translate"),
                t.YNc(20, Zi, 8, 10, "ng-template", 32),
                t.YNc(21, Li, 3, 6, "ng-template", 30),
                t.qZA(),
                t.TgZ(22, "ngx-datatable-column", 33),
                t.ALo(23, "translate"),
                t.YNc(24, Ii, 8, 10, "ng-template", 32),
                t.YNc(25, Di, 3, 5, "ng-template", 30),
                t.qZA(),
                t.YNc(26, Ui, 4, 7, "ngx-datatable-column", 34),
                t.TgZ(27, "ngx-datatable-column", 33),
                t.ALo(28, "translate"),
                t.YNc(29, Ni, 8, 10, "ng-template", 32),
                t.YNc(30, Qi, 4, 6, "ng-template", 30),
                t.qZA(),
                t.YNc(31, ji, 3, 4, "ngx-datatable-column", 35),
                t.TgZ(32, "ngx-datatable-column", 36),
                t.ALo(33, "translate"),
                t.YNc(34, nr, 9, 14, "ng-template", 30),
                t.qZA(),
                t.TgZ(35, "ngx-datatable-footer"),
                t.YNc(36, or, 5, 2, "ng-template", 37),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("appLoading", e.isLoadingTransactions)("sorts", t.VKq(71, ir, t.DdM(70, ar)))("scrollbarV", !0)("scrollbarH", !0)("columnMode", e.ColumnMode.force)("rows", e.transactionsFilteredList)("rowHeight", 35)("selected", e.selectedTransactionsList)("messages", t.VKq(73, rr, t.lcZ(2, 52, "pair_explorer.no_transactions_data")))("footerHeight", 50),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.Date].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.Date].minWith)("prop", "indexedTimestamp")("name", t.lcZ(4, 54, "pair_explorer.col_1"))("cellClass", e.getRowCellClass),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.Type].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.Type].minWith)("name", t.lcZ(7, 56, "pair_explorer.col_2")),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.Price].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.Price].minWith)("prop", "price")("name", t.lcZ(11, 58, "pair_explorer.col_3") + " USD"),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountUSD].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountUSD].minWith)("prop", "amountUSD")("name", t.lcZ(15, 60, "pair_explorer.total_usd_column")),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.PriceETH].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.PriceETH].minWith)("prop", "priceETH")("name", t.lcZ(19, 62, "pair_explorer.col_4") + " " + e.refTokenSymbol),
                t.xp6(4),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountToken].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountToken].minWith)("prop", "amountToken")("name", t.lcZ(23, 64, "pair_explorer.col_5") + " " + e.tokenData.symbol),
                t.xp6(4),
                t.Q6J("ngIf", !!e.tokenRef),
                t.xp6(1),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountETH].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.AmountETH].minWith)("prop", "amountETH")("name", t.lcZ(28, 66, "pair_explorer.col_6") + " " + e.refTokenSymbol),
                t.xp6(4),
                t.Q6J("ngIf", !e.isMySwapsTable),
                t.xp6(1),
                t.Q6J("resizeable", !1)("width", e.tradeHistoryRowOptions[e.TradeHistoryProp.Others].width)("minWidth", e.tradeHistoryRowOptions[e.TradeHistoryProp.Others].minWith)("name", t.lcZ(33, 68, "pair_explorer.col_9"))("sortable", !1)
            }
        }
        function lr(n, i) {
            if (1 & n && t._UZ(0, "div", 84),
            2 & n) {
                const e = t.oxw();
                t.Q6J("innerHTML", e.tooltipContentTx, t.oJD)
            }
        }
        function sr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 85),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applyPriceFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("isLoading", e.isLoadingTransactions)("defaultAmountFilter", null !== (o = e.amountFilters.get(e.filterKey.PriceUSD)) && void 0 !== o ? o : null)
            }
        }
        function _r(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 85),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applyAmountUSDFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("isLoading", e.isLoadingTransactions)("defaultAmountFilter", null !== (o = e.amountFilters.get(e.filterKey.AmountUSD)) && void 0 !== o ? o : null)
            }
        }
        function gr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 86),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applyPriceETHFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("isLoading", e.isLoadingTransactions)("symbolRight", e.refTokenSymbol)("defaultAmountFilter", null !== (o = e.amountFilters.get(e.filterKey.PriceETH)) && void 0 !== o ? o : null)
            }
        }
        function pr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 86),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applySymbolFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o, a;
                t.Q6J("isLoading", e.isLoadingTransactions)("symbolRight", null !== (o = e.tokenData.symbol) && void 0 !== o ? o : "")("defaultAmountFilter", null !== (a = e.amountFilters.get(e.filterKey.AmountToken)) && void 0 !== a ? a : null)
            }
        }
        function dr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 86),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applyAmountRefFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("isLoading", e.isLoadingTransactions)("symbolRight", e.tokenRef)("defaultAmountFilter", null !== (o = e.amountFilters.get(e.filterKey.AmountRef)) && void 0 !== o ? o : null)
            }
        }
        function hr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-amount-filter", 86),
                t.NdJ("filterApplied", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.applyAmountETHFilter(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("isLoading", e.isLoadingTransactions)("symbolRight", e.refTokenSymbol)("defaultAmountFilter", null !== (o = e.amountFilters.get(e.filterKey.AmountETH)) && void 0 !== o ? o : null)
            }
        }
        function mr(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-saved-wallets", 87),
                t.NdJ("walletsFiltered", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.filterByWallet(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("walletsSelected", e.walletsSelected)("historicalWalletsSelected", e.historicalWalletsSelected)("known_wallets", e.known_wallets)("known_wallets_filtered", e.known_wallets_filtered)("chain", e.chain)("data_transactions", e.displayedTransactions)("isLoading", e.isLoadingTransactions)("user_access", e.user_access)
            }
        }
        function ur(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-select-list", 88),
                t.NdJ("itemListSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.filterByTypeTx(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                let o;
                t.Q6J("itemList", e.txTypeFilterOptions)("isLoading", e.isLoadingTransactions)("defaultSelected", null !== (o = e.txTypeFilterSelected) && void 0 !== o ? o : null)
            }
        }
        var L = (()=>{
            return (n = L || (L = {})).PriceUSD = "priceUSD",
            n.PriceETH = "priceETH",
            n.AmountToken = "amountToken",
            n.AmountRef = "amountRef",
            n.AmountETH = "amountETH",
            n.AmountUSD = "amountUSD",
            L;
            var n
        }
        )();
        let fr = (()=>{
            class n extends s.K9 {
                set allTransactions(e) {
                    this._allTransactions = [...e];
                    const o = e[e.length - 1];
                    if (this.table) {
                        const a = this.table.element.querySelectorAll("datatable-body-row")[0];
                        a && !(o.id === this._prevLastSwap?.id) && (a.classList.add("animate-tx"),
                        setTimeout(()=>{
                            a.classList.remove("animate-tx")
                        }
                        , 201)),
                        this._shouldScrollToOldest ? (this._shouldScrollToOldestTimeout && clearTimeout(this._shouldScrollToOldestTimeout),
                        this._shouldScrollToOldestTimeout = window.setTimeout(()=>this.scrollToOldest(), 200)) : this.isDataLoaded || (this.isScrollToOldestDisabled = !1)
                    }
                    this._prevLastSwap = o,
                    this.isLoadingTransactions = !1,
                    this._cdRef.detectChanges()
                }
                get allTransactions() {
                    return this._allTransactions
                }
                set displayedTransactions(e) {
                    this._displayedTransactions = [...e],
                    this._filterTransactionList()
                }
                get displayedTransactions() {
                    return this._displayedTransactions
                }
                set toggleFav(e) {
                    this._triggerTableSizeRecalculation$.next()
                }
                set fullScreen(e) {
                    this._triggerTableSizeRecalculation$.next()
                }
                set showFavoritesColumn(e) {
                    this._triggerTableSizeRecalculation$.next()
                }
                onResize() {
                    this._triggerTableSizeRecalculation$.next()
                }
                constructor(e, o, a) {
                    super(),
                    this._popoverConfig = e,
                    this._cdRef = o,
                    this._mempoolService = a,
                    this.isDataLoaded = !1,
                    this.known_wallets = [],
                    this.known_wallets_filtered = [],
                    this.botFiltered = !1,
                    this.user_access = !1,
                    this.filteredTx = !1,
                    this.data_wallets = {},
                    this.isMySwapsTable = !1,
                    this.hasFeePercentagePools = !1,
                    this.pairAddress = null,
                    this.addPosition = new t.vpe,
                    this.toggleMarkedWallet = new t.vpe,
                    this.rowActivated = new t.vpe,
                    this.infiniteScrolling = new t.vpe,
                    this.displayedTransactionsCount = new t.vpe,
                    this.loadAllTransactions = new t.vpe,
                    this._allTransactions = [],
                    this._displayedTransactions = [],
                    this.transactionsFilteredList = [],
                    this.amountFilters = new Map,
                    this.TransactionType = c.iU1,
                    this.ColumnMode = x.hq,
                    this.Chain = c.qop,
                    this.ChainPage = A.$,
                    this.tooltipContentTx = "",
                    this._triggerTableSizeRecalculation$ = new E.x,
                    this._triggerInfiniteScrolling$ = new E.x,
                    this.filterKey = L,
                    this.walletsSelected = [],
                    this.historicalWalletsSelected = [],
                    this.loading = !0,
                    this.txTypeFilterOptions = [{
                        name: "All",
                        value: null
                    }, {
                        name: "Buy",
                        value: c.iU1.BUY
                    }, {
                        name: "Sell",
                        value: c.iU1.SELL
                    }],
                    this.txTypeFilterSelected = this.txTypeFilterOptions?.find(r=>null === r.value),
                    this.maxWalletNameLength = 12,
                    this.isScrollToLatestDisabled = !0,
                    this.isScrollToOldestDisabled = !1,
                    this.isLoadingTransactions = !1,
                    this._shouldScrollToOldest = !1,
                    this.tradeHistoryRowOptions = {
                        [D.Date]: {
                            width: 110,
                            minWith: 100
                        },
                        [D.Type]: {
                            width: 70,
                            minWith: 70
                        },
                        [D.Price]: {
                            width: 95,
                            minWith: 95
                        },
                        [D.AmountUSD]: {
                            width: 80,
                            minWith: 80
                        },
                        [D.PriceETH]: {
                            width: 100,
                            minWith: 100
                        },
                        [D.AmountToken]: {
                            width: 135,
                            minWith: 135
                        },
                        [D.AmountRef]: {
                            width: 100,
                            minWith: 100
                        },
                        [D.AmountETH]: {
                            width: 100,
                            minWith: 100
                        },
                        [D.Maker]: {
                            width: 130,
                            minWith: 130
                        },
                        [D.Others]: {
                            width: 120,
                            minWith: 120
                        }
                    },
                    this.TradeHistoryProp = D,
                    this.mempoolRowsDropDownItems = [{
                        value: 3,
                        label: "3"
                    }, {
                        value: 6,
                        label: "6"
                    }, {
                        value: 12,
                        label: "12"
                    }],
                    this.mempoolRowsSelected = this.mempoolRowsDropDownItems[0],
                    this.showMempool = !0,
                    this.mempoolIsEmpty = !1,
                    this._popoverConfig.container = "body"
                }
                ngOnInit() {
                    const e = this._mempoolService.mempoolOptionsOnLocalStorage;
                    e && (this.showMempool = e.showMempool,
                    this.mempoolRowsSelected = this.mempoolRowsDropDownItems.find(o=>o.value === e.amountRowsMempool) ?? null)
                }
                ngAfterViewInit() {
                    this.loading = !1,
                    this.chainData = c.CXF.getChainData(this.chain),
                    this._cdRef.detectChanges(),
                    this._triggerTableSizeRecalculation$.pipe((0,
                    s.sL)(this), (0,
                    B.b)(20)).subscribe(()=>this._recalculateTableSize()),
                    this._triggerInfiniteScrolling$.pipe((0,
                    s.sL)(this), (0,
                    B.b)(100)).subscribe(e=>{
                        this.isLoadingTransactions = !1;
                        const o = 0 === e
                          , a = e + this.table.bodyHeight >= this.table.bodyComponent.scroller.scrollHeight;
                        o !== this.isScrollToLatestDisabled && (this.isScrollToLatestDisabled = o),
                        a !== this.isScrollToOldestDisabled && (this.isScrollToOldestDisabled = a),
                        a && !this.isDataLoaded && !this.isMySwapsTable && this.infiniteScrolling.emit(),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                onDestroy() {
                    this._triggerTableSizeRecalculation$.complete(),
                    this._triggerInfiniteScrolling$.complete()
                }
                getRowCellClass(e) {
                    return `${(e.row ?? e).type}-color`
                }
                setToolTipData(e) {
                    this.tooltipContentTx = "Total tx: <strong>" + e.numTx + '</strong><br />Buys: <strong class="buy-color">' + e.buy + '</strong> / <strong class="buy-color">' + e.totalEthbuy.toFixed(4) + " " + this.refTokenSymbol + '</strong><br />Sells: <strong class="sell-color">' + e.sell + '</strong> / <strong class="sell-color">' + e.totalEthsell.toFixed(4) + " " + this.refTokenSymbol + "</strong><br />Balance: " + (this._checkGreaterThanZero(e) ? '<strong class="buy-color">' + (e.totalEthsell - e.totalEthbuy).toFixed(4) + " " + this.refTokenSymbol + "</strong>" : '<strong class="sell-color">' + (e.totalEthsell - e.totalEthbuy).toFixed(4) + " " + this.refTokenSymbol + "</strong>")
                }
                emitAddPosition(e) {
                    this.addPosition.emit(e)
                }
                emitToggleMarkedWallet(e, o, a=!1) {
                    this._loadAllTransactions(),
                    this.toggleMarkedWallet.emit({
                        event: e,
                        makerData: o,
                        isFiltered: a
                    })
                }
                viewWallet(e) {
                    this.wallet_to_see = this.wallet_to_see === e ? null : e
                }
                emitOnRowActivated(e) {
                    this.rowActivated.emit(e)
                }
                onScroll(e) {
                    this._triggerInfiniteScrolling$.next(e)
                }
                isPageAvailableInChain(e, o) {
                    return gt.c.isPageAvailableInChain(e, o)
                }
                _recalculateTableSize() {
                    this.table && (this.table.recalculate(),
                    this._cdRef.detectChanges())
                }
                _checkGreaterThanZero(e) {
                    return e.totalEthsell - e.totalEthbuy > 0
                }
                togglePopover(e) {
                    this._loadAllTransactions(),
                    this[`popover ${e}`].toggle()
                }
                applyPriceFilter(e) {
                    this.amountFilters.set(L.PriceUSD, {
                        ...e
                    }),
                    this.togglePopover("FilterPrice"),
                    this._filterTransactionList(),
                    this._cdRef.detectChanges()
                }
                applyAmountUSDFilter(e) {
                    this.amountFilters.set(L.AmountUSD, {
                        ...e
                    }),
                    this.togglePopover("FilterAmountUSD"),
                    this._filterTransactionList()
                }
                applyPriceETHFilter(e) {
                    this.amountFilters.set(L.PriceETH, {
                        ...e
                    }),
                    this.togglePopover("FilterPriceETH"),
                    this._filterTransactionList()
                }
                applySymbolFilter(e) {
                    this.amountFilters.set(L.AmountToken, {
                        ...e
                    }),
                    this.togglePopover("FilterSymbol"),
                    this._filterTransactionList()
                }
                applyAmountRefFilter(e) {
                    this.amountFilters.set(L.AmountRef, {
                        ...e
                    }),
                    this.togglePopover("FilterTokenRef"),
                    this._filterTransactionList()
                }
                applyAmountETHFilter(e) {
                    this.amountFilters.set(L.AmountETH, {
                        ...e
                    }),
                    this.togglePopover("FilterAmountETH"),
                    this._filterTransactionList()
                }
                filterByWallet(e) {
                    this.walletsSelected = [...e.walletsSelected],
                    this.historicalWalletsSelected = [...e.historicalWalletSelected],
                    this.togglePopover("FilterWallets"),
                    this._filterTransactionList()
                }
                _removeEmptyFilters() {
                    for (const e of this.amountFilters.keys()) {
                        const o = this.amountFilters.get(e);
                        o && (o.max || o.min) || this.amountFilters.delete(e)
                    }
                    0 === this.walletsSelected.length && 0 === this.historicalWalletsSelected.length && this.clearWalletFilter()
                }
                _filterBots() {
                    this.botFiltered && (this.transactionsFilteredList = this.transactionsFilteredList.filter(e=>!e.chupacabring))
                }
                filterByTypeTx(e) {
                    this.txTypeFilterSelected = e,
                    this._filterTransactionList()
                }
                _filterByWalletsSelected() {
                    if (this.walletsSelected.length > 0 || this.historicalWalletsSelected.length > 0) {
                        this.transactionsFilteredList = this.transactionsFilteredList.filter(e=>this.historicalWalletsSelected.includes(e.maker) || this.walletsSelected.some(o=>e.maker === o.id));
                        for (const e of this.walletsSelected)
                            for (const [o,a] of this.historicalWalletsSelected.entries())
                                e.id === a && this.historicalWalletsSelected.splice(o, 1);
                        this.transactionsFilteredList = this.transactionsFilteredList.filter((e,o,a)=>s.gS.unique(e, o, a))
                    }
                }
                _filterTransactionList() {
                    this.transactionsFilteredList = [...this._displayedTransactions],
                    this._removeEmptyFilters();
                    for (const e of this.amountFilters.keys()) {
                        const o = this.amountFilters.get(e);
                        if (o)
                            switch (e) {
                            case L.PriceUSD:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "priceUSD", "price"));
                                break;
                            case L.PriceETH:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "priceUSD_ETH", "priceETH"));
                                break;
                            case L.AmountToken:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "amountToken"));
                                break;
                            case L.AmountRef:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "amountRef"));
                                break;
                            case L.AmountETH:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "amountETH"));
                                break;
                            case L.AmountUSD:
                                this.transactionsFilteredList = this.transactionsFilteredList.filter(a=>this._filterMinMax(a, o, "amountUSD"))
                            }
                    }
                    this._filterByWalletsSelected(),
                    this._filterBots(),
                    this._filterByTypeTx(),
                    this.displayedTransactionsCount.emit(this.transactionsFilteredList.length),
                    this._cdRef.detectChanges()
                }
                _filterMinMax(e, o, a, r) {
                    if (o) {
                        const l = (e[a] || (r ? e[r] ?? 0 : 0)) >= (o.min ?? 0);
                        return o.max ? l && (e[a] || (r ? e[r] ?? 0 : 0)) <= o.max : l
                    }
                    return !0
                }
                _filterByTypeTx() {
                    this.txTypeFilterSelected?.value && (this.transactionsFilteredList = this.transactionsFilteredList.filter(e=>e.type === this.txTypeFilterSelected?.value))
                }
                selectWallet(e) {
                    this.isWalletSelected(e) ? this.walletsSelected.splice(this.walletsSelected.indexOf(e), 1) : this.walletsSelected.push(e),
                    this._filterTransactionList()
                }
                removeHistoricalWalletSelected(e) {
                    this.historicalWalletsSelected.splice(e, 1),
                    this._filterTransactionList()
                }
                isWalletSelected(e) {
                    return this.walletsSelected.some(o=>o.id === e.id)
                }
                clearWalletFilter() {
                    this.walletsSelected = [],
                    this.historicalWalletsSelected = [],
                    this._cdRef.detectChanges()
                }
                ngOnChanges(e) {
                    e.botFiltered && this._filterTransactionList()
                }
                walletSelectedTrackBy(e, o) {
                    return o.id
                }
                historicalWalletsSelectedTrackBy(e) {
                    return e
                }
                walletSavedName(e) {
                    return e.length < this.maxWalletNameLength ? e : `${e.slice(0, this.maxWalletNameLength)}...`
                }
                scrollToLatest() {
                    this.isScrollToLatestDisabled = !0,
                    this.isLoadingTransactions = !0,
                    this.table?.element.querySelector(".datatable-body")?.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
                scrollToOldest() {
                    this.isScrollToOldestDisabled = !0,
                    this.isLoadingTransactions = !this.isDataLoaded || this.table.bodyHeight < this.table.bodyComponent.scroller.scrollHeight,
                    this.isDataLoaded || this.isMySwapsTable ? (this._shouldScrollToOldest = !1,
                    this.table.element.querySelector(".datatable-body")?.scrollTo({
                        top: this.table.rows.length * +this.table.rowHeight,
                        behavior: "smooth"
                    })) : (this._shouldScrollToOldest = !0,
                    this.loadAllTransactions.emit(),
                    this._cdRef.detectChanges())
                }
                _loadAllTransactions() {
                    !this.isDataLoaded && !this.isMySwapsTable && (this.isLoadingTransactions = !0,
                    this.loadAllTransactions.emit(),
                    this._cdRef.detectChanges())
                }
                changeMempoolIsEmpty(e) {
                    this.mempoolIsEmpty = e,
                    this._cdRef.detectChanges()
                }
                toggleShowMempool() {
                    this.showMempool = !this.showMempool,
                    this.saveMempoolOptionsOnLocalStorage(),
                    this._cdRef.detectChanges()
                }
                changeShowRowsMempool(e) {
                    this.mempoolRowsSelected = e,
                    this.saveMempoolOptionsOnLocalStorage(),
                    this._cdRef.detectChanges()
                }
                saveMempoolOptionsOnLocalStorage() {
                    this._mempoolService.saveMempoolOptionsOnLocalStorage({
                        showMempool: this.showMempool,
                        amountRowsMempool: this.mempoolRowsSelected?.value ?? 3
                    })
                }
                get triggerTableSizeRecalculationObservable$() {
                    return this._triggerTableSizeRecalculation$.asObservable()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.AX),t.Y36(t.sBO),t.Y36(c.uXi))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-trade-history"]],
                viewQuery: function(e, o) {
                    if (1 & e && (t.Gf(ri, 5),
                    t.Gf(ci, 5),
                    t.Gf(li, 5),
                    t.Gf(si, 5),
                    t.Gf(_i, 5),
                    t.Gf(gi, 5),
                    t.Gf(pi, 5),
                    t.Gf(di, 5),
                    t.Gf(hi, 5)),
                    2 & e) {
                        let a;
                        t.iGM(a = t.CRH()) && (o.table = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterPrice = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterAmountUSD = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterPriceETH = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterSymbol = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterTokenRef = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterAmountETH = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterTxType = a.first),
                        t.iGM(a = t.CRH()) && (o.popoverFilterWallets = a.first)
                    }
                },
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                inputs: {
                    tokenData: "tokenData",
                    isDataLoaded: "isDataLoaded",
                    allTransactions: "allTransactions",
                    displayedTransactions: "displayedTransactions",
                    known_wallets: "known_wallets",
                    known_wallets_filtered: "known_wallets_filtered",
                    botFiltered: "botFiltered",
                    chain: "chain",
                    selectedTransactionsList: "selectedTransactionsList",
                    currentFav: "currentFav",
                    user_access: "user_access",
                    refTokenSymbol: "refTokenSymbol",
                    filteredTx: "filteredTx",
                    dextScore: "dextScore",
                    data_wallets: "data_wallets",
                    teamWallet: "teamWallet",
                    wallet_to_see: "wallet_to_see",
                    tokenRef: "tokenRef",
                    isMySwapsTable: "isMySwapsTable",
                    hasFeePercentagePools: "hasFeePercentagePools",
                    toggleFav: "toggleFav",
                    fullScreen: "fullScreen",
                    showFavoritesColumn: "showFavoritesColumn",
                    pairAddress: "pairAddress"
                },
                outputs: {
                    addPosition: "addPosition",
                    toggleMarkedWallet: "toggleMarkedWallet",
                    rowActivated: "rowActivated",
                    infiniteScrolling: "infiniteScrolling",
                    displayedTransactionsCount: "displayedTransactionsCount",
                    loadAllTransactions: "loadAllTransactions"
                },
                standalone: !0,
                features: [t.qOj, t.TTD, t.jDz],
                decls: 21,
                vars: 3,
                consts: [[4, "ngIf"], ["class", "wallets-filter", 4, "ngIf"], ["class", "material table", 3, "appLoading", "sorts", "scrollbarV", "scrollbarH", "columnMode", "rows", "rowHeight", "selected", "messages", "footerHeight", "activate", "scroll", 4, "ngIf"], ["tooltipContentDirectiveTx", ""], ["filterByAmountPrice", ""], ["filterAmountUSD", ""], ["filterByAmountPriceETH", ""], ["filterByAmountToken", ""], ["filterAmountTokenRef", ""], ["filterAmountETH", ""], ["filterWallets", ""], ["filterTxType", ""], [1, "show-mempool-container"], [1, "show-mempool-button", 3, "click"], [3, "icon"], [3, "items", "selectedItem", "itemSelected", 4, "ngIf"], ["class", "mempool-empty", 4, "ngIf"], [3, "triggerTableSizeRecalculation$", "numberOfVisibleRows", "chainData", "tokenData", "pairAddress", "chain", "tableRowOptions", "refTokenSymbol", "allTransactionsSwaps", "tokenRef", "mempoolIsEmpty", 4, "ngIf"], [3, "items", "selectedItem", "itemSelected"], [1, "mempool-empty"], ["icon", "info"], [3, "triggerTableSizeRecalculation$", "numberOfVisibleRows", "chainData", "tokenData", "pairAddress", "chain", "tableRowOptions", "refTokenSymbol", "allTransactionsSwaps", "tokenRef", "mempoolIsEmpty"], [1, "wallets-filter"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["placement", "top", 1, "filter-apply", 3, "ngbTooltip", "click"], [1, "dot", 3, "ngClass"], ["icon", "times"], [1, "material", "table", 3, "appLoading", "sorts", "scrollbarV", "scrollbarH", "columnMode", "rows", "rowHeight", "selected", "messages", "footerHeight", "activate", "scroll"], ["pairs_table", ""], [3, "resizeable", "width", "minWidth", "prop", "name", "cellClass"], ["ngx-datatable-cell-template", ""], ["cellClass", "center-column-table", "headerClass", "center-column-table filter-column", 3, "resizeable", "width", "minWidth", "name"], ["ngx-datatable-header-template", ""], ["cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "width", "minWidth", "prop", "name"], ["cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "width", "minWidth", "prop", "name", 4, "ngIf"], ["cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "width", "minWidth", "sortable", 4, "ngIf"], ["cellClass", "right-column-table", "headerClass", "right-column-table", 3, "resizeable", "width", "minWidth", "name", "sortable"], ["ngx-datatable-footer-template", ""], [1, "sort", 3, "click"], [1, "sort-icon", 3, "ngClass"], ["placement", "auto", "popoverClass", "filter-trade-history-popover", "triggers", "manual", 1, "filter", 3, "ngbPopover", "autoClose", "ngClass", "click"], ["popoverFilterTxType", "ngbPopover"], ["icon", "filter"], [3, "ngClass"], ["href", "#", 3, "ngbTooltip", "click", 4, "ngIf"], ["href", "#", 3, "ngbTooltip", "click"], ["icon", "plus-circle", 1, "row-icon"], ["popoverFilterPrice", "ngbPopover"], ["popoverFilterAmountUSD", "ngbPopover"], ["popoverFilterPriceETH", "ngbPopover"], ["popoverFilterSymbol", "ngbPopover"], ["popoverFilterTokenRef", "ngbPopover"], ["popoverFilterAmountETH", "ngbPopover"], ["icon", "user-secret", "class", "chupacabring ms-1 sell-color", 3, "ngbTooltip", 4, "ngIf"], ["icon", "user-secret", 1, "chupacabring", "ms-1", "sell-color", 3, "ngbTooltip"], ["cellClass", "right-column-table", "headerClass", "right-column-table filter-column", 3, "resizeable", "width", "minWidth", "sortable"], ["placement", "auto", "popoverClass", "filter-trade-history-popover", "triggers", "manual", 1, "filter", 3, "ngbPopover", "autoClose", "click"], ["popoverFilterWallets", "ngbPopover"], ["target", "_blank", "rel", "noopener", "class", "maker-color", "placement", "top", 3, "href", "ngbTooltip", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", 1, "maker-color", 3, "href", "ngbTooltip"], [3, "appRouterLink", "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["href", "#", "placement", "top", 3, "ngbTooltip", "click"], [3, "appRouterLink"], ["name", "walletInfo", 3, "width"], ["target", "_blank", "rel", "noopener", 3, "href"], ["width", "18", "alt", "scanner logo", 1, "icon-bg-white-rounded", "me-1", 3, "src"], [3, "appRouterLink", 4, "ngIf"], ["href", "#", "placement", "top", 1, "maker-color", 3, "ngbTooltip", "click"], ["name", "walletInfo", 1, "row-icon", "me-2", 3, "width"], ["target", "_blank", "rel", "noopener", 3, "href", "ngbTooltip", "click"], ["width", "18", "alt", "scanner logo", 1, "icon-bg-white-rounded", 3, "src"], ["class", "icon-table sitemap-color ms-2", "icon", "sitemap", 3, "ngbTooltip", 4, "ngIf"], ["href", "#", 3, "ngbTooltip", "click", "mouseenter", 4, "ngIf"], ["href", "#", 3, "click", 4, "ngIf"], ["icon", "user-friends", 3, "ngbTooltip"], ["icon", "sitemap", 1, "icon-table", "sitemap-color", "ms-2", 3, "ngbTooltip"], ["href", "#", 3, "ngbTooltip", "click", "mouseenter"], ["href", "#", 3, "click"], ["icon", "filter", 1, "ms-2", "row-icon", "text-light"], [1, "table-scroll-buttons-container"], [1, "scroll-to", 3, "disabled", "click"], ["icon", "step-backward"], ["icon", "step-forward"], [1, "tooltip-text-big", "text-start", 3, "innerHTML"], ["symbolLeft", "$", 3, "isLoading", "defaultAmountFilter", "filterApplied"], [3, "isLoading", "symbolRight", "defaultAmountFilter", "filterApplied"], [3, "walletsSelected", "historicalWalletsSelected", "known_wallets", "known_wallets_filtered", "chain", "data_transactions", "isLoading", "user_access", "walletsFiltered"], [3, "itemList", "isLoading", "defaultSelected", "itemListSelected"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, Ci, 9, 6, "ng-container", 0),
                    t.YNc(1, Mi, 5, 12, "div", 1),
                    t.YNc(2, cr, 37, 75, "ngx-datatable", 2),
                    t.YNc(3, lr, 1, 1, "ng-template", null, 3, t.W1O),
                    t.YNc(5, sr, 1, 2, "ng-template", null, 4, t.W1O),
                    t.YNc(7, _r, 1, 2, "ng-template", null, 5, t.W1O),
                    t.YNc(9, gr, 1, 3, "ng-template", null, 6, t.W1O),
                    t.YNc(11, pr, 1, 3, "ng-template", null, 7, t.W1O),
                    t.YNc(13, dr, 1, 3, "ng-template", null, 8, t.W1O),
                    t.YNc(15, hr, 1, 3, "ng-template", null, 9, t.W1O),
                    t.YNc(17, mr, 1, 8, "ng-template", null, 10, t.W1O),
                    t.YNc(19, ur, 1, 3, "ng-template", null, 11, t.W1O)),
                    2 & e && (t.Q6J("ngIf", o.pairAddress && o.chainData && o.chainData.mempoolSupported && !o.hasFeePercentagePools && !o.isMySwapsTable),
                    t.xp6(1),
                    t.Q6J("ngIf", o.walletsSelected.length > 0 || o.historicalWalletsSelected.length > 0),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.loading))
                },
                dependencies: [p.O5, p.ax, b._L, p.mk, u.uH, u.BN, x.xD, x.nE, x.UC, x.tk, x.vq, x.ii, x.dX, b.o8, P.TH, f.jY, dt.lQ, P.vA, Fa, P.gG, p.OU, C.Ek, C.Pi, C.$p, C.pt, h.aw, h.X$, c.tAw, c.Atn, c.P2u, C.pT, ii, P._e],
                styles: ['[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .dxt-loading{background:rgba(17,17,17,.1);height:100%;z-index:999}.row-icon[_ngcontent-%COMP%]{font-size:13px;vertical-align:middle;color:#818ea3;margin-left:.2rem}body.dark-theme   [_nghost-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}.row-icon[_ngcontent-%COMP%]:hover{color:#fff!important}app-icon   [_nghost-%COMP%]    {color:#818ea3}body.dark-theme   [_nghost-%COMP%]   app-icon[_ngcontent-%COMP%]   [_nghost-%COMP%]    {color:#818ea3}body.dark-theme   app-icon   [_nghost-%COMP%]    {color:#818ea3}body.light   [_nghost-%COMP%]   app-icon[_ngcontent-%COMP%]   [_nghost-%COMP%]    {color:#818ea3}body.light   app-icon   [_nghost-%COMP%]    {color:#818ea3}app-icon   [_nghost-%COMP%]     :hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   app-icon[_ngcontent-%COMP%]   [_nghost-%COMP%]     :hover{color:#fff}body.dark-theme   app-icon   [_nghost-%COMP%]     :hover{color:#fff}body.light   [_nghost-%COMP%]   app-icon[_ngcontent-%COMP%]   [_nghost-%COMP%]     :hover{color:#142028}body.light   app-icon   [_nghost-%COMP%]     :hover{color:#142028}.maker-color[_ngcontent-%COMP%]{color:#00b8d8}.sitemap-color[_ngcontent-%COMP%]{color:#f8b60f}.badge[_ngcontent-%COMP%]{padding:.1875rem .375rem 0}.border-bottom-danger[_ngcontent-%COMP%]{border-bottom:.1875rem solid #ea3943}.border-bottom-success[_ngcontent-%COMP%]{border-bottom:.1875rem solid #17c671}.table[_ngcontent-%COMP%]{max-height:calc(100vh - 288px)}.table-scroll-buttons-container[_ngcontent-%COMP%]{display:flex;flex:1 1 100%;flex-flow:row nowrap;align-items:flex-start;justify-content:flex-end;gap:.75rem;height:3.125rem;width:100%;padding:.5rem 1.25rem 0}.scroll-to[_ngcontent-%COMP%]{color:#142028;background-color:#e2e7ec;width:2.25rem;height:1.5rem;border:none;border-radius:.75rem;padding:.375rem .75rem;display:flex;align-items:center;justify-content:center}body.dark-theme   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]{background-color:#e2e7ec}.scroll-to[_ngcontent-%COMP%]:disabled{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]:disabled{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]:disabled{color:#818ea3}body.light   [_nghost-%COMP%]   .scroll-to[_ngcontent-%COMP%]:disabled{color:#818ea3}body.light[_ngcontent-%COMP%]   .scroll-to[_ngcontent-%COMP%]:disabled{color:#818ea3}[_nghost-%COMP%]  .ngx-datatable.material .datatable-body .datatable-body-cell{display:flex;align-items:center}[_nghost-%COMP%]  .ngx-datatable.material .datatable-header .datatable-header-cell .resize-handle--not-resizable{width:0;padding:0;display:none}[_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap{display:flex;align-items:center;gap:.25rem;justify-content:flex-end}[_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort{background:none;border:none;color:#818ea3;padding:0}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort{color:#818ea3}body.dark-theme   [_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort{color:#818ea3}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort{color:#818ea3}body.light   [_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort{color:#818ea3}[_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort fa-icon{margin-left:.25rem}[_nghost-%COMP%]  .ngx-datatable.material .datatable-header .filter-column .datatable-header-cell-template-wrap .sort-btn{display:none}.filter[_ngcontent-%COMP%]{background:none;border:none;color:#818ea3;padding:0;font-size:.625rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{color:#818ea3}.filter.is-apply[_ngcontent-%COMP%]{color:#00b8d8!important}.filter[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{cursor:pointer}.sort-icon[_ngcontent-%COMP%]{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.sort-icon[_ngcontent-%COMP%]:before{font-family:data-table,serif!important;font-style:normal!important;font-weight:400!important;font-variant:normal!important;text-transform:none!important;speak:none;line-height:1;-webkit-font-smoothing:antialiased}.sort-icon.sort[_ngcontent-%COMP%]{margin-right:-.25rem}.sort-icon.sort[_ngcontent-%COMP%]:before{content:"c";opacity:.5}.sort-icon.sort-down[_ngcontent-%COMP%]:before{content:"f"}.sort-icon.sort-up[_ngcontent-%COMP%]:before{content:"e"}.wallets-filter[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.25rem;padding:0 .5rem}.wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{display:flex;background-color:#e2e7ec;color:#142028;align-items:center;font-size:.6875rem;font-weight:400;text-decoration:none;border-radius:3.125rem;padding:.25rem .5rem;cursor:pointer;border:none}body.dark-theme   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#142028}.wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:3.125rem;margin-right:.25rem}.wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff;color:#142028;border-radius:3.125rem;width:.9375rem;height:.9375rem;display:flex;align-items:center;justify-content:center;margin-left:.25rem}body.dark-theme   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .wallets-filter[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.show-mempool-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.875rem;padding:0 .625rem .625rem}.show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;border:none;height:2rem;border-radius:1.75rem;background-color:#00b8d8;font-size:13px;font-weight:400;padding:.375rem 1.125rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button[_ngcontent-%COMP%]{color:#142028}.show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button.not-show[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button.not-show[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button.not-show[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button.not-show[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   .show-mempool-button.not-show[_ngcontent-%COMP%]{background-color:#e2e7ec}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec;color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#23323c}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#fff}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#142028}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#142028}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec;color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#fff}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#142028}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6;color:#00b8d8!important}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{background-color:#f4f5f6}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:last-child{border-bottom-left-radius:.9375rem;border-bottom-right-radius:.9375rem}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}body.dark-theme   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#fff}body.light   [_nghost-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}body.light[_ngcontent-%COMP%]   .show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{color:#142028}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list{width:100%;max-height:200px;overflow-y:auto}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .label{text-transform:none}.show-mempool-container[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-no-radius{border-radius:.625rem .625rem 0 0}.mempool-empty[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;font-size:13px}.mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028;width:1.25rem;height:1.25rem;border-radius:3.125rem;display:flex;justify-content:center;align-items:center}body.dark-theme   [_nghost-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .mempool-empty[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}'],
                data: {
                    animation: [(0,
                    y.X$)("toggleAnimation", [(0,
                    y.SB)("in", (0,
                    y.oB)({
                        opacity: 1
                    })), (0,
                    y.eR)(":enter", [(0,
                    y.oB)({
                        opacity: 0
                    }), (0,
                    y.jt)(200)]), (0,
                    y.eR)(":leave", (0,
                    y.jt)(200, (0,
                    y.oB)({
                        opacity: 0
                    })))])]
                },
                changeDetection: 0
            }),
            n
        }
        )();
        function Cr(n, i) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "appRoundNumber"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij("$", t.lcZ(2, 1, e.variation.volume), "")
            }
        }
        const br = function(n, i) {
            return {
                "buy-color": n,
                "sell-color": i
            }
        };
        function Pr(n, i) {
            if (1 & n && (t.TgZ(0, "span", 3),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.WLB(5, br, e.priceVariation && e.priceVariation > 0, e.priceVariation && e.priceVariation < 0)),
                t.xp6(1),
                t.hij(" ", t.xi3(2, 2, e.priceVariationWithSign, "1.2-2"), "% ")
            }
        }
        function xr(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1, "-"),
            t.qZA())
        }
        const nt = function(n) {
            return {
                active: n
            }
        };
        let Mr = (()=>{
            class n {
                constructor() {
                    this.intervalChange = new t.vpe
                }
                get priceVariation() {
                    return this.variation.priceVariation ?? null
                }
                get priceVariationWithSign() {
                    return this.priceVariation && this.priceVariation > 0 ? `+${this.priceVariation}` : this.priceVariation
                }
                onIntervalClicked(e) {
                    this.intervalChange.next(e)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-interval-information"]],
                inputs: {
                    selectedInterval: "selectedInterval",
                    variation: "variation",
                    currentPrice: "currentPrice"
                },
                outputs: {
                    intervalChange: "intervalChange"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 48,
                vars: 52,
                consts: [[1, "interval-information"], [1, "interval-information__intervals"], [1, "interval", 3, "click"], [3, "ngClass"], [1, "interval-information__values"], [1, "value"], [4, "ngIf", "ngIfElse"], [3, "ngClass", 4, "ngIf", "ngIfElse"], ["noVariationData", ""]],
                template: function(e, o) {
                    if (1 & e && (t.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2),
                    t.NdJ("click", function() {
                        return o.onIntervalClicked("5m")
                    }),
                    t.TgZ(3, "span", 3),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA()(),
                    t.TgZ(6, "div", 2),
                    t.NdJ("click", function() {
                        return o.onIntervalClicked("1h")
                    }),
                    t.TgZ(7, "span", 3),
                    t._uU(8),
                    t.ALo(9, "translate"),
                    t.qZA()(),
                    t.TgZ(10, "div", 2),
                    t.NdJ("click", function() {
                        return o.onIntervalClicked("6h")
                    }),
                    t.TgZ(11, "span", 3),
                    t._uU(12),
                    t.ALo(13, "translate"),
                    t.qZA()(),
                    t.TgZ(14, "div", 2),
                    t.NdJ("click", function() {
                        return o.onIntervalClicked("24h")
                    }),
                    t.TgZ(15, "span", 3),
                    t._uU(16),
                    t.ALo(17, "translate"),
                    t.qZA()(),
                    t.TgZ(18, "div", 2),
                    t.NdJ("click", function() {
                        return o.onIntervalClicked("7d")
                    }),
                    t.TgZ(19, "span", 3),
                    t._uU(20),
                    t.ALo(21, "translate"),
                    t.qZA()()(),
                    t.TgZ(22, "div", 4)(23, "div", 5),
                    t._uU(24),
                    t.ALo(25, "translate"),
                    t.TgZ(26, "span"),
                    t._uU(27),
                    t.qZA()(),
                    t.TgZ(28, "div", 5),
                    t._uU(29),
                    t.ALo(30, "translate"),
                    t.TgZ(31, "span"),
                    t._uU(32),
                    t.qZA()(),
                    t.TgZ(33, "div", 5),
                    t._uU(34),
                    t.ALo(35, "translate"),
                    t.TgZ(36, "span"),
                    t._uU(37),
                    t.qZA()(),
                    t.TgZ(38, "div", 5),
                    t._uU(39),
                    t.ALo(40, "translate"),
                    t.YNc(41, Cr, 3, 3, "span", 6),
                    t.qZA(),
                    t.TgZ(42, "div", 5),
                    t._uU(43),
                    t.ALo(44, "translate"),
                    t.YNc(45, Pr, 3, 8, "span", 7),
                    t.qZA()()(),
                    t.YNc(46, xr, 2, 0, "ng-template", null, 8, t.W1O)),
                    2 & e) {
                        const a = t.MAs(47);
                        t.xp6(3),
                        t.Q6J("ngClass", t.VKq(42, nt, "5m" === o.selectedInterval)),
                        t.xp6(1),
                        t.Oqu(t.lcZ(5, 22, "pair_explorer.5_min")),
                        t.xp6(3),
                        t.Q6J("ngClass", t.VKq(44, nt, "1h" === o.selectedInterval)),
                        t.xp6(1),
                        t.Oqu(t.lcZ(9, 24, "pair_explorer.1_hour")),
                        t.xp6(3),
                        t.Q6J("ngClass", t.VKq(46, nt, "6h" === o.selectedInterval)),
                        t.xp6(1),
                        t.Oqu(t.lcZ(13, 26, "pair_explorer.6_hour")),
                        t.xp6(3),
                        t.Q6J("ngClass", t.VKq(48, nt, "24h" === o.selectedInterval)),
                        t.xp6(1),
                        t.Oqu(t.lcZ(17, 28, "pair_explorer.1_day")),
                        t.xp6(3),
                        t.Q6J("ngClass", t.VKq(50, nt, "7d" === o.selectedInterval)),
                        t.xp6(1),
                        t.Oqu(t.lcZ(21, 30, "pair_explorer.7_day")),
                        t.xp6(4),
                        t.hij(" ", t.lcZ(25, 32, "pair_explorer.txs"), " "),
                        t.xp6(3),
                        t.Oqu(o.variation && null != o.variation.swaps ? o.variation.swaps : "-"),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(30, 34, "pair_explorer.interval_buys"), " "),
                        t.xp6(3),
                        t.Oqu(o.variation && null != o.variation.buys ? o.variation.buys : "-"),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(35, 36, "pair_explorer.interval_sells"), " "),
                        t.xp6(3),
                        t.Oqu(o.variation && null != o.variation.sells ? o.variation.sells : "-"),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(40, 38, "pair_explorer.vol"), " "),
                        t.xp6(2),
                        t.Q6J("ngIf", o.variation && null != o.variation.volume)("ngIfElse", a),
                        t.xp6(2),
                        t.hij(" ", t.lcZ(44, 40, "pair_explorer.var"), " "),
                        t.xp6(2),
                        t.Q6J("ngIf", o.variation && null != o.priceVariation)("ngIfElse", a)
                    }
                },
                dependencies: [p.mk, p.O5, p.JJ, C.WA, h.aw, h.X$],
                styles: [".interval-information[_ngcontent-%COMP%]{width:18.75rem}.interval-information__intervals[_ngcontent-%COMP%]{background-color:#e2e7ec;border-radius:.75rem;padding:.375rem .625rem;display:flex;justify-content:space-between}body.dark-theme   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]{background-color:#e2e7ec}.interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]{color:#818ea3;font-size:13px;display:flex;flex:1 1 0px;justify-content:center;cursor:pointer}.interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.3125rem .75rem;border-radius:.5rem}.interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#fff;color:#142028}body.dark-theme   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .interval-information__intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]{color:#142028}.interval-information__values[_ngcontent-%COMP%]{padding:.5rem .625rem;display:flex;justify-content:space-between;flex:1 1 0px}.interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:12px;color:#818ea3;flex:1;display:flex;flex-direction:column;align-items:center}.interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.buy-color), .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sell-color){color:#142028}body.dark-theme   [_nghost-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.buy-color), body.dark-theme   [_nghost-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sell-color){color:#fff}body.dark-theme[_ngcontent-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.buy-color), body.dark-theme[_ngcontent-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sell-color){color:#fff}body.light   [_nghost-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.buy-color), body.light   [_nghost-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sell-color){color:#142028}body.light[_ngcontent-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.buy-color), body.light[_ngcontent-%COMP%]   .interval-information__values[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.sell-color){color:#142028}@media (max-width: 767px){.interval-information[_ngcontent-%COMP%]{width:100%}}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Or = g(95615)
          , kr = g(78304);
        const Pt = function() {
            return ["&", "'"]
        }
          , yr = function() {
            return ["fal", "times"]
        };
        let wr = (()=>{
            class n {
                constructor() {
                    this.coinzillaBannerClosed = new t.vpe
                }
                closeCoinzillaBanner(e) {
                    e.preventDefault(),
                    e.stopImmediatePropagation(),
                    this.coinzillaBannerClosed.emit()
                }
                linkClick(e) {
                    e.stopImmediatePropagation()
                }
                get name() {
                    return s.LC.revertHtmlEntities(this.coinzillaAd.name)
                }
                get descriptionShort() {
                    return s.LC.revertHtmlEntities(this.coinzillaAd.description_short)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-coinzilla-banner"]],
                inputs: {
                    coinzillaAd: "coinzillaAd"
                },
                outputs: {
                    coinzillaBannerClosed: "coinzillaBannerClosed"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 20,
                vars: 26,
                consts: [[1, "coinzilla-banner"], ["rel", "noreferrer noopener", "target", "_blank", 1, "coinzilla-banner-container", 3, "href", "click"], [1, "header-container"], [3, "alt", "src"], [1, "title"], [1, "body-container"], [1, "description"], [1, "cta-button"], [1, "coinzilla-banner__close"], [1, "warning-banner"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "a", 1),
                    t.NdJ("click", function(r) {
                        return o.linkClick(r)
                    }),
                    t.TgZ(2, "div", 2),
                    t._UZ(3, "img", 3),
                    t.TgZ(4, "span", 4),
                    t._uU(5),
                    t.ALo(6, "appSafe"),
                    t.qZA()(),
                    t.TgZ(7, "div", 5)(8, "span", 6),
                    t._uU(9),
                    t.ALo(10, "appSafe"),
                    t.TgZ(11, "span", 7),
                    t._uU(12),
                    t.ALo(13, "appSafe"),
                    t.qZA()()()(),
                    t.TgZ(14, "div", 8)(15, "span", 9),
                    t._uU(16, "Ad"),
                    t.qZA(),
                    t.TgZ(17, "button", 10),
                    t.NdJ("click", function(r) {
                        return o.closeCoinzillaBanner(r)
                    }),
                    t._UZ(18, "fa-icon", 11),
                    t.ALo(19, "translate"),
                    t.qZA()()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("href", o.coinzillaAd.url, t.LSH),
                    t.xp6(2),
                    t.Q6J("alt", o.coinzillaAd.name)("src", o.coinzillaAd.thumbnail, t.LSH),
                    t.xp6(2),
                    t.Oqu(t.Dn7(6, 8, o.name, 20, t.DdM(22, Pt))),
                    t.xp6(4),
                    t.hij("", t.Dn7(10, 12, o.descriptionShort, 60, t.DdM(23, Pt)), " "),
                    t.xp6(3),
                    t.Oqu(t.Dn7(13, 16, o.coinzillaAd.cta_button, 20, t.DdM(24, Pt))),
                    t.xp6(6),
                    t.Q6J("icon", t.DdM(25, yr))("ngbTooltip", t.lcZ(19, 20, "home.close")))
                },
                dependencies: [u.uH, u.BN, b._L, C.yl, h.aw, h.X$],
                styles: [".coinzilla-banner[_ngcontent-%COMP%]{position:relative}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#e2e7ec;border-radius:.625rem;padding:.4375rem .875rem;display:flex;flex-direction:column;gap:.25rem}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]{background-color:#e2e7ec}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#142028}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.875rem}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.875rem;width:1.875rem;border-radius:3.125rem}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:13px;color:#142028;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]{display:flex}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170;font-size:13px;margin-right:.25rem}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#3d5170}.coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028;font-weight:500;font-size:13px}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .coinzilla-banner[_ngcontent-%COMP%]   .coinzilla-banner-container[_ngcontent-%COMP%]   .body-container[_ngcontent-%COMP%]   .cta-button[_ngcontent-%COMP%]{color:#142028}.coinzilla-banner__close[_ngcontent-%COMP%]{position:absolute;top:.4375rem;right:.875rem;display:flex;align-items:center;gap:.875rem}.coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{font-size:13px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .warning-banner[_ngcontent-%COMP%], .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#818ea3}.coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:auto;height:auto;background:none;font-size:13px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .coinzilla-banner__close[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Tr = g(65679)
          , vr = g(41945)
          , qt = g(93867)
          , Sr = g(37885)
          , Ar = g(51303)
          , Zr = g(92253)
          , Lr = g(931)
          , Ir = g(1307);
        function Dr(n, i) {
            if (1 & n && (t.O4$(),
            t.TgZ(0, "linearGradient", 14),
            t._UZ(1, "stop", 15)(2, "stop", 16),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.uIk("stop-color", e.colorValue),
                t.xp6(1),
                t.uIk("stop-color", e.colorValue)
            }
        }
        function Er(n, i) {
            if (1 & n && (t.O4$(),
            t.kcU(),
            t.TgZ(0, "div", 17)(1, "strong"),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, "span"),
            t._uU(4, "/99"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij(" ", e.dextScore.value, " ")
            }
        }
        function Jr(n, i) {
            if (1 & n && (t.O4$(),
            t.kcU(),
            t.TgZ(0, "div", 17),
            t._uU(1, "--"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.ekj("dext-value__empty", 0 === e.dextScore.value)
            }
        }
        function Ur(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.dext_score_description"), ": "))
        }
        function Nr(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.dext_score_description_tablet"), ": "))
        }
        function qr(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.dextscore_not_calculated"), " "))
        }
        const Qt = function(n) {
            return {
                "color-red": n
            }
        };
        function Qr(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 20),
            t._UZ(2, "fa-icon", 21),
            t.TgZ(3, "span", 22),
            t._uU(4),
            t.qZA(),
            t.TgZ(5, "span", 23)(6, "span"),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, "span", 24),
            t._uU(9),
            t.qZA()()(),
            t.BQk()),
            2 & n) {
                const e = i.$implicit
                  , o = i.index
                  , a = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngbTooltip", a.dextScoreData.categories[o] + ": " + a.dextScoreData.series[o] + " points"),
                t.xp6(1),
                t.Q6J("icon", e),
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(7, Qt, a.dextScoreData.series[o] < 25)),
                t.xp6(1),
                t.hij("", a.dextScoreData.series[o], "pt"),
                t.xp6(3),
                t.hij("", a.dextScoreData.categories[o], ": "),
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(9, Qt, a.dextScoreData.series[o] < 25)),
                t.xp6(1),
                t.hij("", a.dextScoreData.series[o], " points")
            }
        }
        function Fr(n, i) {
            if (1 & n && (t.TgZ(0, "div", 18),
            t.YNc(1, Qr, 10, 11, "ng-container", 19),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngForOf", e.dextScoreData.icons)
            }
        }
        const Hr = function(n) {
            return {
                "tablet-layout": n
            }
        }
          , Rr = function(n) {
            return {
                "stroke-dashoffset": n
            }
        };
        function Yr(n, i) {
            if (1 & n && (t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3),
            t.O4$(),
            t.TgZ(3, "svg", 4),
            t.YNc(4, Dr, 3, 2, "linearGradient", 5),
            t._UZ(5, "path", 6)(6, "path", 7),
            t.qZA(),
            t.YNc(7, Er, 5, 1, "div", 8),
            t.YNc(8, Jr, 2, 2, "ng-template", null, 9, t.W1O),
            t.qZA()(),
            t.kcU(),
            t.TgZ(10, "div", 10)(11, "div", 11)(12, "strong"),
            t._uU(13),
            t.ALo(14, "translate"),
            t.qZA()(),
            t.TgZ(15, "div", 11),
            t.YNc(16, Ur, 3, 3, "span", 12),
            t.YNc(17, Nr, 3, 3, "span", 12),
            t.YNc(18, qr, 3, 3, "span", 12),
            t.qZA(),
            t.YNc(19, Fr, 2, 1, "div", 13),
            t.qZA()()),
            2 & n) {
                const e = t.MAs(9)
                  , o = t.oxw();
                t.Q6J("ngClass", t.VKq(12, Hr, o.isTablet)),
                t.xp6(4),
                t.Q6J("ngIf", 0 !== o.dextScore.value),
                t.xp6(2),
                t.Q6J("ngStyle", t.VKq(14, Rr, o.loadScore)),
                t.xp6(1),
                t.Q6J("ngIf", 0 !== o.dextScore.value)("ngIfElse", e),
                t.xp6(6),
                t.hij(" ", t.lcZ(14, 10, o.dextScore.value || 0 === o.dextScore.value ? "pair_explorer.dext_score" : "pair_explorer.generating_score"), " "),
                t.xp6(3),
                t.Q6J("ngIf", !o.isTablet && 0 !== o.dextScore.value),
                t.xp6(1),
                t.Q6J("ngIf", o.isTablet && 0 !== o.dextScore.value),
                t.xp6(1),
                t.Q6J("ngIf", 0 === o.dextScore.value),
                t.xp6(1),
                t.Q6J("ngIf", 0 !== o.dextScore.value)
            }
        }
        let Wr = (()=>{
            class n extends s.K9 {
                constructor(e, o) {
                    super(),
                    this._cdRef = e,
                    this._breakpointObserver = o,
                    this.isTablet = !1
                }
                ngOnInit() {
                    this._breakpointObserver.observe([P.K5, z.u3.XSmall]).pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        this.isTablet = e.breakpoints[P.K5] && !e.breakpoints[z.u3.XSmall],
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
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO),t.Y36(z.Yg))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-dext-score"]],
                inputs: {
                    dextScoreData: "dextScoreData",
                    dextScore: "dextScore"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 1,
                vars: 1,
                consts: [["class", "dext-score-component", 3, "ngClass", 4, "ngIf"], [1, "dext-score-component", 3, "ngClass"], ["id", "progressDext", 1, "progress-container"], [1, "progress-value-container"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 80 50"], ["id", "gradient", "x1", "0", "y1", "0", "x2", "0", "y2", "100%", 4, "ngIf"], ["d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", "fill", "none", 1, "muted"], ["id", "dextValue", "fill", "none", "d", "M 8.169 40 A 31.831,31.831 0, 0, 1 71.831 40", 1, "dext-value", 3, "ngStyle"], ["class", "dext-value", 4, "ngIf", "ngIfElse"], ["noDextScore", ""], [1, "info-dext-container"], [1, "info-container"], [4, "ngIf"], ["class", "icon-container", 4, "ngIf"], ["id", "gradient", "x1", "0", "y1", "0", "x2", "0", "y2", "100%"], ["offset", "0%"], ["offset", "100%"], [1, "dext-value"], [1, "icon-container"], [4, "ngFor", "ngForOf"], ["placement", "auto", 3, "ngbTooltip"], [3, "icon"], [1, "score-summarized", 3, "ngClass"], [1, "score-detailed"], [3, "ngClass"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, Yr, 20, 16, "div", 0),
                    2 & e && t.Q6J("ngIf", !!o.dextScore)
                },
                dependencies: [p.O5, p.mk, p.PC, p.ax, b._L, u.uH, u.BN, h.aw, h.X$],
                styles: [".dext-score-component[_ngcontent-%COMP%]{padding:1.2rem;display:flex;flex-direction:column}.dext-score-component.tablet-layout[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start;align-items:flex-end;align-content:flex-end}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{order:2}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .info-dext-container[_ngcontent-%COMP%]{order:1;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{flex-direction:column;justify-content:space-around;align-items:flex-start;align-content:flex-start}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:none}.dext-score-component.tablet-layout[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;order:1}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{width:50%;justify-content:flex-start}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-value-container[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:90px}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:8.125rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{stroke-linecap:round;stroke-width:4}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%]{stroke:#cacedb}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{stroke:url(#gradient);stroke-dasharray:100;stroke-dashoffset:100}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;top:2.1875rem}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]{top:4.25rem}}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028;margin-top:0;font-size:2rem;line-height:3rem;font-weight:500}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:1.5rem}.dext-score-component[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .dext-value__empty[_ngcontent-%COMP%]{top:3.125rem;font-size:28px}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center;color:#142028}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-align:center;font-weight:500;font-size:14px;line-height:1.3125rem;margin-bottom:.25rem}.dext-score-component[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:1.125rem;margin:.3125rem 0}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;align-content:center;margin-top:.25rem;color:#142028;font-size:.6875rem}body.dark-theme   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{color:#142028}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .color-red[_ngcontent-%COMP%]{color:#ea3943!important}@media (min-width: 600px) and (max-width: 1023px){.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{gap:.1875rem}}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:.25rem;font-size:.6875rem;line-height:1rem}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-summarized[_ngcontent-%COMP%]{display:inline}.dext-score-component[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .score-detailed[_ngcontent-%COMP%]{display:none;justify-content:flex-start}.info-dext-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;order:2}@media (min-width: 600px) and (max-width: 1023px){.info-dext-container[_ngcontent-%COMP%]{width:50%}}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function Br(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 7)(1, "span")(2, "span"),
                t._uU(3),
                t.ALo(4, "slice"),
                t.qZA(),
                t._uU(5, "... "),
                t.TgZ(6, "span"),
                t._uU(7),
                t.ALo(8, "slice"),
                t.qZA()(),
                t.TgZ(9, "a", 8, 9),
                t.NdJ("click", function(a) {
                    t.CHM(e);
                    const r = t.MAs(10)
                      , l = t.oxw().row
                      , _ = t.oxw(2);
                    return t.KtG(_.copyText(a, l.address, _.chain, r))
                }),
                t.ALo(11, "translate"),
                t._UZ(12, "fa-icon", 10),
                t.qZA(),
                t.TgZ(13, "a", 11),
                t.ALo(14, "scannerWalletUrl"),
                t._UZ(15, "img", 12),
                t.ALo(16, "scannerLogoUrl"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(2);
                t.xp6(3),
                t.Oqu(t.Dn7(4, 6, e.address, 0, 6)),
                t.xp6(4),
                t.Oqu(t.Dn7(8, 10, e.address, 38, 42)),
                t.xp6(2),
                t.s9C("ngbTooltip", t.lcZ(11, 14, "user.copy_address")),
                t.xp6(3),
                t.Q6J("icon", "copy"),
                t.xp6(1),
                t.Q6J("href", t.xi3(14, 16, o.chain, e.address), t.LSH),
                t.xp6(2),
                t.Q6J("src", t.lcZ(16, 19, o.chain), t.LSH)
            }
        }
        function zr(n, i) {
            1 & n && (t.TgZ(0, "div")(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_explorer.remaining_holders")))
        }
        function Vr(n, i) {
            if (1 & n && (t.YNc(0, Br, 17, 21, "div", 6),
            t.YNc(1, zr, 4, 3, "div", 0)),
            2 & n) {
                const e = i.row;
                t.Q6J("ngIf", "rest" !== e.address),
                t.xp6(1),
                t.Q6J("ngIf", "rest" === e.address)
            }
        }
        function Gr(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.hij("", e.supplyPercent, "%")
            }
        }
        function $r(n, i) {
            if (1 & n && (t.TgZ(0, "div", 13),
            t._UZ(1, "div", 14),
            t.qZA()),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Udp("width", e.supplyPercent + "%")
            }
        }
        function jr(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, e.amount, "1.0-0"))
            }
        }
        function Kr(n, i) {
            1 & n && t.YNc(0, jr, 3, 4, "div", 0),
            2 & n && t.Q6J("ngIf", i.row.amount > 0)
        }
        function Xr(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.hij("$", t.xi3(2, 1, e.value, "1.0-0"), "")
            }
        }
        function tc(n, i) {
            1 & n && t.YNc(0, Xr, 3, 4, "div", 0),
            2 & n && t.Q6J("ngIf", i.row.amount > 0)
        }
        function ec(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "ngx-datatable", 1)(2, "ngx-datatable-column", 2),
            t.ALo(3, "translate"),
            t.YNc(4, Vr, 2, 2, "ng-template", 3),
            t.qZA(),
            t.TgZ(5, "ngx-datatable-column", 4),
            t.ALo(6, "translate"),
            t.YNc(7, Gr, 2, 1, "ng-template", 3),
            t.qZA(),
            t.TgZ(8, "ngx-datatable-column", 5),
            t.YNc(9, $r, 2, 2, "ng-template", 3),
            t.qZA(),
            t.TgZ(10, "ngx-datatable-column", 4),
            t.ALo(11, "translate"),
            t.YNc(12, Kr, 1, 1, "ng-template", 3),
            t.qZA(),
            t.TgZ(13, "ngx-datatable-column", 2),
            t.ALo(14, "translate"),
            t.YNc(15, tc, 1, 1, "ng-template", 3),
            t.qZA()(),
            t.BQk()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("scrollbarH", !0)("columnMode", e.ColunmMode.force)("rows", e.rows)("rowHeight", 42),
                t.xp6(1),
                t.s9C("name", t.lcZ(3, 29, "wallet_info.address")),
                t.Q6J("resizeable", !1)("sortable", !1)("width", 170)("minWidth", 170)("maxWidth", 170),
                t.xp6(3),
                t.s9C("name", t.lcZ(6, 31, "pair_explorer.supply")),
                t.Q6J("resizeable", !1)("sortable", !1)("width", 75)("minWidth", 75),
                t.xp6(3),
                t.Q6J("sortable", !1)("width", 215)("minWidth", 215),
                t.xp6(2),
                t.s9C("name", t.lcZ(11, 33, "pair_explorer.amount")),
                t.Q6J("resizeable", !1)("sortable", !1)("width", 175)("minWidth", 175),
                t.xp6(3),
                t.s9C("name", t.lcZ(14, 35, "pair_explorer.value")),
                t.Q6J("resizeable", !1)("sortable", !1)("width", 130)("minWidth", 130)("maxWidth", 130)
            }
        }
        function nc(n, i) {
            1 & n && (t.ynx(0),
            t.TgZ(1, "div", 15),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.BQk()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_explorer.no_data_holders")))
        }
        let oc = (()=>{
            class n {
                set tokenAudit(e) {
                    this._tokenAudit = e ?? null,
                    this.actualPrice && this._setTableData()
                }
                get tokenAudit() {
                    return this._tokenAudit
                }
                set actualPrice(e) {
                    this._actualPrice = e,
                    this._setTableData()
                }
                get actualPrice() {
                    return this._actualPrice
                }
                constructor(e) {
                    this._cdRef = e,
                    this.chain = c.qop.Ethereum,
                    this.rows = [],
                    this.ColunmMode = x.hq,
                    this.noData = !0
                }
                copyText(e, o, a, r) {
                    e.stopPropagation();
                    const l = c.LJP.getPublicAddress(o, a);
                    (0,
                    P.vQ)(`${l}`, r)
                }
                _setTableData() {
                    if (this.tokenAudit && this.actualPrice > 0) {
                        const e = this._tokenAudit?.external?.goplus?.holders ?? [];
                        e.length > 0 && (this.rows = e.map(o=>({
                            ...o,
                            value: (o.amount * this.actualPrice).toFixed(2)
                        })).slice(0, 10),
                        this.rows.push({
                            address: "rest",
                            supplyPercent: Number((100 - (e?.reduce((o,a)=>o + a.supplyPercent, 0) ?? 0)).toFixed(2)),
                            amount: 0,
                            value: "0"
                        }),
                        this.noData = !1,
                        this._cdRef.detectChanges())
                    }
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-holders-table"]],
                inputs: {
                    tokenAudit: "tokenAudit",
                    actualPrice: "actualPrice",
                    chain: "chain"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 2,
                vars: 2,
                consts: [[4, "ngIf"], [1, "material", "table", 3, "scrollbarH", "columnMode", "rows", "rowHeight"], [3, "name", "resizeable", "sortable", "width", "minWidth", "maxWidth"], ["ngx-datatable-cell-template", ""], [3, "name", "resizeable", "sortable", "width", "minWidth"], ["name", "", 3, "sortable", "width", "minWidth"], ["class", "d-flex justify-content-between", 4, "ngIf"], [1, "d-flex", "justify-content-between"], ["href", "javascript:", "placement", "auto", 1, "copy-link", "ms-2", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], [1, "copy-icon", 3, "icon"], ["target", "_blank", "rel", "noopener noreferrer", 1, "scanner-link", "ms-2", 3, "href"], ["alt", "scanner-icon", 3, "src"], [1, "progress"], ["role", "progressbar", 1, "progress-bar"], [1, "no-holders"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, ec, 16, 37, "ng-container", 0),
                    t.YNc(1, nc, 4, 3, "ng-container", 0)),
                    2 & e && (t.Q6J("ngIf", !o.noData),
                    t.xp6(1),
                    t.Q6J("ngIf", o.noData))
                },
                dependencies: [p.O5, x.xD, x.nE, x.UC, x.vq, b._L, u.uH, u.BN, p.OU, p.JJ, h.aw, h.X$, c.tAw, c.P2u],
                styles: ["ngx-datatable.material[_ngcontent-%COMP%]{display:flex;min-height:24.375rem;height:auto;max-height:34.375rem;justify-content:space-between}ngx-datatable.material[_ngcontent-%COMP%]   datatable-body-cell[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px}.copy-link[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .copy-link[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .copy-link[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .copy-link[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .copy-link[_ngcontent-%COMP%]{color:#818ea3}.copy-link[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem}.scanner-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-color:#fff;border:.0625rem solid white;border-radius:50%;height:1.25rem;vertical-align:middle;width:1.25rem}.progress[_ngcontent-%COMP%]{background-color:#3a4956;height:.375rem}.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:#fff;height:.375rem}.no-holders[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:20px;line-height:26px;align-items:center;display:flex;height:24.375rem;justify-content:center;width:100%}"],
                changeDetection: 0
            }),
            n
        }
        )();
        function ac(n, i) {
            if (1 & n && t._UZ(0, "input", 13),
            2 & n) {
                const e = t.oxw().$implicit;
                t.Q6J("formControl", e._id)
            }
        }
        function ic(n, i) {
            if (1 & n && (t.TgZ(0, "td")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundBigNumber"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw().index
                  , o = t.oxw(2);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 1, o.myPositions[e].amount))
            }
        }
        function rc(n, i) {
            if (1 & n && (t.TgZ(0, "td")(1, "div"),
            t._uU(2),
            t.ALo(3, "appRoundPrices"),
            t.qZA(),
            t.TgZ(4, "div", 14),
            t._uU(5),
            t.ALo(6, "appRoundPrices"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw().index
                  , o = t.oxw(2);
                t.xp6(2),
                t.hij("$", t.lcZ(3, 3, o.myPositions[e].price_usd), ""),
                t.xp6(3),
                t.AsE("", t.lcZ(6, 5, o.myPositions[e].price_eth), " ", o.refTokenSymbol, "")
            }
        }
        function cc(n, i) {
            if (1 & n && (t.TgZ(0, "td")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundPrices"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2).index
                  , o = t.oxw(2);
                t.xp6(2),
                t.hij("$", t.xi3(3, 1, o.myPositions[e].value_usd, 5), "")
            }
        }
        function lc(n, i) {
            1 & n && t._UZ(0, "app-icon", 19),
            2 & n && t.Q6J("width", 6)
        }
        function sc(n, i) {
            1 & n && t._UZ(0, "app-icon", 20),
            2 & n && t.Q6J("width", 6)
        }
        function _c(n, i) {
            if (1 & n && (t.TgZ(0, "td", 16),
            t.YNc(1, lc, 1, 1, "app-icon", 17),
            t.YNc(2, sc, 1, 1, "app-icon", 18),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "number"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2).index
                  , o = t.oxw(2);
                t.Q6J("ngClass", o.myPositions[e].diff_usd >= 0 ? "buy-color" : "sell-color"),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e].diff_usd >= 0),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e].diff_usd < 0),
                t.xp6(2),
                t.hij(" ", t.xi3(5, 4, o.myPositions[e].diff_usd, "1.2-2"), "%")
            }
        }
        function gc(n, i) {
            if (1 & n && (t.TgZ(0, "td")(1, "span"),
            t._uU(2),
            t.ALo(3, "appRoundPrices"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2).index
                  , o = t.oxw(2);
                t.xp6(2),
                t.AsE("", t.xi3(3, 2, o.myPositions[e].value_eth, 5), " ", o.refTokenSymbol, "")
            }
        }
        function pc(n, i) {
            1 & n && t._UZ(0, "app-icon", 19),
            2 & n && t.Q6J("width", 6)
        }
        function dc(n, i) {
            1 & n && t._UZ(0, "app-icon", 20),
            2 & n && t.Q6J("width", 6)
        }
        function hc(n, i) {
            if (1 & n && (t.TgZ(0, "td", 16),
            t.YNc(1, pc, 1, 1, "app-icon", 17),
            t.YNc(2, dc, 1, 1, "app-icon", 18),
            t.TgZ(3, "span"),
            t._uU(4),
            t.ALo(5, "number"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2).index
                  , o = t.oxw(2);
                t.Q6J("ngClass", o.myPositions[e].diff_eth >= 0 ? "buy-color" : "sell-color"),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e].diff_eth >= 0),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e].diff_eth < 0),
                t.xp6(2),
                t.hij(" ", t.xi3(5, 4, o.myPositions[e].diff_eth, "1.2-2"), "%")
            }
        }
        function mc(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, cc, 4, 4, "td", 11),
            t.YNc(2, _c, 6, 7, "td", 15),
            t.YNc(3, gc, 4, 5, "td", 11),
            t.YNc(4, hc, 6, 7, "td", 15),
            t.BQk()),
            2 & n) {
                const e = t.oxw().index
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e]),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e]),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e]),
                t.xp6(1),
                t.Q6J("ngIf", o.myPositions[e])
            }
        }
        function uc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "button", 21),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw().index
                      , r = t.oxw(2);
                    return t.KtG(r.emitSaveEditPosition(a))
                }),
                t._UZ(2, "fa-icon", 22),
                t.qZA(),
                t.TgZ(3, "button", 23),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw().index
                      , r = t.oxw(2);
                    return t.KtG(r.emitDeletePosition(a))
                }),
                t._UZ(4, "fa-icon", 24),
                t.qZA()()
            }
        }
        function fc(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "tr"),
            t.YNc(2, ac, 1, 1, "input", 10),
            t.YNc(3, ic, 4, 3, "td", 11),
            t.YNc(4, rc, 7, 7, "td", 11),
            t.YNc(5, mc, 5, 4, "ng-container", 11),
            t.TgZ(6, "td", 12),
            t.YNc(7, uc, 5, 0, "div", 11),
            t.qZA()(),
            t.BQk()),
            2 & n) {
                const e = i.$implicit
                  , o = i.index
                  , a = t.oxw(2);
                t.xp6(2),
                t.Q6J("ngIf", !!e && !!e._id),
                t.xp6(1),
                t.Q6J("ngIf", a.myPositions[o]),
                t.xp6(1),
                t.Q6J("ngIf", a.myPositions[o]),
                t.xp6(1),
                t.Q6J("ngIf", a.pairSelected && a.myPositions),
                t.xp6(2),
                t.Q6J("ngIf", a.pairSelected && !!a.myPositions && a.myPositions.length > 0 && o <= a.myPositions.length - 1)
            }
        }
        function Cc(n, i) {
            if (1 & n && (t.TgZ(0, "table", 5)(1, "thead", 6)(2, "tr")(3, "th", 7),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA(),
            t.TgZ(6, "th", 7),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t.TgZ(9, "th", 7),
            t._uU(10),
            t.ALo(11, "translate"),
            t.qZA(),
            t.TgZ(12, "th", 7),
            t._uU(13),
            t.ALo(14, "translate"),
            t._UZ(15, "fa-icon", 8),
            t.ALo(16, "translate"),
            t.qZA(),
            t.TgZ(17, "th", 7),
            t._uU(18),
            t.ALo(19, "translate"),
            t.qZA(),
            t.TgZ(20, "th", 7),
            t._uU(21),
            t.ALo(22, "translate"),
            t._UZ(23, "fa-icon", 8),
            t.ALo(24, "translate"),
            t.qZA(),
            t.TgZ(25, "th", 7),
            t._uU(26),
            t.ALo(27, "translate"),
            t.qZA()()(),
            t.TgZ(28, "tbody"),
            t.YNc(29, fc, 8, 5, "ng-container", 9),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(4),
                t.hij("", t.lcZ(5, 13, "pair_explorer.amount"), " "),
                t.xp6(3),
                t.hij("", t.lcZ(8, 15, "pair_explorer.buy_price"), " "),
                t.xp6(3),
                t.hij("", t.lcZ(11, 17, "pair_explorer.value"), " USD "),
                t.xp6(3),
                t.hij("", t.lcZ(14, 19, "pair_explorer.profit"), " USD "),
                t.xp6(2),
                t.MGl("ngbTooltip", "", t.lcZ(16, 21, "pair_explorer.profit_tooltip"), " USD"),
                t.xp6(3),
                t.AsE("", t.lcZ(19, 23, "pair_explorer.value"), " ", e.refTokenSymbol, " "),
                t.xp6(3),
                t.AsE("", t.lcZ(22, 25, "pair_explorer.profit"), " ", e.refTokenSymbol, " "),
                t.xp6(2),
                t.hYB("ngbTooltip", "", t.lcZ(24, 27, "pair_explorer.profit_tooltip"), " ", e.refTokenSymbol, ""),
                t.xp6(3),
                t.Oqu(t.lcZ(27, 29, "pair_list.actions")),
                t.xp6(3),
                t.Q6J("ngForOf", e.myPositionsForm)
            }
        }
        let bc = (()=>{
            class n {
                set myPositions(e) {
                    this._myPositions = e ?? []
                }
                get myPositions() {
                    return this._myPositions
                }
                constructor(e) {
                    this._cdRef = e,
                    this.user_access = !1,
                    this.pairSelected = null,
                    this.myPositionsForm = [],
                    this.showAddEditPositionsPanel = !1,
                    this.saveEditPosition = new t.vpe,
                    this.deletePosition = new t.vpe,
                    this.newPositionForm = new t.vpe,
                    this._myPositions = []
                }
                ngAfterViewChecked() {
                    this._myPositions.length > 0 && this._myPositions[this._myPositions.length - 1] && this._myPositions[this._myPositions.length - 1].price_usd && this._myPositions[this._myPositions.length - 1].price_eth && this._cdRef.detectChanges()
                }
                emitSaveEditPosition(e) {
                    this.saveEditPosition.emit(e)
                }
                emitDeletePosition(e) {
                    this.deletePosition.emit(e)
                }
                emitNewPosition() {
                    this.newPositionForm.emit()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-positions-table"]],
                inputs: {
                    refTokenSymbol: "refTokenSymbol",
                    myPositions: "myPositions",
                    user_access: "user_access",
                    pairSelected: "pairSelected",
                    myPositionsForm: "myPositionsForm",
                    tokenData: "tokenData",
                    showAddEditPositionsPanel: "showAddEditPositionsPanel"
                },
                outputs: {
                    saveEditPosition: "saveEditPosition",
                    deletePosition: "deletePosition",
                    newPositionForm: "newPositionForm"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 9,
                vars: 8,
                consts: [[1, "d-flex", "justify-content-between", "align-items-center"], [1, "title"], ["type", "button", 1, "btn", "position-add", 3, "click"], [1, "table-container"], ["class", "table mb-0", 4, "ngIf"], [1, "table", "mb-0"], [1, "bg-light"], ["scope", "col", 1, "border-0"], ["icon", "info-circle", "placement", "top", 3, "ngbTooltip"], [4, "ngFor", "ngForOf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [4, "ngIf"], [1, "mb-3", "options"], ["type", "hidden", 3, "formControl"], [1, "price-muted"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["name", "variationUp", 3, "width", 4, "ngIf"], ["name", "variationDown", 3, "width", 4, "ngIf"], ["name", "variationUp", 3, "width"], ["name", "variationDown", 3, "width"], ["type", "button", 1, "btn", "text-info", "me-3", 3, "click"], ["icon", "edit"], ["type", "button", 1, "btn", "text-info", 3, "click"], ["icon", "trash-can"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "span", 1),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "button", 2),
                    t.NdJ("click", function() {
                        return o.emitNewPosition()
                    }),
                    t._uU(5),
                    t.ALo(6, "translate"),
                    t.qZA()(),
                    t.TgZ(7, "div", 3),
                    t.YNc(8, Cc, 30, 31, "table", 4),
                    t.qZA()),
                    2 & e && (t.xp6(2),
                    t.AsE("", t.lcZ(3, 4, "pair_explorer.positions"), " \xb7 ", o.myPositions.length, ""),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(6, 6, "pair_explorer.add_position"), " "),
                    t.xp6(3),
                    t.Q6J("ngIf", o.myPositions.length))
                },
                dependencies: [p.O5, u.uH, u.BN, b._L, p.ax, m.u5, m.Fj, m.JJ, m.UX, m.oH, p.mk, dt.lQ, p.JJ, C.pt, C.Gy, h.aw, h.X$],
                styles: [".title[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:16px;line-height:22px;color:#142028;line-height:24px;margin-bottom:1.5625rem;margin-left:.75rem;margin-top:1.25rem}body.dark-theme   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#142028}.position-add[_ngcontent-%COMP%]{background:#00b8d8;border-radius:1.5rem;margin-bottom:1.5625rem;margin-right:1.5625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .position-add[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .position-add[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .position-add[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .position-add[_ngcontent-%COMP%]{color:#142028}.position-add[_ngcontent-%COMP%]:disabled:hover{background-color:#00b8d8}.position-add[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.table-container[_ngcontent-%COMP%]{overflow-x:auto}thead[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#142028}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;border-bottom:1px solid #23323c}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child, thead.bg-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child{border-bottom:none}tbody[_ngcontent-%COMP%]{border-top:0!important}td[_ngcontent-%COMP%]{color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;vertical-align:middle}body.dark-theme   [_nghost-%COMP%]   td[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   td[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#142028}@media (max-width: 599px){td[_ngcontent-%COMP%]{min-width:9.375rem}}td.options[_ngcontent-%COMP%]{min-width:0}td[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding-right:.75rem}td[_ngcontent-%COMP%]   .price-muted[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   td[_ngcontent-%COMP%]   .price-muted[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .price-muted[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   td[_ngcontent-%COMP%]   .price-muted[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .price-muted[_ngcontent-%COMP%]{color:#818ea3}td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:0}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Pc = g(31377)
          , xc = g(7778);
        function Mc(n, i) {
            if (1 & n && t._UZ(0, "app-pair-result-item", 17),
            2 & n) {
                const e = t.oxw();
                t.Q6J("isModal", !1)("item", e.item)
            }
        }
        function Oc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "label", 18),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "app-pairs-search", 19),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.pairSelected(a))
                }),
                t.qZA()()
            }
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_list.pair_info")))
        }
        function kc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "label", 20),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "app-dropdown-select", 21),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.selectSwap(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Tol(e.needSwap && !e.needPair ? "mt-3" : "mt-2"),
                t.xp6(2),
                t.Oqu(t.lcZ(3, 6, "pair_explorer.swap")),
                t.xp6(2),
                t.Q6J("items", e.dropdownSwaps)("selectedItem", e.dropdownSwaps[0])
            }
        }
        function yc(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Gre("no-swaps--text ", e.needSwap && !e.needPair ? "mt-3" : "mt-2", ""),
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 4, "pair_explorer.no_swaps"), " ")
            }
        }
        const G = function() {
            return {
                updateOn: "blur"
            }
        };
        function wc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 22),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("amount", a))
                }),
                t.ALo(1, "number"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.s9C("placeholder", t.lcZ(2, 6, "token_finder.token_filter_placeholder")),
                t.Q6J("ngModel", t.xi3(1, 3, e.positionToSave.amount, "1.2-25"))("ngModelOptions", t.DdM(8, G))
            }
        }
        function Tc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 22),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("amount", a))
                }),
                t.ALo(1, "appNumber"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.s9C("placeholder", t.lcZ(2, 6, "token_finder.token_filter_placeholder")),
                t.Q6J("ngModel", t.xi3(1, 3, e.positionToSave.amount, "expanded"))("ngModelOptions", t.DdM(8, G))
            }
        }
        function vc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 23),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("priceUsd", a))
                }),
                t.ALo(1, "number"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.MGl("placeholder", "", t.lcZ(2, 6, "pair_explorer.placeholder_price"), " USD"),
                t.Q6J("ngModel", t.xi3(1, 3, e.positionToSave.priceUsd, "1.2-25"))("ngModelOptions", t.DdM(8, G))
            }
        }
        function Sc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 23),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("priceUsd", a))
                }),
                t.ALo(1, "appNumber"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.MGl("placeholder", "", t.lcZ(2, 6, "pair_explorer.placeholder_price"), " USD"),
                t.Q6J("ngModel", t.xi3(1, 3, e.positionToSave.priceUsd, "expanded"))("ngModelOptions", t.DdM(8, G))
            }
        }
        function Ac(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 24),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("priceEth", a))
                }),
                t.ALo(1, "number"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.hYB("placeholder", "", t.lcZ(2, 7, "pair_explorer.placeholder_price"), " ", e.tokenRef, ""),
                t.Q6J("ngModel", t.xi3(1, 4, e.positionToSave.priceEth, "1.2-25"))("ngModelOptions", t.DdM(9, G))
            }
        }
        function Zc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "input", 25),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.updatePositionData("priceEth", a))
                }),
                t.ALo(1, "appNumber"),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.hYB("placeholder", "", t.lcZ(2, 7, "pair_explorer.placeholder_price"), " ", e.tokenRef, ""),
                t.Q6J("ngModel", t.xi3(1, 4, e.positionToSave.priceEth, "expanded"))("ngModelOptions", t.DdM(9, G))
            }
        }
        let Lc = (()=>{
            class n extends s.K9 {
                set needSwap(e) {
                    this._needSwap = e,
                    e && this._generateSwapsDropdown()
                }
                get needSwap() {
                    return this._needSwap
                }
                constructor(e, o, a, r) {
                    super(),
                    this._translate = e,
                    this._exchangeApiService = o,
                    this._cdRef = a,
                    this._positionsService = r,
                    this.emitClose = new t.vpe,
                    this.emitSave = new t.vpe,
                    this.needPair = !1,
                    this._needSwap = !1,
                    this.positionToSave = {
                        amount: 0,
                        priceEth: 0,
                        priceUsd: 0,
                        pair: ""
                    },
                    this.swaps = [],
                    this.symbol = "",
                    this.tokenRef = ""
                }
                onDestroy() {}
                addDataAndEmit() {
                    this.positionToSave = this._positionsService.positionsToNumber(this.positionToSave),
                    this.emitSave.emit({
                        amount: this.positionToSave.amount,
                        priceUsd: this.positionToSave.priceUsd,
                        priceEth: this.positionToSave.priceEth,
                        pair: this.positionToSave.pair
                    })
                }
                selectSwap(e) {
                    this.dropdownSwaps.shift(),
                    this.positionToSave.amount = Number.parseFloat(e.value.amountToken.toFixed(25)),
                    this.positionToSave.priceUsd = Number.parseFloat(e.value.priceUSD?.toFixed(25) ?? "0") ?? 0,
                    this.positionToSave.priceEth = Number.parseFloat(e.value.priceETH.toFixed(25) ?? "0") ?? 0,
                    this.positionToSave.pair = this.item.id,
                    this._cdRef.detectChanges()
                }
                clearPosition() {
                    this.positionToSave.amount = 0,
                    this.positionToSave.priceUsd = 0,
                    this.positionToSave.priceEth = 0,
                    this.positionToSave.pair = "",
                    this._cdRef.detectChanges()
                }
                pairSelected(e) {
                    this.item = e.item,
                    this.needPair = !1,
                    this._getSwaps(this.item.id, this.item.chain)
                }
                checkHighInteger(e) {
                    return Math.trunc(e) >= 10
                }
                updatePositionData(e, o) {
                    Number.isNaN(o) || (o = o.replace(",", ""));
                    for (const a of ["amount", "priceUsd", "priceEth"])
                        a === e ? this.positionToSave[e] = Number.parseFloat(o) : this.positionToSave[a] = Number.parseFloat(this.positionToSave[a].toString());
                    this._cdRef.detectChanges()
                }
                _generateSwapsDropdown() {
                    this.dropdownSwaps = (this.swaps ?? []).filter(e=>e.type === c.iU1.BUY).map(e=>({
                        value: e,
                        label: `${this._formatDate(e.timestamp)} \xb7 ${e.type.toUpperCase()} \xb7\n          ${s.C6.roundBigNumber(e.amountToken.toFixed(5))} ${this.symbol} \xb7 $ ${s.C6.roundPrice(e.priceUSD ?? 0)} \xb7\n          ${s.C6.roundPrice(e.priceETH)}${this.tokenRef}`
                    })).sort((e,o)=>o.value.timestamp - e.value.timestamp),
                    this.dropdownSwaps.length && this.dropdownSwaps.unshift({
                        value: this.dropdownSwaps[0].value,
                        label: this._translate.instant("pair_explorer.select_swap")
                    }),
                    this._cdRef.detectChanges()
                }
                _formatDate(e) {
                    return s.k3.formatDate(new Date(1e3 * e), "YYYY-MM-DD HH:mm:ss")
                }
                _getSwaps(e, o) {
                    this._apiAdapter = this._exchangeApiService.getAdapter(o),
                    this._apiAdapter.getWalletTransactions(e).pipe((0,
                    s.sL)(this), (0,
                    M.b)(a=>{
                        this.swaps = a,
                        this._generateSwapsDropdown()
                    }
                    )).subscribe()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.sK),t.Y36(c.hmC),t.Y36(t.sBO),t.Y36(c.mK2))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-add-edit-positions-panel"]],
                inputs: {
                    item: "item",
                    needPair: "needPair",
                    needSwap: "needSwap",
                    positionToSave: "positionToSave",
                    swaps: "swaps",
                    symbol: "symbol",
                    tokenRef: "tokenRef"
                },
                outputs: {
                    emitClose: "emitClose",
                    emitSave: "emitSave"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 32,
                vars: 28,
                consts: [[1, "panel-content"], [3, "isModal", "item", 4, "ngIf"], [4, "ngIf"], [3, "class", 4, "ngIf"], [1, "positions-amount--container"], [1, "positions-input--container"], ["for", "tokenAmount"], ["class", "form-control", "name", "tokenAmount", "id", "tokenAmount", "appRestrictInput", "^[0-9.,]*$", "maxlength", "25", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange", 4, "ngIf"], ["for", "usdPrice"], ["class", "form-control", "name", "usdPrice", "id", "usdPrice", "appRestrictInput", "^[0-9.]*$", "maxlength", "25", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange", 4, "ngIf"], ["for", "tokenPrice"], ["class", "form-control", "name", "tokenPrice", "id", "tokenPrice", "appRestrictInput", "^[0-9.]*$", "maxlength", "25", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange", 4, "ngIf"], ["appRestrictInput", "^[0-9.]*$", "class", "form-control", "name", "tokenPrice", "id", "tokenPrice", "maxlength", "25", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange", 4, "ngIf"], ["type", "hidden", 3, "ngModel", "ngModelChange"], [1, "positions-button--container"], ["type", "button", 1, "btn", "position-save", 3, "disabled", "click"], ["type", "button", 1, "btn", "button-close", "me-3", 3, "click"], [3, "isModal", "item"], ["for", "pair"], ["id", "pair", 3, "itemSelected"], ["for", "swap"], ["id", "swap", 3, "items", "selectedItem", "itemSelected"], ["name", "tokenAmount", "id", "tokenAmount", "appRestrictInput", "^[0-9.,]*$", "maxlength", "25", 1, "form-control", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["name", "usdPrice", "id", "usdPrice", "appRestrictInput", "^[0-9.]*$", "maxlength", "25", 1, "form-control", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["name", "tokenPrice", "id", "tokenPrice", "appRestrictInput", "^[0-9.]*$", "maxlength", "25", 1, "form-control", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["appRestrictInput", "^[0-9.]*$", "name", "tokenPrice", "id", "tokenPrice", "maxlength", "25", 1, "form-control", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Mc, 1, 2, "app-pair-result-item", 1),
                    t.YNc(2, Oc, 5, 3, "div", 2),
                    t.YNc(3, kc, 5, 8, "div", 3),
                    t.YNc(4, yc, 3, 6, "div", 3),
                    t.TgZ(5, "div", 4)(6, "div", 5)(7, "label", 6),
                    t._uU(8),
                    t.ALo(9, "translate"),
                    t.qZA(),
                    t.YNc(10, wc, 3, 9, "input", 7),
                    t.YNc(11, Tc, 3, 9, "input", 7),
                    t.qZA(),
                    t.TgZ(12, "div", 5)(13, "label", 8),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.qZA(),
                    t.YNc(16, vc, 3, 9, "input", 9),
                    t.YNc(17, Sc, 3, 9, "input", 9),
                    t.qZA(),
                    t.TgZ(18, "div", 5)(19, "label", 10),
                    t._uU(20),
                    t.ALo(21, "translate"),
                    t.qZA(),
                    t.YNc(22, Ac, 3, 10, "input", 11),
                    t.YNc(23, Zc, 3, 10, "input", 12),
                    t.qZA(),
                    t.TgZ(24, "input", 13),
                    t.NdJ("ngModelChange", function(r) {
                        return o.positionId = r
                    }),
                    t.qZA()(),
                    t.TgZ(25, "div", 14)(26, "button", 15),
                    t.NdJ("click", function() {
                        return o.addDataAndEmit()
                    }),
                    t._uU(27),
                    t.ALo(28, "translate"),
                    t.qZA(),
                    t.TgZ(29, "button", 16),
                    t.NdJ("click", function() {
                        return o.emitClose.emit(),
                        o.clearPosition()
                    }),
                    t._uU(30),
                    t.ALo(31, "translate"),
                    t.qZA()()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", !o.needPair && !!o.item),
                    t.xp6(1),
                    t.Q6J("ngIf", o.needPair),
                    t.xp6(1),
                    t.Q6J("ngIf", o.needSwap && o.dropdownSwaps.length),
                    t.xp6(1),
                    t.Q6J("ngIf", o.needSwap && 0 === o.dropdownSwaps.length && !o.needPair),
                    t.xp6(4),
                    t.Oqu(t.lcZ(9, 18, "pair_explorer.amount")),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.checkHighInteger(o.positionToSave.amount)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.checkHighInteger(o.positionToSave.amount)),
                    t.xp6(3),
                    t.hij("", t.lcZ(15, 20, "pair_explorer.price_eth"), " USD"),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.checkHighInteger(o.positionToSave.priceUsd)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.checkHighInteger(o.positionToSave.priceUsd)),
                    t.xp6(3),
                    t.AsE("", t.lcZ(21, 22, "pair_explorer.price_eth"), " ", o.tokenRef, ""),
                    t.xp6(2),
                    t.Q6J("ngIf", !o.checkHighInteger(o.positionToSave.priceEth)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.checkHighInteger(o.positionToSave.priceEth)),
                    t.xp6(1),
                    t.Q6J("ngModel", o.positionId),
                    t.xp6(2),
                    t.Q6J("disabled", !o.positionToSave.amount || !o.positionToSave.priceUsd || !o.positionToSave.priceEth),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(28, 24, "wallet_info.save"), " "),
                    t.xp6(3),
                    t.hij(" ", t.lcZ(31, 26, "pair_explorer.price_alert.cancel"), " "))
                },
                dependencies: [p.O5, xc.Z, Pc.I, P._e, m.u5, m.Fj, m.JJ, m.nD, m.On, p.JJ, C.$p, h.aw, h.X$, C.O7],
                styles: [".panel-content[_ngcontent-%COMP%]{margin-top:2.8125rem}.panel-content[_ngcontent-%COMP%]   .positions-amount--container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.panel-content[_ngcontent-%COMP%]   .positions-amount--container[_ngcontent-%COMP%]   .positions-input--container[_ngcontent-%COMP%]{margin-top:1.25rem;padding:0 .9375rem;width:33%}.panel-content[_ngcontent-%COMP%]   .positions-amount--container[_ngcontent-%COMP%]   .positions-input--container[_ngcontent-%COMP%]:first-child{padding-left:0}.panel-content[_ngcontent-%COMP%]   .positions-amount--container[_ngcontent-%COMP%]   .positions-input--container[_ngcontent-%COMP%]:last-child{padding-right:0}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]{margin-top:1.5625rem}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]{background:#00b8d8;border-radius:1.5rem;margin-right:1.5625rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]{color:#142028}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]:disabled:hover{background-color:#00b8d8}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .position-save[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028;border-radius:1.5rem}body.dark-theme   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]{color:#142028}.panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .panel-content[_ngcontent-%COMP%]   .positions-button--container[_ngcontent-%COMP%]   .button-close[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}app-dropdown-select[_ngcontent-%COMP%]    {position:relative;z-index:1}app-dropdown-select[_ngcontent-%COMP%]     .item-select-wrapper{width:31.25rem}app-dropdown-select[_ngcontent-%COMP%]     .item-selected{height:2.25rem;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected{color:#818ea3}app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#cacedb}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .item-selected:hover{color:#3d5170}app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#23323c}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option{color:#818ea3}app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:last-child{margin-top:0;border-bottom-left-radius:.9375rem;border-bottom-right-radius:.9375rem}app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#142028}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#fff}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#142028}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-option:hover{color:#142028}app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list{height:25rem;overflow-y:auto;overflow-x:hidden;width:100%}app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#cacedb}body.light   [_nghost-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}body.light[_ngcontent-%COMP%]   app-dropdown-select[_ngcontent-%COMP%]     .dropdown-list:hover{color:#3d5170}app-dropdown-select[_ngcontent-%COMP%]     .item-no-radius{border-radius:.9375rem .9375rem 0 0}"],
                changeDetection: 0
            }),
            n
        }
        )();
        const Ic = function() {
            return ["fal", "sparkles"]
        }
          , Dc = function(n, i) {
            return {
                pair: n,
                price: i
            }
        }
          , Ec = function() {
            return ["fab", "twitter"]
        }
          , Jc = function() {
            return ["fab", "telegram"]
        }
          , Uc = function() {
            return ["fab", "reddit"]
        };
        let Nc = (()=>{
            class n {
                constructor(e, o, a, r) {
                    this._translate = e,
                    this.toastr = o,
                    this._cdRef = a,
                    this._scriptsLoader = r,
                    this.currentURL = "",
                    this.currentURL = window.location.href
                }
                ngOnInit() {
                    this.loadSocialShare()
                }
                ngOnDestroy() {
                    this.removeSocialShare(),
                    this._cdRef.detectChanges()
                }
                loadSocialShare() {
                    this._scriptsLoader.loadScript({
                        src: "assets/vendors/share-buttons/src/share-buttons.js",
                        name: "share-buttons"
                    }).pipe((0,
                    K.K)(a=>(0,
                    Q.of)(a))).subscribe();
                    const o = document.querySelector("ngb-modal-window");
                    o && o.addEventListener("click", a=>{
                        a.path.some(r=>r.className?.toString().includes("modal-content")) || this.removeSocialShare()
                    }
                    )
                }
                removeSocialShare() {
                    this._scriptsLoader.removeScript({
                        src: "assets/vendors/share-buttons/src/share-buttons.js",
                        name: "share-buttons"
                    }).pipe((0,
                    K.K)(o=>(0,
                    Q.of)(o))).subscribe()
                }
                copyText(e, o) {
                    e.target.blur(),
                    (0,
                    P.vQ)(o);
                    const r = this._translate.instant("pair_explorer.copied");
                    this.toastr.success(r, void 0, {
                        closeButton: !0,
                        positionClass: "toast-bottom-right",
                        timeOut: 3e3
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(h.sK),t.Y36(Ct._W),t.Y36(t.sBO),t.Y36(f.WU))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-social-media-panel"]],
                inputs: {
                    tokenData: "tokenData",
                    iframeWidget: "iframeWidget"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 47,
                vars: 53,
                consts: [[1, "panel-content"], [1, "share-info-block"], [1, "share-info-block__title"], [1, "share-info-block__content"], [1, "token-page"], ["type", "button", 1, "btn", "btn-primary", "btn-swap-1", 3, "click"], [1, "share-info-block", "mt-4"], [1, "badge", "bg-info", "new-tag"], [1, "me-1", 3, "icon"], [1, "share-info-block", "links"], [1, "share-info-block__content", "share-info-block__links"], [1, "share-btn"], ["data-id", "tw", 1, "btn-twitter"], [1, "pe-2", 3, "icon"], ["data-id", "tg", 1, "btn-telegram"], ["data-id", "re", 1, "btn-reddit"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2),
                    t._uU(4),
                    t.ALo(5, "translate"),
                    t.qZA(),
                    t.TgZ(6, "div", 3)(7, "div", 4),
                    t._uU(8),
                    t.qZA(),
                    t.TgZ(9, "button", 5),
                    t.NdJ("click", function(r) {
                        return o.copyText(r, o.currentURL)
                    }),
                    t._uU(10),
                    t.ALo(11, "translate"),
                    t.qZA()()(),
                    t.TgZ(12, "div", 6)(13, "div", 2),
                    t._uU(14),
                    t.ALo(15, "translate"),
                    t.TgZ(16, "span", 7),
                    t._UZ(17, "fa-icon", 8),
                    t._uU(18),
                    t.ALo(19, "translate"),
                    t.qZA()(),
                    t.TgZ(20, "div", 3)(21, "div", 4),
                    t._uU(22),
                    t.qZA(),
                    t.TgZ(23, "button", 5),
                    t.NdJ("click", function(r) {
                        return o.copyText(r, o.iframeWidget)
                    }),
                    t._uU(24),
                    t.ALo(25, "translate"),
                    t.qZA()()(),
                    t.TgZ(26, "div", 9)(27, "div", 2),
                    t._uU(28),
                    t.ALo(29, "translate"),
                    t.qZA(),
                    t.TgZ(30, "div", 10)(31, "div", 11),
                    t.ALo(32, "translate"),
                    t.ALo(33, "translate"),
                    t.ALo(34, "number"),
                    t.TgZ(35, "a", 12),
                    t._UZ(36, "fa-icon", 13),
                    t._uU(37),
                    t.ALo(38, "translate"),
                    t.qZA(),
                    t.TgZ(39, "a", 14),
                    t._UZ(40, "fa-icon", 13),
                    t._uU(41),
                    t.ALo(42, "translate"),
                    t.qZA(),
                    t.TgZ(43, "a", 15),
                    t._UZ(44, "fa-icon", 13),
                    t._uU(45),
                    t.ALo(46, "translate"),
                    t.qZA()()()()()()),
                    2 & e && (t.xp6(4),
                    t.Oqu(t.lcZ(5, 20, "pair_explorer.share_modal_section1_title")),
                    t.xp6(4),
                    t.hij(" ", o.currentURL, " "),
                    t.xp6(2),
                    t.Oqu(t.lcZ(11, 22, "pair_explorer.share_modal_section1_button")),
                    t.xp6(4),
                    t.Oqu(t.lcZ(15, 24, "pair_explorer.share_modal_embeded_chart")),
                    t.xp6(3),
                    t.Q6J("icon", t.DdM(46, Ic)),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(19, 26, "pools_creator.new"), ""),
                    t.xp6(4),
                    t.hij(" ", o.iframeWidget, " "),
                    t.xp6(2),
                    t.Oqu(t.lcZ(25, 28, "pair_explorer.share_modal_section1_button")),
                    t.xp6(4),
                    t.Oqu(t.lcZ(29, 30, "pair_explorer.share_modal_section2_title")),
                    t.xp6(3),
                    t.uIk("data-desc", t.lcZ(32, 32, "pair_explorer.shared_title"))("data-title", t.xi3(33, 34, "pair_explorer.shared_text", t.WLB(47, Dc, o.tokenData.symbol, t.xi3(34, 37, o.tokenData.priceUSD, "1.2-5")))),
                    t.xp6(4),
                    t.uIk("data-share-twitter", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(50, Ec)),
                    t.xp6(1),
                    t.hij("", t.lcZ(38, 40, "pair_explorer.twitter"), " "),
                    t.xp6(2),
                    t.uIk("data-share-telegram", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(51, Jc)),
                    t.xp6(1),
                    t.hij("", t.lcZ(42, 42, "pair_explorer.telegram"), " "),
                    t.xp6(2),
                    t.uIk("data-share-reddit", o.tokenData.symbol),
                    t.xp6(1),
                    t.Q6J("icon", t.DdM(52, Uc)),
                    t.xp6(1),
                    t.hij("", t.lcZ(46, 44, "pair_explorer.reddit"), " "))
                },
                dependencies: [u.uH, u.BN, p.JJ, h.aw, h.X$],
                styles: [".share-info-block__title[_ngcontent-%COMP%]{color:#142028;font-size:13px}.share-info-block__content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:.75rem}.share-info-block__content[_ngcontent-%COMP%]   .token-page[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;flex:auto;margin-right:.625rem;border-radius:.625rem;cursor:default;width:22.1875rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:.4375rem .625rem;font-size:13px}.share-info-block__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:13px;height:2.125rem;line-height:2.125rem;border-radius:3.125rem;box-shadow:none!important}.share-info-block__content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#00a2bf;border-color:#00a2bf}.share-info-block__content[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:13px;color:#142028}.share-info-block.links[_ngcontent-%COMP%]{margin-top:1.875rem}.share-info-block__links[_ngcontent-%COMP%]{display:block}.share-info-block__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;display:block;margin-top:1.25rem}.share-info-block__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.125rem}.share-info-block__links[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#00b8d8}body.dark-theme   [_nghost-%COMP%]     .share-info-block__title{color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .token-page{background-color:#23323c;color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .share-btn a{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .share-info-block__content .share-btn a:hover{text-decoration:none;color:#00b8d8!important}.new-tag[_ngcontent-%COMP%]{position:relative;left:0;margin-left:.25rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var qc = g(90628)
          , Qc = g(640);
        const Fc = function() {
            return ["fal", "times"]
        };
        function Hc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 6),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.isOpenChange.emit(!1))
                }),
                t._UZ(1, "fa-icon", 7),
                t.ALo(2, "translate"),
                t.qZA()
            }
            2 & n && (t.xp6(1),
            t.Q6J("icon", t.DdM(4, Fc))("ngbTooltip", t.lcZ(2, 2, "home.close")))
        }
        function Rc(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 1)(2, "div", 2),
                t.YNc(3, Hc, 3, 5, "button", 3),
                t.qZA(),
                t.TgZ(4, "div", 4)(5, "div")(6, "app-new-pairs-search", 5),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onPairSelected(a))
                })("trendingSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.trendingSelected.emit(a))
                })("previousSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.previousSelected.emit(a))
                }),
                t.qZA()()()(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(3),
                t.Q6J("ngIf", e.showCloseButton),
                t.xp6(3),
                t.Q6J("placeholder", "pair_explorer.find_pair_mobile")("exchange", e.filterExchange)("chain", e.chain)
            }
        }
        let Yc = (()=>{
            class n extends s.K9 {
                constructor(e, o, a, r) {
                    super(),
                    this._environment = e,
                    this._settingsService = o,
                    this._cdRef = a,
                    this._routingService = r,
                    this.openModalToken = new t.vpe,
                    this.findPair = !1,
                    this.isOpen = !1,
                    this.showCloseButton = !0,
                    this.typeOfAction = "reloadRoute",
                    this.isOpenChange = new t.vpe,
                    this.itemSelected = new t.vpe,
                    this.trendingSelected = new t.vpe,
                    this.previousSelected = new t.vpe,
                    this.filterExchange = null,
                    this.context = this._environment.app_scope,
                    this.theme = f.Q2.Dark
                }
                ngOnInit() {
                    this._settingsService.onThemeChange$.pipe((0,
                    s.sL)(this), (0,
                    I.h)(e=>e !== this.theme)).subscribe(e=>{
                        this.theme = e,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                onPairSelected(e) {
                    const o = `/${e.item.chain}/${A.$.PairExplorer}/${e.item.id}`;
                    if (e.middleButton)
                        this._routingService.windowNavigate(`${o}`, "_blank", "noopener");
                    else {
                        if (e.item.chain === this.chain && "emit" === this.typeOfAction)
                            return this.itemSelected.emit({
                                item: e.item,
                                exchangeApi: e.exchangeApi,
                                middleButton: e.middleButton
                            });
                        const a = this._routingService.getCurrentScrollTopPosition("#favorite-pairs") || {};
                        this._routingService.reloadRoute(o, a)
                    }
                }
                onDestroy() {}
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(f.qA),t.Y36(f.gb),t.Y36(t.sBO),t.Y36(f.Zn))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-new-pairs-search-mobile"]],
                inputs: {
                    chain: "chain",
                    findPair: "findPair",
                    isOpen: "isOpen",
                    showCloseButton: "showCloseButton",
                    typeOfAction: "typeOfAction"
                },
                outputs: {
                    openModalToken: "openModalToken",
                    isOpenChange: "isOpenChange",
                    itemSelected: "itemSelected",
                    trendingSelected: "trendingSelected",
                    previousSelected: "previousSelected"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], [1, "mobile-search-container"], [1, "header"], ["type", "button", "class", "close", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "main"], [3, "placeholder", "exchange", "chain", "itemSelected", "trendingSelected", "previousSelected"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["placement", "left", 3, "icon", "ngbTooltip"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, Rc, 7, 4, "ng-container", 0),
                    2 & e && t.Q6J("ngIf", o.isOpen)
                },
                dependencies: [p.O5, u.uH, u.BN, b._L, qt.NewPairsSearchComponent, h.aw, h.X$],
                styles: [".mobile-search-container[_ngcontent-%COMP%]{width:100%;height:100vh;position:fixed;inset:0;z-index:999993;padding:3.625rem .625rem .625rem;background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]{background-color:#fff}.mobile-search-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.mobile-search-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:5.375rem}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1.375rem .75rem;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{color:#818ea3}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:.9375rem;width:100%;display:flex;justify-content:center}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#f4f5f6;color:#818ea3;border-radius:3.125rem;text-decoration:none;border:none;height:2.5rem;width:100%;font-size:14px}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]{color:#818ea3}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .find-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:.4375rem}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .not-found-container{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .not-found-container{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .not-found-container{background-color:#142028!important}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .not-found-container{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .not-found-container{background-color:#f4f5f6!important}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{display:flex!important;justify-content:center!important;align-items:center!important;background-color:#f4f5f6!important;color:#142028;border-radius:3.125rem!important;text-decoration:none!important;border:none!important;height:2.5rem!important;width:100%!important;font-size:14px!important}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{background-color:#142028!important}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{color:#fff!important}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{color:#fff!important}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{color:#142028!important}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input{color:#142028!important}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input::placeholder{font-size:14px!important;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input::placeholder{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input::placeholder{color:#818ea3!important}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input::placeholder{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .ng-autocomplete-class   .input-container input::placeholder{color:#818ea3!important}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{background-color:#e2e7ec;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{background-color:#23323c}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{color:#818ea3!important}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     .close-button{color:#818ea3!important}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .app-pairs-search-filter{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .app-pairs-search-filter{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .app-pairs-search-filter{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .app-pairs-search-filter{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .app-pairs-search-filter{background-color:#f4f5f6}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-track{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-track{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-track{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-track{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-track{background-color:#f4f5f6}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-thumb{border-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-thumb{border-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container>a.isActive{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container>a.isActive{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container>a.isActive{background-color:#23323c}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container>a.isActive{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .chains-container>a.isActive{background-color:#e2e7ec}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-track{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-track{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-track{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-track{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-track{background-color:#f4f5f6}.mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-thumb{border-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-thumb{border-color:#142028}body.light   [_nghost-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-search-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   app-pairs-search[_ngcontent-%COMP%]     app-pairs-search-filter   .exchanges-container::-webkit-scrollbar-thumb{border-color:#f4f5f6}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var Wc = g(88338)
          , Bc = g(27719)
          , zc = g(64693)
          , Vc = g(86612)
          , Gc = g(11481);
        let jc = (()=>{
            class n {
                constructor(e, o) {
                    this._apiService = e,
                    this._exchangeApiService = o
                }
                vote(e, o, a, r=w.NO_VOTE) {
                    const l = {
                        isUpvote: r.getValue(),
                        id: a
                    }
                      , _ = this._exchangeApiService.getAdapter(o, e);
                    return this._apiService.post(_.apiUrl, `/${_.apiExchange}/1/pair-data/vote`, l)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(f.sM),t.LFG(c.hmC))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Ft = g(62510);
        const pt = "votes";
        let Kc = (()=>{
            class n {
                constructor() {}
                get(e, o) {
                    const r = n._getVoteIndex(e)[o]
                      , l = r;
                    return r && (l.vote = w.parse(r._vote)),
                    l || {
                        vote: w.NO_VOTE
                    }
                }
                save(e, o, a) {
                    const r = {
                        created: new Date,
                        _vote: a.getValue()
                    }
                      , l = n._getVoteIndex(e);
                    l[o] = r,
                    s._Z.addToMap(pt, e, l)
                }
                remove(e, o) {
                    const a = n._getVoteIndex(e);
                    delete a[o],
                    s._Z.removeFromMap(pt, e),
                    s._Z.addToMap(pt, e, a)
                }
                static _getVoteIndex(e) {
                    return s._Z.getMap(pt).get(e) || {}
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac,
                providedIn: "root"
            }),
            n
        }
        )();
        var Xc = g(6997)
          , tl = g(37048)
          , el = g(30501)
          , nl = g(79133)
          , ol = g(88674);
        const al = ["summary_table"]
          , il = ["headerCenterContent"]
          , rl = ["headerRightContent"]
          , cl = ["searchMenuMobile"]
          , ll = ["aggregatorContainer"]
          , sl = ["tabsContainer"];
        function _l(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-alert", 46),
                t.NdJ("alertClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.closeTeamSellAlert())
                }),
                t.GkF(1, 47),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw()
                  , o = t.MAs(17);
                t.Q6J("isClosable", !0)("iconUnicode", "\u{1f4a5}")("alertType", e.scamWarningType === e.WarningType.DANGER ? "danger" : e.scamWarningType === e.WarningType.WARNING ? "warning" : "info")("message", e.scamWarningType === e.WarningType.DANGER ? "pair_explorer.token_scam_alert" : null),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        const gl = function(n) {
            return {
                href: n
            }
        };
        function pl(n, i) {
            if (1 & n && t._UZ(0, "app-alert", 48),
            2 & n) {
                const e = t.oxw();
                t.Q6J("icon", "info")("message", e.disclaimer.text)("alertType", "primary" === e.disclaimer.type ? "info" : "warning" === e.disclaimer.type ? "warning" : "danger")("link", e.disclaimer.link ? t.VKq(4, gl, e.disclaimer.link) : null)
            }
        }
        function dl(n, i) {
            1 & n && t._UZ(0, "app-alert", 49),
            2 & n && t.Q6J("iconUnicode", "\u23f3")("message", "pair_explorer.pair_not_ready")("alertType", "warning")
        }
        function hl(n, i) {
            1 & n && t._UZ(0, "app-alert", 50),
            2 & n && t.Q6J("icon", "info")("message", "pair_explorer.warning_honeypot_not_verify")("alertType", "danger")
        }
        function ml(n, i) {
            1 & n && t._UZ(0, "app-alert", 50),
            2 & n && t.Q6J("icon", "info")("message", "pair_explorer.warning_honeypot")("alertType", "warning")
        }
        function ul(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-alert", 51),
                t.NdJ("alertClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.closeCommunityVotedScamAlert())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("icon", "info")("message", "pair_explorer.community_trust_scam")("alertType", e.isCommunityVotedScam() >= e.WarningType.DANGER ? "danger" : "warning")("isClosable", !0)
            }
        }
        function fl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(67);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Cl(n, i) {
            if (1 & n && (t.TgZ(0, "div", 68)(1, "div", 69),
            t.YNc(2, fl, 1, 1, "ng-container", 65),
            t.GkF(3, 47),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(27);
                t.xp6(2),
                t.Q6J("ngIf", e.showSwapTab && e.showPoolInfo),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function bl(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t.GkF(1, 47),
            t.qZA()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(45);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        const Pl = function(n, i, e) {
            return {
                hideFavorites: n,
                "layout-flipped": i,
                "layout-columns": e
            }
        };
        function xl(n, i) {
            if (1 & n && t._UZ(0, "div", 62),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("hidden", e.isFullScreen || !e.showFavoritesColumn)("ngClass", t.kEZ(2, Pl, e.hiddenFavorites, e.isLayoutFlipped, e.isColumnFirst))
            }
        }
        const Ml = function(n) {
            return {
                id: "aggregator-floating-buy",
                type: n
            }
        };
        function Ol(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Ml, e.TransactionType.BUY))
            }
        }
        const kl = function(n) {
            return {
                id: "aggregator-floating-sell",
                type: n
            }
        };
        function yl(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, kl, e.TransactionType.SELL))
            }
        }
        const xt = function(n) {
            return {
                isExchange: n
            }
        };
        function wl(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(63);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, xt, e.hideAggregatorWithSlug))
            }
        }
        function Tl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(65);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function vl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(41);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Sl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(43);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        const Al = function(n) {
            return {
                "align-with-footer": n
            }
        };
        function Zl(n, i) {
            if (1 & n && (t.TgZ(0, "div", 71),
            t.YNc(1, vl, 1, 1, "ng-container", 65),
            t.YNc(2, Sl, 1, 1, "ng-container", 65),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngClass", t.VKq(3, Al, e.bottomReached)),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader)
            }
        }
        function Ll(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-floating-modal", 72),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleExchangePanel(!1))
                })("reloadContent", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.reloadIframe())
                }),
                t.GkF(1, 47),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(75);
                t.Q6J("localStorageKey", "panelExchange")("fullScreen", !0)("reloadOption", !0)("externalUrl", e.alternativeExchange.url),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function Il(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-floating-modal", 72),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleTradeExternalModal(!1))
                })("reloadContent", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.reloadIframe())
                }),
                t.GkF(1, 47),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(80);
                t.Q6J("localStorageKey", "tradeExternalModal")("fullScreen", !0)("reloadOption", !0)("externalUrl", e.getTradeUrl(e.tokenData.id, "buy" === e.scamAdvice.typeAdvice ? e.TransactionType.BUY : e.TransactionType.SELL)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        const Dl = function() {
            return {
                threshold: 0,
                rootMargin: "-10px 0px 0px 0px"
            }
        }
          , El = function(n, i, e) {
            return {
                "layout-flipped": n,
                "layout-columns": i,
                "layout-not-favs": e
            }
        }
          , Jl = function(n, i, e, o, a, r, l) {
            return {
                hideFavorites: n,
                "layout-flipped": i,
                "layout-columns": e,
                sticky: o,
                "with-footer": a,
                "sticky-version": r,
                "sticky-button": l
            }
        }
          , Ul = function(n, i, e, o) {
            return {
                "d-none": n,
                "right-container": i,
                "left-container": e,
                "layout-flipped": o
            }
        };
        function Nl(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "app-hot-pairs-header", 52),
                t.NdJ("pairSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onHotPairSelected(a))
                }),
                t.qZA(),
                t.TgZ(2, "div", 53)(3, "span", 54),
                t.NdJ("intersectionChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.handleTopFavsIntersection(a))
                }),
                t.qZA(),
                t.TgZ(4, "div", 55),
                t.YNc(5, Cl, 4, 2, "div", 56),
                t.TgZ(6, "div", 57)(7, "div", 58)(8, "div", 59)(9, "div")(10, "div", 60),
                t.GkF(11, 47),
                t.qZA(),
                t.GkF(12, 47),
                t.qZA(),
                t.TgZ(13, "div")(14, "div"),
                t.GkF(15, 47)(16, 47),
                t.qZA(),
                t.YNc(17, bl, 2, 1, "div", 6),
                t.qZA()(),
                t.GkF(18, 47)(19, 47),
                t.qZA()(),
                t.YNc(20, xl, 1, 6, "div", 61),
                t.TgZ(21, "div", 62)(22, "app-favorites-list", 63),
                t.NdJ("addFavorite", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.saveFavoritePair())
                })("toggleFavorites", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleFavorites())
                })("favoritePairSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onFavoriteSelected(a))
                }),
                t.qZA()()(),
                t.YNc(23, Ol, 1, 4, "ng-container", 64),
                t.YNc(24, yl, 1, 4, "ng-container", 64),
                t.YNc(25, wl, 1, 4, "ng-container", 64),
                t.YNc(26, Tl, 1, 1, "ng-container", 65),
                t.YNc(27, Zl, 3, 5, "div", 66),
                t.YNc(28, Ll, 2, 5, "app-floating-modal", 67),
                t.YNc(29, Il, 2, 5, "app-floating-modal", 67),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw()
                  , o = t.MAs(33)
                  , a = t.MAs(37)
                  , r = t.MAs(35)
                  , l = t.MAs(49)
                  , _ = t.MAs(21)
                  , d = t.MAs(23);
                t.xp6(1),
                t.Q6J("initCharge", e.initCharge),
                t.xp6(1),
                t.uIk("data-exchange", e.exchange)("data-chain", e.chain)("data-token", e.tokenData && e.tokenData.id)("data-pair", e.pairSelected),
                t.xp6(1),
                t.Q6J("intersectionOptions", t.DdM(32, Dl)),
                t.xp6(1),
                t.Q6J("ngClass", t.kEZ(33, El, e.isLayoutFlipped, e.isColumnFirst, !e.showFavoritesColumn)),
                t.xp6(1),
                t.Q6J("ngIf", !e.isFullScreen && (e.showSwapTab || e.showPoolInfo)),
                t.xp6(1),
                t.Q6J("ngClass", !e.isFullScreen && (e.showSwapTab || e.showSwapTab || e.showPoolInfo || e.showFavoritesColumn) ? e.showSwapTab || e.showSwapTab || e.showPoolInfo || !e.hiddenFavorites ? e.showSwapTab || e.showSwapTab || e.showPoolInfo ? e.hiddenFavorites && e.showFavoritesColumn || !e.hiddenFavorites && e.screenWidth >= 1024 && e.screenWidth <= 1400 && e.showFavoritesColumn ? "full-width" : e.showFavoritesColumn ? "calculated-width" : "full-width-no-fav" : "only-favs" : "only-favs-hidden" : "full-screen"),
                t.xp6(5),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", l),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader && e.candlesData),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", _),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", d),
                t.xp6(1),
                t.Q6J("ngIf", e.shouldStickFavs && (e.isLayoutFlipped || e.isColumnFirst)),
                t.xp6(1),
                t.Q6J("hidden", e.isFullScreen || !e.showFavoritesColumn)("ngClass", t.Hh0(37, Jl, e.hiddenFavorites, e.isLayoutFlipped, e.isColumnFirst, e.shouldStickFavs && e.screenWidthGreaterThan1400, e.shouldStickFavs && e.bottomReached && e.screenWidthGreaterThan1400, e.screenWidthGreaterThan1400, e.shouldStickFavs && !e.screenWidthGreaterThan1400)),
                t.xp6(1),
                t.Q6J("ngClass", t.l5B(45, Ul, e.hiddenFavorites, !e.isLayoutFlipped, e.isLayoutFlipped, e.isLayoutFlipped))("pairSelected", e.pairSelected)("currency", (null == e.candlesData ? null : e.candlesData.chartTokenRef) || "usd")("tokenData", e.tokenData)("hiddenFavorites", e.hiddenFavorites)("typeOfAction", "emit"),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && e.showAggregatorBuy && (e.isFullScreen || e.showSwapButton) && !e.aggregatorScamAdvice.show && e.isAggregatorSupportedInCurrentChain && !e.hideAggregatorWithSlug),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && e.showAggregatorSell && (e.isFullScreen || e.showSwapButton) && !e.aggregatorScamAdvice.show && e.isAggregatorSupportedInCurrentChain && !e.hideAggregatorWithSlug),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && (e.isFullScreen || e.showSwapButton) && e.noAggregatorActive && (!e.isAggregatorSupportedInCurrentChain || e.hideAggregatorWithSlug) && !e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && (e.isFullScreen || e.showSwapButton) && e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && (e.isFullScreen || e.showSwapButton) && !e.showAggregatorSell && !e.showAggregatorBuy && !e.noAggregatorActive && !e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !!e.showPanelExchange && !!e.alternativeExchange.url && !e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("ngIf", e.showTradeExternalModal && "desktop" === e.mediaDevice)
            }
        }
        function ql(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 90),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleSearchMobile(!1))
                }),
                t.TgZ(1, "app-new-pairs-search-mobile", 91),
                t.NdJ("isOpenChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.isSearchMobile = a)
                })("openModalToken", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.openBinocularsPanel())
                })("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onPairSelected(a))
                })("trendingSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onHotPairSelected(a))
                })("previousSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onPreviousSearchSelected(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("backdrop", !0)("closeHidden", !1)("showHeader", !1),
                t.xp6(1),
                t.Q6J("isOpen", e.isSearchMobile)("showCloseButton", !1)("findPair", !0)("typeOfAction", "emit")
            }
        }
        function Ql(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 92),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.closeBinocularsPanel())
                }),
                t.TgZ(1, "app-token-pairs", 93),
                t.NdJ("pairsSearchByTokenClosed", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.pairSearchToken(a))
                })("autoSelectedOnlyOneResult", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.autoSelectedSinglePair(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("backdrop", !0)("closeHidden", !0)("showHeader", !1)("hidden", e.autoSelectFirstPair)("closeEnabled", e.closePanelEnabled)("enableScrollOnClose", !0),
                t.xp6(1),
                t.Q6J("chain", e.chain)("tokenId", e.tokenData.id)("isAutoSelect", e.autoSelectFirstPair)("activeScroll", !1)
            }
        }
        function Fl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(35);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Hl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(37);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Rl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(45);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Yl(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t.YNc(1, Rl, 1, 1, "ng-container", 65),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !e.shouldStickHeader)
            }
        }
        function Wl(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 94)(1, "app-chain-selector", 95),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.switchChain(a))
                }),
                t.qZA(),
                t.GkF(2, 47),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(55);
                t.xp6(1),
                t.Q6J("items", e.availableChains)("selectedItem", e.currentChainItem)("showOnlyLogoSelected", !0),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        const Ht = function(n) {
            return {
                "no-dextscore": n
            }
        };
        function Bl(n, i) {
            if (1 & n && (t.TgZ(0, "div", 96)(1, "span", 97),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "div", 98)(5, "strong"),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, "span"),
            t._uU(8, "/99"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 5, "pair_explorer.dext_score")),
                t.xp6(2),
                t.Udp("background-color", e.dextScore.color),
                t.Q6J("ngClass", t.VKq(7, Ht, 0 === e.dextScore.value)),
                t.xp6(2),
                t.hij(" ", 0 !== e.dextScore.value ? e.dextScore.value : "--", " ")
            }
        }
        function zl(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 99)(1, "app-pool-info", 100),
                t.NdJ("liquidityLockList", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.setLiquidityLockList(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("chain", e.chain)("exchange", e.exchange)("tokenData", e.tokenData)("exchangeVersion", e.exchangeVersion)("volumeChecked", e.volumeChecked)("volume24h", e.volumeVariation24h)("tokenPoolInfo", e.tokenPoolInfo)("hasPoolRatios", e.hasExchangePoolRatios)("hasFeePercentagePools", e.hasFeePercentagePools(e.exchange))("pairSelected", e.pairSelected)("mobile", !0)("mobileCollapsed", e.mobileCollapsed)
            }
        }
        function Vl(n, i) {
            if (1 & n && (t.TgZ(0, "div", 78),
            t.GkF(1, 47),
            t.qZA()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(45);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Gl(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(82);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function $l(n, i) {
            1 & n && t.GkF(0)
        }
        function jl(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-favorites-list", 101),
                t.NdJ("addFavorite", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.saveFavoritePair())
                })("toggleFavorites", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleFavorites())
                })("favoritePairSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onFavoriteSelected(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("pairSelected", e.pairSelected)("currency", (null == e.candlesData ? null : e.candlesData.chartTokenRef) || "usd")("tokenData", e.tokenData)("hiddenFavorites", e.hiddenFavorites)("typeOfAction", "emit")
            }
        }
        const Kl = function(n) {
            return {
                id: "aggregator-mobile-buy",
                type: n
            }
        };
        function Xl(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Kl, e.TransactionType.BUY))
            }
        }
        const ts = function(n) {
            return {
                id: "aggregator-mobile-sell",
                type: n
            }
        };
        function es(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, ts, e.TransactionType.SELL))
            }
        }
        function ns(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(63);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, xt, e.hideAggregatorWithSlug))
            }
        }
        function os(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(65);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        const as = function() {
            return {
                threshold: 0
            }
        }
          , is = function(n) {
            return {
                permanent: n
            }
        }
          , rs = function() {
            return {
                threshold: 0,
                rootMargin: "-66px 0px 0px 0px"
            }
        };
        function cs(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, ql, 2, 7, "app-panel-component", 73),
                t.TgZ(2, "div"),
                t.YNc(3, Ql, 2, 10, "app-panel-component", 74),
                t.qZA(),
                t.TgZ(4, "app-hot-pairs-header", 52),
                t.NdJ("pairSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onHotPairSelected(a))
                }),
                t.qZA(),
                t.TgZ(5, "div", 75)(6, "span", 54),
                t.NdJ("intersectionChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.handleTopIntersection(a))
                }),
                t.qZA(),
                t.TgZ(7, "div", 76)(8, "div", 77)(9, "div", 78),
                t.GkF(10, 47),
                t.YNc(11, Fl, 1, 1, "ng-container", 65),
                t.YNc(12, Hl, 1, 1, "ng-container", 65),
                t.GkF(13, 47),
                t.qZA(),
                t.YNc(14, Yl, 2, 1, "div", 6),
                t.qZA(),
                t.YNc(15, Wl, 3, 4, "div", 79),
                t.qZA(),
                t.TgZ(16, "span", 54),
                t.NdJ("intersectionChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.handleBottomIntersection(a))
                }),
                t.qZA(),
                t.TgZ(17, "div", 80)(18, "div", 81)(19, "div", 82),
                t.GkF(20, 47),
                t.YNc(21, Bl, 9, 9, "div", 83),
                t.qZA(),
                t.TgZ(22, "div", 84),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleMobileCollapsed())
                }),
                t.YNc(23, zl, 2, 12, "div", 85),
                t.qZA(),
                t.YNc(24, Vl, 2, 1, "div", 86),
                t.qZA(),
                t.GkF(25, 47),
                t.YNc(26, Gl, 1, 1, "ng-container", 65),
                t.GkF(27, 47)(28, 47),
                t.YNc(29, $l, 1, 0, "ng-container", 87),
                t.qZA(),
                t.TgZ(30, "div", 80),
                t.YNc(31, jl, 1, 5, "app-favorites-list", 88),
                t.qZA(),
                t.TgZ(32, "div", 89),
                t.YNc(33, Xl, 1, 4, "ng-container", 64),
                t.YNc(34, es, 1, 4, "ng-container", 64),
                t.YNc(35, ns, 1, 4, "ng-container", 64),
                t.YNc(36, os, 1, 1, "ng-container", 65),
                t.qZA()(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw()
                  , o = t.MAs(33)
                  , a = t.MAs(49)
                  , r = t.MAs(37)
                  , l = t.MAs(21)
                  , _ = t.MAs(23)
                  , d = t.MAs(31)
                  , k = t.MAs(29);
                t.xp6(1),
                t.Q6J("ngIf", e.isSearchMobile),
                t.xp6(2),
                t.Q6J("ngIf", e.toggleSearchToken && e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("initCharge", e.initCharge),
                t.xp6(2),
                t.Q6J("intersectionOptions", t.DdM(29, as)),
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(30, is, e.shouldStickHeader)),
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngIf", !e.shouldStickHeader),
                t.xp6(1),
                t.Q6J("ngIf", e.shouldStickHeader),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", a),
                t.xp6(1),
                t.Q6J("ngIf", "tablet" === e.mediaDevice && !e.loader && e.tokenData && e.candlesData),
                t.xp6(1),
                t.Q6J("ngIf", e.shouldStickHeader),
                t.xp6(1),
                t.Q6J("intersectionOptions", t.DdM(32, rs)),
                t.xp6(1),
                t.Q6J("hidden", "market" !== e.footerNavigationTab),
                t.xp6(3),
                t.Q6J("ngTemplateOutlet", r),
                t.xp6(1),
                t.Q6J("ngIf", !e.shouldStickHeader && "tablet" === e.mediaDevice),
                t.xp6(2),
                t.Q6J("ngIf", e.candlesData && !e.pairInfoLoader),
                t.xp6(1),
                t.Q6J("ngIf", "mobile" === e.mediaDevice && !e.loader && e.tokenData && e.candlesData),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", l),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", _),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", d),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", k),
                t.xp6(1),
                t.Q6J("hidden", "favorites" !== e.footerNavigationTab),
                t.xp6(1),
                t.Q6J("ngIf", "favorites" === e.footerNavigationTab),
                t.xp6(1),
                t.Q6J("hidden", "swap" !== e.footerNavigationTab),
                t.xp6(1),
                t.Q6J("ngIf", e.showAggregatorBuy && !e.aggregatorScamAdvice.show && !e.aggregatorLoader && "swap" === e.footerNavigationTab && !e.hideAggregatorWithSlug),
                t.xp6(1),
                t.Q6J("ngIf", e.showAggregatorSell && !e.aggregatorScamAdvice.show && !e.aggregatorLoader && "swap" === e.footerNavigationTab && !e.hideAggregatorWithSlug),
                t.xp6(1),
                t.Q6J("ngIf", e.showNoAggregator() && !e.aggregatorScamAdvice.show && !e.aggregatorLoader && "swap" === e.footerNavigationTab),
                t.xp6(1),
                t.Q6J("ngIf", e.aggregatorScamAdvice.show && !e.aggregatorLoader && "swap" === e.footerNavigationTab)
            }
        }
        function ls(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 102),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.closeBinocularsPanel())
                }),
                t.TgZ(1, "app-token-pairs", 103),
                t.NdJ("pairsSearchByTokenClosed", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.pairSearchToken(a))
                })("autoSelectedOnlyOneResult", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.autoSelectedSinglePair(a))
                })("containerWidthChanged", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.changeBinocularsType(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("backdrop", !0)("hidden", e.autoSelectFirstPair)("closeHidden", !0)("showHeader", !1)("isResizable", !0)("fullScreenEnabled", e.fullScreenPanel)("closeEnabled", e.closePanelEnabled),
                t.xp6(1),
                t.Q6J("chain", e.chain)("tokenId", e.tokenData.id)("isAutoSelect", e.autoSelectFirstPair)
            }
        }
        function ss(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 104),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleExchangePanel(!1))
                }),
                t._UZ(1, "app-iframe", 105),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("showHeader", !1),
                t.xp6(1),
                t.Q6J("url", e.alternativeExchange.url)("showCloseButton", !1)
            }
        }
        function _s(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 104),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleTradeExternalModal(!1))
                }),
                t._UZ(1, "app-iframe", 105),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("showHeader", !1),
                t.xp6(1),
                t.Q6J("url", e.getTradeUrl(e.tokenData.id, "buy" === e.scamAdvice.typeAdvice ? e.TransactionType.BUY : e.TransactionType.SELL))("showCloseButton", !1)
            }
        }
        function gs(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 104),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.showLinksPanel(!1))
                }),
                t._UZ(1, "app-links-social-panel", 106),
                t.ALo(2, "appSafe"),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("showHeader", !1),
                t.xp6(1),
                t.hYB("title", "", t.lcZ(2, 6, e.tokenData.symbol), " ", t.lcZ(3, 8, "pair_explorer.links_modal_title"), ""),
                t.Q6J("linksSocialData", e.getDataLinks())("tokenData", e.tokenData)("isDarkTheme", e.isDarkTheme)
            }
        }
        function ps(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 107),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleUpdateLinksPanel(!1))
                }),
                t._UZ(1, "app-social-icons-panel"),
                t.qZA()
            }
            2 & n && t.Q6J("closeButton", !0)("showHeader", !1)
        }
        function ds(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 108),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleSocialMediaPanel(!1))
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "app-social-media-panel", 109),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.s9C("panelTitle", t.lcZ(1, 3, "pair_explorer.share")),
                t.xp6(2),
                t.Q6J("tokenData", e.tokenData)("iframeWidget", e.iframeWidget)
            }
        }
        function hs(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 110),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.togglePositionsPanel(!1))
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t.TgZ(3, "app-add-edit-positions-panel", 111),
                t.NdJ("emitClose", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return a.togglePositionsPanel(!1),
                    t.KtG(a.setPositionIndex(-1))
                })("emitSave", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.saveEditPosition(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("closeButton", !0)("panelTitle", e.positionIndex >= 0 ? t.lcZ(1, 9, "pair_explorer.update_position") : t.lcZ(2, 11, "pair_explorer.add_position")),
                t.xp6(3),
                t.Q6J("item", e.searchItemInfo)("positionToSave", e.positionToSave)("swaps", e.dataTransactions)("symbol", e.tokenData.symbol)("tokenRef", e.refTokenSymbol)("needPair", !1)("needSwap", e.positionNeedSwap)
            }
        }
        function ms(n, i) {
            if (1 & n && (t._uU(0),
            t.ALo(1, "translate"),
            t.ALo(2, "number")),
            2 & n) {
                const e = t.oxw();
                t.lnq(" ", t.lcZ(1, 3, "pair_explorer.team_sold_message"), " ", t.xi3(2, 5, e.teamEthSold, "1.2"), " ", e.refTokenSymbol, ".\n")
            }
        }
        function us(n, i) {
            if (1 & n && (t._UZ(0, "fa-icon", 112),
            t._uU(1),
            t.ALo(2, "appSafe"),
            t.TgZ(3, "a", 113),
            t._uU(4),
            t.ALo(5, "appSafe"),
            t.qZA(),
            t._uU(6, "!\n")),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.hij(" ", t.lcZ(2, 6, e.tokenData.symbol), " has performed a Token Swap. "),
                t.xp6(2),
                t.FAE("href", "", e.context, "/", e.chain, "/", e.ChainPage.PairExplorer, "/", e.newDextPair, "", t.LSH),
                t.xp6(1),
                t.hij("Check ", t.lcZ(5, 8, e.tokenData.symbol), " new pair")
            }
        }
        const fs = function() {
            return ["far", "arrows-v"]
        };
        function Cs(n, i) {
            1 & n && t._UZ(0, "fa-icon", 121),
            2 & n && t.Q6J("icon", t.DdM(1, fs))
        }
        function bs(n, i) {
            if (1 & n && (t.TgZ(0, "a", 124),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw().disclaimer;
                t.Q6J("href", e.link, t.LSH),
                t.xp6(1),
                t.Oqu(e.link)
            }
        }
        function Ps(n, i) {
            if (1 & n && (t.TgZ(0, "div", 122),
            t._uU(1),
            t.YNc(2, bs, 2, 2, "a", 123),
            t.qZA()),
            2 & n) {
                const e = i.disclaimer;
                t.xp6(1),
                t.hij(" ", e.text, " "),
                t.xp6(1),
                t.Q6J("ngIf", !!e.link)
            }
        }
        function xs(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-trading-view", 117, 118),
                t.NdJ("liveCandlesCleared", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.emitLiveCandles(a.candles))
                })("fullScreenToggled", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.openFullScreen(!1))
                })("tvReady", function(a) {
                    t.CHM(e);
                    const r = t.MAs(1)
                      , l = t.oxw(2);
                    return t.KtG(l.registerWidget(a, r))
                })("tvDestroyed", function() {
                    t.CHM(e);
                    const a = t.MAs(1)
                      , r = t.oxw(2);
                    return t.KtG(r.unregisterWidget(a))
                }),
                t.YNc(2, Cs, 1, 2, "ng-template", 119),
                t.YNc(3, Ps, 3, 2, "ng-template", 120),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("allowMarksOnBars", !0)("isResizable", !0)("chain", e.chain)("tokenData", e.tokenData)("exchange", e.exchange)("candlesData", e.candlesData)("normalizeCandles", !!e.isCandleNormalizationEnabled)("pairSelected", e.pairSelected)("countSwapsLast24h", e.countSwapsLast24h)("selectedTransactions", e.dataTransactionsSelected)("userAccess", e.userAccess)("latestCandles", e.latestCandles)("isFullScreen", e.isTvFullScreen)("isDarkTheme", e.isDarkTheme)("disclaimer", e.disclaimer)
            }
        }
        function Ms(n, i) {
            if (1 & n && (t.TgZ(0, "div", 114)(1, "div", 115),
            t.YNc(2, xs, 4, 15, "app-trading-view", 116),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngIf", !e.loader)
            }
        }
        function Os(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-tabs", 139),
                t.NdJ("tabIdSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.changeTab(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("tabsOptions", e.tableTabsOptions)("defaultSelectedTab", e.tabSelected)
            }
        }
        const ks = function(n, i, e) {
            return {
                tokenSymbol: n,
                count: i,
                total: e
            }
        };
        function ys(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 140)(1, "h6", 141),
                t._uU(2),
                t.ALo(3, "translate"),
                t.ALo(4, "appSafe"),
                t.qZA(),
                t.TgZ(5, "div", 142)(6, "span", 143)(7, "fa-icon", 144),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleBotFiltered())
                }),
                t.ALo(8, "translate"),
                t.qZA()(),
                t.TgZ(9, "span", 145),
                t._uU(10),
                t.ALo(11, "translate"),
                t.qZA(),
                t.TgZ(12, "input", 146),
                t.NdJ("ngModelChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.botFiltered = a)
                }),
                t.qZA()()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.hij(" ", t.xi3(3, 4, "pair_explorer.showing_transactions", t.kEZ(13, ks, t.lcZ(4, 7, e.tokenData.symbol), e.displayedSwapsCount, e.totalSwaps)), " "),
                t.xp6(5),
                t.Q6J("ngbTooltip", t.lcZ(8, 9, "pair_explorer.filter_bot")),
                t.xp6(3),
                t.Oqu(t.lcZ(11, 11, "pair_explorer.filter_bot")),
                t.xp6(2),
                t.Q6J("ngModel", e.botFiltered)
            }
        }
        function ws(n, i) {
            if (1 & n && (t.TgZ(0, "h6", 147),
            t._uU(1),
            t.ALo(2, "appSafe"),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.AsE(" ", t.lcZ(2, 2, e.tokenData.symbol), " ", t.lcZ(3, 4, "pair_explorer.open_positions"), " ")
            }
        }
        function Ts(n, i) {
            1 & n && t.GkF(0)
        }
        function vs(n, i) {
            1 & n && (t.ynx(0),
            t._uU(1),
            t.ALo(2, "translate"),
            t.BQk()),
            2 & n && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 1, "pair_explorer.token_scam_alert"), " "))
        }
        const Ss = function(n, i) {
            return {
                "sell-color": n,
                "text-warning": i
            }
        };
        function As(n, i) {
            if (1 & n && (t.TgZ(0, "h6", 148),
            t.YNc(1, Ts, 1, 0, "ng-container", 87),
            t.YNc(2, vs, 3, 3, "ng-container", 6),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(17);
                t.Q6J("ngClass", t.WLB(3, Ss, e.scamWarningType === e.WarningType.DANGER, e.scamWarningType === e.WarningType.WARNING)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o),
                t.xp6(1),
                t.Q6J("ngIf", e.scamWarningType === e.WarningType.DANGER)
            }
        }
        function Zs(n, i) {
            1 & n && t.GkF(0)
        }
        function Ls(n, i) {
            if (1 & n && (t.TgZ(0, "div", 149),
            t.YNc(1, Zs, 1, 0, "ng-container", 87),
            t.qZA()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(19);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function Is(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "app-price-alerts", 150),
                t.NdJ("openSettings", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.openSettingsPanel())
                }),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("isUserConnected", e.isUserConnected)("alertsStatus", e.alertsStatus)("shouldHideAlerts", e.shouldHidePriceAlerts)("tokenData", e.tokenData)("loader", e.loader)("pairSelected", e.pairSelected)("chain", e.chain)("notificationsStatus", e.notificationsStatus)("toggleFav", e.hiddenFavorites)("fullScreen", e.isFullScreen)("showFavoritesColumn", e.showFavoritesColumn)
            }
        }
        function Ds(n, i) {
            if (1 & n && t._UZ(0, "div", 154),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("appLoading", e.loader)
            }
        }
        const Rt = function() {
            return []
        };
        function Es(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 151),
                t.YNc(1, Ds, 1, 1, "div", 152),
                t.TgZ(2, "app-positions-table", 153),
                t.NdJ("saveEditPosition", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.editPositionButton(a))
                })("deletePosition", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.deletePosition(a))
                })("newPositionForm", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.newPositionForm())
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.loader),
                t.xp6(1),
                t.Q6J("refTokenSymbol", e.refTokenSymbol)("myPositions", e.pairSelected ? e.myPositions[e.pairSelected] : t.DdM(8, Rt))("user_access", e.userAccess)("pairSelected", e.pairSelected)("myPositionsForm", e.myPositionsForm)("tokenData", e.tokenData)("showAddEditPositionsPanel", e.showAddEditPositionsPanel)
            }
        }
        function Js(n, i) {
            if (1 & n && t._UZ(0, "div", 154),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("appLoading", e.loader)
            }
        }
        function Us(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-trade-history", 157, 158),
                t.NdJ("addPosition", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.addPosition(a))
                })("displayedTransactionsCount", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.onDisplayedSwapsCountChanged(a))
                })("toggleMarkedWallet", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.toggleMarkedWallet(a.event, a.makerData, a.isFiltered))
                })("rowActivated", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.onRowActivated(a))
                })("infiniteScrolling", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.onSwapsInfiniteScroll())
                })("loadAllTransactions", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.onLoadAllSwaps())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("chain", e.chain)("allTransactions", e.dataTransactions)("displayedTransactions", e.transactionsList)("selectedTransactionsList", e.selectedTransactionsList)("isDataLoaded", e.isSwapsHistoryFullyLoaded)("currentFav", e.currentFav)("user_access", e.userAccess)("refTokenSymbol", e.refTokenSymbol)("filteredTx", e.filteredTxByWallet)("dextScore", e.dextScore)("data_wallets", e.dataWallets)("teamWallet", e.teamWallet)("wallet_to_see", e.walletToSee)("tokenRef", e.tokenRef)("tokenData", e.tokenData)("toggleFav", e.hiddenFavorites)("fullScreen", e.isFullScreen)("showFavoritesColumn", e.showFavoritesColumn)("known_wallets", e.knownWallets)("known_wallets_filtered", e.knownWalletsFiltered)("botFiltered", e.botFiltered)("pairAddress", e.pairSelected)("hasFeePercentagePools", e.hasFeePercentagePools(e.exchange))
            }
        }
        const Yt = function(n) {
            return {
                dataTransactions: n
            }
        };
        function Ns(n, i) {
            if (1 & n && (t.TgZ(0, "div", 155),
            t.YNc(1, Js, 1, 1, "div", 152),
            t.GkF(2, 70),
            t.YNc(3, Us, 2, 23, "app-trade-history", 156),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(69);
                t.ekj("faded-out", !!e.disclaimer && e.disclaimer.history),
                t.xp6(1),
                t.Q6J("ngIf", e.loader),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(6, Yt, e.dataTransactionsSummary)),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader)
            }
        }
        function qs(n, i) {
            if (1 & n && t._UZ(0, "div", 154),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("appLoading", e.mySwapsLoading)
            }
        }
        function Qs(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-trade-history", 163),
                t.NdJ("addPosition", function(a) {
                    t.CHM(e);
                    const r = t.oxw(4);
                    return t.KtG(r.addPosition(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(4);
                t.Q6J("chain", e.chain)("isMySwapsTable", "my-swaps" === e.tabSelected)("allTransactions", e.walletTransactions)("isDataLoaded", e.walletTransactionsLoaded)("selectedTransactionsList", t.DdM(16, Rt))("displayedTransactions", e.walletTransactions)("currentFav", e.currentFav)("user_access", e.userAccess)("refTokenSymbol", e.refTokenSymbol)("filteredTx", e.filteredTxByWallet)("dextScore", e.dextScore)("data_wallets", e.dataWallets)("teamWallet", e.teamWallet)("tokenRef", e.tokenRef)("tokenData", e.tokenData)("toggleFav", e.hiddenFavorites)
            }
        }
        function Fs(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 70),
            t.YNc(2, Qs, 1, 17, "app-trade-history", 162),
            t.BQk()),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(69);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(3, Yt, e.walletTransactionsSummary)),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader && !e.mySwapsLoading)
            }
        }
        function Hs(n, i) {
            1 & n && (t.TgZ(0, "div", 165)(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 1, "pair_explorer.my_swaps_not_found")))
        }
        function Rs(n, i) {
            if (1 & n && t.YNc(0, Hs, 4, 3, "div", 164),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngIf", !e.mySwapsLoading)
            }
        }
        function Ys(n, i) {
            if (1 & n && (t.TgZ(0, "div", 159),
            t.YNc(1, qs, 1, 1, "div", 152),
            t.YNc(2, Fs, 3, 5, "ng-container", 160),
            t.YNc(3, Rs, 1, 1, "ng-template", null, 161, t.W1O),
            t.qZA()),
            2 & n) {
                const e = t.MAs(4)
                  , o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", o.mySwapsLoading),
                t.xp6(1),
                t.Q6J("ngIf", o.walletTransactions && o.walletTransactions.length)("ngIfElse", e)
            }
        }
        function Ws(n, i) {
            if (1 & n && t._UZ(0, "div", 154),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("appLoading", e.loader)
            }
        }
        function Bs(n, i) {
            if (1 & n && (t.ynx(0),
            t._UZ(1, "app-holders-table", 167),
            t.BQk()),
            2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("tokenAudit", e.tokenAudit)("actualPrice", e.tokenData.priceUSD)("chain", e.chain)
            }
        }
        function zs(n, i) {
            if (1 & n && (t.TgZ(0, "div", 166),
            t.YNc(1, Ws, 1, 1, "div", 152),
            t.YNc(2, Bs, 2, 3, "ng-container", 6),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.loader),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader)
            }
        }
        function Vs(n, i) {
            if (1 & n && (t.TgZ(0, "div", 125, 126)(2, "div", 127)(3, "div", 128),
            t.YNc(4, Os, 1, 2, "app-tabs", 129),
            t.TgZ(5, "div", 130),
            t.YNc(6, ys, 13, 17, "div", 131),
            t.YNc(7, ws, 4, 6, "h6", 132),
            t.YNc(8, As, 3, 6, "h6", 133),
            t.YNc(9, Ls, 2, 1, "div", 134),
            t.qZA()(),
            t.YNc(10, Is, 2, 11, "ng-container", 6),
            t.YNc(11, Es, 3, 9, "div", 135),
            t.YNc(12, Ns, 4, 8, "div", 136),
            t.YNc(13, Ys, 5, 3, "div", 137),
            t.YNc(14, zs, 3, 2, "div", 138),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngClass", "desktop" === e.mediaDevice ? "mb-3 input-container" : "mb-2"),
                t.xp6(2),
                t.Q6J("ngIf", e.tableTabsOptions.length),
                t.xp6(2),
                t.Q6J("ngIf", "history" === e.tabSelected),
                t.xp6(1),
                t.Q6J("ngIf", "positions" === e.tabSelected),
                t.xp6(1),
                t.Q6J("ngIf", e.isSuspectedTeamScam()),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.id === e.oldDextContract),
                t.xp6(1),
                t.Q6J("ngIf", "price-alerts" === e.tabSelected && !e.shouldHidePriceAlerts),
                t.xp6(1),
                t.Q6J("ngIf", "positions" === e.tabSelected),
                t.xp6(1),
                t.Q6J("ngIf", "history" === e.tabSelected),
                t.xp6(1),
                t.Q6J("ngIf", "my-swaps" === e.tabSelected),
                t.xp6(1),
                t.Q6J("ngIf", "holders" === e.tabSelected)
            }
        }
        const Gs = function(n, i, e, o, a, r, l, _, d) {
            return {
                "align-with-footer": n,
                "right-container": i,
                "left-container": e,
                "aggregator-container": o,
                "layout-flipped": a,
                "layout-columns": r,
                "layout-no-favs": l,
                "favorites-hidden": _,
                fixed: d
            }
        };
        function $s(n, i) {
            if (1 & n && (t.TgZ(0, "div", 168, 169),
            t._uU(2),
            t.ALo(3, "push"),
            t.qZA()),
            2 & n) {
                const e = i.id
                  , o = i.type
                  , a = t.MAs(1)
                  , r = t.oxw();
                t.Q6J("ngClass", t.rFY(4, Gs, [r.bottomReached, "desktop" === r.mediaDevice, "desktop" === r.mediaDevice, "desktop" === r.mediaDevice, r.isLayoutFlipped, r.isColumnFirst, !r.showFavoritesColumn, r.hiddenFavorites, r.isFullScreen || r.showSwapButton])),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 2, r.renderAggregator(a, e, o)), " ")
            }
        }
        const js = function(n) {
            return {
                id: "aggregator-in-tab-buy",
                type: n
            }
        };
        function Ks(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, js, e.TransactionType.BUY))
            }
        }
        const Xs = function(n) {
            return {
                id: "aggregator-in-tab-sell",
                type: n
            }
        };
        function t_(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(25);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Xs, e.TransactionType.SELL))
            }
        }
        function e_(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(2)
                  , o = t.MAs(63);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, xt, e.hideAggregatorWithSlug))
            }
        }
        function n_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(65);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function o_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 171)(1, "app-pool-info", 172),
                t.NdJ("liquidityLockList", function(a) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.setLiquidityLockList(a))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("chain", e.chain)("exchange", e.exchange)("tokenData", e.tokenData)("exchangeVersion", e.exchangeVersion)("volumeChecked", e.volumeChecked)("volume24h", e.volumeVariation24h)("tokenPoolInfo", e.tokenPoolInfo)("hasPoolRatios", e.hasExchangePoolRatios)("hasFeePercentagePools", e.hasFeePercentagePools(e.exchange))("pairSelected", e.pairSelected)
            }
        }
        function a_(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, o_, 2, 10, "div", 170),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.candlesData && !e.pairInfoLoader && e.showPoolInfo)
            }
        }
        function i_(n, i) {
            1 & n && t.GkF(0)
        }
        function r_(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 47),
            t.YNc(2, i_, 1, 0, "ng-container", 87),
            t.BQk()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(82)
                  , o = t.MAs(29);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        function c_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(41);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function l_(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 173),
            t.YNc(2, c_, 1, 1, "ng-container", 65),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Q6J("ngIf", !e.loader)
            }
        }
        function s_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(82);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function __(n, i) {
            1 & n && t.GkF(0)
        }
        function g_(n, i) {
            if (1 & n && (t.YNc(0, Ks, 1, 4, "ng-container", 64),
            t.YNc(1, t_, 1, 4, "ng-container", 64),
            t.YNc(2, e_, 1, 4, "ng-container", 64),
            t.YNc(3, n_, 1, 1, "ng-container", 65),
            t.YNc(4, a_, 2, 1, "ng-container", 6),
            t.YNc(5, r_, 3, 2, "ng-container", 6),
            t.YNc(6, l_, 3, 1, "ng-container", 6),
            t.YNc(7, s_, 1, 1, "ng-container", 65),
            t.YNc(8, __, 1, 0, "ng-container", 87)),
            2 & n) {
                const e = t.oxw()
                  , o = t.MAs(31);
                t.Q6J("ngIf", !e.aggregatorLoader && !e.pairInfoLoader && e.isSwapSelected && e.isAggregatorSupportedInCurrentChain && (e.showAggregatorBuy || !e.showAggregatorBuy && !e.showAggregatorSell) && !e.showNoAggregator() && !e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && !e.pairInfoLoader && e.isSwapSelected && e.isAggregatorSupportedInCurrentChain && e.showAggregatorSell && !e.showNoAggregator() && !e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !e.aggregatorLoader && !e.pairInfoLoader && e.isSwapSelected && (!e.isAggregatorSupportedInCurrentChain || e.hideAggregatorWithSlug) && !e.showAggregatorSell && !e.showAggregatorBuy && e.showNoAggregator() && !e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", !e.pairInfoLoader && e.isSwapSelected && e.aggregatorScamAdvice.show),
                t.xp6(1),
                t.Q6J("ngIf", e.candlesData && !e.pairInfoLoader && e.showPoolInfo && e.isPoolSelected),
                t.xp6(1),
                t.Q6J("ngIf", e.isPoolSelected),
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === e.mediaDevice && e.isSwapSelected),
                t.xp6(1),
                t.Q6J("ngIf", !e.isPoolSelected),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", o)
            }
        }
        const p_ = function(n) {
            return {
                "view-honeypot-links": n
            }
        };
        function d_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-contract-details", 179),
                t.NdJ("updateAudit", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.updateAudit())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("tokenAudit", e.tokenAudit)("isAdmin", e.isAdmin)("ngClass", t.VKq(6, p_, e.viewScanHoneypotOnCurrentChain))("isUpdatingAudit", e.isUpdatingAudit)("highlightWhenNotVerified", !0)("tokenName", e.tokenData.symbol)
            }
        }
        function h_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(78);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function m_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div")(1, "app-votes-bar", 180),
                t.NdJ("voteUp", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.vote(a.pairSelected, a.tokenVotes.vote === a.VoteType.UPVOTE ? a.VoteType.NO_VOTE : a.VoteType.UPVOTE))
                })("voteDown", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.vote(a.pairSelected, a.tokenVotes.vote === a.VoteType.DOWNVOTE ? a.VoteType.NO_VOTE : a.VoteType.DOWNVOTE))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("tokenVotes", e.tokenVotes)("userConnected", !!e.userId)("isDarkTheme", e.isDarkTheme)
            }
        }
        function u_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-token-description", 181),
                t.NdJ("updateInfoClicked", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.openModalOrPanel())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("tokenData", e.tokenData)
            }
        }
        function f_(n, i) {
            1 & n && (t.TgZ(0, "div", 182)(1, "div", 183),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()()),
            2 & n && (t.xp6(2),
            t.hij(" ", t.lcZ(3, 1, "pair_explorer.no_data_uniswap"), " "))
        }
        function C_(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._UZ(1, "app-dext-score", 175),
            t.YNc(2, d_, 1, 8, "app-contract-details", 176),
            t.YNc(3, h_, 1, 1, "ng-container", 65),
            t.YNc(4, m_, 2, 3, "div", 6),
            t.YNc(5, u_, 1, 1, "app-token-description", 177),
            t.YNc(6, f_, 4, 3, "div", 178),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("dextScoreData", e.chartOptionsDextScore)("dextScore", e.dextScore),
                t.xp6(1),
                t.Q6J("ngIf", e.isContractAuditSupportedInCurrentChain),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData && e.tokenData.id && e.viewScanHoneypotOnCurrentChain),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader),
                t.xp6(1),
                t.Q6J("ngIf", !e.loader && !!e.tokenData.symbol),
                t.xp6(1),
                t.Q6J("ngIf", !e.pairDataAvailable && e.tokenData.symbol && !e.dextScoreReady && !e.loader)
            }
        }
        function b_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 174),
            t.YNc(1, C_, 7, 7, "div", 6),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !e.pairInfoLoader && (e.dextScoreReady || e.tokenData.pooledETH))
            }
        }
        function P_(n, i) {
            1 & n && t._UZ(0, "app-mini-banner", 184)
        }
        function x_(n, i) {
            1 & n && (t.TgZ(0, "a", 192),
            t._UZ(1, "img", 193),
            t.qZA())
        }
        function M_(n, i) {
            if (1 & n && (t.TgZ(0, "img", 198),
            t.ALo(1, "exchangeLogoStyles"),
            t.ALo(2, "exchangeLogoUrl"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(4);
                t.Akn(t.xi3(1, 4, e.exchange, e.chain)),
                t.Q6J("src", t.xi3(2, 7, e.exchange, e.chain), t.LSH),
                t.uIk("alt", e.exchange)
            }
        }
        function O_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 194)(1, "span", 195),
            t._UZ(2, "app-token-logo", 196),
            t.qZA(),
            t.YNc(3, M_, 3, 10, "img", 197),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.xp6(2),
                t.Q6J("symbol", e.tokenData.symbol)("name", e.tokenData.name)("chain", e.chain)("address", e.tokenData.id)("logoUrl", e.tokenData.logo)("hasWhiteBackground", !0),
                t.xp6(1),
                t.Q6J("ngIf", e.isTabletOrMobile)
            }
        }
        function k_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 199),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t._uU(3),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.hYB("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.pool"), " ", t.lcZ(2, 5, "pair_explorer.col_7"), ""),
                t.xp6(3),
                t.hij(" ", e.tokenPoolInfo.fee, "% ")
            }
        }
        function y_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(51);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function w_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 200),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.openBinocularsPanel())
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 201),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 2, "pair_explorer.search_token_pairs"))("disableTooltip", e.isTabletOrMobile)
            }
        }
        function T_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(47);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        const v_ = function(n, i) {
            return {
                danger: n,
                warning: i
            }
        };
        function S_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 186),
            t.YNc(1, x_, 2, 0, "a", 187),
            t.YNc(2, O_, 4, 7, "div", 188),
            t.TgZ(3, "div", 189),
            t._UZ(4, "app-token-name", 190),
            t.ALo(5, "appSafe"),
            t.ALo(6, "appSafe"),
            t.qZA(),
            t.YNc(7, k_, 4, 7, "div", 191),
            t.YNc(8, y_, 1, 1, "ng-container", 65),
            t.YNc(9, w_, 4, 4, "ng-container", 6),
            t.YNc(10, T_, 1, 1, "ng-container", 65),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.isVentures && "tablet" === e.mediaDevice),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.symbol),
                t.xp6(1),
                t.Q6J("ngClass", t.WLB(14, v_, e.scamWarningType === e.WarningType.DANGER, e.scamWarningType === e.WarningType.WARNING)),
                t.xp6(1),
                t.Q6J("tokenLeft", t.lcZ(5, 10, e.tokenData.symbol))("tokenRight", e.shouldStickHeader ? null : t.lcZ(6, 12, e.tokenData.symbol_vs))("size", e.isTabletOrMobile && e.countCharactersSymbol(e.tokenData.symbol_vs, e.tokenData.symbol) ? "size-m" : "size-l"),
                t.xp6(3),
                t.Q6J("ngIf", e.hasFeePercentagePools(e.exchange) && e.tokenPoolInfo.fee && e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("ngIf", e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData && !!e.tokenData.symbol && e.pairSelected && !e.shouldStickHeader),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData && !!e.tokenData.symbol)
            }
        }
        function A_(n, i) {
            if (1 & n && t.YNc(0, S_, 11, 17, "div", 185),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.tokenData.symbol)
            }
        }
        function Z_(n, i) {
            if (1 & n && (t.TgZ(0, "span", 211),
            t._uU(1),
            t.ALo(2, "appSafe"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Oqu(t.xi3(2, 1, e.tokenData.name, 30))
            }
        }
        function L_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 199),
            t.ALo(1, "translate"),
            t.ALo(2, "translate"),
            t._uU(3),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.hYB("ngbTooltip", "", t.lcZ(1, 3, "pair_explorer.pool"), " ", t.lcZ(2, 5, "pair_explorer.col_7"), ""),
                t.xp6(3),
                t.hij(" ", e.tokenPoolInfo.fee, "% ")
            }
        }
        function I_(n, i) {
            if (1 & n && t.GkF(0, 47),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(51);
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        function D_(n, i) {
            1 & n && (t.TgZ(0, "a", 192),
            t._UZ(1, "img", 193),
            t.qZA())
        }
        function E_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 202)(1, "div", 203),
                t.YNc(2, Z_, 3, 4, "span", 204),
                t.YNc(3, L_, 4, 7, "div", 191),
                t.YNc(4, I_, 1, 1, "ng-container", 65),
                t.YNc(5, D_, 2, 0, "a", 187),
                t.qZA(),
                t.TgZ(6, "div", 205)(7, "small")(8, "span", 206),
                t._uU(9),
                t.ALo(10, "addressEllipsis"),
                t.qZA(),
                t.TgZ(11, "a", 207, 208),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.MAs(12)
                      , r = t.oxw();
                    return t.KtG(r.copyText(r.tokenData.id, a))
                }),
                t.ALo(13, "translate"),
                t._UZ(14, "fa-icon", 209),
                t.qZA()(),
                t.TgZ(15, "small")(16, "span", 206),
                t._uU(17),
                t.ALo(18, "translate"),
                t.ALo(19, "addressEllipsis"),
                t.qZA(),
                t.TgZ(20, "a", 207, 210),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.MAs(21)
                      , r = t.oxw();
                    return t.KtG(r.copyText(r.publicAddress, a))
                }),
                t.ALo(22, "translate"),
                t._UZ(23, "fa-icon", 209),
                t.qZA()()()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngIf", e.tokenData.name),
                t.xp6(1),
                t.Q6J("ngIf", e.hasFeePercentagePools(e.exchange) && e.tokenPoolInfo.fee && !e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("ngIf", !e.isTabletOrMobile),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.isVentures && !e.isTabletOrMobile),
                t.xp6(4),
                t.hij(" Token: ", t.lcZ(10, 9, e.tokenData.id), " "),
                t.xp6(2),
                t.Q6J("ngbTooltip", t.lcZ(13, 11, "user.copy_address")),
                t.xp6(6),
                t.AsE(" ", t.lcZ(18, 13, "home.pair"), ": ", t.lcZ(19, 15, e.publicAddress), " "),
                t.xp6(3),
                t.Q6J("ngbTooltip", t.lcZ(22, 17, "user.copy_address"))
            }
        }
        const Wt = function(n) {
            return {
                price: n
            }
        };
        function J_(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(39);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Wt, e.tokenData.priceUSD))
            }
        }
        function U_(n, i) {
            if (1 & n && t.GkF(0, 70),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(39);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.VKq(2, Wt, e.tokenData.poolPrice))
            }
        }
        function N_(n, i) {
            if (1 & n && (t.TgZ(0, "span", 217),
            t.ALo(1, "appRoundPrices"),
            t._UZ(2, "fa-icon", 218),
            t._uU(3),
            t.ALo(4, "appRoundPrices"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(4);
                t.s9C("title", t.xi3(1, 5, e.getPriceDifference(e.tokenData.priceUSD, e.priceVariation24h), 4)),
                t.Q6J("@simpleFadeAnimation", e.priceVariation24h)("ngClass", e.priceVariation24h < 0 ? "sell-color" : "buy-color"),
                t.xp6(2),
                t.Q6J("icon", e.priceVariation24h > 0 ? "chevron-up" : "chevron-down"),
                t.xp6(1),
                t.hij(" ", t.xi3(4, 8, e.getPriceDifference(e.tokenData.priceUSD, e.priceVariation24h), 4), "")
            }
        }
        function q_(n, i) {
            if (1 & n && (t.TgZ(0, "div")(1, "span", 219),
            t.ALo(2, "appNumber"),
            t.TgZ(3, "span", 220),
            t._uU(4),
            t.qZA(),
            t._uU(5),
            t.ALo(6, "appRoundPrices"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(4);
                t.Q6J("@simpleFadeAnimation", e.tokenData.priceETH),
                t.xp6(1),
                t.hYB("title", "", t.xi3(2, 5, e.tokenData.priceETH, "expanded"), " ", e.refTokenSymbol, ""),
                t.xp6(3),
                t.hij("", e.refTokenSymbol, " "),
                t.xp6(1),
                t.Oqu(t.xi3(6, 8, e.tokenData.priceETH, 4))
            }
        }
        function Q_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 215),
            t.YNc(1, N_, 5, 11, "span", 216),
            t.YNc(2, q_, 7, 11, "div", 6),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", e.priceVariation24h && "mobile" !== e.mediaDevice),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.priceETH)
            }
        }
        function F_(n, i) {
            if (1 & n && (t.TgZ(0, "div", 213),
            t.YNc(1, J_, 1, 4, "ng-container", 64),
            t.YNc(2, U_, 1, 4, "ng-container", 64),
            t.YNc(3, Q_, 3, 2, "div", 214),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.priceUSD),
                t.xp6(1),
                t.Q6J("ngIf", !e.tokenData.priceUSD && e.tokenData.poolPrice),
                t.xp6(1),
                t.Q6J("ngIf", !e.shouldStickHeader && !e.loader)
            }
        }
        function H_(n, i) {
            if (1 & n && t.YNc(0, F_, 4, 3, "div", 212),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.tokenData.symbol)
            }
        }
        function R_(n, i) {
            1 & n && (t.TgZ(0, "span", 224),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.launch_price")))
        }
        function Y_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "strong", 221, 222),
                t.NdJ("click", function() {
                    const r = t.CHM(e).price
                      , l = t.MAs(1)
                      , _ = t.oxw();
                    return t.KtG(_.copyNumberText(r, l))
                }),
                t.ALo(2, "appNumber"),
                t.YNc(3, R_, 3, 3, "span", 223),
                t.TgZ(4, "span"),
                t._uU(5, "$"),
                t.qZA(),
                t._uU(6),
                t.ALo(7, "appRoundPrices"),
                t.qZA()
            }
            if (2 & n) {
                const e = i.price
                  , o = t.oxw()
                  , a = t.MAs(61);
                t.Akn(o.screenWidth < 768 ? "font-size: " + (31 - t.xi3(2, 8, e, "expanded").toString().length) + "px;" : null),
                t.Q6J("@simpleFadeAnimation", e)("ngbTooltip", a)("autoClose", !1)("animation", !1),
                t.xp6(3),
                t.Q6J("ngIf", !o.tokenData.priceUSD && o.tokenData.poolPrice),
                t.xp6(3),
                t.Oqu(t.xi3(7, 11, e, 4))
            }
        }
        const F = function(n) {
            return {
                disabled: n
            }
        };
        function W_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 226),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.openModal("scamVelox"))
                }),
                t._UZ(1, "img", 227),
                t.ALo(2, "translate"),
                t.TgZ(3, "span"),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(7, F, e.pairInfoLoader)),
                t.xp6(1),
                t.MGl("alt", "", t.lcZ(2, 3, "pair_explorer.limit"), " + 'icon'"),
                t.xp6(3),
                t.Oqu(t.lcZ(5, 5, "pair_explorer.limit"))
            }
        }
        function B_(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, W_, 6, 9, "a", 225),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.isLimitBotSupported)
            }
        }
        function z_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 226),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return t.KtG(a.openModal("velox"))
                }),
                t._UZ(1, "img", 227),
                t.ALo(2, "translate"),
                t.TgZ(3, "span"),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(10, F, e.pairInfoLoader)),
                t.uIk("href", e.userAccess && e.isMobileDevice() ? e.veloxUrl : null, t.LSH)("target", e.userAccess && e.isMobileDevice() ? "blank" : null)("data-velox", e.tokenData.symbol),
                t.xp6(1),
                t.MGl("alt", "", t.lcZ(2, 6, "pair_explorer.limit"), " + 'icon'"),
                t.xp6(3),
                t.Oqu(t.lcZ(5, 8, "pair_explorer.limit"))
            }
        }
        function V_(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, z_, 6, 12, "a", 225),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.isLimitBotSupported)
            }
        }
        function G_(n, i) {
            if (1 & n && (t.YNc(0, B_, 2, 1, "ng-container", 6),
            t.YNc(1, V_, 2, 1, "ng-container", 6)),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.scamAdvice.show && !e.disclaimer),
                t.xp6(1),
                t.Q6J("ngIf", !e.scamAdvice.show && !e.disclaimer)
            }
        }
        function $_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 229),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.showAggregatorScamInfo("buy"))
                }),
                t._UZ(1, "fa-icon", 230),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngClass", t.VKq(4, F, e.pairInfoLoader)),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 2, "pair_explorer.swap"), " ")
            }
        }
        function j_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 229),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(3);
                    return a.setEventGA(a.tokenData.id),
                    t.KtG(a.openAggregator(a.TransactionType.BUY))
                }),
                t._UZ(1, "fa-icon", 230),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(5, F, e.pairInfoLoader)),
                t.uIk("data-uniswap-trade", e.exchange + "- Trade -" + e.tokenData.symbol),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 3, "pair_explorer.swap"), " ")
            }
        }
        function K_(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 229),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).showBlockNoAggregator(),
                    t.KtG(!1)
                }),
                t._UZ(1, "fa-icon", 230),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(4, F, e.pairInfoLoader)),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 2, "pair_explorer.swap"), " ")
            }
        }
        function X_(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, j_, 4, 7, "a", 228),
            t.YNc(2, K_, 4, 6, "a", 228),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", (!e.aggregatorScamAdvice.show || e.showAggregatorNotTransactions) && !e.showNoAggregator()),
                t.xp6(1),
                t.Q6J("ngIf", (!e.aggregatorScamAdvice.show || e.showAggregatorNotTransactions) && e.showNoAggregator())
            }
        }
        function tg(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 232),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).openExchangeSwap(),
                    t.KtG(!1)
                }),
                t._UZ(1, "fa-icon", 230),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(5, F, e.pairInfoLoader)),
                t.uIk("data-uniswap-trade", e.exchange + "- Trade -" + e.tokenData.symbol),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 3, "pair_explorer.swap"), " ")
            }
        }
        function eg(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 229),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).showBlockNoAggregator(),
                    t.KtG(!1)
                }),
                t._UZ(1, "fa-icon", 230),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(4, F, e.pairInfoLoader)),
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 2, "pair_explorer.swap"), " ")
            }
        }
        function ng(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, tg, 4, 7, "a", 231),
            t.YNc(2, eg, 4, 6, "a", 228),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", (!e.aggregatorScamAdvice.show || e.showAggregatorNotTransactions) && "#" !== e.alternativeExchange.url),
                t.xp6(1),
                t.Q6J("ngIf", (!e.aggregatorScamAdvice.show || e.showAggregatorNotTransactions) && "#" === e.alternativeExchange.url)
            }
        }
        function og(n, i) {
            if (1 & n && (t.YNc(0, $_, 4, 6, "a", 228),
            t.YNc(1, X_, 3, 2, "ng-container", 6),
            t.YNc(2, ng, 3, 2, "ng-container", 6)),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.shouldShowAggregatorScamAlert()),
                t.xp6(1),
                t.Q6J("ngIf", !e.shouldShowAggregatorScamAlert() && e.isAggregatorSupportedInCurrentChain && (e.isFullScreen || e.showSwapButton)),
                t.xp6(1),
                t.Q6J("ngIf", !e.isAggregatorSupportedInCurrentChain && !e.shouldShowAggregatorScamAlert() && !e.hideAggregatorWithSlug)
            }
        }
        function ag(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-interval-information", 233),
                t.NdJ("intervalChange", function(a) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.onIntervalChange(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("selectedInterval", e.interval)("variation", e.variationData)("currentPrice", e.tokenData.price)
            }
        }
        function ig(n, i) {
            if (1 & n && (t.TgZ(0, "div", 234),
            t._UZ(1, "app-favorite-button", 235),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("item", e.getFavData())("isPairExplorer", !0)("popupPlacement", e.shouldStickHeader)("hiddenFavorites", e.hiddenFavorites)
            }
        }
        function rg(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "a", 247),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.isTabletOrMobile ? a.toggleSocialMediaPanel(!0) : a.openModal("socialMedia"))
                })("keyup.enter", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.isTabletOrMobile ? a.toggleSocialMediaPanel(!0) : a.openModal("socialMedia"))
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 248),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("disableTooltip", e.isTabletOrMobile)("ngbTooltip", t.lcZ(2, 2, "pair_explorer.share"))
            }
        }
        function cg(n, i) {
            if (1 & n && (t._UZ(0, "img", 251),
            t.ALo(1, "scannerLogoUrl"),
            t.ALo(2, "translate")),
            2 & n) {
                const e = t.oxw(3);
                t.s9C("ngbTooltip", t.lcZ(2, 4, "pair_explorer.view_contract")),
                t.Q6J("src", t.lcZ(1, 2, e.chain), t.LSH)
            }
        }
        function lg(n, i) {
            if (1 & n && (t.TgZ(0, "a", 249),
            t.ALo(1, "scannerTokenUrl"),
            t.YNc(2, cg, 3, 6, "img", 250),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", t.xi3(1, 2, e.chain, e.tokenData.id), t.LSH),
                t.xp6(2),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id)
            }
        }
        const sg = function() {
            return {
                icon: "desktop",
                marginLeft: !0
            }
        }
          , Bt = function() {
            return ["fab", "telegram"]
        }
          , Mt = function(n) {
            return {
                icon: n,
                marginLeft: !0
            }
        }
          , zt = function() {
            return ["fab", "twitter"]
        };
        function _g(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 70)(2, 70)(3, 70),
            t.BQk()),
            2 & n) {
                t.oxw(2);
                const e = t.MAs(73);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", t.DdM(6, sg)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", t.VKq(8, Mt, t.DdM(7, Bt))),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", t.VKq(11, Mt, t.DdM(10, zt)))
            }
        }
        const gg = function(n, i) {
            return {
                link: n,
                icon: "desktop",
                tooltip: i,
                marginLeft: !0
            }
        };
        function pg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, gg, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.website, t.lcZ(1, 2, "pair_explorer.web")))
            }
        }
        const U = function(n, i, e) {
            return {
                link: n,
                icon: i,
                tooltip: e,
                marginLeft: !0
            }
        };
        function dg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.telegram, t.DdM(4, Bt), t.lcZ(1, 2, "pair_explorer.telegram")))
            }
        }
        function hg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(3)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.twitter, t.DdM(4, zt), t.lcZ(1, 2, "pair_explorer.twitter")))
            }
        }
        function mg(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 252),
            t.YNc(2, pg, 2, 7, "ng-container", 64),
            t.YNc(3, dg, 2, 9, "ng-container", 64),
            t.YNc(4, hg, 2, 9, "ng-container", 64),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Q6J("ngIf", e.setSocialElementsActive("website", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.website)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("telegram", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.telegram)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("twitter", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.twitter))
            }
        }
        function ug(n, i) {
            1 & n && (t._UZ(0, "img", 254),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.coingecko_link"))
        }
        function fg(n, i) {
            if (1 & n && (t.TgZ(0, "a", 249),
            t.YNc(1, ug, 2, 3, "img", 253),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Tol(e.screenWidth > 598 ? "ms-2" : null),
                t.Q6J("href", e.coingeckoLink, t.LSH),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.coingeckoLink)
            }
        }
        function Cg(n, i) {
            1 & n && (t._UZ(0, "img", 257),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.cmc_link"))
        }
        function bg(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t.YNc(1, Cg, 2, 3, "img", 256),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.cmcTokenLink, t.LSH),
                t.uIk("data-cmc-icon", e.tokenData.symbol),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.cmcTokenLink)
            }
        }
        function Pg(n, i) {
            1 & n && t._UZ(0, "img", 260)
        }
        function xg(n, i) {
            if (1 & n && (t.TgZ(0, "a", 258),
            t.YNc(1, Pg, 1, 0, "img", 259),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.s9C("href", "https://app.bubblemaps.io/" + e.ChainBubbleMaps[e.chain] + "/token/" + e.toChecksumAddress(e.tokenData.id), t.LSH),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.isBubbleMapsSupported)
            }
        }
        function Mg(n, i) {
            1 & n && (t._UZ(0, "img", 263),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.add_to_metamask"))
        }
        function Og(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 261),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.addTokenMetamask(a.tokenData))
                }),
                t.YNc(1, Mg, 2, 3, "img", 262),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id)
            }
        }
        function kg(n, i) {
            1 & n && (t._UZ(0, "img", 266),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.locked_liquidity"))
        }
        function yg(n, i) {
            if (1 & n && (t.TgZ(0, "a", 264),
            t.YNc(1, kg, 2, 3, "img", 265),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("href", e.getUnicryptUrl(), t.LSH),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id)
            }
        }
        const wg = function() {
            return {
                icon: "envelope",
                marginLeft: !0
            }
        }
          , Vt = function() {
            return ["fab", "discord"]
        };
        function Tg(n, i) {
            if (1 & n && (t.ynx(0),
            t.GkF(1, 70)(2, 70),
            t.BQk()),
            2 & n) {
                t.oxw(3);
                const e = t.MAs(73);
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", t.DdM(4, wg)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)("ngTemplateOutletContext", t.VKq(6, Mt, t.DdM(5, Vt)))
            }
        }
        const vg = function(n, i) {
            return {
                link: n,
                icon: "envelope",
                tooltip: i,
                marginLeft: !0
            }
        };
        function Sg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, vg, "mailto: " + (null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.email), t.lcZ(1, 2, "pair_explorer.email") + ": " + (null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.email)))
            }
        }
        function Ag(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.discord, t.DdM(4, Vt), t.lcZ(1, 2, "pair_explorer.discord")))
            }
        }
        const Zg = function() {
            return ["fab", "youtube"]
        };
        function Lg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.youtube, t.DdM(4, Zg), t.lcZ(1, 2, "pair_explorer.youtube")))
            }
        }
        const Ig = function() {
            return ["fab", "instagram"]
        };
        function Dg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.instagram, t.DdM(4, Ig), t.lcZ(1, 2, "pair_explorer.instagram")))
            }
        }
        const Eg = function() {
            return ["fab", "tiktok"]
        };
        function Jg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.tiktok, t.DdM(4, Eg), t.lcZ(1, 2, "pair_explorer.tiktok")))
            }
        }
        const Ug = function() {
            return ["fab", "facebook"]
        };
        function Ng(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.facebook, t.DdM(4, Ug), t.lcZ(1, 2, "pair_explorer.facebook")))
            }
        }
        const qg = function() {
            return ["fab", "medium"]
        };
        function Qg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.medium, t.DdM(4, qg), t.lcZ(1, 2, "pair_explorer.medium")))
            }
        }
        const Fg = function() {
            return ["fab", "reddit"]
        };
        function Hg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.reddit, t.DdM(4, Fg), t.lcZ(1, 2, "pair_explorer.reddit")))
            }
        }
        const Rg = function() {
            return ["fab", "github"]
        };
        function Yg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.github, t.DdM(4, Rg), t.lcZ(1, 2, "pair_explorer.github")))
            }
        }
        const Wg = function() {
            return ["fab", "bitbucket"]
        };
        function Bg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.kEZ(5, U, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.bitbucket, t.DdM(4, Wg), t.lcZ(1, 2, "pair_explorer.bitbucket")))
            }
        }
        function zg(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "a", 267),
            t._UZ(2, "app-icon", 268),
            t.ALo(3, "translate"),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw(4);
                t.xp6(1),
                t.Q6J("href", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.nftCollection, t.LSH),
                t.xp6(1),
                t.Q6J("width", 17)("ngbTooltip", t.lcZ(3, 3, "pair_explorer.nftCollection"))
            }
        }
        const Vg = function(n, i) {
            return {
                link: n,
                icon: "link",
                tooltip: i,
                marginLeft: !0
            }
        };
        function Gg(n, i) {
            if (1 & n && (t.GkF(0, 70),
            t.ALo(1, "translate")),
            2 & n) {
                const e = t.oxw(4)
                  , o = t.MAs(71);
                t.Q6J("ngTemplateOutlet", o)("ngTemplateOutletContext", t.WLB(4, Vg, null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.extraInfo, t.lcZ(1, 2, "pair_explorer.extraInfo")))
            }
        }
        function $g(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 252),
            t.YNc(2, Sg, 2, 7, "ng-container", 64),
            t.YNc(3, Ag, 2, 9, "ng-container", 64),
            t.YNc(4, Lg, 2, 9, "ng-container", 64),
            t.YNc(5, Dg, 2, 9, "ng-container", 64),
            t.YNc(6, Jg, 2, 9, "ng-container", 64),
            t.YNc(7, Ng, 2, 9, "ng-container", 64),
            t.YNc(8, Qg, 2, 9, "ng-container", 64),
            t.YNc(9, Hg, 2, 9, "ng-container", 64),
            t.YNc(10, Yg, 2, 9, "ng-container", 64),
            t.YNc(11, Bg, 2, 9, "ng-container", 64),
            t.YNc(12, zg, 4, 5, "ng-container", 6),
            t.YNc(13, Gg, 2, 7, "ng-container", 64),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw(3);
                t.xp6(2),
                t.Q6J("ngIf", e.setSocialElementsActive("email", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.email)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("discord", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.discord)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("youtube", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.youtube)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("instagram", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.instagram)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("tiktok", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.tiktok)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("facebook", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.facebook)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("medium", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.medium)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("reddit", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.reddit)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("github", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.github)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("bitbucket", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.bitbucket)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("nftCollection", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.nftCollection)),
                t.xp6(1),
                t.Q6J("ngIf", e.setSocialElementsActive("extraInfo", null == e.tokenData.tokenInfo ? null : e.tokenData.tokenInfo.extraInfo))
            }
        }
        function jg(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, Tg, 3, 8, "ng-container", 6),
            t.YNc(2, $g, 14, 12, "ng-container", 6),
            t.BQk()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", 0 == e.socialNotDisabled.length),
                t.xp6(1),
                t.Q6J("ngIf", e.socialNotDisabled.length > 0 && e.pairSelected && e.tokenData.symbol && e.showSocialIcons())
            }
        }
        function Kg(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.more_links")))
        }
        function Xg(n, i) {
            1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.more_links")))
        }
        function tp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 269),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return a.isTabletOrMobile ? a.showLinksPanel(!0) : a.openModal("linksSocial"),
                    t.KtG(!1)
                }),
                t.YNc(1, Kg, 3, 3, "span", 6),
                t.YNc(2, Xg, 3, 3, "span", 6),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === e.mediaDevice),
                t.xp6(1),
                t.Q6J("ngIf", e.isTabletOrMobile)
            }
        }
        function ep(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 270),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(2).openModalOrPanel(),
                    t.KtG(!1)
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "pair_explorer.add_social_icons")))
        }
        function np(n, i) {
            1 & n && (t.TgZ(0, "a", 192),
            t._UZ(1, "img", 193),
            t.qZA())
        }
        function op(n, i) {
            if (1 & n && (t.TgZ(0, "div", 96)(1, "div", 98)(2, "strong"),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, "span"),
            t._uU(5, "/99"),
            t.qZA()()()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Udp("background-color", e.dextScore.color),
                t.Q6J("ngClass", t.VKq(4, Ht, 0 === e.dextScore.value)),
                t.xp6(2),
                t.hij(" ", 0 !== e.dextScore.value ? e.dextScore.value : "--", " ")
            }
        }
        function ap(n, i) {
            if (1 & n && (t.TgZ(0, "div", 236)(1, "div", 237),
            t.YNc(2, rg, 4, 4, "ng-container", 6),
            t.TgZ(3, "div", 238),
            t.YNc(4, lg, 3, 5, "a", 239),
            t.YNc(5, _g, 4, 13, "ng-container", 6),
            t.YNc(6, mg, 5, 3, "ng-container", 6),
            t.YNc(7, fg, 2, 5, "a", 240),
            t.YNc(8, bg, 2, 3, "a", 241),
            t.YNc(9, xg, 2, 2, "a", 242),
            t.YNc(10, Og, 2, 1, "a", 243),
            t.YNc(11, yg, 2, 2, "a", 244),
            t.YNc(12, jg, 3, 2, "ng-container", 6),
            t.qZA(),
            t.YNc(13, tp, 3, 2, "a", 245),
            t.YNc(14, ep, 3, 3, "a", 246),
            t.qZA(),
            t.YNc(15, np, 2, 0, "a", 187),
            t.YNc(16, op, 6, 6, "div", 83),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(2),
                t.Q6J("ngIf", e.tokenData && !!e.tokenData.symbol && !e.disclaimer),
                t.xp6(2),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id),
                t.xp6(1),
                t.Q6J("ngIf", (e.gtMdActive || e.isTabletOrMobile && !e.xsActive) && e.showSocialLinks && e.showSocialIcons() && 0 == e.socialNotDisabled.length),
                t.xp6(1),
                t.Q6J("ngIf", e.socialNotDisabled.length > 0 && e.pairSelected && e.tokenData.symbol),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.coingeckoLink),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.cmcTokenLink && (e.gtMdActive || e.isTabletOrMobile && !e.xsActive) && e.showSocialIcons()),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && e.isBubbleMapsSupported && (e.gtMdActive || e.isTabletOrMobile && !e.xsActive) && e.showSocialIcons()),
                t.xp6(1),
                t.Q6J("ngIf", e.showMetamaskIcon && (e.gtMdActive || e.isTabletOrMobile && !e.xsActive) && e.showSocialIcons()),
                t.xp6(1),
                t.Q6J("ngIf", e.pairSelected && e.tokenData.id && !!e.getUnicryptUrl() && !e.xsActive && !e.isLiquidityProviderSupported && e.showSocialIcons()),
                t.xp6(1),
                t.Q6J("ngIf", (e.gtMdActive || e.isTabletOrMobile && !e.xsActive) && e.showSocialLinks && e.showSocialIcons()),
                t.xp6(1),
                t.Q6J("ngIf", e.showMoreSocialsButton),
                t.xp6(1),
                t.Q6J("ngIf", e.relevantSocialDataMissing),
                t.xp6(1),
                t.Q6J("ngIf", e.tokenData.isVentures && "mobile" === e.mediaDevice),
                t.xp6(1),
                t.Q6J("ngIf", "mobile" === e.mediaDevice)
            }
        }
        function ip(n, i) {
            if (1 & n && (t.TgZ(0, "span", 272),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.hij(" Hot #", e.isHotPair.position, " ")
            }
        }
        function rp(n, i) {
            if (1 & n && t.YNc(0, ip, 2, 1, "span", 271),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.isHotPair)
            }
        }
        function cp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "app-new-pairs-search", 273),
                t.NdJ("itemSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onPairSelected(a))
                })("previousSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onPreviousSearchSelected(a))
                })("trendingSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.onHotPairSelected(a))
                }),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("placeholder", "pair_explorer.find_pair")("exchange", e.filterExchange)("typeOfAction", "emit")
            }
        }
        function lp(n, i) {
            if (1 & n && t.YNc(0, cp, 2, 3, "ng-container", 6),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", "desktop" === e.mediaDevice)
            }
        }
        const sp = function() {
            return ["far", "search"]
        };
        function _p(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 274),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw().toggleSearchMobile(!0),
                    t.KtG(!1)
                }),
                t._UZ(1, "fa-icon", 275),
                t.qZA(),
                t.GkF(2, 47)
            }
            if (2 & n) {
                t.oxw();
                const e = t.MAs(57);
                t.xp6(1),
                t.Q6J("icon", t.DdM(2, sp)),
                t.xp6(1),
                t.Q6J("ngTemplateOutlet", e)
            }
        }
        const gp = function() {
            return ["far", "bars"]
        };
        function pp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 278),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleSideMenu())
                }),
                t.qZA()
            }
            2 & n && t.Q6J("icon", t.DdM(1, gp))
        }
        function dp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 276),
            t.YNc(1, pp, 1, 2, "fa-icon", 277),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !e.showMenu)
            }
        }
        function hp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-tooltip-layout-types", 291),
                t.NdJ("layoutOptionsChanged", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.changeLayoutOptions(a))
                })("emitHideMenu", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.showLayoutTooltip(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("layoutOptions", e.layoutOptions)("isDarkTheme", e.isDarkTheme)
            }
        }
        const Gt = function(n, i, e) {
            return {
                premium: n,
                standard: i,
                free: e
            }
        };
        function mp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "img", 292),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleUserMenu())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngClass", t.kEZ(1, Gt, e.role === e.Role.P100, e.role === e.Role.P20, !e.userAccess))
            }
        }
        function up(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 293),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.goToUserAccount())
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            2 & n && (t.xp6(1),
            t.Oqu(t.lcZ(2, 1, "user.connect_button")))
        }
        function fp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-user-info-dropdown", 294),
                t.NdJ("clickOut", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.toggleUserMenu())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("dextAmount", e.dextAmount)("userId", e.userId)("role", e.role)("isFree", !e.userAccess)
            }
        }
        const Cp = function(n) {
            return {
                active: n
            }
        }
          , bp = function() {
            return ["far", "columns"]
        }
          , Pp = function() {
            return ["far", "gear"]
        };
        function xp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 279)(1, "button", 280, 281),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.showLayoutTooltip())
                }),
                t._UZ(3, "fa-icon", 218),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA(),
                t.YNc(6, hp, 1, 2, "app-tooltip-layout-types", 282),
                t.qZA(),
                t.TgZ(7, "div", 283),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.openSettingsPanel())
                }),
                t._UZ(8, "fa-icon", 284),
                t.qZA(),
                t.TgZ(9, "div", 285),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.toggleFavorites())
                }),
                t._UZ(10, "fa-icon", 286),
                t.qZA(),
                t.TgZ(11, "div", 287),
                t.YNc(12, mp, 1, 5, "img", 288),
                t.YNc(13, up, 3, 3, "button", 289),
                t.qZA(),
                t.YNc(14, fp, 1, 4, "app-user-info-dropdown", 290)
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngClass", t.VKq(14, Cp, e.showLayoutOptions)),
                t.xp6(2),
                t.Q6J("icon", t.DdM(16, bp)),
                t.xp6(1),
                t.hij(" ", t.lcZ(5, 12, "header.change_layout"), " "),
                t.xp6(2),
                t.Q6J("ngIf", e.showLayoutOptions),
                t.xp6(2),
                t.Q6J("icon", t.DdM(17, Pp)),
                t.xp6(2),
                t.Tol(e.hiddenFavorites ? null : "text-white"),
                t.xp6(1),
                t.Q6J("ngClass", t.kEZ(18, Gt, e.role === e.Role.P100 && !!e.userId, e.role === e.Role.P20 && !!e.userId, !e.userAccess && !!e.userId)),
                t.xp6(1),
                t.Q6J("ngIf", !!e.userId),
                t.xp6(1),
                t.Q6J("ngIf", !e.userId),
                t.xp6(1),
                t.Q6J("ngIf", !!e.showUserMenu)
            }
        }
        function Mp(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Oqu(e.getFullPriceUSD(e.tokenData.priceUSD))
            }
        }
        function Op(n, i) {
            if (1 & n && (t.TgZ(0, "div"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Oqu(e.getFullPriceUSD(e.tokenData.poolPrice))
            }
        }
        function kp(n, i) {
            if (1 & n && (t.YNc(0, Mp, 2, 1, "div", 6),
            t.YNc(1, Op, 2, 1, "div", 6),
            t.TgZ(2, "div"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.tokenData.priceUSD),
                t.xp6(1),
                t.Q6J("ngIf", !e.tokenData.priceUSD && e.tokenData.poolPrice),
                t.xp6(2),
                t.Oqu(t.lcZ(4, 3, "pair_explorer.copy_price"))
            }
        }
        const $t = function() {
            return ["fal", "times"]
        };
        function yp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 299),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).showBlockNoAggregator(),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 275),
                t.qZA()
            }
            2 & n && (t.Q6J("ngbTooltip", t.lcZ(1, 2, "home.close")),
            t.xp6(2),
            t.Q6J("icon", t.DdM(4, $t)))
        }
        function wp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 297),
            t.YNc(1, yp, 3, 5, "a", 298),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === e.mediaDevice)
            }
        }
        const Ot = function(n) {
            return {
                exchange: n
            }
        };
        function Tp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 304),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).openExchangeSwap(),
                    t.KtG(!1)
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngClass", t.VKq(6, F, e.pairInfoLoader)),
                t.uIk("data-uniswap-trade", e.exchange + "- Trade -" + e.tokenData.symbol),
                t.xp6(1),
                t.hij(" ", t.xi3(2, 3, "pair_explorer.no_aggregator_button", t.VKq(8, Ot, e.exchange)), " ")
            }
        }
        const jt = function(n) {
            return {
                chain: n
            }
        };
        function vp(n, i) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "p", 300),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "p"),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA(),
            t.TgZ(7, "p", 301),
            t._uU(8),
            t.ALo(9, "translate"),
            t.qZA(),
            t.TgZ(10, "p", 302),
            t.YNc(11, Tp, 3, 10, "a", 303),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const e = t.oxw().isExchange
                  , o = t.oxw();
                t.xp6(2),
                t.Oqu(t.lcZ(3, 4, "pair_explorer.no_aggregator_title")),
                t.xp6(3),
                t.Oqu(t.xi3(6, 6, "pair_explorer.no_aggregator_description", e ? t.VKq(12, jt, o.exchange + " " + o.exchangeVersion) : t.VKq(14, jt, o.getChainName()))),
                t.xp6(3),
                t.Oqu(t.xi3(9, 9, "pair_explorer.no_aggregator_advice", t.VKq(16, Ot, o.exchange))),
                t.xp6(3),
                t.Q6J("ngIf", !o.aggregatorScamAdvice.show || o.showAggregatorNotTransactions)
            }
        }
        function Sp(n, i) {
            1 & n && (t.ynx(0),
            t.TgZ(1, "p", 300),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.TgZ(4, "p"),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA(),
            t.TgZ(7, "p"),
            t._uU(8),
            t.ALo(9, "translate"),
            t.qZA(),
            t.BQk()),
            2 & n && (t.xp6(2),
            t.Oqu(t.lcZ(3, 3, "pair_explorer.no_aggregator_exchange_title")),
            t.xp6(3),
            t.Oqu(t.lcZ(6, 5, "pair_explorer.advice_part_1")),
            t.xp6(3),
            t.Oqu(t.lcZ(9, 7, "pair_explorer.advice_part_2")))
        }
        function Ap(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.TgZ(1, "p", 300),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "p"),
                t._uU(5),
                t.ALo(6, "translate"),
                t.qZA(),
                t.TgZ(7, "p", 301),
                t._uU(8),
                t.ALo(9, "translate"),
                t._UZ(10, "br"),
                t._uU(11, "("),
                t.TgZ(12, "span", 305),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.copyToken(a.tokenData.id))
                }),
                t._uU(13),
                t.ALo(14, "slice"),
                t.ALo(15, "slice"),
                t.qZA(),
                t._uU(16),
                t.ALo(17, "translate"),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(2),
                t.Oqu(t.lcZ(3, 6, "pair_explorer.no_aggregator_title")),
                t.xp6(3),
                t.Oqu(t.lcZ(6, 8, "pair_explorer.no_aggregator_platform_description")),
                t.xp6(3),
                t.hij("", t.lcZ(9, 10, "pair_explorer.no_aggregator_platform_advice_1"), " "),
                t.xp6(5),
                t.AsE("", t.Dn7(14, 12, e.tokenData.id, 0, 5), "...", t.Dn7(15, 16, e.tokenData.id, 38, 42), ""),
                t.xp6(3),
                t.hij(") ", t.xi3(17, 20, "pair_explorer.no_aggregator_platform_advice_2", t.VKq(23, Ot, e.exchange)), "")
            }
        }
        const Zp = function(n, i, e, o, a, r, l, _, d) {
            return {
                "align-with-footer": n,
                "layout-flipped": i,
                "layout-columns": e,
                "layout-no-favs": o,
                "favorites-hidden": a,
                "aggregator-container": r,
                fullScreen: l,
                fixed: _,
                mobile: d
            }
        };
        function Lp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 295),
            t.YNc(1, wp, 2, 1, "div", 296),
            t.YNc(2, vp, 12, 18, "ng-container", 6),
            t.YNc(3, Sp, 10, 9, "ng-container", 6),
            t.YNc(4, Ap, 18, 25, "ng-container", 6),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.rFY(5, Zp, [e.bottomReached, "desktop" === e.mediaDevice && e.isLayoutFlipped, "desktop" === e.mediaDevice && e.isColumnFirst, "desktop" === e.mediaDevice && !e.showFavoritesColumn, e.hiddenFavorites, "desktop" === e.mediaDevice, e.isFullScreen || e.showSwapButton, e.isFullScreen || e.showSwapButton, "desktop" !== e.mediaDevice])),
                t.xp6(1),
                t.Q6J("ngIf", e.isFullScreen || e.showSwapButton),
                t.xp6(1),
                t.Q6J("ngIf", "#" !== e.alternativeExchange.url && !e.isIOS),
                t.xp6(1),
                t.Q6J("ngIf", "#" === e.alternativeExchange.url && !e.isIOS),
                t.xp6(1),
                t.Q6J("ngIf", e.isIOS)
            }
        }
        function Ip(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 299),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(3).hideAggregatorScamInfo(),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 275),
                t.qZA()
            }
            2 & n && (t.Q6J("ngbTooltip", t.lcZ(1, 2, "home.close")),
            t.xp6(2),
            t.Q6J("icon", t.DdM(4, $t)))
        }
        function Dp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 297),
            t.YNc(1, Ip, 3, 5, "a", 298),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", "desktop" === e.mediaDevice)
            }
        }
        function Ep(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 311),
                t.NdJ("click", function() {
                    return t.CHM(e),
                    t.oxw(2).goTradeExchange(),
                    t.KtG(!1)
                }),
                t._uU(1),
                t.ALo(2, "translate"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.uIk("data-uniswap-trade", "flagged: " + e.tokenData.symbol),
                t.xp6(1),
                t.hij("", t.lcZ(2, 2, "pair_explorer.trade"), " ")
            }
        }
        function Jp(n, i) {
            if (1 & n && (t.TgZ(0, "a", 312),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.uIk("data-uniswap-trade", "flagged: " + e.tokenData.symbol),
                t.xp6(1),
                t.hij("", t.lcZ(2, 2, "pair_explorer.trade"), " ")
            }
        }
        const Up = function(n) {
            return {
                "d-none": n
            }
        };
        function Np(n, i) {
            if (1 & n && (t.TgZ(0, "a", 313),
            t._UZ(1, "img", 227),
            t.ALo(2, "translate"),
            t.TgZ(3, "span", 314),
            t._uU(4),
            t.ALo(5, "translate"),
            t.qZA()()),
            2 & n) {
                const e = t.oxw(2);
                t.uIk("href", e.userAccess && e.isMobileDevice ? e.veloxUrl : null, t.LSH)("rel", e.userAccess && e.isMobileDevice ? "noopener" : null)("target", e.userAccess && e.isMobileDevice ? "blank" : null)("data-velox", e.tokenData.symbol),
                t.xp6(1),
                t.MGl("alt", "", t.lcZ(2, 7, "pair_explorer.limit"), " + 'icon'"),
                t.xp6(2),
                t.Q6J("ngClass", t.VKq(11, Up, e.screenWidth > 1199 && e.screenWidth < 1431)),
                t.xp6(1),
                t.hij("", t.lcZ(5, 9, "pair_explorer.limit"), " ")
            }
        }
        const qp = function(n, i, e, o, a, r, l, _, d, k) {
            return {
                "align-with-footer": n,
                "layout-flipped": i,
                "layout-columns": e,
                "layout-no-favs": o,
                "favorites-hidden": a,
                "aggregator-container": r,
                fullScreen: l,
                notFullScreen: _,
                fixed: d,
                mobile: k
            }
        };
        function Qp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 306),
            t.YNc(1, Dp, 2, 1, "div", 296),
            t.TgZ(2, "p"),
            t._UZ(3, "img", 307),
            t.qZA(),
            t.TgZ(4, "p", 301),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA(),
            t.TgZ(7, "p", 302),
            t.YNc(8, Ep, 3, 4, "a", 308),
            t.YNc(9, Jp, 3, 4, "a", 309),
            t.YNc(10, Np, 6, 13, "a", 310),
            t.qZA()()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.rFY(8, qp, [e.bottomReached, "desktop" === e.mediaDevice && e.isLayoutFlipped, "desktop" === e.mediaDevice && e.isColumnFirst, "desktop" === e.mediaDevice && !e.showFavoritesColumn, e.hiddenFavorites, "desktop" === e.mediaDevice, e.isFullScreen || e.showSwapButton, !e.isFullScreen && !e.showSwapButton, e.isFullScreen || e.showSwapButton, "desktop" !== e.mediaDevice])),
                t.xp6(1),
                t.Q6J("ngIf", e.isFullScreen || e.showSwapButton),
                t.xp6(4),
                t.Oqu(t.lcZ(6, 6, "pair_explorer.scam_modal")),
                t.xp6(3),
                t.Q6J("ngIf", "buy" === e.scamAdvice.typeAdvice),
                t.xp6(1),
                t.Q6J("ngIf", "sell" === e.scamAdvice.typeAdvice),
                t.xp6(1),
                t.Q6J("ngIf", "velox" === e.scamAdvice.typeAdvice)
            }
        }
        function Fp(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-tabs", 139),
                t.NdJ("tabIdSelected", function(a) {
                    t.CHM(e);
                    const r = t.oxw(2);
                    return t.KtG(r.changeVisibilityPoolSwap(a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("tabsOptions", e.poolSwapTabsOptions)("defaultSelectedTab", e.defaultPoolSwapTab)
            }
        }
        function Hp(n, i) {
            if (1 & n && (t.TgZ(0, "div", 315),
            t.YNc(1, Fp, 1, 2, "app-tabs", 129),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", e.poolSwapTabsOptions.length)
            }
        }
        function Rp(n, i) {
            if (1 & n && (t.TgZ(0, "b", 325),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._UZ(3, "br"),
            t._uU(4),
            t.ALo(5, "appDateFormat"),
            t.ALo(6, "appDateFromUnix")),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 2, "pair_explorer.first_seen")),
                t.xp6(3),
                t.hij(" ", t.xi3(5, 4, t.lcZ(6, 7, e.timestamp), "YYYY-MM-DD HH:mm:ss"), " ")
            }
        }
        function Yp(n, i) {
            if (1 & n && (t.TgZ(0, "span", 326),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.TgZ(4, "span", 327),
            t._uU(5),
            t.ALo(6, "translate"),
            t.qZA(),
            t._uU(7)),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 4, "pair_explorer.buys")),
                t.xp6(2),
                t.hij(": ", e.type.buys, " "),
                t.xp6(2),
                t.Oqu(t.lcZ(6, 6, "pair_explorer.sells")),
                t.xp6(2),
                t.hij(": ", e.type.sells, " ")
            }
        }
        function Wp(n, i) {
            if (1 & n && (t.TgZ(0, "b"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.ALo(4, "appNumber"),
            t._UZ(5, "br"),
            t.TgZ(6, "b"),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t._uU(9),
            t.ALo(10, "appNumber"),
            t._UZ(11, "br"),
            t.TgZ(12, "b"),
            t.ALo(13, "translate"),
            t._uU(14),
            t.ALo(15, "translate"),
            t.qZA(),
            t._uU(16),
            t.ALo(17, "appNumber")),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 7, "pair_explorer.max")),
                t.xp6(2),
                t.hij(": $", t.lcZ(4, 9, e.price.maximum), ""),
                t.xp6(4),
                t.Oqu(t.lcZ(8, 11, "pair_explorer.min")),
                t.xp6(2),
                t.hij(": $", t.lcZ(10, 13, e.price.minimum), ""),
                t.xp6(3),
                t.uIk("alt", t.lcZ(13, 15, "pair_explorer.average")),
                t.xp6(2),
                t.Oqu(t.lcZ(15, 17, "pair_explorer.avg")),
                t.xp6(2),
                t.hij(": $", t.lcZ(17, 19, e.price.average), " ")
            }
        }
        function Bp(n, i) {
            if (1 & n && (t.TgZ(0, "b"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.ALo(4, "appNumber"),
            t._UZ(5, "br"),
            t.TgZ(6, "b"),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t._uU(9),
            t.ALo(10, "appNumber"),
            t._UZ(11, "br"),
            t.TgZ(12, "b"),
            t.ALo(13, "translate"),
            t._uU(14),
            t.ALo(15, "translate"),
            t.qZA(),
            t._uU(16),
            t.ALo(17, "appNumber")),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 7, "pair_explorer.max")),
                t.xp6(2),
                t.hij(": ", t.lcZ(4, 9, e.priceETH.maximum), ""),
                t.xp6(4),
                t.Oqu(t.lcZ(8, 11, "pair_explorer.min")),
                t.xp6(2),
                t.hij(": ", t.lcZ(10, 13, e.priceETH.minimum), ""),
                t.xp6(3),
                t.uIk("alt", t.lcZ(13, 15, "pair_explorer.average")),
                t.xp6(2),
                t.Oqu(t.lcZ(15, 17, "pair_explorer.avg")),
                t.xp6(2),
                t.hij(": ", t.lcZ(17, 19, e.priceETH.average), " ")
            }
        }
        function zp(n, i) {
            if (1 & n && (t.TgZ(0, "span", 326),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.ALo(4, "appNumber"),
            t._UZ(5, "br"),
            t.TgZ(6, "span", 327),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t._uU(9),
            t.ALo(10, "appNumber")),
            2 & n) {
                const e = i.row;
                t.xp6(1),
                t.Oqu(t.lcZ(2, 4, "pair_explorer.buys")),
                t.xp6(2),
                t.hij(": ", t.lcZ(4, 6, e.amountToken.buys), " "),
                t.xp6(4),
                t.Oqu(t.lcZ(8, 8, "pair_explorer.sells")),
                t.xp6(2),
                t.hij(": ", t.lcZ(10, 10, e.amountToken.sells), " ")
            }
        }
        function Vp(n, i) {
            1 & n && t._UZ(0, "fa-icon", 329)
        }
        function Gp(n, i) {
            if (1 & n && (t.TgZ(0, "span", 326),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.ALo(4, "number"),
            t._UZ(5, "br"),
            t.TgZ(6, "span", 327),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t._uU(9),
            t.ALo(10, "number"),
            t._UZ(11, "br"),
            t.TgZ(12, "span"),
            t._uU(13),
            t.ALo(14, "translate"),
            t.ALo(15, "number"),
            t.qZA(),
            t.YNc(16, Vp, 1, 0, "fa-icon", 328)),
            2 & n) {
                const e = i.row
                  , o = t.oxw(4);
                t.xp6(1),
                t.Oqu(t.lcZ(2, 9, "pair_explorer.buys")),
                t.xp6(2),
                t.hij(": ", t.xi3(4, 11, e.amountRef.buys, "1.2-6"), " "),
                t.xp6(4),
                t.Oqu(t.lcZ(8, 14, "pair_explorer.sells")),
                t.xp6(2),
                t.hij(": ", t.xi3(10, 16, e.amountRef.sells, "1.2-6"), " "),
                t.xp6(3),
                t.Tol(o.getProfitClass(e.amountRef.buys, e.amountRef.sells)),
                t.xp6(1),
                t.AsE(" ", t.lcZ(14, 19, "pair_explorer.profit"), " : ", t.xi3(15, 21, e.amountRef.sells - e.amountRef.buys, "1.2-6"), " "),
                t.xp6(3),
                t.Q6J("ngIf", e.amountRef.hasIcon)
            }
        }
        function $p(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable-column", 319),
            t.ALo(1, "translate"),
            t.YNc(2, Gp, 17, 24, "ng-template", 320),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(1, 6, "pair_explorer.col_6") + " " + e.tokenRef)("sortable", !1)("cellClass", e.getRowCellClass)
            }
        }
        function jp(n, i) {
            1 & n && t._UZ(0, "fa-icon", 329)
        }
        function Kp(n, i) {
            if (1 & n && (t.TgZ(0, "span", 326),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA(),
            t._uU(3),
            t.ALo(4, "number"),
            t._UZ(5, "br"),
            t.TgZ(6, "span", 327),
            t._uU(7),
            t.ALo(8, "translate"),
            t.qZA(),
            t._uU(9),
            t.ALo(10, "number"),
            t._UZ(11, "br"),
            t.TgZ(12, "span"),
            t._uU(13),
            t.ALo(14, "translate"),
            t.ALo(15, "number"),
            t.qZA(),
            t.YNc(16, jp, 1, 0, "fa-icon", 328)),
            2 & n) {
                const e = i.row
                  , o = t.oxw(3);
                t.xp6(1),
                t.Oqu(t.lcZ(2, 9, "pair_explorer.buys")),
                t.xp6(2),
                t.hij(": ", t.xi3(4, 11, e.amountETH.buys, "1.2-6"), " "),
                t.xp6(4),
                t.Oqu(t.lcZ(8, 14, "pair_explorer.sells")),
                t.xp6(2),
                t.hij(": ", t.xi3(10, 16, e.amountETH.sells, "1.2-6"), " "),
                t.xp6(3),
                t.Tol(o.getProfitClass(e.amountETH.buys, e.amountETH.sells)),
                t.xp6(1),
                t.AsE(" ", t.lcZ(14, 19, "pair_explorer.profit"), " : ", t.xi3(15, 21, e.amountETH.sells - e.amountETH.buys, "1.2-6"), " "),
                t.xp6(3),
                t.Q6J("ngIf", e.amountETH.hasIcon)
            }
        }
        function Xp(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t.ALo(1, "scannerTokenUrl"),
            t._uU(2),
            t.ALo(3, "slice"),
            t.ALo(4, "slice"),
            t.qZA()),
            2 & n) {
                const e = t.oxw().row
                  , o = t.oxw(3);
                t.Q6J("href", t.xi3(1, 3, o.chain, o.tokenData.id + "?a=" + e.maker), t.LSH),
                t.xp6(2),
                t.AsE(" ", t.Dn7(3, 6, e.maker, 0, 8), "...", t.Dn7(4, 10, e.maker, 38, 42), " ")
            }
        }
        const Kt = function() {
            return ["far", "address-card"]
        };
        function td(n, i) {
            if (1 & n && (t.TgZ(0, "a", 333),
            t._UZ(1, "fa-icon", 275),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.Gre("text-", e.walletSaved.color, ""),
                t.cQ8("appRouterLink", "/", o.chain, "/", o.ChainPage.WalletInfo, "/", e.maker, ""),
                t.xp6(1),
                t.Gre("row-icon me-2 text-", e.walletSaved.color, ""),
                t.Q6J("icon", t.DdM(10, Kt))
            }
        }
        function ed(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, td, 2, 11, "a", 330),
                t.TgZ(2, "a", 255),
                t.ALo(3, "scannerTokenUrl"),
                t._UZ(4, "img", 331),
                t.ALo(5, "scannerLogoUrl"),
                t.qZA(),
                t.TgZ(6, "a", 332),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2).row;
                    return t.oxw(3).viewWallet(a.maker),
                    t.KtG(!1)
                }),
                t._uU(7),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2).row
                  , o = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", o.isPageAvailableInChain(o.ChainPage.WalletInfo, o.chain)),
                t.xp6(1),
                t.Q6J("href", t.xi3(3, 7, o.chain, o.tokenData.id + "?a=" + e.maker), t.LSH),
                t.xp6(2),
                t.Q6J("src", t.lcZ(5, 10, o.chain), t.LSH),
                t.xp6(2),
                t.Gre("text-", e.walletSaved.color, ""),
                t.xp6(1),
                t.hij(" ", e.walletSaved.name, " ")
            }
        }
        function nd(n, i) {
            if (1 & n && (t.TgZ(0, "a", 333),
            t._UZ(1, "fa-icon", 335),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.cQ8("appRouterLink", "/", o.chain, "/", o.ChainPage.WalletInfo, "/", e.maker, ""),
                t.xp6(1),
                t.Q6J("icon", t.DdM(4, Kt))
            }
        }
        function od(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t.ALo(1, "scannerTokenUrl"),
            t._UZ(2, "img", 331),
            t.ALo(3, "scannerLogoUrl"),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3).row
                  , o = t.oxw(3);
                t.Q6J("href", t.xi3(1, 2, o.chain, o.tokenData.id + "?a=" + e.maker), t.LSH),
                t.xp6(2),
                t.Q6J("src", t.lcZ(3, 5, o.chain), t.LSH)
            }
        }
        function ad(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.ynx(0),
                t.YNc(1, nd, 2, 5, "a", 334),
                t.YNc(2, od, 4, 7, "a", 241),
                t.TgZ(3, "a", 332),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const a = t.oxw(2).row;
                    return t.oxw(3).viewWallet(a.maker),
                    t.KtG(!1)
                }),
                t._uU(4),
                t.ALo(5, "slice"),
                t.ALo(6, "slice"),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const e = t.oxw(2).row
                  , o = t.oxw(3);
                t.xp6(1),
                t.Q6J("ngIf", o.walletToSee === e.maker && o.isPageAvailableInChain(o.ChainPage.WalletInfo, o.chain)),
                t.xp6(1),
                t.Q6J("ngIf", o.walletToSee === e.maker),
                t.xp6(2),
                t.AsE(" ", t.Dn7(5, 4, e.maker, 0, 8), " ...", t.Dn7(6, 8, e.maker, 38, 42), " ")
            }
        }
        function id(n, i) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, ed, 8, 12, "ng-container", 6),
            t.YNc(2, ad, 7, 12, "ng-container", 6),
            t.BQk()),
            2 & n) {
                const e = t.oxw().row;
                t.xp6(1),
                t.Q6J("ngIf", e.walletSaved),
                t.xp6(1),
                t.Q6J("ngIf", !e.walletSaved)
            }
        }
        function rd(n, i) {
            if (1 & n && (t.YNc(0, Xp, 5, 14, "a", 241),
            t.YNc(1, id, 3, 2, "ng-container", 6)),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("ngIf", !e.userAccess),
                t.xp6(1),
                t.Q6J("ngIf", e.userAccess)
            }
        }
        function cd(n, i) {
            1 & n && (t._UZ(0, "fa-icon", 341),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.team_wallet"))
        }
        function ld(n, i) {
            1 & n && (t._UZ(0, "fa-icon", 342),
            t.ALo(1, "translate")),
            2 & n && t.s9C("ngbTooltip", t.lcZ(1, 1, "pair_explorer.bot_smart_contract"))
        }
        function sd(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "a", 337),
                t.NdJ("click", function(a) {
                    const l = t.CHM(e).row;
                    return t.oxw(4).toggleMarkedWallet(a, l.maker),
                    t.KtG(!1)
                }),
                t.ALo(1, "translate"),
                t._UZ(2, "fa-icon", 338),
                t.qZA(),
                t.YNc(3, cd, 2, 3, "fa-icon", 339),
                t.YNc(4, ld, 2, 3, "fa-icon", 340)
            }
            if (2 & n) {
                const e = i.row
                  , o = t.oxw(4);
                t.s9C("ngbTooltip", t.lcZ(1, 3, "pair_explorer.remove_filter")),
                t.xp6(3),
                t.Q6J("ngIf", o.teamWallet === e.maker),
                t.xp6(1),
                t.Q6J("ngIf", e.isBot)
            }
        }
        function _d(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable-column", 336),
            t.ALo(1, "translate"),
            t.YNc(2, sd, 5, 5, "ng-template", 320),
            t.qZA()),
            2 & n) {
                const e = t.oxw(3);
                t.Q6J("resizeable", !1)("width", 100)("minWidth", 100)("maxWidth", 150)("name", t.lcZ(1, 7, "pair_explorer.col_9"))("sortable", !1)("cellClass", e.getRowCellClass)
            }
        }
        function gd(n, i) {
            if (1 & n && (t.TgZ(0, "ngx-datatable", 317, 318)(2, "ngx-datatable-column", 319),
            t.ALo(3, "translate"),
            t.YNc(4, Rp, 7, 9, "ng-template", 320),
            t.qZA(),
            t.TgZ(5, "ngx-datatable-column", 321),
            t.ALo(6, "translate"),
            t.YNc(7, Yp, 8, 8, "ng-template", 320),
            t.qZA(),
            t.TgZ(8, "ngx-datatable-column", 319),
            t.ALo(9, "translate"),
            t.YNc(10, Wp, 18, 21, "ng-template", 320),
            t.qZA(),
            t.TgZ(11, "ngx-datatable-column", 319),
            t.ALo(12, "translate"),
            t.YNc(13, Bp, 18, 21, "ng-template", 320),
            t.qZA(),
            t.TgZ(14, "ngx-datatable-column", 322),
            t.ALo(15, "translate"),
            t.YNc(16, zp, 11, 12, "ng-template", 320),
            t.qZA(),
            t.YNc(17, $p, 3, 8, "ngx-datatable-column", 323),
            t.TgZ(18, "ngx-datatable-column", 319),
            t.ALo(19, "translate"),
            t.YNc(20, Kp, 17, 24, "ng-template", 320),
            t.qZA(),
            t.TgZ(21, "ngx-datatable-column", 319),
            t.ALo(22, "translate"),
            t.YNc(23, rd, 2, 2, "ng-template", 320),
            t.qZA(),
            t.YNc(24, _d, 3, 9, "ngx-datatable-column", 324),
            t.qZA()),
            2 & n) {
                const e = t.oxw().dataTransactions
                  , o = t.oxw();
                t.Q6J("scrollbarV", !1)("scrollbarH", !0)("columnMode", o.ColumnMode.force)("count", e.length)("rows", e)("rowHeight", "auto"),
                t.xp6(2),
                t.Q6J("resizeable", !1)("width", 80)("minWidth", 100)("name", t.lcZ(3, 49, "pair_explorer.col_1"))("sortable", !1)("cellClass", o.getRowCellClass),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 70)("minWidth", 90)("maxWidth", 90)("name", t.lcZ(6, 51, "pair_explorer.col_2"))("sortable", !1),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(9, 53, "pair_explorer.col_3") + " USD")("sortable", !1)("cellClass", o.getRowCellClass),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 100)("minWidth", 100)("name", t.lcZ(12, 55, "pair_explorer.col_4") + " " + o.refTokenSymbol)("sortable", !1)("cellClass", o.getRowCellClass),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(15, 57, "pair_explorer.col_5") + " " + o.tokenData.symbol)("sortable", !1),
                t.xp6(3),
                t.Q6J("ngIf", !!o.tokenRef),
                t.xp6(1),
                t.Q6J("resizeable", !1)("width", 120)("minWidth", 120)("name", t.lcZ(19, 59, "pair_explorer.col_6") + " " + o.refTokenSymbol)("sortable", !1)("cellClass", o.getRowCellClass),
                t.xp6(3),
                t.Q6J("resizeable", !1)("width", 110)("minWidth", 110)("name", t.lcZ(22, 61, "pair_explorer.col_8"))("sortable", !1)("cellClass", o.getRowCellClass),
                t.xp6(3),
                t.Q6J("ngIf", "my-swaps" !== o.tabSelected)
            }
        }
        function pd(n, i) {
            if (1 & n && t.YNc(0, gd, 25, 63, "ngx-datatable", 316),
            2 & n) {
                const e = i.dataTransactions
                  , o = t.oxw();
                t.Q6J("ngIf", !o.mySwapsLoading && !o.loader && !!e.length && (o.filteredTxByWallet || "my-swaps" === o.tabSelected))
            }
        }
        const Xt = function(n) {
            return {
                "ms-2": n
            }
        };
        function dd(n, i) {
            if (1 & n && (t.TgZ(0, "a", 343),
            t._UZ(1, "fa-icon", 344),
            t.qZA()),
            2 & n) {
                const o = i.icon
                  , a = i.tooltip
                  , r = i.marginLeft;
                t.Q6J("href", i.link, t.LSH)("ngClass", t.VKq(5, Xt, r)),
                t.xp6(1),
                t.Q6J("icon", o)("fixedWidth", !0)("ngbTooltip", a)
            }
        }
        const hd = function(n) {
            return {
                blockExplorer: n
            }
        };
        function md(n, i) {
            if (1 & n && (t.TgZ(0, "div", 345),
            t._UZ(1, "fa-icon", 346),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & n) {
                const e = i.icon
                  , o = i.marginLeft
                  , a = t.oxw();
                t.Q6J("ngClass", t.VKq(7, Xt, o)),
                t.xp6(1),
                t.s9C("ngbTooltip", t.xi3(2, 4, "pair_explorer.no_link", t.VKq(9, hd, a.getScannerName()))),
                t.Q6J("icon", e)("fixedWidth", !0)
            }
        }
        function ud(n, i) {
            if (1 & n && t._UZ(0, "app-iframe-embedded", 347),
            2 & n) {
                const e = t.oxw();
                t.Q6J("url", e.alternativeExchange.url)("reload$", e.reloadIframe$.asObservable())
            }
        }
        function fd(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "app-panel-component", 348),
                t.NdJ("panelClosed", function() {
                    t.CHM(e);
                    const a = t.oxw();
                    return t.KtG(a.closeSettingsPanel())
                }),
                t.ALo(1, "translate"),
                t.ALo(2, "translate"),
                t._UZ(3, "app-settings-panel"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.s9C("panelTitle", t.lcZ(1, 5, "config.settings")),
                t.s9C("panelSubtitle", t.lcZ(2, 7, "config.parameters")),
                t.Q6J("backdrop", !0)("closeButton", "desktop" === e.mediaDevice)("relativeButton", e.isTabletOrMobile)
            }
        }
        const kt = function() {
            return ["far", "external-link"]
        };
        function Cd(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t._uU(1, "StaySAFU "),
            t._UZ(2, "fa-icon", 275),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.MGl("href", "https://tools.staysafu.org/scan/free?a=", e.tokenData.id, "", t.LSH),
                t.xp6(2),
                t.Q6J("icon", t.DdM(2, kt))
            }
        }
        function bd(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t._uU(1, "Quick Intel "),
            t._UZ(2, "fa-icon", 275),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.hYB("href", "https://app.quickintel.io/scanner?type=token&chain=", e.chainIdQuickIntel(), "&contractAddress=", e.tokenData.id, "", t.LSH),
                t.xp6(2),
                t.Q6J("icon", t.DdM(3, kt))
            }
        }
        function Pd(n, i) {
            if (1 & n && (t.TgZ(0, "a", 255),
            t._uU(1, "TokenSniffer "),
            t._UZ(2, "fa-icon", 275),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.hYB("href", "https://tokensniffer.com/token/", e.chainIdTokenSniffer(), "/", e.tokenData.id, "", t.LSH),
                t.xp6(2),
                t.Q6J("icon", t.DdM(3, kt))
            }
        }
        const xd = function(n) {
            return {
                "not-contract": n
            }
        };
        function Md(n, i) {
            if (1 & n && (t.TgZ(0, "div", 349)(1, "span"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA(),
            t.YNc(4, Cd, 3, 3, "a", 241),
            t.YNc(5, bd, 3, 4, "a", 241),
            t.YNc(6, Pd, 3, 4, "a", 241),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngClass", t.VKq(7, xd, !e.isContractAuditSupportedInCurrentChain)),
                t.xp6(2),
                t.hij("", t.lcZ(3, 5, "pair_explorer.scan_on"), ":"),
                t.xp6(2),
                t.Q6J("ngIf", e.staySafuAudit()),
                t.xp6(1),
                t.Q6J("ngIf", e.chainIdQuickIntel()),
                t.xp6(1),
                t.Q6J("ngIf", e.chainIdTokenSniffer())
            }
        }
        function Od(n, i) {
            if (1 & n && t._UZ(0, "app-iframe-embedded", 347),
            2 & n) {
                const e = t.oxw();
                t.Q6J("url", e.getTradeUrl(e.tokenData.id, "buy" === e.scamAdvice.typeAdvice ? e.TransactionType.BUY : e.TransactionType.SELL))("reload$", e.reloadIframe$.asObservable())
            }
        }
        function kd(n, i) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "div", 351)(1, "app-coinzilla-banner", 352),
                t.NdJ("coinzillaBannerClosed", function() {
                    t.CHM(e);
                    const a = t.oxw(2);
                    return t.KtG(a.closeCoinzillaBanner())
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.Q6J("coinzillaAd", e.coinzillaAd)
            }
        }
        function yd(n, i) {
            if (1 & n && t.YNc(0, kd, 2, 1, "div", 350),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngIf", e.coinzillaAd && !e.userAccess && !!e.showCoinzillaBanner)
            }
        }
        const yt = "aggregatorSavedState"
          , ot = "layoutMode"
          , Sd = ["price-alerts", "history", "positions"]
          , ee = "aggregator"
          , ne = "sell-color"
          , oe = "buy-color";
        var T = (()=>{
            return (n = T || (T = {})).swap = "swap",
            n.poolInfo = "poolInfo",
            T;
            var n
        }
        )();
        let ie = (()=>{
            class n extends s.K9 {
                get shouldHidePriceAlerts() {
                    return !this.exchange || !s.lM.convertEnumToArray(c.qop).includes(this.chain)
                }
                get isChartLoadedAndRendered() {
                    return !!this._pairTV?.widgetInstance && !!document.querySelector(`#${this._pairTV?.widgetInstance._id}`)
                }
                onResize() {
                    this._recalculate(),
                    this.screenWidthGreaterThan1400 = window.innerWidth > 1400,
                    this.screenWidthBetween1400And1575 = window.innerWidth < 1575 && window.innerWidth > 1400,
                    window.innerWidth > 1023 && this.isSearchMobile && (this.toggleSearchMobile(!1),
                    this.toggleSearchToken = !1)
                }
                get aggregatorNetwork() {
                    return this.chain === c.qop.Ethereum ? It.pt.ETH : It.pt[this.chain.toUpperCase()]
                }
                get isSwapSelected() {
                    return this._isSwapSelected
                }
                set isSwapSelected(e) {
                    this._isSwapSelected = e,
                    !this.isPoolSelected && this._isSwapSelected && (this.defaultPoolSwapTab = T.swap),
                    this._cdRef.detectChanges()
                }
                get isPoolSelected() {
                    return this._isPoolSelected
                }
                set isPoolSelected(e) {
                    this._isPoolSelected = e,
                    this._isPoolSelected && (this.defaultPoolSwapTab = T.poolInfo),
                    this._cdRef.detectChanges()
                }
                set showAggregatorBuy(e) {
                    this.isAggregatorSupportedInCurrentChain = this._chainData.aggregatorSupported && !this.isIOS,
                    this._showAggregatorBuy = !(!this.isAggregatorSupportedInCurrentChain || this.hideAggregatorWithSlug) && e,
                    this._cdRef.detectChanges()
                }
                get showAggregatorBuy() {
                    return this._showAggregatorBuy
                }
                set showAggregatorSell(e) {
                    this.isAggregatorSupportedInCurrentChain = this._chainData.aggregatorSupported && !this.isIOS,
                    this._showAggregatorSell = !(!this.isAggregatorSupportedInCurrentChain || this.hideAggregatorWithSlug) && e,
                    this._cdRef.detectChanges()
                }
                get showAggregatorSell() {
                    return this._showAggregatorSell
                }
                constructor(e, o, a, r, l, _, d, k, H, N, v, $, W, j, Tt, Ld, Id, Dd, Ed, Jd, Ud, Nd, qd, Qd, Fd, Hd, Rd, Yd, Wd, Bd, zd, Vd, Gd, $d, jd, Kd, Xd, th, eh, nh, oh, ah, ih, rh) {
                    super(),
                    this.modalService = e,
                    this._commonService = o,
                    this._seoService = a,
                    this._staticGenerationService = r,
                    this._analyticsService = l,
                    this.config = _,
                    this._hotPairsService = d,
                    this._chartService = k,
                    this._domSanitizer = H,
                    this._exchangeService = N,
                    this._favoritePairsService = v,
                    this._notificationsService = $,
                    this._pairService = W,
                    this._candlesDataService = j,
                    this._priceAlertsService = Tt,
                    this._priceTrackService = Ld,
                    this._router = Id,
                    this._scriptsLoader = Dd,
                    this._settingsService = Ed,
                    this._tokenService = Jd,
                    this._positionsService = Ud,
                    this._exchangeApiService = Nd,
                    this._voteService = qd,
                    this._webSocketService = Qd,
                    this._web3UtilsService = Fd,
                    this._breakpointObserver = Hd,
                    this._footerContentService = Rd,
                    this._headerContentService = Yd,
                    this._sponsorService = Wd,
                    this._authenticationService = Bd,
                    this._environment = zd,
                    this._actRoute = Vd,
                    this._injector = Gd,
                    this._toastr = $d,
                    this._cdRef = jd,
                    this._pairsSearchService = Kd,
                    this._translate = Xd,
                    this._walletsService = th,
                    this._routingService = eh,
                    this._sharedApiService = nh,
                    this._location = oh,
                    this._pairListService = ah,
                    this._appStatusService = ih,
                    this._coinzillaService = rh,
                    this.Chain = c.qop,
                    this.ChainPage = A.$,
                    this.TransactionType = c.iU1,
                    this.VoteType = w,
                    this.context = this._environment.app_scope,
                    this.ChainBubbleMaps = c.LR_,
                    this.availableChains = [],
                    this._aggregatorComponentClass = null,
                    this._aggregatorInstances = {},
                    this.oldDextContract = "0x26ce25148832c04f3d7f26f32478a9fe55197166",
                    this.newDextPair = "0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d",
                    this.notificationsStatus = {
                        enabled: !1,
                        granted: !1,
                        supported: !1
                    },
                    this.loader = !1,
                    this.pairInfoLoader = !1,
                    this.aggregatorLoader = !0,
                    this.firstLoadLogo = !0,
                    this._loader$ = new E.x,
                    this.screenWidth = window.innerWidth,
                    this.isLayoutFlipped = !1,
                    this.isColumnFirst = !1,
                    this.isFullScreen = !1,
                    this.showFavoritesColumn = !0,
                    this.showPoolInfo = !0,
                    this.showSwapButton = !1,
                    this.showSwapTab = !0,
                    this.WarningType = Z,
                    this.ColumnMode = x.hq,
                    this.chartOptionsDextScore = {
                        series: [0, 0, 0, 0, 0],
                        categories: ["Information", "Transactions", "Holders", "Creation", "Pool"],
                        colors: ["#c4183c", "#c4183c", "#c4183c", "#c4183c", "#c4183c"],
                        icons: ["info-circle", "exchange-alt", "user-friends", "clock", "coins"]
                    },
                    this._isPairLoaded$ = new mt.X(!1),
                    this.myAlertsForm = [],
                    this.isDarkTheme = !0,
                    this.myPositions = {},
                    this.myPositionsForm = [],
                    this.tabSelected = "history",
                    this.Role = f.uU,
                    this.isAdmin = !1,
                    this.isSuperAdmin = !1,
                    this.showUserMenu = !1,
                    this.role = "",
                    this.userAccess = !1,
                    this.isUserConnected = !1,
                    this.dextAmount = 0,
                    this._timePetitionsTx = 6e3,
                    this._allPairData = null,
                    this.initCharge = !0,
                    this.tokenPoolInfo = {
                        value: "",
                        tokenSymbol: "",
                        vsSymbol: "",
                        totalSupply: 0,
                        fee: 0
                    },
                    this._pairSelected$ = new mt.X(null),
                    this._isPoolLoaded = !1,
                    this._title = "Pair Explorer",
                    this.isWsConnected = !1,
                    this.exchangeVersion = null,
                    this.mediaDevice = "",
                    this.dextScoreReady = !1,
                    this._calculateDextScore$ = new E.x,
                    this.dextScore = {
                        value: null,
                        color: null
                    },
                    this._fetchSwapsRetries = 0,
                    this._initialCachedSwapsTimeStamp = null,
                    this._nextSwapTimestampToFetch = null,
                    this.isSwapsHistoryFullyLoaded = !1,
                    this.dataTransactions = [],
                    this.displayedSwapsCount = 0,
                    this.totalSwaps = 0,
                    this.newTransactions$ = new E.x,
                    this.abortDataTransactions$ = new E.x,
                    this.isSynced = !1,
                    this.dataTransactionsSelected = [],
                    this.countSwapsLast24h = null,
                    this.dataTransactionsSummary = [],
                    this._transactionsBuffer = [],
                    this.isHotPair = null,
                    this.dataWallets = {},
                    this.filteredTxByWallet = !1,
                    this.botFiltered = !1,
                    this.userId = "",
                    this.coingeckoLink = null,
                    this.showMetamaskIcon = !!window.ethereum,
                    this.positions = Array.from({
                        length: 15
                    }).fill(0).map((ch,lh)=>lh + 1),
                    this.isUpdatingInfo = !1,
                    this.isUpdatingAudit = !1,
                    this.hiddenFavorites = !1,
                    this.isCandleNormalizationEnabled = null,
                    this.isSearchMobile = !1,
                    this.mobileCollapsed = !0,
                    this._footerTabs = [{
                        icon: "chart-column",
                        titleTranslate: "pair_explorer.market",
                        id: "market"
                    }, {
                        icon: "star",
                        titleTranslate: "pair_explorer.favorite_pairs",
                        id: "favorites"
                    }],
                    this.footerNavigationTab = "",
                    this.screenWidthGreaterThan1400 = window.innerWidth > 1400,
                    this.screenWidthBetween1400And1575 = window.innerWidth < 1575 && window.innerWidth > 1400,
                    this.pairDataAvailable = !1,
                    this.tokenData = {
                        holders: 0,
                        txCount: 0,
                        decimals: 0,
                        pooledToken: 0,
                        pooledETH: 0,
                        liquidity: void 0,
                        priceUSD: 0,
                        priceETH: 0,
                        created: 0,
                        type: "buy-color",
                        isStableNativePair: !1
                    },
                    this.tokenVotes = {
                        vote: w.NO_VOTE,
                        upvotes: {
                            total: 2,
                            percent: 50
                        },
                        downvotes: {
                            total: 2,
                            percent: 50
                        },
                        total: 0
                    },
                    this.tokenAudit = null,
                    this.socialNotDisabled = [],
                    this.showSocialLinks = !1,
                    this.socialActiveHTML = [],
                    this.fullScreenPanel = !1,
                    this.closePanelEnabled = !1,
                    this.noTransactions = !1,
                    this.showAggregatorNotTransactions = !1,
                    this.noLiquidity = !1,
                    this.liquidityTimeout = null,
                    this.teamWallet = null,
                    this._exitComponent = !1,
                    this._storageWallets = null,
                    this.knownWallets = [],
                    this.knownWalletsFiltered = [],
                    this.walletToSee = null,
                    this._optimalDecimalsUsd = s.be,
                    this.canShowTeamSellAlert = !0,
                    this.canShowCommunityVotedScamAlert = !0,
                    this.teamEthSold = 0,
                    this.alertsStatus = {},
                    this.disclaimer = null,
                    this.walletTransactions = [],
                    this.walletTransactionsLoaded = !1,
                    this.walletTransactionsSummary = [],
                    this.mySwapsLoading = !1,
                    this.featuredSponsors = [],
                    this._teamSellsBeforeScamTime = 0,
                    this._teamSellsAfterScamTime = 0,
                    this._teamBuysBeforeScamTime = 0,
                    this._teamBuysAfterScamTime = 0,
                    this._teamSellsScamTime = 0,
                    this.showIcons = !1,
                    this.filterExchange = null,
                    this.volumeChecked = !1,
                    this.pairHeaderTopReached = !1,
                    this.pairHeaderBottomReached = !1,
                    this.favsTopReached = !1,
                    this.favsBottomReached = !1,
                    this.shouldStickHeader = !1,
                    this.shouldStickFavs = !1,
                    this.bottomReached = !1,
                    this.showMenu = !1,
                    this.showLayoutOptions = !1,
                    this._isSwapSelected = !0,
                    this._isPoolSelected = !1,
                    this.defaultPoolSwapTab = T.poolInfo,
                    this.isDextSelected = !1,
                    this.layoutOptions = {
                        layoutType: S.default,
                        showFavorites: !0,
                        showPoolInfo: !0,
                        showSwapButton: !1
                    },
                    this.noAggregatorActive = !1,
                    this.scamAdvice = {
                        typeAdvice: "buy",
                        show: !1
                    },
                    this.aggregatorScamAdvice = {
                        typeAdvice: "buy",
                        show: !1
                    },
                    this._aggregatorScamAlertAlreadyAccepted = !1,
                    this._aggregatorScamAlertToken = "",
                    this.toggleSearchToken = !1,
                    this.autoSelectFirstPair = !1,
                    this.latestCandles = new mt.X([]),
                    this._chartBarsSubscriptions = new Map,
                    this.isTvFullScreen = !1,
                    this._pairTV = null,
                    this._showAggregatorBuy = !1,
                    this.toggleSettingsPanel = !1,
                    this._showAggregatorSell = !1,
                    this.isAggregatorSupportedInCurrentChain = !1,
                    this.isLiquidityProviderSupported = !1,
                    this.isDxSaleSupported = !1,
                    this.isMudraSupported = !1,
                    this.isBubbleMapsSupported = !1,
                    this.isMySwapsAvailable = !1,
                    this.aggregatorEnabledViaUrl = !1,
                    this.tabEnabledViaUrl = "",
                    this.hasExchangePoolRatios = !1,
                    this.isContractAuditSupportedInCurrentChain = !1,
                    this._isOnlyBuySwaps = !1,
                    this.showPanelExchange = !1,
                    this.showSharePanel = !1,
                    this.showSocialPanel = !1,
                    this.showUpdateLinksPanel = !1,
                    this.showAddEditPositionsPanel = !1,
                    this.reloadIframe$ = new E.x,
                    this.positionToSave = {
                        pair: "",
                        priceEth: 0,
                        priceUsd: 0,
                        amount: 0
                    },
                    this.positionIndex = -1,
                    this.positionNeedSwap = !1,
                    this.tableTabsOptions = [],
                    this.poolSwapTabsOptions = [],
                    this.liquidityLockList = [],
                    this.isIOS = !1,
                    this.showTradeExternalModal = !1,
                    this._isHotReloaded = !1,
                    this._lastAnalyticsTrackedPair = "",
                    this._currentList = s._Z.getString(c.R_O) ?? "main-list",
                    this._currentListId = "",
                    this._unsubscribePairData$ = new E.x,
                    this.coinzillaAd = void 0,
                    this.showCoinzillaBanner = !0,
                    this.publicAddress = null,
                    this._fetchAllPairDataUnsubscribe$ = new E.x,
                    this._unsubscribeMenuToggle$ = new E.x;
                    const re = !!this._authenticationService.deviceId;
                    this.isIOS = re && this._authenticationService.devicePlatform === f.t4.Ios;
                    const ce = re && this._authenticationService.devicePlatform === f.t4.Android
                      , le = this._appStatusService.isAppOnlineAndVisible$().pipe((0,
                    s.sL)(this));
                    (this.isIOS || ce) && le.subscribe(()=>{
                        this._restoreRealTimeData()
                    }
                    ),
                    !this.isIOS && !ce && this._webSocketService.isReconnectedInForeground$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this.pairSelected && this._restoreRealTimeData()
                    }
                    ),
                    le.pipe((0,
                    R.g)(750), (0,
                    se.o)(()=>!this.isChartLoadedAndRendered)).subscribe(ch=>{
                        !this.isChartLoadedAndRendered && !this.noTransactions && this._pairTV && (this._pairTV.componentInstance.chartLoader = !0,
                        this._pairTV.componentInstance.destroyChartElements(),
                        this._pairTV.componentInstance.drawTv())
                    }
                    ),
                    this.isIOS || (this._footerTabs = [...this._footerTabs, {
                        icon: "exchange-alt",
                        titleTranslate: "pair_explorer.swap",
                        id: "swap"
                    }]),
                    this.appConfig = JSON.parse(s._Z.getString("configApp")) || {},
                    this.config.placement = "left",
                    this.config.container = "body",
                    this._seoService.setTitle(this._title),
                    this.chain = this._actRoute.snapshot.data.currentChain,
                    this.chain === c.qop.Solana && (this._web3SolanaUtilsService = this._injector.get(c.zhn)),
                    this.refTokenSymbol = c.CXF.getRefTokenSymbol(this.chain),
                    this._chainData = c.CXF.getChainData(this.chain),
                    this._chainScannerData = this._chainData.scanner,
                    this._fillAvailableChainsList(),
                    this.toggleSearchToken = this._actRoute.snapshot.data.currentNavigation?.extras?.state?.toggleSearchToken ?? !1,
                    this._routingService.restorePreviousScrollPosition(this._actRoute.snapshot.data.currentNatigation),
                    this.isContractAuditSupportedInCurrentChain = this._chainData.contractAuditSupported,
                    this.isMySwapsAvailable = this._chainData.bitquerySupported,
                    this.isLiquidityProviderSupported = this._chainData.liquidityProviderSupported,
                    this.isDxSaleSupported = this._isLockSupportedInChain("dxsale", this.chain),
                    this.isMudraSupported = this._isLockSupportedInChain("mudra", this.chain),
                    this.isBubbleMapsSupported = this._isBubblemapsSupportedInChain(this.chain)
                }
                ngOnInit() {
                    if (window.innerWidth > 1023) {
                        this.appConfig.layoutOptions ? this.layoutOptions = this.appConfig.layoutOptions : (s._Z.merge("configApp", {
                            layoutOptions: this.layoutOptions
                        }),
                        this.appConfig.layoutOptions = this.layoutOptions);
                        const e = s._Z.getString(ot);
                        this.isLayoutFlipped = e === S.flipped || e === S.columns,
                        this.isColumnFirst = e === S.columns,
                        this.isFullScreen = e === S.fullScreen,
                        this.showFavoritesColumn = null == this.appConfig.layoutOptions.showFavorites || this.layoutOptions.showFavorites,
                        this.showPoolInfo = null == this.appConfig.layoutOptions.showPoolInfo || this.layoutOptions.showPoolInfo,
                        this.showSwapButton = null != this.appConfig.layoutOptions.showSwapButton && this.layoutOptions.showSwapButton,
                        this.showSwapTab = null == this.appConfig.layoutOptions.showSwapButton || !this.layoutOptions.showSwapButton,
                        this._updatePoolSwapTab(T.swap, {
                            isHidden: this.showSwapButton
                        }),
                        this._updatePoolSwapTab(T.poolInfo, {
                            isHidden: this.showPoolInfo
                        }),
                        null == this.appConfig.layoutOptions.showFavorites && (this.layoutOptions.showFavorites = !0,
                        s._Z.merge("configApp", {
                            layoutOptions: this.layoutOptions
                        })),
                        null == this.appConfig.layoutOptions.showPoolInfo && (this.layoutOptions.showPoolInfo = !0,
                        s._Z.merge("configApp", {
                            layoutOptions: this.layoutOptions
                        })),
                        null == this.appConfig.layoutOptions.showSwapButton && (this.layoutOptions.showSwapButton = !1,
                        s._Z.merge("configApp", {
                            layoutOptions: this.layoutOptions
                        })),
                        this.appConfig.selectedTab && (this.isSwapSelected = this.appConfig.selectedTab === T.swap,
                        this.isPoolSelected = this.appConfig.selectedTab === T.poolInfo),
                        this.appConfig.hiddenFavorites && (this.hiddenFavorites = !0)
                    }
                    this._setUserData(),
                    this._authenticationService.currentUser$.pipe((0,
                    s.sL)(this)).subscribe(()=>{
                        this._setUserData(),
                        this._loadCoinzillaBanner()
                    }
                    ),
                    this._actRoute.fragment.pipe((0,
                    s.sL)(this), (0,
                    I.h)(e=>[...Sd, ee].includes(e)), (0,
                    it.w)(e=>e === ee ? (0,
                    Q.of)("immediately").pipe((0,
                    M.b)(()=>{
                        this.aggregatorEnabledViaUrl = !0,
                        this.showSwapTab && (this.isSwapSelected = !0,
                        this.changeVisibilityPoolSwap("swap")),
                        this.showAggregatorBuy = !0
                    }
                    )) : (0,
                    Q.of)("immediately").pipe((0,
                    M.b)(()=>{
                        this.tabEnabledViaUrl = e
                    }
                    )))).subscribe(),
                    this._sponsorService.sponsorList$.pipe((0,
                    J.q)(1), (0,
                    M.b)(e=>{
                        this.featuredSponsors = e?.data?.filter(o=>8 === o.position || 9 === o.position).filter(o=>o.mainnet.includes(this.chain)).map(o=>({
                            ...o,
                            active: o.active = !0
                        }))
                    }
                    )).subscribe(),
                    this._webSocketService.isConnected$().pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        this.isWsConnected && !e && !this.loader && this.newTransactions$.next(),
                        this.isWsConnected = e
                    }
                    )).subscribe(),
                    this._restartInfo(),
                    this._exchangeService.exchange$.pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        this.exchange = e,
                        this._exchangeApiAdapter = this._exchangeApiService.getAdapter(this.chain),
                        this.setAggregatorData()
                    }
                    )).subscribe(),
                    this._routeParamsSub = this._actRoute.params.subscribe(e=>{
                        if (c.iyB.test(e.pair))
                            switch (this.chain) {
                            case c.qop.Solana:
                                this._loadSolanaChainPair(e);
                                break;
                            case c.qop.Aptos:
                                this._loadNonEvmChainPair(e, c.JEM);
                                break;
                            case c.qop.Multiversx:
                                this._loadNonEvmChainPair(e, c.jav);
                                break;
                            default:
                                this._loadEvmChainPair(e)
                            }
                        else
                            this._routingService.navigate(`/${this.chain}/${A.$.PairExplorer}/${this._chainData.defaultPair}`)
                    }
                    ),
                    this.loader = !0,
                    this._loader$.pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        const o = document.querySelector(".dext-loading")
                          , a = document.querySelector(".dext-loading-long");
                        o && a && !e && this.firstLoadLogo && (o.style.animationDuration = "950ms",
                        setTimeout(()=>{
                            o.style.display = "none",
                            a.style.display = "block",
                            setTimeout(()=>{
                                a.style.display = "none"
                            }
                            , 100)
                        }
                        , 100)),
                        this.firstLoadLogo = !1,
                        this._loader$.complete()
                    }
                    )).subscribe(),
                    this._breakpointObserver.observe([P.IB, P.K5, P.mT]).pipe((0,
                    s.sL)(this), (0,
                    M.b)(e=>{
                        "" !== this.mediaDevice && this._pairTV && (this._pairTV.componentInstance.chartLoader = !0,
                        this._pairTV.componentInstance.destroyChartElements(),
                        this._pairTV.componentInstance.drawTv()),
                        this.mediaDevice = e.breakpoints[P.IB] ? "mobile" : e.breakpoints[P.K5] ? "tablet" : "desktop",
                        this._cdRef.detectChanges(),
                        this._addHeaderContent(),
                        this._setSideMenu(),
                        this._addFooterNavigation()
                    }
                    ), (0,
                    R.g)(500)).subscribe(()=>this._pairTV?.componentInstance.repositionVerticalResizeHandle()),
                    this._breakpointObserver.observe([z.u3.XSmall, P.K9]).pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        e.breakpoints[z.u3.XSmall] ? (this.xsActive = !0,
                        this.gtMdActive = !1) : e.breakpoints[P.K9] ? (this.xsActive = !1,
                        this.gtMdActive = !0) : (this.xsActive = !1,
                        this.gtMdActive = !1),
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._createTabs(),
                    this.isAggregatorSupportedInCurrentChain = this._chainData.aggregatorSupported && !this.isIOS,
                    this.isAggregatorSupportedInCurrentChain ? this._loadAggregator().pipe((0,
                    J.q)(1), (0,
                    R.g)(50)).subscribe(()=>{
                        const e = s._Z.getString(yt);
                        null != e && "open" === e && this.openAggregator(c.iU1.BUY)
                    }
                    ) : this.noAggregatorActive = !this.isFullScreen && !this.showSwapButton,
                    this._environment.static_generation && (this.isPoolSelected = !0,
                    this.isSwapSelected = !1,
                    this.hiddenFavorites = !0),
                    this._settingsService.onThemeChange$.pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        this.isDarkTheme = e === f.Q2.Dark
                    }
                    ),
                    this._settingsService.getConfigChanged$("notifications").pipe((0,
                    s.sL)(this), (0,
                    it.w)(()=>(0,
                    rt.D)(this._notificationsService.getNotificationStatus()))).subscribe(e=>{
                        this.notificationsStatus = e,
                        this.alertsStatus = {
                            ...this._priceAlertsService.getAlertStatus()
                        },
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._settingsService.getConfigChanged$("candle_normalization").pipe((0,
                    s.sL)(this), (0,
                    _e.x)(), (0,
                    R.g)(1e3)).subscribe(e=>{
                        if (null == this.isCandleNormalizationEnabled)
                            return this.isCandleNormalizationEnabled = e,
                            void this._cdRef.detectChanges();
                        this.isCandleNormalizationEnabled = e,
                        this._routingService.reloadRoute(`/${this.chain}/${A.$.PairExplorer}/${this.pairSelected ?? ""}`)
                    }
                    ),
                    this._favoritePairsService.favoritesList$.pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        this._currentListId = this._favoritePairsService.findListIdInList(e, this._currentList)
                    }
                    ),
                    this._pairSelected$.pipe((0,
                    s.sL)(this), (0,
                    I.h)(e=>!!e && e !== this._pairURL.pair)).subscribe(e=>{
                        const a = new RegExp(`^/${this.chain}/${A.$.PairExplorer}/${e}`,"i");
                        if (null == this._location.path().replace(`/${this._settingsService.language}`, "").replace(`#${this._pairURL.fragment}`, "").match(a)) {
                            const l = this._urlWithoutTrackingParams
                              , _ = decodeURI(`${l.pathname}${l.search}`);
                            this._pairURL.pair.toLowerCase() === this.tokenData.id?.toLowerCase() ? this._location.replaceState(_.replace(this._environment.app_scope, "").replace(`${this._pairURL?.pair}`, `${e}`)) : this._location.go(_.replace(this._environment.app_scope, "").replace(`${this._pairURL?.pair}`, `${e}`)),
                            this._pairURL.pair = e,
                            this._isHotReloaded = !0
                        }
                    }
                    )
                }
                ngAfterViewInit() {
                    this.tabsContainer.changes.pipe((0,
                    s.sL)(this), (0,
                    I.h)(e=>"" !== this.tabEnabledViaUrl && 1 === e.length), (0,
                    J.q)(1), (0,
                    R.g)(200)).subscribe(e=>{
                        this.changeTab(this.tabEnabledViaUrl);
                        const o = document.querySelector("#tabs-container");
                        o && o.scrollIntoView({
                            block: "start",
                            inline: "nearest",
                            behavior: "smooth"
                        })
                    }
                    ),
                    setTimeout(()=>{
                        this._bottomIntersection()
                    }
                    , 1e3)
                }
                _loadEvmChainPair(e) {
                    const o = e?.pair || c.CXF.getDefaultPairByChain(this.chain)
                      , a = o.slice(0, c.Ech)
                      , r = c.LJP.getEVMPairAddressAndFragmentByURL(o, this.chain);
                    this._pairURL = r,
                    this._web3UtilsService.isLibLoaded$.subscribe(()=>{
                        this._web3UtilsService.isAddress(a) ? this.pairSelected !== r.pair.toLowerCase() && this.viewPair(r.pair.toLowerCase(), this._actRoute.snapshot.fragment || r.fragment) : this._routingService.navigate(`/${this.chain}/${A.$.PairExplorer}/${this._chainData.defaultPair}`)
                    }
                    )
                }
                _loadSolanaChainPair(e) {
                    const o = e?.pair || c.CXF.getDefaultPairByChain(this.chain)
                      , a = o.slice(0, c.K9A)
                      , r = o.slice(c.K9A + 1) || null;
                    this._pairURL = {
                        pair: a,
                        fragment: r
                    },
                    this._web3SolanaUtilsService.isLibLoaded$.subscribe(()=>{
                        this._web3SolanaUtilsService.isValidAddress(a) ? this.viewPair(a, this._actRoute.snapshot.fragment || r) : this._routingService.navigate(`/${this.chain}/${A.$.PairExplorer}/${this._chainData.defaultPair}`)
                    }
                    )
                }
                _loadNonEvmChainPair(e, o) {
                    const a = e?.pair || c.CXF.getDefaultPairByChain(this.chain)
                      , r = a.slice(0, o)
                      , l = a.slice(o + 1) || null;
                    this._pairURL = {
                        pair: r,
                        fragment: l
                    },
                    s.LC.REGEX_SAFE_STRING.test(r) ? this._routingService.navigate(`/${this.chain}/${A.$.PairExplorer}/${this._chainData.defaultPair}`) : this.viewPair(r, this._actRoute.snapshot.fragment || l)
                }
                _fillAvailableChainsList() {
                    const e = [];
                    for (const o of c.CXF.allChains) {
                        const a = gt.c.getChainPageFromUrl(this._router.url);
                        a && gt.c.isPageAvailableInChain(a, o.chain) && e.push({
                            value: o.chain,
                            logoUrl: o.logoUrl,
                            label: o.chainName,
                            shortLabel: o.chainShortName
                        })
                    }
                    this.availableChains = e,
                    this.currentChainItem = this.availableChains.find(o=>o.value === this._chainData.chain)
                }
                _addHeaderContent() {
                    this._removeHeaderContent(),
                    "desktop" === this.mediaDevice ? (this._removeExtraHeaderCenterContent = this._headerContentService.addTemplate("center", this.headerCenterContent),
                    this._removeExtraHeaderDesktopRightContent = this._headerContentService.addTemplate("right", this.headerRightContent)) : this._removeExtraHeaderMobileRightContent = this._headerContentService.addTemplate("right", this.searchMenuMobile)
                }
                _removeHeaderContent() {
                    this._removeExtraHeaderCenterContent && (this._removeExtraHeaderCenterContent(),
                    this._removeExtraHeaderCenterContent = null),
                    this._removeExtraHeaderDesktopRightContent && (this._removeExtraHeaderDesktopRightContent(),
                    this._removeExtraHeaderDesktopRightContent = null),
                    this._removeExtraHeaderMobileRightContent && (this._removeExtraHeaderMobileRightContent(),
                    this._removeExtraHeaderMobileRightContent = null)
                }
                _bottomIntersection() {
                    if (s.d$.isIntersectionObserverSupported(window)) {
                        const e = document.querySelector("footer.main-footer");
                        if (null != e) {
                            const o = {
                                threshold: 0
                            };
                            this._intersectionObserverSubs && this._intersectionObserverSubs.unsubscribe(),
                            this._intersectionObserverSubs = s.d$.observeElementIntersection(e, o).subscribe(a=>{
                                this.handleScrollingBottomReached(a)
                            }
                            )
                        }
                    }
                }
                handleTopIntersection([e]) {
                    this.pairHeaderTopReached = e.isIntersecting,
                    this.shouldStickHeader = !0 !== this.pairHeaderTopReached && !0 !== this.pairHeaderBottomReached,
                    this._cdRef.detectChanges()
                }
                handleTopFavsIntersection([e]) {
                    this.favsTopReached = e.isIntersecting,
                    this.shouldStickFavs = !0 !== this.favsTopReached && !0 !== this.favsBottomReached
                }
                handleBottomIntersection([e]) {
                    this.pairHeaderBottomReached = e.isIntersecting,
                    this.favsBottomReached = e.isIntersecting,
                    this.shouldStickHeader = !0 !== this.pairHeaderTopReached && !0 !== this.pairHeaderBottomReached,
                    this.shouldStickFavs = !0 !== this.favsTopReached && !0 !== this.favsBottomReached,
                    this._cdRef.detectChanges()
                }
                handleScrollingBottomReached([e]) {
                    null != e && (this.bottomReached = e.isIntersecting,
                    !this.bottomReached && null == this._footerTabsContent && this._addFooterNavigation())
                }
                get transactionsList() {
                    return this.filteredTxByWallet ? this.dataTransactionsSelected : this.dataTransactions
                }
                get selectedTransactionsList() {
                    return this.filteredTxByWallet ? [] : this.dataTransactionsSelected
                }
                onDestroy() {
                    this._removeHeaderContent(),
                    this.summaryTable && this.summaryTable.ngOnDestroy(),
                    this._candlesDataService.clearAll(),
                    this._liveCandlesSub && (this._liveCandlesSub.unsubscribe(),
                    this._liveCandlesSub = null);
                    const e = new Map(this._chartBarsSubscriptions);
                    this._chartBarsSubscriptions.clear(),
                    e.forEach(o=>o()),
                    e.clear(),
                    this.latestCandles && this.latestCandles.complete(),
                    this._routeParamsSub && this._routeParamsSub.unsubscribe(),
                    this._intersectionObserverSubs && this._intersectionObserverSubs.unsubscribe(),
                    this._pairTV?.componentInstance.destroyChartElements(),
                    this._removeFooterNavigation(),
                    this.candlesData = null,
                    this._exitComponent = !0,
                    this._unsubscribePairData$.next(),
                    this._unsubscribePairData$.complete(),
                    this._unsubscribeMenuToggle$.next(),
                    this._unsubscribeMenuToggle$.complete(),
                    this._pairSelected$.next(null),
                    this.publicAddress = null
                }
                _loadAggregator() {
                    return (0,
                    rt.D)(Promise.all([g.e(7540), g.e(8659)]).then(g.bind(g, 98659))).pipe((0,
                    M.b)(e=>{
                        this._aggregatorComponentClass = e.AggregatorComponent
                    }
                    ))
                }
                renderAggregator(e, o, a) {
                    if (e.children.length > 0 && null != this._aggregatorInstances[o])
                        return this._aggregatorInstances[o];
                    if (null == this._aggregatorComponentClass) {
                        const r = "PairExplorer: could not create aggregator. Aggregator class missing.";
                        return console.error(r),
                        (0,
                        ge._)(()=>new Error(r))
                    }
                    return this._aggregatorInstances[o] = new pe.y(r=>{
                        const l = this.aggregatorContentContainer.createComponent(this._aggregatorComponentClass, {
                            injector: this._injector
                        })
                          , {nativeElement: _} = l.location;
                        if (e.appendChild(_),
                        l.instance.network = this.aggregatorNetwork,
                        l.instance.token1 = (a === c.iU1.BUY ? this.tokenData.id_vs : this.tokenData.id) ?? "",
                        l.instance.token2 = (a === c.iU1.BUY ? this.tokenData.id : this.tokenData.id_vs) ?? "",
                        l.instance.alternativeExchange = this.alternativeExchange,
                        l.instance.networkScanner = this.aggregatorScanner,
                        l.instance.addButtonClose = "desktop" === this.mediaDevice && (this.isFullScreen || this.showSwapButton),
                        l.instance.aggregatorClose.subscribe(()=>this.closeAggregator(a)),
                        l.instance.showAlternativeExchange.subscribe(()=>{
                            this.openExchangeSwap()
                        }
                        ),
                        l.instance.tokenRefSymbol = (a === c.iU1.BUY ? this.tokenData.symbol_vs : this.tokenData.symbol) ?? "",
                        l.instance.addCloseDisclaimer = this.isFullScreen || this.showSwapButton,
                        l.changeDetectorRef.detectChanges(),
                        this.aggregatorEnabledViaUrl) {
                            const d = document.querySelector("#aggregator-widget");
                            d && (d.scrollIntoView({
                                block: "start",
                                inline: "nearest",
                                behavior: "smooth"
                            }),
                            this.aggregatorEnabledViaUrl = !1)
                        }
                        return ()=>{
                            l.destroy(),
                            this._aggregatorInstances[o] = null
                        }
                    }
                    ),
                    this._aggregatorInstances[o]
                }
                saveFavoritePair() {
                    const e = this.tokenData.symbol ?? ""
                      , o = this.tokenData.symbol_vs ?? ""
                      , a = {
                        pair: this.pairSelected,
                        symbol: e,
                        name: e,
                        isStableNativePair: this.tokenData.isStableNativePair,
                        exchange: this.tokenData.exchange ?? c.i9O.getExchangeApiFromExchange(this.exchange, this.chain),
                        updatedAt: Date.now(),
                        createdAt: Date.now(),
                        logo: this.tokenData.logo,
                        symbolRef: o,
                        price: this.tokenData.priceUSD,
                        price24h: {
                            price: this.priceVariation24h,
                            priceVariation: 0,
                            volume: 0
                        },
                        chain: this.chain
                    };
                    this._favoritePairsService.addFav(a, this._currentListId).subscribe(r=>{
                        r && this._favoritePairsService.sendAddedFav(a, this._currentListId, this._currentList)
                    }
                    )
                }
                _restartInfo() {
                    this.tabSelected = "history",
                    this.myAlertsForm = [],
                    this.myPositionsForm = [],
                    this._isPoolLoaded = !1,
                    this.tokenPoolInfo = {
                        value: "",
                        tokenSymbol: "",
                        vsSymbol: "",
                        totalSupply: 0,
                        fee: 0
                    },
                    this._fetchSwapsRetries = 0,
                    this.dextScoreReady = !1,
                    this.dataWallets = {},
                    this.markedWallet = void 0,
                    this.isHotPair = null,
                    this.filteredTxByWallet = !1,
                    this.canShowTeamSellAlert = !0,
                    this.canShowCommunityVotedScamAlert = !0,
                    this.teamWallet = null,
                    this.knownWalletsFiltered = [],
                    this.walletToSee = null,
                    this.coingeckoLink = null,
                    this.cmcTokenLink = null,
                    this.showIcons = !1,
                    this._optimalDecimalsUsd = s.be,
                    this._resetTeamWalletSells(),
                    this.initCharge = !0,
                    this._exitComponent = !1,
                    this.isSynced = !1,
                    this.dataTransactions = [],
                    this.dataTransactionsSelected = [],
                    this.pairDataAvailable = !1,
                    this.exchangeVersion = null,
                    this._resetSwapData(),
                    this.tokenData = {
                        holders: 0,
                        txCount: 0,
                        decimals: 0,
                        pooledToken: 0,
                        pooledETH: 0,
                        liquidity: void 0,
                        priceUSD: 0,
                        priceETH: 0,
                        created: 0,
                        type: c.iU1.BUY,
                        isStableNativePair: !1
                    },
                    this.tokenVotes = {
                        vote: w.NO_VOTE,
                        upvotes: {
                            total: 2,
                            percent: 50
                        },
                        downvotes: {
                            total: 2,
                            percent: 50
                        },
                        total: 0
                    },
                    this.tokenAudit = null,
                    this.tokenRef = "",
                    this.noLiquidity = !1,
                    this.liquidityTimeout = null,
                    this.dextScore = {
                        value: null,
                        color: null
                    },
                    this.positionToSave = {
                        pair: "",
                        priceUsd: 0,
                        priceEth: 0,
                        amount: 0
                    },
                    this.setPositionIndex(-1),
                    this.positionNeedSwap = !1,
                    this.showSocialLinks = !1,
                    this.socialNotDisabled = [],
                    this.socialActiveHTML = [],
                    this.disclaimer = null,
                    this._aggregatorScamAlertAlreadyAccepted = !1,
                    this.footerNavigationTab = "market",
                    null != this._footerTabsContent && (this._footerTabsContent.componentInstance.tabSelected = this.footerNavigationTab),
                    this.showCoinzillaBanner = !0,
                    this.volumeChecked = !1,
                    this.volumeVariation24h = 0,
                    this.walletTransactions = [],
                    this.walletTransactionsSummary = [],
                    this.walletTransactionsLoaded = !1,
                    this._cdRef.detectChanges()
                }
                initialRequest() {
                    this._exitComponent || (this._resetSwapData(),
                    this._fetchPoolData(this.pairSelected))
                }
                viewPair(e, o=null) {
                    var a = this;
                    this.pairInfoLoader = !0,
                    e = c.CXF.isEVMChain(this.chain) ? e && e.toLowerCase() : e,
                    this.veloxUrl = this._domSanitizer.bypassSecurityTrustResourceUrl("https://app.velox.global/?pairAddress=" + e),
                    this._sharedApiService.getAllPairData(e, this.chain, !0, !0).pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    K.K)(()=>(0,
                    Q.of)(null)), (0,
                    ct.U)(r=>r ?? null), (0,
                    M.b)(r=>{
                        (null == r || r.id.pair !== e) && (this.tokenData.id = e,
                        this._exitComponent || this._getHighestLiquidityPairByToken(this.tokenData.id))
                    }
                    ), (0,
                    I.h)(r=>{
                        if (null != r && null != r.id) {
                            this._allPairData = r,
                            this.tokenData.exchange = r.id.exchange || c.ibW,
                            this._exchangeService.exchange = c.i9O.getExchangeNameFromExchangeApi(this.tokenData.exchange, this.chain),
                            this.exchangeVersion = c.i9O.getExchangeVersion(r.id.exchange, this.chain),
                            this.hasExchangePoolRatios = c.i9O.hasExchangePoolRatios(this.tokenData.exchange, this.chain),
                            this.tokenData.isStableNativePair = c.LJP.isStableNativePair(r.type ?? "standard-pair");
                            const l = r.token.id.token
                              , _ = this.tokenData.isStableNativePair ? r.id.token : r.id.tokenRef;
                            this._populateIntervalData(r),
                            this.onIntervalChange("24h"),
                            r.symbol && (this.tokenData.symbol = s.LC.safeText(this.tokenData.isStableNativePair ? r.symbolRef : r.symbol)),
                            r.symbolRef && (this.tokenData.symbol_vs = s.LC.safeText(this.tokenData.isStableNativePair ? r.symbol : r.symbolRef),
                            this.tokenData.id_vs = _,
                            this.tokenRef = s.LC.safeText(this.tokenData.symbol_vs)),
                            l && (this.tokenData.id = l,
                            this.setAggregatorData()),
                            r.token?.name && (this.tokenData.name = s.LC.safeText(r.token.name || "")),
                            r.token?.decimals && (this.tokenData.decimals = +r.token.decimals),
                            r?.pool && (this.tokenData.pool = {
                                symbol: r.pool.symbol,
                                name: r.pool.name
                            }),
                            !r?.price && r?.poolPrice && (this.tokenData.poolPrice = r.poolPrice),
                            r.type = r.type ?? "standard-pair",
                            this.pairInfoLoader = !1,
                            this.liquidityTimeout = setTimeout(()=>{
                                this.noLiquidity = !0,
                                this.aggregatorLoader = !1,
                                this.showSocialLinks = !0,
                                this._pairTV?.componentInstance.repositionVerticalResizeHandle(),
                                (this.isSwapSelected || this.showAggregatorSell || this.showAggregatorBuy) && (this.isAggregatorSupportedInCurrentChain || !this.isFullScreen) && this._updateScamAdviceVisibility(),
                                this.noTransactions && (this.showAggregatorBuy = !0,
                                this.showAggregatorNotTransactions = !0),
                                this._cdRef.detectChanges(),
                                this._staticGenerationService.takeStaticPageSnapshot(5e3)
                            }
                            , 7e3),
                            this.searchItemInfo = this._pairsSearchService.formatPairItemsWithAllData([{
                                ...r,
                                chain: this.chain,
                                price24h: r.price24h?.price ?? 0
                            }], this.chain)[0]
                        }
                        return !0
                    }
                    )).subscribe(()=>{
                        this.awaitDextScoreRequests(),
                        this.abortDataTransactions$.next(!1),
                        this.newTransactions$.next(),
                        this._isPairLoaded$.pipe((0,
                        O.R)(this._unsubscribePairData$), (0,
                        I.h)(r=>!!r), (0,
                        B.b)(100), (0,
                        M.b)((0,
                        at.Z)(function*() {
                            if (a.dataTransactions.length > 0) {
                                const r = a.dataTransactions[a.dataTransactions.length - 1].timestamp
                                  , l = a.dataTransactions.filter(d=>d.timestamp === r);
                                let _;
                                a.candlesData ? _ = yield a._candlesDataService.updateWithLiveSwaps(a.candlesData, l.reverse(), !!a.isCandleNormalizationEnabled) : (a.candlesData = a._candlesDataService.getCandlesData(a.chain, e, a.tokenData.symbol),
                                _ = yield a._candlesDataService.updateWithLiveSwaps(a.candlesData, a.dataTransactions, !!a.isCandleNormalizationEnabled)),
                                _ && _.length > 0 && a.emitLiveCandles(_)
                            }
                            a._emitLatestPrice(),
                            a._pairTV && (a._pairTV.componentInstance.chartLoader = !0,
                            a._pairTV.componentInstance.destroyChartElements(),
                            a._pairTV.componentInstance.drawTv()),
                            a._recreateTokenData()
                        }))).subscribe(),
                        this._loadWallets(),
                        this.newTransactions$.pipe((0,
                        B.b)(500), (0,
                        O.R)(this.abortDataTransactions$), (0,
                        R.g)(15e3), (0,
                        I.h)(()=>!this.loader), (0,
                        O.R)(this._unsubscribePairData$), (0,
                        M.b)(()=>{
                            this._saveSwaps(this._transactionsBuffer),
                            this._emitLatestPrice(),
                            this.isSynced = !0,
                            this.abortDataTransactions$.next(!0)
                        }
                        )).subscribe(),
                        this.abortDataTransactions$.pipe((0,
                        O.R)(this._unsubscribePairData$), (0,
                        M.b)(r=>{
                            r || (this._retryTxCall(this._timePetitionsTx),
                            this.newTransactions$.next())
                        }
                        )).subscribe(),
                        e && this.pairSelected !== e && (this.chain === c.qop.Binance && (this.oldDextContract = "0xb1280589dbac3e7ce111bf4a7fb9c71a30213f7e",
                        this.newDextPair = "0x4b729d5d871057f3a9c424792729217cde72410d"),
                        this.candlesData = this._candlesDataService.getCandlesData(this.chain, e, this.tokenData.symbol),
                        this._getCandlesCalculationVariations(e),
                        this.candlesData.setResolution(this.userAccess && !this._candlesDataService.latestResolution ? c.TQh : this._chartService.transformToNumericResolution(this._candlesDataService.latestResolution)),
                        this._pairSubscribe(e),
                        this._pairSelected$.next(e),
                        this.publicAddress = c.LJP.getPublicAddress(this.pairSelected ?? "", this.chain),
                        this._hotPairsService.hotPairsByChain$.pipe((0,
                        s.sL)(this)).subscribe(r=>{
                            this._checkHotPairs(this._hotPairsService.formatHotPairs(r, this.chain, !0, {}))
                        }
                        ),
                        this.myPositions = {},
                        this._loadPositions(),
                        this._favoritePairsService.allFavs$.pipe((0,
                        O.R)(this._unsubscribePairData$), (0,
                        M.b)(()=>{
                            this.currentFav = this._favoritePairsService.findFavInAnyList(this.pairSelected),
                            this._updateTableTabs("positions", {
                                isDisabled: !this.currentFav || !this.userAccess,
                                selected: !!this.currentFav && this.userAccess && "positions" === this.tabSelected,
                                tooltip: this.userAccess ? this.currentFav ? void 0 : "pair_explorer.add_pair_favorites" : "pair_explorer.only_subscribed_positions"
                            }),
                            this._updateTableTabs("price-alerts", {
                                isDisabled: !!this.shouldHidePriceAlerts || !this.currentFav,
                                selected: !this.shouldHidePriceAlerts && !!this.currentFav && "price-alerts" === this.tabSelected,
                                tooltip: this.currentFav ? void 0 : "pair_explorer.add_pair_favorites"
                            }),
                            ("positions" === this.tabSelected && (!this.currentFav || !this.userAccess) || "price-alerts" === this.tabSelected && (this.shouldHidePriceAlerts || !this.currentFav)) && this.changeTab("history"),
                            this._cdRef.detectChanges()
                        }
                        )).subscribe(),
                        this._commonService.coinPrice$.pipe((0,
                        J.q)(1), (0,
                        St.V)(3e3)).subscribe({
                            next: r=>{
                                r > 0 && this.initialRequest()
                            }
                            ,
                            error: r=>{
                                r instanceof St.W && console.error("PairExplorer: could not fetch latest coin price for the current chain"),
                                this.initialRequest()
                            }
                        }))
                    }
                    )
                }
                _loadPositions() {
                    this._positionsService.positions$.pipe((0,
                    O.R)(this._unsubscribePairData$)).subscribe(e=>{
                        this.myPositions = e,
                        this._updatePositionsPrice(),
                        this.myPositionsForm = [],
                        (this.myPositions[this.pairSelected] ?? []).filter(o=>!!o).forEach(o=>{
                            this.setPositionForm(o.amount, o.price_usd, o.price_eth, o._id ? o._id : void 0)
                        }
                        ),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _loadWallets() {
                    this.userAccess && this._walletsService.wallets$.pipe((0,
                    O.R)(this._unsubscribePairData$)).subscribe(e=>{
                        this._storageWallets = e,
                        this.knownWallets = Object.values(this._storageWallets),
                        Object.keys(this._storageWallets).forEach((a,r)=>{
                            this.knownWallets[r] = {
                                ...this.knownWallets[r],
                                id: c.CXF.getMakerFormatByChain(a, this.chain)
                            }
                        }
                        ),
                        this.knownWallets.sort((a,r)=>a.name.localeCompare(r.name));
                        const o = [...this.dataTransactions].map(a=>{
                            const r = this.checkWalletInfo(a.maker);
                            return a.walletSaved = r ? {
                                name: this.checkWalletInfo(a.maker, "user"),
                                color: r
                            } : void 0,
                            a
                        }
                        );
                        this.dataTransactions = o,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _prepareTokens() {
                    this.initCharge && (this.tokenData.priceETH = +this.tokenData.pooledETH / +this.tokenData.pooledToken,
                    this.tokenData.priceUSD = +this._commonService.getPriceETH() * this.tokenData.priceETH,
                    this._optimalDecimalsUsd = s.C6.getOptimalDecimals(this.tokenData.priceUSD || 0),
                    this._recreateTokenData()),
                    this._updatePositionsPrice()
                }
                _updatePositionsPrice(e=this.myPositions[this.pairSelected]) {
                    if (this.myPositions[this.pairSelected] && 0 !== this.myPositions[this.pairSelected].length)
                        for (const o of e) {
                            const a = +this.tokenData.priceUSD * +o.amount
                              , r = +this.tokenData.priceETH * +o.amount
                              , l = +o.price_usd * +o.amount
                              , _ = +o.price_eth * +o.amount;
                            o.value_usd = a,
                            o.value_eth = r,
                            o.diff_usd = (+a - l) / l * 100,
                            o.diff_eth = (+r - _) / _ * 100
                        }
                }
                _setTx(e, o=!1) {
                    if (0 === e.length)
                        return;
                    const a = [];
                    for (const _ of e) {
                        let d;
                        _.maker = _.maker && c.CXF.getMakerFormatByChain(_.maker, this.chain);
                        const k = s.gS.binarySearch(this.dataTransactions, _.timestamp, "timestamp");
                        [...this.dataTransactions.slice(k >= 5 ? k - 5 : k, k + 5), ...a].some(W=>{
                            if (c.YQQ.isFrontRunning(W, _)) {
                                const j = Math.abs(_.amountETH - W.amountETH);
                                return W.chupacabring = j,
                                d = j,
                                !0
                            }
                            return !1
                        }
                        );
                        const N = this.checkWalletInfo(_.maker);
                        N && !this.knownWalletsFiltered.includes(_.maker) && this.knownWalletsFiltered.push(_.maker);
                        const v = this.tokenData.isStableNativePair ? _.amountRef : _.amountToken
                          , $ = {
                            indexedTimestamp: c.YQQ.generateIndexedTimestamp(_),
                            timestamp: _.timestamp,
                            type: this._checkType(_.type),
                            priceUSD: _.price,
                            priceUSD_ETH: _.priceETH,
                            price: _.price,
                            priceETH: _.priceETH,
                            amountToken: v,
                            amountETH: _.amountETH,
                            amountUSD: _.price ? v * _.price : 0,
                            maker: _.maker,
                            walletSaved: N ? {
                                name: this.checkWalletInfo(_.maker, "user"),
                                color: N
                            } : void 0,
                            id: _.id,
                            blockNumber: _.blockNumber,
                            blockHash: _.blockHash,
                            logIndex: _.logIndex,
                            others: _.others,
                            chupacabring: d,
                            amountRef: this.tokenData.isStableNativePair ? _.amountToken : this.tokenRef ? _.amountRef : 0
                        };
                        o ? a.push($) : a.unshift($),
                        this.dataWallets[_.maker] || (this.dataWallets[_.maker] = {
                            numTx: 0,
                            buy: 0,
                            sell: 0,
                            totalEthbuy: 0,
                            totalEthsell: 0,
                            color: ""
                        }),
                        this._updateTeamWallet(_),
                        this.dataWallets[_.maker].numTx++,
                        this.dataWallets[_.maker]["totalEth" + _.type] += +_.amountETH,
                        this.dataWallets[_.maker][_.type]++,
                        this.dataWallets[_.maker].buy >= 0 && this.dataWallets[_.maker].sell >= 0 && (this.dataWallets[_.maker].color = this.dataWallets[_.maker].totalEthsell - this.dataWallets[_.maker].totalEthbuy < 0 ? "border-bottom-danger" : "border-bottom-success")
                    }
                    if (this.dataTransactions = o ? [...this.dataTransactions, ...a] : [...a, ...this.dataTransactions],
                    this.totalSwaps = this.isSwapsHistoryFullyLoaded ? this.dataTransactions.length : Math.max(this.totalSwaps, this.dataTransactions.length),
                    null == this.countSwapsLast24h) {
                        const _ = s.gS.binarySearch(this.dataTransactions, Date.now() / 1e3 - s.Ym, "timestamp");
                        this.countSwapsLast24h = this.dataTransactions.length - _
                    }
                    this.filteredTxByWallet && (this.dataTransactionsSelected = [...this.dataTransactionsSelected, ...a.filter(_=>_.maker === this.markedWallet)],
                    this.dataTransactionsSelected.length > 0 ? this._pairTV?.widgetInstance?.chart().refreshMarks() : this._pairTV?.widgetInstance?.chart().clearMarks(),
                    this.dataTransactionsSummary = [{
                        ...this.dataTransactionsSelected[0],
                        ...ut(this.dataTransactionsSelected)
                    }]),
                    a.length = 0;
                    const r = c.YQQ.analyzeTransactions(this.dataTransactions, this.chain);
                    r ? (this._isOnlyBuySwaps = r.isOnlyBuySwaps,
                    this._analysisResultPercent = r.analysisResultPercent,
                    this._percentSuccess = r.percentSuccess) : this._analysisResultPercent = null;
                    const l = this.dataTransactions[this.dataTransactions.length - 1];
                    l?.price && (this.tokenData.type = l.type === c.iU1.SELL ? ne : oe,
                    this.tokenData.priceUSD = l.price,
                    this.tokenData.priceETH = l.priceETH,
                    this._optimalDecimalsUsd = s.C6.getOptimalDecimals(this.tokenData.priceUSD || 0),
                    this._setSeoData(),
                    this._recreateTokenData()),
                    this._updatePositionsPrice(),
                    this._cdRef.detectChanges()
                }
                copyText(e, o) {
                    (0,
                    P.vQ)(e, o)
                }
                copyNumberText(e, o) {
                    e = s.C6.toFixed(+e),
                    (0,
                    P.vQ)(e, o)
                }
                getPriceDifference(e, o) {
                    return o > 0 ? e - 100 * e / (100 + o) : 100 * e / (100 + o) - e
                }
                isSuspectedTeamScam() {
                    return this.scamWarningType !== Z.NONE
                }
                isCommunityVotedScam() {
                    return Ce.isVotedScam(this.tokenVotes)
                }
                get scamWarningType() {
                    if (!0 === this.tokenData.whitelisted)
                        return Z.NONE;
                    let e;
                    if (e = this.teamEthSold > 0 && 0 === this.tokenData.pooledETH ? 100 : this.teamEthSold / this.tokenData.pooledETH * 100,
                    this._teamSellsBeforeScamTime > 0) {
                        if (e >= 6)
                            return Z.DANGER;
                        if (e >= 3)
                            return Z.WARNING
                    } else {
                        if (e >= 15)
                            return Z.DANGER;
                        if (e >= 10)
                            return Z.WARNING
                    }
                    return Z.NONE
                }
                _updateTeamWallet(e) {
                    this.tokenData.created && e.maker === this.teamWallet && null != e.maker && (e.type === c.iU1.SELL ? (e.timestamp < this._teamSellsScamTime ? this._teamSellsBeforeScamTime++ : this._teamSellsAfterScamTime++,
                    this.teamEthSold += e.amountETH) : (e.timestamp < this._teamSellsScamTime ? this._teamBuysBeforeScamTime++ : this._teamBuysAfterScamTime++,
                    this.teamEthSold -= e.amountETH))
                }
                _resetTeamWalletSells() {
                    this._teamSellsBeforeScamTime = 0,
                    this._teamSellsAfterScamTime = 0,
                    this._teamBuysBeforeScamTime = 0,
                    this._teamBuysAfterScamTime = 0,
                    this.teamEthSold = 0,
                    this._teamSellsScamTime = 0,
                    this.tokenData.created && (this._teamSellsScamTime = s.k3.getDaysFromDate(this.tokenData.created, 1))
                }
                _setTokenAndPoolData(e) {
                    let o = !1;
                    if (this.tokenData.created || (o = !0),
                    e) {
                        this.pairDataAvailable = !0,
                        e.type = e?.type ?? "standard-pair",
                        this.tokenData.isStableNativePair = c.LJP.isStableNativePair(e.type),
                        this.tokenData.pooledToken = e.metrics.reserve,
                        this.tokenData.pooledETH = e.metrics.reserveRef,
                        this._populateIntervalData(e),
                        null == this.tokenData.pooledToken && (this.tokenData.pooledToken = e.metrics.reserveRef || "",
                        this.tokenData.pooledETH = e.metrics.reserve || ""),
                        (c.CXF.isStableSymbol(this.chain, this.tokenData.symbol ?? null) || c.CXF.isChainSymbol(this.chain, this.tokenData.symbol_vs ?? null)) && (this.tokenRef = ""),
                        this.tokenPoolInfo = {
                            ...this.tokenPoolInfo,
                            fee: e.fee ?? 0
                        },
                        this.tokenData.created = +(new Date(e.creationTime).getTime() || ""),
                        this.tokenData.txCount = Math.max(e.token.metrics.txCount || 0, this.tokenData.txCount),
                        this.tokenData.holders = Math.max(e.token.metrics.holders || 0, this.tokenData.holders || 0),
                        this.tokenData.liquidity = e.metrics.liquidity,
                        this.tokenData.locks = e.locks ? Array.isArray(e.locks) ? [...e.locks] : this._manageLocksV2(e.locks) : [],
                        e.token.locks && (this.tokenData.locks = Array.isArray(e.token.locks) ? [...this.tokenData.locks, ...Object.values(e.token.locks)] : [...this.tokenData.locks, ...this._manageLocksV2(e.token.locks)]),
                        this.tokenData.description = e.token.info?.description ?? "",
                        e._disclaimer && (this.disclaimer = e._disclaimer,
                        this.aggregatorEnabledViaUrl || (this.showAggregatorBuy = !1,
                        this.showAggregatorSell = !1)),
                        this.tokenAudit = e.token.audit,
                        this.tokenData.whitelisted = -1 === e?.votes?._warning,
                        0 === e.votes?.upvotes && 0 === e.votes?.downvotes ? (this.tokenVotes.upvotes.total = 2,
                        this.tokenVotes.downvotes.total = 2) : (this.tokenVotes.upvotes.total = e.votes?.upvotes ?? 2,
                        this.tokenVotes.downvotes.total = e.votes?.downvotes ?? 2),
                        this.tokenVotes.total = (e.votes?.upvotes ?? 0) + (e.votes?.downvotes ?? 0),
                        this.tokenVotes.total <= 2 && (this.tokenVotes.upvotes.total += 2,
                        this.tokenVotes.downvotes.total += 2);
                        const a = this.tokenVotes.downvotes.total + this.tokenVotes.upvotes.total;
                        this.tokenVotes.upvotes.percent = 100 * this.tokenVotes.upvotes.total / a,
                        this.tokenVotes.downvotes.percent = 100 * this.tokenVotes.downvotes.total / a,
                        this.tokenVotes.vote = this._voteService.get(this.userId, e.id.pair).vote,
                        this._recreateTokenVotes(),
                        e.team?.wallet && (this.teamWallet = e.team.wallet),
                        this._goPlusHoldersChains() && (this.tokenData.holders = this.tokenAudit?.external?.goplus?.holdersCount ?? 0),
                        this.coingeckoLink = e.token.info?.coingecko ? `https://www.coingecko.com/en/coins/${e.token.info?.coingecko}` : this.coingeckoLink,
                        this.cmcTokenLink = e.token.info?.cmc ? `https://coinmarketcap.com/currencies/${e.token.info?.cmc}` : this.cmcTokenLink,
                        null != e.token.logo && "" !== e.token.logo && (this.tokenData.logo = c.LJP.normalizeLogoUrl(e.token.logo)),
                        this.tokenData.isVentures = e.token.info?.ventures ?? !1;
                        const r = ["twitter", "website", "telegram", "discord", "facebook", "instagram", "tiktok", "youtube", "github", "bitbucket", "medium", "reddit", "slack", "linkedin", "extraInfo", "email"];
                        if (!this.tokenData.tokenInfo && e.token.links) {
                            const l = {
                                ...e.token.links ?? {},
                                ...this.tokenData.tokenInfo ?? {},
                                email: e.token.info?.email,
                                nftCollection: e.token.info?.nftCollection ?? void 0,
                                extraInfo: e.token.info?.extraInfo ?? void 0
                            };
                            s.lM.stripFalsyProperties(l),
                            this.tokenData.tokenInfo = {
                                ...l
                            }
                        }
                        if (this.tokenPoolInfo = {
                            ...this.tokenPoolInfo,
                            circulatingSupply: null != e.token.metrics?.circulatingSupply ? +e.token.metrics.circulatingSupply : 0,
                            totalSupply: null != e.token.metrics?.totalSupply ? +e.token.metrics.totalSupply : 0,
                            maxSupply: null != e.token.metrics.maxSupply ? `${e.token.metrics.maxSupply}` : void 0,
                            marketCap: null != e.token.metrics.mcap ? `${e.token.metrics.mcap}` : void 0,
                            totalMarketCap: null != e.token.metrics.fdv ? `${e.token.metrics.fdv}` : void 0
                        },
                        this._calculateMarketCap(),
                        this.socialNotDisabled = r.filter(l=>!(!this.tokenData.tokenInfo || null == this.tokenData.tokenInfo[l] || "" === this.tokenData.tokenInfo[l])),
                        this.showSocialLinks = !0,
                        this.hasExchangePoolRatios && null != e.ampBps && (this.tokenPoolInfo = {
                            ...this.tokenPoolInfo,
                            amp: e.ampBps / 1e4
                        },
                        null != e.ratio0 && null != e.ratio1)) {
                            const l = e.ratio0.toFixed(2)
                              , _ = e.ratio1.toFixed(2);
                            this.tokenPoolInfo = {
                                ...this.tokenPoolInfo,
                                ratio: `${l}% ${e.symbol} - ${_}% ${e.symbolRef}`
                            }
                        }
                        this._recreateTokenData(),
                        this.interval || this.onIntervalChange("24h")
                    }
                    if (this._clearTimeOutLiquidity(),
                    o && this.tokenData.created && (this._resetTeamWalletSells(),
                    this.dataTransactions && this.dataTransactions.length > 0))
                        for (const a of this.dataTransactions)
                            this._updateTeamWallet(a);
                    this._recreateTokenData(),
                    this._cdRef.detectChanges(),
                    this.dextScoreReady || this._calculateDextScore$.next()
                }
                _fetchPoolData(e, o=!1) {
                    const a = this._sharedApiService.getAllPairData(e, this.chain).pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    O.R)(this._fetchAllPairDataUnsubscribe$), (0,
                    de.a)(_=>_.pipe((0,
                    R.g)(3e4), (0,
                    O.R)(this._unsubscribePairData$), (0,
                    O.R)(this._fetchAllPairDataUnsubscribe$))));
                    let r;
                    const l = {
                        next: _=>{
                            const d = _ ?? null;
                            d && (d.type = d?.type ?? "standard-pair"),
                            this._allPairData = d,
                            this._setTokenAndPoolData(d),
                            this._calculateDextScore$.next(),
                            this.initCharge && (this._isPoolLoaded || (this._isPoolLoaded = !0,
                            this._fetchSwaps(e)))
                        }
                        ,
                        error: ()=>this._fetchSwaps(e)
                    };
                    r = null == this._allPairData || o ? a : (0,
                    Q.of)(this._allPairData).pipe((0,
                    it.w)(_=>(l.next(_),
                    (0,
                    X.H)(3e4))), (0,
                    J.q)(1), (0,
                    O.R)(this._fetchAllPairDataUnsubscribe$), (0,
                    it.w)(()=>a)),
                    r.pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    O.R)(this._fetchAllPairDataUnsubscribe$)).subscribe(l)
                }
                _fetchSwaps(e, o=!1) {
                    this._sharedApiService.getSwaps(this.chain, e, o ? this._initialCachedSwapsTimeStamp : this._nextSwapTimestampToFetch, o).pipe((0,
                    J.q)(1), (0,
                    O.R)(this._unsubscribePairData$), (0,
                    s.sL)(this)).subscribe({
                        next: r=>{
                            this._fetchSwapsRetries = 0,
                            this._allPairData && this._allPairData.id.token && this._allPairData.symbol && (this._setTokenAndPoolData(this._allPairData),
                            this._calculateDextScore$.next()),
                            r ? (r?.count && (this.totalSwaps = r.count),
                            this._initialCachedSwapsTimeStamp || (this._initialCachedSwapsTimeStamp = r.next),
                            this._nextSwapTimestampToFetch = r.next,
                            null === r.next && (this.isSwapsHistoryFullyLoaded = !0),
                            r.swaps && this.tokenData.symbol && (this.noTransactions = !1,
                            o && (this.isSwapsHistoryFullyLoaded = !0),
                            this._saveSwaps(r.swaps),
                            this.loader && (this._isPairLoaded$.next(!0),
                            this.loader = !1),
                            (this.isSwapSelected || this.showAggregatorSell || this.showAggregatorBuy) && (this.isAggregatorSupportedInCurrentChain || !this.isFullScreen) && this._updateScamAdviceVisibility(),
                            this._cdRef.detectChanges())) : (0,
                            X.H)(5e3).pipe((0,
                            J.q)(1), (0,
                            O.R)(this._unsubscribePairData$), (0,
                            s.sL)(this)).subscribe(()=>this._fetchSwaps(e))
                        }
                        ,
                        error: ()=>{
                            e === this.pairSelected && !this._exitComponent && (this.noTransactions = 0 === this.dataTransactions.length),
                            this._fetchSwapsRetries < 3 && (this._fetchSwapsRetries++,
                            (0,
                            X.H)(5e3).pipe((0,
                            J.q)(1), (0,
                            O.R)(this._unsubscribePairData$), (0,
                            s.sL)(this)).subscribe(()=>this._fetchSwaps(e))),
                            this.loader = !1,
                            this._cdRef.detectChanges()
                        }
                    })
                }
                _emitLatestPrice() {
                    if (this.pairSelected && this.dataTransactions.length > 0) {
                        const e = this.dataTransactions[this.dataTransactions.length - 1];
                        this._priceTrackService.updatePairPrice(this.chain, {
                            eth: e.priceETH,
                            usd: e.price,
                            id: this.pairSelected,
                            ts: e.timestamp
                        })
                    }
                }
                _isStableVsWrapper() {
                    return c.CXF.isStableSymbol(this.chain, this.tokenData.symbol) && c.CXF.getChainWrapperSymbol(this.chain) === this.tokenData.symbol_vs
                }
                _saveSwaps(e, o=!1) {
                    const a = c.YQQ.removeDuplicateTransactions(c.YQQ.filterBuysSellsOnly(e), this.dataTransactions);
                    a.length > 0 ? this._setTx(a, o) : this._prepareTokens(),
                    this._setSupplyInfo();
                    const r = +this._commonService.getPriceETH() / this.tokenData.priceUSD
                      , l = c.CXF.isStableSymbol(this.chain, this.tokenData.symbol) ? this.tokenData.priceUSD.toFixed(this._optimalDecimalsUsd) : r.toFixed(this._optimalDecimalsUsd);
                    this.tokenPoolInfo = {
                        ...this.tokenPoolInfo,
                        vsSymbol: this.refTokenSymbol,
                        value: l,
                        tokenSymbol: this.tokenData.symbol
                    },
                    this.dextScoreReady || this._calculateDextScore$.next(),
                    this.initCharge && (this.initCharge = !1),
                    this.loader && this._isPairLoaded$.next(!0),
                    this.loader = !1,
                    this._loader$.next(!1),
                    this._cdRef.detectChanges(),
                    this.isWsConnected || this.abortDataTransactions$.next(!1)
                }
                awaitDextScoreRequests() {
                    this._calculateDextScore$.pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    B.b)(100)).subscribe(()=>{
                        this.calculateDextScore()
                    }
                    )
                }
                calculateDextScore() {
                    this.tokenData.id ? (0,
                    Q.of)(null == this._allPairData ? null : this._allPairData).pipe((0,
                    I.h)(e=>null != e || (this.aggregatorLoader = !1,
                    this._pairTV?.componentInstance.repositionVerticalResizeHandle(),
                    !1)), (0,
                    ct.U)(e=>(e.type = e.type ?? "standard-pair",
                    e))).subscribe(e=>{
                        const o = {
                            info: [e.dextScore.information, c.DvC.setDextScoreColor(e.dextScore.information)],
                            creation: [e.dextScore.creation, c.DvC.setDextScoreColor(e.dextScore.creation)],
                            holders: [e.dextScore.holders, c.DvC.setDextScoreColor(e.dextScore.holders)],
                            pool: [e.dextScore.pool, c.DvC.setDextScoreColor(e.dextScore.pool)],
                            transactions: [e.dextScore.transactions, c.DvC.setDextScoreColor(e.dextScore.transactions)],
                            total: [e.dextScore.total, c.DvC.setDextScoreColor(e.dextScore.total)]
                        };
                        if (this.chartOptionsDextScore.series[0] = o.info[0],
                        this.chartOptionsDextScore.colors[0] = o.info[1],
                        this.chartOptionsDextScore.series[1] = o.transactions[0],
                        this.chartOptionsDextScore.colors[1] = o.transactions[1],
                        this.chartOptionsDextScore.series[2] = o.holders[0],
                        this.chartOptionsDextScore.colors[2] = o.holders[1],
                        this.chartOptionsDextScore.series[3] = o.creation[0],
                        this.chartOptionsDextScore.colors[3] = o.creation[1],
                        this.chartOptionsDextScore.series[4] = o.pool[0],
                        this.chartOptionsDextScore.colors[4] = o.pool[1],
                        this.dextScore = {
                            ...this.dextScore,
                            value: o.total[0],
                            color: o.total[1]
                        },
                        this.dextScoreReady = !0,
                        this._setMetadataSEOByDextscore(),
                        this._setAnalysisTransactionsResults(),
                        (this.isSwapSelected || this.showAggregatorSell || this.showAggregatorBuy) && (this.isAggregatorSupportedInCurrentChain || !this.isFullScreen) && this._updateScamAdviceVisibility(),
                        this.aggregatorLoader = !1,
                        this._pairTV?.componentInstance.repositionVerticalResizeHandle(),
                        this._cdRef.detectChanges(),
                        this.dataTransactions && this.dataTransactions.length > 0) {
                            this._resetTeamWalletSells();
                            for (const a of this.dataTransactions)
                                this._updateTeamWallet(a);
                            this._cdRef.detectChanges()
                        }
                    }
                    ) : this.dextScoreReady = !1
                }
                _setSupplyInfo() {
                    const e = this.tokenPoolInfo.totalSupply;
                    this.tokenPoolInfo = {
                        ...this.tokenPoolInfo,
                        created: this.tokenData.created && 0 !== this.tokenData.created ? s.k3.getTimestampMinute(this.tokenData.created, !0) : void 0,
                        maxSupply: null != this.tokenPoolInfo.maxSupply ? this.tokenPoolInfo.maxSupply : e > 0 ? `${e}` : void 0,
                        pooled: !c.i9O.hasExchangeFeePercentagePools(this.exchange, this.exchangeVersion, this.chain) && e ? "" + 100 * this.tokenData.pooledToken / e : void 0
                    },
                    this._calculateMarketCap()
                }
                _calculateMarketCap() {
                    this.chain === c.qop.Ethereum && null != this.tokenPoolInfo.totalSupply && +this.tokenPoolInfo.totalSupply > 0 && (this.tokenPoolInfo = {
                        ...this.tokenPoolInfo,
                        maxSupply: "" + +this.tokenPoolInfo.totalSupply
                    })
                }
                getProfitClass(e, o) {
                    const a = o - e;
                    return a ? a > 0 ? oe : ne : ""
                }
                toggleMarkedWallet(e, o, a=!1) {
                    e.stopImmediatePropagation(),
                    this._pairTV?.widgetInstance?.chart().clearMarks(),
                    o !== this.markedWallet || a && !this.filteredTxByWallet ? (this.markedWallet = o,
                    this.filteredTxByWallet = a,
                    this.dataTransactionsSelected = this.dataTransactions.filter(r=>r.maker === o),
                    this._pairTV?.widgetInstance?.chart().refreshMarks(),
                    this.filteredTxByWallet && (this.dataTransactionsSummary = [{
                        ...this.dataTransactionsSelected[0],
                        ...ut(this.dataTransactionsSelected)
                    }])) : (this.markedWallet = void 0,
                    this.filteredTxByWallet = !1,
                    this.dataTransactionsSelected = [],
                    this._pairTV?.widgetInstance?.chart().clearMarks())
                }
                setEventGA(e) {
                    this._analyticsService.eventEmitter("click", "exit", "", e)
                }
                changeTab(e) {
                    "my-swaps" === this.tabSelected && e !== this.tabSelected && this.walletTransactions && this.walletTransactions.length && (this.dataTransactionsSelected = [],
                    this.filteredTxByWallet = !1,
                    this.markedWallet = void 0,
                    this._pairTV?.widgetInstance?.chart().clearMarks()),
                    this.tabSelected = e,
                    this._cdRef.detectChanges(),
                    "my-swaps" === e && this.getWalletTransactions()
                }
                togglePositionsPanel(e) {
                    this.showAddEditPositionsPanel = e,
                    this._cdRef.detectChanges()
                }
                newPositionForm() {
                    this.togglePositionsPanel(!0),
                    this.positionToSave = {
                        pair: this.pairSelected ?? "",
                        priceUsd: 0,
                        priceEth: 0,
                        amount: 0
                    },
                    this.positionNeedSwap = !0,
                    this._cdRef.detectChanges()
                }
                deletePosition(e) {
                    this.userAccess && this._positionsService.deletePositionsCall(this.myPositions[this.pairSelected][e]._id).subscribe(()=>{
                        this.myPositions[this.pairSelected].splice(e, 1),
                        this._cdRef.detectChanges(),
                        this._positionsService.saveAndEmitPositions(this.myPositions)
                    }
                    )
                }
                editPositionButton(e) {
                    this.positionToSave.amount = this.myPositionsForm[e].amount.value.replace(/,/g, ""),
                    this.positionToSave.priceUsd = this.myPositionsForm[e].price_usd.value.replace(/,/g, ""),
                    this.positionToSave.priceEth = this.myPositionsForm[e].price_eth.value.replace(/,/g, ""),
                    this.positionToSave.pair = this.pairSelected ?? "",
                    this.setPositionIndex(e),
                    this.positionNeedSwap = !1,
                    this.togglePositionsPanel(!0)
                }
                saveEditPosition(e) {
                    if (!e.amount || !e.priceUsd || !e.priceEth)
                        return;
                    const o = e ? e.pair : this.pairSelected
                      , a = this.positionIndex >= 0 ? this.positionIndex : this.myPositions[o]?.length ?? 0;
                    this.positionIndex < 0 && this.setPositionForm(e.amount.toString(), e.priceUsd.toString(), e.priceEth.toString(), this.myPositionsForm[a]?._id?.value ?? void 0),
                    this.myPositions[o] || (this.myPositions[o] = []),
                    e.amount.toString(),
                    e.priceUsd.toString(),
                    e.priceEth.toString();
                    const r__id = this.myPositionsForm[a]?._id?.value ?? null;
                    this.changeTab("positions"),
                    this.userAccess ? this._positionsService.addEditPositionsCall([[{
                        pair: o,
                        _id: r__id,
                        symbol: this.tokenData.symbol,
                        amount: +e.amount,
                        priceUsd: +e.priceUsd,
                        priceEth: +e.priceEth
                    }]]).subscribe(_=>{
                        if (_.length >= 1) {
                            const d = -1 !== this.positionIndex ? this.positionIndex : 0
                              , k = {
                                amount: _[d].amount.toString(),
                                price_usd: _[d].priceUsd.toString(),
                                price_eth: _[d].priceEth.toString(),
                                _id: _[d]._id,
                                value_usd: void 0,
                                value_eth: void 0,
                                diff_eth: void 0,
                                diff_usd: void 0
                            };
                            r__id ? this.myPositions[o][this.positionIndex] = k : this.myPositions[o].push(k),
                            this._updatePositionsPrice(),
                            this.togglePositionsPanel(!1),
                            this.setPositionIndex(-1),
                            this._cdRef.detectChanges(),
                            this._positionsService.saveAndEmitPositions(this.myPositions)
                        }
                    }
                    ) : (this._updatePositionsPrice([this.myPositions[o][a]]),
                    this.myPositions[o] = [...this.myPositions[o]],
                    this._positionsService.saveAndEmitPositions(this.myPositions),
                    this.togglePositionsPanel(!1),
                    this.setPositionIndex(-1))
                }
                setPositionIndex(e) {
                    this.positionIndex = e,
                    this._cdRef.detectChanges()
                }
                setPositionForm(e, o, a, r) {
                    const l = s.LC.REGEX_ONLY_REAL;
                    this.myPositionsForm.push({
                        amount: new m.NI(e && s.C6.toReadableNumber(e, s.B3.EXPANDED),[m.kI.required, m.kI.pattern(l)]),
                        price_usd: new m.NI(o && s.C6.toReadableNumber(o, s.B3.EXPANDED),[m.kI.required, m.kI.pattern(l)]),
                        price_eth: new m.NI(a && s.C6.toReadableNumber(a, s.B3.EXPANDED),[m.kI.required, m.kI.pattern(l)]),
                        _id: new m.NI(r)
                    })
                }
                addPosition(e) {
                    this.positionToSave.amount = Number.parseFloat(e.amountToken.toFixed(25)) ?? 0,
                    this.positionToSave.priceUsd = Number.parseFloat(e.priceUSD?.toFixed(25) ?? "0") ?? 0,
                    this.positionToSave.priceEth = Number.parseFloat(e.priceETH.toFixed(25)) ?? 0,
                    this.positionToSave.pair = this.pairSelected ?? "",
                    this.positionNeedSwap = !1,
                    this.togglePositionsPanel(!0)
                }
                openModal(e) {
                    switch (e) {
                    case "socialMedia":
                        {
                            const o = this.modalService.open(Se, {
                                centered: !0,
                                scrollable: !0
                            });
                            o.componentInstance.tokenData = this.tokenData,
                            o.componentInstance.iframeWidget = this.iframeWidget,
                            this.loadSocialShare(),
                            (0,
                            rt.D)(o.result).subscribe({
                                next: ()=>{
                                    this.removeSocialShare()
                                }
                                ,
                                error: ()=>{
                                    this.removeSocialShare()
                                }
                            });
                            break
                        }
                    case "velox":
                        if (!this.isMobileDevice() || !this.userAccess) {
                            const o = this.modalService.open(Lt, {
                                centered: !0,
                                scrollable: !0,
                                size: "xl",
                                windowClass: "wide-modal"
                            }).componentInstance;
                            o.user_access = this.userAccess,
                            o.veloxUrl = this.veloxUrl
                        }
                        break;
                    case "scamVelox":
                        {
                            const a = this.modalService.open(Le, {
                                centered: !0,
                                scrollable: !0
                            }).componentInstance;
                            a.tokenData = this.tokenData,
                            a.href = this.veloxUrl,
                            a.userAccess = this.userAccess,
                            a.isMobileDevice = this.isMobileDevice(),
                            a.screenWidth = this.screenWidth;
                            break
                        }
                    case "linksSocial":
                        {
                            const a = this.modalService.open($e.j, {
                                centered: !0,
                                scrollable: !0
                            }).componentInstance;
                            a.tokenData = this.tokenData,
                            a.unicrypt = this.getUnicryptUrl() ?? void 0,
                            a.teamLockUrl = this.tokenData?.id && this.tokenData?.symbol && this.tokenData?.name ? "https://team.finance/view-coin/" + this.toChecksumAddress(this.tokenData.id) + "?name=" + s.LC.safeText(this.tokenData.name, 20) + "&symbol=" + s.LC.safeText(this.tokenData.symbol, 20) : "",
                            a.isDarkTheme = this.isDarkTheme,
                            a.showMetamaskIcon = this.showMetamaskIcon,
                            a.coingeckoLink = this.coingeckoLink,
                            a.bubbleMapsLink = this.isBubbleMapsSupported ? "https://app.bubblemaps.io/" + c.LR_[this.chain] + "/token/" + this.toChecksumAddress(this.tokenData.id) : null,
                            a.chain = this.chain,
                            a.cmcTokenLink = this.cmcTokenLink,
                            a.dxSaleLink = this.isDxSaleSupported && this.pairSelected ? "https://dx.app/dxlockview?id=0&add=" + this.toChecksumAddress(this.pairSelected) + "&type=lplock&chain=" + c.nm_[this.chain] : null,
                            a.mudraLink = this.isMudraSupported ? `https://mudra.website/?certificate=yes&type=0&lp=${this.pairSelected}` : null,
                            a.pairSelected = this.pairSelected;
                            break
                        }
                    default:
                        break;
                    case "socialIcons":
                        this.modalService.open(Ve.e, {
                            centered: !0,
                            scrollable: !0
                        })
                    }
                }
                getRowCellClass(e) {
                    return `${(e.row ?? e).type}-color`
                }
                checkWalletInfo(e, o="color") {
                    if (e && this._storageWallets)
                        return e = c.CXF.getMakerFormatByChain(e, this.chain),
                        "color" === o ? this._walletsService.checkWallet(e, this._storageWallets, "color") || "" : this._walletsService.checkWallet(e, this._storageWallets, "user")
                }
                viewWallet(e) {
                    this.walletToSee = this.walletToSee === e ? null : e
                }
                closeTeamSellAlert() {
                    this.canShowTeamSellAlert = !1,
                    this._cdRef.detectChanges()
                }
                closeCommunityVotedScamAlert() {
                    this.canShowCommunityVotedScamAlert = !1
                }
                toggleBotFiltered() {
                    this.botFiltered = !this.botFiltered,
                    this._cdRef.detectChanges()
                }
                isMobileDevice() {
                    return s.lM.isMobileDevice()
                }
                loadSocialShare() {
                    this._scriptsLoader.loadScript({
                        src: "assets/vendors/share-buttons/src/share-buttons.js",
                        name: "share-buttons"
                    }).pipe((0,
                    K.K)(o=>(0,
                    Q.of)(o))).subscribe()
                }
                removeSocialShare() {
                    this._scriptsLoader.removeScript({
                        src: "assets/vendors/share-buttons/src/share-buttons.js",
                        name: "share-buttons"
                    }).pipe((0,
                    K.K)(o=>(0,
                    Q.of)(o))).subscribe()
                }
                toChecksumAddress(e) {
                    return c.LJP.checkIsEVMAddress(e, this.chain) ? this._web3UtilsService.toChecksumAddress(e) : e
                }
                _recalculate() {
                    null != this.summaryTable && (0,
                    X.H)(20).subscribe(()=>{
                        this.summaryTable.recalculate()
                    }
                    ),
                    this.screenWidth = window.innerWidth
                }
                _checkHotPairs(e) {
                    this.isHotPair = e.find(o=>o.id === this.pairSelected) ?? null,
                    this._cdRef.detectChanges()
                }
                vote(e, o) {
                    this._pairService.vote(this.exchange, this.chain, e, o).pipe((0,
                    M.b)(()=>{
                        o === w.NO_VOTE ? this._voteService.remove(this.userId, e) : this._voteService.save(this.userId, e, o),
                        this._fetchAllPairDataUnsubscribe$.next(),
                        this._fetchPoolData(this.pairSelected, !0)
                    }
                    )).subscribe()
                }
                _pairSubscribe(e) {
                    var o = this;
                    this._transactionsBuffer = [],
                    this._webSocketService.listenWebSocket(`${this._chainData.chainPrefix}:pair:${e}`, {
                        chain: this.chain
                    }).pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    I.h)(a=>"swaps" === a.event), (0,
                    I.h)(a=>a.id === this.pairSelected && !!a.swaps), (0,
                    ct.U)(a=>a.swaps), (0,
                    At.e)(500), (0,
                    ct.U)(a=>{
                        const r = a.flat();
                        return c.YQQ.filterBuysSellsOnly(r)
                    }
                    ), (0,
                    I.h)(a=>a.length > 0), (0,
                    M.b)(function() {
                        var a = (0,
                        at.Z)(function*(r) {
                            o.newTransactions$.next(),
                            o.loader ? o._transactionsBuffer = [...o._transactionsBuffer, ...r] : yield o._processLiveSwaps(r)
                        });
                        return function(r) {
                            return a.apply(this, arguments)
                        }
                    }())).subscribe({
                        error: a=>{
                            console.error("PairExplorer: could not connect to real-time data source", a),
                            this._isPairLoaded$.next(!0)
                        }
                    })
                }
                _processLiveSwaps(e) {
                    var o = this;
                    return (0,
                    at.Z)(function*() {
                        if (o._addSwaps(e, !0),
                        o._candlesVariation && o._candlesVariation.addSwaps(e),
                        o.candlesData) {
                            const a = yield o._candlesDataService.updateWithLiveSwaps(o.candlesData, e, !!o.isCandleNormalizationEnabled);
                            a && a.length > 0 && o.emitLiveCandles(a)
                        }
                        o._emitLatestPrice()
                    })()
                }
                _retryTxCall(e) {
                    (0,
                    X.H)(e).pipe((0,
                    O.R)(this._unsubscribePairData$)).subscribe(()=>this.initialRequest())
                }
                addTokenMetamask(e) {
                    c.i6H.addToMetamask(e.id, e.symbol, e.decimals, e.logo)
                }
                updateAudit() {
                    this.tokenData.id && this.pairSelected && (this.isUpdatingAudit = !0,
                    this._tokenService.updateAudit(this.chain, this.tokenData.id, !!this.tokenAudit).pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    I.h)(e=>!!e), (0,
                    M.b)(e=>{
                        this.tokenAudit = {
                            ...e
                        },
                        this._setAnalysisTransactionsResults()
                    }
                    ), (0,
                    Zt.x)(()=>this.isUpdatingAudit = !1)).subscribe())
                }
                getDailyVolume() {
                    return this.volumeVariation24h
                }
                getChainName() {
                    return this._chainData.chainName
                }
                _addSwaps(e, o=!1) {
                    if (0 !== e.length)
                        if (this.dataTransactions.length > 0 && e.some(a=>a.timestamp < this.dataTransactions[this.dataTransactions.length - 1].timestamp)) {
                            const a = [...this.dataTransactions, ...e].sort((r,l)=>r.timestamp === l.timestamp ? r.logIndex - l.logIndex : r.timestamp - l.timestamp);
                            this._saveSwaps(a, o)
                        } else
                            this._saveSwaps(e, o)
                }
                getUnicryptUrl() {
                    const e = c.i9O.getExchangeUnicryptUrl(this.tokenData.exchange || c.ibW, this.chain);
                    return e && `${e}${this.pairSelected}`
                }
                onPairSelected(e) {
                    if (e.middleButton)
                        this._routingService.windowNavigate(`/${e.item.chain}/${A.$.PairExplorer}/${e.item.id}`, "_blank", "noopener");
                    else {
                        const a = this._routingService.getCurrentScrollTopPosition(".favs-container") || {};
                        this._changeVisiblePair(e.item.id, e.item.chain, a)
                    }
                }
                onRowActivated(e) {
                    "click" === e.type && !this.filteredTxByWallet && (1 === this.dataTransactionsSelected.length && this.dataTransactionsSelected[0] === e.row ? (this.dataTransactionsSelected = [],
                    this._pairTV?.widgetInstance?.chart().clearMarks()) : (this._pairTV?.widgetInstance?.chart().clearMarks(),
                    this.dataTransactionsSelected = [e.row],
                    this._pairTV?.widgetInstance?.chart().refreshMarks()))
                }
                onHotPairSelected(e) {
                    const o = this._routingService.getCurrentScrollTopPosition(".favs-container") || {};
                    this._changeVisiblePair(e.pair.id, e.pair.chain, o)
                }
                _shouldShowScamAlert() {
                    return !this.noTransactions && (this.dextScore.value < 10 && this.dextScoreReady || this.scamWarningType > 2 || this.isCommunityVotedScam() > 2)
                }
                shouldShowAggregatorScamAlert() {
                    return (!this._aggregatorScamAlertAlreadyAccepted || this._aggregatorScamAlertToken !== this.tokenData.id) && this._shouldShowScamAlert()
                }
                getTradeUrl(e, o) {
                    return null == this.exchange ? "#" : c.i9O.getExchangeSwapUrl(this.chain, this.exchange, this.exchangeVersion ?? "", e, o)
                }
                toggleFavorites() {
                    this.hiddenFavorites = !this.hiddenFavorites,
                    s._Z.merge("configApp", {
                        hiddenFavorites: this.hiddenFavorites
                    }),
                    this._recalculate(),
                    this._cdRef.detectChanges()
                }
                openAggregator(e) {
                    e === c.iU1.BUY ? (this.showAggregatorBuy = !0,
                    this.showAggregatorSell = !1) : (this.showAggregatorSell = !0,
                    this.showAggregatorBuy = !1),
                    this.setAggregatorData(e),
                    s._Z.setString(yt, "open"),
                    this._cdRef.detectChanges()
                }
                closeAggregator(e) {
                    e === c.iU1.BUY ? this.showAggregatorBuy = !1 : this.showAggregatorSell = !1,
                    s._Z.setString(yt, "closed"),
                    this._cdRef.detectChanges()
                }
                setAggregatorData(e=c.iU1.BUY) {
                    this.alternativeExchange = {
                        name: this.exchange ?? "",
                        url: this.getTradeUrl(this.tokenData.id, e)
                    },
                    this.aggregatorScanner = {
                        name: this._chainScannerData.name,
                        url: this._chainScannerData.url
                    },
                    this._cdRef.detectChanges()
                }
                openSettingsPanel() {
                    this.toggleSettingsPanel = !0,
                    this._cdRef.detectChanges()
                }
                closeSettingsPanel() {
                    this.toggleSettingsPanel = !1,
                    this._cdRef.detectChanges()
                }
                switchChain(e) {
                    this._exchangeService.chain = e.value
                }
                _addFooterNavigation() {
                    this.isTabletOrMobile && !this._footerTabsContent ? ("" !== this.tabEnabledViaUrl ? this.footerNavigationTab = "market" : this.aggregatorEnabledViaUrl ? (this.footerNavigationTab = "swap",
                    this.aggregatorEnabledViaUrl = !1) : "" === this.footerNavigationTab && (this.footerNavigationTab = "market"),
                    this._footerTabsContent = this._footerContentService.addContent(Je),
                    this._footerTabsContent.componentInstance.tabSelected = this.footerNavigationTab,
                    this._footerTabsContent.componentInstance.footerTabs = this._footerTabs,
                    this._footerTabsContent.componentInstance.tabSelectedChange.pipe((0,
                    s.sL)(this)).subscribe(e=>this.tabSelectedChange(e))) : "desktop" === this.mediaDevice && this._footerTabsContent && this._removeFooterNavigation()
                }
                _removeFooterNavigation() {
                    null != this._footerTabsContent && (this._footerTabsContent.removeContentFn(),
                    this._footerTabsContent = null)
                }
                tabSelectedChange(e) {
                    const o = this.footerNavigationTab;
                    if (this.footerNavigationTab = e,
                    window.scrollTo(0, 0),
                    "swap" === e) {
                        if (this.setEventGA(this.tokenData.id),
                        this._updateScamAdviceVisibility(),
                        this.isAggregatorSupportedInCurrentChain)
                            return void this.openAggregator(c.iU1.BUY);
                        "#" === this.alternativeExchange.url ? this.noAggregatorActive = !0 : (this._updateScamAdviceVisibility(),
                        this.aggregatorScamAdvice.show || (this.footerNavigationTab = o,
                        this._footerTabsContent.componentInstance.tabSelected = this.footerNavigationTab,
                        this.openExchangeSwap()))
                    }
                    this._cdRef.detectChanges()
                }
                isPageAvailableInChain(e, o) {
                    return gt.c.isPageAvailableInChain(e, o)
                }
                changeLayout(e) {
                    switch (this._updateScamAdviceVisibility(),
                    this.scamAdvice.show && (this.showAggregatorSell ? (this.scamAdvice.typeAdvice = "sell",
                    this.aggregatorScamAdvice.typeAdvice = "sell") : (this.scamAdvice.typeAdvice = "buy",
                    this.aggregatorScamAdvice.typeAdvice = "buy")),
                    e) {
                    case S.default:
                        this.isLayoutFlipped = !1,
                        this.isColumnFirst = !1,
                        this.isFullScreen = !1,
                        this.showFavoritesColumn = this.layoutOptions.showFavorites,
                        s._Z.setString(ot, S.default),
                        this.noAggregatorActive = this.showNoAggregator();
                        break;
                    case S.flipped:
                        this.isLayoutFlipped = !0,
                        this.isColumnFirst = !1,
                        this.isFullScreen = !1,
                        this.showFavoritesColumn = this.layoutOptions.showFavorites,
                        s._Z.setString(ot, S.flipped),
                        this.noAggregatorActive = this.showNoAggregator();
                        break;
                    case S.columns:
                        this.isLayoutFlipped = !0,
                        this.isColumnFirst = !0,
                        this.isFullScreen = !1,
                        s._Z.setString(ot, S.columns),
                        this.showFavoritesColumn = this.layoutOptions.showFavorites,
                        this.noAggregatorActive = this.showNoAggregator();
                        break;
                    case S.fullScreen:
                        this.isLayoutFlipped = !1,
                        this.isColumnFirst = !1,
                        this.isFullScreen = !0,
                        this.showFavoritesColumn = !1,
                        s._Z.setString(ot, S.fullScreen),
                        this.isSwapSelected && this.isAggregatorSupportedInCurrentChain || this.showSwapButton && this.isAggregatorSupportedInCurrentChain ? this.openAggregator(this.showAggregatorSell ? c.iU1.SELL : c.iU1.BUY) : this.closeAggregator(this.showAggregatorSell ? c.iU1.SELL : c.iU1.BUY),
                        this.isAggregatorSupportedInCurrentChain && (this.isSwapSelected || this.showAggregatorSell || this.showAggregatorBuy || this.scamAdvice.show) || this.isSwapSelected || (this.scamAdvice.show = !1,
                        this.noAggregatorActive = !1),
                        this.isSwapSelected && !this.isAggregatorSupportedInCurrentChain && (this.aggregatorScamAdvice.show = !1,
                        this.noAggregatorActive = !1)
                    }
                }
                toggleUserMenu() {
                    this.userId ? (this.showUserMenu = !this.showUserMenu,
                    this._cdRef.detectChanges()) : this.goToUserAccount()
                }
                goToUserAccount() {
                    this._routingService.navigate("/user/account")
                }
                toggleSideMenu() {
                    this._sideMenuService.toggleMenu()
                }
                _setSideMenu() {
                    this._unsubscribeMenuToggle$.next(),
                    !this._sideMenuService && this.isTabletOrMobile && (this._sideMenuService = this._injector.get(Ue.E),
                    this._sideMenuService.toggleMenuObs.pipe((0,
                    O.R)(this._unsubscribeMenuToggle$), (0,
                    M.b)(e=>this.showMenu = e)).subscribe())
                }
                _setUserData() {
                    const e = this._authenticationService.getCurrentUserValue();
                    this.isUserConnected = !!e,
                    this.role = e?.plan ?? "",
                    this.dextAmount = e?.dext ?? 0,
                    e && [f.uU.P100, f.uU.P20].includes(e.plan) ? (this.alertsStatus = this._priceAlertsService.getAlertStatus(),
                    this.userAccess = !0,
                    this.isAdmin = e.isAdmin,
                    this.isSuperAdmin = e.isSuperAdmin) : this.userAccess = !1,
                    this.userId = e?.id ?? "",
                    !this.userId && this.showUserMenu && (this.showUserMenu = !1),
                    this._updateTableTabs("positions", {
                        isDisabled: !this.currentFav || !this.userAccess,
                        selected: !!this.currentFav && this.userAccess && "positions" === this.tabSelected,
                        tooltip: this.userAccess ? this.currentFav ? void 0 : "pair_explorer.add_pair_favorites" : "pair_explorer.only_subscribed_positions"
                    }),
                    this._updateTableTabs("my-swaps", {
                        isDisabled: !this.userAccess,
                        selected: this.userAccess && "my-swaps" === this.tabSelected,
                        tooltip: this.userAccess ? void 0 : "pair_explorer.my_swaps_disabled"
                    }),
                    this._cdRef.detectChanges()
                }
                showLayoutTooltip(e=!1) {
                    this.showLayoutOptions = e || !this.showLayoutOptions,
                    this._cdRef.detectChanges()
                }
                changeLayoutOptions(e) {
                    const {type: o, value: a} = e;
                    switch (o) {
                    case "layoutType":
                        this.layoutOptions.layoutType = a,
                        this.changeLayout(a);
                        break;
                    case "poolInfo":
                        this.layoutOptions.showPoolInfo = !this.layoutOptions.showPoolInfo,
                        this.showPoolInfo = !this.showPoolInfo,
                        this.layoutOptions.showPoolInfo ? (this.isPoolSelected = !0,
                        this.isSwapSelected = !1,
                        this.isDextSelected = !1,
                        s._Z.merge("configApp", {
                            selectedTab: T.poolInfo
                        })) : !this.layoutOptions.showPoolInfo && !this.layoutOptions.showSwapButton && (this.isSwapSelected = !0,
                        this.isPoolSelected = !1,
                        s._Z.merge("configApp", {
                            selectedTab: T.swap
                        })),
                        this._updatePoolSwapTab("poolInfo", {
                            isHidden: !this.showPoolInfo
                        });
                        break;
                    case "swapButton":
                        this.layoutOptions.showSwapButton = !this.layoutOptions.showSwapButton,
                        this.showSwapButton = !this.showSwapButton,
                        this.showSwapTab = !this.showSwapButton,
                        this._updateScamAdviceVisibility(),
                        this.showSwapTab && (this.isSwapSelected = !0,
                        this.isPoolSelected = !1,
                        this.isDextSelected = !1,
                        this.noAggregatorActive = this.showNoAggregator(),
                        this.aggregatorScamAdvice.show && (this.showAggregatorSell ? (this.scamAdvice.typeAdvice = "sell",
                        this.aggregatorScamAdvice.typeAdvice = "sell") : (this.scamAdvice.typeAdvice = "buy",
                        this.aggregatorScamAdvice.typeAdvice = "buy")),
                        s._Z.merge("configApp", {
                            selectedTab: T.swap
                        })),
                        !this.showSwapTab && this.isSwapSelected && (this.isAggregatorSupportedInCurrentChain ? this.openAggregator(this.showAggregatorSell ? c.iU1.SELL : c.iU1.BUY) : this.closeAggregator(this.showAggregatorSell ? c.iU1.SELL : c.iU1.BUY),
                        this.isAggregatorSupportedInCurrentChain || (this.noAggregatorActive = this.showNoAggregator()),
                        this._updateScamAdviceVisibility()),
                        this.isSwapSelected || this.showSwapTab || !this.isAggregatorSupportedInCurrentChain ? !this.isSwapSelected && !this.showSwapTab && !this.isAggregatorSupportedInCurrentChain && (this.noAggregatorActive = !1,
                        this.aggregatorScamAdvice.show = !1) : (this.closeAggregator(this.showAggregatorSell ? c.iU1.SELL : c.iU1.BUY),
                        this.aggregatorScamAdvice.show = !1),
                        !this.showSwapTab && this.layoutOptions.showPoolInfo ? (this.isSwapSelected = !1,
                        this.isPoolSelected = !0,
                        this.isDextSelected = !1,
                        s._Z.merge("configApp", {
                            selectedTab: T.poolInfo
                        })) : this.showSwapTab || s._Z.merge("configApp", {
                            selectedTab: T.poolInfo
                        }),
                        this._updatePoolSwapTab("swap", {
                            isHidden: !this.showSwapTab
                        })
                    }
                    s._Z.merge("configApp", {
                        layoutOptions: this.layoutOptions
                    }),
                    this._cdRef.detectChanges()
                }
                changeVisibilityPoolSwap(e) {
                    switch (e) {
                    case T.swap:
                        this.isSwapSelected = !0,
                        this.isPoolSelected = !1,
                        this.isDextSelected = !1,
                        this._updateScamAdviceVisibility();
                        break;
                    case T.poolInfo:
                        this.isSwapSelected = !1,
                        this.isPoolSelected = !0,
                        this.isDextSelected = !1
                    }
                    s._Z.merge("configApp", {
                        selectedTab: e
                    }),
                    this._cdRef.detectChanges()
                }
                _setAnalysisTransactionsResults() {
                    !this._transactionsAnalysisSuccessful && !this.tokenData?.whitelisted && (this.dextScore = {
                        ...this.dextScore,
                        value: 0 === this.dextScore.value ? 0 : 1,
                        color: "#ea3943"
                    },
                    this.tokenAudit && this.isDangerWarningTransactionsAnalysis && (this.tokenAudit = {
                        ...this.tokenAudit,
                        lockTransactions: !0
                    }))
                }
                get _transactionsAnalysisSuccessful() {
                    if (this.dextScoreReady && this.dataTransactions && this.dataTransactions.length > 0 && this._percentSuccess && this._analysisResultPercent) {
                        const e = new Date;
                        let o = this._percentSuccess;
                        return e.setDate(e.getDate() - 1),
                        e.getTime() < new Date(1e3 * this.dataTransactions[0].timestamp).getTime() && (o -= 1),
                        this.chartOptionsDextScore.series[0] <= 1 && (o -= 2),
                        !(this._analysisResultPercent >= o)
                    }
                    return !0
                }
                get isDangerWarningTransactionsAnalysis() {
                    return !this._transactionsAnalysisSuccessful && (!1 === this.tokenAudit?.codeVerified || this._isOnlyBuySwaps) && !this.tokenData?.whitelisted
                }
                get isAlertWarningTransactionsAnalysis() {
                    return !this._transactionsAnalysisSuccessful && !this._isOnlyBuySwaps && (null == this.tokenAudit?.codeVerified || this.tokenAudit?.codeVerified) && !this.tokenData?.whitelisted
                }
                get isLimitBotSupported() {
                    return c.i9O.getExchangeLimitBotSupported(this.exchange, this.chain)
                }
                hasFeePercentagePools(e) {
                    return c.i9O.hasExchangeFeePercentagePools(e, this.exchangeVersion, this.chain)
                }
                showBlockNoAggregator() {
                    this.noAggregatorActive = !this.noAggregatorActive
                }
                showNoAggregator() {
                    return this.hideAggregatorWithSlug || !this.isAggregatorSupportedInCurrentChain && "#" === this.getTradeUrl(this.tokenData.id, c.iU1.BUY) || !this.isAggregatorSupportedInCurrentChain && !this.isFullScreen && !this.showSwapButton
                }
                showAggregatorScamInfo(e) {
                    this.aggregatorScamAdvice.show = !0,
                    this.aggregatorScamAdvice.typeAdvice = e
                }
                hideAggregatorScamInfo() {
                    this.aggregatorScamAdvice.show = !1,
                    this.closeAggregator("sell" === this.aggregatorScamAdvice.typeAdvice ? c.iU1.SELL : c.iU1.BUY),
                    this.aggregatorScamAdvice.typeAdvice = ""
                }
                goTradeExchange() {
                    let e;
                    const o = this.tokenData.id;
                    switch (this._aggregatorScamAlertAlreadyAccepted = !0,
                    this._aggregatorScamAlertToken = o,
                    this.aggregatorScamAdvice.typeAdvice) {
                    case "buy":
                        if (this.isAggregatorSupportedInCurrentChain)
                            return this.setEventGA(o),
                            this.openAggregator(c.iU1.BUY),
                            void (this.aggregatorScamAdvice.show = !1);
                        if ((this.isFullScreen || this.showSwapButton) && (this.aggregatorScamAdvice.show = !1),
                        e = this.getTradeUrl(o, c.iU1.BUY),
                        "#" === e)
                            return this.aggregatorScamAdvice.show = !1,
                            void (this.noAggregatorActive = !0);
                        this.setEventGA(o),
                        this.toggleTradeExternalModal(!0);
                        break;
                    case "sell":
                        if (this.isAggregatorSupportedInCurrentChain)
                            return this.setEventGA(o),
                            this.openAggregator(c.iU1.BUY),
                            void (this.aggregatorScamAdvice.show = !1);
                        if ((this.isFullScreen || this.showSwapButton) && (this.aggregatorScamAdvice.show = !1),
                        e = this.getTradeUrl(o, c.iU1.SELL),
                        "#" === e)
                            return this.aggregatorScamAdvice.show = !1,
                            void (this.noAggregatorActive = !0);
                        this.setEventGA(o),
                        this.toggleTradeExternalModal(!0)
                    }
                }
                getWalletTransactions() {
                    this.mySwapsLoading = !0,
                    this.userAccess && this._exchangeApiAdapter.getWalletTransactions(this.pairSelected).pipe((0,
                    O.R)(this._unsubscribePairData$), (0,
                    Zt.x)(()=>{
                        this.mySwapsLoading = !1,
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    M.b)(e=>{
                        if (this.walletTransactions = e.map(o=>(o.amountUSD = o.price ? (this.tokenData.isStableNativePair ? o.amountRef : o.amountToken) * o.price : 0,
                        o)),
                        this.walletTransactions && this.walletTransactions.length > 0) {
                            const o = this.checkWalletInfo(this.walletTransactions[0].maker && c.CXF.getMakerFormatByChain(this.walletTransactions[0].maker, this.chain));
                            this.walletTransactions[0].walletSaved = o ? {
                                name: this.checkWalletInfo(this.walletTransactions[0].maker, "user"),
                                color: o
                            } : void 0,
                            this.walletTransactionsSummary = [{
                                ...this.walletTransactions[0],
                                ...ut(this.walletTransactions)
                            }],
                            this._pairTV?.widgetInstance?.onChartReady(()=>{
                                this._setMySwapsMarked()
                            }
                            )
                        }
                        this.walletTransactionsLoaded = !0,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe()
                }
                _setMySwapsMarked() {
                    this.dataTransactionsSelected = [],
                    this.filteredTxByWallet = !1,
                    this.markedWallet = void 0,
                    this._pairTV?.widgetInstance?.chart().clearMarks(),
                    this.dataTransactionsSelected = [...this.walletTransactions],
                    this._pairTV?.widgetInstance?.chart().refreshMarks()
                }
                getScannerName() {
                    return this._chainScannerData.name
                }
                _recreateTokenData() {
                    this.tokenData = {
                        ...this.tokenData
                    }
                }
                _recreateTokenVotes() {
                    this.tokenVotes = {
                        ...this.tokenVotes
                    }
                }
                pairSearchToken(e) {
                    if (this.closePanelEnabled = !0,
                    "no results" === e)
                        this._routingService.navigate(`/${this.chain}/${A.$.LiveNewPairs}`);
                    else if ("close" !== e)
                        if (this.pairSelected)
                            if (this.pairSelected !== e.id && this.autoSelectFirstPair) {
                                const o = this._routingService.getCurrentScrollTopPosition(".favs-container") || {};
                                this._routingService.reloadRoute(`/${this.chain}/${A.$.PairExplorer}/${e.id}`, {
                                    state: {
                                        ...o.state,
                                        toggleSearchToken: !0
                                    },
                                    replaceUrl: !0
                                })
                            } else
                                this.pairSelected !== e.id && this._changeVisiblePair(e.id, this.chain);
                        else
                            this._changeVisiblePair(e.id, this.chain)
                }
                autoSelectedSinglePair(e) {
                    this.closePanelEnabled = !0,
                    this.pairSelected !== e.id && this._changeVisiblePair(e.id, this.chain)
                }
                _getCandlesCalculationVariations(e) {
                    const o = Date.now();
                    this._chartService.getCandles(this.chain, e, "usd", "15", o - 8 * s.HR, o).pipe((0,
                    O.R)(this._unsubscribePairData$)).subscribe(({rawCandles: l})=>{
                        this._candlesVariation = new c.PWx(l,[{
                            interval: "1440",
                            types: ["price", "volume"]
                        }, {
                            interval: "10080",
                            types: ["price", "volume"]
                        }],this.chain,this.tokenData.symbol),
                        this._candlesVariation.variationsUpdated$.pipe((0,
                        O.R)(this._unsubscribePairData$)).subscribe(()=>{
                            this.priceVariationWeek = this._candlesVariation.priceVariation7Days,
                            this.volumeVariationWeek = this._candlesVariation.volumeVariation7days,
                            this.priceVariation24h = this._candlesVariation.priceVariation24h,
                            this.volumeVariation24h = this._candlesVariation.volumeVariation24h,
                            this.volumeChecked = !0
                        }
                        )
                    }
                    )
                }
                openExchangeSwap() {
                    !this.isIOS && this.isPageAvailableInChain(A.$.Multiswap, this.chain) ? this.toggleExchangePanel(!0) : window.open(this.alternativeExchange.url, "_blank", "noopener")
                }
                toggleExchangePanel(e) {
                    this.showPanelExchange = e,
                    this._cdRef.detectChanges()
                }
                toggleTradeExternalModal(e) {
                    this.showTradeExternalModal = e,
                    this._cdRef.detectChanges()
                }
                toggleSearchMobile(e) {
                    this.isSearchMobile = e,
                    this._cdRef.detectChanges()
                }
                toggleMobileCollapsed() {
                    this.mobileCollapsed = !this.mobileCollapsed,
                    this._cdRef.detectChanges()
                }
                toggleSocialMediaPanel(e) {
                    this.showSharePanel = e,
                    this._cdRef.detectChanges()
                }
                getFullPriceUSD(e) {
                    return void 0 !== e ? s.C6.toFixed(e) : ""
                }
                showLinksPanel(e) {
                    this.showSocialPanel = e,
                    this._cdRef.detectChanges()
                }
                getDataLinks() {
                    return {
                        unicrypt: this.getUnicryptUrl() ?? void 0,
                        teamLockUrl: this.tokenData?.id && this.tokenData?.symbol && this.tokenData?.name ? "https://team.finance/view-coin/" + this.toChecksumAddress(this.tokenData.id) + "?name=" + s.LC.safeText(this.tokenData.name, 20) + "&symbol=" + s.LC.safeText(this.tokenData.symbol, 20) : "",
                        showMetamaskIcon: this.showMetamaskIcon,
                        coingeckoLink: this.coingeckoLink,
                        bubbleMapsLink: this.isBubbleMapsSupported ? "https://app.bubblemaps.io/" + c.LR_[this.chain] + "/token/" + this.toChecksumAddress(this.tokenData.id) : null,
                        chain: this.chain,
                        cmcTokenLink: this.cmcTokenLink,
                        dxSaleLink: this.isDxSaleSupported && this.pairSelected ? "https://dx.app/dxlockview?id=0&add=" + this.toChecksumAddress(this.pairSelected) + "&type=lplock&chain=" + c.nm_[this.chain] : null,
                        mudraLink: this.isMudraSupported ? `https://mudra.website/?certificate=yes&type=0&lp=${this.pairSelected}` : null,
                        pairSelected: this.pairSelected
                    }
                }
                setSocialElementsActive(e, o) {
                    return -1 === this.socialActiveHTML.indexOf(e) && this.socialActiveHTML.length < 5 && o ? (this.socialActiveHTML.push(e),
                    !0) : -1 !== this.socialActiveHTML.indexOf(e)
                }
                reloadIframe() {
                    var e = this;
                    return (0,
                    at.Z)(function*() {
                        e.reloadIframe$.next(),
                        e._cdRef.detectChanges()
                    })()
                }
                changeBinocularsType(e) {
                    this.fullScreenPanel = "full" === e
                }
                openBinocularsPanel() {
                    this.toggleSearchToken = !0,
                    this._cdRef.detectChanges()
                }
                closeBinocularsPanel() {
                    this.toggleSearchToken = !1,
                    this.closePanelEnabled = !1,
                    this.fullScreenPanel = !1,
                    this.autoSelectFirstPair = !1,
                    this._cdRef.detectChanges()
                }
                get viewScanHoneypotOnCurrentChain() {
                    return [c.qop.Ethereum, c.qop.Binance, c.qop.Polygon, c.qop.Fantom, c.qop.Arbitrum, c.qop.Harmony, c.qop.Kucoin, c.qop.Avalanche, c.qop.Cronos, c.qop.Oasis].includes(this.chain)
                }
                emitLiveCandles(e) {
                    this.latestCandles.next(e),
                    this.latestCandles.next([])
                }
                _createTabs() {
                    this.tableTabsOptions = [{
                        id: "history",
                        name: "pair_explorer.trade_history"
                    }, {
                        id: "holders",
                        name: "pair_explorer.holders",
                        isHidden: !this._goPlusHoldersChains()
                    }, {
                        id: "positions",
                        name: "pair_explorer.positions",
                        isDisabled: !this.currentFav || !this.userAccess,
                        tooltip: this.userAccess ? this.currentFav ? void 0 : "pair_explorer.add_pair_favorites" : "pair_explorer.only_subscribed_positions"
                    }, {
                        id: "price-alerts",
                        name: "pair_explorer.price_alert.tab",
                        isDisabled: !!this.shouldHidePriceAlerts || !this.currentFav,
                        tooltip: this.currentFav ? void 0 : "pair_explorer.add_pair_favorites"
                    }, {
                        id: "my-swaps",
                        name: "pair_explorer.my_swaps",
                        isDisabled: !this.userAccess || !!this.loader,
                        tooltip: this.userAccess ? void 0 : "pair_explorer.my_swaps_disabled",
                        isHidden: !this.isMySwapsAvailable
                    }],
                    this.poolSwapTabsOptions = [{
                        id: T.swap,
                        name: "pair_explorer.swap",
                        isHidden: !this.showSwapTab,
                        faIcon: "exchange-alt"
                    }, {
                        id: T.poolInfo,
                        name: "pair_explorer.pool_info",
                        isHidden: !this.showPoolInfo
                    }]
                }
                _updatePoolSwapTab(e, o) {
                    this.poolSwapTabsOptions = this.poolSwapTabsOptions.map(a=>a.id === e ? {
                        ...a,
                        ...o
                    } : a)
                }
                _updateTableTabs(e, o) {
                    this.tableTabsOptions = this.tableTabsOptions.map(a=>a.id === e ? {
                        ...a,
                        ...o
                    } : a)
                }
                openModalOrPanel() {
                    this.isTabletOrMobile ? this.toggleUpdateLinksPanel(!0) : this.openModal("socialIcons")
                }
                toggleUpdateLinksPanel(e) {
                    this.showUpdateLinksPanel = e,
                    this._cdRef.detectChanges()
                }
                copyToken(e="") {
                    (0,
                    P.vQ)(e),
                    this._showConfirmationMessage()
                }
                _showConfirmationMessage() {
                    const e = this._translate.instant("pair_explorer.copied");
                    this._toastr.success(e, void 0, {
                        closeButton: !0,
                        positionClass: "toast-bottom-right",
                        timeOut: 3e3
                    })
                }
                _checkType(e) {
                    return this.tokenData.isStableNativePair ? e === c.iU1.SELL ? c.iU1.BUY : c.iU1.SELL : e
                }
                _isLockSupportedInChain(e, o) {
                    switch (e) {
                    case "dxsale":
                        return null != c.nm_[o];
                    case "mudra":
                        return o === c.qop.Binance;
                    default:
                        return !1
                    }
                }
                _isBubblemapsSupportedInChain(e) {
                    return null != c.LR_[e]
                }
                countCharactersSymbol(e, o) {
                    return (e?.length ?? 0) + (o?.length ?? 0) > 8
                }
                _setSeoData() {
                    const e = this.seoTitle
                      , o = this.seoDescription;
                    this._seoService.setTitle(e);
                    const r = {
                        title: e,
                        description: o,
                        appUrl: `${this.chain}/${A.$.PairExplorer}`
                    }
                      , l = {
                        title: e,
                        description: o,
                        appUrl: `${this.chain}/${A.$.PairExplorer}`
                    };
                    this._seoService.setGeneralMetaTags({
                        title: e,
                        description: o
                    }),
                    this._seoService.setFacebookTags(r),
                    this._seoService.setTwitterTags(l),
                    this._isHotReloaded && this._lastAnalyticsTrackedPair !== this.pairSelected && (this._analyticsService.trackPage(this._routingService.setLanguageToURL(`/${this.chain}/${A.$.PairExplorer}/${this.pairSelected}`)),
                    this._lastAnalyticsTrackedPair = this.pairSelected ?? "")
                }
                get seoTitle() {
                    const e = this._isStableVsWrapper() ? this.tokenData.symbol_vs : this.tokenData.symbol
                      , o = this.isHotPair ? ` ${this._translate.instant("pair_explorer.seo.trending")} #${this.isHotPair.position}` : "";
                    return this._translate.instant("pair_explorer.seo.description", {
                        symbol: e,
                        price: this.tokenData.priceUSD.toFixed(this._optimalDecimalsUsd),
                        trending: o,
                        name: this.tokenData?.name ?? this.tokenData.symbol
                    })
                }
                get seoDescription() {
                    const e = this._isStableVsWrapper() ? this.tokenData.symbol_vs : this.tokenData.symbol;
                    let o = "";
                    if (this.liquidityLockList.length > 0) {
                        const a = [...new Set(this.liquidityLockList.map(r=>r.providerId))].join(",");
                        o = `${this._translate.instant("pair_explorer.seo.liquidity_locked")} ${a}`
                    }
                    return this._translate.instant("pair_explorer.seo.title", {
                        name: this.tokenData?.name ?? this.tokenData.symbol,
                        symbol: e,
                        locked: o,
                        scan: this._chainScannerData.name,
                        exchange: this.exchange
                    })
                }
                setLiquidityLockList(e) {
                    this.liquidityLockList = [...e]
                }
                _setMetadataSEOByDextscore() {
                    this._seoService.removeGeneralMetaTag("robots"),
                    this.dextScore.value < c.V41 && this._seoService.setGeneralMetaTags({
                        robots: "noindex"
                    })
                }
                openFullScreen(e) {
                    this.isTvFullScreen = e,
                    this._cdRef.detectChanges()
                }
                registerWidget(e, o) {
                    this._pairTV = {
                        componentInstance: o,
                        widgetInstance: e
                    },
                    this._updateTableTabs("my-swaps", {
                        isDisabled: !this.userAccess
                    }),
                    this._staticGenerationService.takeStaticPageSnapshot(5e3)
                }
                unregisterWidget(e) {
                    this._pairTV = {
                        componentInstance: e
                    }
                }
                onFavoriteSelected(e) {
                    this._changeVisiblePair(e, this.chain)
                }
                onPreviousSearchSelected(e) {
                    this._changeVisiblePair(e.address, e.chain)
                }
                _changeVisiblePair(e, o, a={}) {
                    e === this.pairSelected && o === this.chain || (this.chain === o ? (this.loader = !0,
                    this._restorePairExplorerData(e)) : this._routingService.reloadRoute(`/${o}/${A.$.PairExplorer}/${e}`, a))
                }
                _updateScamAdviceVisibility() {
                    this.scamAdvice.show = this._shouldShowScamAlert(),
                    this.aggregatorScamAdvice.show = this.shouldShowAggregatorScamAlert()
                }
                _clearTimeOutLiquidity() {
                    clearTimeout(this.liquidityTimeout),
                    this.noLiquidity = !1
                }
                _populateIntervalData(e) {
                    this.tokenData.price = e.price,
                    this.tokenData.price5m = e.price5m,
                    this.tokenData.price1h = e.price1h,
                    this.tokenData.price6h = e.price6h,
                    this.tokenData.price24h = e.price24h
                }
                onIntervalChange(e) {
                    this.interval = e,
                    this.variationData = "7d" !== e ? {
                        ...this.tokenData[`price ${e}`],
                        priceVariation: this.tokenData[`price ${e}`] ? this._pairListService.getPriceVariation(this.tokenData.price, this.tokenData[`price ${e}`].price) : null
                    } : {
                        volume: this.volumeVariationWeek,
                        priceVariation: this.priceVariationWeek
                    },
                    this._cdRef.detectChanges()
                }
                get isTabletOrMobile() {
                    return "mobile" === this.mediaDevice || "tablet" === this.mediaDevice
                }
                showSocialIcons() {
                    return this.hiddenFavorites && !this.xsActive || !this.hiddenFavorites && !this.isFullScreen && !this.screenWidthBetween1400And1575
                }
                get scannerTokenId() {
                    return this.tokenData?.id ? this.chain !== c.qop.Aptos ? this.tokenData.id : c.LJP.normalizeAptosTokenId(this.tokenData.id) : ""
                }
                getFavData() {
                    const e = this.tokenData.symbol ?? ""
                      , o = this.tokenData.symbol_vs ?? "";
                    return {
                        pair: this.pairSelected,
                        chain: this.chain,
                        exchange: c.i9O.getExchangeApiFromExchange(this.exchange, this.chain),
                        symbol: e ?? "",
                        logo: this.tokenData.logo ?? "",
                        name: e ?? "",
                        isStableNativePair: this.tokenData.isStableNativePair ?? !1,
                        symbolRef: o ?? "",
                        price: this.tokenData.price ?? 0,
                        price24h: this.tokenData.price24h,
                        updatedAt: Date.now(),
                        createdAt: Date.now()
                    }
                }
                get iframeWidget() {
                    return `<iframe id="dextools-widget"\n    title="DEXTools Trading Chart"\n    width="500"\n    height="400" src="https://www.dextools.io/widget-chart/${this._settingsService.language}/${this.chain}/pe-light/${this.pairSelected}?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>`
                }
                chainIdTokenSniffer() {
                    return c.Yre[this.chain]
                }
                staySafuAudit() {
                    return [c.qop.Binance].includes(this.chain)
                }
                chainIdQuickIntel() {
                    return c.yth[this.chain]
                }
                _restoreRealTimeData() {
                    if (this.pairSelected) {
                        this.loader = !0;
                        const e = this.pairSelected;
                        this._pairSelected$.next(null),
                        this.publicAddress = null,
                        this._restorePairExplorerData(e)
                    }
                }
                _restorePairExplorerData(e) {
                    this._loader$.next(this.loader),
                    this.closeBinocularsPanel(),
                    this._clearTimeOutLiquidity(),
                    this._restartInfo(),
                    this._unsubscribePairData$.next(),
                    this.viewPair(e)
                }
                _getHighestLiquidityPairByToken(e) {
                    this._pairsSearchService.searchHighestLiquidityPairByToken(e, this.chain).pipe((0,
                    J.q)(1)).subscribe(o=>{
                        o && this._changeVisiblePair(o.address, this.chain)
                    }
                    )
                }
                _loadCoinzillaBanner() {
                    !this.userAccess && void 0 === this.coinzillaAd && this._coinzillaService.getNativeAd(Or.zZ).pipe((0,
                    s.sL)(this)).subscribe(e=>{
                        e ? (this.coinzillaAd = e,
                        this._cdRef.detectChanges(),
                        this._submitImpression(this.coinzillaAd.impressionUrl)) : this.coinzillaAd = null
                    }
                    )
                }
                _submitImpression(e) {
                    this._coinzillaService.submitImpression(e).pipe((0,
                    J.q)(1)).subscribe()
                }
                closeCoinzillaBanner() {
                    this.showCoinzillaBanner = !1,
                    this._cdRef.detectChanges()
                }
                get showMoreSocialsButton() {
                    return this.socialNotDisabled.length > 5 && this.showSocialLinks || !(this.gtMdActive || this.isTabletOrMobile && !this.xsActive) || this.screenWidthBetween1400And1575 && !this.hiddenFavorites
                }
                trackByWalletAddress(e, o) {
                    return o
                }
                trackByWallet(e, o) {
                    return o.id
                }
                get _urlWithoutTrackingParams() {
                    const e = ["utm_campaign", "utm_medium", "utm_source"]
                      , o = new URL(window.location.href);
                    for (const a of e)
                        o.searchParams.delete(a);
                    return o
                }
                _goPlusHoldersChains() {
                    return c.K1z[this.chain]
                }
                get hideAggregatorWithSlug() {
                    return c.LVq.includes(this.tokenData.exchange ?? "")
                }
                get relevantSocialDataMissing() {
                    return !this.tokenData.tokenInfo?.website || !this.tokenData.logo || !(this.tokenData.tokenInfo.telegram || this.tokenData.tokenInfo.twitter)
                }
                get pairSelected() {
                    return this._pairSelected$.value
                }
                _manageLocksV2(e) {
                    return Object.values(e).flatMap(o=>Object.values(o.locks ?? {}))
                }
                _resetSwapData() {
                    this.totalSwaps = 0,
                    this._initialCachedSwapsTimeStamp = null,
                    this._nextSwapTimestampToFetch = null,
                    this.isSwapsHistoryFullyLoaded = !1
                }
                onSwapsInfiniteScroll() {
                    this.isSwapsHistoryFullyLoaded || this._fetchSwaps(this.pairSelected)
                }
                onDisplayedSwapsCountChanged(e) {
                    this.displayedSwapsCount = e,
                    this._cdRef.detectChanges()
                }
                onLoadAllSwaps() {
                    this._fetchSwaps(this.pairSelected, !0)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(b.FF),t.Y36(c.v_H),t.Y36(f.v2),t.Y36(zc.p),t.Y36(Vc.y),t.Y36(b.xI),t.Y36(c.S88),t.Y36(c.CqV),t.Y36(Gc.H7),t.Y36(c.OqV),t.Y36(c.SBY),t.Y36(f.TF),t.Y36(jc),t.Y36(c.Amu),t.Y36(c.Pld),t.Y36(c.UW7),t.Y36(Ft.F0),t.Y36(f.WU),t.Y36(f.gb),t.Y36(c.Brn),t.Y36(c.mK2),t.Y36(c.hmC),t.Y36(Kc),t.Y36(c.p9V),t.Y36(c.j4Y),t.Y36(z.Yg),t.Y36(Xc.f),t.Y36(tl.P),t.Y36(el.D),t.Y36(f.$h),t.Y36(f.qA),t.Y36(Ft.gz),t.Y36(t.zs3),t.Y36(Ct._W),t.Y36(t.sBO),t.Y36(c.OoE),t.Y36(h.sK),t.Y36(nl.f),t.Y36(f.Zn),t.Y36(c.VGy),t.Y36(p.Ye),t.Y36(c.kAQ),t.Y36(f.lB),t.Y36(ol.z))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-pairexplorer"]],
                viewQuery: function(e, o) {
                    if (1 & e && (t.Gf(al, 5),
                    t.Gf(il, 5),
                    t.Gf(rl, 5),
                    t.Gf(cl, 5),
                    t.Gf(ll, 5, t.s_b),
                    t.Gf(sl, 5)),
                    2 & e) {
                        let a;
                        t.iGM(a = t.CRH()) && (o.summaryTable = a.first),
                        t.iGM(a = t.CRH()) && (o.headerCenterContent = a.first),
                        t.iGM(a = t.CRH()) && (o.headerRightContent = a.first),
                        t.iGM(a = t.CRH()) && (o.searchMenuMobile = a.first),
                        t.iGM(a = t.CRH()) && (o.aggregatorContentContainer = a.first),
                        t.iGM(a = t.CRH()) && (o.tabsContainer = a)
                    }
                },
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("resize", function() {
                        return o.onResize()
                    }, !1, t.Jf7)
                },
                standalone: !0,
                features: [t._Bn([b.xI]), t.qOj, t.jDz],
                decls: 83,
                vars: 20,
                consts: [[3, "loadDefaultCenterHeaderContent", "loadDefaultRightHeaderContent", "footerWithTabs", "loadConfigPanel"], [3, "isClosable", "iconUnicode", "alertType", "message", "alertClosed", 4, "ngIf"], [3, "icon", "message", "alertType", "link", 4, "ngIf"], [3, "iconUnicode", "message", "alertType", 4, "ngIf"], [3, "icon", "message", "alertType", 4, "ngIf"], [3, "icon", "message", "alertType", "isClosable", "alertClosed", 4, "ngIf"], [4, "ngIf"], [3, "backdrop", "hidden", "closeHidden", "showHeader", "isResizable", "fullScreenEnabled", "closeEnabled", "panelClosed", 4, "ngIf"], [3, "showHeader", "panelClosed", 4, "ngIf"], [3, "closeButton", "showHeader", "panelClosed", 4, "ngIf"], [3, "panelTitle", "panelClosed", 4, "ngIf"], [3, "closeButton", "panelTitle", "panelClosed", 4, "ngIf"], ["teamHasSold", ""], ["isTokenSwap", ""], ["tv", ""], ["tabsBar", ""], ["aggregatorContainer", ""], ["market", ""], ["userTrust", ""], ["banners", ""], ["tokenTitle", ""], ["tokenSubtitle", ""], ["tokenPrice", ""], ["priceNumber", ""], ["limitBot", ""], ["swapButton", ""], ["priceIntervals", ""], ["favoriteButton", ""], ["socialIcons", ""], ["hotPairBadge", ""], ["headerCenterContent", ""], ["searchMenuMobile", ""], ["sideMenuMobile", ""], ["headerRightContent", ""], ["priceTooltip", ""], ["noAggregator", ""], ["scamInfo", ""], ["tabsPoolSwap", ""], ["summaryTable", ""], ["socialLinkEnabled", ""], ["socialLinkDisabled", ""], ["iframeExchange", ""], [3, "backdrop", "closeButton", "relativeButton", "panelTitle", "panelSubtitle", "panelClosed", 4, "ngIf"], ["honeypotLinks", ""], ["tradeModal", ""], ["coinzillaBanner", ""], [3, "isClosable", "iconUnicode", "alertType", "message", "alertClosed"], [3, "ngTemplateOutlet"], [3, "icon", "message", "alertType", "link"], [3, "iconUnicode", "message", "alertType"], [3, "icon", "message", "alertType"], [3, "icon", "message", "alertType", "isClosable", "alertClosed"], [3, "initCharge", "pairSelected"], [1, "main-content-container"], ["appIntersection", "", 3, "intersectionOptions", "intersectionChange"], [1, "row", "pair-container", 3, "ngClass"], ["class", "row-left-column", 4, "ngIf"], [1, "row-center-column", 3, "ngClass"], [1, "pt0"], [1, "graph-header"], [1, "title-header"], ["class", "row-right-column", 3, "hidden", "ngClass", 4, "ngIf"], [1, "row-right-column", 3, "hidden", "ngClass"], [3, "ngClass", "pairSelected", "currency", "tokenData", "hiddenFavorites", "typeOfAction", "addFavorite", "toggleFavorites", "favoritePairSelected"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "links-container", 3, "ngClass", 4, "ngIf"], [3, "localStorageKey", "fullScreen", "reloadOption", "externalUrl", "panelClosed", "reloadContent", 4, "ngIf"], [1, "row-left-column"], [1, "left-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "links-container", 3, "ngClass"], [3, "localStorageKey", "fullScreen", "reloadOption", "externalUrl", "panelClosed", "reloadContent"], [3, "backdrop", "closeHidden", "showHeader", "panelClosed", 4, "ngIf"], [3, "backdrop", "closeHidden", "showHeader", "hidden", "closeEnabled", "enableScrollOnClose", "panelClosed", 4, "ngIf"], [1, "mobile-container"], ["id", "mobileHeader", 1, "header", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "w-100"], ["class", "d-flex", 4, "ngIf"], [3, "hidden"], [1, "pair-header", "pb-2"], [1, "d-flex", "justify-content-between", "w-100"], ["class", "mini-dext-score", 4, "ngIf"], [1, "d-flex", "justify-content-between", "w-100", "cursor-pointer", 3, "click"], ["class", "section-container w-100", 4, "ngIf"], ["class", "w-100", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "pairSelected", "currency", "tokenData", "hiddenFavorites", "typeOfAction", "addFavorite", "toggleFavorites", "favoritePairSelected", 4, "ngIf"], [1, "mb-3", "input-container", 3, "hidden"], [3, "backdrop", "closeHidden", "showHeader", "panelClosed"], [3, "isOpen", "showCloseButton", "findPair", "typeOfAction", "isOpenChange", "openModalToken", "itemSelected", "trendingSelected", "previousSelected"], [3, "backdrop", "closeHidden", "showHeader", "hidden", "closeEnabled", "enableScrollOnClose", "panelClosed"], [3, "chain", "tokenId", "isAutoSelect", "activeScroll", "pairsSearchByTokenClosed", "autoSelectedOnlyOneResult"], [1, "d-flex"], [3, "items", "selectedItem", "showOnlyLogoSelected", "itemSelected"], [1, "mini-dext-score"], [1, "mini-dext-score__title"], [1, "mini-dext-score__result", 3, "ngClass"], [1, "section-container", "w-100"], [3, "chain", "exchange", "tokenData", "exchangeVersion", "volumeChecked", "volume24h", "tokenPoolInfo", "hasPoolRatios", "hasFeePercentagePools", "pairSelected", "mobile", "mobileCollapsed", "liquidityLockList"], [3, "pairSelected", "currency", "tokenData", "hiddenFavorites", "typeOfAction", "addFavorite", "toggleFavorites", "favoritePairSelected"], [3, "backdrop", "hidden", "closeHidden", "showHeader", "isResizable", "fullScreenEnabled", "closeEnabled", "panelClosed"], [3, "chain", "tokenId", "isAutoSelect", "pairsSearchByTokenClosed", "autoSelectedOnlyOneResult", "containerWidthChanged"], [3, "showHeader", "panelClosed"], [3, "url", "showCloseButton"], [3, "title", "linksSocialData", "tokenData", "isDarkTheme"], [3, "closeButton", "showHeader", "panelClosed"], [3, "panelTitle", "panelClosed"], [3, "tokenData", "iframeWidget"], [3, "closeButton", "panelTitle", "panelClosed"], [3, "item", "positionToSave", "swaps", "symbol", "tokenRef", "needPair", "needSwap", "emitClose", "emitSave"], ["icon", "info", 1, "mx-2"], [1, "link-primary", 3, "href"], [1, "d-flex", "section-container"], [1, "center-container"], [3, "allowMarksOnBars", "isResizable", "chain", "tokenData", "exchange", "candlesData", "normalizeCandles", "pairSelected", "countSwapsLast24h", "selectedTransactions", "userAccess", "latestCandles", "isFullScreen", "isDarkTheme", "disclaimer", "liveCandlesCleared", "fullScreenToggled", "tvReady", "tvDestroyed", 4, "ngIf"], [3, "allowMarksOnBars", "isResizable", "chain", "tokenData", "exchange", "candlesData", "normalizeCandles", "pairSelected", "countSwapsLast24h", "selectedTransactions", "userAccess", "latestCandles", "isFullScreen", "isDarkTheme", "disclaimer", "liveCandlesCleared", "fullScreenToggled", "tvReady", "tvDestroyed"], ["tvComponent", ""], ["appTradingViewDragIcon", ""], ["appTradingViewDisclaimer", ""], [1, "trading-view__drag-icon", 3, "icon"], [1, "trading-view__disclaimer", "p-4"], ["target", "_self", 3, "href", 4, "ngIf"], ["target", "_self", 3, "href"], ["id", "tabs-container", 1, "d-flex", "center-container"], ["tabsContainer", ""], [1, "card", "w-100", 3, "ngClass"], [1, "header-tabs"], [3, "tabsOptions", "defaultSelectedTab", "tabIdSelected", 4, "ngIf"], [1, "filter"], ["class", "trade-history-header", 4, "ngIf"], ["class", "m-0 d-inline-block align-middle mx-3", 4, "ngIf"], ["class", "m-0 d-inline-block align-middle", 3, "ngClass", 4, "ngIf"], ["class", "m-0 d-inline-block align-middle text-primary", 4, "ngIf"], ["id", "positions", "class", "card-body p-0 pb-3", 4, "ngIf"], ["id", "history", "class", "card-body p-0 pb-2", "style", "overflow-x: auto", 3, "faded-out", 4, "ngIf"], ["id", "mySwaps", "class", "card-body p-0 pb-3", "style", "overflow-x: auto", 4, "ngIf"], ["id", "holders", "class", "card-body p-0 pb-3", 4, "ngIf"], [3, "tabsOptions", "defaultSelectedTab", "tabIdSelected"], [1, "trade-history-header"], [1, "m-0", "d-inline-block", "align-middle", "trade-tab-title"], [1, "form-check", "form-switch", "bot-container"], [1, "form-check-label"], ["placement", "auto", "icon", "user-secret", 1, "sell-color", 3, "ngbTooltip", "click"], [1, "bot-description"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "m-0", "d-inline-block", "align-middle", "mx-3"], [1, "m-0", "d-inline-block", "align-middle", 3, "ngClass"], [1, "m-0", "d-inline-block", "align-middle", "text-primary"], ["id", "price-alerts", 3, "isUserConnected", "alertsStatus", "shouldHideAlerts", "tokenData", "loader", "pairSelected", "chain", "notificationsStatus", "toggleFav", "fullScreen", "showFavoritesColumn", "openSettings"], ["id", "positions", 1, "card-body", "p-0", "pb-3"], ["class", "loading", 3, "appLoading", 4, "ngIf"], [3, "refTokenSymbol", "myPositions", "user_access", "pairSelected", "myPositionsForm", "tokenData", "showAddEditPositionsPanel", "saveEditPosition", "deletePosition", "newPositionForm"], [1, "loading", 3, "appLoading"], ["id", "history", 1, "card-body", "p-0", "pb-2", 2, "overflow-x", "auto"], [3, "chain", "allTransactions", "displayedTransactions", "selectedTransactionsList", "isDataLoaded", "currentFav", "user_access", "refTokenSymbol", "filteredTx", "dextScore", "data_wallets", "teamWallet", "wallet_to_see", "tokenRef", "tokenData", "toggleFav", "fullScreen", "showFavoritesColumn", "known_wallets", "known_wallets_filtered", "botFiltered", "pairAddress", "hasFeePercentagePools", "addPosition", "displayedTransactionsCount", "toggleMarkedWallet", "rowActivated", "infiniteScrolling", "loadAllTransactions", 4, "ngIf"], [3, "chain", "allTransactions", "displayedTransactions", "selectedTransactionsList", "isDataLoaded", "currentFav", "user_access", "refTokenSymbol", "filteredTx", "dextScore", "data_wallets", "teamWallet", "wallet_to_see", "tokenRef", "tokenData", "toggleFav", "fullScreen", "showFavoritesColumn", "known_wallets", "known_wallets_filtered", "botFiltered", "pairAddress", "hasFeePercentagePools", "addPosition", "displayedTransactionsCount", "toggleMarkedWallet", "rowActivated", "infiniteScrolling", "loadAllTransactions"], ["tradeHistory", ""], ["id", "mySwaps", 1, "card-body", "p-0", "pb-3", 2, "overflow-x", "auto"], [4, "ngIf", "ngIfElse"], ["notWalletSwaps", ""], [3, "chain", "isMySwapsTable", "allTransactions", "isDataLoaded", "selectedTransactionsList", "displayedTransactions", "currentFav", "user_access", "refTokenSymbol", "filteredTx", "dextScore", "data_wallets", "teamWallet", "tokenRef", "tokenData", "toggleFav", "addPosition", 4, "ngIf"], [3, "chain", "isMySwapsTable", "allTransactions", "isDataLoaded", "selectedTransactionsList", "displayedTransactions", "currentFav", "user_access", "refTokenSymbol", "filteredTx", "dextScore", "data_wallets", "teamWallet", "tokenRef", "tokenData", "toggleFav", "addPosition"], ["class", "loading not-wallet-swaps", 4, "ngIf"], [1, "loading", "not-wallet-swaps"], ["id", "holders", 1, "card-body", "p-0", "pb-3"], [3, "tokenAudit", "actualPrice", "chain"], ["id", "aggregator-widget", 1, "section-container", 3, "ngClass"], ["parentElement", ""], ["class", "section-container", 4, "ngIf"], [1, "section-container"], [3, "chain", "exchange", "tokenData", "exchangeVersion", "volumeChecked", "volume24h", "tokenPoolInfo", "hasPoolRatios", "hasFeePercentagePools", "pairSelected", "liquidityLockList"], [1, "swap-section", "section-container"], [1, "column-left", "section-container"], [3, "dextScoreData", "dextScore"], [3, "tokenAudit", "isAdmin", "ngClass", "isUpdatingAudit", "highlightWhenNotVerified", "tokenName", "updateAudit", 4, "ngIf"], [3, "tokenData", "updateInfoClicked", 4, "ngIf"], ["class", "pb-4", 4, "ngIf"], [3, "tokenAudit", "isAdmin", "ngClass", "isUpdatingAudit", "highlightWhenNotVerified", "tokenName", "updateAudit"], [3, "tokenVotes", "userConnected", "isDarkTheme", "voteUp", "voteDown"], [3, "tokenData", "updateInfoClicked"], [1, "pb-4"], [1, "card", "card-small", "p-4", "bg-warning", "text-black"], [1, "mb-2", "d-block"], ["class", "page-title", 4, "ngIf"], [1, "page-title"], ["href", "https://dextools.medium.com/introducing-dextforce-ventures-c5dfc606a165", "target", "_blank", "rel", "noopener", "class", "ventures-logo", 4, "ngIf"], ["class", "logo-container", 4, "ngIf"], [1, "erc-wallet", 3, "ngClass"], [3, "tokenLeft", "tokenRight", "size"], ["class", "badge bg-info", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["href", "https://dextools.medium.com/introducing-dextforce-ventures-c5dfc606a165", "target", "_blank", "rel", "noopener", 1, "ventures-logo"], ["src", "assets/img/logo/dextforce_ventures_logo_dark.png", "alt", "dextforce logo"], [1, "logo-container"], [1, "img-logo"], [3, "symbol", "name", "chain", "address", "logoUrl", "hasWhiteBackground"], ["class", "img-exchange", 3, "style", "src", 4, "ngIf"], [1, "img-exchange", 3, "src"], ["placement", "bottom", 1, "badge", "bg-info", 3, "ngbTooltip"], ["placement", "auto", 1, "search-token-button", 3, "ngbTooltip", "disableTooltip", "click"], ["icon", "binoculars"], [1, "page-subtitle"], [1, "d-flex", "align-items-center"], ["class", "token-full-name", 4, "ngIf"], [1, "token-pair-info"], [1, "me-1", "text-muted"], ["href", "javascript:", "placement", "bottom", 1, "text-muted", 3, "ngbTooltip", "click"], ["t1", "ngbTooltip"], ["icon", "copy", 1, "text-decoration-none", "d-inline-block", "ms-1"], ["t2", "ngbTooltip"], [1, "token-full-name"], ["class", "token-price", 4, "ngIf"], [1, "token-price"], ["class", "token-price_indicators d-flex flex-column align-items-end", 4, "ngIf"], [1, "token-price_indicators", "d-flex", "flex-column", "align-items-end"], ["class", "d-flex d-md-flex", 3, "title", "ngClass", 4, "ngIf"], [1, "d-flex", "d-md-flex", 3, "title", "ngClass"], [1, "me-1", 3, "icon"], [1, "symbol", 3, "title"], [1, "symbol"], ["placement", "top", 3, "ngbTooltip", "autoClose", "animation", "click"], ["t3", "ngbTooltip"], ["class", "launch-price-badge", 4, "ngIf"], [1, "launch-price-badge"], ["class", "limit-button", 3, "ngClass", "click", 4, "ngIf"], [1, "limit-button", 3, "ngClass", "click"], ["src", "assets/img/velox.png", 1, "me-1", 3, "alt"], ["class", "swap-button", 3, "ngClass", "click", 4, "ngIf"], [1, "swap-button", 3, "ngClass", "click"], ["icon", "exchange-alt", 1, "me-1"], ["href", ":javaScript", "class", "swap-button", 3, "ngClass", "click", 4, "ngIf"], ["href", ":javaScript", 1, "swap-button", 3, "ngClass", "click"], [3, "selectedInterval", "variation", "currentPrice", "intervalChange"], [1, "favorite-button"], [3, "item", "isPairExplorer", "popupPlacement", "hiddenFavorites"], [1, "social-container", "align-items-center", "justify-content-between"], [1, "social"], [1, "social-icons", "position-relative"], ["target", "blank", 3, "href", 4, "ngIf"], ["target", "blank", 3, "href", "class", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "class", "ms-2", 3, "href", 4, "ngIf"], ["href", "javascript:", "class", "ms-2", 3, "click", 4, "ngIf"], ["target", "blank", "class", "ms-2", 3, "href", 4, "ngIf"], ["class", "hidden-icons ms-2", "href", "javascript:", 3, "click", 4, "ngIf"], ["href", "javascript:", "class", "social-modal", 3, "click", 4, "ngIf"], ["href", "javascript:", "placement", "top", 1, "shared-button", 3, "disableTooltip", "ngbTooltip", "click", "keyup.enter"], ["icon", "share"], ["target", "blank", 3, "href"], ["class", "ms-2", "alt", "scanner logo", "placement", "top", 3, "src", "ngbTooltip", 4, "ngIf"], ["alt", "scanner logo", "placement", "top", 1, "ms-2", 3, "src", "ngbTooltip"], [1, "social-links"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["src", "assets/img/coingecko.png", "alt", "Coingecko logo", "placement", "bottom", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener", 3, "href"], ["class", "cmc-icon ms-2", "src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", "placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["src", "assets/img/cmc-icon-blue.jpeg", "alt", "CMC logo", "placement", "top", 1, "cmc-icon", "ms-2", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener", 1, "ms-2", 3, "href"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo", "ngbTooltip", "Bubblemaps", "placement", "bottom", 4, "ngIf"], ["src", "assets/img/bubblemaps.png", "alt", "Bubblemaps logo", "ngbTooltip", "Bubblemaps", "placement", "bottom"], ["href", "javascript:", 1, "ms-2", 3, "click"], ["class", "no-background", "src", "assets/img/metamask.svg", "alt", "Metamask logo", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["src", "assets/img/metamask.svg", "alt", "Metamask logo", "placement", "bottom", 1, "no-background", 3, "ngbTooltip"], ["target", "blank", 1, "ms-2", 3, "href"], ["src", "assets/img/unicrypt_v3.svg", "alt", "Unicrypt logo", "placement", "bottom", 3, "ngbTooltip", 4, "ngIf"], ["src", "assets/img/unicrypt_v3.svg", "alt", "Unicrypt logo", "placement", "bottom", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener", 1, "d-flex", "ms-2", 3, "href"], ["name", "nft", "placement", "auto", 3, "width", "ngbTooltip"], ["href", "javascript:", 1, "hidden-icons", "ms-2", 3, "click"], ["href", "javascript:", 1, "social-modal", 3, "click"], ["class", "badge bg-success top-one", 4, "ngIf"], [1, "badge", "bg-success", "top-one"], [3, "placeholder", "exchange", "typeOfAction", "itemSelected", "previousSelected", "trendingSelected"], ["href", "javascript:", 1, "search-mobile-button", 3, "click"], [3, "icon"], [1, "floating-menu", "visible"], ["class", "m-auto", 3, "icon", "click", 4, "ngIf"], [1, "m-auto", 3, "icon", "click"], ["id", "change-layout-container", 1, "change-layout-container"], ["type", "button", 1, "change-layout", 3, "ngClass", "click"], ["showLayoutOptionsButton", ""], [3, "layoutOptions", "isDarkTheme", "layoutOptionsChanged", "emitHideMenu", 4, "ngIf"], [1, "open-settings", 3, "click"], ["size", "xl", 3, "icon"], [1, "open-favs", 3, "click"], ["icon", "star", "size", "xl"], [1, "user-info", "d-flex", "align-items-center", "justify-content-center", "ms-2", 3, "ngClass"], ["src", "assets/img/logo/dext-white-small.png", "alt", "dext-logo", 3, "ngClass", "click", 4, "ngIf"], ["class", "btn-primary btn-connect", 3, "click", 4, "ngIf"], [3, "dextAmount", "userId", "role", "isFree", "clickOut", 4, "ngIf"], [3, "layoutOptions", "isDarkTheme", "layoutOptionsChanged", "emitHideMenu"], ["src", "assets/img/logo/dext-white-small.png", "alt", "dext-logo", 3, "ngClass", "click"], [1, "btn-primary", "btn-connect", 3, "click"], [3, "dextAmount", "userId", "role", "isFree", "clickOut"], [1, "section-container", "no-aggregator-container", 3, "ngClass"], ["class", "close-container", 4, "ngIf"], [1, "close-container"], ["role", "button", "class", "close", "href", "javascript:", 3, "ngbTooltip", "click", 4, "ngIf"], ["role", "button", "href", "javascript:", 1, "close", 3, "ngbTooltip", "click"], [1, "no-aggregator-title"], [1, "no-aggregator-advice"], [1, "no-aggregator-button", "mb-0"], ["href", "javascript:", "class", "swap-button", 3, "ngClass", "click", 4, "ngIf"], ["href", "javascript:", 1, "swap-button", 3, "ngClass", "click"], [1, "copy-token", 3, "click"], [1, "section-container", "no-aggregator-container", "scam-info", 3, "ngClass"], ["src", "assets/img/logo/dextools_logo_header_35.png", "alt", "dextools logo", "width", "35", 1, "mb-3"], ["class", "btn swap-button", "href", "#", 3, "click", 4, "ngIf"], ["class", "btn swap-button", "href", "#", 4, "ngIf"], ["class", "btn btn-icon-absolute ms-2 velox", 4, "ngIf"], ["href", "#", 1, "btn", "swap-button", 3, "click"], ["href", "#", 1, "btn", "swap-button"], [1, "btn", "btn-icon-absolute", "ms-2", "velox"], [3, "ngClass"], [1, "tabs-pool-swap"], ["class", "material mb-2 table table-summary", "style", "min-height: 0; height: auto", 3, "scrollbarV", "scrollbarH", "columnMode", "count", "rows", "rowHeight", 4, "ngIf"], [1, "material", "mb-2", "table", "table-summary", 2, "min-height", "0", "height", "auto", 3, "scrollbarV", "scrollbarH", "columnMode", "count", "rows", "rowHeight"], ["summary_table", ""], [3, "resizeable", "width", "minWidth", "name", "sortable", "cellClass"], ["ngx-datatable-cell-template", ""], [3, "resizeable", "width", "minWidth", "maxWidth", "name", "sortable"], [3, "resizeable", "width", "minWidth", "name", "sortable"], [3, "resizeable", "width", "minWidth", "name", "sortable", "cellClass", 4, "ngIf"], [3, "resizeable", "width", "minWidth", "maxWidth", "name", "sortable", "cellClass", 4, "ngIf"], [1, "text-bold"], [1, "buy-color"], [1, "sell-color"], ["icon", "user-secret", "class", "icon-table ms-3 sell-color", 4, "ngIf"], ["icon", "user-secret", 1, "icon-table", "ms-3", "sell-color"], [3, "appRouterLink", "class", 4, "ngIf"], ["width", "18", "alt", "scanner logo", 1, "icon-bg-white-rounded", "me-1", 3, "src"], ["href", "#", 3, "click"], [3, "appRouterLink"], [3, "appRouterLink", 4, "ngIf"], [1, "row-icon", "me-2", "text-secondary", 3, "icon"], [3, "resizeable", "width", "minWidth", "maxWidth", "name", "sortable", "cellClass"], ["href", "#", 1, "me-2", 3, "ngbTooltip", "click"], ["icon", "times", 1, "pools-icon-warning", "sell-color", "ms-3", "row-icon"], ["icon", "user-friends", "class", "icon-table ms-3 text-info", 3, "ngbTooltip", 4, "ngIf"], ["icon", "sitemap", "class", "icon-table text-warning ms-3", 3, "ngbTooltip", 4, "ngIf"], ["icon", "user-friends", 1, "icon-table", "ms-3", "text-info", 3, "ngbTooltip"], ["icon", "sitemap", 1, "icon-table", "text-warning", "ms-3", 3, "ngbTooltip"], ["target", "_blank", "rel", "noopener", 1, "d-flex", 3, "href", "ngClass"], ["size", "sm", "placement", "auto", 3, "icon", "fixedWidth", "ngbTooltip"], [1, "d-flex", 3, "ngClass"], ["placement", "auto", "size", "sm", 1, "disabled", 3, "icon", "ngbTooltip", "fixedWidth"], [3, "url", "reload$"], [3, "backdrop", "closeButton", "relativeButton", "panelTitle", "panelSubtitle", "panelClosed"], [1, "honeypot-links", 3, "ngClass"], ["class", "coinzilla-banner", 4, "ngIf"], [1, "coinzilla-banner"], [3, "coinzillaAd", "coinzillaBannerClosed"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "app-layout", 0),
                    t.YNc(1, _l, 2, 5, "app-alert", 1),
                    t.YNc(2, pl, 1, 6, "app-alert", 2),
                    t.YNc(3, dl, 1, 3, "app-alert", 3),
                    t.YNc(4, hl, 1, 3, "app-alert", 4),
                    t.YNc(5, ml, 1, 3, "app-alert", 4),
                    t.YNc(6, ul, 1, 4, "app-alert", 5),
                    t.YNc(7, Nl, 30, 50, "ng-container", 6),
                    t.YNc(8, cs, 37, 33, "ng-container", 6),
                    t.YNc(9, ls, 2, 10, "app-panel-component", 7),
                    t.YNc(10, ss, 2, 3, "app-panel-component", 8),
                    t.YNc(11, _s, 2, 3, "app-panel-component", 8),
                    t.YNc(12, gs, 4, 10, "app-panel-component", 8),
                    t.YNc(13, ps, 2, 2, "app-panel-component", 9),
                    t.YNc(14, ds, 3, 5, "app-panel-component", 10),
                    t.YNc(15, hs, 4, 13, "app-panel-component", 11),
                    t.qZA(),
                    t.YNc(16, ms, 3, 8, "ng-template", null, 12, t.W1O),
                    t.YNc(18, us, 7, 10, "ng-template", null, 13, t.W1O),
                    t.YNc(20, Ms, 3, 1, "ng-template", null, 14, t.W1O),
                    t.YNc(22, Vs, 15, 11, "ng-template", null, 15, t.W1O),
                    t.YNc(24, $s, 4, 14, "ng-template", null, 16, t.W1O),
                    t.YNc(26, g_, 9, 9, "ng-template", null, 17, t.W1O),
                    t.YNc(28, b_, 2, 1, "ng-template", null, 18, t.W1O),
                    t.YNc(30, P_, 1, 0, "ng-template", null, 19, t.W1O),
                    t.YNc(32, A_, 1, 1, "ng-template", null, 20, t.W1O),
                    t.YNc(34, E_, 24, 19, "ng-template", null, 21, t.W1O),
                    t.YNc(36, H_, 1, 1, "ng-template", null, 22, t.W1O),
                    t.YNc(38, Y_, 8, 14, "ng-template", null, 23, t.W1O),
                    t.YNc(40, G_, 2, 2, "ng-template", null, 24, t.W1O),
                    t.YNc(42, og, 3, 3, "ng-template", null, 25, t.W1O),
                    t.YNc(44, ag, 1, 3, "ng-template", null, 26, t.W1O),
                    t.YNc(46, ig, 2, 4, "ng-template", null, 27, t.W1O),
                    t.YNc(48, ap, 17, 14, "ng-template", null, 28, t.W1O),
                    t.YNc(50, rp, 1, 1, "ng-template", null, 29, t.W1O),
                    t.YNc(52, lp, 1, 1, "ng-template", null, 30, t.W1O),
                    t.YNc(54, _p, 3, 3, "ng-template", null, 31, t.W1O),
                    t.YNc(56, dp, 2, 1, "ng-template", null, 32, t.W1O),
                    t.YNc(58, xp, 15, 22, "ng-template", null, 33, t.W1O),
                    t.YNc(60, kp, 5, 5, "ng-template", null, 34, t.W1O),
                    t.YNc(62, Lp, 5, 15, "ng-template", null, 35, t.W1O),
                    t.YNc(64, Qp, 11, 19, "ng-template", null, 36, t.W1O),
                    t.YNc(66, Hp, 2, 1, "ng-template", null, 37, t.W1O),
                    t.YNc(68, pd, 1, 1, "ng-template", null, 38, t.W1O),
                    t.YNc(70, dd, 2, 7, "ng-template", null, 39, t.W1O),
                    t.YNc(72, md, 3, 11, "ng-template", null, 40, t.W1O),
                    t.YNc(74, ud, 1, 2, "ng-template", null, 41, t.W1O),
                    t.YNc(76, fd, 4, 9, "app-panel-component", 42),
                    t.YNc(77, Md, 7, 9, "ng-template", null, 43, t.W1O),
                    t.YNc(79, Od, 1, 2, "ng-template", null, 44, t.W1O),
                    t.YNc(81, yd, 1, 1, "ng-template", null, 45, t.W1O)),
                    2 & e && (t.Q6J("loadDefaultCenterHeaderContent", o.isTabletOrMobile)("loadDefaultRightHeaderContent", !1)("footerWithTabs", o.isTabletOrMobile)("loadConfigPanel", !1),
                    t.xp6(1),
                    t.Q6J("ngIf", o.canShowTeamSellAlert && o.isSuspectedTeamScam()),
                    t.xp6(1),
                    t.Q6J("ngIf", !!o.disclaimer),
                    t.xp6(1),
                    t.Q6J("ngIf", o.noLiquidity || o.noTransactions),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isDangerWarningTransactionsAnalysis && !o.loader),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isAlertWarningTransactionsAnalysis && !o.loader),
                    t.xp6(1),
                    t.Q6J("ngIf", o.canShowCommunityVotedScamAlert && o.isCommunityVotedScam()),
                    t.xp6(1),
                    t.Q6J("ngIf", "desktop" === o.mediaDevice),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isTabletOrMobile),
                    t.xp6(1),
                    t.Q6J("ngIf", o.toggleSearchToken && "desktop" === o.mediaDevice),
                    t.xp6(1),
                    t.Q6J("ngIf", !!o.showPanelExchange && o.isTabletOrMobile),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showTradeExternalModal && o.isTabletOrMobile),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showSocialPanel),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showUpdateLinksPanel),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showSharePanel),
                    t.xp6(1),
                    t.Q6J("ngIf", o.showAddEditPositionsPanel),
                    t.xp6(61),
                    t.Q6J("ngIf", o.toggleSettingsPanel))
                },
                dependencies: [Bc.$, p.O5, P.wx, p.tP, Ie.J, C.hq, p.mk, Wc.FavoritesListComponent, P.mv, P.yX, Yc, Qc.B, Ge.ChainSelectorComponent, Io, P._x, je.J, qc.r, Nc, Lc, u.uH, u.BN, ht.Px, ht.EC, ht.LO, P.n4, b._L, m.u5, m.Wl, m.JJ, m.On, Pa, P.TH, bc, fr, oc, Wr, Ir.G, Da, tn, Lr.f, Zr.T, Ar.m, Mr, Sr.t, dt.lQ, qt.NewPairsSearchComponent, ze, vr.l, x.xD, x.nE, x.UC, x.vq, f.jY, P.do, Tr.b, wr, p.OU, p.JJ, kr.f, C.Bl, C.Ek, C.Pi, C.yl, C.$p, C.pt, h.aw, h.X$, c.Wu7, c.$a1, c.tAw, c.x_$],
                styles: ['@charset "UTF-8";.open-settings[_ngcontent-%COMP%], .open-favs[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;cursor:pointer;width:2.25rem;height:2.25rem;border-radius:50%;color:#818ea3;font-size:13px}.open-settings[_ngcontent-%COMP%]:hover, .open-favs[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .open-settings[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .open-favs[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .open-settings[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .open-favs[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .open-settings[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .open-favs[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .open-settings[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .open-favs[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}.open-settings[_ngcontent-%COMP%]{margin-left:.6875rem}.user-info.free[_ngcontent-%COMP%]{background:#23323c;border-radius:50%;width:2.25rem}.user-info.premium[_ngcontent-%COMP%]{background:#efb90a;border-radius:50%;width:2.25rem}.user-info.standard[_ngcontent-%COMP%]{background:#8247e5;border-radius:50%;width:2.25rem}.user-info[_ngcontent-%COMP%]   .btn-connect[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;border-radius:3.125rem;padding:.375rem .75rem;border:none;height:2.25rem}.user-info[_ngcontent-%COMP%]   .btn-connect[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.user-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:2.25rem;width:2.25rem;padding:.4rem;cursor:pointer}@keyframes _ngcontent-%COMP%_highlight-tab{0%{background-color:#00b8d875;box-shadow:0 0 .6rem #818ea380,0 0 .4rem #818ea399 inset}to{background-color:#00b8d875;box-shadow:none}}.shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:1.375rem;height:1.375rem;background-color:#e2e7ec;border-radius:3.125rem;display:flex;align-items:center;justify-content:center}body.dark-theme   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .shared-button   body.dark-theme   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button   body.dark-theme   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .shared-button[_ngcontent-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button[_ngcontent-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .shared-button   body.light   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button   body.light   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .shared-button[_ngcontent-%COMP%]   body.light[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button[_ngcontent-%COMP%]   body.light[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}@media (max-width: 1023px){.shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}}.favs-button[_ngcontent-%COMP%]{text-decoration:none}.favs-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-top:-.0625rem;width:1.125rem;height:1.125rem;color:#818ea3;font-size:.625rem}.favs-button.toggle[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-left:10px}.favs-button.toggle[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{width:1.75rem;height:1.75rem;font-size:14px}.favs-button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%], .favs-button[_ngcontent-%COMP%]:is(.active)   fa-icon[_ngcontent-%COMP%]{background-color:#17c4714d;color:#17c671}.favs-button[_ngcontent-%COMP%]:is(.active):hover   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .favs-button[_ngcontent-%COMP%]:is(.active):hover   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]:is(.active):hover   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .favs-button[_ngcontent-%COMP%]:is(.active):hover   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]:is(.active):hover   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}.erc-wallet[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]{align-self:flex-start;margin-top:.3125rem;margin-left:-.1875rem;margin-right:.625rem}@media (max-width: 450px){.erc-wallet[_ngcontent-%COMP%]   .favs-button[_ngcontent-%COMP%]{margin-right:.3125rem}}.shared-button[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;color:#3d5170;justify-content:center}body.dark-theme   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#3d5170}@media (max-width: 1023px){.shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}}@media (max-width: 599px){.shared-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{height:1.125rem!important;width:1.125rem!important;font-size:.625rem}}.binoculars-icon[_ngcontent-%COMP%]{font-size:20px}.page-title[_ngcontent-%COMP%]{display:flex;align-items:center}.page-title[_ngcontent-%COMP%]   .ventures-logo[_ngcontent-%COMP%]{margin-right:.625rem}.page-title[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{position:relative;width:2.125rem;height:2.125rem}.page-title[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .img-logo[_ngcontent-%COMP%]{width:100%;height:100%;margin-right:.25rem;display:block}.page-title[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .img-exchange[_ngcontent-%COMP%]{border-radius:50%;bottom:1.125rem;height:1.125rem;position:absolute;width:1.125rem;right:-.5rem;background-color:#fff;display:block}@media (max-width: 1023px){.page-title[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{margin-right:.625rem}}.page-title[_ngcontent-%COMP%]   .erc-wallet[_ngcontent-%COMP%]{display:flex;align-items:center;margin-left:.375rem}.page-title[_ngcontent-%COMP%]   .erc-wallet[_ngcontent-%COMP%]   app-token-name[_ngcontent-%COMP%]    {margin-right:.5rem}.page-title[_ngcontent-%COMP%]   .erc-wallet[_ngcontent-%COMP%]   app-token-name[_ngcontent-%COMP%]     .token-name-container .token-left{line-height:initial}.page-title[_ngcontent-%COMP%]   .erc-wallet.danger[_ngcontent-%COMP%]   app-token-name[_ngcontent-%COMP%]     .token-name-container .token-left{color:#c4183c}.page-title[_ngcontent-%COMP%]   .erc-wallet.warning[_ngcontent-%COMP%]   app-token-name[_ngcontent-%COMP%]     .token-name-container .token-left{color:#ffb400}.page-title[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .page-subtitle[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{margin-right:.3125rem!important}.page-subtitle[_ngcontent-%COMP%]   .ventures-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5625rem}.page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:not(:first-child):before{content:"\\b7";padding-left:.375rem;padding-right:.375rem;color:#818ea3;font-size:14px}body.dark-theme   [_nghost-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:not(:first-child):before{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:not(:first-child):before{color:#818ea3}body.light   [_nghost-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:not(:first-child):before{color:#818ea3}body.light[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:not(:first-child):before{color:#818ea3}@media (max-width: 1023px){.page-subtitle[_ngcontent-%COMP%]{display:flex;align-items:baseline}.page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before{content:"\\b7";padding-left:.375rem;padding-right:.375rem;color:#818ea3;font-size:14px}body.dark-theme   [_nghost-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before{color:#818ea3}body.light   [_nghost-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before{color:#818ea3}body.light[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%]   .token-pair-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:before{color:#818ea3}}.token-full-name[_ngcontent-%COMP%]{text-overflow:ellipsis;max-width:9.375rem;overflow:hidden;white-space:nowrap;margin-right:.9375rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:16px;line-height:22px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .token-full-name[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .token-full-name[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .token-full-name[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .token-full-name[_ngcontent-%COMP%]{color:#142028}@media (max-width: 400px){.token-full-name[_ngcontent-%COMP%]{margin-bottom:.25rem}}@media (max-width: 991px){.token-full-name[_ngcontent-%COMP%]{max-width:4.6875rem}}@media (max-width: 1023px){.token-full-name[_ngcontent-%COMP%]{font-size:12px;margin-right:0}}.token-symbol[_ngcontent-%COMP%]{text-overflow:ellipsis;max-width:9.375rem;overflow:hidden;white-space:nowrap}@media (max-width: 991px){.token-symbol[_ngcontent-%COMP%]{max-width:9.375rem}}.hidden-icons[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;background-color:#e2e7ec;color:#818ea3;height:1.375rem;border-radius:3.125rem;padding:0 .4375rem;display:flex;align-items:center}body.dark-theme   [_nghost-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .hidden-icons[_ngcontent-%COMP%]{color:#818ea3}.hidden-icons.no-padding[_ngcontent-%COMP%]{padding:0}.hidden-icons[_ngcontent-%COMP%]:hover, .hidden-icons[_ngcontent-%COMP%]:hover   .more-icons[_ngcontent-%COMP%]{background-color:#3a4956!important;color:#fff!important}.hidden-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;line-height:1.25rem}@media (max-width: 599px){.hidden-icons[_ngcontent-%COMP%]{margin-left:.3125rem!important}}.more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;border-radius:50%;cursor:pointer;height:1.25rem;align-content:center;display:flex}body.dark-theme   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .more-icons[_ngcontent-%COMP%]{color:#818ea3}.more-icons__title[_ngcontent-%COMP%]{color:#3d5170;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;cursor:pointer;text-decoration:none}body.dark-theme   [_nghost-%COMP%]   .more-icons__title[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .more-icons__title[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .more-icons__title[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .more-icons__title[_ngcontent-%COMP%]{color:#3d5170}@keyframes _ngcontent-%COMP%_reveal-icons{0%{opacity:0;width:0}to{opacity:1;width:inherit;width:-moz-fit-content;width:fit-content}}.cmc-icon[_ngcontent-%COMP%]{border:none!important;height:1.3125rem!important;width:1.3125rem!important}@media (max-width: 1023px){.cmc-icon[_ngcontent-%COMP%]{width:1.25rem!important;height:1.25rem!important}}@media (max-width: 599px){.cmc-icon[_ngcontent-%COMP%]{height:1.125rem!important;width:1.125rem!important;margin-left:.3125rem!important}}.no-background[_ngcontent-%COMP%]{background-color:transparent!important;border:none!important;height:1.25rem;width:initial!important}.icon-table[_ngcontent-%COMP%]{font-size:1.125rem;vertical-align:text-top}.tooltip-text-big[_ngcontent-%COMP%]{text-align:left;font-size:12px}.velox[_ngcontent-%COMP%]{background:#232f3f;color:#fff}.velox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:.6875rem;width:.6875rem}.wallet-filter[_ngcontent-%COMP%], .wallet-filter-clear[_ngcontent-%COMP%], .wallet-filter-modal[_ngcontent-%COMP%]{cursor:pointer}.wallet-filtered[_ngcontent-%COMP%]{border-radius:.375rem;line-height:1.25rem}.favorites-header[_ngcontent-%COMP%]{padding-left:.9rem;padding-right:.9rem}.favorites-header[_ngcontent-%COMP%]   .fa-eye[_ngcontent-%COMP%], .favorites-header[_ngcontent-%COMP%]   .fa-eye-slash[_ngcontent-%COMP%]{line-height:1.375rem}.disable-cursor[_ngcontent-%COMP%]{pointer-events:none}.loading-logo-fullscreen[_ngcontent-%COMP%]{position:fixed;top:48%;left:52%;z-index:9999}.loading-pair[_ngcontent-%COMP%]{opacity:.25}.actions[_ngcontent-%COMP%]{width:6.25rem}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;font-size:1.0625rem}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#00b8d8}.token-pairs-search-button[_ngcontent-%COMP%]{cursor:pointer}.opacity-1[_ngcontent-%COMP%]{opacity:.2}.opacity-2[_ngcontent-%COMP%]{opacity:.4}.opacity-3[_ngcontent-%COMP%]{opacity:1}.center-container[_ngcontent-%COMP%]{width:100%}.scam-hidden-background[_ngcontent-%COMP%]{background:none;border-bottom:none}.contract-title[_ngcontent-%COMP%]{left:0;text-align:center;width:100%}.dext-score-chart[_ngcontent-%COMP%]{width:calc(100% - 100px)}.alerts-info[_ngcontent-%COMP%]{color:#cacedb}.loader-container[_ngcontent-%COMP%]{position:relative;transform:scale(.5);z-index:9999}.loader-container[_ngcontent-%COMP%]   .dext-loading[_ngcontent-%COMP%]{background:url(/assets/img/logo/dextools_logo_header_125.png) no-repeat;left:calc(50% + 35px);height:7.8125rem;position:absolute;top:28.125rem;animation:_ngcontent-%COMP%_dext-loading 3.5s infinite linear;width:7.8125rem}.loader-container[_ngcontent-%COMP%]   .loading-mobile[_ngcontent-%COMP%]{left:calc(50% - 30px)}.loader-container[_ngcontent-%COMP%]   .dext-loading-long[_ngcontent-%COMP%]{display:none;left:calc(50% - 140px);height:7.8125rem;position:absolute;top:28.125rem;width:18.9375rem}.loader-container[_ngcontent-%COMP%]   .dext-loading-long-white[_ngcontent-%COMP%]{background:url(/assets/img/logo/dextools_logo_header_large_reverse_125.png) no-repeat}.loader-container[_ngcontent-%COMP%]   .dext-loading-long-dark[_ngcontent-%COMP%]{background:url(/assets/img/logo/dextools_logo_header_large_reverse_dark_125.png) no-repeat}@keyframes _ngcontent-%COMP%_dext-loading{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.row-icon[_ngcontent-%COMP%]{font-size:13px;vertical-align:middle;color:#818ea3;margin-left:.2rem}body.dark-theme   [_nghost-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#818ea3}.row-icon[_ngcontent-%COMP%]:hover{color:#fff!important}.fee-badge[_ngcontent-%COMP%]{border-radius:.3125rem;padding:.1875rem .375rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;background-color:#fff;color:#5a5a5a}.circle[_ngcontent-%COMP%]{z-index:9999}table[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:inline-block!important}.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-width:12.5rem}.maker-color[_ngcontent-%COMP%]{color:#00b8d8}.border-bottom-danger[_ngcontent-%COMP%]{border-bottom:.125rem solid #c4183c}.row[_ngcontent-%COMP%]   .row-left-column[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .row-center-column[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .row-right-column[_ngcontent-%COMP%]{padding:0}.row.pair-container[_ngcontent-%COMP%]{margin:0 10px}.row.pair-container[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]{order:1}.row.pair-container[_ngcontent-%COMP%] > .row-center-column[_ngcontent-%COMP%]{order:2}.row.pair-container[_ngcontent-%COMP%] > .row-right-column[_ngcontent-%COMP%]{order:3}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version[_ngcontent-%COMP%]{max-height:calc(100vh - 131px);height:-moz-fit-content;height:fit-content;overflow:hidden}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version[_ngcontent-%COMP%]     app-favorites-list{max-height:100%;padding-bottom:0;min-height:unset}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version[_ngcontent-%COMP%]     app-favorites-list .favs-container{max-height:calc(100vh - 373px)!important;overflow-y:auto!important}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version.sticky[_ngcontent-%COMP%]{position:fixed;top:.625rem;right:.625rem;max-height:calc(100vh - 20px)}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version.sticky[_ngcontent-%COMP%]     app-favorites-list .favs-container{max-height:calc(100vh - 272px)!important;overflow-y:auto!important}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version.with-footer[_ngcontent-%COMP%]{position:fixed;top:.625rem;right:.625rem;max-height:calc(100vh - 94px)}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version.with-footer[_ngcontent-%COMP%]     app-favorites-list>div{max-height:calc(100vh - 136px)!important}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-version.with-footer[_ngcontent-%COMP%]     app-favorites-list .favs-container{max-height:calc(100vh - 347px)!important;overflow-y:auto!important}.row.pair-container[_ngcontent-%COMP%] > .row-right-column.sticky-button[_ngcontent-%COMP%]{z-index:99991;position:fixed;top:.625rem;right:.625rem}@media (min-width: 1024px){.row.pair-container[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]{width:310px;max-width:310px;min-width:310px;position:relative}.row.pair-container[_ngcontent-%COMP%]   .row-right-column[_ngcontent-%COMP%]{width:380px;max-width:380px;min-width:380px;position:relative}.row.pair-container[_ngcontent-%COMP%]   .row-right-column.hideFavorites[_ngcontent-%COMP%]{width:0;max-width:0;min-width:0}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]{order:3}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{margin-left:10px;margin-right:0}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-right-column[_ngcontent-%COMP%]{order:1}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-right-column[_ngcontent-%COMP%]   .favs-button.toggle[_ngcontent-%COMP%]{margin-left:0;margin-right:10px}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-right-column.sticky-version.sticky[_ngcontent-%COMP%]{top:.625rem;left:4.625rem;right:unset}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-right-column.sticky-version.with-footer[_ngcontent-%COMP%]{top:.625rem;left:4.625rem;right:unset}.row.pair-container.layout-flipped[_ngcontent-%COMP%] > .row-right-column.sticky-button[_ngcontent-%COMP%]{top:.625rem;left:4.625rem;right:unset}.row.pair-container.layout-columns[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]{order:2}.row.pair-container.layout-columns[_ngcontent-%COMP%] > .row-left-column[_ngcontent-%COMP%]   .left-container[_ngcontent-%COMP%]{margin-right:10px;margin-left:0}.row.pair-container[_ngcontent-%COMP%]   .row-center-column.full-width[_ngcontent-%COMP%]{width:calc(100% - 310px)}.row.pair-container[_ngcontent-%COMP%]   .row-center-column.full-screen[_ngcontent-%COMP%]{width:100%}.row.pair-container[_ngcontent-%COMP%]   .row-center-column.calculated-width[_ngcontent-%COMP%]{width:calc(100% - 690px)}.row.pair-container[_ngcontent-%COMP%]   .row-center-column.only-favs[_ngcontent-%COMP%]{width:calc(100% - 380px)}}@media screen and (min-width: 1024px) and (min-width: 1024px) and (max-width: 1400px){.row.pair-container[_ngcontent-%COMP%]   .row-center-column.only-favs[_ngcontent-%COMP%]{width:100%}}@media (min-width: 1024px){.row.pair-container[_ngcontent-%COMP%]   .row-center-column.only-favs-hidden[_ngcontent-%COMP%]{width:calc(100% - 10px)}}@media (min-width: 1024px){.row.pair-container[_ngcontent-%COMP%]   .row-center-column.full-width-no-fav[_ngcontent-%COMP%]{width:calc(100% - 310px)}}@media screen and (min-width: 1024px) and (max-width: 1400px){.row.pair-container[_ngcontent-%COMP%] > .row-right-column.layout-flipped[_ngcontent-%COMP%]{width:0;max-width:0;min-width:0}}.aggregator-container[_ngcontent-%COMP%]{border-radius:.9375rem;margin-left:0!important;margin-right:0!important;box-shadow:none!important}.aggregator-container.fixed[_ngcontent-%COMP%]{position:fixed;bottom:5px;z-index:99992;width:300px;max-width:300px;min-width:300px;left:6rem;box-shadow:0 0 .3125rem .0625rem #a5abb84d!important;border-radius:.9375rem}.aggregator-container.fixed.align-with-footer[_ngcontent-%COMP%]{bottom:83px}.aggregator-container.fixed.mobile[_ngcontent-%COMP%]{position:relative;bottom:auto;width:100%;max-width:100%}.aggregator-container.fixed[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]{top:.75rem;right:.75rem;position:absolute;padding-right:0}.no-aggregator-container[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#818ea3;border-radius:.9375rem;min-height:24.125rem;display:flex;align-items:center;flex-direction:column;justify-content:center;text-align:center;font-size:12px;margin-left:0;margin-right:0}body.dark-theme   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]{color:#818ea3}.no-aggregator-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 2rem}.no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-title[_ngcontent-%COMP%]{font-size:28px}.no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]{color:#3d5170}.no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]{padding:0 .125rem}.no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]:hover{background-color:#f4f5f6;border-radius:.5rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-advice[_ngcontent-%COMP%]   .copy-token[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.no-aggregator-container[_ngcontent-%COMP%]   p.no-aggregator-button[_ngcontent-%COMP%]{padding:0 1rem;width:100%;display:block;text-transform:capitalize}.no-aggregator-container.layout-flipped[_ngcontent-%COMP%]{margin-right:.625rem;margin-left:0}.no-aggregator-container.layout-columns[_ngcontent-%COMP%]{margin-left:.625rem}.no-aggregator-container.fullScreen[_ngcontent-%COMP%]{left:6rem}.no-aggregator-container.notFullScreen[_ngcontent-%COMP%]{top:3rem;left:0;width:300px;max-width:300px;min-width:300px}.no-aggregator-container.notFullScreen[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]{top:.75rem;right:.75rem;position:absolute;padding-right:0}.no-aggregator-container.scam-info.mobile[_ngcontent-%COMP%]{width:100%;max-width:100%}.links-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;position:fixed;bottom:.9375rem;z-index:99992;width:300px;max-width:300px;min-width:300px;left:5.625rem;background:none;border-radius:.9375rem}.links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:.625rem;max-width:50%}.links-container.align-with-footer[_ngcontent-%COMP%]{bottom:5.8125rem}.border-bottom-success[_ngcontent-%COMP%]{border-bottom:.125rem solid #17c671}.wallet-filter-color[_ngcontent-%COMP%]{cursor:pointer}.wallet-name[_ngcontent-%COMP%]{width:100%}.wallet-selection[_ngcontent-%COMP%]   .fa-circle[_ngcontent-%COMP%]{cursor:pointer;font-size:1.0625rem}.news[_ngcontent-%COMP%]{min-height:12.5rem;height:16.25rem;overflow-y:auto}.no-sponsor-height[_ngcontent-%COMP%]{height:30.625rem}.swap-button[_ngcontent-%COMP%], .limit-button[_ngcontent-%COMP%]{font-weight:400;font-size:14px;padding:.35rem .65625rem;display:flex;cursor:pointer;height:40px;border-radius:1.5rem;z-index:2;flex-direction:row;align-items:center;overflow:hidden;text-decoration:none;justify-content:center}.swap-button[_ngcontent-%COMP%]:hover, .limit-button[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.limit-button[_ngcontent-%COMP%]{color:#142028;background-color:#e2e7ec;width:100%}body.dark-theme   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]{background-color:#e2e7ec}.limit-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.125rem;height:auto}.limit-button[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]:hover{background-color:#3a4956}body.light   [_nghost-%COMP%]   .limit-button[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]:hover{background-color:#f4f5f6}.swap-button[_ngcontent-%COMP%]{color:#fff;background-color:#00b8d8;width:100%}.swap-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:16px}.swap-section[_ngcontent-%COMP%]   .limit-button[_ngcontent-%COMP%]{background-color:transparent!important;color:#00b8d8!important;text-align:center;font-size:13px;height:auto;padding-bottom:0}.graph-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:1.2rem 1.2rem 1rem;border-radius:1rem 1rem 0 0;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .graph-header[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .graph-header[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .graph-header[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .graph-header[_ngcontent-%COMP%]{background-color:#f4f5f6}.graph-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;flex-flow:row wrap}.graph-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]{justify-content:flex-start;display:flex;align-items:center}.graph-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title-header[_ngcontent-%COMP%]   .header-symbol[_ngcontent-%COMP%]{display:flex;align-items:center}.social-container[_ngcontent-%COMP%]{margin-top:.75rem;display:flex}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{display:flex;align-items:center}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-modal[_ngcontent-%COMP%]{margin-left:.375rem;font-size:12px;height:1.375rem;border-radius:3.125rem;color:#00b8d8;background-color:#00b8d833;padding:0 .375rem;line-height:1.375rem}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-modal[_ngcontent-%COMP%]:hover{background-color:#00b8d8;color:#fff;text-decoration:none}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]{display:flex;align-items:center}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;color:#142028}body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#cacedb}body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus, body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:focus{color:#3d5170}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon.disabled[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   fa-icon.disabled[_ngcontent-%COMP%]{color:#818ea380!important}@media (max-width: 400px){.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:0!important}}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%], .social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .opacity[_ngcontent-%COMP%]{opacity:.2}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem;border:.0625rem solid white;border-radius:.625rem;background-color:#fff}@media (max-width: 1023px){.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.25rem;width:1.25rem}}@media (max-width: 599px){.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.125rem;width:1.125rem;margin-left:.3125rem!important}}.social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.3rem}.social-container[_ngcontent-%COMP%]   .ventures-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5625rem}.header-tabs[_ngcontent-%COMP%]{display:flex;padding:1.2rem .6rem;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center}@media screen and (max-width: 899px){.header-tabs[_ngcontent-%COMP%]{padding-bottom:0}}@media screen and (max-width: 599px){.header-tabs[_ngcontent-%COMP%]{justify-content:space-around}}.header-tabs[_ngcontent-%COMP%]     app-tabs .new-tag{left:10.3125rem}.header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]{background-color:#e2e7ec;border-radius:.5rem;flex-wrap:wrap;display:flex}body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]{background-color:#e2e7ec}.header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{padding:.56875rem .65rem;margin:.1875rem;background-color:transparent;border-radius:.8125rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{color:#818ea3}.header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{border-radius:.5rem;background-color:#f4f5f6;color:#142028}body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#142028}.header-tabs[_ngcontent-%COMP%]   .tabs-bar[_ngcontent-%COMP%]   .tab.disabled[_ngcontent-%COMP%]{opacity:.5}.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;flex:1;justify-content:flex-end}@media (max-width: 599px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{width:100%}}.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .row-icon[_ngcontent-%COMP%]{color:#142028}.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .trade-history-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;justify-content:flex-end;width:100%;flex-wrap:wrap}.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:13px;font-weight:400}@media (max-width: 599px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:14px;font-weight:500;margin-left:0!important;padding-left:.25rem;text-transform:uppercase}}.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.trade-tab-title[_ngcontent-%COMP%]{white-space:nowrap}@media (max-width: 599px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.trade-tab-title[_ngcontent-%COMP%]{font-size:13px;font-weight:400;margin-right:0!important;text-transform:unset}}@media (max-width: 599px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.trade-tab-title[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-right:0!important}}@media (max-width: 599px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.price-alert-title[_ngcontent-%COMP%]{font-size:13px;font-weight:400;text-transform:unset}}@media (max-width: 899px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.price-alert-title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{text-transform:uppercase;margin-bottom:.625rem;display:block;font-size:14px;font-weight:500}}@media (max-width: 899px){.header-tabs[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h6.price-alert-title[_ngcontent-%COMP%]   .alerts-info[_ngcontent-%COMP%]{font-size:13px;line-height:normal}}.filter-apply[_ngcontent-%COMP%]{display:flex;background-color:#e2e7ec;color:#142028;align-items:center;font-size:.6875rem;font-weight:400;text-decoration:none;border-radius:3.125rem;padding:.25rem .5rem;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]{color:#142028}.filter-apply[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:3.125rem;margin-right:.25rem}.filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff;color:#142028;border-radius:3.125rem;width:.9375rem;height:.9375rem;display:flex;align-items:center;justify-content:center;margin-left:.25rem}body.dark-theme   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#fff}body.dark-theme   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .filter-apply[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.column-left[_ngcontent-%COMP%]{background-color:#f4f5f6;border-radius:1rem;min-height:21.875rem}body.dark-theme   [_nghost-%COMP%]   .column-left[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .column-left[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .column-left[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .column-left[_ngcontent-%COMP%]{background-color:#f4f5f6}.left-container[_ngcontent-%COMP%]{margin-right:10px}.right-container[_ngcontent-%COMP%]{margin-left:10px}.section-container[_ngcontent-%COMP%]{margin-bottom:10px}.card[_ngcontent-%COMP%]{background-color:#f4f5f6;box-shadow:none;border-radius:1rem}body.dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#f4f5f6}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#f4f5f6!important;width:100%;border-radius:0 0 1rem 1rem}body.dark-theme   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#f4f5f6!important}@media (max-width: 599px){[_nghost-%COMP%]     .ngx-datatable.material{height:auto;min-height:0}}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#23323c!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-left{background-color:#e2e7ec!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.buy-color){color:#17c671!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.sell-color){color:#ea3943!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.burn-color){color:#ffdbad!important}[_nghost-%COMP%]     .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover datatable-body-cell:is(.mint-color){color:#b2e1ff!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header{background-color:#f4f5f6!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important;color:#818ea3;border-color:#e2e7ec;border-bottom:.0625rem solid;font-weight:400}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#142028!important}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-header .datatable-header-cell{border-color:#e2e7ec}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row.active, [_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row.active:hover .datatable-row-group{background-color:#a4f2c230}[_nghost-%COMP%]     .ngx-datatable.material .datatable-summary-row .datatable-body-row{background-color:inherit;padding:.3125rem 0}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body-row .datatable-row-group .datatable-body-cell{font-size:13px!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{border-radius:3.125rem;color:#3d5170}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#cacedb}body.dark-theme   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#cacedb}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#3d5170}body.light   [_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a{color:#3d5170}[_nghost-%COMP%]     .ngx-datatable.material .datatable-footer .datatable-pager a:active{border-radius:.9375rem}thead[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#142028!important}body.dark-theme[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#142028!important}body.light   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{background-color:#f4f5f6!important}body.dark-theme   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.dark-theme[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   thead[_ngcontent-%COMP%], body.light   [_nghost-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], body.light[_ngcontent-%COMP%]   thead.bg-light[_ngcontent-%COMP%]{color:#818ea3}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead.bg-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}[_nghost-%COMP%]     .social .social-icons a app-icon svg path, [_nghost-%COMP%]     .social .social-icons div app-icon svg path{fill:#142028}[_nghost-%COMP%]     .social .social-icons a app-icon svg path:hover, [_nghost-%COMP%]     .social .social-icons a app-icon svg path:focus, [_nghost-%COMP%]     .social .social-icons div app-icon svg path:hover, [_nghost-%COMP%]     .social .social-icons div app-icon svg path:focus{fill:#3d5170}body.dark-theme   [_nghost-%COMP%]     .button-help{background-color:#23323c!important;color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .change-layout{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .change-layout:hover, body.dark-theme   [_nghost-%COMP%]     .change-layout.active{background-color:#3a4956!important}body.dark-theme   [_nghost-%COMP%]     .aggregator-container{box-shadow:0 0 .3125rem .0625rem #0000004d!important}body.dark-theme   [_nghost-%COMP%]     .open-settings, body.dark-theme   [_nghost-%COMP%]     .open-favs{color:#cacedb}body.dark-theme   [_nghost-%COMP%]     .favs-button:hover fa-icon, body.dark-theme   [_nghost-%COMP%]     .favs-button:is(.active) fa-icon{background-color:#17c4714d!important}body.dark-theme   [_nghost-%COMP%]     .favs-button:is(.active):hover fa-icon{background-color:#23323c!important}body.dark-theme   [_nghost-%COMP%]     .social .social-icons a app-icon svg path, body.dark-theme   [_nghost-%COMP%]     .social .social-icons div app-icon svg path{fill:#fff!important}body.dark-theme   [_nghost-%COMP%]     .social .social-icons a app-icon svg path:hover, body.dark-theme   [_nghost-%COMP%]     .social .social-icons a app-icon svg path:focus, body.dark-theme   [_nghost-%COMP%]     .social .social-icons div app-icon svg path:hover, body.dark-theme   [_nghost-%COMP%]     .social .social-icons div app-icon svg path:focus{fill:#cacedb!important}body.dark-theme   [_nghost-%COMP%]     .token-price strong .launch-price-badge{background-color:#17c67166!important;color:#0bff88}.token-price[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-weight:400;font-size:13px;line-height:1.1875rem;color:#cacedb;justify-content:flex-end;margin-bottom:.5rem;align-items:center}.token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{cursor:pointer;font-size:28px;font-weight:500;color:#142028;padding:.625rem;display:flex;align-items:center;gap:.375rem}body.dark-theme   [_nghost-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:#e2e7ec;border-radius:.625rem}body.dark-theme   [_nghost-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]:hover{background-color:#e2e7ec}.token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   .launch-price-badge[_ngcontent-%COMP%]{background-color:#17c671;color:#0bff88;font-size:12px;padding:.125rem .5rem;border-radius:.3125rem;display:flex;align-items:center;justify-content:center;height:max-content;font-weight:500}.token-price_indicators[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{font-size:12px;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .token-price_indicators[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .token-price_indicators[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .token-price_indicators[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .token-price_indicators[_ngcontent-%COMP%]   .symbol[_ngcontent-%COMP%]{color:#818ea3}@media (max-width: 1023px){.token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{padding-left:0}}@media (max-width: 767px){.token-price[_ngcontent-%COMP%]{width:100%;justify-content:space-between}}@keyframes _ngcontent-%COMP%_fadeIn{0%{background:rgba(38,44,67,.062745098);filter:brightness(3);opacity:0}50%{opacity:.5}to{opacity:1}}@media screen and (min-width: 1024px) and (max-width: 1400px){app-favorites-list[_ngcontent-%COMP%]{top:0;right:0;width:23.125rem;z-index:99991;position:fixed;border-radius:0;height:100%;box-shadow:0 .25rem .3125rem #00000024,0 .0625rem .625rem #0000001f,0 .125rem .25rem -.0625rem #0003}app-favorites-list.layout-flipped[_ngcontent-%COMP%]{right:unset}  app-favorites-list .footer-favs{position:absolute;bottom:0}}.mobile-container[_ngcontent-%COMP%]{margin:.625rem}.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:.5rem .625rem;background-color:#fff;z-index:999;margin:0 -.625rem .625rem}body.dark-theme   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#0b1217}body.dark-theme[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#0b1217}body.light   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#fff}body.light[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background-color:#fff}@media (max-width: 1023px){.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin:0 -.625rem}.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:auto}}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]{background-color:#f4f5f6;box-shadow:0 .25rem .25rem #00000040;z-index:999992;position:sticky;top:0}body.dark-theme   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]{background-color:#f4f5f6}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]{justify-content:flex-start}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .token-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .social-container[_ngcontent-%COMP%], .mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:none}.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   app-chain-selector[_ngcontent-%COMP%]    {margin-right:.625rem}.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   app-chain-selector[_ngcontent-%COMP%]     .selector-container .item-selected{min-width:auto;padding-right:0}.mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:space-between;flex-flow:row wrap;gap:.5rem;background-color:#f4f5f6;padding:1.2rem 1.2rem 1rem;border-radius:1rem 1rem 0 0}body.dark-theme   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{background-color:#f4f5f6}@media (max-width: 991px){.mobile-container[_ngcontent-%COMP%]   .pair-header[_ngcontent-%COMP%]{flex-direction:column}}.change-layout[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;cursor:pointer;height:2.25rem;border-radius:3.125rem;border:none;padding:.375rem .75rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;background-color:#e2e7ec;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]{color:#818ea3}.change-layout[_ngcontent-%COMP%]:hover, .change-layout.active[_ngcontent-%COMP%]{color:#3d5170;background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .change-layout.active[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .change-layout.active[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .change-layout[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .change-layout.active[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .change-layout[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .change-layout.active[_ngcontent-%COMP%]{color:#3d5170}app-contract-details[_ngcontent-%COMP%]     .dext-audcontract{padding:1.2rem}.view-honeypot-links[_ngcontent-%COMP%]     .dext-audcontract{padding:1.2rem 1.2rem 0}.alert[_ngcontent-%COMP%]{font-size:13px}@media (max-width: 1023px){  app-footer .main-footer.with-tabs{flex-direction:column-reverse;height:auto;padding:1rem 1rem 5.0625rem}  app-footer .main-footer.with-tabs .social-links{text-align:left;width:100%;display:block;margin-left:0}  app-footer .main-footer.with-tabs .more-info{align-items:flex-start;text-align:left;margin-right:0}  app-footer .main-footer.with-tabs .more-info .copyright{display:inline-block;width:100%;padding:.3125rem 0 .625rem;text-align:left}  app-footer .main-footer.with-tabs .more-info .nav{width:100%;justify-content:flex-start;padding-bottom:0}  app-footer .main-footer.with-tabs .more-info .nav a{margin-left:0!important;width:50%}  app-footer .main-footer.with-tabs .more-info .nav a:not(:last-child){margin-bottom:.3125rem}}.coinzilla[_ngcontent-%COMP%]{margin-bottom:.2rem;border-radius:1rem;overflow:hidden}.coinzilla.notIsLayoutFlipped[_ngcontent-%COMP%]{margin:.625rem;margin-left:0}.coinzilla.isFavoritesAndFlipped[_ngcontent-%COMP%]{margin:.625rem 0}.coinzilla-mobile[_ngcontent-%COMP%]{display:block!important;margin:0 auto .5rem}@media (max-width: 1023px){.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .price-indicators[_ngcontent-%COMP%], .mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .price-indicators-container[_ngcontent-%COMP%]{width:100%}.mobile-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .price-indicators-container[_ngcontent-%COMP%]{margin-top:.625rem}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .price-indicators-container[_ngcontent-%COMP%]{margin-top:0}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .copy-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px!important;padding-top:.3125rem}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .erc-wallet[_ngcontent-%COMP%]{margin-left:0}.mobile-container[_ngcontent-%COMP%]   .header.permanent[_ngcontent-%COMP%]   .erc-wallet[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.125rem!important}.mini-dext-score[_ngcontent-%COMP%]{line-height:1.5rem;color:#142028}body.dark-theme   [_nghost-%COMP%]   .mini-dext-score[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .mini-dext-score[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .mini-dext-score[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .mini-dext-score[_ngcontent-%COMP%]{color:#142028}.mini-dext-score[_ngcontent-%COMP%]   .mini-dext-score__title[_ngcontent-%COMP%]{display:inline-block;font-size:12px;margin-right:.5rem!important}.mini-dext-score[_ngcontent-%COMP%]   .mini-dext-score__result[_ngcontent-%COMP%]{display:inline-block;text-align:center;width:2.5rem;height:1.5rem;border-radius:.3125rem .3125rem .3125rem 0;font-size:.625rem;color:#fff!important}.mini-dext-score[_ngcontent-%COMP%]   .mini-dext-score__result.no-dextscore[_ngcontent-%COMP%]{color:#142028!important;background-color:#cacedb!important}.mini-dext-score[_ngcontent-%COMP%]   .mini-dext-score__result[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mini-dext-score[_ngcontent-%COMP%]   .mini-dext-score__danger[_ngcontent-%COMP%]{background:#ea3943}}@media (max-width: 1023px){  app-header-bar header .extra-container{flex:1 0 0}  app-header-bar header .token-search-container{justify-content:start!important}}@media (max-width: 320px){  app-header-bar header{min-height:5rem;height:auto!important}  app-header-bar header>div{width:50%}  app-header-bar header .extra-container{order:3;padding-left:0}  app-header-bar header .user-info-container>div{justify-content:end!important}  app-header-bar header .token-search-container{margin-top:.3125rem;justify-content:start!important}}.change-layout-container[_ngcontent-%COMP%]{position:relative}.not-wallet-swaps[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}.not-wallet-swaps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .not-wallet-swaps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .not-wallet-swaps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .not-wallet-swaps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .not-wallet-swaps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#142028}@media (max-width: 350px){.fav-social-container[_ngcontent-%COMP%]{flex-wrap:wrap}.fav-social-container[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{min-width:50%}.fav-social-container[_ngcontent-%COMP%]   .logo-ventures-mobile[_ngcontent-%COMP%]{order:2;margin-top:.625rem}}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {border-radius:.625rem;margin-bottom:.625rem;width:100%;background-color:#f4f5f6}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#142028}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]    {background-color:#f4f5f6}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul{border-radius:.625rem;background-color:#f4f5f6;justify-content:space-between;width:100%}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul{background-color:#142028}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul{background-color:#f4f5f6}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li{flex:1;display:flex}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button{padding:0!important;line-height:1.875rem!important;flex:1;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button{color:#818ea3}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button{color:#818ea3}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button{color:#818ea3}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{background-color:#e2e7ec;color:#142028;cursor:default}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{background-color:#23323c}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{color:#fff}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{color:#142028}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button.active{color:#142028}.tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{background-color:#e2e7ec;color:#142028}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{background-color:#23323c}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{color:#fff}body.light   [_nghost-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{color:#142028}body.light[_ngcontent-%COMP%]   .tabs-pool-swap[_ngcontent-%COMP%]   app-tabs[_ngcontent-%COMP%]     ul li button:hover{color:#142028}.line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6;width:15rem;height:.0625rem;border:none;opacity:.8;margin:1rem 1.25rem}body.dark-theme   [_nghost-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#3a4956}body.dark-theme[_ngcontent-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#3a4956}body.light   [_nghost-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .line-banners[_ngcontent-%COMP%]{background-color:#f4f5f6}.chain_dropdown_mobile[_ngcontent-%COMP%]     .dropdown-list{overflow-y:scroll;max-height:18.75rem}  app-video-button .video-button,   app-video-button .video-container{bottom:.9375rem!important}@media screen and (max-width: 1023px){  app-video-button .video-button,   app-video-button .video-container{bottom:4.375rem!important}}@media screen and (min-width: 1023px){  app-video-button.align-with-footer .video-button,   app-video-button.align-with-footer .video-container{bottom:5.8125rem!important}}.search-token-button[_ngcontent-%COMP%]{display:flex;align-items:center;background:none;border:none;background-color:#e2e7ec;color:#142028;border-radius:3.125rem;width:2.25rem;height:36px;justify-content:center;margin-right:.375rem}body.dark-theme   [_nghost-%COMP%]   .search-token-button[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .search-token-button[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .search-token-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .search-token-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .search-token-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .search-token-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .search-token-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .search-token-button[_ngcontent-%COMP%]{color:#142028}.search-token-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:16px}.search-token-button[_ngcontent-%COMP%]:hover{color:#00b8d8!important}.loading-exchange[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:center;align-items:center;position:relative;height:100%;width:100%;text-align:center}.honeypot-links[_ngcontent-%COMP%]{display:flex;align-content:center;gap:.625rem;font-size:12px;padding:0 1.2rem;margin-bottom:1.2rem}.honeypot-links.not-contract[_ngcontent-%COMP%]{padding:0 1.2rem .7rem;margin-bottom:0}.honeypot-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.honeypot-links[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.625rem}.favorite-button[_ngcontent-%COMP%]{background:none;border:none;display:flex;align-items:center;background-color:#e2e7ec;color:#142028;border-radius:3.125rem;padding:.5rem .625rem;height:2.25rem;justify-content:center;line-height:2.25rem;width:2.25rem}body.dark-theme   [_nghost-%COMP%]   .favorite-button[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .favorite-button[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .favorite-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .favorite-button[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .favorite-button[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .favorite-button[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .favorite-button[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .favorite-button[_ngcontent-%COMP%]{color:#142028}.favorite-button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:16px}app-new-pairs-search-mobile[_ngcontent-%COMP%]     .search-container{margin-top:-4.25rem;width:calc(100% - 40px)}.coinzilla-banner[_ngcontent-%COMP%]{margin-bottom:.625rem}.bot-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;gap:.25rem}.bot-container.form-check[_ngcontent-%COMP%]{padding-left:0;margin:0}.bot-container.form-switch[_ngcontent-%COMP%]{padding-left:0}.bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap;color:#142028}body.dark-theme   [_nghost-%COMP%]   .bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{color:#142028}@media (min-width: 599px){.bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{font-size:12px}}.bot-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:2.1875rem;height:1.25rem;min-width:0;margin-left:.25rem}.bot-container[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{margin-top:0}@media (min-width: 599px){.bot-container[_ngcontent-%COMP%]   .bot-description[_ngcontent-%COMP%]{font-size:12px}.bot-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:1.875rem;height:.9375rem;min-width:0;margin-left:.25rem}.bot-container[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]{margin-top:0;cursor:pointer}}'],
                data: {
                    animation: [(0,
                    y.X$)("simpleFadeAnimation", [(0,
                    y.eR)("*=>*", [(0,
                    y.oB)({
                        opacity: 0
                    }), (0,
                    y.jt)(200)])])]
                },
                changeDetection: 0
            }),
            n
        }
        )();
        const Zd = [{
            path: "",
            component: ie,
            canActivate: [f.kG, (n,i)=>(0,
            t.f3M)(c.lN8).canActivate(n, i), c.PLX],
            resolve: {
                currentChain: c.VU5,
                exchangeList: (n,i)=>(0,
                t.f3M)(c.YfE).resolve(n, i),
                currentLanguage: f.q3,
                currentNavigation: f.K5
            }
        }, {
            path: ":pair",
            component: ie,
            canActivate: [f.kG, (n,i)=>(0,
            t.f3M)(c.lN8).canActivate(n, i), c.fvd],
            resolve: {
                currentChain: c.VU5,
                exchangeList: (n,i)=>(0,
                t.f3M)(c.YfE).resolve(n, i),
                currentLanguage: f.q3,
                currentNavigation: f.K5
            }
        }]
    }
}]);
