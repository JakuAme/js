"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[8659], {
    98659: ($n,v,s)=>{
        s.r(v),
        s.d(v, {
            AggregatorComponent: ()=>Wn
        });
        var p = s(15861)
          , n = s(94650)
          , m = s(36895)
          , d = s(24006)
          , k = s(12113)
          , T = s(89383)
          , x = s(77579)
          , J = s(56451)
          , R = s(4128)
          , C = s(32076)
          , Z = s(54004)
          , I = s(78372)
          , U = s(71884)
          , z = s(70262)
          , N = s(62843)
          , D = s(18505)
          , Q = s(63900)
          , Y = s(28746)
          , F = s(49808)
          , M = s(49319)
          , _ = s(77540)
          , B = s(48178)
          , j = s(12480)
          , l = s(19265)
          , w = s(92255)
          , u = s(52413)
          , h = s(92216)
          , b = s(92498);
        function L(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("(", t.isSelectInput ? "output" : "input", " token)")
            }
        }
        function H(o, a) {
            if (1 & o && (n.TgZ(0, "div", 19)(1, "div", 13)(2, "div", 20)(3, "span", 21),
            n._uU(4),
            n.qZA()()()()),
            2 & o) {
                const t = n.oxw().$implicit
                  , e = n.oxw();
                n.xp6(4),
                n.Oqu(e.formatNumber(t.balance))
            }
        }
        function G(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 12),
                n.NdJ("click", function() {
                    const r = n.CHM(t).$implicit
                      , c = n.oxw();
                    return n.KtG(c.selectToken(r))
                }),
                n.TgZ(1, "div", 13)(2, "div")(3, "div", 13)(4, "div", 14)(5, "span", 15),
                n._uU(6),
                n.ALo(7, "appSafe"),
                n.YNc(8, L, 2, 1, "span", 16),
                n.qZA()(),
                n.TgZ(9, "div", 14)(10, "span", 17),
                n._uU(11),
                n.ALo(12, "appSafe"),
                n.qZA()()()(),
                n.YNc(13, H, 5, 1, "div", 18),
                n.qZA()()
            }
            if (2 & o) {
                const t = a.$implicit
                  , e = n.oxw();
                n.ekj("disabled", t.excluded),
                n.Q6J("disabled", t.excluded),
                n.xp6(2),
                n.Tol(e.showBalances ? "col-6" : "col-12"),
                n.xp6(4),
                n.hij(" ", n.lcZ(7, 9, t.symbol), " "),
                n.xp6(2),
                n.Q6J("ngIf", t.excluded),
                n.xp6(3),
                n.Oqu(n.lcZ(12, 11, t.name)),
                n.xp6(2),
                n.Q6J("ngIf", e.showBalances)
            }
        }
        const K = function() {
            return ["fal", "times"]
        };
        let W = (()=>{
            class o extends u.K9 {
                constructor(t, e, i, r) {
                    super(),
                    this.modal = t,
                    this.wallet = e,
                    this.aggregator = i,
                    this._cdRef = r,
                    this.excludedTokenIds = [],
                    this.customTokens = {},
                    this.onInputChange$ = new x.x
                }
                ngOnInit() {
                    const t = [...this.tokens.slice(1)].sort((e,i)=>+i.balance - +e.balance);
                    this.filteredTokens = [this.tokens[0], ...t],
                    this.filteredTokens.forEach(e=>{
                        e.excluded = this.excludedTokenIds.indexOf(e.address) > -1
                    }
                    ),
                    this.onInputChange$.pipe((0,
                    u.sL)(this), (0,
                    I.b)(400)).subscribe(e=>{
                        this._search(e)
                    }
                    )
                }
                onDestroy() {}
                _search(t) {
                    var e = this;
                    return (0,
                    p.Z)(function*() {
                        const i = t.toLowerCase().trim()
                          , r = e._filterTokens(e.tokens, i);
                        if (r.length > 0)
                            return e.filteredTokens = r,
                            void e._cdRef.detectChanges();
                        if (e.wallet.isAddress(i)) {
                            const c = yield e.aggregator.getTokenData(i, e.networkId);
                            if (e.showBalances) {
                                const g = yield e.aggregator.getTokenBalance(c, e.networkId);
                                e.customTokens[c.address.toLowerCase()] || e.tokens.push({
                                    ...c,
                                    balance: g
                                })
                            } else
                                e.tokens.push({
                                    ...c
                                });
                            e.customTokens[c.address.toLowerCase()] = !0
                        }
                        e.filteredTokens = e._filterTokens(e.tokens, i),
                        e._cdRef.detectChanges()
                    })()
                }
                selectToken(t) {
                    this.modal.close(t)
                }
                trackByAddress(t, e) {
                    return e.address
                }
                formatNumber(t) {
                    if (null == t)
                        return "";
                    const e = u.C6.toReadableNumber(Number(t)).replace(/,/g, "");
                    return e.indexOf("...") ? e.slice(0, 11) : e.slice(0, 8)
                }
                _filterTokens(t, e) {
                    return t.filter(i=>i.name.toLowerCase().indexOf(e) > -1 || i.symbol.toLowerCase().indexOf(e) > -1 || i.address.toLowerCase().indexOf(e) > -1)
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(M.Kz),n.Y36(w.X),n.Y36(_.T6),n.Y36(n.sBO))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-select-token-modal"]],
                inputs: {
                    excludedTokenIds: "excludedTokenIds",
                    tokens: "tokens",
                    showBalances: "showBalances",
                    isSelectInput: "isSelectInput",
                    networkId: "networkId"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 13,
                vars: 4,
                consts: [[1, "modal-header"], [1, "my-2"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [3, "icon"], [1, "modal-body", "p-4", "p-md-5"], [1, "col-12", "pb-4", "px-0"], ["appRestrictInput", "^[A-Za-z0-9:.<>\\-]*$", "type", "text", "placeholder", "Search name or paste token address", "aria-label", "Search name or paste token address", "aria-describedby", "basic-addon1", "maxlength", "128", 1, "form-control", 3, "keyup"], ["searchInput", ""], [1, "col-12", "p-0"], [1, "list-group"], ["type", "button", "class", "list-group-item list-group-item-action", "aria-current", "true", "aria-label", "Close", 3, "disabled", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "modal-footer"], ["type", "button", "aria-current", "true", "aria-label", "Close", 1, "list-group-item", "list-group-item-action", 3, "disabled", "click"], [1, "row"], [1, "col-lg-12"], [1, "token-ticket"], [4, "ngIf"], [1, "token-name"], ["class", "col-6 align-self-center", 4, "ngIf"], [1, "col-6", "align-self-center"], [1, "col-lg-12", "text-end"], [1, "token-amount"]],
                template: function(t, e) {
                    if (1 & t) {
                        const i = n.EpF();
                        n.TgZ(0, "div", 0)(1, "h5", 1),
                        n._uU(2, "Select a token"),
                        n.qZA(),
                        n.TgZ(3, "button", 2),
                        n.NdJ("click", function() {
                            return e.modal.dismiss("Close click")
                        }),
                        n._UZ(4, "fa-icon", 3),
                        n.qZA()(),
                        n.TgZ(5, "div", 4)(6, "div", 5)(7, "input", 6, 7),
                        n.NdJ("keyup", function() {
                            n.CHM(i);
                            const c = n.MAs(8);
                            return n.KtG(e.onInputChange$.next(c.value))
                        }),
                        n.qZA()(),
                        n.TgZ(9, "div", 8)(10, "div", 9),
                        n.YNc(11, G, 14, 13, "button", 10),
                        n.qZA()()(),
                        n._UZ(12, "div", 11)
                    }
                    2 & t && (n.xp6(4),
                    n.Q6J("icon", n.DdM(3, K)),
                    n.xp6(7),
                    n.Q6J("ngForOf", e.filteredTokens)("ngForTrackBy", e.trackByAddress))
                },
                dependencies: [h.uH, h.BN, m.ax, m.O5, b.yl, d.u5, b.O7],
                styles: [".list-group-item-action[_ngcontent-%COMP%]{color:#3d5170;transition:all .25s cubic-bezier(.27,.01,.38,1.06)}.list-group-item-action.disabled[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .list-group-item-action.disabled[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .list-group-item-action.disabled[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .list-group-item-action.disabled[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .list-group-item-action.disabled[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]{color:#3d5170}.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-action[_ngcontent-%COMP%]:focus{color:#3d5170;background-color:#f5f6f8}body.dark-theme   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:hover, body.dark-theme   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:focus{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:hover, body.dark-theme[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:focus{color:#cacedb}body.light   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:hover, body.light   [_nghost-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:focus{color:#3d5170}body.light[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:hover, body.light[_ngcontent-%COMP%]   .list-group-item-action[_ngcontent-%COMP%]:focus{color:#3d5170}.list-group-item-action[_ngcontent-%COMP%]   .token-ticket[_ngcontent-%COMP%]{font-weight:500;font-size:14px}.list-group-item-action[_ngcontent-%COMP%]   .token-balance[_ngcontent-%COMP%]{font-weight:400;font-size:13px}.list-group-item-action[_ngcontent-%COMP%]   .token-amount[_ngcontent-%COMP%]{font-weight:500;font-size:14px}body.dark-theme   [_nghost-%COMP%]     .list-group-item-action:hover, body.dark-theme   [_nghost-%COMP%]     .list-group-item-action:focus{background-color:#ffffff1a}"],
                changeDetection: 0
            }),
            o
        }
        )();
        function V(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 8),
                n.NdJ("click", function() {
                    const r = n.CHM(t).$implicit
                      , c = n.oxw();
                    return n.KtG(c.selectNetwork(r))
                }),
                n.TgZ(1, "div", 9)(2, "div", 10)(3, "div", 9)(4, "div", 11)(5, "span", 12),
                n._uU(6),
                n.qZA()()()()()()
            }
            if (2 & o) {
                const t = a.$implicit;
                n.xp6(6),
                n.Oqu(t.chainEnum.chainName)
            }
        }
        const $ = function() {
            return ["fal", "times"]
        };
        let X = (()=>{
            class o {
                constructor(t) {
                    this.modal = t
                }
                selectNetwork(t) {
                    this.modal.close(t)
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(M.Kz))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-select-network-modal"]],
                inputs: {
                    networks: "networks"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 9,
                vars: 3,
                consts: [[1, "modal-header"], [1, "my-2"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [3, "icon"], [1, "modal-body"], [1, "col-12"], [1, "list-group"], ["type", "button", "class", "list-group-item list-group-item-action", "aria-current", "true", "aria-label", "Close", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-current", "true", "aria-label", "Close", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "row"], [1, "col-6"], [1, "col-lg-12"], [1, "token-ticket"]],
                template: function(t, e) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "h5", 1),
                    n._uU(2, "Select Network"),
                    n.qZA(),
                    n.TgZ(3, "button", 2),
                    n.NdJ("click", function() {
                        return e.modal.dismiss("Close click")
                    }),
                    n._UZ(4, "fa-icon", 3),
                    n.qZA()(),
                    n.TgZ(5, "div", 4)(6, "div", 5)(7, "div", 6),
                    n.YNc(8, V, 7, 1, "button", 7),
                    n.qZA()()()),
                    2 & t && (n.xp6(4),
                    n.Q6J("icon", n.DdM(2, $)),
                    n.xp6(4),
                    n.Q6J("ngForOf", e.networks))
                },
                dependencies: [h.uH, h.BN, m.ax],
                changeDetection: 0
            }),
            o
        }
        )();
        const nn = function() {
            return ["fal", "times"]
        };
        let tn = (()=>{
            class o {
                set slippage(t) {
                    this.strSlippage = `${t}`
                }
                get slippage() {
                    return null == this.strSlippage || "" === this.strSlippage ? 0 : parseFloat(this.strSlippage)
                }
                constructor(t) {
                    this.modal = t,
                    this.strSlippage = "0"
                }
                setSlippage() {
                    this.modal.close(this.slippage)
                }
                setAutoSlippage() {
                    this.slippage = 0,
                    this.setSlippage()
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(M.Kz))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-set-slippage-modal"]],
                inputs: {
                    slippage: "slippage"
                },
                standalone: !0,
                features: [n.jDz],
                decls: 12,
                vars: 3,
                consts: [[1, "modal-header"], [1, "my-2"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], [3, "icon"], [1, "modal-body", "p-4", "p-md-5"], [1, "col-12", "pb-4", "px-0"], ["appRestrictInput", "^[0-9.]*$", "type", "number", "placeholder", "Slippage %", "aria-label", "Slippage", "aria-describedby", "basic-addon1", "maxlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "aria-current", "true", "aria-label", "Close", 1, "btn", "btn-primary", "btn-swap-1", 3, "click"]],
                template: function(t, e) {
                    1 & t && (n.TgZ(0, "div", 0)(1, "h5", 1),
                    n._uU(2, "Set Slippage"),
                    n.qZA(),
                    n.TgZ(3, "button", 2),
                    n.NdJ("click", function() {
                        return e.modal.dismiss("Close click")
                    }),
                    n._UZ(4, "fa-icon", 3),
                    n.qZA()(),
                    n.TgZ(5, "div", 4)(6, "div", 5)(7, "input", 6),
                    n.NdJ("ngModelChange", function(r) {
                        return e.strSlippage = r
                    }),
                    n.qZA(),
                    n.TgZ(8, "button", 7),
                    n.NdJ("click", function() {
                        return e.setSlippage()
                    }),
                    n._uU(9, " Set Custom "),
                    n.qZA(),
                    n.TgZ(10, "button", 7),
                    n.NdJ("click", function() {
                        return e.setAutoSlippage()
                    }),
                    n._uU(11, " Set Auto "),
                    n.qZA()()()),
                    2 & t && (n.xp6(4),
                    n.Q6J("icon", n.DdM(2, nn)),
                    n.xp6(3),
                    n.Q6J("ngModel", e.strSlippage))
                },
                dependencies: [h.uH, h.BN, d.u5, d.Fj, d.wV, d.JJ, d.nD, d.On, b.O7],
                styles: [".modal-header[_ngcontent-%COMP%]{border-bottom:none}.modal-body[_ngcontent-%COMP%]{padding:1.25rem!important}.modal-body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.modal-body[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{max-width:6.25rem;border-radius:1.125rem}.modal-body[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;padding:.5rem;text-align:center;outline:currentcolor none medium;border:.0625rem solid transparent;color:#fff;text-decoration:none;display:flex;justify-content:center;flex-wrap:nowrap;align-items:center;cursor:pointer;position:relative;z-index:1;border-radius:.625rem}.modal-body[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.modal-body[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]:disabled{background-color:#00b8d8;opacity:.8}.modal-footer[_ngcontent-%COMP%]{border-top:none}  body .slippage-modal .modal-content{max-width:21.25rem}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"],
                changeDetection: 0
            }),
            o
        }
        )();
        var f = s(99703)
          , en = s(62289)
          , on = s(53763);
        const E = function() {
            return ["fal", "times"]
        };
        function cn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 59),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw(3).closeDisclaimer("rejected"),
                    n.KtG(!1)
                }),
                n.ALo(1, "translate"),
                n._UZ(2, "fa-icon", 60),
                n.qZA()
            }
            2 & o && (n.Q6J("ngbTooltip", n.lcZ(1, 2, "home.close")),
            n.xp6(2),
            n.Q6J("icon", n.DdM(4, E)))
        }
        function an(o, a) {
            if (1 & o && (n.TgZ(0, "div", 57),
            n.YNc(1, cn, 3, 5, "a", 58),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", "desktop" === t.mediaDevice)
            }
        }
        function rn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 51),
                n.YNc(1, an, 2, 1, "div", 52),
                n.TgZ(2, "h4", 53),
                n._uU(3, "DISCLAIMER"),
                n.qZA(),
                n.TgZ(4, "p", 54),
                n._uU(5),
                n.ALo(6, "translate"),
                n.TgZ(7, "span", 55),
                n._uU(8),
                n.ALo(9, "translate"),
                n.qZA()(),
                n.TgZ(10, "button", 56),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.closeDisclaimer("accepted"))
                }),
                n._uU(11),
                n.ALo(12, "translate"),
                n.qZA()()
            }
            if (2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", t.addCloseDisclaimer),
                n.xp6(4),
                n.hij(" ", n.lcZ(6, 4, "aggregator.disclaimer_part_1"), " "),
                n.xp6(3),
                n.Oqu(n.lcZ(9, 6, "aggregator.disclaimer_part_2")),
                n.xp6(3),
                n.Oqu(n.lcZ(12, 8, "aggregator.disclaimer_accept"))
            }
        }
        function sn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.ynx(0),
                n.TgZ(1, "div", 61)(2, "div", 62)(3, "a", 59),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw().aggregatorClose.emit(),
                    n.KtG(!1)
                }),
                n.ALo(4, "translate"),
                n._UZ(5, "fa-icon", 60),
                n.qZA()()(),
                n.BQk()
            }
            2 & o && (n.xp6(3),
            n.Q6J("ngbTooltip", n.lcZ(4, 2, "home.close")),
            n.xp6(2),
            n.Q6J("icon", n.DdM(4, E)))
        }
        function gn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 63),
                n.NdJ("click", function() {
                    return n.CHM(t),
                    n.oxw().showAlternativeExchange.emit(),
                    n.KtG(!1)
                }),
                n._uU(1),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.hij("Or try ", t.alternativeExchange.name, " ")
            }
        }
        const ln = function(o) {
            return {
                scanner: o
            }
        }
          , pn = function() {
            return ["fal", "wallet"]
        };
        function dn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "div", 64)(1, "a", 65),
                n.ALo(2, "translate"),
                n.TgZ(3, "span"),
                n._UZ(4, "fa-icon", 66),
                n._uU(5),
                n.ALo(6, "slice"),
                n.ALo(7, "slice"),
                n.qZA()(),
                n.TgZ(8, "a", 67),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.disconnect())
                }),
                n._uU(9, "Disconnect wallet"),
                n.qZA()()
            }
            if (2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.s9C("ngbTooltip", n.xi3(2, 5, "aggregator.view_wallet_in_scanner", n.VKq(16, ln, t.networkScanner.name))),
                n.Q6J("href", t.networkScanner.url + "/address/" + t.account, n.LSH),
                n.xp6(3),
                n.Q6J("icon", n.DdM(18, pn)),
                n.xp6(1),
                n.AsE(" ", n.Dn7(6, 8, t.account, 0, 6), "...", n.Dn7(7, 12, t.account, 36, 64), " ")
            }
        }
        function _n(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "a", 68),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.max())
                }),
                n._uU(1, "(Max)"),
                n.qZA()
            }
        }
        function un(o, a) {
            if (1 & o && (n.TgZ(0, "div", 71),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.lnq("The estimated ", t.swapType, " tax for ", null == t.tokenB ? null : t.tokenB.symbol, " is ", t.getStoredSlippageValue(), "% ")
            }
        }
        function hn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 71),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.HOy("The estimated ", t.swapType, " tax for ", null == t.tokenB ? null : t.tokenB.symbol, " has changed to ", t.getStoredSlippageValue(), " %. Check the new received ", null == t.tokenB ? null : t.tokenB.symbol, " amount ")
            }
        }
        function mn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 69),
            n.YNc(1, un, 2, 3, "div", 70),
            n.YNc(2, hn, 2, 4, "div", 70),
            n.qZA()),
            2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", !t.hasSlippageChanged),
                n.xp6(1),
                n.Q6J("ngIf", t.hasSlippageChanged)
            }
        }
        function Cn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 72),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.connect())
                }),
                n._uU(1, " Connect wallet "),
                n.qZA()
            }
        }
        function bn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 72),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw();
                    return n.KtG(i.switchNetwork())
                }),
                n._uU(1),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.hij(" Switch to ", t.network.name, " ")
            }
        }
        function fn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 72),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw(2);
                    return n.KtG(i.approve())
                }),
                n._uU(1, " Approve "),
                n.qZA()
            }
        }
        function Mn(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 72),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw(2);
                    return n.KtG(i.swap())
                }),
                n._uU(1, " Swap "),
                n.qZA()
            }
        }
        function On(o, a) {
            if (1 & o) {
                const t = n.EpF();
                n.TgZ(0, "button", 78),
                n.NdJ("click", function() {
                    n.CHM(t);
                    const i = n.oxw(2);
                    return n.KtG(i.swap())
                }),
                n._uU(1, " Swap anyway "),
                n.qZA()
            }
            if (2 & o) {
                const t = n.oxw(2);
                n.ekj("btn-primary", t.quote.priceImpact < t.PriceImpact.HIGH)("btn-warning", t.quote.priceImpact >= t.PriceImpact.HIGH && t.quote.priceImpact < t.PriceImpact.VERY_HIGH)("btn-danger", t.quote.priceImpact >= t.PriceImpact.VERY_HIGH && t.quote.priceImpact < t.PriceImpact.TOO_HIGH)
            }
        }
        function Pn(o, a) {
            1 & o && (n.TgZ(0, "span", 79),
            n._uU(1, " Price impact too high "),
            n.qZA())
        }
        function kn(o, a) {
            1 & o && (n.TgZ(0, "div", 79),
            n._uU(1, "Swapping..."),
            n.qZA())
        }
        function xn(o, a) {
            1 & o && (n.TgZ(0, "div", 79),
            n._uU(1, "Approving..."),
            n.qZA())
        }
        function wn(o, a) {
            1 & o && (n.TgZ(0, "div", 80),
            n._UZ(1, "div", 81),
            n.qZA())
        }
        function yn(o, a) {
            1 & o && (n.TgZ(0, "div", 79),
            n._uU(1, "Enter an amount "),
            n.qZA())
        }
        function An(o, a) {
            if (1 & o && (n.TgZ(0, "button", 82),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" ", t.errorMessage, " ")
            }
        }
        function Sn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 79),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" ", t.warningMessage, " ")
            }
        }
        function vn(o, a) {
            if (1 & o && (n.TgZ(0, "button", 83),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij(" ", t.successMessage, " ")
            }
        }
        function Tn(o, a) {
            if (1 & o && (n.ynx(0),
            n.YNc(1, fn, 2, 0, "button", 37),
            n.YNc(2, Mn, 2, 0, "button", 37),
            n.YNc(3, On, 2, 6, "button", 73),
            n.YNc(4, Pn, 2, 0, "span", 74),
            n.YNc(5, kn, 2, 0, "div", 74),
            n.YNc(6, xn, 2, 0, "div", 74),
            n.YNc(7, wn, 2, 0, "div", 75),
            n.YNc(8, yn, 2, 0, "div", 74),
            n.YNc(9, An, 2, 1, "button", 76),
            n.YNc(10, Sn, 2, 1, "div", 74),
            n.YNc(11, vn, 2, 1, "button", 77),
            n.BQk()),
            2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && !t.success && !t.warning && !t.error && t.shouldApprove && !t.isSwapping && !t.isApproving && t.quote.priceImpact < t.PriceImpact.TOO_HIGH),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && !t.success && !t.warning && !t.error && !t.shouldApprove && !t.hasSlippageChanged && t.hasEnteredAmount && !t.isSwapping && !t.isApproving && t.quote.priceImpact < t.PriceImpact.HIGH),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && !t.success && !t.warning && !t.error && !t.shouldApprove && t.hasEnteredAmount && !t.isSwapping && !t.isApproving && (t.hasSlippageChanged || t.quote.priceImpact >= t.PriceImpact.HIGH && t.quote.priceImpact < t.PriceImpact.TOO_HIGH)),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && !t.success && !t.warning && !t.error && !t.shouldApprove && t.hasEnteredAmount && t.quote.priceImpact > t.PriceImpact.TOO_HIGH),
                n.xp6(1),
                n.Q6J("ngIf", t.isSwapping),
                n.xp6(1),
                n.Q6J("ngIf", t.isApproving && !t.isSwapping),
                n.xp6(1),
                n.Q6J("ngIf", t.loading && !t.isApproving && !t.isSwapping),
                n.xp6(1),
                n.Q6J("ngIf", !(t.loading || t.hasEnteredAmount || t.isSwapping || t.isApproving)),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && t.hasEnteredAmount && t.error && !t.isSwapping && !t.isApproving),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && t.hasEnteredAmount && !t.error && t.warning && !t.isSwapping && !t.isApproving),
                n.xp6(1),
                n.Q6J("ngIf", !t.loading && t.hasEnteredAmount && !t.error && !t.warning && t.success && !t.isSwapping && !t.isApproving)
            }
        }
        function Zn(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.ALo(2, "appSafe"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.AsE("", t.minimumReceived, " ", n.lcZ(2, 2, null == t.tokenB ? null : t.tokenB.symbol), "")
            }
        }
        function In(o, a) {
            1 & o && (n.TgZ(0, "span"),
            n._uU(1, " . . . "),
            n.qZA())
        }
        function Nn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 41)(1, "div", 42)(2, "span"),
            n._uU(3, "Min. received"),
            n.qZA()(),
            n.TgZ(4, "div", 43),
            n.YNc(5, Zn, 3, 4, "span", 6),
            n.YNc(6, In, 2, 0, "span", 6),
            n.qZA()()),
            2 & o) {
                const t = n.oxw();
                n.xp6(5),
                n.Q6J("ngIf", t.quote),
                n.xp6(1),
                n.Q6J("ngIf", !t.quote)
            }
        }
        function Bn(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.ALo(2, "appNumber"),
            n.ALo(3, "appSafe"),
            n.qZA()),
            2 & o) {
                const t = n.oxw();
                n.xp6(1),
                n.AsE(" ", n.lcZ(2, 2, t.quote.price), " ", n.lcZ(3, 4, null == t.tokenB ? null : t.tokenB.symbol), " ")
            }
        }
        function En(o, a) {
            1 & o && (n.TgZ(0, "span"),
            n._uU(1, " . . . "),
            n.qZA())
        }
        function qn(o, a) {
            if (1 & o && (n.TgZ(0, "div", 41)(1, "div", 42)(2, "span"),
            n._uU(3, "Price impact"),
            n.qZA()(),
            n.TgZ(4, "div", 43)(5, "span"),
            n._uU(6),
            n.ALo(7, "number"),
            n.qZA()()()),
            2 & o) {
                const t = n.oxw();
                n.xp6(4),
                n.ekj("text-success", t.quote.priceImpact < t.PriceImpact.LOW)("text-warning", t.quote.priceImpact > t.PriceImpact.MEDIUM && t.quote.priceImpact < t.PriceImpact.HIGH)("text-danger", t.quote.priceImpact > t.PriceImpact.HIGH),
                n.xp6(2),
                n.hij(" ", n.xi3(7, 7, t.quote.priceImpact, "1.0-2"), " % ")
            }
        }
        function Jn(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.ALo(2, "appSafe"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.AsE("", t.amountOutWithoutFee, " ", n.lcZ(2, 2, null == t.tokenB ? null : t.tokenB.symbol), "")
            }
        }
        function Rn(o, a) {
            1 & o && (n.TgZ(0, "span"),
            n._uU(1, " . . . "),
            n.qZA())
        }
        function Un(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.hij("", t.formatNumber(t.getStoredSlippageValue()), " %")
            }
        }
        function zn(o, a) {
            1 & o && (n.TgZ(0, "span"),
            n._uU(1, " . . . "),
            n.qZA())
        }
        function Dn(o, a) {
            if (1 & o && (n.TgZ(0, "span"),
            n._uU(1),
            n.ALo(2, "appSafe"),
            n.qZA()),
            2 & o) {
                const t = n.oxw(2);
                n.xp6(1),
                n.AsE("", t.amountOut, " ", n.lcZ(2, 2, null == t.tokenB ? null : t.tokenB.symbol), "")
            }
        }
        function Qn(o, a) {
            1 & o && (n.TgZ(0, "span"),
            n._uU(1, " . . . "),
            n.qZA())
        }
        function Yn(o, a) {
            if (1 & o && (n.ynx(0),
            n.TgZ(1, "div", 41)(2, "div", 42)(3, "span"),
            n._uU(4, "Total tokens"),
            n.qZA()(),
            n.TgZ(5, "div", 43),
            n.YNc(6, Jn, 3, 4, "span", 6),
            n.YNc(7, Rn, 2, 0, "span", 6),
            n.qZA()(),
            n.TgZ(8, "div", 41)(9, "div", 42)(10, "span"),
            n._uU(11, "Minus Tax:"),
            n.qZA()(),
            n.TgZ(12, "div", 43),
            n.YNc(13, Un, 2, 1, "span", 6),
            n.YNc(14, zn, 2, 0, "span", 6),
            n.qZA()(),
            n.TgZ(15, "div", 41)(16, "div", 42)(17, "span"),
            n._uU(18, "Maximum received"),
            n.qZA()(),
            n.TgZ(19, "div", 43),
            n.YNc(20, Dn, 3, 4, "span", 6),
            n.YNc(21, Qn, 2, 0, "span", 6),
            n.qZA()(),
            n.BQk()),
            2 & o) {
                const t = n.oxw();
                n.xp6(6),
                n.Q6J("ngIf", t.quote),
                n.xp6(1),
                n.Q6J("ngIf", !t.quote),
                n.xp6(6),
                n.Q6J("ngIf", t.quote),
                n.xp6(1),
                n.Q6J("ngIf", !t.quote),
                n.xp6(6),
                n.Q6J("ngIf", t.quote),
                n.xp6(1),
                n.Q6J("ngIf", !t.quote)
            }
        }
        const Fn = function(o) {
            return {
                "disclaimer-shown": o
            }
        }
          , jn = function(o) {
            return {
                "extra-padding-top": o
            }
        }
          , y = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
          , A = "Cannot calculate a valid slippage. Try setting it manually"
          , P = "Calculated slippage changed"
          , q = "aggregatorDisclaimerStatus";
        let Wn = (()=>{
            class o extends u.K9 {
                set network(t) {
                    this._network = t,
                    this.chain = this._walletService.convertNetworkToChain(t)
                }
                get network() {
                    return this._network
                }
                set token1(t) {
                    this._token1 = t
                }
                set token2(t) {
                    this._token2 = t
                }
                set alternativeExchange(t) {
                    this._alternativeExchange = t
                }
                get alternativeExchange() {
                    return this._alternativeExchange
                }
                set networkScanner(t) {
                    this._networkScanner = t
                }
                get networkScanner() {
                    return this._networkScanner
                }
                constructor(t, e, i, r, c, g, O, S) {
                    super(),
                    this._cdRef = t,
                    this._modalService = e,
                    this._aggregatorService = i,
                    this._walletService = r,
                    this._breakpointObserver = c,
                    this._web3UtilsService = g,
                    this._settingsService = O,
                    this._injector = S,
                    this.PriceImpact = _.Cc,
                    this.addButtonClose = !1,
                    this.addCloseDisclaimer = !0,
                    this.aggregatorClose = new n.vpe,
                    this.showAlternativeExchange = new n.vpe,
                    this._networkScanner = {
                        name: "undefined",
                        url: "#"
                    },
                    this.loading = !1,
                    this.disclaimer = !1,
                    this.disclaimerAccepted = !1,
                    this.mediaDevice = "",
                    this.isApproving = !1,
                    this.isSwapping = !1,
                    this.error = !1,
                    this.errorMessage = "",
                    this.success = !1,
                    this.successMessage = "Swap successful",
                    this.warning = !1,
                    this.warningMessage = "",
                    this.amountIn = "1",
                    this.amountOut = "",
                    this.hasEnteredAmount = !0,
                    this.minimumReceived = null,
                    this.amountOutWithoutFee = null,
                    this.slippage = 0,
                    this._storedSlippage = null,
                    this.hasSlippageChanged = !1,
                    this.showDetailedCalculations = !1,
                    this.shouldSwitchNetwork = !1,
                    this.shouldApprove = !1,
                    this.amountInObservable = new x.x,
                    this.amountOutObservable = new x.x,
                    this.autoChecker = null
                }
                ngOnInit() {
                    var t = this;
                    null == this.network && (this.network = B.pt.ETH),
                    this._walletService.isLibLoaded$.subscribe((0,
                    p.Z)(function*() {
                        t._walletService.selectNetwork(t.network),
                        t.shouldSwitchNetwork = (yield t._walletService.getNetwork()) !== t.network,
                        t.account = yield t._walletService.getAccount(),
                        yield t.getBalance(),
                        yield t.check(),
                        t._cdRef.detectChanges(),
                        (0,
                        J.T)(t._walletService.accountChanged).subscribe((0,
                        p.Z)(function*() {
                            t.account = yield t._walletService.getAccount();
                            const e = yield t._walletService.getNetwork();
                            t.shouldSwitchNetwork = e !== t.network,
                            yield t.getBalance(),
                            yield t.check(),
                            t._tokens && 0 == +t._tokens[0].balance && (0,
                            R.D)(t._tokens.map(i=>(0,
                            C.D)(t._aggregatorService.getTokenBalance(i, t.network.chainEnum.id)).pipe((0,
                            Z.U)(r=>({
                                ...i,
                                balance: r,
                                shortSymbol: i.symbol.length > 4 ? `${i.symbol.slice(0, 3)}...` : i.symbol
                            }))))).subscribe(i=>{
                                t._tokens = i
                            }
                            ),
                            t._cdRef.detectChanges()
                        })),
                        t._walletService.loggedOut.subscribe((0,
                        p.Z)(function*() {
                            t.account = yield t._walletService.getAccount(),
                            yield t.getBalance(),
                            t._cdRef.detectChanges()
                        })),
                        t._aggregatorService.getTokens(t.chain, t.network.chainEnum.id).then(e=>{
                            t._tokens = e,
                            t._token1 && t.setToken(t._token1, 1),
                            t._token2 && t.setToken(t._token2, 2),
                            t.onChangePair(),
                            t._startAutoChecker(),
                            t.amountInObservable.pipe((0,
                            I.b)(400), (0,
                            U.x)()).subscribe(()=>{
                                t.hasSlippageChanged = !1,
                                t.check()
                            }
                            ),
                            t._cdRef.detectChanges()
                        }
                        )
                    })),
                    this._breakpointObserver.observe([k.K5, k.mT]).pipe((0,
                    u.sL)(this)).subscribe(e=>{
                        this.mediaDevice = e.breakpoints[k.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._showDisclaimer(),
                    this._settingsService.getConfigChanged$("language").pipe((0,
                    u.sL)(this)).subscribe(()=>{
                        this._cdRef.detectChanges()
                    }
                    )
                }
                onDestroy() {
                    this._stopAutoChecker()
                }
                _startAutoChecker() {
                    this._stopAutoChecker(),
                    this.autoChecker = setInterval(()=>this.check(), 7e3)
                }
                _stopAutoChecker() {
                    null != this.autoChecker && (clearInterval(this.autoChecker),
                    this.autoChecker = null)
                }
                closeDisclaimer(t) {
                    this.disclaimerAccepted = "accepted" === t;
                    const e = {
                        accepted: this.disclaimerAccepted
                    };
                    this.disclaimerAccepted ? e.acceptanceDate = new Date : this.aggregatorClose.emit(),
                    u._Z.merge(q, e),
                    this._cdRef.detectChanges()
                }
                setToken(t, e) {
                    if (t === j.Ku[this.network.name]) {
                        if (1 === e) {
                            const c = this._tokens?.length > 0 ? this._tokens[0] : void 0;
                            this.tokenB ? this.tokenA = c : this.tempTokenA = c
                        } else {
                            const c = this._tokens?.length > 0 ? this._tokens[0] : void 0;
                            this.tokenA ? this.tokenB = c : this.tempTokenB = c
                        }
                        return this.tryAssignTokens(),
                        void (this.tokenA && (this._storedSlippage = this._getStoredSlippage(this.network, this._storedSlippage),
                        this.hasSlippageChanged = !1,
                        this.onChangePair()))
                    }
                    if (this._web3UtilsService.isAddress(t))
                        return void this._aggregatorService.getTokenData(t, this.network.chainEnum.id).then(c=>{
                            1 === e ? this.tokenB ? this.tokenA = c : this.tempTokenA = c : (this.tokenA ? this.tokenB = c : this.tempTokenB = c,
                            this._tokens && !this._tokens.some(g=>g.address === c.address) && (this._tokens = [this._tokens[0], c, ...this._tokens.slice(1)])),
                            this.tryAssignTokens(),
                            this._storedSlippage = this._getStoredSlippage(this.network, this._storedSlippage),
                            this.hasSlippageChanged = !1,
                            this.onChangePair()
                        }
                        );
                    let i = 2
                      , r = 0;
                    for (const c of this._tokens) {
                        if (c.symbol.toLowerCase() === t.toLowerCase()) {
                            i = r;
                            break
                        }
                        r++
                    }
                    1 === e ? this.tokenA = this._tokens[i] : this.tokenB = this._tokens[i],
                    this._storedSlippage = this._getStoredSlippage(this.network, this._storedSlippage),
                    this.hasSlippageChanged = !1,
                    this.onChangePair()
                }
                changeInForOut() {
                    this._clearBalanceWarning();
                    const t = this.tokenA;
                    this.tokenA = this.tokenB,
                    this.tokenB = t,
                    this.amountIn = this.amountOut || "1",
                    this.amountOut = "",
                    this.hasSlippageChanged = !1,
                    this._storedSlippage = this._getStoredSlippage(this.network, this._storedSlippage),
                    this._updateEnteredAmount(),
                    this.onChangePair()
                }
                onChangePair() {
                    this.getBalance().then(()=>{
                        this._updateBalanceWarning(),
                        this.check()
                    }
                    )
                }
                getStoredSlippageValue() {
                    if (!this._storedSlippage)
                        return null;
                    const t = Object.keys(this._storedSlippage)[0];
                    return this.swapType = this._getSwapType(),
                    this._storedSlippage[t][this.swapType] ?? null
                }
                updateStoredSlippageValue(t) {
                    if (!this._storedSlippage)
                        return;
                    const e = Object.keys(this._storedSlippage)[0];
                    this._storedSlippage[e][this._getSwapType()] = t
                }
                _getMainToken() {
                    return this.tokenA && this.tokenB ? f.CXF.isStableSymbol(this.chain, this.tokenA.symbol) || f.CXF.isChainSymbol(this.chain, this.tokenA.symbol) ? this.tokenB : this.tokenA : null
                }
                _getSwapType() {
                    return this.tokenA === this._getMainToken() ? "sell" : "buy"
                }
                _getStoredSlippage(t, e) {
                    const i = this._getMainToken();
                    return i ? e ? e && null == e[i.address] ? this._aggregatorService.getStoredSlippage(t, i.address) : e : this._aggregatorService.getStoredSlippage(t, i.address) : null
                }
                _shouldStoreSlippage(t, e, i) {
                    if (i <= _.HK)
                        return !1;
                    const r = this._getMainToken()
                      , c = r === t ? e : t;
                    return !(!c || !this._isRefOrStableToken(r) || this._web3UtilsService.toChecksumAddress(c.address) !== y && !f.CXF.isStableSymbol(this.chain, c.symbol))
                }
                _isRefOrStableToken(t) {
                    return !!t && !f.CXF.isStableSymbol(this.chain, t.symbol) && !f.CXF.isChainSymbol(this.chain, t.symbol)
                }
                _storeSlippage(t, e) {
                    null != this._getMainToken() && this._aggregatorService.storeSlippage(t, this._getMainToken().address, this._getSwapType(), e)
                }
                connect() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        yield t._walletService.connect()
                    })()
                }
                get showBalances() {
                    return !!this.account && !this.shouldSwitchNetwork
                }
                get showMax() {
                    return 1 === Number(l.m.compare(this.balance || l.m.bignumber(0), l.m.bignumber(0)))
                }
                getBalance() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        t.balance = t.tokenA && t.showBalances ? yield t._aggregatorService.getTokenBalance(t.tokenA, t.network.chainEnum.id) : null,
                        t.balanceB = t.tokenB && t.showBalances ? yield t._aggregatorService.getTokenBalance(t.tokenB, t.network.chainEnum.id) : null,
                        t._cdRef.detectChanges()
                    })()
                }
                max() {
                    this.tokenA && this._web3UtilsService.toChecksumAddress(this.tokenA.address) === y ? (this.amountIn = l.m.subtract(this.balance ?? 0, .02).toString(),
                    Number(this.amountIn) < 0 && (this.amountIn = "0")) : this.amountIn = this.balance ? this.balance.toString() : "",
                    this.check().then()
                }
                check() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        const e = l.m.bignumber(t.amountIn || 0);
                        try {
                            t.getBalance().then(),
                            t._cdRef.detectChanges();
                            const i = (t.getStoredSlippageValue() || _.o1.LOW) / 100
                              , r = t._isAutoSlippage() ? null : t.slippage / 100;
                            if (t.tokenA && t.tokenB && 1 === Number(l.m.compare(e, 0))) {
                                if (t.quote = yield t._aggregatorService.quote(t.network, t.account, t.tokenB, t.tokenA, l.m.bignumber(t.amountIn || 0), i, r, t.tokenRefSymbol),
                                0 !== Number(l.m.compare(l.m.bignumber(t.amountIn), e)))
                                    return;
                                t.amountOut = t.formatNumber(t.quote.amountOut),
                                t.amountOutWithoutFee = t.formatNumber(t.quote.amountOut),
                                t.minimumReceived = t.formatNumber(t.quote.minimumReceivedAmount);
                                const c = yield t._walletService.getNetwork();
                                if (null != c && t.network === c && null != t.account) {
                                    const g = t._web3UtilsService.toChecksumAddress(t.tokenA.address);
                                    g === y ? t.shouldApprove = !1 : yield t.checkApproval(g)
                                }
                            } else
                                t.amountOut = ""
                        } catch (i) {
                            console.error(i),
                            t.quote = null,
                            t.amountOut = ""
                        }
                        t._updateEnteredAmount(),
                        t._updateBalanceWarning(),
                        t._cdRef.detectChanges()
                    })()
                }
                _calculateAmountWithoutSlippage(t) {
                    return this._isAutoSlippage() ? this._isAutoSlippage() && null != this.getStoredSlippageValue() ? this._aggregatorService.calculateAmountWithoutSlippage(t, this.getStoredSlippageValue() / 100) : t : this._aggregatorService.calculateAmountWithoutSlippage(t, this.slippage / 100)
                }
                approve() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        t.isApproving = !0,
                        t._cdRef.detectChanges();
                        try {
                            yield t._walletService.approve(t.tokenA.address, t.quote.tradeRoute.routerAddress),
                            t.shouldApprove = !1,
                            t.checkApproval(t.tokenA.address).then()
                        } catch (e) {
                            t.handleTransactionError(e) || t._showError("Error")
                        } finally {
                            t.isApproving = !1,
                            t._cdRef.detectChanges()
                        }
                    })()
                }
                swap() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        t.loading = !0,
                        t._cdRef.detectChanges(),
                        t._stopAutoChecker();
                        let i, e = !1;
                        if (t._isAutoSlippage()) {
                            e = !0;
                            const r = (t.getStoredSlippageValue() || _.o1.LOW) / 100;
                            i = (0,
                            C.D)(t._aggregatorService.findSlippage(t.network, t.account, t.tokenB, t.tokenA, l.m.bignumber(t.amountIn || 0), r, null, t.tokenRefSymbol)).pipe((0,
                            Z.U)(c=>{
                                t.quote = {
                                    ...c.quote
                                };
                                const g = 100 * c.slippage
                                  , O = t._shouldStoreSlippage(t.tokenA, t.tokenB, g);
                                if (null != t.getStoredSlippageValue() && t.getStoredSlippageValue() !== g)
                                    throw t.getStoredSlippageValue() < g && (t.showDetailedCalculations = !0),
                                    t.hasSlippageChanged = !0,
                                    O && (t._storeSlippage(t.network, g),
                                    t._storedSlippage = t._getStoredSlippage(t.network, null)),
                                    t._cdRef.detectChanges(),
                                    new Error(P);
                                if (null == t.getStoredSlippageValue() && g > _.HK) {
                                    const Vn = t._getMainToken();
                                    if (t._isRefOrStableToken(Vn))
                                        throw t.hasSlippageChanged = !0,
                                        O && (t._storeSlippage(t.network, g),
                                        t._storedSlippage = t._getStoredSlippage(t.network, null)),
                                        t._cdRef.detectChanges(),
                                        new Error(P)
                                }
                                O || t.updateStoredSlippageValue(g),
                                console.warn("Dext Aggregator: found slippage", g);
                                const S = t._aggregatorService.toBigNumber(c.quote.tradeRoute.outputAmount, t.tokenB.decimals);
                                return t.amountOut = t.formatNumber(t._calculateAmountWithoutSlippage(S)),
                                c
                            }
                            ), (0,
                            z.K)(c=>c.message === P ? (0,
                            N._)(c.message) : (console.error(c),
                            t._showError(A),
                            (0,
                            N._)(()=>new Error(A)))))
                        } else {
                            const r = (t.getStoredSlippageValue() || _.o1.LOW) / 100
                              , c = t.slippage / 100;
                            i = (0,
                            C.D)(t._aggregatorService.estimateGas(t.network, t.account, t.tokenA, t.tokenB, l.m.bignumber(t.amountIn || 0), r, c, t.tokenRefSymbol)).pipe((0,
                            D.b)(()=>{
                                t._shouldStoreSlippage(t.tokenA, t.tokenB, t.slippage) && null != t.getStoredSlippageValue() && t.getStoredSlippageValue() > t.slippage && (t.hasSlippageChanged = !0,
                                t._storeSlippage(t.network, t.slippage),
                                t._storedSlippage = t._getStoredSlippage(t.network, null))
                            }
                            ))
                        }
                        i.pipe((0,
                        Q.w)(function() {
                            var r = (0,
                            p.Z)(function*(c) {
                                t.isSwapping = !0,
                                t._cdRef.detectChanges(),
                                yield t._aggregatorService.swap(c.quote, l.m.bignumber(t.amountIn), c.totalGas, t.tokenA)
                            });
                            return function(c) {
                                return r.apply(this, arguments)
                            }
                        }()), (0,
                        Y.x)(()=>{
                            t.loading = !1,
                            t.isSwapping = !1,
                            t._startAutoChecker(),
                            t._cdRef.detectChanges()
                        }
                        )).subscribe({
                            next: ()=>{
                                t.showDetailedCalculations = !1,
                                t._handleSwapSuccess(e)
                            }
                            ,
                            error: r=>{
                                r !== P && (t.loading = !1,
                                t.hasSlippageChanged = !1,
                                t._handleSwapFailure(r, e),
                                t._cdRef.detectChanges())
                            }
                        })
                    })()
                }
                _handleSwapSuccess(t=!1) {
                    this._showSuccessResult(),
                    t && (this.slippage = 0),
                    this.onChangePair()
                }
                _handleSwapFailure(t, e=!1) {
                    !this.handleTransactionError(t) && t !== A && (console.error(t),
                    e && (this.slippage = 0),
                    this._showError("Insufficient slippage, try a higher value"))
                }
                switchNetwork() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        return yield t._walletService.switchToNetwork(t.network)
                    })()
                }
                openModal(t) {
                    switch (t) {
                    case "selectTokenA":
                    case "selectTokenB":
                        {
                            this._stopAutoChecker();
                            const e = this._modalService.open(W, {
                                centered: !0,
                                scrollable: !0,
                                injector: this._injector
                            })
                              , i = "selectTokenA" === t
                              , r = i ? this.tokenB?.address : this.tokenA?.address;
                            e.componentInstance.isSelectInput = i,
                            e.componentInstance.excludedTokenIds = r ? [r] : [],
                            e.componentInstance.showBalances = this.showBalances,
                            e.componentInstance.tokens = this._tokens,
                            e.componentInstance.networkId = this.network.chainEnum.id,
                            (0,
                            C.D)(e.result).subscribe(c=>{
                                "selectTokenA" === t ? this.tokenA = c : this.tokenB = c,
                                this._storedSlippage = this._getStoredSlippage(this.network, this._storedSlippage),
                                this._startAutoChecker(),
                                this.onChangePair()
                            }
                            );
                            break
                        }
                    case "selectNetwork":
                        {
                            const e = this._modalService.open(X, {
                                centered: !0,
                                scrollable: !0
                            });
                            e.componentInstance.networks = B.bA,
                            (0,
                            C.D)(e.result).subscribe(i=>{
                                this.network = i,
                                this._walletService.selectNetwork(this.network)
                            }
                            );
                            break
                        }
                    case "setSlippage":
                        {
                            const e = this._modalService.open(tn, {
                                centered: !0,
                                scrollable: !0,
                                size: "sm",
                                modalDialogClass: "slippage-modal"
                            });
                            e.componentInstance.slippage = this.slippage,
                            (0,
                            C.D)(e.result).subscribe(i=>{
                                this.slippage = i,
                                this.check()
                            }
                            );
                            break
                        }
                    }
                }
                formatNumber(t) {
                    if (null == t)
                        return "";
                    const e = u.C6.toReadableNumber(Number(t)).replace(/,/g, "");
                    return e.indexOf("...") ? e.slice(0, 11) : e.slice(0, 8)
                }
                disconnect() {
                    var t = this;
                    return (0,
                    p.Z)(function*() {
                        yield(0,
                        F.n)(t._walletService.isLibLoaded$),
                        yield t._walletService.disconnect()
                    })()
                }
                _showSuccessResult(t=4e3) {
                    this.success = !0,
                    this._cdRef.detectChanges(),
                    setTimeout(()=>{
                        this.success = !1,
                        this._cdRef.detectChanges()
                    }
                    , t)
                }
                _showDisclaimer() {
                    const t = JSON.parse(u._Z.getString(q)) || {};
                    if (t.acceptanceDate && Date.now() - new Date(t.acceptanceDate).getTime() < 864e5)
                        return this.disclaimer = !1,
                        void this._cdRef.detectChanges();
                    this.disclaimer = !0,
                    this._cdRef.detectChanges()
                }
                _showError(t, e=4e3) {
                    this.error = !0,
                    this.errorMessage = t,
                    this._cdRef.detectChanges(),
                    -1 !== e && setTimeout(()=>{
                        this.error = !1,
                        this.errorMessage = "",
                        this._cdRef.detectChanges()
                    }
                    , e)
                }
                _showWarning(t, e=4e3) {
                    this.warning = !0,
                    this.warningMessage = t,
                    this._cdRef.detectChanges(),
                    -1 !== e && setTimeout(()=>{
                        this.warning = !1,
                        this.warningMessage = "",
                        this._cdRef.detectChanges()
                    }
                    , e)
                }
                _getBalanceWarningMessage(t) {
                    return "Insufficient {{symbol}} balance".replace("{{symbol}}", t)
                }
                _showBalanceWarning() {
                    if (this.tokenA) {
                        const t = this._getBalanceWarningMessage(this.tokenA.symbol);
                        this.warningMessage !== t && this._showWarning(t, -1)
                    }
                }
                _clearBalanceWarning() {
                    this.warning = !1,
                    this.warningMessage = "",
                    this._cdRef.detectChanges()
                }
                _updateBalanceWarning() {
                    this._hasEnoughBalance() ? this._clearBalanceWarning() : this._showBalanceWarning()
                }
                _hasEnoughBalance() {
                    const t = this.balance ?? 0
                      , e = l.m.bignumber(this.amountIn || 0);
                    return Number(e) > 0 && Number(t) > 0 && Number(l.m.compare(e, t)) <= 0
                }
                _isAutoSlippage() {
                    return 0 === this.slippage
                }
                _updateEnteredAmount() {
                    this.hasEnteredAmount = !!this.amountIn && "0" !== this.amountIn
                }
                checkApproval(t) {
                    var e = this;
                    return (0,
                    p.Z)(function*() {
                        const i = Number(yield e._walletService.allowedTokenFor(t, e.quote.tradeRoute.routerAddress, e.network.chainEnum.id));
                        e.shouldApprove = Number(e._aggregatorService.toBlockchainNumber(e.amountIn, e.tokenA.decimals)) > i
                    })()
                }
                handleTransactionError(t) {
                    return !(!t.code || 4001 !== t.code || (this._showError("Transaction rejected", 3e3),
                    0))
                }
                tryAssignTokens() {
                    this.tempTokenA && this.tempTokenB && (this.tokenA = this.tempTokenA.balance && this.tempTokenB.balance ? this.tempTokenB : this.tempTokenA,
                    this.tokenB = this.tokenA === this.tempTokenA ? this.tempTokenB : this.tempTokenA,
                    this.tokenA === this.tempTokenB && (this.amountIn = "100"),
                    this.tempTokenB = void 0,
                    this.tempTokenA = void 0)
                }
            }
            return o.\u0275fac = function(t) {
                return new (t || o)(n.Y36(n.sBO),n.Y36(M.FF),n.Y36(_.T6),n.Y36(w.X),n.Y36(en.Yg),n.Y36(f.j4Y),n.Y36(on.gb),n.Y36(n.zs3))
            }
            ,
            o.\u0275cmp = n.Xpm({
                type: o,
                selectors: [["app-aggregator"]],
                inputs: {
                    network: "network",
                    addButtonClose: "addButtonClose",
                    addCloseDisclaimer: "addCloseDisclaimer",
                    tokenRefSymbol: "tokenRefSymbol",
                    token1: "token1",
                    token2: "token2",
                    alternativeExchange: "alternativeExchange",
                    networkScanner: "networkScanner"
                },
                outputs: {
                    aggregatorClose: "aggregatorClose",
                    showAlternativeExchange: "showAlternativeExchange"
                },
                standalone: !0,
                features: [n._Bn([w.X, _.T6]), n.qOj, n.jDz],
                decls: 86,
                vars: 45,
                consts: [[1, "container", "ps-4", "pe-4"], [1, "row", "text-center", "mb-0"], [1, "col-md-12", "p-0", "box-container", 3, "ngClass"], ["class", "disclaimer row", 4, "ngIf"], [1, "box", "row", 3, "ngClass"], [1, "col-lg-12", "aggregator-body"], [4, "ngIf"], [1, "row", "justify-content-center", "ms-0", "me-0"], [1, "col-12"], [1, "row", "box-header"], [1, "col-12", "text-start", "box-header-content"], [1, "swap-title-left"], [1, "swap-title-left-text"], ["class", "swap-title-left-link", "href", "javascript:", 3, "click", 4, "ngIf"], ["class", "swap-title-right", 4, "ngIf"], [1, "input-box", "white"], [1, "row", "d-flex", "align-items-center"], [1, "col-4", "text-start", "pe-0"], ["type", "button", 1, "btn", "p-0", "d-flex", "align-items-center", 3, "ngbTooltip", "disableTooltip", "click"], [1, "big-number"], ["icon", "angle-down", 1, "icon-arrow"], [1, "col-8", "text-end"], ["type", "number", "name", "input", "placeholder", "0.0", "appRestrictInput", "^[0-9.]*$", "maxlength", "14", 1, "big-number", "amount", 3, "ngModel", "keyup", "ngModelChange"], ["inputIn", ""], [1, "row"], [1, "col-lg-12", "text-start"], [1, "token-balance"], ["class", "swap-max-balance", "href", "javascript:", 3, "click", 4, "ngIf"], [1, "change-swap-direction", "col-12"], [1, "pointer", 3, "click"], ["icon", "sync-alt"], [1, "col-12", "swap-target"], ["icon", "angle-down", 1, "icon-arrow", "d-flex"], ["placeholder", "0.0", "type", "number", "name", "output", "appRestrictInput", "^[0-9.]*$", "maxlength", "14", 1, "big-number", "amount", 3, "disabled", "ngModel", "keyup", "ngModelChange"], ["inputOut", ""], ["class", "col-12 slippage-warning", 4, "ngIf"], [1, "col-12", "swap-actions"], ["class", "btn btn-primary btn-swap-1", "type", "button", 3, "click", 4, "ngIf"], [1, "col-12", "additional-info"], [1, "input-box-2", "txt-box", "small"], ["class", "row mb-1", 4, "ngIf"], [1, "row", "mb-1"], [1, "col-5", "text-start", "pe-0"], [1, "col-7", "text-end", "ps-2"], [1, "col-6", "text-start"], [1, "col-6", "text-end"], ["type", "button", 1, "btn", "p-0", 3, "click"], ["icon", "cog", 1, "icon-arrow"], [1, "col-12", "d-flex", "justify-content-center"], [1, "powered-by"], ["target", "_blank", "rel", "noopener", "href", "https://kyberswap.com/"], [1, "disclaimer", "row"], ["class", "close-container", 4, "ngIf"], [1, "disclaimer-header"], [1, "disclaimer-body"], [1, "emphasize"], ["type", "button", 1, "btn", "btn-primary", "btn-disclaimer", 3, "click"], [1, "close-container"], ["role", "button", "class", "close", "href", "javascript:", 3, "ngbTooltip", "click", 4, "ngIf"], ["role", "button", "href", "javascript:", 1, "close", 3, "ngbTooltip", "click"], [3, "icon"], [1, "row", "ms-0", "me-0"], [1, "col-12", "close-container"], ["href", "javascript:", 1, "swap-title-left-link", 3, "click"], [1, "swap-title-right"], ["target", "_blank", "rel", "noopener", 1, "swap-title-right-link-secondary", 3, "href", "ngbTooltip"], [1, "me-1", 3, "icon"], [1, "swap-title-right-link", 3, "click"], ["href", "javascript:", 1, "swap-max-balance", 3, "click"], [1, "col-12", "slippage-warning"], ["class", "message", 4, "ngIf"], [1, "message"], ["type", "button", 1, "btn", "btn-primary", "btn-swap-1", 3, "click"], ["class", "btn btn-swap-1", "type", "button", 3, "btn-primary", "btn-warning", "btn-danger", "click", 4, "ngIf"], ["class", "warning", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "btn btn-danger", "type", "button", 4, "ngIf"], ["class", "btn btn-success", "type", "button", 4, "ngIf"], ["type", "button", 1, "btn", "btn-swap-1", 3, "click"], [1, "warning"], [1, "loading"], [1, "dot-flashing"], ["type", "button", 1, "btn", "btn-danger"], ["type", "button", 1, "btn", "btn-success"]],
                template: function(t, e) {
                    if (1 & t) {
                        const i = n.EpF();
                        n.TgZ(0, "section")(1, "div", 0)(2, "div", 1)(3, "div", 2),
                        n.YNc(4, rn, 13, 10, "div", 3),
                        n.TgZ(5, "div", 4)(6, "div", 5),
                        n.YNc(7, sn, 6, 5, "ng-container", 6),
                        n.TgZ(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "span", 12),
                        n._uU(14, "DEXTSWAP"),
                        n.qZA(),
                        n.YNc(15, gn, 2, 1, "a", 13),
                        n.qZA(),
                        n.YNc(16, dn, 10, 19, "div", 14),
                        n.qZA()(),
                        n.TgZ(17, "div", 15)(18, "div", 16)(19, "div", 17)(20, "button", 18),
                        n.NdJ("click", function() {
                            return e.openModal("selectTokenA")
                        }),
                        n.ALo(21, "appSafe"),
                        n.TgZ(22, "span", 19),
                        n._uU(23),
                        n.ALo(24, "appSafe"),
                        n.qZA(),
                        n._UZ(25, "fa-icon", 20),
                        n.qZA()(),
                        n.TgZ(26, "div", 21)(27, "input", 22, 23),
                        n.NdJ("keyup", function() {
                            n.CHM(i);
                            const c = n.MAs(28);
                            return n.KtG(e.amountInObservable.next(c.value))
                        })("ngModelChange", function(c) {
                            return e.amountIn = c
                        }),
                        n.qZA()()(),
                        n.TgZ(29, "div", 24)(30, "div", 25)(31, "span", 26),
                        n._uU(32),
                        n.YNc(33, _n, 2, 0, "a", 27),
                        n.qZA()()()()(),
                        n.TgZ(34, "div", 28)(35, "span", 29),
                        n.NdJ("click", function() {
                            return e.changeInForOut()
                        }),
                        n._UZ(36, "fa-icon", 30),
                        n.qZA()(),
                        n.TgZ(37, "div", 31)(38, "div", 15)(39, "div", 16)(40, "div", 17)(41, "button", 18),
                        n.NdJ("click", function() {
                            return e.openModal("selectTokenB")
                        }),
                        n.ALo(42, "appSafe"),
                        n.TgZ(43, "span", 19),
                        n._uU(44),
                        n.ALo(45, "appSafe"),
                        n.qZA(),
                        n._UZ(46, "fa-icon", 32),
                        n.qZA()(),
                        n.TgZ(47, "div", 21)(48, "input", 33, 34),
                        n.NdJ("keyup", function() {
                            n.CHM(i);
                            const c = n.MAs(49);
                            return n.KtG(e.amountOutObservable.next(c.value))
                        })("ngModelChange", function(c) {
                            return e.amountOut = c
                        }),
                        n.qZA()()(),
                        n.TgZ(50, "div", 24)(51, "div", 25)(52, "span", 26),
                        n._uU(53),
                        n.qZA()()()()(),
                        n.YNc(54, mn, 3, 2, "div", 35),
                        n.TgZ(55, "div", 36),
                        n.YNc(56, Cn, 2, 0, "button", 37),
                        n.YNc(57, bn, 2, 1, "button", 37),
                        n.YNc(58, Tn, 12, 11, "ng-container", 6),
                        n.qZA(),
                        n.TgZ(59, "div", 38)(60, "div", 39),
                        n.YNc(61, Nn, 7, 2, "div", 40),
                        n.TgZ(62, "div", 41)(63, "div", 42)(64, "span"),
                        n._uU(65),
                        n.qZA()(),
                        n.TgZ(66, "div", 43),
                        n.YNc(67, Bn, 4, 6, "span", 6),
                        n.YNc(68, En, 2, 0, "span", 6),
                        n.qZA()(),
                        n.YNc(69, qn, 8, 10, "div", 40),
                        n.YNc(70, Yn, 22, 6, "ng-container", 6),
                        n.TgZ(71, "div", 24)(72, "div", 44)(73, "span"),
                        n._uU(74, "Slippage"),
                        n.qZA()(),
                        n.TgZ(75, "div", 45)(76, "button", 46),
                        n.NdJ("click", function() {
                            return e.openModal("setSlippage")
                        }),
                        n.TgZ(77, "span"),
                        n._uU(78),
                        n.qZA(),
                        n._UZ(79, "fa-icon", 47),
                        n.qZA()()(),
                        n.TgZ(80, "div", 24)(81, "div", 48)(82, "span", 49),
                        n._uU(83, "Powered by "),
                        n.TgZ(84, "a", 50),
                        n._uU(85, "KyberSwap.com"),
                        n.qZA()()()()()()()()()()()()()
                    }
                    2 & t && (n.xp6(3),
                    n.Q6J("ngClass", n.VKq(41, Fn, e.disclaimer && !e.disclaimerAccepted)),
                    n.xp6(1),
                    n.Q6J("ngIf", e.disclaimer && !e.disclaimerAccepted),
                    n.xp6(1),
                    n.Q6J("ngClass", n.VKq(43, jn, !e.addButtonClose)),
                    n.xp6(2),
                    n.Q6J("ngIf", !!e.addButtonClose),
                    n.xp6(8),
                    n.Q6J("ngIf", "#" !== (null == e.alternativeExchange ? null : e.alternativeExchange.url)),
                    n.xp6(1),
                    n.Q6J("ngIf", e.account),
                    n.xp6(4),
                    n.s9C("ngbTooltip", n.lcZ(21, 33, null == e.tokenA ? null : e.tokenA.symbol)),
                    n.Q6J("disableTooltip", !e.tokenA || e.tokenA.symbol.length <= 4),
                    n.xp6(3),
                    n.Oqu(e.tokenA ? e.tokenA.shortSymbol : n.lcZ(24, 35, "...")),
                    n.xp6(4),
                    n.Q6J("ngModel", e.amountIn),
                    n.xp6(4),
                    n.ekj("inactive", !e.showBalances),
                    n.xp6(1),
                    n.hij("Balance: ", e.formatNumber(e.balance), " "),
                    n.xp6(1),
                    n.Q6J("ngIf", e.showBalances && e.showMax),
                    n.xp6(8),
                    n.s9C("ngbTooltip", n.lcZ(42, 37, null == e.tokenB ? null : e.tokenB.symbol)),
                    n.Q6J("disableTooltip", !e.tokenB || e.tokenB.symbol.length <= 4),
                    n.xp6(3),
                    n.Oqu(e.tokenB ? e.tokenB.shortSymbol : n.lcZ(45, 39, "...")),
                    n.xp6(4),
                    n.Q6J("disabled", !0)("ngModel", e.amountOut),
                    n.xp6(4),
                    n.ekj("inactive", !e.showBalances),
                    n.xp6(1),
                    n.hij("Balance: ", e.formatNumber(e.balanceB), ""),
                    n.xp6(1),
                    n.Q6J("ngIf", !!e.getStoredSlippageValue()),
                    n.xp6(2),
                    n.Q6J("ngIf", !e.account),
                    n.xp6(1),
                    n.Q6J("ngIf", e.shouldSwitchNetwork && e.account),
                    n.xp6(1),
                    n.Q6J("ngIf", !e.shouldSwitchNetwork && e.account && e.quote),
                    n.xp6(3),
                    n.Q6J("ngIf", !!e.minimumReceived),
                    n.xp6(4),
                    n.hij("Price per ", null == e.tokenA ? null : e.tokenA.symbol, ""),
                    n.xp6(2),
                    n.Q6J("ngIf", e.quote),
                    n.xp6(1),
                    n.Q6J("ngIf", !e.quote),
                    n.xp6(1),
                    n.Q6J("ngIf", e.quote && e.quote.priceImpact > 0),
                    n.xp6(1),
                    n.Q6J("ngIf", e.showDetailedCalculations),
                    n.xp6(8),
                    n.hij("", 0 === e.slippage ? "Auto" : e.slippage + "%", " "))
                },
                dependencies: [m.mk, m.O5, M._L, h.uH, h.BN, d.u5, d.Fj, d.wV, d.JJ, d.nD, d.On, m.OU, m.JJ, b.yl, b.$p, T.aw, T.X$, b.O7],
                styles: ['section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{align-self:center;position:relative}@media (min-width: 576px){section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:100%}}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{background-color:#f4f5f6e6;height:100%;width:100%;display:flex;align-items:flex-start;justify-content:center;z-index:1;position:absolute;flex-direction:column;border-radius:.9375rem;text-align:left;padding:0 1.5rem}@media (max-width: 1023px){section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]{padding:0 15%}}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-header[_ngcontent-%COMP%]{margin-bottom:.625rem;padding:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;line-height:1.125rem;margin-bottom:1.25rem;padding:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]   .emphasize[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:13px;line-height:16px;color:#142028}body.dark-theme   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]   .emphasize[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]   .emphasize[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]   .emphasize[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .disclaimer-body[_ngcontent-%COMP%]   .emphasize[_ngcontent-%COMP%]{color:#142028}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]{top:.75rem;right:.75rem;position:absolute;padding-right:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .btn-disclaimer[_ngcontent-%COMP%]{padding:.5rem;width:100%;height:2.5rem;text-align:center;outline:currentcolor none medium;border:.0625rem solid transparent;color:#fff;text-decoration:none;display:flex;justify-content:center;flex-wrap:nowrap;align-items:center;cursor:pointer;position:relative;z-index:1;background-color:#00b8d8;font-size:14px;border-radius:1.5rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .disclaimer[_ngcontent-%COMP%]   .btn-disclaimer[_ngcontent-%COMP%]:hover{background-color:#00a2bf}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box-container.disclaimer-shown[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{z-index:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{color:#3d5170;background-color:#e2e7ec;border-radius:.625rem;padding:.625rem;min-height:4.4375rem}body.dark-theme   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%]{background-color:#e2e7ec}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#f4f5f6;position:relative;border-radius:.9375rem;padding:.5rem 0 1rem}body.dark-theme   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:#f4f5f6}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .aggregator-body[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .aggregator-body[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%]{padding-left:0;padding-right:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .aggregator-body[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-left:0;padding-right:0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box.extra-padding-top[_ngcontent-%COMP%]{padding-top:1rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{margin-bottom:.9375rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-left-link[_ngcontent-%COMP%]{color:#00b8d8;display:flex;font-size:.6875rem;cursor:pointer}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-left-link[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:.625rem;margin-left:.1875rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-left-link[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-left-text[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;color:#3d5170}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link-secondary[_ngcontent-%COMP%]{display:block;text-align:right;color:#00000080;font-size:.6875rem;cursor:pointer}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link-secondary[_ngcontent-%COMP%]:hover{text-decoration:none;color:#cacedb!important}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]{color:#142028;display:block;text-align:right;opacity:.7;font-size:.625rem;font-weight:400;cursor:pointer}body.dark-theme   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]{color:#142028}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{font-size:.625rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .box-header-content[_ngcontent-%COMP%]   .swap-title-right-link[_ngcontent-%COMP%]:hover{opacity:1;text-decoration:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f4f5f6;width:100%;text-align:end;border:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:24px;line-height:32px;color:#3d5170}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]{font-size:20px!important;background:transparent!important;color:#3d5170}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]:disabled{cursor:not-allowed;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]:disabled{color:#818ea3!important}body.dark-theme[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]:disabled{color:#818ea3!important}body.light   [_nghost-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]:disabled{color:#818ea3!important}body.light[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .big-number.amount[_ngcontent-%COMP%]:disabled{color:#818ea3!important}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .icon-arrow[_ngcontent-%COMP%]{padding-left:.3125rem;width:1.5rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .token-balance[_ngcontent-%COMP%]{font-size:12px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .token-balance.inactive[_ngcontent-%COMP%]{opacity:.6}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .swap-max-balance[_ngcontent-%COMP%]:hover{text-decoration:none}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .input-box-2[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]{position:relative;font-size:24px;color:#3d5170}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box.small[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-weight:400;font-size:12px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-size:12px!important;color:#00b8d8}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{color:#0056b3}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:12px;line-height:12px;color:#818ea3;margin-top:.5rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{color:#fff}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   fa-icon[icon=angle-down].icon-arrow[_ngcontent-%COMP%]{color:#3d5170;padding-top:.125rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;line-height:1}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .title.mini[_ngcontent-%COMP%]{font-size:1.1875rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{line-height:1;color:transparent;-webkit-text-stroke-width:.125rem;-webkit-text-stroke-color:#fff}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:2.8125rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .icon-form[_ngcontent-%COMP%]{width:1.875rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]{text-transform:uppercase;height:100%;color:#92a0df;background-color:#f4f5f6;border:.125rem solid #8a7ae3;min-width:4.6875rem;border-radius:0 1.25rem 1.25rem 0}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .before[_ngcontent-%COMP%]{height:100%;color:#92a0df;background-color:#f4f5f6;border:.125rem solid #8a7ae3;border-radius:1.25rem 0 0 1.25rem}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-top:.125rem solid #897be2;border-bottom:.125rem solid #897be2}.slippage-warning[_ngcontent-%COMP%]{padding-top:.75rem}.slippage-warning[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;line-height:revert;text-align:left;background-color:#ffb30066;color:#eda803;border-radius:.625rem;padding:.625rem}.swap-actions[_ngcontent-%COMP%]{padding-bottom:1.5rem;padding-top:.75rem}.swap-actions[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]{padding:.5rem;width:100%;height:2.5rem;text-align:center;outline:currentcolor none medium;border:.0625rem solid transparent;color:#fff;text-decoration:none;display:flex;justify-content:center;flex-wrap:nowrap;align-items:center;cursor:pointer;position:relative;z-index:1;border-radius:.625rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}.swap-actions[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]:hover{background-color:#00a2bf}.swap-actions[_ngcontent-%COMP%]   .btn-swap-1[_ngcontent-%COMP%]:disabled{background-color:#00b8d8;opacity:.8}.swap-actions[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%], .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{height:2.5rem;display:flex;align-items:center;justify-content:center;border-radius:.625rem;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px}.swap-actions[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background-color:#00b8d8;color:#fff;opacity:.8}.swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#e2e7ec;color:#142028;opacity:.6}body.dark-theme   [_nghost-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{background-color:#e2e7ec}body.dark-theme   [_nghost-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .swap-actions[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%]{color:#142028}.swap-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%], .swap-actions[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%]{width:100%;min-height:2.5rem;padding:.5rem;border-radius:.625rem}.swap-actions[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover, .swap-actions[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%]:hover{background-color:#ea3943}.swap-actions[_ngcontent-%COMP%]   .btn-danger[disabled][_ngcontent-%COMP%], .swap-actions[_ngcontent-%COMP%]   .btn-warning[disabled][_ngcontent-%COMP%]{cursor:inherit!important}.swap-actions[_ngcontent-%COMP%]   .btn-warning[_ngcontent-%COMP%]:hover{background-color:#f8b60f}.swap-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{width:100%;min-height:2.5rem;padding:.5rem;cursor:default!important;border-radius:.625rem}.swap-actions[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover{background-color:#17c671}.additional-info[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{font-size:12px!important}.separator[_ngcontent-%COMP%]{height:.0625rem;width:100%;display:inline-block;background-color:#dee2e6}.txt-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.change-swap-direction[_ngcontent-%COMP%]{margin-top:-.5rem;z-index:1}.swap-target[_ngcontent-%COMP%]{margin-top:-.5rem}@media only screen and (max-width: 600px){.btn-swap-1[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]{line-break:normal}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:2.5rem}}.pointer[_ngcontent-%COMP%]{background-color:#f4f5f6;cursor:pointer;width:1.75rem;height:1.75rem;border-radius:3.125rem;margin:0 auto;display:flex;align-items:center;justify-content:center}body.dark-theme   [_nghost-%COMP%]   .pointer[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .pointer[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%]{background-color:#f4f5f6}.pointer[_ngcontent-%COMP%]   fa-icon[icon=sync-alt][_ngcontent-%COMP%]{font-size:14px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}@media only screen and (min-width: 600px){.btn-swap-1[_ngcontent-%COMP%]{width:100%}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]{line-break:normal}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:2.5rem}}@media only screen and (min-width: 768px){section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]{line-break:normal}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:3.75rem}}@media only screen and (min-width: 992px){section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .txt-box[_ngcontent-%COMP%]{line-break:normal}section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:4.6875rem}}@media only screen and (min-width: 1200px){.title[_ngcontent-%COMP%], .subtitle[_ngcontent-%COMP%]{font-size:4.6875rem}}.dot-flashing[_ngcontent-%COMP%]{position:relative;width:.5rem;height:.5rem;border-radius:.3125rem;background-color:#fff;color:#fff;animation:_ngcontent-%COMP%_dotFlashing 1s infinite linear alternate;animation-delay:.5s}.dot-flashing[_ngcontent-%COMP%]:before, .dot-flashing[_ngcontent-%COMP%]:after{content:"";display:inline-block;position:absolute;top:0}.dot-flashing[_ngcontent-%COMP%]:before{left:-.9375rem;width:.5rem;height:.5rem;border-radius:.3125rem;background-color:#fff;color:#fff;animation:_ngcontent-%COMP%_dotFlashing 1s infinite alternate;animation-delay:0s}.dot-flashing[_ngcontent-%COMP%]:after{left:.9375rem;width:.5rem;height:.5rem;border-radius:.3125rem;background-color:#fff;color:#fff;animation:_ngcontent-%COMP%_dotFlashing 1s infinite alternate;animation-delay:1s}@keyframes _ngcontent-%COMP%_dotFlashing{0%{background-color:#fff}50%,to{background-color:#ebe6ff}}body.dark-theme   [_nghost-%COMP%]     .container .box-container.disclaimer-shown .disclaimer{background-color:#142028e6!important}body.dark-theme   [_nghost-%COMP%]     .container .white{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .box .box-header .box-header-content .swap-title-left-text{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .box .box-header .box-header-content .swap-title-right-link-secondary{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .container .box .input-box input{background-color:transparent;color:#fff}body.dark-theme   [_nghost-%COMP%]     .container .box .input-box .big-number{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .box .input-box .big-number.amount{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .box .input-box .big-number.amount:disabled{color:#818ea3}body.dark-theme   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .container .box .input-box .big-number.amount:disabled{color:#818ea3!important}body.dark-theme   body.dark-theme   [_nghost-%COMP%]     .container .box .input-box .big-number.amount:disabled{color:#818ea3!important}body.light   [_nghost-%COMP%]   body.dark-theme[_ngcontent-%COMP%]   [_nghost-%COMP%]     .container .box .input-box .big-number.amount:disabled{color:#818ea3!important}body.light   body.dark-theme   [_nghost-%COMP%]     .container .box .input-box .big-number.amount:disabled{color:#818ea3!important}body.dark-theme   [_nghost-%COMP%]     .container .box .txt-box{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .box .btn{color:#fff}body.dark-theme   [_nghost-%COMP%]     .container .box .btn fa-icon[icon=angle-down].icon-arrow{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .container .text-unsupported>p{color:#fff}body.dark-theme   [_nghost-%COMP%]     .container .slippage-warning .message{color:#ffdf91}body.dark-theme   [_nghost-%COMP%]     .btn-swap-1{color:#fff!important}body.dark-theme   [_nghost-%COMP%]     .btn-swap-1:disabled{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .pointer{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .pointer fa-icon[icon=sync-alt]{color:#fff}.close-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:.25rem}.close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#818ea3}.close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{height:1.75rem;width:1.75rem;background-color:#e2e7ec;border-radius:3.125rem;font-size:1.1875rem;display:flex;align-items:center;justify-content:center}body.dark-theme   [_nghost-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.dark-theme[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}body.light[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{background-color:#e2e7ec}'],
                changeDetection: 0
            }),
            o
        }
        )()
    }
}]);
