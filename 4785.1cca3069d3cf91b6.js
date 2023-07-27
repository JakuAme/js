"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[4785], {
    24785: (E,i,o)=>{
        o.r(i),
        o.d(i, {
            GasPriceComponent: ()=>m
        });
        var _ = o(52413)
          , r = o(99703)
          , p = o(77579)
          , d = o(39646)
          , P = o(18505)
          , u = o(4326)
          , a = o(82722)
          , C = o(63900)
          , O = o(89383)
          , M = o(92216)
          , b = o(49319)
          , l = o(36895)
          , n = o(94650);
        function f(c, g) {
            if (1 & c && (n.TgZ(0, "span", 4),
            n._UZ(1, "fa-icon", 5),
            n.TgZ(2, "span"),
            n._uU(3),
            n.qZA()()),
            2 & c) {
                const t = n.oxw(2)
                  , e = n.MAs(2);
                n.Tol(t.animationBackground),
                n.Q6J("ngbTooltip", e),
                n.xp6(3),
                n.Oqu(t.gasPriceHead)
            }
        }
        function h(c, g) {
            if (1 & c && (n.TgZ(0, "div", 2)(1, "span"),
            n._uU(2),
            n.ALo(3, "number"),
            n.qZA(),
            n.YNc(4, f, 4, 4, "span", 3),
            n.qZA()),
            2 & c) {
                const t = n.oxw();
                n.xp6(1),
                n.Tol(t.animationBackground),
                n.xp6(1),
                n.AsE(" ", t.refTokenSymbol, ": $", t.ethPriceHead >= .01 ? n.xi3(3, 5, t.ethPriceHead, "1.2-2") : t.getPriceWithDecimals(t.ethPriceHead), " "),
                n.xp6(2),
                n.Q6J("ngIf", t.isEth)
            }
        }
        function k(c, g) {
            if (1 & c && (n.TgZ(0, "div", 6)(1, "span"),
            n._uU(2),
            n.ALo(3, "translate"),
            n.qZA(),
            n.TgZ(4, "span", 7),
            n._uU(5),
            n.ALo(6, "translate"),
            n.qZA(),
            n.TgZ(7, "span"),
            n._uU(8),
            n.ALo(9, "translate"),
            n.qZA()()),
            2 & c) {
                const t = n.oxw();
                n.xp6(2),
                n.AsE(" Low: ", t.safeGasPriceHead, " ", n.lcZ(3, 6, "hot_pairs_header.gas"), ""),
                n.xp6(3),
                n.AsE(" Medium: ", t.gasPriceHead, " ", n.lcZ(6, 8, "hot_pairs_header.gas"), ""),
                n.xp6(3),
                n.AsE(" Fast: ", t.fastGasPriceHead, " ", n.lcZ(9, 10, "hot_pairs_header.gas"), "")
            }
        }
        let m = (()=>{
            class c extends _.K9 {
                constructor(t, e) {
                    super(),
                    this._cdRef = t,
                    this._commonService = e,
                    this.ethPriceHead = 0,
                    this.safeGasPriceHead = "",
                    this.gasPriceHead = "",
                    this.fastGasPriceHead = "",
                    this.isEth = !1,
                    this.animationBackground = "",
                    this._unsubscribeCoinPrice$ = new p.x,
                    this.refTokenSymbol = ""
                }
                ngOnInit() {
                    this._init()
                }
                ngOnChanges() {
                    this._init()
                }
                onDestroy() {
                    this._unsubscribeCoinPrice$.next(),
                    this._unsubscribeCoinPrice$.complete()
                }
                _init() {
                    this.isEth = this.chain === r.qop.Ethereum,
                    this.refTokenSymbol = r.CXF.getRefTokenSymbol(this.chain),
                    this._unsubscribeCoinPrice$.next(),
                    this.getCoinPrice(),
                    this.isEth && this.getGas()
                }
                _updateAnimation() {
                    return (0,
                    d.of)(`${this.chain} animation-color`).pipe((0,
                    P.b)(t=>{
                        this.animationBackground = t,
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    u.g)(200), (0,
                    P.b)(()=>{
                        this.animationBackground = "",
                        this._cdRef.detectChanges()
                    }
                    ), (0,
                    a.R)(this._unsubscribeCoinPrice$))
                }
                getCoinPrice() {
                    this._commonService.coinPrice$.pipe((0,
                    a.R)(this._unsubscribeCoinPrice$), (0,
                    C.w)(t=>0 === t ? (0,
                    d.of)("noop") : (this.ethPriceHead = t,
                    this._cdRef.detectChanges(),
                    this._updateAnimation()))).subscribe({
                        error: t=>{
                            console.error(t)
                        }
                    })
                }
                getGas() {
                    this._commonService.gas$.pipe((0,
                    a.R)(this._unsubscribeCoinPrice$), (0,
                    C.w)(t=>(this.safeGasPriceHead = t.safeGasPrice.toString(),
                    this.gasPriceHead = t.proposeGasPrice.toString(),
                    this.fastGasPriceHead = t.fastGasPrice.toString(),
                    this._cdRef.detectChanges(),
                    this._updateAnimation()))).subscribe({
                        error: t=>{
                            console.error(t)
                        }
                    })
                }
                getPriceWithDecimals(t) {
                    const e = _.C6.shortenPrice(t, 2)
                      , s = e.split(".");
                    return s.length > 0 ? s[0] + "." + s[1].slice(0, 4) : e
                }
            }
            return c.\u0275fac = function(t) {
                return new (t || c)(n.Y36(n.sBO),n.Y36(r.v_H))
            }
            ,
            c.\u0275cmp = n.Xpm({
                type: c,
                selectors: [["app-gas-price"]],
                inputs: {
                    chain: "chain"
                },
                standalone: !0,
                features: [n.qOj, n.TTD, n.jDz],
                decls: 3,
                vars: 1,
                consts: [["class", "gas-price-content", 4, "ngIf"], ["gasTemplate", ""], [1, "gas-price-content"], ["class", "gas-content", "placement", "auto", 3, "class", "ngbTooltip", 4, "ngIf"], ["placement", "auto", 1, "gas-content", 3, "ngbTooltip"], ["icon", "gas-pump", 1, "mr05"], [1, "gas-tooltip"], [1, "my-2"]],
                template: function(t, e) {
                    1 & t && (n.YNc(0, h, 5, 8, "div", 0),
                    n.YNc(1, k, 10, 12, "ng-template", null, 1, n.W1O)),
                    2 & t && n.Q6J("ngIf", e.ethPriceHead)
                },
                dependencies: [l.O5, b._L, M.uH, M.BN, l.JJ, O.aw, O.X$],
                styles: [".animation-color[_ngcontent-%COMP%]{transition:background-color 1s linear}.gas-price-content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.gas-price-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;margin-bottom:0;color:#3d5170}.gas-price-content[_ngcontent-%COMP%]   span.gas-content[_ngcontent-%COMP%]{margin-left:.625rem}@media (max-width: 374px){.gas-price-content[_ngcontent-%COMP%]   span.gas-content[_ngcontent-%COMP%]{margin-left:.3125rem}}body.dark-theme   [_nghost-%COMP%]   .gas-price-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.dark-theme[_ngcontent-%COMP%]   .gas-price-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#cacedb}body.light   [_nghost-%COMP%]   .gas-price-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}body.light[_ngcontent-%COMP%]   .gas-price-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3d5170}.gas-price-content[_ngcontent-%COMP%]   .ether[_ngcontent-%COMP%]{background-color:#6c89ff4d}.gas-price-content[_ngcontent-%COMP%]   .bnb[_ngcontent-%COMP%]{background-color:#efb90a4d}.gas-price-content[_ngcontent-%COMP%]   .polygon[_ngcontent-%COMP%]{background-color:#8247e54d}.gas-price-content[_ngcontent-%COMP%]   .fantom[_ngcontent-%COMP%]{background-color:#1969ff4d}.gas-price-content[_ngcontent-%COMP%]   .cronos[_ngcontent-%COMP%]{background-color:#1199fa4d}.gas-price-content[_ngcontent-%COMP%]   .avalanche[_ngcontent-%COMP%]{background-color:#e740424d}.gas-price-content[_ngcontent-%COMP%]   .oasis[_ngcontent-%COMP%]{background-color:#0092f64d}.gas-price-content[_ngcontent-%COMP%]   .velas[_ngcontent-%COMP%]{background-color:#0037c14d}.gas-price-content[_ngcontent-%COMP%]   .metis[_ngcontent-%COMP%]{background-color:#2adacc4d}.gas-price-content[_ngcontent-%COMP%]   .kucoin[_ngcontent-%COMP%]{background-color:#31d7a04d}.gas-price-content[_ngcontent-%COMP%]   .optimism[_ngcontent-%COMP%]{background-color:#ff04204d}.gas-price-content[_ngcontent-%COMP%]   .arbitrum[_ngcontent-%COMP%]{background-color:#28a0f04d}.gas-price-content[_ngcontent-%COMP%]   .celo[_ngcontent-%COMP%]{background-color:#35d07f4d}.gas-price-content[_ngcontent-%COMP%]   .telos[_ngcontent-%COMP%]{background-color:#cbcaf94d}.gas-price-content[_ngcontent-%COMP%]   .aurora[_ngcontent-%COMP%]{background-color:#6ee4e54d}.gas-price-content[_ngcontent-%COMP%]   .moonbeam[_ngcontent-%COMP%]{background-color:#ea5aa24d}.gas-price-content[_ngcontent-%COMP%]   .moonriver[_ngcontent-%COMP%]{background-color:#f2a0074d}.gas-price-content[_ngcontent-%COMP%]   .harmony[_ngcontent-%COMP%]{background-color:#3ad8d14d}.gas-price-content[_ngcontent-%COMP%]   .astar[_ngcontent-%COMP%]{background-color:#1b6dc14d}.gas-price-content[_ngcontent-%COMP%]   .fuse[_ngcontent-%COMP%]{background-color:#b3ffbb4d}.gas-price-content[_ngcontent-%COMP%]   .iotex[_ngcontent-%COMP%]{background-color:#44ffb24d}.gas-price-content[_ngcontent-%COMP%]   .okc[_ngcontent-%COMP%]{background-color:#205fec4d}.gas-price-content[_ngcontent-%COMP%]   .heco[_ngcontent-%COMP%]{background-color:#aefb194d}.gas-price-content[_ngcontent-%COMP%]   .milkomeda[_ngcontent-%COMP%]{background-color:#f07d004d}.gas-price-content[_ngcontent-%COMP%]   .dfk[_ngcontent-%COMP%]{background-color:#e740424d}.gas-price-content[_ngcontent-%COMP%]   .solana[_ngcontent-%COMP%]{background-color:#14f1954d}.gas-price-content[_ngcontent-%COMP%]   .evmos[_ngcontent-%COMP%]{background-color:#fff3cd4d}.gas-price-content[_ngcontent-%COMP%]   .dogechain[_ngcontent-%COMP%]{background-color:#ba9f334d}.gas-price-content[_ngcontent-%COMP%]   .canto[_ngcontent-%COMP%]{background-color:#66ff9a4d}.gas-price-content[_ngcontent-%COMP%]   .etc[_ngcontent-%COMP%]{background-color:#14b9814d}.gas-price-content[_ngcontent-%COMP%]   .gnosis[_ngcontent-%COMP%]{background-color:#0ae33a4d}.gas-price-content[_ngcontent-%COMP%]   .bitgert[_ngcontent-%COMP%]{background-color:#b3fa084d}.gas-price-content[_ngcontent-%COMP%]   .arbitrumnova[_ngcontent-%COMP%]{background-color:#ef82204d}.gas-price-content[_ngcontent-%COMP%]   .songbird[_ngcontent-%COMP%]{background-color:#e2665c4d}.gas-price-content[_ngcontent-%COMP%]   .redlight[_ngcontent-%COMP%]{background-color:#ff3c3b4d}.gas-price-content[_ngcontent-%COMP%]   .kardia[_ngcontent-%COMP%]{background-color:#d77ac74d}.gas-price-content[_ngcontent-%COMP%]   .smartbch[_ngcontent-%COMP%]{background-color:#3fdb884d}.gas-price-content[_ngcontent-%COMP%]   .conflux[_ngcontent-%COMP%]{background-color:#4fc0d04d}.gas-price-content[_ngcontent-%COMP%]   .tomb[_ngcontent-%COMP%]{background-color:#9585fe4d}.gas-price-content[_ngcontent-%COMP%]   .boba[_ngcontent-%COMP%]{background-color:#cbff004d}.gas-price-content[_ngcontent-%COMP%]   .elastos[_ngcontent-%COMP%]{background-color:#a97ae74d}.gas-price-content[_ngcontent-%COMP%]   .shiden[_ngcontent-%COMP%]{background-color:#9b2abc4d}.gas-price-content[_ngcontent-%COMP%]   .fusion[_ngcontent-%COMP%]{background-color:#017bfe4d}.gas-price-content[_ngcontent-%COMP%]   .wan[_ngcontent-%COMP%]{background-color:#2daef14d}.gas-price-content[_ngcontent-%COMP%]   .rsk[_ngcontent-%COMP%]{background-color:#03826d4d}.gas-price-content[_ngcontent-%COMP%]   .nova[_ngcontent-%COMP%]{background-color:#b241414d}.gas-price-content[_ngcontent-%COMP%]   .hoo[_ngcontent-%COMP%]{background-color:#00d1ae4d}.gas-price-content[_ngcontent-%COMP%]   .cube[_ngcontent-%COMP%]{background-color:#43ffff4d}.gas-price-content[_ngcontent-%COMP%]   .syscoin[_ngcontent-%COMP%]{background-color:#0680fe4d}.gas-price-content[_ngcontent-%COMP%]   .ronin[_ngcontent-%COMP%]{background-color:#c4e3fb4d}.gas-price-content[_ngcontent-%COMP%]   .tomo[_ngcontent-%COMP%]{background-color:#3fe8b44d}.gas-price-content[_ngcontent-%COMP%]   .kava[_ngcontent-%COMP%]{background-color:#f9443e4d}.gas-price-content[_ngcontent-%COMP%]   .thundercore[_ngcontent-%COMP%]{background-color:#35d1d14d}.gas-price-content[_ngcontent-%COMP%]   .meter[_ngcontent-%COMP%]{background-color:#1787d04d}.gas-price-content[_ngcontent-%COMP%]   .echelon[_ngcontent-%COMP%]{background-color:#ed30d14d}.gas-price-content[_ngcontent-%COMP%]   .shib[_ngcontent-%COMP%]{background-color:#e20dcd4d}.gas-price-content[_ngcontent-%COMP%]   .ethw[_ngcontent-%COMP%]{background-color:#6c85dd4d}.gas-price-content[_ngcontent-%COMP%]   .kek[_ngcontent-%COMP%]{background-color:#3e80654d}.gas-price-content[_ngcontent-%COMP%]   .ethf[_ngcontent-%COMP%]{background-color:#6481f84d}.gas-price-content[_ngcontent-%COMP%]   .sx[_ngcontent-%COMP%]{background-color:#3ec6e94d}.gas-price-content[_ngcontent-%COMP%]   .muu[_ngcontent-%COMP%]{background-color:#007bff4d}.gas-price-content[_ngcontent-%COMP%]   .alvey[_ngcontent-%COMP%]{background-color:#487cb64d}.gas-price-content[_ngcontent-%COMP%]   .aptos[_ngcontent-%COMP%]{background-color:#2ed8a74d}.gas-price-content[_ngcontent-%COMP%]   .elrond[_ngcontent-%COMP%]{background-color:#23f7dd4d}.gas-price-content[_ngcontent-%COMP%]   .flare[_ngcontent-%COMP%]{background-color:#cf2e2e4d}.gas-price-content[_ngcontent-%COMP%]   .pom[_ngcontent-%COMP%]{background-color:#1e1b574d}.gas-price-content[_ngcontent-%COMP%]   .ultron[_ngcontent-%COMP%]{background-color:#150b424d}.gas-price-content[_ngcontent-%COMP%]   .energi[_ngcontent-%COMP%]{background-color:#00e6764d}.gas-price-content[_ngcontent-%COMP%]   .exosama[_ngcontent-%COMP%]{background-color:#1719234d}.gas-price-content[_ngcontent-%COMP%]   .coredao[_ngcontent-%COMP%]{background-color:#ff96354d}.gas-price-content[_ngcontent-%COMP%]   .ethergoerli[_ngcontent-%COMP%]{background-color:#afeeee4d}.gas-price-content[_ngcontent-%COMP%]   .filecoin[_ngcontent-%COMP%]{background-color:#0090ff4d}.gas-price-content[_ngcontent-%COMP%]   .zksync[_ngcontent-%COMP%]{background-color:#712f934d}.gas-price-content[_ngcontent-%COMP%]   .polygonzkevm[_ngcontent-%COMP%]{background-color:#8141f24d}.gas-price-content[_ngcontent-%COMP%]   .pulse[_ngcontent-%COMP%]{background-color:#9a01f84d}.gas-price-content[_ngcontent-%COMP%]   .klaytn[_ngcontent-%COMP%]{background-color:#ff2f004d}.gas-tooltip[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex-direction:column}"],
                changeDetection: 0
            }),
            c
        }
        )()
    }
}]);
