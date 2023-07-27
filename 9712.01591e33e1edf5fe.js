"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[9712], {
    47487: (k,P,a)=>{
        a.d(P, {
            g: ()=>S
        });
        var t = a(94650)
          , s = a(49319)
          , C = a(12113)
          , O = a(77579)
          , m = a(18505)
          , _ = a(52413)
          , f = a(89383)
          , c = a(24006)
          , d = a(2262)
          , p = a(36895)
          , g = a(92216)
          , w = a(92498)
          , b = a(99703)
          , y = a(62289);
        function T(i, l) {
            1 & i && t._UZ(0, "fa-icon", 19)
        }
        function N(i, l) {
            if (1 & i && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & i) {
                const e = t.oxw().$implicit;
                t.xp6(1),
                t.Oqu(e.label)
            }
        }
        function F(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "input", 20),
                t.NdJ("ngModelChange", function(o) {
                    t.CHM(e);
                    const r = t.oxw(3);
                    return t.KtG(r.editListName = o)
                })("keyup", function() {
                    t.CHM(e);
                    const o = t.oxw(3);
                    return t.KtG(o.newListTyped$.next(o.editListName))
                }),
                t.qZA()
            }
            if (2 & i) {
                const e = t.oxw(3);
                t.Q6J("ngModel", e.editListName)
            }
        }
        function Z(i, l) {
            if (1 & i && (t.TgZ(0, "span", 21),
            t._uU(1),
            t.qZA()),
            2 & i) {
                const e = t.oxw(3);
                t.xp6(1),
                t.Oqu(e.remainingChars)
            }
        }
        function I(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 27),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(2).$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.changeMainList(o))
                }),
                t.ALo(1, "translate"),
                t.qZA()
            }
            if (2 & i) {
                const e = t.oxw(4);
                t.Q6J("ngbTooltip", t.lcZ(1, 2, "favorites.set_main"))("disableTooltip", "mobileTablet" === e.mediaDevice)
            }
        }
        function D(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 28),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(2)
                      , r = o.$implicit
                      , u = o.index
                      , j = t.oxw(2);
                    return t.KtG(j.editList(r, u))
                }),
                t.qZA()
            }
        }
        function z(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 29),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(4);
                    return t.KtG(o.editListEvent())
                }),
                t.qZA()
            }
        }
        function A(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "fa-icon", 30),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw(2).$implicit
                      , r = t.oxw(2);
                    return t.KtG(r.deleteList(o.id))
                }),
                t.qZA()
            }
        }
        function J(i, l) {
            if (1 & i && (t.TgZ(0, "div", 22),
            t.YNc(1, I, 2, 4, "fa-icon", 23),
            t.YNc(2, D, 1, 0, "fa-icon", 24),
            t.YNc(3, z, 1, 0, "fa-icon", 25),
            t.YNc(4, A, 1, 0, "fa-icon", 26),
            t.qZA()),
            2 & i) {
                const e = t.oxw().index
                  , n = t.oxw(2);
                t.xp6(1),
                t.Q6J("ngIf", !n.favsLists[e].main),
                t.xp6(1),
                t.Q6J("ngIf", !n.isEditing || n.listIndex !== e),
                t.xp6(1),
                t.Q6J("ngIf", n.isEditing && n.listIndex === e && n.editListName.length),
                t.xp6(1),
                t.Q6J("ngIf", !n.favsLists[e].main)
            }
        }
        function E(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "div", 12),
                t.NdJ("mouseenter", function() {
                    const r = t.CHM(e).index
                      , u = t.oxw(2);
                    return u.hoverListTrue(),
                    t.KtG(u.setIndexHovered(r))
                })("mouseleave", function() {
                    t.CHM(e);
                    const o = t.oxw(2);
                    return o.hoverListFalse(),
                    t.KtG(o.unsetIndexHovered())
                }),
                t.TgZ(1, "div", 13),
                t.YNc(2, T, 1, 0, "fa-icon", 14),
                t.YNc(3, N, 2, 1, "span", 15),
                t.YNc(4, F, 1, 1, "input", 16),
                t.YNc(5, Z, 2, 1, "span", 17),
                t.qZA(),
                t.YNc(6, J, 5, 4, "div", 18),
                t.qZA()
            }
            if (2 & i) {
                const e = l.index
                  , n = t.oxw(2);
                t.Q6J("cdkDragDisabled", !0),
                t.xp6(2),
                t.Q6J("ngIf", !!n.favsLists[e].main),
                t.xp6(1),
                t.Q6J("ngIf", !n.isEditing || n.listIndex !== e),
                t.xp6(1),
                t.Q6J("ngIf", n.isEditing && n.listIndex === e),
                t.xp6(1),
                t.Q6J("ngIf", n.isEditing && n.listIndex === e),
                t.xp6(1),
                t.Q6J("ngIf", "desktop" !== n.mediaDevice || n.favsListHovered && e === n.indexHovered && "desktop" === n.mediaDevice)
            }
        }
        function H(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "div", 7)(1, "div", 8)(2, "input", 9),
                t.NdJ("ngModelChange", function(o) {
                    t.CHM(e);
                    const r = t.oxw();
                    return t.KtG(r.newListName = o)
                }),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "button", 10),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.createList())
                }),
                t._UZ(5, "fa-icon", 2),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA()(),
                t.YNc(8, E, 7, 6, "div", 11),
                t.qZA()
            }
            if (2 & i) {
                const e = t.oxw();
                t.xp6(2),
                t.s9C("placeholder", t.lcZ(3, 6, "pair_explorer.short_list_name")),
                t.Q6J("ngModel", e.newListName),
                t.xp6(2),
                t.Q6J("disabled", e.newListName.length < 1),
                t.xp6(1),
                t.Q6J("icon", "plus"),
                t.xp6(1),
                t.hij(" ", t.lcZ(7, 8, "pair_explorer.create_list"), ""),
                t.xp6(2),
                t.Q6J("ngForOf", e.favsListsItems)
            }
        }
        function R(i, l) {
            if (1 & i) {
                const e = t.EpF();
                t.TgZ(0, "div", 31)(1, "p", 32),
                t._uU(2),
                t.ALo(3, "translate"),
                t.qZA(),
                t.TgZ(4, "div", 33)(5, "button", 34),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.deleteListEvent())
                }),
                t._uU(6),
                t.ALo(7, "translate"),
                t.qZA(),
                t.TgZ(8, "button", 35),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const o = t.oxw();
                    return t.KtG(o.cancelDelete())
                }),
                t._uU(9),
                t.ALo(10, "translate"),
                t.qZA()()()
            }
            2 & i && (t.xp6(2),
            t.Oqu(t.lcZ(3, 3, "pair_explorer.delete_list")),
            t.xp6(4),
            t.Oqu(t.lcZ(7, 5, "pair_explorer.confirm")),
            t.xp6(3),
            t.Oqu(t.lcZ(10, 7, "pair_list.advanced_filters.cancel")))
        }
        const U = function() {
            return ["far", "clipboard-list-check"]
        }
          , Q = function() {
            return ["fal", "times"]
        };
        let Y = (()=>{
            class i extends _.K9 {
                constructor(e, n, o, r) {
                    super(),
                    this._modal = e,
                    this._favoritePairsService = n,
                    this._cdRef = o,
                    this._breakpointObserver = r,
                    this.createdList = new t.vpe,
                    this.editedList = new t.vpe,
                    this.deletedList = new t.vpe,
                    this.favsLists = [],
                    this.favsListsItems = [],
                    this.showDeleteListPopUp = !1,
                    this.favsListHovered = !1,
                    this.isEditing = !1,
                    this.newListName = "",
                    this.editListName = "",
                    this.deleteListName = "",
                    this.listIndex = -1,
                    this.indexHovered = -1,
                    this.mediaDevice = "",
                    this.newListTyped$ = new O.x,
                    this.remainingChars = 11,
                    this._oldEditListName = ""
                }
                ngOnInit() {
                    this._breakpointObserver.observe([C.K5]).pipe((0,
                    _.sL)(this)).subscribe(e=>{
                        this.mediaDevice = e.breakpoints[C.K5] ? "mobileTablet" : "desktop",
                        this._cdRef.detectChanges()
                    }
                    ),
                    this._favoritePairsService.favoritesList$.pipe((0,
                    _.sL)(this), (0,
                    m.b)(e=>{
                        this.favsLists = e,
                        this.favsListsItems = e.map(n=>({
                            label: this._favoritePairsService.formatListName(n),
                            value: n.name,
                            id: n.id
                        })),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(),
                    this.newListTyped$.pipe((0,
                    _.sL)(this), (0,
                    m.b)(e=>{
                        this.editListName = e.slice(0, 11),
                        this.remainingChars = 11 - this.editListName.length
                    }
                    )).subscribe()
                }
                closeModal(e) {
                    e.stopPropagation(),
                    this._modal.close()
                }
                createList() {
                    this.newListName.length > 0 && (this.newListName = this._favoritePairsService.reverseFormatListName(this.newListName),
                    this._favoritePairsService.isListNameDuplicated(this.newListName) || (this.createdList.emit(this.newListName),
                    this.newListName = ""))
                }
                editList(e, n) {
                    this.isEditing = !0,
                    this._oldEditListName = e.id ?? "",
                    this.listIndex = n,
                    this.editListName = e.value,
                    this.remainingChars = 11 - this.editListName.length
                }
                changeMainList(e) {
                    this.editedList.emit({
                        new: e.value,
                        id: e.id,
                        isMain: !0
                    })
                }
                deleteList(e) {
                    this.showDeleteListPopUp = !0,
                    this.deleteListName = e ?? ""
                }
                editListEvent() {
                    this.editListName.length > 0 && (this.isEditing = !1,
                    this.editListName !== this._oldEditListName && this.editedList.emit({
                        new: this.editListName,
                        id: this._oldEditListName,
                        isMain: this.favsLists[this.listIndex]?.main ?? !1
                    }),
                    this.listIndex = -1)
                }
                deleteListEvent() {
                    this.deletedList.emit(this.deleteListName),
                    this.showDeleteListPopUp = !1
                }
                cancelDelete() {
                    this.showDeleteListPopUp = !1
                }
                hideDeleteListPopup() {
                    this.showDeleteListPopUp = !1
                }
                hoverListTrue() {
                    this.favsListHovered = !0
                }
                hoverListFalse() {
                    this.favsListHovered = !1
                }
                setIndexHovered(e) {
                    this.indexHovered = e
                }
                unsetIndexHovered() {
                    this.indexHovered = -1
                }
                onDestroy() {
                    this.createdList.complete(),
                    this.editedList.complete(),
                    this.deletedList.complete()
                }
            }
            return i.\u0275fac = function(e) {
                return new (e || i)(t.Y36(s.Kz),t.Y36(b.SBY),t.Y36(t.sBO),t.Y36(y.Yg))
            }
            ,
            i.\u0275cmp = t.Xpm({
                type: i,
                selectors: [["app-manage-favs-list-popup"]],
                outputs: {
                    createdList: "createdList",
                    editedList: "editedList",
                    deletedList: "deletedList"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 9,
                vars: 9,
                consts: [[1, "favs-list-wrapper"], [1, "favs-list-title"], [1, "me-2", 3, "icon"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["ngbTooltip", "Close", "placement", "left", 3, "icon"], ["class", "favs-list-container", "cdkDropList", "", 4, "ngIf"], ["class", "favs-list-container text-center mb-4", 4, "ngIf"], ["cdkDropList", "", 1, "favs-list-container"], [1, "favs-list-create"], ["appRestrictInput", "^[A-Za-z0-9\\-\\s]*$", "type", "text", "maxlength", "11", 1, "form-control", "create-list-input", "me-3", 3, "ngModel", "placeholder", "ngModelChange"], [1, "btn", "create-list-button", 3, "disabled", "click"], ["class", "favs-list", "cdkDrag", "", 3, "cdkDragDisabled", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "favs-list", 3, "cdkDragDisabled", "mouseenter", "mouseleave"], [1, "d-flex", "position-relative"], ["icon", "thumbtack", "class", "main-icon-list", 4, "ngIf"], [4, "ngIf"], ["appRestrictInput", "^[A-Za-z0-9\\-\\s]*$", "type", "text", "maxlength", "11", 3, "ngModel", "ngModelChange", "keyup", 4, "ngIf"], ["class", "remaining-chars", 4, "ngIf"], ["class", "edit-delete-container", 4, "ngIf"], ["icon", "thumbtack", 1, "main-icon-list"], ["appRestrictInput", "^[A-Za-z0-9\\-\\s]*$", "type", "text", "maxlength", "11", 3, "ngModel", "ngModelChange", "keyup"], [1, "remaining-chars"], [1, "edit-delete-container"], ["icon", "thumbtack", "class", "me-4", 3, "ngbTooltip", "disableTooltip", "click", 4, "ngIf"], ["icon", "pencil-alt", "class", "me-4", 3, "click", 4, "ngIf"], ["icon", "check", "class", "me-4", 3, "click", 4, "ngIf"], ["icon", "trash-can", 3, "click", 4, "ngIf"], ["icon", "thumbtack", 1, "me-4", 3, "ngbTooltip", "disableTooltip", "click"], ["icon", "pencil-alt", 1, "me-4", 3, "click"], ["icon", "check", 1, "me-4", 3, "click"], ["icon", "trash-can", 3, "click"], [1, "favs-list-container", "text-center", "mb-4"], [1, "my-4"], [1, "delete-buttons-container"], [1, "btn", "me-3", 3, "click"], [1, "btn", 3, "click"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "h5", 1),
                    t._UZ(2, "fa-icon", 2),
                    t._uU(3),
                    t.ALo(4, "translate"),
                    t.qZA(),
                    t.TgZ(5, "button", 3),
                    t.NdJ("click", function(r) {
                        return n.showDeleteListPopUp ? n.hideDeleteListPopup() : n.closeModal(r)
                    }),
                    t._UZ(6, "fa-icon", 4),
                    t.qZA(),
                    t.YNc(7, H, 9, 10, "div", 5),
                    t.YNc(8, R, 11, 9, "div", 6),
                    t.qZA()),
                    2 & e && (t.xp6(2),
                    t.Q6J("icon", t.DdM(7, U)),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(4, 5, "pair_explorer.manage_favs"), " "),
                    t.xp6(3),
                    t.Q6J("icon", t.DdM(8, Q)),
                    t.xp6(1),
                    t.Q6J("ngIf", !n.showDeleteListPopUp),
                    t.xp6(1),
                    t.Q6J("ngIf", n.showDeleteListPopUp))
                },
                dependencies: [g.uH, g.BN, s._L, p.O5, d.Wj, c.u5, c.Fj, c.JJ, c.nD, c.On, p.ax, d.Zt, f.aw, f.X$, w.O7],
                styles: [".favs-list-wrapper[_ngcontent-%COMP%]{background-color:#fff!important;padding:1.25rem;border-radius:.9375rem}body.dark-theme   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]{background-color:#0b1217!important}body.dark-theme[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]{background-color:#0b1217!important}body.light   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]{background-color:#fff!important}body.light[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]{background-color:#fff!important}.favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-transform:uppercase;font-size:16px;line-height:1.5rem}.favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3;font-size:20px}body.dark-theme   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#818ea3}.favs-list-wrapper[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{position:absolute;right:.5rem;top:.5rem}.favs-list-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:1.21875rem;margin-bottom:.9375rem}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-create[_ngcontent-%COMP%]{display:flex;margin:1.25rem 0}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-create[_ngcontent-%COMP%]   .create-list-input[_ngcontent-%COMP%]{border-radius:.625rem;height:2.5rem;width:70%}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-create[_ngcontent-%COMP%]   .create-list-button[_ngcontent-%COMP%]{align-items:center;background:#00b8d8;border-radius:.625rem;color:#fff;display:flex;height:2.5rem;justify-content:center;width:30%}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]{max-height:25rem;overflow-y:auto;padding:0 .625rem}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{color:#142028;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:500;font-size:14px;line-height:20px;background-color:#f4f5f6;align-items:center;border-radius:.625rem;display:flex;height:3.75rem;justify-content:space-between;margin-bottom:.9375rem;padding:0 .75rem;width:100%}body.dark-theme   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{color:#142028}body.dark-theme   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{background-color:#142028}body.dark-theme[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{background-color:#142028}body.light   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{background-color:#f4f5f6}body.light[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]{background-color:#f4f5f6}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#3a4956;cursor:pointer}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .main-icon-list[_ngcontent-%COMP%]{color:#00b8d8;cursor:default}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .favs-list[_ngcontent-%COMP%]   .edit-delete-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover{color:#00b8d8;cursor:pointer}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .main-icon-list[_ngcontent-%COMP%]{font-size:13px;color:#00b8d8;margin-right:.5rem}.favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .remaining-chars[_ngcontent-%COMP%]{color:#818ea3;font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:300;font-size:12px;line-height:12px;position:absolute;line-height:20px;right:5%}body.dark-theme   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .remaining-chars[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .remaining-chars[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .remaining-chars[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .favs-list-wrapper[_ngcontent-%COMP%]   .favs-list-container[_ngcontent-%COMP%]   .remaining-chars[_ngcontent-%COMP%]{color:#818ea3}.favs-list-wrapper[_ngcontent-%COMP%]   .delete-buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.favs-list-wrapper[_ngcontent-%COMP%]   .delete-buttons-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{font-family:Poppins,Roboto,sans-serif;font-style:normal;-moz-osx-font-smoothing:grayscale;font-weight:400;font-size:13px;line-height:16px;border-radius:3.125rem;color:#fff;display:flex;height:2.125rem;justify-content:center;text-align:center;width:5.25rem}.favs-list-wrapper[_ngcontent-%COMP%]   .delete-buttons-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child{background:#ea3943}.favs-list-wrapper[_ngcontent-%COMP%]   .delete-buttons-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child{background:#3a4956}@media (max-width: 599px){.favs-list-wrapper[_ngcontent-%COMP%]{bottom:.625rem;left:.625rem}}body.dark-theme   [_nghost-%COMP%]     .favs-list-wrapper .close fa-icon{background-color:#142028}body.dark-theme   [_nghost-%COMP%]     .favs-list-wrapper .close:hover fa-icon{background-color:#23323c}"],
                changeDetection: 0
            }),
            i
        }
        )();
        var h = a(82722)
          , K = a(32076)
          , v = a(95698)
          , L = a(70262)
          , x = a(60515);
        const q = function() {
            return ["far", "clipboard-list-check"]
        };
        let S = (()=>{
            class i extends _.K9 {
                constructor(e, n, o) {
                    super(),
                    this._ngbModal = e,
                    this._favoritePairsService = n,
                    this._cdRef = o,
                    this.isFavsOpen = !1,
                    this.favsLists = []
                }
                ngOnInit() {
                    this._favoritePairsService.favoritesList$.pipe((0,
                    _.sL)(this), (0,
                    m.b)(e=>{
                        this.favsLists = e,
                        this._cdRef.detectChanges()
                    }
                    )).subscribe()
                }
                showModal(e) {
                    e.stopImmediatePropagation(),
                    this.isFavsOpen && this.toggleFavs.emit();
                    const n = this._ngbModal.open(Y, {
                        centered: !0,
                        scrollable: !0,
                        size: "sm"
                    });
                    this._favsListPopup = n.componentInstance,
                    this._favsListPopup.createdList.pipe((0,
                    h.R)(n.closed), (0,
                    h.R)(n.dismissed)).subscribe(o=>{
                        this.createList(o)
                    }
                    ),
                    this._favsListPopup.editedList.pipe((0,
                    h.R)(n.closed), (0,
                    h.R)(n.dismissed)).subscribe(o=>{
                        this.editList(o.new, o.id, o.isMain)
                    }
                    ),
                    this._favsListPopup.deletedList.pipe((0,
                    h.R)(n.closed), (0,
                    h.R)(n.dismissed)).subscribe(o=>{
                        this.deleteList(o)
                    }
                    ),
                    (0,
                    K.D)(n.result).subscribe(()=>{
                        this.isFavsOpen && this.toggleFavs.emit()
                    }
                    )
                }
                createList(e) {
                    this._favoritePairsService.createList(e).pipe((0,
                    v.q)(1), (0,
                    L.K)(n=>(console.error(n),
                    x.E))).subscribe()
                }
                editList(e, n, o) {
                    this._favoritePairsService.editListName(e, n, o).pipe((0,
                    v.q)(1), (0,
                    L.K)(r=>(console.error(r),
                    x.E))).subscribe()
                }
                deleteList(e) {
                    this._favoritePairsService.deleteList(e).pipe((0,
                    v.q)(1), (0,
                    L.K)(n=>(console.error(n),
                    x.E))).subscribe(()=>{
                        this._favoritePairsService.favoritesList$.pipe((0,
                        v.q)(1)).subscribe(()=>{
                            this._favoritePairsService.updateFavoriteListsLiteCall().pipe((0,
                            v.q)(1)).subscribe()
                        }
                        )
                    }
                    )
                }
                onDestroy() {}
            }
            return i.\u0275fac = function(e) {
                return new (e || i)(t.Y36(s.FF),t.Y36(b.SBY),t.Y36(t.sBO))
            }
            ,
            i.\u0275cmp = t.Xpm({
                type: i,
                selectors: [["app-manage-favs-list"]],
                inputs: {
                    isFavsOpen: "isFavsOpen",
                    toggleFavs: "toggleFavs"
                },
                standalone: !0,
                features: [t.qOj, t.jDz],
                decls: 5,
                vars: 5,
                consts: [[1, "manage-lists-container", "px-2", 3, "click"], [3, "icon"]],
                template: function(e, n) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.NdJ("click", function(r) {
                        return n.showModal(r)
                    }),
                    t.TgZ(1, "span"),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t._UZ(4, "fa-icon", 1),
                    t.qZA()),
                    2 & e && (t.xp6(2),
                    t.Oqu(t.lcZ(3, 2, "pair_explorer.manage_list")),
                    t.xp6(2),
                    t.Q6J("icon", t.DdM(4, q)))
                },
                dependencies: [g.uH, g.BN, f.aw, f.X$],
                styles: ["[_nghost-%COMP%]{background-color:#e2e7ec;position:relative;z-index:999;width:100%}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#23323c}body.dark-theme   [_nghost-%COMP%]{background-color:#23323c}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]{background-color:#e2e7ec}body.light   [_nghost-%COMP%]{background-color:#e2e7ec}[_nghost-%COMP%]:hover{background-color:#f4f5f6;color:#00b8d8}body.dark-theme   [_nghost-%COMP%]   [_nghost-%COMP%]:hover{background-color:#142028}body.dark-theme   [_nghost-%COMP%]:hover{background-color:#142028}body.light   [_nghost-%COMP%]   [_nghost-%COMP%]:hover{background-color:#f4f5f6}body.light   [_nghost-%COMP%]:hover{background-color:#f4f5f6}.manage-lists-container[_ngcontent-%COMP%]{cursor:pointer;display:flex;justify-content:space-between;width:100%}  .modal{z-index:999999999}"],
                changeDetection: 0
            }),
            i
        }
        )()
    }
    ,
    51303: (k,P,a)=>{
        a.d(P, {
            m: ()=>f
        });
        var t = a(36895)
          , s = a(94650);
        const C = function(c) {
            return {
                isLink: c
            }
        };
        function O(c, d) {
            if (1 & c && (s.TgZ(0, "span", 3),
            s._uU(1),
            s.qZA()),
            2 & c) {
                const p = s.oxw();
                s.Gre("token-left ", p.size, ""),
                s.Q6J("ngClass", s.VKq(5, C, p.isLink)),
                s.xp6(1),
                s.Oqu(p.tokenLeft)
            }
        }
        function m(c, d) {
            if (1 & c && (s.TgZ(0, "span"),
            s._uU(1, "/"),
            s.qZA()),
            2 & c) {
                const p = s.oxw();
                s.Gre("separate ", p.size, "")
            }
        }
        function _(c, d) {
            if (1 & c && (s.TgZ(0, "span"),
            s._uU(1),
            s.qZA()),
            2 & c) {
                const p = s.oxw();
                s.Gre("token-right ", p.size, ""),
                s.xp6(1),
                s.Oqu(p.tokenRight)
            }
        }
        let f = (()=>{
            class c {
                constructor() {
                    this.tokenLeft = null,
                    this.tokenRight = null,
                    this.isLink = !1,
                    this.size = "size-s"
                }
            }
            return c.\u0275fac = function(p) {
                return new (p || c)
            }
            ,
            c.\u0275cmp = s.Xpm({
                type: c,
                selectors: [["app-token-name"]],
                inputs: {
                    tokenLeft: "tokenLeft",
                    tokenRight: "tokenRight",
                    isLink: "isLink",
                    size: "size"
                },
                standalone: !0,
                features: [s.jDz],
                decls: 4,
                vars: 3,
                consts: [[1, "token-name-container"], [3, "class", "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngClass"]],
                template: function(p, g) {
                    1 & p && (s.TgZ(0, "span", 0),
                    s.YNc(1, O, 2, 7, "span", 1),
                    s.YNc(2, m, 2, 3, "span", 2),
                    s.YNc(3, _, 2, 4, "span", 2),
                    s.qZA()),
                    2 & p && (s.xp6(1),
                    s.Q6J("ngIf", !!g.tokenLeft),
                    s.xp6(1),
                    s.Q6J("ngIf", !!g.tokenRight && !!g.tokenLeft),
                    s.xp6(1),
                    s.Q6J("ngIf", !!g.tokenRight))
                },
                dependencies: [t.O5, t.mk],
                styles: [".token-name-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.125rem}.token-name-container[_ngcontent-%COMP%]   .separate[_ngcontent-%COMP%]{color:#818ea3;font-size:12px;font-weight:400}body.dark-theme   [_nghost-%COMP%]   .token-name-container[_ngcontent-%COMP%]   .separate[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .token-name-container[_ngcontent-%COMP%]   .separate[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .token-name-container[_ngcontent-%COMP%]   .separate[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .token-name-container[_ngcontent-%COMP%]   .separate[_ngcontent-%COMP%]{color:#818ea3}.token-name-container[_ngcontent-%COMP%]   .separate.size-m[_ngcontent-%COMP%]{font-size:13px}.token-name-container[_ngcontent-%COMP%]   .separate.size-l[_ngcontent-%COMP%]{font-size:20px}.token-left[_ngcontent-%COMP%]{color:#142028;font-size:14px;line-height:1;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}body.dark-theme   [_nghost-%COMP%]   .token-left[_ngcontent-%COMP%]{color:#fff}body.dark-theme[_ngcontent-%COMP%]   .token-left[_ngcontent-%COMP%]{color:#fff}body.light   [_nghost-%COMP%]   .token-left[_ngcontent-%COMP%]{color:#142028}body.light[_ngcontent-%COMP%]   .token-left[_ngcontent-%COMP%]{color:#142028}.token-left.size-m[_ngcontent-%COMP%]{font-size:16px}.token-left.size-l[_ngcontent-%COMP%]{font-size:28px}.token-left.isLink[_ngcontent-%COMP%]{color:#00b8d8!important}.token-right[_ngcontent-%COMP%]{font-size:12px;line-height:1;font-weight:400;color:#818ea3}body.dark-theme   [_nghost-%COMP%]   .token-right[_ngcontent-%COMP%]{color:#818ea3}body.dark-theme[_ngcontent-%COMP%]   .token-right[_ngcontent-%COMP%]{color:#818ea3}body.light   [_nghost-%COMP%]   .token-right[_ngcontent-%COMP%]{color:#818ea3}body.light[_ngcontent-%COMP%]   .token-right[_ngcontent-%COMP%]{color:#818ea3}.token-right.size-m[_ngcontent-%COMP%]{font-size:13px}.token-right.size-l[_ngcontent-%COMP%]{font-size:20px}"],
                changeDetection: 0
            }),
            c
        }
        )()
    }
}]);
