"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[7885], {
    37885: (Y,u,r)=>{
        r.d(u, {
            t: ()=>N
        });
        var l = r(12113)
          , d = r(52413)
          , g = r(49319)
          , P = r(95698)
          , _ = r(89383)
          , t = r(94650)
          , C = r(18505)
          , b = r(47487)
          , v = r(92216)
          , f = r(36895)
          , m = r(99703);
        function F(n, a) {
            1 & n && t._UZ(0, "fa-icon", 8)
        }
        function x(n, a) {
            if (1 & n && (t.TgZ(0, "span"),
            t.YNc(1, F, 1, 0, "fa-icon", 7),
            t._uU(2),
            t.ALo(3, "translate"),
            t.qZA()),
            2 & n) {
                const o = t.oxw().$implicit
                  , e = t.oxw();
                let i;
                t.xp6(1),
                t.Q6J("ngIf", !!e.isListMain(null !== (i = null == o ? null : o.id) && void 0 !== i ? i : "")),
                t.xp6(1),
                t.hij(" ", t.lcZ(3, 2, o.label), "")
            }
        }
        const O = function() {
            return ["far", "star"]
        };
        function M(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.TgZ(0, "fa-icon", 9),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.oxw().$implicit
                      , c = t.oxw();
                    let p;
                    return i.stopImmediatePropagation(),
                    t.KtG(c.addFavToList.emit({
                        name: s.value,
                        id: null !== (p = s.id) && void 0 !== p ? p : ""
                    }))
                }),
                t.qZA()
            }
            2 & n && t.Q6J("icon", t.DdM(1, O))
        }
        function T(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.TgZ(0, "fa-icon", 10),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.oxw().$implicit
                      , c = t.oxw();
                    let p;
                    return i.stopImmediatePropagation(),
                    t.KtG(c.removeFavToList.emit({
                        name: s.value,
                        id: null !== (p = s.id) && void 0 !== p ? p : ""
                    }))
                }),
                t.qZA()
            }
        }
        function S(n, a) {
            if (1 & n && (t.ynx(0),
            t.TgZ(1, "div", 3),
            t.NdJ("click", function(e) {
                return e.stopPropagation()
            }),
            t.YNc(2, x, 4, 4, "span", 4),
            t.YNc(3, M, 1, 2, "fa-icon", 5),
            t.YNc(4, T, 1, 0, "fa-icon", 6),
            t.qZA(),
            t.BQk()),
            2 & n) {
                const o = a.$implicit
                  , e = t.oxw();
                t.xp6(1),
                t.Gre("dropdown-option ", e.isFavInList(o.id) ? "saved" : null, ""),
                t.xp6(1),
                t.Q6J("ngIf", !!o.label),
                t.xp6(1),
                t.Q6J("ngIf", !e.isFavInList(o.id) || !e.isSaved),
                t.xp6(1),
                t.Q6J("ngIf", e.isSaved && e.isFavInList(o.id))
            }
        }
        function L(n, a) {
            1 & n && (t.TgZ(0, "div", 11),
            t._UZ(1, "app-manage-favs-list"),
            t.qZA())
        }
        let y = (()=>{
            class n extends d.K9 {
                get listSaved() {
                    return this._listSaved
                }
                set listSaved(o) {
                    this._listSaved = o
                }
                constructor(o, e) {
                    super(),
                    this._favoritePairsService = o,
                    this._cdRef = e,
                    this.isSaved = !1,
                    this.addFavToList = new t.vpe,
                    this.removeFavToList = new t.vpe,
                    this.favsListItems = [],
                    this.isLogged = !1,
                    this._listSaved = []
                }
                ngOnInit() {
                    this.isLogged = this._favoritePairsService.loggedUser,
                    this._favoritePairsService.favoritesList$.pipe((0,
                    d.sL)(this), (0,
                    C.b)(o=>{
                        this.favsListItems = o.map(e=>({
                            value: e.name,
                            label: this._favoritePairsService.formatListName(e),
                            id: e.id
                        })),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe()
                }
                onDestroy() {}
                trackByValue(o, e) {
                    return e.id
                }
                isFavInList(o) {
                    return !!o && !!this.listSaved.find(e=>e.listId === o)
                }
                isListMain(o) {
                    return this._favoritePairsService.inmediateFavoriteList.find(e=>e.id === o && e.main)
                }
            }
            return n.\u0275fac = function(o) {
                return new (o || n)(t.Y36(m.SBY),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-add-fav-to-list-popup"]],
                inputs: {
                    listSaved: "listSaved",
                    isSaved: "isSaved"
                },
                outputs: {
                    addFavToList: "addFavToList",
                    removeFavToList: "removeFavToList"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 3,
                vars: 3,
                consts: [[1, "dropdown-list"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "dropdown-option favs-list", 4, "ngIf"], [3, "click"], [4, "ngIf"], [3, "icon", "click", 4, "ngIf"], ["icon", "star", 3, "click", 4, "ngIf"], ["icon", "thumbtack", "class", "main-icon-list", 4, "ngIf"], ["icon", "thumbtack", 1, "main-icon-list"], [3, "icon", "click"], ["icon", "star", 3, "click"], [1, "dropdown-option", "favs-list"]],
                template: function(o, e) {
                    1 & o && (t.TgZ(0, "div", 0),
                    t.YNc(1, S, 5, 6, "ng-container", 1),
                    t.YNc(2, L, 2, 0, "div", 2),
                    t.qZA()),
                    2 & o && (t.xp6(1),
                    t.Q6J("ngForOf", e.favsListItems)("ngForTrackBy", e.trackByValue),
                    t.xp6(1),
                    t.Q6J("ngIf", e.isLogged))
                },
                dependencies: [f.ax, f.O5, v.uH, v.BN, b.g, _.aw, _.X$],
                styles: [".dropdown-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-bottom-left-radius:.4rem;border-bottom-right-radius:.4rem;overflow:hidden}.item-selected[_ngcontent-%COMP%], .dropdown-option[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:13px;min-width:3.0625rem;padding-top:.5165rem;padding-bottom:.5165rem;text-align:left;vertical-align:baseline;white-space:nowrap}.item-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dropdown-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:.40625rem}.item-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .dropdown-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{padding-left:.40625rem}.item-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child, .dropdown-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:.4rem;border-bottom-right-radius:.4rem}.item-selected[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .dropdown-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;height:.8rem;margin-right:.40625rem;vertical-align:middle;width:.8rem}.item-no-radius[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.favs-list[_ngcontent-%COMP%]{border-top:1px solid #3a4956}fa-icon[_ngcontent-%COMP%]{cursor:pointer;font-size:16px;color:#142028}body.dark-theme   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}.dropdown-option.saved[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#eda803!important}.dropdown-option.saved[_ngcontent-%COMP%]   .main-icon-list[_ngcontent-%COMP%]{color:#00b8d8!important}.dropdown-option[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:#eda803!important}.dropdown-option[_ngcontent-%COMP%]:hover   .main-icon-list[_ngcontent-%COMP%]{color:#00b8d8!important}.dropdown-option.disabled[_ngcontent-%COMP%]{opacity:.4;cursor:default}.dropdown-option[_ngcontent-%COMP%]     app-manage-favs-list:hover{background:transparent}.main-icon-list[_ngcontent-%COMP%]{font-size:13px;color:#00b8d8;margin-right:.25rem}"],
                changeDetection: 0
            }),
            n
        }
        )();
        var k = r(62289);
        const h = function() {
            return ["far", "star"]
        };
        function w(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 2, 3),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.MAs(2)
                      , c = t.oxw(2);
                    return t.KtG(c.openFavPopover(i, s))
                }),
                t._UZ(3, "fa-icon", 4),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const o = t.oxw(2)
                  , e = t.MAs(3);
                t.xp6(1),
                t.Q6J("ngbPopover", e)("autoClose", "outside")("placement", o.hiddenFavorites || o.popupPlacement ? "bottom-left" : "bottom-right"),
                t.xp6(2),
                t.Q6J("icon", t.DdM(4, h))
            }
        }
        function I(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 5, 6),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.MAs(2)
                      , c = t.oxw(2);
                    return t.KtG(c.openFavPopover(i, s))
                }),
                t._UZ(3, "fa-icon", 7),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const o = t.oxw(2)
                  , e = t.MAs(3);
                t.xp6(1),
                t.Q6J("ngbPopover", e)("autoClose", "outside")("placement", o.hiddenFavorites || o.popupPlacement ? "bottom-left" : "bottom-right")
            }
        }
        function A(n, a) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, w, 4, 5, "ng-container", 0),
            t.YNc(2, I, 4, 3, "ng-container", 0),
            t.BQk()),
            2 & n) {
                const o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !o.isSaved),
                t.xp6(1),
                t.Q6J("ngIf", !!o.isSaved)
            }
        }
        function B(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 8),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.oxw(2);
                    return t.KtG(s.freeSaveFavorite(i))
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 4),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 3, "pair_explorer.add_pair_to_favorites"))("disableTooltip", "mobileTablet" === o.mediaDevice),
                t.xp6(2),
                t.Q6J("icon", t.DdM(5, h))
            }
        }
        function Z(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.ynx(0),
                t.TgZ(1, "button", 9),
                t.NdJ("click", function(i) {
                    t.CHM(o);
                    const s = t.oxw(2);
                    return t.KtG(s.freeDeleteFavorite(i))
                }),
                t.ALo(2, "translate"),
                t._UZ(3, "fa-icon", 7),
                t.qZA(),
                t.BQk()
            }
            if (2 & n) {
                const o = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngbTooltip", t.lcZ(2, 2, "pair_explorer.remove_favorite"))("disableTooltip", "mobileTablet" === o.mediaDevice)
            }
        }
        function J(n, a) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, B, 4, 6, "ng-container", 0),
            t.YNc(2, Z, 4, 4, "ng-container", 0),
            t.BQk()),
            2 & n) {
                const o = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !o.isSaved),
                t.xp6(1),
                t.Q6J("ngIf", !!o.isSaved)
            }
        }
        function Q(n, a) {
            if (1 & n) {
                const o = t.EpF();
                t.TgZ(0, "app-add-fav-to-list-popup", 10),
                t.NdJ("addFavToList", function(i) {
                    t.CHM(o);
                    const s = t.oxw();
                    return t.KtG(s.saveFavorite(i))
                })("removeFavToList", function(i) {
                    t.CHM(o);
                    const s = t.oxw();
                    return t.KtG(s.removeFavorite(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const o = t.oxw();
                t.Q6J("isSaved", o.isSaved)("listSaved", o.listSaved)
            }
        }
        let N = (()=>{
            class n extends d.K9 {
                set item(o) {
                    o !== this._item && (this._item = o,
                    this.isPairExplorer && (this.isSaved = this.isLogged ? !!this._favoritePairsService.findFavInAnyList(this._item.pair) : !!this._favoritePairsService.findFavInCurrentList(this._item.pair)),
                    this._checkFavSaved(o))
                }
                get item() {
                    return this._item
                }
                constructor(o, e, i) {
                    super(),
                    this._breakpointObserver = o,
                    this._favoritePairsService = e,
                    this._cdRef = i,
                    this.isSaved = !1,
                    this.listSaved = [],
                    this.isLogged = this._favoritePairsService.loggedUser,
                    this._popOverShowInProgress = !1,
                    this._popOverShownFinished = !0,
                    this.isPairExplorer = !1,
                    this.popupPlacement = !1,
                    this.hiddenFavorites = !1,
                    this.mediaDevice = ""
                }
                ngOnInit() {
                    this._breakpointObserver.observe([l.K5, l.mT]).pipe((0,
                    d.sL)(this)).subscribe(o=>{
                        this.mediaDevice = o.breakpoints[l.K5] ? "mobileTablet" : "desktop"
                    }
                    ),
                    this._favoritePairsService.allFavs$.pipe((0,
                    d.sL)(this)).subscribe(()=>{
                        this._checkFavSaved(this._item),
                        this._cdRef.detectChanges()
                    }
                    )
                }
                removeFavorite(o) {
                    if (this.isSaved) {
                        const e = this._favoritePairsService.findFavInAList(this.item.pair, o.id);
                        this._favoritePairsService.deleteFav(e, o.id).subscribe(i=>{
                            i && (this._favoritePairsService.sendDeletedFav(e, o.id),
                            this._checkFavSaved(this._item),
                            this._cdRef.detectChanges())
                        }
                        )
                    }
                    this._closeFavPopover()
                }
                saveFavorite(o) {
                    this._favoritePairsService.addFav(this._item, o.id).subscribe(e=>{
                        e && (this._favoritePairsService.sendAddedFav(this._item, o.id, o.name),
                        this._closeFavPopover(),
                        this._checkFavSaved(this._item),
                        this._cdRef.detectChanges())
                    }
                    )
                }
                freeSaveFavorite(o) {
                    o.stopPropagation(),
                    this._favoritePairsService.addFav(this._item, "").subscribe(),
                    this._checkFavSaved(this._item),
                    this._cdRef.detectChanges()
                }
                freeDeleteFavorite(o) {
                    if (o.stopPropagation(),
                    this.isSaved) {
                        const e = this._favoritePairsService.findFavInCurrentList(this.item.pair);
                        this._favoritePairsService.deleteFav(e, "").subscribe(i=>{
                            i && this._checkFavSaved(this._item)
                        }
                        )
                    }
                }
                openFavPopover(o, e) {
                    o.stopImmediatePropagation(),
                    this._cdRef.detectChanges(),
                    !this._popOverShowInProgress && !e.isOpen() && (this._popover = e,
                    this._popOverShowInProgress = !0,
                    e.open(),
                    this._cdRef.detectChanges(),
                    e.shown.pipe((0,
                    P.q)(1)).subscribe(()=>{
                        this._popOverShownFinished = !0,
                        this._popOverShowInProgress = !1,
                        this._cdRef.detectChanges()
                    }
                    ))
                }
                _closeFavPopover() {
                    !this._popOverShowInProgress && this._popOverShownFinished && this._popover.isOpen() && (this._popover.close(),
                    this._cdRef.detectChanges())
                }
                _checkFavSaved(o) {
                    const e = this.isLogged ? this._favoritePairsService.filterFavsInAllList(o.pair) : this._favoritePairsService.findFavInCurrentList(o.pair);
                    this.isSaved = this.isLogged ? !!e.length : !!e,
                    this.isLogged && (this.listSaved = e.length ? e : []),
                    this._cdRef.detectChanges()
                }
                onDestroy() {}
            }
            return n.\u0275fac = function(o) {
                return new (o || n)(t.Y36(k.Yg),t.Y36(m.SBY),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["app-favorite-button"]],
                inputs: {
                    item: "item",
                    isPairExplorer: "isPairExplorer",
                    popupPlacement: "popupPlacement",
                    hiddenFavorites: "hiddenFavorites"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 4,
                vars: 2,
                consts: [[4, "ngIf"], ["favPopup", ""], ["popoverClass", "fav-popover", "container", "body", 3, "ngbPopover", "autoClose", "placement", "click"], ["favPopoverOpen", "ngbPopover"], [3, "icon"], ["popoverClass", "fav-popover", "container", "body", 1, "saved", 3, "ngbPopover", "autoClose", "placement", "click"], ["favPopoverClose", "ngbPopover"], ["icon", "star"], ["placement", "auto", 3, "ngbTooltip", "disableTooltip", "click"], ["placement", "auto", 1, "saved", 3, "ngbTooltip", "disableTooltip", "click"], [3, "isSaved", "listSaved", "addFavToList", "removeFavToList"]],
                template: function(o, e) {
                    1 & o && (t.YNc(0, A, 3, 2, "ng-container", 0),
                    t.YNc(1, J, 3, 2, "ng-container", 0),
                    t.YNc(2, Q, 1, 2, "ng-template", null, 1, t.W1O)),
                    2 & o && (t.Q6J("ngIf", e.isLogged),
                    t.xp6(1),
                    t.Q6J("ngIf", !e.isLogged))
                },
                dependencies: [f.O5, g.o8, v.uH, v.BN, g._L, y, _.aw, _.X$],
                styles: ["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0}[_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:16px;color:#142028}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.dark-theme   [_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}body.light   [_nghost-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#142028}[_nghost-%COMP%]   button.saved[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#eda803!important}[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:#eda803!important}[_nghost-%COMP%]   button.disabled[_ngcontent-%COMP%]{opacity:.4;cursor:default}  body .fav-popover{background-color:#f4f5f6;min-width:12.5rem;border-radius:.9375rem;z-index:999999}  body .fav-popover .popover-body{color:#142028;max-height:25rem;padding:.625rem;overflow-y:auto}body.dark-theme   [_nghost-%COMP%]     body .fav-popover .popover-body{color:#fff!important}body.dark-theme[_ngcontent-%COMP%]     body .fav-popover .popover-body{color:#fff!important}body.light   [_nghost-%COMP%]     body .fav-popover .popover-body{color:#142028!important}body.light[_ngcontent-%COMP%]     body .fav-popover .popover-body{color:#142028!important}  body .fav-popover .arrow:after{content:unset}  body.dark-theme .fav-popover{background-color:#23323c}  body.dark-theme .fav-popover .popover-body{color:#fff}"],
                changeDetection: 0
            }),
            n
        }
        )()
    }
}]);
