"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[931], {
    931: (q,d,r)=>{
        r.d(d, {
            f: ()=>z
        });
        var n = r(94650)
          , c = r(37340)
          , x = r(82805)
          , l = r(95698)
          , m = r(18505)
          , v = r(39646)
          , C = r(54009)
          , h = r(4326)
          , M = r(54004)
          , _ = r(52413)
          , B = r(58405)
          , S = r(86716)
          , g = r(99703)
          , u = r(92216)
          , f = r(36895)
          , T = r(53763)
          , E = r(30501)
          , O = r(11481);
        const I = ["venturesContainer"]
          , P = ["venturesText"]
          , y = ["venturesLogo"];
        function L(t, o) {
            1 & t && (n.TgZ(0, "div", 3),
            n._uU(1, "Top Sponsors:"),
            n.qZA())
        }
        function A(t, o) {
            if (1 & t && (n.TgZ(0, "span", 12),
            n._uU(1),
            n.qZA()),
            2 & t) {
                const e = n.oxw(2).$implicit;
                n.xp6(1),
                n.hij("Chain: ", e.chain, "")
            }
        }
        function D(t, o) {
            1 & t && (n.TgZ(0, "span", 12),
            n._uU(1, "ALL Chains"),
            n.qZA())
        }
        function Z(t, o) {
            if (1 & t && (n.TgZ(0, "div", 10),
            n.YNc(1, A, 2, 1, "span", 11),
            n.YNc(2, D, 2, 0, "span", 11),
            n.TgZ(3, "span"),
            n._uU(4),
            n.qZA()()),
            2 & t) {
                const e = n.oxw().$implicit
                  , i = n.oxw(3);
                n.xp6(1),
                n.Q6J("ngIf", e.chain.length !== i.totalChains),
                n.xp6(1),
                n.Q6J("ngIf", e.chain.length === i.totalChains),
                n.xp6(2),
                n.hij("Name: ", e.name, "")
            }
        }
        function w(t, o) {
            if (1 & t && n._UZ(0, "img", 13),
            2 & t) {
                const e = n.oxw().$implicit;
                n.MGl("alt", "", e.name, "-banner"),
                n.Q6J("src", e.bannerImage, n.LSH)
            }
        }
        function U(t, o) {
            if (1 & t && n._UZ(0, "video", 14),
            2 & t) {
                const e = n.oxw().$implicit;
                n.Q6J("src", e.bannerImage, n.LSH)
            }
        }
        function Q(t, o) {
            if (1 & t) {
                const e = n.EpF();
                n.TgZ(0, "fa-icon", 15),
                n.NdJ("click", function() {
                    n.CHM(e);
                    const s = n.oxw().$implicit
                      , a = n.oxw(3);
                    return n.KtG(a.deleteBanners(s))
                }),
                n.qZA()
            }
        }
        function R(t, o) {
            if (1 & t) {
                const e = n.EpF();
                n.TgZ(0, "fa-icon", 16),
                n.NdJ("click", function() {
                    n.CHM(e);
                    const s = n.oxw().$implicit
                      , a = n.oxw(3);
                    return n.KtG(a.editSponsor(s))
                }),
                n.qZA()
            }
        }
        function J(t, o) {
            if (1 & t && (n.ynx(0),
            n.YNc(1, Z, 5, 3, "div", 4),
            n.TgZ(2, "a", 5),
            n.YNc(3, w, 1, 2, "img", 6),
            n.YNc(4, U, 1, 1, "video", 7),
            n.qZA(),
            n.YNc(5, Q, 1, 0, "fa-icon", 8),
            n.YNc(6, R, 1, 0, "fa-icon", 9),
            n.BQk()),
            2 & t) {
                const e = o.$implicit
                  , i = n.oxw(3);
                n.xp6(1),
                n.Q6J("ngIf", i.empty),
                n.xp6(1),
                n.s9C("href", e.targetLink, n.LSH),
                n.Q6J("@fadeInOut", void 0),
                n.xp6(1),
                n.Q6J("ngIf", e.fileExt !== i.FileType.MP4),
                n.xp6(1),
                n.Q6J("ngIf", e.fileExt === i.FileType.MP4),
                n.xp6(1),
                n.Q6J("ngIf", i.empty),
                n.xp6(1),
                n.Q6J("ngIf", i.empty)
            }
        }
        function N(t, o) {
            if (1 & t && (n.ynx(0),
            n.YNc(1, L, 2, 0, "div", 1),
            n.YNc(2, J, 7, 7, "ng-container", 2),
            n.BQk()),
            2 & t) {
                const e = n.oxw(2);
                n.xp6(1),
                n.Q6J("ngIf", e.empty && !!e.topSponsors.length),
                n.xp6(1),
                n.Q6J("ngForOf", e.topSponsors)
            }
        }
        function Y(t, o) {
            if (1 & t && n._UZ(0, "img", 13),
            2 & t) {
                const e = n.oxw(3);
                n.MGl("alt", "", e.selectedVenturesSponsor.name, "-banner"),
                n.Q6J("src", e.selectedVenturesSponsor.bannerImage, n.LSH)
            }
        }
        function b(t, o) {
            if (1 & t && n._UZ(0, "video", 14),
            2 & t) {
                const e = n.oxw(3);
                n.Q6J("src", e.selectedVenturesSponsor.bannerImage, n.LSH)
            }
        }
        function K(t, o) {
            if (1 & t && (n.ynx(0),
            n.TgZ(1, "a", 5),
            n.YNc(2, Y, 1, 2, "img", 6),
            n.YNc(3, b, 1, 1, "video", 7),
            n.qZA(),
            n.BQk()),
            2 & t) {
                const e = n.oxw(2);
                n.xp6(1),
                n.s9C("href", e.selectedVenturesSponsor.targetLink, n.LSH),
                n.Q6J("@fadeInOut", void 0),
                n.xp6(1),
                n.Q6J("ngIf", e.selectedVenturesSponsor.fileExt !== e.FileType.MP4),
                n.xp6(1),
                n.Q6J("ngIf", e.selectedVenturesSponsor.fileExt === e.FileType.MP4)
            }
        }
        function V(t, o) {
            if (1 & t && (n.TgZ(0, "span", 12),
            n._uU(1),
            n.qZA()),
            2 & t) {
                const e = n.oxw().$implicit;
                n.xp6(1),
                n.hij("Chain: ", e.chain, "")
            }
        }
        function k(t, o) {
            1 & t && (n.TgZ(0, "span", 12),
            n._uU(1, "ALL Chains"),
            n.qZA())
        }
        function F(t, o) {
            if (1 & t && n._UZ(0, "img", 13),
            2 & t) {
                const e = n.oxw().$implicit;
                n.MGl("alt", "", e.name, "-banner"),
                n.Q6J("src", e.bannerImage, n.LSH)
            }
        }
        function H(t, o) {
            if (1 & t && n._UZ(0, "video", 14),
            2 & t) {
                const e = n.oxw().$implicit;
                n.Q6J("src", e.bannerImage, n.LSH)
            }
        }
        function W(t, o) {
            if (1 & t) {
                const e = n.EpF();
                n.ynx(0),
                n.TgZ(1, "div", 18),
                n.YNc(2, V, 2, 1, "span", 11),
                n.YNc(3, k, 2, 0, "span", 11),
                n.TgZ(4, "span"),
                n._uU(5),
                n.qZA()(),
                n.TgZ(6, "a", 5),
                n.YNc(7, F, 1, 2, "img", 6),
                n.YNc(8, H, 1, 1, "video", 7),
                n.qZA(),
                n.TgZ(9, "fa-icon", 15),
                n.NdJ("click", function() {
                    const a = n.CHM(e).$implicit
                      , p = n.oxw(3);
                    return n.KtG(p.deleteBanners(a))
                }),
                n.qZA(),
                n.TgZ(10, "fa-icon", 16),
                n.NdJ("click", function() {
                    const a = n.CHM(e).$implicit
                      , p = n.oxw(3);
                    return n.KtG(p.editSponsor(a))
                }),
                n.qZA(),
                n.BQk()
            }
            if (2 & t) {
                const e = o.$implicit
                  , i = n.oxw(3);
                n.xp6(2),
                n.Q6J("ngIf", e.chain.length !== i.totalChains),
                n.xp6(1),
                n.Q6J("ngIf", e.chain.length === i.totalChains),
                n.xp6(2),
                n.hij("Name: ", e.name, ""),
                n.xp6(1),
                n.s9C("href", e.targetLink, n.LSH),
                n.Q6J("@fadeInOut", void 0),
                n.xp6(1),
                n.Q6J("ngIf", e.fileExt !== i.FileType.MP4),
                n.xp6(1),
                n.Q6J("ngIf", e.fileExt === i.FileType.MP4)
            }
        }
        function j(t, o) {
            if (1 & t && (n.ynx(0),
            n.TgZ(1, "div", 17),
            n._uU(2, "Ventures Sponsors (remember that in pair explorer Ventures Banners Rotate):"),
            n.qZA(),
            n.YNc(3, W, 11, 7, "ng-container", 2),
            n.BQk()),
            2 & t) {
                const e = n.oxw(2);
                n.xp6(3),
                n.Q6J("ngForOf", e.venturesSponsors)
            }
        }
        function $(t, o) {
            1 & t && (n.ynx(0),
            n.TgZ(1, "div", 19, 20)(3, "div", 21, 22),
            n._uU(5, "Backed by DEXT FORCE VENTURES"),
            n.qZA(),
            n._UZ(6, "img", 23, 24),
            n.qZA(),
            n.BQk())
        }
        function G(t, o) {
            if (1 & t && (n.ynx(0),
            n.YNc(1, N, 3, 2, "ng-container", 0),
            n.YNc(2, K, 4, 4, "ng-container", 0),
            n.YNc(3, j, 4, 1, "ng-container", 0),
            n.YNc(4, $, 8, 0, "ng-container", 0),
            n.BQk()),
            2 & t) {
                const e = n.oxw();
                n.xp6(1),
                n.Q6J("ngIf", e.isFree || e.empty),
                n.xp6(1),
                n.Q6J("ngIf", !e.empty && !!e.selectedVenturesSponsor && (e.endAnimation || !(null != e.selectedVenturesSponsor && e.selectedVenturesSponsor.needAnimation))),
                n.xp6(1),
                n.Q6J("ngIf", e.empty && !!e.venturesSponsors.length),
                n.xp6(1),
                n.Q6J("ngIf", !e.endAnimation && (null == e.selectedVenturesSponsor ? null : e.selectedVenturesSponsor.needAnimation))
            }
        }
        let z = (()=>{
            class t extends _.K9 {
                constructor(e, i, s, a, p) {
                    super(),
                    this._authService = e,
                    this._cdRef = i,
                    this._sponsorsService = s,
                    this._sanitizer = a,
                    this._exchangeService = p,
                    this.empty = !1,
                    this.showBanner = new n.vpe,
                    this.editBanner = new n.vpe,
                    this.isFree = !0,
                    this.topSponsors = [],
                    this.venturesSponsors = [],
                    this.endAnimation = !1,
                    this.totalChains = 0,
                    this.FileType = S.T
                }
                ngOnInit() {
                    const e = this._authService.getCurrentUserValue();
                    this.isFree = !e || e && "P20" !== e.plan && "P100" !== e.plan,
                    this._currentChain = this._exchangeService.chain ?? g.qop.Ethereum,
                    this.totalChains = g.CXF.allChains.length,
                    this._getSponsors()
                }
                onDestroy() {}
                updateBanners() {
                    this.empty && (this.topSponsors = [],
                    this.venturesSponsors = [],
                    this.selectedVenturesSponsor = null,
                    this._cdRef.detectChanges(),
                    this._getSponsors())
                }
                deleteBanners(e) {
                    this._sponsorsService.deleteBanners(e.name, this.empty).pipe((0,
                    _.sL)(this)).subscribe({
                        next: ()=>{
                            this.showBanner.emit({
                                message: "Banner successfully removed.",
                                color: "success"
                            }),
                            this.venturesSponsors = [],
                            this.topSponsors = [],
                            this.selectedVenturesSponsor = null,
                            this._cdRef.detectChanges(),
                            this._getSponsors()
                        }
                        ,
                        error: i=>{
                            this.showBanner.emit({
                                message: i.error.error.desc,
                                color: "danger"
                            })
                        }
                    })
                }
                editSponsor(e) {
                    this.editBanner.emit(e)
                }
                _runAnimation() {
                    this.endAnimation = !1,
                    this._cdRef.detectChanges(),
                    this.venturesText.nativeElement.classList.remove("ventures-text-animation"),
                    this.venturesText.nativeElement.classList.add("ventures-text-animation"),
                    this.venturesLogo.nativeElement.classList.remove("ventures-logo-animation"),
                    this.venturesLogo.nativeElement.classList.add("ventures-logo-animation"),
                    this.venturesContainer.nativeElement.classList.remove("ventures-logo-container-animation"),
                    this.venturesContainer.nativeElement.classList.add("ventures-logo-container-animation"),
                    (0,
                    x.H)(8505).pipe((0,
                    l.q)(1)).subscribe(()=>{
                        this.endAnimation = !0,
                        this._cdRef.detectChanges()
                    }
                    )
                }
                _getSponsors() {
                    this._sponsorsService.getBanners(this.empty, !1, "sponsor,ventures").pipe((0,
                    _.sL)(this), (0,
                    l.q)(1), (0,
                    m.b)(e=>{
                        e?.forEach(i=>{
                            "sponsor" === i.product ? this.empty ? (this.topSponsors.push(i),
                            this._fetchBannerImage(i)) : i.chain.forEach(s=>{
                                s === this._currentChain && (this.topSponsors.push(i),
                                this._fetchBannerImage(i))
                            }
                            ) : "ventures" === i.product && (this.empty ? (this.venturesSponsors.push(i),
                            this._fetchBannerImage(i)) : i.chain.forEach(s=>{
                                s === this._currentChain && (this.venturesSponsors.push(i),
                                this.selectedVenturesSponsor = this.venturesSponsors[_.C6.generateRandomInt(this.venturesSponsors.length - 1)],
                                this._fetchBannerImage(this.selectedVenturesSponsor))
                            }
                            ))
                        }
                        ),
                        this._cdRef.detectChanges()
                    }
                    )).subscribe(()=>{
                        (0,
                        v.of)(!0).pipe((0,
                        _.sL)(this), (0,
                        m.b)(()=>{
                            this.selectedVenturesSponsor && this.selectedVenturesSponsor.needAnimation && this._runAnimation()
                        }
                        ), (0,
                        C.a)(e=>e.pipe((0,
                        _.sL)(this), (0,
                        h.g)(45e3)))).subscribe()
                    }
                    )
                }
                _fetchBannerImage(e) {
                    this._sponsorsService.getBannerImage(e.name, B.K.SMALL, e.fileExt).pipe((0,
                    M.U)(s=>URL.createObjectURL(s)), (0,
                    h.g)(this._sponsorsService.bannerInitialDelay)).subscribe(s=>{
                        e.bannerImage = this._sanitizer.bypassSecurityTrustUrl(s),
                        this._cdRef.detectChanges()
                    }
                    )
                }
            }
            return t.\u0275fac = function(e) {
                return new (e || t)(n.Y36(T.$h),n.Y36(n.sBO),n.Y36(E.D),n.Y36(O.H7),n.Y36(g.OqV))
            }
            ,
            t.\u0275cmp = n.Xpm({
                type: t,
                selectors: [["app-mini-banner"]],
                viewQuery: function(e, i) {
                    if (1 & e && (n.Gf(I, 5),
                    n.Gf(P, 5),
                    n.Gf(y, 5)),
                    2 & e) {
                        let s;
                        n.iGM(s = n.CRH()) && (i.venturesContainer = s.first),
                        n.iGM(s = n.CRH()) && (i.venturesText = s.first),
                        n.iGM(s = n.CRH()) && (i.venturesLogo = s.first)
                    }
                },
                inputs: {
                    empty: "empty"
                },
                outputs: {
                    showBanner: "showBanner",
                    editBanner: "editBanner"
                },
                standalone: !0,
                features: [n.qOj, n.jDz],
                decls: 1,
                vars: 1,
                consts: [[4, "ngIf"], ["class", "mb-4", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mb-4"], ["class", "mx-2 chains", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "mini-banner", 3, "href"], ["class", "mini-banner-image", "loading", "lazy", 3, "src", "alt", 4, "ngIf"], ["autoplay", "", "loop", "", "playsinline", "", "muted", "", "class", "mini-banner-image", 3, "src", 4, "ngIf"], ["class", "ms-4 text-danger", "icon", "trash-can", 3, "click", 4, "ngIf"], ["class", "ms-4 text-success", "icon", "pencil-alt", 3, "click", 4, "ngIf"], [1, "mx-2", "chains"], ["class", "me-2", 4, "ngIf"], [1, "me-2"], ["loading", "lazy", 1, "mini-banner-image", 3, "src", "alt"], ["autoplay", "", "loop", "", "playsinline", "", "muted", "", 1, "mini-banner-image", 3, "src"], ["icon", "trash-can", 1, "ms-4", "text-danger", 3, "click"], ["icon", "pencil-alt", 1, "ms-4", "text-success", 3, "click"], [1, "mx-4"], [1, "mx-2"], [1, "ventures-logo-container"], ["venturesContainer", ""], [1, "ventures-text"], ["venturesText", ""], ["src", "assets/img/logo/dextforce_ventures_logo_transparent.png", "alt", "ventures-logo", 1, "ventures-logo"], ["venturesLogo", ""]],
                template: function(e, i) {
                    1 & e && n.YNc(0, G, 5, 4, "ng-container", 0),
                    2 & e && n.Q6J("ngIf", !(null == i.venturesSponsors || !i.venturesSponsors.length) || !(null == i.topSponsors || !i.topSponsors.length))
                },
                dependencies: [f.O5, f.ax, u.uH, u.BN],
                styles: ["[_nghost-%COMP%]{-webkit-user-select:none;user-select:none;width:100%}.chains[_ngcontent-%COMP%]{word-break:break-all}.mini-banner[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;margin-bottom:.5rem}.mini-banner-image[_ngcontent-%COMP%]{border-radius:1rem;height:5.625rem;width:18.75rem}.ventures-logo-container[_ngcontent-%COMP%]{align-items:center;background:#fff;border-radius:.4rem;color:#142028;display:flex;height:6rem;justify-content:center;overflow:hidden;padding:.5rem 1rem;position:relative;width:100%}.ventures-logo-container[_ngcontent-%COMP%]   .ventures-text[_ngcontent-%COMP%]{align-items:center;display:flex;font-size:16px;font-weight:700;overflow-x:hidden}.ventures-logo-container[_ngcontent-%COMP%]   .ventures-logo[_ngcontent-%COMP%]{height:0;width:0}.ventures-logo-container-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_ventures-animation 2s ease-out forwards;animation-delay:8.1s}.ventures-text-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_ventures-text-animation 5s ease-out forwards}.ventures-logo-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_ventures-logo-animation 3s ease-out forwards;animation-delay:5.05s}fa-icon[_ngcontent-%COMP%]{cursor:pointer}@keyframes _ngcontent-%COMP%_ventures-animation{0%{background:#fff}to{background:#555}}@keyframes _ngcontent-%COMP%_ventures-logo-animation{0%{height:0;width:0}75%{height:5em;width:9em}82.5%{height:5.5em;width:10em}90%{height:5em;width:9em}to{height:0;width:0}}@keyframes _ngcontent-%COMP%_ventures-text-animation{0%{height:100%;transform:translate(-100%);width:100%}15%{height:100%;transform:translate(0);width:100%}50%{height:100%;transform:translate(0);width:100%}99%{height:100%;transform:translate(150%);width:100%}to{height:0;transform:translate(3000%);width:0}}"],
                data: {
                    animation: [(0,
                    c.X$)("fadeInOut", [(0,
                    c.eR)(":enter", [(0,
                    c.oB)({
                        opacity: .8
                    }), (0,
                    c.jt)(300, (0,
                    c.oB)({
                        opacity: 1
                    }))])])]
                },
                changeDetection: 0
            }),
            t
        }
        )()
    }
}]);
