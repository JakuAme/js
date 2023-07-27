"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[1307], {
    1307: (rt,f,a)=>{
        a.d(f, {
            G: ()=>ct
        });
        var t = a(94650)
          , _ = a(12113)
          , l = a(89383)
          , s = a(92216)
          , d = a(99703)
          , p = a(49319)
          , r = a(36895);
        function m(e, i) {
            if (1 & e && (t.TgZ(0, "span", 10),
            t._uU(1),
            t.ALo(2, "number"),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2).$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Oqu("" !== n.value ? t.xi3(2, 1, n.value, "1.0-2") + "%" : o.Unknown)
            }
        }
        function x(e, i) {
            if (1 & e && (t.TgZ(0, "span", 10),
            t._uU(1),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2).$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Oqu("" !== n.value ? n.value : o.Unknown)
            }
        }
        function C(e, i) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, m, 3, 4, "span", 8),
            t.YNc(2, x, 2, 1, "ng-template", null, 9, t.W1O),
            t.BQk()),
            2 & e) {
                const n = t.MAs(3)
                  , o = t.oxw().$implicit
                  , c = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", c.isPercentageField(o.key, o.value))("ngIfElse", n)
            }
        }
        function h(e, i) {
            if (1 & e && (t.TgZ(0, "a", 12),
            t.ALo(1, "scannerWalletUrl"),
            t._uU(2),
            t.qZA()),
            2 & e) {
                const n = t.oxw(2).$implicit
                  , o = t.oxw();
                t.Q6J("href", t.xi3(1, 2, o.chain, n.value), t.LSH),
                t.xp6(2),
                t.hij(" ", n.value.slice(0, 4) + "..." + n.value.slice(38, 42), " ")
            }
        }
        function v(e, i) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, h, 3, 5, "a", 11),
            t.BQk()),
            2 & e) {
                const n = t.oxw().$implicit
                  , o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", o.isAddressKey(n.key))
            }
        }
        function P(e, i) {
            if (1 & e && (t.ynx(0),
            t.TgZ(1, "span", 10),
            t._uU(2),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(2),
                t.Oqu(n.Unknown)
            }
        }
        function O(e, i) {
            if (1 & e && (t._UZ(0, "fa-icon", 13),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw().$implicit
                  , o = t.oxw();
                t.s9C("ngbTooltip", t.lcZ(1, 3, "pair_explorer.renounced_contract_tooltip")),
                t.Q6J("icon", o.getIcon(n.icon))("disableTooltip", o.isIconTooltip(n.icon))
            }
        }
        const A = function() {
            return ["fal", "question"]
        };
        function M(e, i) {
            1 & e && t._UZ(0, "fa-icon", 14),
            2 & e && t.Q6J("icon", t.DdM(1, A))
        }
        const T = function() {
            return ["fal", "info-circle"]
        };
        function k(e, i) {
            if (1 & e && (t.ynx(0),
            t.TgZ(1, "div", 1)(2, "div", 2),
            t._UZ(3, "fa-icon", 3),
            t.ALo(4, "translate"),
            t.TgZ(5, "span", 4),
            t._uU(6),
            t.ALo(7, "translate"),
            t.qZA()(),
            t.TgZ(8, "div"),
            t.YNc(9, C, 4, 2, "ng-container", 5),
            t.YNc(10, v, 2, 1, "ng-container", 5),
            t.YNc(11, P, 3, 1, "ng-container", 5),
            t.YNc(12, O, 2, 5, "fa-icon", 6),
            t.YNc(13, M, 1, 2, "fa-icon", 7),
            t.qZA()(),
            t.BQk()),
            2 & e) {
                const n = i.$implicit
                  , o = t.oxw();
                t.xp6(3),
                t.s9C("ngbTooltip", t.lcZ(4, 11, "pair_explorer.external_audits.generic.tp_" + n.tooltip)),
                t.Q6J("icon", t.DdM(15, T)),
                t.xp6(3),
                t.Oqu(t.lcZ(7, 13, "pair_explorer.external_audits.generic." + n.name)),
                t.xp6(2),
                t.Gre("d-flex align-items-center justify-content-end provider-section ", o.getColor(n.color), ""),
                t.xp6(1),
                t.Q6J("ngIf", !(null != n.value && n.value.length && o.isAddressKey(n.key))),
                t.xp6(1),
                t.Q6J("ngIf", "" !== n.value && n.value !== o.Unknown && o.isAddressKey(n.key)),
                t.xp6(1),
                t.Q6J("ngIf", o.isAddressKey(n.key) && ("" === n.value || n.value === o.Unknown)),
                t.xp6(1),
                t.Q6J("ngIf", n.icon),
                t.xp6(1),
                t.Q6J("ngIf", !n.icon && "" === n.value)
            }
        }
        let b = (()=>{
            class e {
                constructor(n) {
                    this._exchangeService = n,
                    this.genericAuditManaged = [],
                    this.chain = this._exchangeService.chain ?? d.qop.Ethereum,
                    this.Unknown = d.b_Z,
                    this.icons = {
                        positive: ["fal", "check"],
                        negative: ["fal", "face-disappointed"],
                        safe: ["fal", "shield-check"],
                        unsafe: ["fal", "shield-slash"],
                        unknown: ["fal", "question"],
                        info: ["fal", "info-circle"]
                    }
                }
                isPercentageField(n, o) {
                    return o !== d.b_Z && ("sell_tax" === n || "buy_tax" === n || "owner_percent" === n || "creator_percent" === n)
                }
                isAddressKey(n) {
                    return "owner_address" === n || "creator_address" === n
                }
                trackByValue(n, o) {
                    return o.value
                }
                isIconTooltip(n) {
                    return n.toString() !== ["fal", "info-circle"].toString()
                }
                getIcon(n) {
                    return this.icons[n]
                }
                getColor(n) {
                    return "unknown" === n || "info" === n ? "" : "positive" === n ? "buy-color" : "sell-color"
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(d.OqV))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-generic-provider"]],
                inputs: {
                    genericAuditManaged: "genericAuditManaged"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 1,
                vars: 2,
                consts: [[4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "d-flex", "justify-content-between", "align-items-center", "audit-container"], [1, "d-flex", "align-items-center", "justify-content-start", "provider-section"], ["placement", "top-left", 1, "me-2", "text-muted", 3, "ngbTooltip", "icon"], [1, "provider-name"], [4, "ngIf"], [3, "icon", "ngbTooltip", "disableTooltip", 4, "ngIf"], [3, "icon", 4, "ngIf"], ["class", "provider-name me-2", 4, "ngIf", "ngIfElse"], ["elsePercentageTemplate", ""], [1, "provider-name", "me-2"], ["class", "provider-name me-2", "rel", "noreferer noopener", "target", "_blank", 3, "href", 4, "ngIf"], ["rel", "noreferer noopener", "target", "_blank", 1, "provider-name", "me-2", 3, "href"], [3, "icon", "ngbTooltip", "disableTooltip"], [3, "icon"]],
                template: function(n, o) {
                    1 & n && t.YNc(0, k, 14, 16, "ng-container", 0),
                    2 & n && t.Q6J("ngForOf", o.genericAuditManaged)("ngForTrackBy", o.trackByValue)
                },
                dependencies: [r.ax, s.uH, s.BN, p._L, r.O5, r.JJ, d.P2u, l.aw, l.X$],
                styles: [".audit-container[_ngcontent-%COMP%]{border-color:#e2e7ec;border-bottom:.0625rem solid;height:2.125rem}body.dark-theme   [_nghost-%COMP%]   .audit-container[_ngcontent-%COMP%]{border-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .audit-container[_ngcontent-%COMP%]{border-color:#23323c}body.light   [_nghost-%COMP%]   .audit-container[_ngcontent-%COMP%]{border-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .audit-container[_ngcontent-%COMP%]{border-color:#e2e7ec}.audit-container[_ngcontent-%COMP%]   .provider-section[_ngcontent-%COMP%]{width:33%}.audit-container[_ngcontent-%COMP%]   .provider-section[_ngcontent-%COMP%]:first-child{width:67%}.audit-container[_ngcontent-%COMP%]   .provider-name[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"],
                changeDetection: 0
            }),
            e
        }
        )();
        const y = ["auditsTopPosition"];
        function Z(e, i) {
            if (1 & e && t._UZ(0, "fa-icon", 10),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("icon", n.isOpen ? "chevron-down" : "chevron-right")
            }
        }
        function w(e, i) {
            if (1 & e && (t.ynx(0),
            t._UZ(1, "app-generic-provider", 11),
            t.BQk()),
            2 & e) {
                const n = t.oxw().$implicit;
                t.xp6(1),
                t.Q6J("genericAuditManaged", n.isOpen ? n.data : n.data.slice(0, 4))
            }
        }
        function Q(e, i) {
            if (1 & e && t._UZ(0, "app-generic-provider", 11),
            2 & e) {
                const n = t.oxw(2).$implicit;
                t.Q6J("genericAuditManaged", n.data)
            }
        }
        function I(e, i) {
            if (1 & e && t.YNc(0, Q, 1, 1, "app-generic-provider", 12),
            2 & e) {
                const n = t.oxw().$implicit;
                t.Q6J("ngIf", n.isOpen)
            }
        }
        function N(e, i) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 13),
                t._UZ(2, "fa-icon", 14),
                t.TgZ(3, "span", 15),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const c = t.oxw().$implicit
                      , g = t.oxw();
                    return t.KtG(g.open(c))
                }),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()(),
                t.BQk()
            }
            2 & e && (t.xp6(2),
            t.Q6J("icon", "chevron-right"),
            t.xp6(2),
            t.hij(" ", t.lcZ(5, 2, "pair_explorer.more_info"), " "))
        }
        function J(e, i) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 13),
                t._UZ(2, "fa-icon", 14),
                t.TgZ(3, "span", 15),
                t.NdJ("click", function() {
                    t.CHM(n);
                    const c = t.oxw().$implicit
                      , g = t.oxw();
                    return t.KtG(g.open(c))
                }),
                t._uU(4),
                t.ALo(5, "translate"),
                t.qZA()(),
                t.BQk()
            }
            2 & e && (t.xp6(2),
            t.Q6J("icon", "chevron-up"),
            t.xp6(2),
            t.hij(" ", t.lcZ(5, 2, "pair_explorer.less_info"), " "))
        }
        function U(e, i) {
            if (1 & e) {
                const n = t.EpF();
                t.ynx(0),
                t.TgZ(1, "div", 3),
                t.NdJ("click", function() {
                    const g = t.CHM(n).$implicit
                      , at = t.oxw();
                    return t.KtG(at.open(g))
                }),
                t._UZ(2, "img", 4),
                t.TgZ(3, "span", 5),
                t._uU(4),
                t.qZA(),
                t.YNc(5, Z, 1, 1, "fa-icon", 6),
                t.qZA(),
                t.YNc(6, w, 2, 1, "ng-container", 7),
                t.YNc(7, I, 1, 1, "ng-template", null, 8, t.W1O),
                t.YNc(9, N, 6, 4, "ng-container", 9),
                t.YNc(10, J, 6, 4, "ng-container", 9),
                t.BQk()
            }
            if (2 & e) {
                const n = i.$implicit
                  , o = t.MAs(8)
                  , c = t.oxw();
                t.xp6(2),
                t.Q6J("src", n.image, t.LSH)("className", n.provider + "-logo provider-logo")("ngClass", "goplus" === n.provider ? " me-3" : " me-2")("alt", n.provider + " logo"),
                t.xp6(2),
                t.Oqu(c.getTitle(n.provider)),
                t.xp6(1),
                t.Q6J("ngIf", "goplus" !== n.provider),
                t.xp6(1),
                t.Q6J("ngIf", "goplus" === n.provider)("ngIfElse", o),
                t.xp6(3),
                t.Q6J("ngIf", !n.isOpen && "goplus" === n.provider),
                t.xp6(1),
                t.Q6J("ngIf", n.isOpen)
            }
        }
        let Y = (()=>{
            class e {
                constructor(n) {
                    this._cdRef = n
                }
                ngOnInit() {
                    this.audits && (this.externalAudits = this.audits.external)
                }
                get values() {
                    return Object.values(this.externalAudits ?? {})
                }
                trackByAudit(n) {
                    return n
                }
                open(n) {
                    for (const o of this.values)
                        o !== n && (o.isOpen = !1);
                    n.isOpen = !n.isOpen,
                    this.auditsTopPosition.nativeElement.scrollIntoView(),
                    this._cdRef.detectChanges()
                }
                getTitle(n) {
                    return {
                        goplus: "GoPlus Security",
                        hapi: "Hapi"
                    }[n]
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(t.sBO))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-audit-provider"]],
                viewQuery: function(n, o) {
                    if (1 & n && t.Gf(y, 7),
                    2 & n) {
                        let c;
                        t.iGM(c = t.CRH()) && (o.auditsTopPosition = c.first)
                    }
                },
                inputs: {
                    audits: "audits"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 3,
                vars: 2,
                consts: [[1, "audit-provider-container"], ["auditsTopPosition", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "audit-provider", "d-flex", "justify-content-start", "align-items-center", "cursor-pointer", 3, "click"], [3, "src", "className", "ngClass", "alt"], [1, "provider-title"], ["class", "provider-icon ms-3", 3, "icon", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["otherProviders", ""], [4, "ngIf"], [1, "provider-icon", "ms-3", 3, "icon"], [3, "genericAuditManaged"], [3, "genericAuditManaged", 4, "ngIf"], [1, "info-text-container", "my-2"], [1, "provider-icon", "me-3", "ms-1", 3, "icon"], [1, "info-text", 3, "click"]],
                template: function(n, o) {
                    1 & n && (t.TgZ(0, "div", 0, 1),
                    t.YNc(2, U, 11, 10, "ng-container", 2),
                    t.qZA()),
                    2 & n && (t.xp6(2),
                    t.Q6J("ngForOf", o.values)("ngForTrackBy", o.trackByAudit))
                },
                dependencies: [r.O5, b, s.uH, s.BN, l.aw, l.X$, r.sg, r.mk],
                styles: [".audit-provider-container[_ngcontent-%COMP%]   .audit-provider[_ngcontent-%COMP%]{padding:.625rem 0;width:100%}.audit-provider-container[_ngcontent-%COMP%]   .audit-provider[_ngcontent-%COMP%]   .provider-icon[_ngcontent-%COMP%]{font-size:12px}.audit-provider-container[_ngcontent-%COMP%]   .audit-provider[_ngcontent-%COMP%]   .provider-logo[_ngcontent-%COMP%]{height:1rem;width:1rem}.audit-provider-container[_ngcontent-%COMP%]   .audit-provider[_ngcontent-%COMP%]   .hapi-logo[_ngcontent-%COMP%]{height:1.5rem;width:1.5rem}.audit-provider-container[_ngcontent-%COMP%]   .audit-provider[_ngcontent-%COMP%]   .provider-title[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:14px;line-height:20px;line-height:2.75rem}.audit-provider-container[_ngcontent-%COMP%]   .info-text-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;cursor:pointer}.audit-provider-container[_ngcontent-%COMP%]   .info-text-container[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{color:#00b8d8}"],
                changeDetection: 0
            }),
            e
        }
        )();
        var D = a(77575)
          , q = a(62289);
        function L(e, i) {
            1 & e && (t.TgZ(0, "span"),
            t._uU(1),
            t.ALo(2, "translate"),
            t.qZA()),
            2 & e && (t.xp6(1),
            t.hij(" (", t.lcZ(2, 1, "pair_explorer.audit_results"), ")"))
        }
        function B(e, i) {
            1 & e && (t.TgZ(0, "strong", 9),
            t._uU(1),
            t.ALo(2, "translate"),
            t.TgZ(3, "a", 10),
            t.ALo(4, "translate"),
            t._UZ(5, "fa-icon", 7),
            t.qZA()()),
            2 & e && (t.xp6(1),
            t.hij(" ", t.lcZ(2, 2, "pair_explorer.renounced_contract"), " "),
            t.xp6(2),
            t.Q6J("ngbTooltip", t.lcZ(4, 4, "pair_explorer.renounced_contract_tooltip")))
        }
        function z(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span", 11),
            t._uU(2, "No data"),
            t.qZA(),
            t.BQk())
        }
        function F(e, i) {
            if (1 & e && (t.ynx(0),
            t.TgZ(1, "strong"),
            t._uU(2),
            t.ALo(3, "translate"),
            t.YNc(4, L, 3, 3, "span", 1),
            t.TgZ(5, "a", 6),
            t.ALo(6, "translate"),
            t._UZ(7, "fa-icon", 7),
            t.qZA()(),
            t.YNc(8, B, 6, 6, "strong", 8),
            t.YNc(9, z, 3, 0, "ng-container", 1),
            t.BQk()),
            2 & e) {
                const n = t.oxw();
                t.xp6(2),
                t.hij(" ", t.lcZ(3, 5, "pools_creator.audit"), " "),
                t.xp6(2),
                t.Q6J("ngIf", "mobileTablet" === n.mediaDevice),
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(6, 7, "pools_creator.audit_info")),
                t.xp6(3),
                t.Q6J("ngIf", null == n.tokenAudit ? null : n.tokenAudit.is_contract_renounced),
                t.xp6(1),
                t.Q6J("ngIf", !n.tokenAudit && !n.hasAuditProviders)
            }
        }
        function G(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span", 11),
            t._uU(2, "No data"),
            t.qZA(),
            t.BQk())
        }
        const u = function(e) {
            return {
                tokenName: e
            }
        };
        function j(e, i) {
            if (1 & e && (t.TgZ(0, "div", 13),
            t._UZ(1, "fa-icon", 14),
            t.TgZ(2, "span"),
            t._uU(3),
            t.ALo(4, "translate"),
            t.qZA()()),
            2 & e) {
                const n = t.oxw(3);
                t.xp6(3),
                t.hij(" ", t.xi3(4, 1, "pools_creator.audit_contract", t.VKq(4, u, n.tokenName)), " ")
            }
        }
        function $(e, i) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, j, 5, 6, "div", 12),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !(null != n.tokenAudit && n.tokenAudit.codeVerified))
            }
        }
        function V(e, i) {
            if (1 & e && (t._UZ(0, "fa-icon", 17),
            t.ALo(1, "translate")),
            2 & e) {
                const n = t.oxw(3);
                t.s9C("ngbTooltip", t.xi3(1, 2, "pools_creator.audit_contract", t.VKq(5, u, n.tokenName))),
                t.Q6J("placement", "auto")
            }
        }
        function K(e, i) {
            1 & e && (t.TgZ(0, "span", 11),
            t._uU(1, "Not verified"),
            t.qZA())
        }
        function E(e, i) {
            if (1 & e && (t.ynx(0),
            t.YNc(1, V, 2, 7, "fa-icon", 15),
            t.YNc(2, K, 2, 0, "span", 16),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !(null != n.tokenAudit && n.tokenAudit.codeVerified)),
                t.xp6(1),
                t.Q6J("ngIf", !(null != n.tokenAudit && n.tokenAudit.codeVerified))
            }
        }
        function R(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span"),
            t._uU(2, "Mint"),
            t.qZA(),
            t.BQk())
        }
        function H(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span"),
            t._uU(2, "Tx Lock"),
            t.qZA(),
            t.BQk())
        }
        function W(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span"),
            t._uU(2, "Proxy"),
            t.qZA(),
            t.BQk())
        }
        function S(e, i) {
            1 & e && (t.ynx(0),
            t.TgZ(1, "span"),
            t._uU(2, "Fees"),
            t.qZA(),
            t.BQk())
        }
        function X(e, i) {
            if (1 & e && (t.ynx(0),
            t.TgZ(1, "div", 18),
            t.ALo(2, "translate"),
            t.ALo(3, "translate"),
            t._UZ(4, "app-icon", 19),
            t.YNc(5, R, 3, 0, "ng-container", 1),
            t.qZA(),
            t.TgZ(6, "div", 18),
            t.ALo(7, "translate"),
            t.ALo(8, "translate"),
            t._UZ(9, "fa-icon", 20),
            t.YNc(10, H, 3, 0, "ng-container", 1),
            t.qZA(),
            t.TgZ(11, "div", 18),
            t.ALo(12, "translate"),
            t.ALo(13, "translate"),
            t._UZ(14, "fa-icon", 21),
            t.YNc(15, W, 3, 0, "ng-container", 1),
            t.qZA(),
            t.TgZ(16, "div", 22),
            t.ALo(17, "translate"),
            t.ALo(18, "translate"),
            t._UZ(19, "fa-icon", 23),
            t.YNc(20, S, 3, 0, "ng-container", 1),
            t.qZA(),
            t.BQk()),
            2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Tol(null != n.tokenAudit && n.tokenAudit.mint ? "opacity-3" : "disable-detail"),
                t.Q6J("ngbTooltip", n.getTooltip(null == n.tokenAudit ? null : n.tokenAudit.mint, t.lcZ(2, 24, "pools_creator.audit_mint"), t.lcZ(3, 26, "pools_creator.audit_disabled")))("tooltipClass", null != n.tokenAudit && n.tokenAudit.mint ? "opacity-3" : "disabled-tooltip")("placement", "auto"),
                t.xp6(4),
                t.Q6J("ngIf", n.activeLabel),
                t.xp6(1),
                t.Tol(null != n.tokenAudit && n.tokenAudit.lockTransactions ? "opacity-3" : "disable-detail"),
                t.Q6J("ngbTooltip", n.getTooltip(null == n.tokenAudit ? null : n.tokenAudit.lockTransactions, t.lcZ(7, 28, "pools_creator.audit_lock"), t.lcZ(8, 30, "pools_creator.audit_disabled")))("tooltipClass", null != n.tokenAudit && n.tokenAudit.lockTransactions ? "opacity-3" : "disabled-tooltip")("placement", "auto"),
                t.xp6(4),
                t.Q6J("ngIf", n.activeLabel),
                t.xp6(1),
                t.Tol(null != n.tokenAudit && n.tokenAudit.proxy ? "opacity-3" : "disable-detail"),
                t.Q6J("ngbTooltip", n.getTooltip(null == n.tokenAudit ? null : n.tokenAudit.proxy, t.lcZ(12, 32, "pools_creator.audit_proxy"), t.lcZ(13, 34, "pools_creator.audit_disabled")))("tooltipClass", null != n.tokenAudit && n.tokenAudit.proxy ? "opacity-3" : "disabled-tooltip")("placement", "auto"),
                t.xp6(4),
                t.Q6J("ngIf", n.activeLabel),
                t.xp6(1),
                t.Tol(null != n.tokenAudit && n.tokenAudit.unlimitedFees ? "opacity-3" : "disable-detail"),
                t.Q6J("tooltipClass", null != n.tokenAudit && n.tokenAudit.unlimitedFees ? "opacity-3" : "disabled-tooltip")("ngbTooltip", n.getTooltip(null == n.tokenAudit ? null : n.tokenAudit.unlimitedFees, t.lcZ(17, 36, "pools_creator.audit_fees"), t.lcZ(18, 38, "pools_creator.audit_disabled")))("placement", "auto"),
                t.xp6(4),
                t.Q6J("ngIf", n.activeLabel)
            }
        }
        function tt(e, i) {
            if (1 & e && (t.YNc(0, $, 2, 1, "ng-container", 1),
            t.YNc(1, E, 3, 2, "ng-container", 1),
            t.YNc(2, X, 21, 40, "ng-container", 1)),
            2 & e) {
                const n = t.oxw();
                t.Q6J("ngIf", n.highlightWhenNotVerified),
                t.xp6(1),
                t.Q6J("ngIf", !n.highlightWhenNotVerified),
                t.xp6(1),
                t.Q6J("ngIf", null == n.tokenAudit ? null : n.tokenAudit.codeVerified)
            }
        }
        function nt(e, i) {
            if (1 & e) {
                const n = t.EpF();
                t.TgZ(0, "a", 26),
                t.NdJ("click", function() {
                    return t.CHM(n),
                    t.oxw(2).emitUpdateAudit(),
                    t.KtG(!1)
                }),
                t._uU(1),
                t.qZA()
            }
            if (2 & e) {
                const n = t.oxw(2);
                t.xp6(1),
                t.Oqu(n.tokenAudit ? "Re-audit" : "Audit")
            }
        }
        function et(e, i) {
            1 & e && (t.TgZ(0, "span", 27),
            t._uU(1, "Auditing..."),
            t.qZA())
        }
        function ot(e, i) {
            if (1 & e && (t.TgZ(0, "div"),
            t.YNc(1, nt, 2, 1, "a", 24),
            t.YNc(2, et, 2, 0, "span", 25),
            t.qZA()),
            2 & e) {
                const n = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !n.isUpdatingAudit),
                t.xp6(1),
                t.Q6J("ngIf", n.isUpdatingAudit)
            }
        }
        function it(e, i) {
            if (1 & e && t._UZ(0, "app-audit-provider", 28),
            2 & e) {
                const n = t.oxw();
                t.Q6J("audits", n.tokenAudit)
            }
        }
        let ct = (()=>{
            class e {
                constructor(n) {
                    this._breakpointObserver = n,
                    this.isAdmin = !1,
                    this.isUpdatingAudit = !1,
                    this.updateAudit = new t.vpe,
                    this.activeTitle = !0,
                    this.activeLabel = !0,
                    this.activeAdmin = !0,
                    this.highlightWhenNotVerified = !1,
                    this.mediaDevice = ""
                }
                ngOnInit() {
                    this._breakpointObserver.observe([_.K5, _.mT]).subscribe(n=>{
                        this.mediaDevice = n.breakpoints[_.K5] ? "mobileTablet" : "desktop"
                    }
                    )
                }
                emitUpdateAudit() {
                    this.updateAudit.emit()
                }
                getTooltip(n, o, c) {
                    return n ? o : `${o} ${c}`
                }
                get hasAuditProviders() {
                    return !(!this.tokenAudit?.external?.goplus && !this.tokenAudit?.external?.hapi)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(t.Y36(q.Yg))
            }
            ,
            e.\u0275cmp = t.Xpm({
                type: e,
                selectors: [["app-contract-details"]],
                inputs: {
                    tokenAudit: "tokenAudit",
                    isAdmin: "isAdmin",
                    isUpdatingAudit: "isUpdatingAudit",
                    activeTitle: "activeTitle",
                    activeLabel: "activeLabel",
                    activeAdmin: "activeAdmin",
                    highlightWhenNotVerified: "highlightWhenNotVerified",
                    tokenName: "tokenName"
                },
                outputs: {
                    updateAudit: "updateAudit"
                },
                standalone: !0,
                features: [t.jDz],
                decls: 8,
                vars: 5,
                consts: [[1, "dext-audcontract"], [4, "ngIf"], [1, "dext-audcontract-icons"], [4, "ngIf", "ngIfElse"], ["withAudit", ""], [3, "audits", 4, "ngIf"], ["href", "javascript:", "placement", "top-right", 3, "ngbTooltip"], ["icon", "info-circle"], ["class", "renounced-contract-container", 4, "ngIf"], [1, "renounced-contract-container"], ["href", "javascript:", "placement", "top-left", 3, "ngbTooltip"], [1, "badge", "bg-light", "text-end"], ["class", "audcontract-notverified", 4, "ngIf"], [1, "audcontract-notverified"], ["icon", "exclamation-triangle", 1, "icon-warning"], ["icon", "exclamation-triangle", 3, "ngbTooltip", "placement", 4, "ngIf"], ["class", "badge bg-light text-end", 4, "ngIf"], ["icon", "exclamation-triangle", 3, "ngbTooltip", "placement"], [1, "d-flex", 3, "ngbTooltip", "tooltipClass", "placement"], ["name", "mintIcon"], ["icon", "lock"], ["icon", "project-diagram"], [1, "d-flex", 3, "tooltipClass", "ngbTooltip", "placement"], ["icon", "money-bill"], ["class", "audit", "href", "javascript:", 3, "click", 4, "ngIf"], ["class", "data-volume-right ps-1", 4, "ngIf"], ["href", "javascript:", 1, "audit", 3, "click"], [1, "data-volume-right", "ps-1"], [3, "audits"]],
                template: function(n, o) {
                    if (1 & n && (t.TgZ(0, "div", 0),
                    t.YNc(1, F, 10, 9, "ng-container", 1),
                    t.TgZ(2, "div", 2),
                    t.YNc(3, G, 3, 0, "ng-container", 3),
                    t.YNc(4, tt, 3, 3, "ng-template", null, 4, t.W1O),
                    t.qZA(),
                    t.YNc(6, ot, 3, 2, "div", 1),
                    t.YNc(7, it, 1, 1, "app-audit-provider", 5),
                    t.qZA()),
                    2 & n) {
                        const c = t.MAs(5);
                        t.xp6(1),
                        t.Q6J("ngIf", !!o.activeTitle),
                        t.xp6(2),
                        t.Q6J("ngIf", !o.tokenAudit && !o.activeTitle)("ngIfElse", c),
                        t.xp6(3),
                        t.Q6J("ngIf", o.isAdmin),
                        t.xp6(1),
                        t.Q6J("ngIf", o.activeTitle && o.hasAuditProviders)
                    }
                },
                dependencies: [r.O5, p._L, s.uH, s.BN, D.lQ, Y, l.aw, l.X$],
                styles: [".dext-audcontract[_ngcontent-%COMP%]{border-radius:.3125rem;position:relative;background-size:.25rem;vertical-align:middle;display:flex;flex-direction:column;width:100%}.dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;color:#142028;margin-bottom:.4375rem;text-transform:uppercase}body.dark-theme   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#142028}.dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{text-transform:capitalize}.dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{vertical-align:middle;text-decoration:none;margin-left:.25rem}.dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.dext-audcontract[_ngcontent-%COMP%]   .renounced-contract-container[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;color:#17c671!important;text-transform:capitalize}.dext-audcontract[_ngcontent-%COMP%]   .renounced-contract-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px}.dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{background-color:#e2e7ec!important;color:#818ea3;line-height:.9375rem;font-size:.6875rem}body.dark-theme   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{background-color:#23323c!important}body.dark-theme[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{background-color:#23323c!important}body.light   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.light[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{background-color:#e2e7ec!important}body.dark-theme   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{color:#818ea3!important}body.light   [_nghost-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{color:#818ea3!important}body.light[_ngcontent-%COMP%]   .dext-audcontract[_ngcontent-%COMP%]   .bg-light[_ngcontent-%COMP%]{color:#818ea3!important}.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]{padding-bottom:.5rem;display:flex;align-items:center;gap:1rem;color:#eaac30}@media (min-width: 600px) and (max-width: 1023px){.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]{gap:2.3125rem}}.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;margin-right:.25rem;line-height:.9375rem}.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;line-height:.9375rem;align-self:center}.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]   .audcontract-notverified[_ngcontent-%COMP%]{color:#eda803;background-color:#ffb30066;display:flex;font-size:12px;align-items:center;padding:.5rem .625rem;border-radius:.5rem}.dext-audcontract[_ngcontent-%COMP%]   .dext-audcontract-icons[_ngcontent-%COMP%]   .audcontract-notverified[_ngcontent-%COMP%]   .icon-warning[_ngcontent-%COMP%]{margin-right:.625rem;align-self:center}.dext-audcontract[_ngcontent-%COMP%]   .audit[_ngcontent-%COMP%]{font-size:12px;margin-top:.225rem;display:flex}.opacity-1[_ngcontent-%COMP%]{opacity:.2}.opacity-2[_ngcontent-%COMP%]{opacity:.4}.opacity-3[_ngcontent-%COMP%]{opacity:1}.disable-detail[_ngcontent-%COMP%]{color:#818ea380}"],
                changeDetection: 0
            }),
            e
        }
        )()
    }
}]);
