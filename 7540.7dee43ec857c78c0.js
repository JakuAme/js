(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[7540], {
    12480: (wr,Ue,J)=>{
        "use strict";
        J.d(Ue, {
            Ku: ()=>Se,
            ZC: ()=>L
        });
        var j = J(99703)
          , Ae = J(48178);
        const k = {
            [j.qop.Ethereum]: {
                symbol: "ETH",
                address: Ae.E_,
                name: "Ether",
                decimals: 18
            },
            [j.qop.Binance]: {
                symbol: "BNB",
                address: Ae.E_,
                name: "BNB",
                decimals: 18
            },
            [j.qop.Polygon]: {
                symbol: "MATIC",
                address: Ae.E_,
                name: "Matic Token",
                decimals: 18
            },
            [j.qop.Fantom]: {
                symbol: "FTM",
                address: Ae.E_,
                name: "Fantom Token",
                decimals: 18
            },
            [j.qop.Cronos]: {
                symbol: "CRO",
                address: Ae.E_,
                name: "Cronos Token",
                decimals: 18
            },
            [j.qop.Avalanche]: {
                symbol: "AVAX",
                address: Ae.E_,
                name: "Avalanche Token",
                decimals: 18
            },
            [j.qop.Arbitrum]: {
                symbol: "ETH",
                address: Ae.E_,
                name: "Ethereum",
                decimals: 18
            },
            [j.qop.Aurora]: {
                symbol: "ETH",
                address: Ae.E_,
                name: "Ethereum",
                decimals: 18
            },
            [j.qop.Velas]: {
                symbol: "VLX",
                address: Ae.E_,
                name: "Velas",
                decimals: 18
            },
            [j.qop.Oasis]: {
                symbol: "ROSE",
                address: Ae.E_,
                name: "Rose Token",
                decimals: 18
            },
            [j.qop.Optimism]: {
                symbol: "ETH",
                address: Ae.E_,
                name: "Ethereum",
                decimals: 18
            }
        }
          , L = {
            [j.qop.Ethereum]: [k[j.qop.Ethereum], {
                symbol: "USDC",
                address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "DAI",
                address: "0x6b175474e89094c44da98b954eedeac495271d0f",
                name: "Dai Stablecoin",
                decimals: 18
            }, {
                symbol: "WETH",
                address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                name: "Wrapped Ether",
                decimals: 18
            }, {
                symbol: "WBTC",
                address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
                name: "Wrapped BTC",
                decimals: 8
            }],
            [j.qop.Binance]: [k[j.qop.Binance], {
                symbol: "BUSD",
                address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                name: "Binance USD",
                decimals: 18
            }, {
                symbol: "USDC",
                address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                name: "USD Coin",
                decimals: 18
            }, {
                symbol: "WBNB",
                address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                name: "Wrapped BNB",
                decimals: 18
            }, {
                symbol: "BSC-USD",
                address: "0x55d398326f99059ff775485246999027b3197955",
                name: "Binance BSC-USD",
                decimals: 18
            }, {
                symbol: "DAI",
                address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
                name: "Dai Stablecoin",
                decimals: 18
            }],
            [j.qop.Polygon]: [k[j.qop.Polygon], {
                symbol: "WETH",
                address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
                name: "Wrapped Ether",
                decimals: 18
            }, {
                symbol: "DAI",
                address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
                name: "Dai Stablecoin",
                decimals: 18
            }, {
                symbol: "USDC",
                address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "wMATIC",
                address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
                name: "Wrapped Matic Token",
                decimals: 18
            }],
            [j.qop.Fantom]: [k[j.qop.Fantom], {
                symbol: "USDC",
                address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "DAI",
                address: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
                name: "Dai Stablecoin",
                decimals: 18
            }, {
                symbol: "WFTM",
                address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
                name: "Wrapped Fantom",
                decimals: 18
            }, {
                symbol: "fUSDT",
                address: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
                name: "Frapped USDT",
                decimals: 6
            }, {
                symbol: "WBTC",
                address: "0x321162cd933e2be498cd2267a90534a804051b11",
                name: "Wrapped BTC",
                decimals: 8
            }],
            [j.qop.Cronos]: [k[j.qop.Cronos], {
                symbol: "WCRO",
                address: "0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23",
                name: "Wrapped Cronos Token",
                decimals: 18
            }, {
                symbol: "USDC",
                address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0x66e428c3f67a68878562e79a0234c1f83c208770",
                name: "Tether USD",
                decimals: 6
            }],
            [j.qop.Avalanche]: [k[j.qop.Avalanche], {
                symbol: "USDC.e",
                address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "USDT.e",
                address: "0xc7198437980c041c805a1edcba50c1ce5db95118",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "WAVAX",
                address: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
                name: "Wrapped AVAX",
                decimals: 18
            }, {
                symbol: "WETH",
                address: "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
                name: "Wrapped Ether",
                decimals: 18
            }, {
                symbol: "aWETH",
                address: "0x53f7c5869a859f0aec3d334ee8b4cf01e3492f21",
                name: "Avalanche Aave Market WETH",
                decimals: 18
            }],
            [j.qop.Arbitrum]: [k[j.qop.Arbitrum], {
                symbol: "USDC",
                address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
                name: "USD Coin (Arb1)",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "WETH",
                address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                name: "Wrapped Ether",
                decimals: 18
            }],
            [j.qop.Aurora]: [k[j.qop.Aurora], {
                symbol: "USDC",
                address: "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0x4988a896b1227218e4a686fde5eabdcabd91571f",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "DAI",
                address: "0xe3520349f477a5f6eb06107066048508498a291b",
                name: "Dai Stablecoin",
                decimals: 18
            }, {
                symbol: "NEAR",
                address: "0xc42c30ac6cc15fac9bd938618bcaa1a1fae8501d",
                name: "Near Token",
                decimals: 24
            }],
            [j.qop.Velas]: [k[j.qop.Velas], {
                symbol: "BUSD",
                address: "0xc111c29a988ae0c0087d97b33c6e6766808a3bd3",
                name: "Multichain BUSD",
                decimals: 18
            }, {
                symbol: "USDC",
                address: "0xe2c120f188ebd5389f71cf4d9c16d05b62a58993",
                name: "Multichain USDC",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0x01445c31581c354b7338ac35693ab2001b50b9ae",
                name: "Multichain USDT",
                decimals: 6
            }, {
                symbol: "WVLX",
                address: "0xc579d1f3cf86749e05cd06f7ade17856c2ce3126",
                name: "Wrapped Velas Token",
                decimals: 18
            }],
            [j.qop.Oasis]: [k[j.qop.Oasis], {
                symbol: "USDT",
                address: "0xdc19a122e268128b5ee20366299fc7b5b199c8e3",
                name: "Tether USD (Wormhole)",
                decimals: 6
            }, {
                symbol: "USDT",
                address: "0x6cb9750a92643382e020ea9a170abb83df05f30b",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "WETH",
                address: "0x3223f17957ba502cbe71401d55a0db26e5f7c68f",
                name: "Wrapped Ether (Wormhole)",
                decimals: 6
            }, {
                symbol: "wROSE",
                address: "0x21c718c22d52d0f3a789b752d4c2fd5908a8a733",
                name: "Wrapped Rose Token",
                decimals: 18
            }],
            [j.qop.Optimism]: [k[j.qop.Optimism], {
                symbol: "USDT",
                address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
                name: "Tether USD",
                decimals: 6
            }, {
                symbol: "USDC",
                address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
                name: "USD Coin",
                decimals: 6
            }, {
                symbol: "DAI",
                address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
                name: "Dai Stablecoin",
                decimals: 18
            }, {
                symbol: "WBTC",
                address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
                name: "Wrapped BTC",
                decimals: 8
            }, {
                symbol: "OP",
                address: "0x4200000000000000000000000000000000000042",
                name: "Optimism",
                decimals: 18
            }, {
                symbol: "sUSD",
                address: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
                name: "Synth sUSD",
                decimals: 18
            }, {
                symbol: "WETH",
                address: "0x4200000000000000000000000000000000000006",
                name: "Wrapped Ether",
                decimals: 18
            }]
        }
          , Se = {
            ETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            BNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
            POLYGON: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
            FANTOM: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
            CRONOS: "0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23",
            AVALANCHE: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
            OASIS: "0x21c718c22d52d0f3a789b752d4c2fd5908a8a733",
            VELAS: "0xc579d1f3cf86749e05cd06f7ade17856c2ce3126",
            OPTIMISM: "0x4200000000000000000000000000000000000006",
            ARBITRUM: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
            AURORA: "0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb"
        }
    }
    ,
    77540: (wr,Ue,J)=>{
        "use strict";
        J.d(Ue, {
            Cc: ()=>N,
            HK: ()=>W,
            T6: ()=>we,
            o1: ()=>X
        });
        var j = J(15861)
          , Ae = J(49808)
          , k = J(4128)
          , L = J(32076)
          , Se = J(54004)
          , Me = J(52413)
          , Oe = J(99703)
          , oe = J(19265)
          , te = J(48178)
          , T = J(12480)
          , v = J(94650)
          , E = J(80529)
          , F = J(92255);
        const b = {
            ETH: .003,
            BNB: .005,
            POLYGON: .003,
            FANTOM: .003,
            CRONOS: .003,
            AVALANCHE: .003,
            ARBITRUM: .003,
            AURORA: .003,
            VELAS: .003,
            OASIS: .003,
            OPTIMISM: .003
        }
          , N = {
            LOW: 1,
            MEDIUM: 3,
            HIGH: 5,
            VERY_HIGH: 15,
            TOO_HIGH: 30
        }
          , W = 1.5
          , X = {
            MINIMUM: .01,
            LOW: .5
        }
          , K = "aggregatorSlippages"
          , be = "0x0000000000000000000000000000000000000000";
        let we = (()=>{
            class Ne {
                constructor(R, ue, se) {
                    this._http = R,
                    this._walletService = ue,
                    this._web3UtilsService = se
                }
                quote(R, ue, se, ye, Ee, he, _e=null, Le=null) {
                    var Be = this;
                    return (0,
                    j.Z)(function*() {
                        const We = Be._calculateChargeFeeBy(R, ye, se, Le ?? "")
                          , qe = Be.toBlockchainNumber(Ee, ye.decimals)
                          , Ze = Be._web3UtilsService.toChecksumAddress(ye.address)
                          , Ve = Be._web3UtilsService.toChecksumAddress(se.address)
                          , Br = b[R.name]
                          , ke = yield(0,
                        Ae.n)(Be._http.get(Be.getApiUri() + `route/encode?tokenIn=${Ze}&tokenOut=${Ve}&amountIn=${qe}&saveGas=0&gasInclude=1&slippageTolerance=${1e4 * (Math.max(_e || he, X.LOW / 100) + Br)}&deadline=${Math.floor((Date.now() + 12e5) / 1e3)}&to=${ue || be}&chargeFeeBy=${We}&feeAmount=${1e4 * Br}&feeReceiver=0x96c195F6643A3D797cb90cb6BA0Ae2776D51b5F3&isInBps=true&clientData={"source":"dextools"}`, {
                            headers: {
                                "accept-version": "Latest"
                            }
                        }))
                          , Nr = Be.toBigNumber(ke.outputAmount, se.decimals);
                        let Fr = null;
                        _e && (Fr = Be.calculateAmountWithoutSlippage(Nr, _e));
                        const Cr = Be.calculateAmountWithoutSlippage(Nr, he);
                        let ir = Math.abs(100 * (-ke.amountOutUsd + ke.amountInUsd) / ke.amountInUsd);
                        return ir = ke.amountInUsd < 10 && R.chainEnum.id === Oe.Dnr.ETHEREUM.id || ke.amountInUsd < 1 && R.chainEnum.id !== Oe.Dnr.ETHEREUM.id ? 0 : ir,
                        {
                            tradeRoute: ke,
                            amountOut: Cr,
                            minimumReceivedAmount: Fr,
                            price: +Cr.toString() / +Ee.toString(),
                            priceImpact: ir
                        }
                    })()
                }
                findSlippage(R, ue, se, ye, Ee, he, _e, Le) {
                    var Be = this;
                    return (0,
                    j.Z)(function*() {
                        let qe, We = null;
                        const Ze = [];
                        if (null != he) {
                            Ze.push(he);
                            try {
                                We = yield Be.estimateGas(R, ue, ye, se, Ee, he, _e, Le),
                                qe = he
                            } catch (Ve) {
                                console.error(Ve)
                            }
                        }
                        if (!We && he !== X.LOW) {
                            Ze.push(X.LOW / 100);
                            try {
                                We = yield Be.estimateGas(R, ue, ye, se, Ee, X.LOW / 100, _e, Le),
                                qe = X.LOW
                            } catch {}
                        }
                        if (!We) {
                            const Ve = yield Be._binarySearchForSlippage(R, se, ye, Ee, X.LOW / 100, Ze);
                            null != Ve && (We = Ve,
                            qe = Ve.slippage)
                        }
                        if (!We)
                            throw new Error("Dext Aggregator: Slippage too high");
                        return {
                            quote: We.quote,
                            totalGas: We.totalGas,
                            slippage: qe
                        }
                    })()
                }
                estimateGas(R, ue, se, ye, Ee, he, _e=null, Le=null) {
                    var Be = this;
                    return (0,
                    j.Z)(function*() {
                        const We = yield Be.quote(R, ue, ye, se, Ee, he, _e, Le)
                          , qe = oe.m.multiply(oe.m.bignumber(Ee), oe.m.bignumber(10 ** se.decimals));
                        return {
                            quote: We,
                            totalGas: yield Be._walletService.getEstimateGas({
                                account: (yield Be._walletService.getAccount()) || be,
                                to: We.tradeRoute.routerAddress,
                                data: We.tradeRoute.encodedSwapData,
                                value: BigInt(se.address === te.E_ ? qe.toString() : 0)
                            })
                        }
                    })()
                }
                swap(R, ue, se, ye) {
                    var Ee = this;
                    return (0,
                    j.Z)(function*() {
                        if (null == ye)
                            return void console.error("AggregatorService: Cannot find token to swap from");
                        const he = oe.m.multiply(oe.m.bignumber(ue), oe.m.bignumber(10 ** ye.decimals));
                        yield Ee._walletService.sendTransaction({
                            account: (yield Ee._walletService.getAccount()) || be,
                            to: R.tradeRoute.routerAddress,
                            data: R.tradeRoute.encodedSwapData,
                            gas: BigInt(Math.round(1.1 * se)),
                            gasPrice: oe.m.bignumber(oe.m.multiply(oe.m.bignumber(R.tradeRoute.gasPriceGwei), oe.m.bignumber(10 ** 9)).toString()),
                            ...ye.address === te.E_ ? {
                                value: oe.m.bignumber(he.toString())
                            } : {}
                        })
                    })()
                }
                getTokenData(R, ue) {
                    var se = this;
                    return (0,
                    j.Z)(function*() {
                        const ye = yield se._walletService.getAccount()
                          , [Ee,he,_e] = yield Promise.all([se._walletService.readContract(R, ue, "symbol"), se._walletService.readContract(R, ue, "name"), se._walletService.readContract(R, ue, "decimals")])
                          , Le = {
                            name: he,
                            symbol: Ee,
                            shortSymbol: Ee.length > 4 ? `${Ee.slice(0, 3)}...` : Ee,
                            address: R.toLowerCase(),
                            decimals: Number.parseInt(_e),
                            logoURI: "",
                            balance: oe.m.bignumber(0)
                        };
                        return ye && (Le.balance = yield se.getTokenBalance(Le, ue)),
                        Le
                    })()
                }
                getTokens(R, ue) {
                    var se = this;
                    return (0,
                    j.Z)(function*() {
                        return (0,
                        Ae.n)((0,
                        k.D)(T.ZC[R].map(Ee=>(0,
                        L.D)(se.getTokenBalance(Ee, ue)).pipe((0,
                        Se.U)(he=>({
                            ...Ee,
                            balance: he,
                            shortSymbol: Ee.symbol.length > 4 ? `${Ee.symbol.slice(0, 3)}...` : Ee.symbol
                        }))))))
                    })()
                }
                toStringNumber(R, ue) {
                    const se = Number(oe.m.divide(oe.m.bignumber(R), oe.m.bignumber(10 ** ue)));
                    return "" + Math.trunc(1e4 * se) / 1e4
                }
                toBigNumber(R, ue) {
                    return oe.m.divide(oe.m.bignumber(R), oe.m.bignumber(10 ** ue))
                }
                toBlockchainNumber(R, ue) {
                    return oe.m.multiply(oe.m.bignumber(R), oe.m.bignumber(10 ** ue)).toPrecision(64).split(".")[0]
                }
                getTokenBalance(R, ue) {
                    var se = this;
                    return (0,
                    j.Z)(function*() {
                        try {
                            if (R.address === te.E_)
                                return oe.m.bignumber(yield se._walletService.getBalance());
                            const ye = yield se._walletService.getAccount()
                              , Ee = yield se._walletService.readContract(R.address, ue, "balanceOf", [ye]);
                            return se.toBigNumber(Ee.toString(), R.decimals)
                        } catch {
                            return oe.m.bignumber(0)
                        }
                    })()
                }
                storeSlippage(R, ue, se, ye) {
                    const he = this._web3UtilsService.toChecksumAddress(ue) === te.C7 ? T.Ku[R.name] : ue
                      , _e = {
                        [he]: {
                            [`${se}CalculationDate`]: new Date,
                            [se]: ye
                        }
                    }
                      , Le = R.name.slice(0, 1).toUpperCase() + R.name.slice(1).toLowerCase()
                      , Be = JSON.parse(Me._Z.getString(`${K}${Le}`)) || {};
                    Be[he] = {
                        ...Be[he],
                        ..._e[he]
                    },
                    Me._Z.merge(`${K}${Le}`, Be)
                }
                getStoredSlippage(R, ue) {
                    const ye = this._web3UtilsService.toChecksumAddress(ue) === te.C7 ? T.Ku[R.name] : ue
                      , Ee = R.name.slice(0, 1).toUpperCase() + R.name.slice(1).toLowerCase()
                      , he = JSON.parse(Me._Z.getString(`${K}${Ee}`)) || {};
                    return he[ye] ? {
                        [ye]: {
                            ...he[ye]
                        }
                    } : null
                }
                _subtractFee(R, ue) {
                    return oe.m.multiply(R, oe.m.bignumber(1 - ue))
                }
                calculateAmountWithoutSlippage(R, ue) {
                    return oe.m.divide(R, oe.m.bignumber(1 + ue))
                }
                calculateAmountWithSlippage(R, ue) {
                    return oe.m.multiply(oe.m.bignumber(R), oe.m.bignumber(1 + ue))
                }
                _binarySearchForSlippage(R, ue, se, ye, Ee, he) {
                    var _e = this;
                    return (0,
                    j.Z)(function*() {
                        let We, Le = 0, Be = null, qe = 0, Ze = 20, Ve = 0, ke = "higher", Nr = 0;
                        const Fr = yield _e._walletService.getAccount();
                        for (; qe <= Ze; ) {
                            const Cr = Math.floor((qe + Ze) / 2);
                            if (Ve = Ve === Cr ? Math.ceil((qe + Ze) / 2) : Cr,
                            Le = 0 === Ve ? Ee : .015 * Ve,
                            he.includes(Le))
                                "lower" === ke ? Ze -= 1 : qe += 1;
                            else {
                                he.push(Le);
                                try {
                                    const ir = yield _e.estimateGas(R, Fr, se, ue, ye, Le, null);
                                    if (Be = ir.quote,
                                    Nr = ir.totalGas,
                                    We = Le,
                                    qe === Ze || Ve === Ze)
                                        break;
                                    Ze = Ve,
                                    ke = "lower"
                                } catch (ir) {
                                    if (console.error(ir),
                                    qe === Ze || Ve === Ze)
                                        break;
                                    qe = Ve,
                                    ke = "higher"
                                }
                            }
                        }
                        return Be ? {
                            totalGas: Nr,
                            quote: Be,
                            slippage: We
                        } : null
                    })()
                }
                getApiUri() {
                    const R = this._walletService.selectedNetwork
                      , ue = Object.entries(te.pt).find(([se,ye])=>se === R.name);
                    return ue && ue[1].apiUrl ? ue[1].apiUrl : (console.warn(`Aggregator: no suitable API found for network ${R.name}. Using ${te.pt.ETH.name} by default.`),
                    te.pt.ETH.apiUrl)
                }
                _calculateChargeFeeBy(R, ue, se, ye) {
                    const Ee = this._web3UtilsService.toChecksumAddress(ue.address)
                      , he = this._web3UtilsService.toChecksumAddress(se.address)
                      , _e = this._walletService.convertNetworkToChain(R);
                    return Oe.CXF.isStableSymbol(_e, ue.symbol) ? "currency_in" : Oe.CXF.isStableSymbol(_e, se.symbol) ? "currency_out" : Ee === te.C7 ? "currency_in" : he === te.C7 ? "currency_out" : ue.symbol === ye ? "currency_in" : se.symbol === ye ? "currency_out" : "currency_in"
                }
            }
            return Ne.\u0275fac = function(R) {
                return new (R || Ne)(v.LFG(E.eN),v.LFG(F.X),v.LFG(Oe.j4Y))
            }
            ,
            Ne.\u0275prov = v.Yz7({
                token: Ne,
                factory: Ne.\u0275fac
            }),
            Ne
        }
        )()
    }
    ,
    92255: (wr,Ue,J)=>{
        "use strict";
        J.d(Ue, {
            X: ()=>W
        });
        var j = J(15861)
          , Ae = J(99703)
          , k = J(53763)
          , L = J(77579)
          , Se = J(4707)
          , Me = J(95698)
          , Oe = J(32076)
          , oe = J(49808)
          , te = J(4128)
          , T = J(60253)
          , v = J(23011)
          , E = J(21058)
          , F = J(33914)
          , b = J(48178)
          , N = J(94650)
          , z = J(83353);
        let W = (()=>{
            class X {
                constructor(K, be) {
                    this._platform = K,
                    this._settingsService = be,
                    this._supportedChains = {},
                    this.selectedNetwork = b.pt.ETH,
                    this.MAX_INT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
                    this.loggedOut = new L.x,
                    this.accountChanged = new L.x,
                    this._isInitialNetworkCheck = !0,
                    this._isLibLoaded$ = new Se.t(1),
                    this._theme = "dark",
                    this._themeVariables = {
                        dark: {
                            "--w3m-accent-fill-color": "#0b1217",
                            "--w3m-accent-color": "#00b8d8",
                            "--w3m-background-color": "#00b8d8",
                            "--w3m-color-bg-1": "#0b1217",
                            "--w3m-z-index": "999992"
                        },
                        light: {
                            "--w3m-accent-fill-color": "#f4f5f6",
                            "--w3m-accent-color": "#3d5170",
                            "--w3m-background-color": "#3d5170",
                            "--w3m-color-bg-1": "#f4f5f6",
                            "--w3m-z-index": "999992"
                        }
                    },
                    this._loadWeb3Modal().then(()=>{
                        this._isLibLoaded$.next(!0)
                    }
                    ),
                    this._settingsService.onThemeChange$.subscribe(we=>{
                        this._theme = we === k.Q2.Dark ? "dark" : "light",
                        this._modal?.setTheme({
                            themeMode: this._theme,
                            themeVariables: this._themeVariables[this._theme]
                        })
                    }
                    )
                }
                get isLibLoaded$() {
                    return this._isLibLoaded$.asObservable().pipe((0,
                    Me.q)(1))
                }
                selectNetwork(K) {
                    this.selectedNetwork = K
                }
                getBalance(K=null) {
                    var be = this;
                    return (0,
                    j.Z)(function*() {
                        const we = K ?? (yield be.getAccount());
                        if (!we || !be._ethereumClient)
                            return "0";
                        try {
                            return (yield be._ethereumClient.fetchBalance({
                                address: we,
                                formatUnits: "ether"
                            })).formatted
                        } catch {
                            return "0"
                        }
                    })()
                }
                getAccount() {
                    var K = this;
                    return (0,
                    j.Z)(function*() {
                        return K._ethereumClient?.getAccount().address ?? null
                    })()
                }
                disconnect() {
                    var K = this;
                    return (0,
                    j.Z)(function*() {
                        K._ethereumClient && (yield K._ethereumClient.disconnect(),
                        K.loggedOut.next())
                    })()
                }
                connect() {
                    var K = this;
                    return (0,
                    j.Z)(function*() {
                        K._ethereumClient && K._modal && (yield K._modal.openModal())
                    })()
                }
                isAddress(K) {
                    return (0,
                    T.U)(K)
                }
                getNetwork() {
                    var K = this;
                    return (0,
                    j.Z)(function*() {
                        try {
                            const be = K._ethereumClient?.getNetwork().chain?.id;
                            return be ? Object.values(b.pt).find(Ne=>Ne.chainEnum.id === be) || (console.warn(`Aggregator: no network configured with id ${be}`),
                            b.pt.UNSUPPORTED) : b.pt.UNSUPPORTED
                        } catch (be) {
                            return console.error("Aggregator: could not retrieve the network id", be),
                            b.pt.UNSUPPORTED
                        }
                    })()
                }
                getEstimateGas({account: K, to: be, data: we, value: Ne}) {
                    var ae = this;
                    return (0,
                    j.Z)(function*() {
                        try {
                            if (!ae._walletClient)
                                throw new Error("No wallet client instance available to estimate gas price");
                            const R = yield ae._walletClient?.estimateGas({
                                account: K,
                                to: be,
                                data: we,
                                value: Ne
                            });
                            return Number(R)
                        } catch (R) {
                            console.error(R)
                        }
                        return 0
                    })()
                }
                sendTransaction({account: K, to: be, data: we, gas: Ne, gasPrice: ae, value: R}) {
                    var ue = this;
                    return (0,
                    j.Z)(function*() {
                        if (!ue._walletClient || !ue._ethereumClient)
                            throw new Error("No client instance available to send the transaction");
                        const se = ue._ethereumClient.getNetwork().chain;
                        yield ue._walletClient.sendTransaction({
                            chain: se,
                            account: K,
                            to: be,
                            data: we,
                            gas: Ne,
                            gasPrice: ae,
                            value: R
                        })
                    })()
                }
                convertNetworkToChain(K) {
                    return K === b.pt.ETH ? Ae.qop.Ethereum : K.name.toLowerCase()
                }
                switchToNetwork(K) {
                    var be = this;
                    return (0,
                    j.Z)(function*() {
                        yield be._ethereumClient?.switchNetwork({
                            chainId: K.chainEnum.id
                        })
                    })()
                }
                readContract(K, be, we, Ne=[]) {
                    var ae = this;
                    return (0,
                    j.Z)(function*() {
                        const R = ae._supportedChains[be];
                        if (!R)
                            throw new Error("Trying to read a token contract of an unsupported chain");
                        const ue = J(80787)
                          , se = ((yield ae.getAccount()) || null) ?? void 0;
                        return yield(0,
                        v.v)({
                            chain: R,
                            transport: (0,
                            E.d)(b.vl[R.id])
                        }).readContract({
                            account: se,
                            address: K,
                            abi: ue,
                            functionName: we,
                            args: Ne
                        })
                    })()
                }
                approve(K, be) {
                    var we = this;
                    return (0,
                    j.Z)(function*() {
                        if (!we._walletClient || !we._ethereumClient)
                            throw new Error("No client instance available to approve");
                        const Ne = J(80787)
                          , ae = we._ethereumClient.getNetwork().chain;
                        yield we._walletClient.writeContract({
                            chain: ae,
                            address: K,
                            abi: Ne,
                            functionName: "approve",
                            args: [be, we.MAX_INT]
                        })
                    })()
                }
                allowedTokenFor(K, be, we) {
                    var Ne = this;
                    return (0,
                    j.Z)(function*() {
                        try {
                            const ae = yield Ne.getAccount();
                            return yield Ne.readContract(K, we, "allowance", [ae, be])
                        } catch (ae) {
                            return console.error(ae),
                            BigInt(0)
                        }
                    })()
                }
                _loadWeb3Modal() {
                    var K = this;
                    return (0,
                    j.Z)(function*() {
                        const be = {
                            wagmiCore: (0,
                            Oe.D)(J.e(9373).then(J.bind(J, 89373))),
                            wagmiCoinbaseWallet: (0,
                            Oe.D)(J.e(7375).then(J.bind(J, 47375))),
                            wagmiInfura: (0,
                            Oe.D)(J.e(2229).then(J.bind(J, 92229))),
                            wagmiJsonRPC: (0,
                            Oe.D)(J.e(8592).then(J.bind(J, 13930))),
                            web3modalHtml: (0,
                            Oe.D)(Promise.all([J.e(3172), J.e(8592), J.e(5205)]).then(J.bind(J, 15205))),
                            web3modalEthereum: (0,
                            Oe.D)(Promise.all([J.e(8592), J.e(5545)]).then(J.bind(J, 55545))),
                            viemChains: (0,
                            Oe.D)(Promise.resolve().then(J.bind(J, 70599)))
                        }
                          , we = yield(0,
                        oe.n)((0,
                        te.D)(be))
                          , {configureChains: Ne, createConfig: ae} = we.wagmiCore
                          , {CoinbaseWalletConnector: R} = we.wagmiCoinbaseWallet
                          , {infuraProvider: ue} = we.wagmiInfura
                          , {jsonRpcProvider: se} = we.wagmiJsonRPC
                          , {Web3Modal: ye} = we.web3modalHtml
                          , {EthereumClient: Ee, w3mConnectors: he, w3mProvider: _e} = we.web3modalEthereum
                          , {arbitrum: Le, aurora: Be, avalanche: We, bsc: qe, cronos: Ze, fantom: Ve, mainnet: Br, optimism: ke, polygon: Nr} = we.viemChains
                          , Fr = [Br, qe, Le, Nr, Ve, We, Ze, Be, ke]
                          , Cr = "0ba5e6cc9cb13f1b358b4c021cef4be8"
                          , {publicClient: ir} = Ne(Fr, [ue({
                            apiKey: Ae.sJR.ETH
                        }), se({
                            rpc: pr=>({
                                http: b.vl[pr.id]
                            })
                        }), _e({
                            projectId: Cr
                        })])
                          , Pe = ae({
                            autoConnect: !0,
                            connectors: [...he({
                                chains: Fr,
                                projectId: Cr
                            }), ...K._isMobile() && [new R({
                                chains: Fr,
                                options: {
                                    appName: "Dextools.io"
                                }
                            })] || []],
                            publicClient: ir
                        });
                        K._supportedChains = {
                            1: Br,
                            10: ke,
                            25: Ze,
                            56: qe,
                            137: Nr,
                            250: Ve,
                            42161: Le,
                            43114: We,
                            1313161554: Be
                        },
                        K._ethereumClient = new Ee(Pe,Fr),
                        K._modal = new ye({
                            projectId: Cr,
                            explorerRecommendedWalletIds: ["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", "f5b4eeb6015d66be3f5940a895cbaa49ef3439e518cd771270e6b553b48f31d2", "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4"],
                            ...K._isMobile() && {
                                walletImages: {
                                    coinbaseWallet: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/a5ebc364-8f91-4200-fcc6-be81310a0000?projectId=0ba5e6cc9cb13f1b358b4c021cef4be8"
                                }
                            },
                            privacyPolicyUrl: "https://dextools.io/app/en#privacy-policy",
                            termsOfServiceUrl: "https://dextools.io/app/en#general-statement"
                        },K._ethereumClient),
                        K._modal.setTheme({
                            themeMode: K._theme,
                            themeVariables: K._themeVariables[K._theme]
                        }),
                        K._ethereumClient.watchAccount(function() {
                            var pr = (0,
                            j.Z)(function*({address: Lr, connector: rt, isConnected: Gr, isConnecting: ct, isReconnecting: tt}) {
                                if (!ct && !tt && Gr) {
                                    const _t = yield rt.getWalletClient();
                                    K._walletClient = _t.extend(F.I),
                                    K.accountChanged.next(Lr)
                                }
                            });
                            return function(Lr) {
                                return pr.apply(this, arguments)
                            }
                        }()),
                        K._ethereumClient.watchNetwork(pr=>{
                            if (K._isInitialNetworkCheck && pr.chain)
                                return K._isInitialNetworkCheck = !1,
                                void (K.selectedNetwork = Object.values(b.pt).find(Lr=>Lr.chainEnum.id === pr.chain?.id));
                            (null == pr.chain || pr.chain.id !== K.selectedNetwork.chainEnum.id) && location.reload()
                        }
                        )
                    })()
                }
                _isMobile() {
                    return this._platform.ANDROID || this._platform.IOS
                }
            }
            return X.\u0275fac = function(K) {
                return new (K || X)(N.LFG(z.t4),N.LFG(k.gb))
            }
            ,
            X.\u0275prov = N.Yz7({
                token: X,
                factory: X.\u0275fac,
                providedIn: null
            }),
            X
        }
        )()
    }
    ,
    19265: (wr,Ue,J)=>{
        "use strict";
        function j() {
            return j = Object.assign ? Object.assign.bind() : function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
            ,
            j.apply(this, arguments)
        }
        J.d(Ue, {
            m: ()=>Ss
        });
        var Ae = J(95961);
        function k(e) {
            return "number" == typeof e
        }
        function L(e) {
            return !(!e || "object" != typeof e || "function" != typeof e.constructor) && (!0 === e.isBigNumber && "object" == typeof e.constructor.prototype && !0 === e.constructor.prototype.isBigNumber || "function" == typeof e.constructor.isDecimal && !0 === e.constructor.isDecimal(e))
        }
        function Se(e) {
            return e && "object" == typeof e && !0 === Object.getPrototypeOf(e).isComplex || !1
        }
        function Me(e) {
            return e && "object" == typeof e && !0 === Object.getPrototypeOf(e).isFraction || !1
        }
        function Oe(e) {
            return e && !0 === e.constructor.prototype.isUnit || !1
        }
        function oe(e) {
            return "string" == typeof e
        }
        var te = Array.isArray;
        function T(e) {
            return e && !0 === e.constructor.prototype.isMatrix || !1
        }
        function v(e) {
            return Array.isArray(e) || T(e)
        }
        function E(e) {
            return e && e.isDenseMatrix && !0 === e.constructor.prototype.isMatrix || !1
        }
        function F(e) {
            return e && e.isSparseMatrix && !0 === e.constructor.prototype.isMatrix || !1
        }
        function b(e) {
            return e && !0 === e.constructor.prototype.isRange || !1
        }
        function N(e) {
            return e && !0 === e.constructor.prototype.isIndex || !1
        }
        function z(e) {
            return "boolean" == typeof e
        }
        function W(e) {
            return e && !0 === e.constructor.prototype.isResultSet || !1
        }
        function X(e) {
            return e && !0 === e.constructor.prototype.isHelp || !1
        }
        function xe(e) {
            return "function" == typeof e
        }
        function K(e) {
            return e instanceof Date
        }
        function be(e) {
            return e instanceof RegExp
        }
        function we(e) {
            return !(!e || "object" != typeof e || e.constructor !== Object || Se(e) || Me(e))
        }
        function Ne(e) {
            return null === e
        }
        function ae(e) {
            return void 0 === e
        }
        function R(e) {
            return e && !0 === e.isAccessorNode && !0 === e.constructor.prototype.isNode || !1
        }
        function ue(e) {
            return e && !0 === e.isArrayNode && !0 === e.constructor.prototype.isNode || !1
        }
        function se(e) {
            return e && !0 === e.isAssignmentNode && !0 === e.constructor.prototype.isNode || !1
        }
        function ye(e) {
            return e && !0 === e.isBlockNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Ee(e) {
            return e && !0 === e.isConditionalNode && !0 === e.constructor.prototype.isNode || !1
        }
        function he(e) {
            return e && !0 === e.isConstantNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Le(e) {
            return e && !0 === e.isFunctionAssignmentNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Be(e) {
            return e && !0 === e.isFunctionNode && !0 === e.constructor.prototype.isNode || !1
        }
        function We(e) {
            return e && !0 === e.isIndexNode && !0 === e.constructor.prototype.isNode || !1
        }
        function qe(e) {
            return e && !0 === e.isNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Ze(e) {
            return e && !0 === e.isObjectNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Ve(e) {
            return e && !0 === e.isOperatorNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Br(e) {
            return e && !0 === e.isParenthesisNode && !0 === e.constructor.prototype.isNode || !1
        }
        function ke(e) {
            return e && !0 === e.isRangeNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Nr(e) {
            return e && !0 === e.isRelationalNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Fr(e) {
            return e && !0 === e.isSymbolNode && !0 === e.constructor.prototype.isNode || !1
        }
        function Cr(e) {
            return e && !0 === e.constructor.prototype.isChain || !1
        }
        function ir(e) {
            var r = typeof e;
            return "object" === r ? null === e ? "null" : L(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : r
        }
        function Pe(e) {
            var r = typeof e;
            if ("number" === r || "string" === r || "boolean" === r || null == e)
                return e;
            if ("function" == typeof e.clone)
                return e.clone();
            if (Array.isArray(e))
                return e.map(function(t) {
                    return Pe(t)
                });
            if (e instanceof Date)
                return new Date(e.valueOf());
            if (L(e))
                return e;
            if (e instanceof RegExp)
                throw new TypeError("Cannot clone " + e);
            return pr(e, Pe)
        }
        function pr(e, r) {
            var t = {};
            for (var n in e)
                er(e, n) && (t[n] = r(e[n]));
            return t
        }
        function Lr(e, r) {
            for (var t in r)
                er(r, t) && (e[t] = r[t]);
            return e
        }
        function rt(e, r) {
            if (Array.isArray(r))
                throw new TypeError("Arrays are not supported by deepExtend");
            for (var t in r)
                if (er(r, t) && !(t in Object.prototype) && !(t in Function.prototype))
                    if (r[t] && r[t].constructor === Object)
                        void 0 === e[t] && (e[t] = {}),
                        e[t] && e[t].constructor === Object ? rt(e[t], r[t]) : e[t] = r[t];
                    else {
                        if (Array.isArray(r[t]))
                            throw new TypeError("Arrays are not supported by deepExtend");
                        e[t] = r[t]
                    }
            return e
        }
        function Gr(e, r) {
            var t, n, i;
            if (Array.isArray(e)) {
                if (!Array.isArray(r) || e.length !== r.length)
                    return !1;
                for (n = 0,
                i = e.length; n < i; n++)
                    if (!Gr(e[n], r[n]))
                        return !1;
                return !0
            }
            if ("function" == typeof e)
                return e === r;
            if (e instanceof Object) {
                if (Array.isArray(r) || !(r instanceof Object))
                    return !1;
                for (t in e)
                    if (!(t in r) || !Gr(e[t], r[t]))
                        return !1;
                for (t in r)
                    if (!(t in e))
                        return !1;
                return !0
            }
            return e === r
        }
        function ct(e) {
            var r = {};
            return tt(e, r),
            r
        }
        function tt(e, r) {
            for (var t in e)
                if (er(e, t)) {
                    var n = e[t];
                    "object" == typeof n && null !== n ? tt(n, r) : r[t] = n
                }
        }
        function nt(e, r, t) {
            var i, n = !0;
            Object.defineProperty(e, r, {
                get: function() {
                    return n && (i = t(),
                    n = !1),
                    i
                },
                set: function(s) {
                    i = s,
                    n = !1
                },
                configurable: !0,
                enumerable: !0
            })
        }
        function er(e, r) {
            return e && Object.hasOwnProperty.call(e, r)
        }
        function dt(e) {
            return Object.keys(e).map(r=>e[r])
        }
        var xt = J(56958);
        function me(e, r, t, n) {
            function i(u) {
                var s = function Nt(e, r) {
                    for (var t = {}, n = 0; n < r.length; n++) {
                        var i = r[n]
                          , u = e[i];
                        void 0 !== u && (t[i] = u)
                    }
                    return t
                }(u, r.map(I));
                return function g(e, r, t) {
                    var n = r.filter(u=>!function _(e) {
                        return e && "?" === e[0]
                    }(u)).every(u=>void 0 !== t[u]);
                    if (!n) {
                        var i = r.filter(u=>void 0 === t[u]);
                        throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(i.map(u=>'"'.concat(u, '"')).join(", "), "."))
                    }
                }(e, r, u),
                t(s)
            }
            return i.isFactory = !0,
            i.fn = e,
            i.dependencies = r.slice().sort(),
            n && (i.meta = n),
            i
        }
        function Or(e) {
            return "function" == typeof e && "string" == typeof e.fn && Array.isArray(e.dependencies)
        }
        function I(e) {
            return e && "?" === e[0] ? e.slice(1) : e
        }
        function P(e) {
            return "boolean" == typeof e || !!isFinite(e) && e === Math.round(e)
        }
        function Fe(e, r, t) {
            var i = {
                2: "0b",
                8: "0o",
                16: "0x"
            }[r]
              , u = "";
            if (t) {
                if (t < 1)
                    throw new Error("size must be in greater than 0");
                if (!P(t))
                    throw new Error("size must be an integer");
                if (e > 2 ** (t - 1) - 1 || e < -(2 ** (t - 1)))
                    throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
                if (!P(e))
                    throw new Error("Value must be an integer");
                e < 0 && (e += 2 ** t),
                u = "i".concat(t)
            }
            var s = "";
            return e < 0 && (e = -e,
            s = "-"),
            "".concat(s).concat(i).concat(e.toString(r)).concat(u)
        }
        function re(e, r) {
            if ("function" == typeof r)
                return r(e);
            if (e === 1 / 0)
                return "Infinity";
            if (e === -1 / 0)
                return "-Infinity";
            if (isNaN(e))
                return "NaN";
            var n, i, t = "auto";
            if (r && (r.notation && (t = r.notation),
            k(r) ? n = r : k(r.precision) && (n = r.precision),
            r.wordSize && "number" != typeof (i = r.wordSize)))
                throw new Error('Option "wordSize" must be a number');
            switch (t) {
            case "fixed":
                return function fr(e, r) {
                    if (isNaN(e) || !isFinite(e))
                        return String(e);
                    var t = rr(e)
                      , n = "number" == typeof r ? Xe(t, t.exponent + 1 + r) : t
                      , i = n.coefficients
                      , u = n.exponent + 1
                      , s = u + (r || 0);
                    return i.length < s && (i = i.concat(ar(s - i.length))),
                    u < 0 && (i = ar(1 - u).concat(i),
                    u = 1),
                    u < i.length && i.splice(u, 0, 0 === u ? "0." : "."),
                    n.sign + i.join("")
                }(e, n);
            case "exponential":
                return Qe(e, n);
            case "engineering":
                return function ur(e, r) {
                    if (isNaN(e) || !isFinite(e))
                        return String(e);
                    var n = Xe(rr(e), r)
                      , i = n.exponent
                      , u = n.coefficients
                      , s = i % 3 == 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
                    if (k(r))
                        for (; r > u.length || i - s + 1 > u.length; )
                            u.push(0);
                    else
                        for (var f = Math.abs(i - s) - (u.length - 1), c = 0; c < f; c++)
                            u.push(0);
                    for (var d = Math.abs(i - s), o = 1; d > 0; )
                        o++,
                        d--;
                    var l = u.slice(o).join("")
                      , D = k(r) && l.length || l.match(/[1-9]/) ? "." + l : ""
                      , y = u.slice(0, o).join("") + D + "e" + (i >= 0 ? "+" : "") + s.toString();
                    return n.sign + y
                }(e, n);
            case "bin":
                return Fe(e, 2, i);
            case "oct":
                return Fe(e, 8, i);
            case "hex":
                return Fe(e, 16, i);
            case "auto":
                return function mr(e, r, t) {
                    if (isNaN(e) || !isFinite(e))
                        return String(e);
                    var n = t && void 0 !== t.lowerExp ? t.lowerExp : -3
                      , i = t && void 0 !== t.upperExp ? t.upperExp : 5
                      , u = rr(e)
                      , s = r ? Xe(u, r) : u;
                    if (s.exponent < n || s.exponent >= i)
                        return Qe(e, r);
                    var f = s.coefficients
                      , c = s.exponent;
                    f.length < r && (f = f.concat(ar(r - f.length))),
                    f = f.concat(ar(c - f.length + 1 + (f.length < r ? r - f.length : 0)));
                    var d = c > 0 ? c : 0;
                    return d < (f = ar(-c).concat(f)).length - 1 && f.splice(d + 1, 0, "."),
                    s.sign + f.join("")
                }(e, n, r && r).replace(/((\.\d*?)(0+))($|e)/, function() {
                    var u = arguments[2]
                      , s = arguments[4];
                    return "." !== u ? u + s : s
                });
            default:
                throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
            }
        }
        function rr(e) {
            var r = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
            if (!r)
                throw new SyntaxError("Invalid number " + e);
            var t = r[1]
              , n = r[2]
              , i = parseFloat(r[4] || "0")
              , u = n.indexOf(".");
            i += -1 !== u ? u - 1 : n.length - 1;
            var s = n.replace(".", "").replace(/^0*/, function(f) {
                return i -= f.length,
                ""
            }).replace(/0*$/, "").split("").map(function(f) {
                return parseInt(f)
            });
            return 0 === s.length && (s.push(0),
            i++),
            {
                sign: t,
                coefficients: s,
                exponent: i
            }
        }
        function Qe(e, r) {
            if (isNaN(e) || !isFinite(e))
                return String(e);
            var t = rr(e)
              , n = r ? Xe(t, r) : t
              , i = n.coefficients
              , u = n.exponent;
            i.length < r && (i = i.concat(ar(r - i.length)));
            var s = i.shift();
            return n.sign + s + (i.length > 0 ? "." + i.join("") : "") + "e" + (u >= 0 ? "+" : "") + u
        }
        function Xe(e, r) {
            for (var t = {
                sign: e.sign,
                coefficients: e.coefficients,
                exponent: e.exponent
            }, n = t.coefficients; r <= 0; )
                n.unshift(0),
                t.exponent++,
                r++;
            if (n.length > r && n.splice(r, n.length - r)[0] >= 5) {
                var u = r - 1;
                for (n[u]++; 10 === n[u]; )
                    n.pop(),
                    0 === u && (n.unshift(0),
                    t.exponent++,
                    u++),
                    n[--u]++
            }
            return t
        }
        function ar(e) {
            for (var r = [], t = 0; t < e; t++)
                r.push(0);
            return r
        }
        Math,
        Math,
        Math,
        Math,
        Math,
        Math;
        var dr = Number.EPSILON || 2220446049250313e-31;
        function xr(e, r, t) {
            if (null == t)
                return e === r;
            if (e === r)
                return !0;
            if (isNaN(e) || isNaN(r))
                return !1;
            if (isFinite(e) && isFinite(r)) {
                var n = Math.abs(e - r);
                return n < dr || n <= Math.max(Math.abs(e), Math.abs(r)) * t
            }
            return !1
        }
        function vt(e, r, t) {
            var i = new (0,
            e.constructor)(2)
              , u = "";
            if (t) {
                if (t < 1)
                    throw new Error("size must be in greater than 0");
                if (!P(t))
                    throw new Error("size must be an integer");
                if (e.greaterThan(i.pow(t - 1).sub(1)) || e.lessThan(i.pow(t - 1).mul(-1)))
                    throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
                if (!e.isInteger())
                    throw new Error("Value must be an integer");
                e.lessThan(0) && (e = e.add(i.pow(t))),
                u = "i".concat(t)
            }
            switch (r) {
            case 2:
                return "".concat(e.toBinary()).concat(u);
            case 8:
                return "".concat(e.toOctal()).concat(u);
            case 16:
                return "".concat(e.toHexadecimal()).concat(u);
            default:
                throw new Error("Base ".concat(r, " not supported "))
            }
        }
        function Ot(e, r) {
            return void 0 !== r ? e.toExponential(r - 1) : e.toExponential()
        }
        function Ke(e, r) {
            var t = function an(e, r) {
                return "number" == typeof e ? re(e, r) : L(e) ? function tn(e, r) {
                    if ("function" == typeof r)
                        return r(e);
                    if (!e.isFinite())
                        return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
                    var n, i, t = "auto";
                    if (void 0 !== r && (r.notation && (t = r.notation),
                    "number" == typeof r ? n = r : void 0 !== r.precision && (n = r.precision),
                    r.wordSize && "number" != typeof (i = r.wordSize)))
                        throw new Error('Option "wordSize" must be a number');
                    switch (t) {
                    case "fixed":
                        return function un(e, r) {
                            return e.toFixed(r)
                        }(e, n);
                    case "exponential":
                        return Ot(e, n);
                    case "engineering":
                        return function nn(e, r) {
                            var t = e.e
                              , n = t % 3 == 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3
                              , u = e.mul(Math.pow(10, -n)).toPrecision(r);
                            return -1 !== u.indexOf("e") && (u = new (0,
                            e.constructor)(u).toFixed()),
                            u + "e" + (t >= 0 ? "+" : "") + n.toString()
                        }(e, n);
                    case "bin":
                        return vt(e, 2, i);
                    case "oct":
                        return vt(e, 8, i);
                    case "hex":
                        return vt(e, 16, i);
                    case "auto":
                        var u = r && void 0 !== r.lowerExp ? r.lowerExp : -3
                          , s = r && void 0 !== r.upperExp ? r.upperExp : 5;
                        if (e.isZero())
                            return "0";
                        var c = e.toSignificantDigits(n)
                          , d = c.e;
                        return (d >= u && d < s ? c.toFixed() : Ot(e, n)).replace(/((\.\d*?)(0+))($|e)/, function() {
                            var o = arguments[2]
                              , l = arguments[4];
                            return "." !== o ? o + l : l
                        });
                    default:
                        throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')
                    }
                }(e, r) : function on(e) {
                    return e && "object" == typeof e && "number" == typeof e.s && "number" == typeof e.n && "number" == typeof e.d || !1
                }(e) ? r && "decimal" === r.fraction ? e.toString() : e.s * e.n + "/" + e.d : Array.isArray(e) ? It(e, r) : oe(e) ? '"' + e + '"' : "function" == typeof e ? e.syntax ? String(e.syntax) : "function" : e && "object" == typeof e ? "function" == typeof e.format ? e.format(r) : e && e.toString(r) !== {}.toString() ? e.toString(r) : "{" + Object.keys(e).map(n=>'"' + n + '": ' + Ke(e[n], r)).join(", ") + "}" : String(e)
            }(e, r);
            return r && "object" == typeof r && "truncate"in r && t.length > r.truncate ? t.substring(0, r.truncate - 3) + "..." : t
        }
        function It(e, r) {
            if (Array.isArray(e)) {
                for (var t = "[", n = e.length, i = 0; i < n; i++)
                    0 !== i && (t += ", "),
                    t += It(e[i], r);
                return t + "]"
            }
            return Ke(e, r)
        }
        function Te(e, r, t) {
            if (!(this instanceof Te))
                throw new SyntaxError("Constructor must be called with the new operator");
            this.actual = e,
            this.expected = r,
            this.relation = t,
            this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + ")",
            this.stack = (new Error).stack
        }
        function zr(e, r, t) {
            if (!(this instanceof zr))
                throw new SyntaxError("Constructor must be called with the new operator");
            this.index = e,
            arguments.length < 3 ? (this.min = 0,
            this.max = r) : (this.min = r,
            this.max = t),
            this.message = void 0 !== this.min && this.index < this.min ? "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : "Index out of range (" + this.index + ")",
            this.stack = (new Error).stack
        }
        function br(e) {
            for (var r = []; Array.isArray(e); )
                r.push(e.length),
                e = e[0];
            return r
        }
        function Pt(e, r, t) {
            var n, i = e.length;
            if (i !== r[t])
                throw new Te(i,r[t]);
            if (t < r.length - 1) {
                var u = t + 1;
                for (n = 0; n < i; n++) {
                    if (!Array.isArray(e[n]))
                        throw new Te(r.length - 1,r.length,"<");
                    Pt(e[n], r, u)
                }
            } else
                for (n = 0; n < i; n++)
                    if (Array.isArray(e[n]))
                        throw new Te(r.length + 1,r.length,">")
        }
        function zt(e, r) {
            if (0 === r.length) {
                if (Array.isArray(e))
                    throw new Te(e.length,0)
            } else
                Pt(e, r, 0)
        }
        function Ge(e, r) {
            if (!k(e) || !P(e))
                throw new TypeError("Index must be an integer (value: " + e + ")");
            if (e < 0 || "number" == typeof r && e >= r)
                throw new zr(e,r)
        }
        function pt(e, r, t) {
            if (!Array.isArray(e) || !Array.isArray(r))
                throw new TypeError("Array expected");
            if (0 === r.length)
                throw new Error("Resizing to scalar is not supported");
            return r.forEach(function(i) {
                if (!k(i) || !P(i) || i < 0)
                    throw new TypeError("Invalid size, must contain positive integers (size: " + Ke(r) + ")")
            }),
            mt(e, r, 0, void 0 !== t ? t : 0),
            e
        }
        function mt(e, r, t, n) {
            var i, u, f = r[t], c = Math.min(e.length, f);
            if (e.length = f,
            t < r.length - 1) {
                var d = t + 1;
                for (i = 0; i < c; i++)
                    u = e[i],
                    Array.isArray(u) || (e[i] = u = [u]),
                    mt(u, r, d, n);
                for (i = c; i < f; i++)
                    e[i] = u = [],
                    mt(u, r, d, n)
            } else {
                for (i = 0; i < c; i++)
                    for (; Array.isArray(e[i]); )
                        e[i] = e[i][0];
                for (i = c; i < f; i++)
                    e[i] = n
            }
        }
        function gt(e, r) {
            var t = Ut(e)
              , n = e.slice()
              , u = e.indexOf(-1);
            if (e.indexOf(-1, u + 1) >= 0)
                throw new Error("More than one wildcard in sizes");
            if (u >= 0) {
                if (r % t != 0)
                    throw new Error("Could not replace wildcard, since " + r + " is no multiple of " + -t);
                n[u] = -r / t
            }
            return n
        }
        function Ut(e) {
            return e.reduce((r,t)=>r * t, 1)
        }
        function yt(e, r, t, n) {
            var i = n || br(e);
            if (t)
                for (var u = 0; u < t; u++)
                    e = [e],
                    i.unshift(1);
            for (e = Rt(e, r, 0); i.length < r; )
                i.push(1);
            return e
        }
        function Rt(e, r, t) {
            var n, i;
            if (Array.isArray(e)) {
                var u = t + 1;
                for (n = 0,
                i = e.length; n < i; n++)
                    e[n] = Rt(e[n], r, u)
            } else
                for (var s = t; s < r; s++)
                    e = [e];
            return e
        }
        function Lt(e, r) {
            for (var t, n = 0, i = 0; i < e.length; i++) {
                var u = e[i]
                  , s = Array.isArray(u);
                if (0 === i && s && (n = u.length),
                s && u.length !== n)
                    return;
                var f = s ? Lt(u, r) : r(u);
                if (void 0 === t)
                    t = f;
                else if (t !== f)
                    return "mixed"
            }
            return t
        }
        function zn(e, r) {
            return -1 !== e.indexOf(r)
        }
        function et(e, r, t, n) {
            if (!(this instanceof et))
                throw new SyntaxError("Constructor must be called with the new operator");
            this.fn = e,
            this.count = r,
            this.min = t,
            this.max = n,
            this.message = "Wrong number of arguments in function " + e + " (" + r + " provided, " + t + (null != n ? "-" + n : "") + " expected)",
            this.stack = (new Error).stack
        }
        Math,
        Math,
        Math,
        Math,
        Math,
        Math,
        (Te.prototype = new RangeError).constructor = RangeError,
        Te.prototype.name = "DimensionError",
        Te.prototype.isDimensionError = !0,
        (zr.prototype = new RangeError).constructor = RangeError,
        zr.prototype.name = "IndexError",
        zr.prototype.isIndexError = !0,
        (et.prototype = new Error).constructor = Error,
        et.prototype.name = "ArgumentsError",
        et.prototype.isArgumentsError = !0;
        var Un = {
            epsilon: 1e-12,
            matrix: "Matrix",
            number: "number",
            precision: 64,
            predictable: !1,
            randomSeed: null
        }
          , Rn = ["Matrix", "Array"]
          , Ln = ["number", "BigNumber", "Fraction"];
        function Zi(e, r) {
            function t(n) {
                if (n) {
                    var i = pr(e, Pe);
                    Wn(n, "matrix", Rn),
                    Wn(n, "number", Ln),
                    rt(e, n);
                    var u = pr(e, Pe)
                      , s = pr(n, Pe);
                    return r("config", u, i, s),
                    u
                }
                return pr(e, Pe)
            }
            return t.MATRIX_OPTIONS = Rn,
            t.NUMBER_OPTIONS = Ln,
            Object.keys(Un).forEach(n=>{
                Object.defineProperty(t, n, {
                    get: ()=>e[n],
                    enumerable: !0,
                    configurable: !0
                })
            }
            ),
            t
        }
        function Wn(e, r, t) {
            void 0 !== e[r] && !function Hi(e, r) {
                return -1 !== e.indexOf(r)
            }(t, e[r]) && console.warn('Warning: Unknown value "' + e[r] + '" for configuration option "' + r + '". Available options: ' + t.map(n=>JSON.stringify(n)).join(", ") + ".")
        }
        var Zn, Wr, at = 9e15, Jr = 1e9, ln = "0123456789abcdef", Wt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", dn = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -at,
            maxE: at,
            crypto: !1
        }, ge = !0, Zt = "[DecimalError] ", Yr = Zt + "Invalid argument: ", Hn = Zt + "Precision limit exceeded", Vn = Zt + "crypto unavailable", Kn = "[object Decimal]", gr = Math.floor, or = Math.pow, Vi = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ki = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Gi = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Gn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ir = 1e7, pe = 7, Ji = Wt.length - 1, hn = qt.length - 1, Z = {
            toStringTag: Kn
        };
        function hr(e) {
            var r, t, n, i = e.length - 1, u = "", s = e[0];
            if (i > 0) {
                for (u += s,
                r = 1; r < i; r++)
                    (t = pe - (n = e[r] + "").length) && (u += Xr(t)),
                    u += n;
                (t = pe - (n = (s = e[r]) + "").length) && (u += Xr(t))
            } else if (0 === s)
                return "0";
            for (; s % 10 == 0; )
                s /= 10;
            return u + s
        }
        function Mr(e, r, t) {
            if (e !== ~~e || e < r || e > t)
                throw Error(Yr + e)
        }
        function At(e, r, t, n) {
            var i, u, s, f;
            for (u = e[0]; u >= 10; u /= 10)
                --r;
            return --r < 0 ? (r += pe,
            i = 0) : (i = Math.ceil((r + 1) / pe),
            r %= pe),
            u = or(10, pe - r),
            f = e[i] % u | 0,
            null == n ? r < 3 ? (0 == r ? f = f / 100 | 0 : 1 == r && (f = f / 10 | 0),
            s = t < 4 && 99999 == f || t > 3 && 49999 == f || 5e4 == f || 0 == f) : s = (t < 4 && f + 1 == u || t > 3 && f + 1 == u / 2) && (e[i + 1] / u / 100 | 0) == or(10, r - 2) - 1 || (f == u / 2 || 0 == f) && 0 == (e[i + 1] / u / 100 | 0) : r < 4 ? (0 == r ? f = f / 1e3 | 0 : 1 == r ? f = f / 100 | 0 : 2 == r && (f = f / 10 | 0),
            s = (n || t < 4) && 9999 == f || !n && t > 3 && 4999 == f) : s = ((n || t < 4) && f + 1 == u || !n && t > 3 && f + 1 == u / 2) && (e[i + 1] / u / 1e3 | 0) == or(10, r - 3) - 1,
            s
        }
        function Ht(e, r, t) {
            for (var n, u, i = [0], s = 0, f = e.length; s < f; ) {
                for (u = i.length; u--; )
                    i[u] *= r;
                for (i[0] += ln.indexOf(e.charAt(s++)),
                n = 0; n < i.length; n++)
                    i[n] > t - 1 && (void 0 === i[n + 1] && (i[n + 1] = 0),
                    i[n + 1] += i[n] / t | 0,
                    i[n] %= t)
            }
            return i.reverse()
        }
        Z.absoluteValue = Z.abs = function() {
            var e = new this.constructor(this);
            return e.s < 0 && (e.s = 1),
            ce(e)
        }
        ,
        Z.ceil = function() {
            return ce(new this.constructor(this), this.e + 1, 2)
        }
        ,
        Z.clampedTo = Z.clamp = function(e, r) {
            var n = this
              , i = n.constructor;
            if (e = new i(e),
            r = new i(r),
            !e.s || !r.s)
                return new i(NaN);
            if (e.gt(r))
                throw Error(Yr + r);
            return n.cmp(e) < 0 ? e : n.cmp(r) > 0 ? r : new i(n)
        }
        ,
        Z.comparedTo = Z.cmp = function(e) {
            var r, t, n, i, u = this, s = u.d, f = (e = new u.constructor(e)).d, c = u.s, d = e.s;
            if (!s || !f)
                return c && d ? c !== d ? c : s === f ? 0 : !s ^ c < 0 ? 1 : -1 : NaN;
            if (!s[0] || !f[0])
                return s[0] ? c : f[0] ? -d : 0;
            if (c !== d)
                return c;
            if (u.e !== e.e)
                return u.e > e.e ^ c < 0 ? 1 : -1;
            for (r = 0,
            t = (n = s.length) < (i = f.length) ? n : i; r < t; ++r)
                if (s[r] !== f[r])
                    return s[r] > f[r] ^ c < 0 ? 1 : -1;
            return n === i ? 0 : n > i ^ c < 0 ? 1 : -1
        }
        ,
        Z.cosine = Z.cos = function() {
            var e, r, t = this, n = t.constructor;
            return t.d ? t.d[0] ? (r = n.rounding,
            n.precision = (e = n.precision) + Math.max(t.e, t.sd()) + pe,
            n.rounding = 1,
            t = function Yi(e, r) {
                var t, n, i;
                if (r.isZero())
                    return r;
                (n = r.d.length) < 32 ? i = (1 / Gt(4, t = Math.ceil(n / 3))).toString() : (t = 16,
                i = "2.3283064365386962890625e-10"),
                e.precision += t,
                r = ot(e, 1, r.times(i), new e(1));
                for (var u = t; u--; ) {
                    var s = r.times(r);
                    r = s.times(s).minus(s).times(8).plus(1)
                }
                return e.precision -= t,
                r
            }(n, jn(n, t)),
            n.precision = e,
            n.rounding = r,
            ce(2 == Wr || 3 == Wr ? t.neg() : t, e, r, !0)) : new n(1) : new n(NaN)
        }
        ,
        Z.cubeRoot = Z.cbrt = function() {
            var e, r, t, n, i, u, s, f, c, d, o = this, l = o.constructor;
            if (!o.isFinite() || o.isZero())
                return new l(o);
            for (ge = !1,
            (u = o.s * or(o.s * o, 1 / 3)) && Math.abs(u) != 1 / 0 ? n = new l(u.toString()) : (t = hr(o.d),
            (u = ((e = o.e) - t.length + 1) % 3) && (t += 1 == u || -2 == u ? "0" : "00"),
            u = or(t, 1 / 3),
            e = gr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
            (n = new l(t = u == 1 / 0 ? "5e" + e : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + e)).s = o.s),
            s = (e = l.precision) + 3; ; )
                if (d = (c = (f = n).times(f).times(f)).plus(o),
                n = He(d.plus(o).times(f), d.plus(c), s + 2, 1),
                hr(f.d).slice(0, s) === (t = hr(n.d)).slice(0, s)) {
                    if ("9999" != (t = t.slice(s - 3, s + 1)) && (i || "4999" != t)) {
                        (!+t || !+t.slice(1) && "5" == t.charAt(0)) && (ce(n, e + 1, 1),
                        r = !n.times(n).times(n).eq(o));
                        break
                    }
                    if (!i && (ce(f, e + 1, 0),
                    f.times(f).times(f).eq(o))) {
                        n = f;
                        break
                    }
                    s += 4,
                    i = 1
                }
            return ge = !0,
            ce(n, e, l.rounding, r)
        }
        ,
        Z.decimalPlaces = Z.dp = function() {
            var e, r = this.d, t = NaN;
            if (r) {
                if (t = ((e = r.length - 1) - gr(this.e / pe)) * pe,
                e = r[e])
                    for (; e % 10 == 0; e /= 10)
                        t--;
                t < 0 && (t = 0)
            }
            return t
        }
        ,
        Z.dividedBy = Z.div = function(e) {
            return He(this, new this.constructor(e))
        }
        ,
        Z.dividedToIntegerBy = Z.divToInt = function(e) {
            var t = this.constructor;
            return ce(He(this, new t(e), 0, 1, 1), t.precision, t.rounding)
        }
        ,
        Z.equals = Z.eq = function(e) {
            return 0 === this.cmp(e)
        }
        ,
        Z.floor = function() {
            return ce(new this.constructor(this), this.e + 1, 3)
        }
        ,
        Z.greaterThan = Z.gt = function(e) {
            return this.cmp(e) > 0
        }
        ,
        Z.greaterThanOrEqualTo = Z.gte = function(e) {
            var r = this.cmp(e);
            return 1 == r || 0 === r
        }
        ,
        Z.hyperbolicCosine = Z.cosh = function() {
            var e, r, t, n, i, u = this, s = u.constructor, f = new s(1);
            if (!u.isFinite())
                return new s(u.s ? 1 / 0 : NaN);
            if (u.isZero())
                return f;
            n = s.rounding,
            s.precision = (t = s.precision) + Math.max(u.e, u.sd()) + 4,
            s.rounding = 1,
            (i = u.d.length) < 32 ? r = (1 / Gt(4, e = Math.ceil(i / 3))).toString() : (e = 16,
            r = "2.3283064365386962890625e-10"),
            u = ot(s, 1, u.times(r), new s(1), !0);
            for (var c, d = e, o = new s(8); d--; )
                c = u.times(u),
                u = f.minus(c.times(o.minus(c.times(o))));
            return ce(u, s.precision = t, s.rounding = n, !0)
        }
        ,
        Z.hyperbolicSine = Z.sinh = function() {
            var e, r, t, n, i = this, u = i.constructor;
            if (!i.isFinite() || i.isZero())
                return new u(i);
            if (t = u.rounding,
            u.precision = (r = u.precision) + Math.max(i.e, i.sd()) + 4,
            u.rounding = 1,
            (n = i.d.length) < 3)
                i = ot(u, 2, i, i, !0);
            else {
                e = 1.4 * Math.sqrt(n),
                i = ot(u, 2, i = i.times(1 / Gt(5, e = e > 16 ? 16 : 0 | e)), i, !0);
                for (var s, f = new u(5), c = new u(16), d = new u(20); e--; )
                    s = i.times(i),
                    i = i.times(f.plus(s.times(c.times(s).plus(d))))
            }
            return u.precision = r,
            u.rounding = t,
            ce(i, r, t, !0)
        }
        ,
        Z.hyperbolicTangent = Z.tanh = function() {
            var e, r, t = this, n = t.constructor;
            return t.isFinite() ? t.isZero() ? new n(t) : (r = n.rounding,
            n.precision = (e = n.precision) + 7,
            n.rounding = 1,
            He(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s)
        }
        ,
        Z.inverseCosine = Z.acos = function() {
            var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, u = t.rounding;
            return -1 !== n ? 0 === n ? r.isNeg() ? Pr(t, i, u) : new t(0) : new t(NaN) : r.isZero() ? Pr(t, i + 4, u).times(.5) : (t.precision = i + 6,
            t.rounding = 1,
            r = r.asin(),
            e = Pr(t, i + 4, u).times(.5),
            t.precision = i,
            t.rounding = u,
            e.minus(r))
        }
        ,
        Z.inverseHyperbolicCosine = Z.acosh = function() {
            var e, r, t = this, n = t.constructor;
            return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (r = n.rounding,
            n.precision = (e = n.precision) + Math.max(Math.abs(t.e), t.sd()) + 4,
            n.rounding = 1,
            ge = !1,
            t = t.times(t).minus(1).sqrt().plus(t),
            ge = !0,
            n.precision = e,
            n.rounding = r,
            t.ln()) : new n(t)
        }
        ,
        Z.inverseHyperbolicSine = Z.asinh = function() {
            var e, r, t = this, n = t.constructor;
            return !t.isFinite() || t.isZero() ? new n(t) : (r = n.rounding,
            n.precision = (e = n.precision) + 2 * Math.max(Math.abs(t.e), t.sd()) + 6,
            n.rounding = 1,
            ge = !1,
            t = t.times(t).plus(1).sqrt().plus(t),
            ge = !0,
            n.precision = e,
            n.rounding = r,
            t.ln())
        }
        ,
        Z.inverseHyperbolicTangent = Z.atanh = function() {
            var e, r, t, n, i = this, u = i.constructor;
            return i.isFinite() ? i.e >= 0 ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = u.precision,
            r = u.rounding,
            n = i.sd(),
            Math.max(n, e) < 2 * -i.e - 1 ? ce(new u(i), e, r, !0) : (u.precision = t = n - i.e,
            i = He(i.plus(1), new u(1).minus(i), t + e, 1),
            u.precision = e + 4,
            u.rounding = 1,
            i = i.ln(),
            u.precision = e,
            u.rounding = r,
            i.times(.5))) : new u(NaN)
        }
        ,
        Z.inverseSine = Z.asin = function() {
            var e, r, t, n, i = this, u = i.constructor;
            return i.isZero() ? new u(i) : (r = i.abs().cmp(1),
            t = u.precision,
            n = u.rounding,
            -1 !== r ? 0 === r ? ((e = Pr(u, t + 4, n).times(.5)).s = i.s,
            e) : new u(NaN) : (u.precision = t + 6,
            u.rounding = 1,
            i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan(),
            u.precision = t,
            u.rounding = n,
            i.times(2)))
        }
        ,
        Z.inverseTangent = Z.atan = function() {
            var e, r, t, n, i, u, s, f, c, d = this, o = d.constructor, l = o.precision, D = o.rounding;
            if (d.isFinite()) {
                if (d.isZero())
                    return new o(d);
                if (d.abs().eq(1) && l + 4 <= hn)
                    return (s = Pr(o, l + 4, D).times(.25)).s = d.s,
                    s
            } else {
                if (!d.s)
                    return new o(NaN);
                if (l + 4 <= hn)
                    return (s = Pr(o, l + 4, D).times(.5)).s = d.s,
                    s
            }
            for (o.precision = f = l + 10,
            o.rounding = 1,
            e = t = Math.min(28, f / pe + 2 | 0); e; --e)
                d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (ge = !1,
            r = Math.ceil(f / pe),
            n = 1,
            c = d.times(d),
            s = new o(d),
            i = d; -1 !== e; )
                if (i = i.times(c),
                u = s.minus(i.div(n += 2)),
                i = i.times(c),
                void 0 !== (s = u.plus(i.div(n += 2))).d[r])
                    for (e = r; s.d[e] === u.d[e] && e--; )
                        ;
            return t && (s = s.times(2 << t - 1)),
            ge = !0,
            ce(s, o.precision = l, o.rounding = D, !0)
        }
        ,
        Z.isFinite = function() {
            return !!this.d
        }
        ,
        Z.isInteger = Z.isInt = function() {
            return !!this.d && gr(this.e / pe) > this.d.length - 2
        }
        ,
        Z.isNaN = function() {
            return !this.s
        }
        ,
        Z.isNegative = Z.isNeg = function() {
            return this.s < 0
        }
        ,
        Z.isPositive = Z.isPos = function() {
            return this.s > 0
        }
        ,
        Z.isZero = function() {
            return !!this.d && 0 === this.d[0]
        }
        ,
        Z.lessThan = Z.lt = function(e) {
            return this.cmp(e) < 0
        }
        ,
        Z.lessThanOrEqualTo = Z.lte = function(e) {
            return this.cmp(e) < 1
        }
        ,
        Z.logarithm = Z.log = function(e) {
            var r, t, n, i, u, s, f, c, d = this, o = d.constructor, l = o.precision, D = o.rounding;
            if (null == e)
                e = new o(10),
                r = !0;
            else {
                if (t = (e = new o(e)).d,
                e.s < 0 || !t || !t[0] || e.eq(1))
                    return new o(NaN);
                r = e.eq(10)
            }
            if (t = d.d,
            d.s < 0 || !t || !t[0] || d.eq(1))
                return new o(t && !t[0] ? -1 / 0 : 1 != d.s ? NaN : t ? 0 : 1 / 0);
            if (r)
                if (t.length > 1)
                    u = !0;
                else {
                    for (i = t[0]; i % 10 == 0; )
                        i /= 10;
                    u = 1 !== i
                }
            if (ge = !1,
            s = Qr(d, f = l + 5),
            n = r ? Kt(o, f + 10) : Qr(e, f),
            At((c = He(s, n, f, 1)).d, i = l, D))
                do {
                    if (s = Qr(d, f += 10),
                    n = r ? Kt(o, f + 10) : Qr(e, f),
                    c = He(s, n, f, 1),
                    !u) {
                        +hr(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = ce(c, l + 1, 0));
                        break
                    }
                } while (At(c.d, i += 10, D));
            return ge = !0,
            ce(c, l, D)
        }
        ,
        Z.minus = Z.sub = function(e) {
            var r, t, n, i, u, s, f, c, d, o, l, D, y = this, A = y.constructor;
            if (e = new A(e),
            !y.d || !e.d)
                return y.s && e.s ? y.d ? e.s = -e.s : e = new A(e.d || y.s !== e.s ? y : NaN) : e = new A(NaN),
                e;
            if (y.s != e.s)
                return e.s = -e.s,
                y.plus(e);
            if (D = e.d,
            f = A.precision,
            c = A.rounding,
            !(d = y.d)[0] || !D[0]) {
                if (D[0])
                    e.s = -e.s;
                else {
                    if (!d[0])
                        return new A(3 === c ? -0 : 0);
                    e = new A(y)
                }
                return ge ? ce(e, f, c) : e
            }
            if (t = gr(e.e / pe),
            o = gr(y.e / pe),
            d = d.slice(),
            u = o - t) {
                for ((l = u < 0) ? (r = d,
                u = -u,
                s = D.length) : (r = D,
                t = o,
                s = d.length),
                u > (n = Math.max(Math.ceil(f / pe), s) + 2) && (u = n,
                r.length = 1),
                r.reverse(),
                n = u; n--; )
                    r.push(0);
                r.reverse()
            } else {
                for ((l = (n = d.length) < (s = D.length)) && (s = n),
                n = 0; n < s; n++)
                    if (d[n] != D[n]) {
                        l = d[n] < D[n];
                        break
                    }
                u = 0
            }
            for (l && (r = d,
            d = D,
            D = r,
            e.s = -e.s),
            n = D.length - (s = d.length); n > 0; --n)
                d[s++] = 0;
            for (n = D.length; n > u; ) {
                if (d[--n] < D[n]) {
                    for (i = n; i && 0 === d[--i]; )
                        d[i] = Ir - 1;
                    --d[i],
                    d[n] += Ir
                }
                d[n] -= D[n]
            }
            for (; 0 === d[--s]; )
                d.pop();
            for (; 0 === d[0]; d.shift())
                --t;
            return d[0] ? (e.d = d,
            e.e = Vt(d, t),
            ge ? ce(e, f, c) : e) : new A(3 === c ? -0 : 0)
        }
        ,
        Z.modulo = Z.mod = function(e) {
            var r, t = this, n = t.constructor;
            return e = new n(e),
            !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? ce(new n(t), n.precision, n.rounding) : (ge = !1,
            9 == n.modulo ? (r = He(t, e.abs(), 0, 3, 1)).s *= e.s : r = He(t, e, 0, n.modulo, 1),
            r = r.times(e),
            ge = !0,
            t.minus(r))
        }
        ,
        Z.naturalExponential = Z.exp = function() {
            return Dn(this)
        }
        ,
        Z.naturalLogarithm = Z.ln = function() {
            return Qr(this)
        }
        ,
        Z.negated = Z.neg = function() {
            var e = new this.constructor(this);
            return e.s = -e.s,
            ce(e)
        }
        ,
        Z.plus = Z.add = function(e) {
            var r, t, n, i, u, s, f, c, d, o, l = this, D = l.constructor;
            if (e = new D(e),
            !l.d || !e.d)
                return l.s && e.s ? l.d || (e = new D(e.d || l.s === e.s ? l : NaN)) : e = new D(NaN),
                e;
            if (l.s != e.s)
                return e.s = -e.s,
                l.minus(e);
            if (o = e.d,
            f = D.precision,
            c = D.rounding,
            !(d = l.d)[0] || !o[0])
                return o[0] || (e = new D(l)),
                ge ? ce(e, f, c) : e;
            if (u = gr(l.e / pe),
            n = gr(e.e / pe),
            d = d.slice(),
            i = u - n) {
                for (i < 0 ? (t = d,
                i = -i,
                s = o.length) : (t = o,
                n = u,
                s = d.length),
                i > (s = (u = Math.ceil(f / pe)) > s ? u + 1 : s + 1) && (i = s,
                t.length = 1),
                t.reverse(); i--; )
                    t.push(0);
                t.reverse()
            }
            for ((s = d.length) - (i = o.length) < 0 && (i = s,
            t = o,
            o = d,
            d = t),
            r = 0; i; )
                r = (d[--i] = d[i] + o[i] + r) / Ir | 0,
                d[i] %= Ir;
            for (r && (d.unshift(r),
            ++n),
            s = d.length; 0 == d[--s]; )
                d.pop();
            return e.d = d,
            e.e = Vt(d, n),
            ge ? ce(e, f, c) : e
        }
        ,
        Z.precision = Z.sd = function(e) {
            var r, t = this;
            if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
                throw Error(Yr + e);
            return t.d ? (r = $n(t.d),
            e && t.e + 1 > r && (r = t.e + 1)) : r = NaN,
            r
        }
        ,
        Z.round = function() {
            var e = this
              , r = e.constructor;
            return ce(new r(e), e.e + 1, r.rounding)
        }
        ,
        Z.sine = Z.sin = function() {
            var e, r, t = this, n = t.constructor;
            return t.isFinite() ? t.isZero() ? new n(t) : (r = n.rounding,
            n.precision = (e = n.precision) + Math.max(t.e, t.sd()) + pe,
            n.rounding = 1,
            t = function Qi(e, r) {
                var t, n = r.d.length;
                if (n < 3)
                    return r.isZero() ? r : ot(e, 2, r, r);
                t = 1.4 * Math.sqrt(n),
                r = ot(e, 2, r = r.times(1 / Gt(5, t = t > 16 ? 16 : 0 | t)), r);
                for (var i, u = new e(5), s = new e(16), f = new e(20); t--; )
                    i = r.times(r),
                    r = r.times(u.plus(i.times(s.times(i).minus(f))));
                return r
            }(n, jn(n, t)),
            n.precision = e,
            n.rounding = r,
            ce(Wr > 2 ? t.neg() : t, e, r, !0)) : new n(NaN)
        }
        ,
        Z.squareRoot = Z.sqrt = function() {
            var e, r, t, n, i, u, s = this, f = s.d, c = s.e, d = s.s, o = s.constructor;
            if (1 !== d || !f || !f[0])
                return new o(!d || d < 0 && (!f || f[0]) ? NaN : f ? s : 1 / 0);
            for (ge = !1,
            0 == (d = Math.sqrt(+s)) || d == 1 / 0 ? (((r = hr(f)).length + c) % 2 == 0 && (r += "0"),
            d = Math.sqrt(r),
            c = gr((c + 1) / 2) - (c < 0 || c % 2),
            n = new o(r = d == 1 / 0 ? "5e" + c : (r = d.toExponential()).slice(0, r.indexOf("e") + 1) + c)) : n = new o(d.toString()),
            t = (c = o.precision) + 3; ; )
                if (n = (u = n).plus(He(s, u, t + 2, 1)).times(.5),
                hr(u.d).slice(0, t) === (r = hr(n.d)).slice(0, t)) {
                    if ("9999" != (r = r.slice(t - 3, t + 1)) && (i || "4999" != r)) {
                        (!+r || !+r.slice(1) && "5" == r.charAt(0)) && (ce(n, c + 1, 1),
                        e = !n.times(n).eq(s));
                        break
                    }
                    if (!i && (ce(u, c + 1, 0),
                    u.times(u).eq(s))) {
                        n = u;
                        break
                    }
                    t += 4,
                    i = 1
                }
            return ge = !0,
            ce(n, c, o.rounding, e)
        }
        ,
        Z.tangent = Z.tan = function() {
            var e, r, t = this, n = t.constructor;
            return t.isFinite() ? t.isZero() ? new n(t) : (r = n.rounding,
            n.precision = (e = n.precision) + 10,
            n.rounding = 1,
            (t = t.sin()).s = 1,
            t = He(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0),
            n.precision = e,
            n.rounding = r,
            ce(2 == Wr || 4 == Wr ? t.neg() : t, e, r, !0)) : new n(NaN)
        }
        ,
        Z.times = Z.mul = function(e) {
            var r, t, n, i, u, s, f, c, d, o = this, l = o.constructor, D = o.d, y = (e = new l(e)).d;
            if (e.s *= o.s,
            !(D && D[0] && y && y[0]))
                return new l(!e.s || D && !D[0] && !y || y && !y[0] && !D ? NaN : D && y ? 0 * e.s : e.s / 0);
            for (t = gr(o.e / pe) + gr(e.e / pe),
            (c = D.length) < (d = y.length) && (u = D,
            D = y,
            y = u,
            s = c,
            c = d,
            d = s),
            u = [],
            n = s = c + d; n--; )
                u.push(0);
            for (n = d; --n >= 0; ) {
                for (r = 0,
                i = c + n; i > n; )
                    f = u[i] + y[n] * D[i - n - 1] + r,
                    u[i--] = f % Ir | 0,
                    r = f / Ir | 0;
                u[i] = (u[i] + r) % Ir | 0
            }
            for (; !u[--s]; )
                u.pop();
            return r ? ++t : u.shift(),
            e.d = u,
            e.e = Vt(u, t),
            ge ? ce(e, l.precision, l.rounding) : e
        }
        ,
        Z.toBinary = function(e, r) {
            return pn(this, 2, e, r)
        }
        ,
        Z.toDecimalPlaces = Z.toDP = function(e, r) {
            var t = this
              , n = t.constructor;
            return t = new n(t),
            void 0 === e ? t : (Mr(e, 0, Jr),
            void 0 === r ? r = n.rounding : Mr(r, 0, 8),
            ce(t, e + t.e + 1, r))
        }
        ,
        Z.toExponential = function(e, r) {
            var t, n = this, i = n.constructor;
            return void 0 === e ? t = Ur(n, !0) : (Mr(e, 0, Jr),
            void 0 === r ? r = i.rounding : Mr(r, 0, 8),
            t = Ur(n = ce(new i(n), e + 1, r), !0, e + 1)),
            n.isNeg() && !n.isZero() ? "-" + t : t
        }
        ,
        Z.toFixed = function(e, r) {
            var t, n, i = this, u = i.constructor;
            return void 0 === e ? t = Ur(i) : (Mr(e, 0, Jr),
            void 0 === r ? r = u.rounding : Mr(r, 0, 8),
            t = Ur(n = ce(new u(i), e + i.e + 1, r), !1, e + n.e + 1)),
            i.isNeg() && !i.isZero() ? "-" + t : t
        }
        ,
        Z.toFraction = function(e) {
            var r, t, n, i, u, s, f, c, d, o, l, D, y = this, A = y.d, a = y.constructor;
            if (!A)
                return new a(y);
            if (d = t = new a(1),
            n = c = new a(0),
            u = (r = new a(n)).e = $n(A) - y.e - 1,
            r.d[0] = or(10, (s = u % pe) < 0 ? pe + s : s),
            null == e)
                e = u > 0 ? r : d;
            else {
                if (!(f = new a(e)).isInt() || f.lt(d))
                    throw Error(Yr + f);
                e = f.gt(r) ? u > 0 ? r : d : f
            }
            for (ge = !1,
            f = new a(hr(A)),
            o = a.precision,
            a.precision = u = A.length * pe * 2; l = He(f, r, 0, 1, 1),
            1 != (i = t.plus(l.times(n))).cmp(e); )
                t = n,
                n = i,
                d = c.plus(l.times(i = d)),
                c = i,
                r = f.minus(l.times(i = r)),
                f = i;
            return i = He(e.minus(t), n, 0, 1, 1),
            c = c.plus(i.times(d)),
            t = t.plus(i.times(n)),
            c.s = d.s = y.s,
            D = He(d, n, u, 1).minus(y).abs().cmp(He(c, t, u, 1).minus(y).abs()) < 1 ? [d, n] : [c, t],
            a.precision = o,
            ge = !0,
            D
        }
        ,
        Z.toHexadecimal = Z.toHex = function(e, r) {
            return pn(this, 16, e, r)
        }
        ,
        Z.toNearest = function(e, r) {
            var t = this
              , n = t.constructor;
            if (t = new n(t),
            null == e) {
                if (!t.d)
                    return t;
                e = new n(1),
                r = n.rounding
            } else {
                if (e = new n(e),
                void 0 === r ? r = n.rounding : Mr(r, 0, 8),
                !t.d)
                    return e.s ? t : e;
                if (!e.d)
                    return e.s && (e.s = t.s),
                    e
            }
            return e.d[0] ? (ge = !1,
            t = He(t, e, 0, r, 1).times(e),
            ge = !0,
            ce(t)) : (e.s = t.s,
            t = e),
            t
        }
        ,
        Z.toNumber = function() {
            return +this
        }
        ,
        Z.toOctal = function(e, r) {
            return pn(this, 8, e, r)
        }
        ,
        Z.toPower = Z.pow = function(e) {
            var r, t, n, i, u, s, f = this, c = f.constructor, d = +(e = new c(e));
            if (!(f.d && e.d && f.d[0] && e.d[0]))
                return new c(or(+f, d));
            if ((f = new c(f)).eq(1))
                return f;
            if (n = c.precision,
            u = c.rounding,
            e.eq(1))
                return ce(f, n, u);
            if ((r = gr(e.e / pe)) >= e.d.length - 1 && (t = d < 0 ? -d : d) <= 9007199254740991)
                return i = Jn(c, f, t, n),
                e.s < 0 ? new c(1).div(i) : ce(i, n, u);
            if ((s = f.s) < 0) {
                if (r < e.d.length - 1)
                    return new c(NaN);
                if (1 & e.d[r] || (s = 1),
                0 == f.e && 1 == f.d[0] && 1 == f.d.length)
                    return f.s = s,
                    f
            }
            return (r = 0 != (t = or(+f, d)) && isFinite(t) ? new c(t + "").e : gr(d * (Math.log("0." + hr(f.d)) / Math.LN10 + f.e + 1))) > c.maxE + 1 || r < c.minE - 1 ? new c(r > 0 ? s / 0 : 0) : (ge = !1,
            c.rounding = f.s = 1,
            t = Math.min(12, (r + "").length),
            (i = Dn(e.times(Qr(f, n + t)), n)).d && At((i = ce(i, n + 5, 1)).d, n, u) && +hr((i = ce(Dn(e.times(Qr(f, (r = n + 10) + t)), r), r + 5, 1)).d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ce(i, n + 1, 0)),
            i.s = s,
            ge = !0,
            c.rounding = u,
            ce(i, n, u))
        }
        ,
        Z.toPrecision = function(e, r) {
            var t, n = this, i = n.constructor;
            return void 0 === e ? t = Ur(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Mr(e, 1, Jr),
            void 0 === r ? r = i.rounding : Mr(r, 0, 8),
            t = Ur(n = ce(new i(n), e, r), e <= n.e || n.e <= i.toExpNeg, e)),
            n.isNeg() && !n.isZero() ? "-" + t : t
        }
        ,
        Z.toSignificantDigits = Z.toSD = function(e, r) {
            var n = this.constructor;
            return void 0 === e ? (e = n.precision,
            r = n.rounding) : (Mr(e, 1, Jr),
            void 0 === r ? r = n.rounding : Mr(r, 0, 8)),
            ce(new n(this), e, r)
        }
        ,
        Z.toString = function() {
            var e = this
              , r = e.constructor
              , t = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
            return e.isNeg() && !e.isZero() ? "-" + t : t
        }
        ,
        Z.truncated = Z.trunc = function() {
            return ce(new this.constructor(this), this.e + 1, 1)
        }
        ,
        Z.valueOf = Z.toJSON = function() {
            var e = this
              , r = e.constructor
              , t = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
            return e.isNeg() ? "-" + t : t
        }
        ;
        var He = function() {
            function e(n, i, u) {
                var s, f = 0, c = n.length;
                for (n = n.slice(); c--; )
                    n[c] = (s = n[c] * i + f) % u | 0,
                    f = s / u | 0;
                return f && n.unshift(f),
                n
            }
            function r(n, i, u, s) {
                var f, c;
                if (u != s)
                    c = u > s ? 1 : -1;
                else
                    for (f = c = 0; f < u; f++)
                        if (n[f] != i[f]) {
                            c = n[f] > i[f] ? 1 : -1;
                            break
                        }
                return c
            }
            function t(n, i, u, s) {
                for (var f = 0; u--; )
                    n[u] -= f,
                    n[u] = (f = n[u] < i[u] ? 1 : 0) * s + n[u] - i[u];
                for (; !n[0] && n.length > 1; )
                    n.shift()
            }
            return function(n, i, u, s, f, c) {
                var d, o, l, D, y, A, a, h, p, B, m, M, C, w, x, S, O, U, H, ee, le = n.constructor, ne = n.s == i.s ? 1 : -1, ie = n.d, V = i.d;
                if (!(ie && ie[0] && V && V[0]))
                    return new le(n.s && i.s && (ie ? !V || ie[0] != V[0] : V) ? ie && 0 == ie[0] || !V ? 0 * ne : ne / 0 : NaN);
                for (c ? (y = 1,
                o = n.e - i.e) : (c = Ir,
                o = gr(n.e / (y = pe)) - gr(i.e / y)),
                H = V.length,
                O = ie.length,
                B = (p = new le(ne)).d = [],
                l = 0; V[l] == (ie[l] || 0); l++)
                    ;
                if (V[l] > (ie[l] || 0) && o--,
                null == u ? (w = u = le.precision,
                s = le.rounding) : w = f ? u + (n.e - i.e) + 1 : u,
                w < 0)
                    B.push(1),
                    A = !0;
                else {
                    if (w = w / y + 2 | 0,
                    l = 0,
                    1 == H) {
                        for (D = 0,
                        V = V[0],
                        w++; (l < O || D) && w--; l++)
                            B[l] = (x = D * c + (ie[l] || 0)) / V | 0,
                            D = x % V | 0;
                        A = D || l < O
                    } else {
                        for ((D = c / (V[0] + 1) | 0) > 1 && (V = e(V, D, c),
                        ie = e(ie, D, c),
                        H = V.length,
                        O = ie.length),
                        S = H,
                        M = (m = ie.slice(0, H)).length; M < H; )
                            m[M++] = 0;
                        (ee = V.slice()).unshift(0),
                        U = V[0],
                        V[1] >= c / 2 && ++U;
                        do {
                            D = 0,
                            (d = r(V, m, H, M)) < 0 ? (C = m[0],
                            H != M && (C = C * c + (m[1] || 0)),
                            (D = C / U | 0) > 1 ? (D >= c && (D = c - 1),
                            1 == (d = r(a = e(V, D, c), m, h = a.length, M = m.length)) && (D--,
                            t(a, H < h ? ee : V, h, c))) : (0 == D && (d = D = 1),
                            a = V.slice()),
                            (h = a.length) < M && a.unshift(0),
                            t(m, a, M, c),
                            -1 == d && (d = r(V, m, H, M = m.length)) < 1 && (D++,
                            t(m, H < M ? ee : V, M, c)),
                            M = m.length) : 0 === d && (D++,
                            m = [0]),
                            B[l++] = D,
                            d && m[0] ? m[M++] = ie[S] || 0 : (m = [ie[S]],
                            M = 1)
                        } while ((S++ < O || void 0 !== m[0]) && w--);
                        A = void 0 !== m[0]
                    }
                    B[0] || B.shift()
                }
                if (1 == y)
                    p.e = o,
                    Zn = A;
                else {
                    for (l = 1,
                    D = B[0]; D >= 10; D /= 10)
                        l++;
                    p.e = l + o * y - 1,
                    ce(p, f ? u + p.e + 1 : u, s, A)
                }
                return p
            }
        }();
        function ce(e, r, t, n) {
            var i, u, s, f, c, d, o, l, D, y = e.constructor;
            e: if (null != r) {
                if (!(l = e.d))
                    return e;
                for (i = 1,
                f = l[0]; f >= 10; f /= 10)
                    i++;
                if ((u = r - i) < 0)
                    u += pe,
                    c = (o = l[D = 0]) / or(10, i - (s = r) - 1) % 10 | 0;
                else if ((D = Math.ceil((u + 1) / pe)) >= (f = l.length)) {
                    if (!n)
                        break e;
                    for (; f++ <= D; )
                        l.push(0);
                    o = c = 0,
                    i = 1,
                    s = (u %= pe) - pe + 1
                } else {
                    for (o = f = l[D],
                    i = 1; f >= 10; f /= 10)
                        i++;
                    c = (s = (u %= pe) - pe + i) < 0 ? 0 : o / or(10, i - s - 1) % 10 | 0
                }
                if (n = n || r < 0 || void 0 !== l[D + 1] || (s < 0 ? o : o % or(10, i - s - 1)),
                d = t < 4 ? (c || n) && (0 == t || t == (e.s < 0 ? 3 : 2)) : c > 5 || 5 == c && (4 == t || n || 6 == t && (u > 0 ? s > 0 ? o / or(10, i - s) : 0 : l[D - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)),
                r < 1 || !l[0])
                    return l.length = 0,
                    d ? (l[0] = or(10, (pe - (r -= e.e + 1) % pe) % pe),
                    e.e = -r || 0) : l[0] = e.e = 0,
                    e;
                if (0 == u ? (l.length = D,
                f = 1,
                D--) : (l.length = D + 1,
                f = or(10, pe - u),
                l[D] = s > 0 ? (o / or(10, i - s) % or(10, s) | 0) * f : 0),
                d)
                    for (; ; ) {
                        if (0 == D) {
                            for (u = 1,
                            s = l[0]; s >= 10; s /= 10)
                                u++;
                            for (s = l[0] += f,
                            f = 1; s >= 10; s /= 10)
                                f++;
                            u != f && (e.e++,
                            l[0] == Ir && (l[0] = 1));
                            break
                        }
                        if (l[D] += f,
                        l[D] != Ir)
                            break;
                        l[D--] = 0,
                        f = 1
                    }
                for (u = l.length; 0 === l[--u]; )
                    l.pop()
            }
            return ge && (e.e > y.maxE ? (e.d = null,
            e.e = NaN) : e.e < y.minE && (e.e = 0,
            e.d = [0])),
            e
        }
        function Ur(e, r, t) {
            if (!e.isFinite())
                return Qn(e);
            var n, i = e.e, u = hr(e.d), s = u.length;
            return r ? (t && (n = t - s) > 0 ? u = u.charAt(0) + "." + u.slice(1) + Xr(n) : s > 1 && (u = u.charAt(0) + "." + u.slice(1)),
            u = u + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (u = "0." + Xr(-i - 1) + u,
            t && (n = t - s) > 0 && (u += Xr(n))) : i >= s ? (u += Xr(i + 1 - s),
            t && (n = t - i - 1) > 0 && (u = u + "." + Xr(n))) : ((n = i + 1) < s && (u = u.slice(0, n) + "." + u.slice(n)),
            t && (n = t - s) > 0 && (i + 1 === s && (u += "."),
            u += Xr(n))),
            u
        }
        function Vt(e, r) {
            var t = e[0];
            for (r *= pe; t >= 10; t /= 10)
                r++;
            return r
        }
        function Kt(e, r, t) {
            if (r > Ji)
                throw ge = !0,
                t && (e.precision = t),
                Error(Hn);
            return ce(new e(Wt), r, 1, !0)
        }
        function Pr(e, r, t) {
            if (r > hn)
                throw Error(Hn);
            return ce(new e(qt), r, t, !0)
        }
        function $n(e) {
            var r = e.length - 1
              , t = r * pe + 1;
            if (r = e[r]) {
                for (; r % 10 == 0; r /= 10)
                    t--;
                for (r = e[0]; r >= 10; r /= 10)
                    t++
            }
            return t
        }
        function Xr(e) {
            for (var r = ""; e--; )
                r += "0";
            return r
        }
        function Jn(e, r, t, n) {
            var i, u = new e(1), s = Math.ceil(n / pe + 4);
            for (ge = !1; ; ) {
                if (t % 2 && kn((u = u.times(r)).d, s) && (i = !0),
                0 === (t = gr(t / 2))) {
                    t = u.d.length - 1,
                    i && 0 === u.d[t] && ++u.d[t];
                    break
                }
                kn((r = r.times(r)).d, s)
            }
            return ge = !0,
            u
        }
        function Yn(e) {
            return 1 & e.d[e.d.length - 1]
        }
        function Xn(e, r, t) {
            for (var n, i = new e(r[0]), u = 0; ++u < r.length; ) {
                if (!(n = new e(r[u])).s) {
                    i = n;
                    break
                }
                i[t](n) && (i = n)
            }
            return i
        }
        function Dn(e, r) {
            var t, n, i, u, s, f, c, d = 0, o = 0, l = 0, D = e.constructor, y = D.rounding, A = D.precision;
            if (!e.d || !e.d[0] || e.e > 17)
                return new D(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
            for (null == r ? (ge = !1,
            c = A) : c = r,
            f = new D(.03125); e.e > -2; )
                e = e.times(f),
                l += 5;
            for (c += n = Math.log(or(2, l)) / Math.LN10 * 2 + 5 | 0,
            t = u = s = new D(1),
            D.precision = c; ; ) {
                if (u = ce(u.times(e), c, 1),
                t = t.times(++o),
                hr((f = s.plus(He(u, t, c, 1))).d).slice(0, c) === hr(s.d).slice(0, c)) {
                    for (i = l; i--; )
                        s = ce(s.times(s), c, 1);
                    if (null != r)
                        return D.precision = A,
                        s;
                    if (!(d < 3 && At(s.d, c - n, y, d)))
                        return ce(s, D.precision = A, y, ge = !0);
                    D.precision = c += 10,
                    t = u = f = new D(1),
                    o = 0,
                    d++
                }
                s = f
            }
        }
        function Qr(e, r) {
            var t, n, i, u, s, f, c, d, o, l, D, y = 1, a = e, h = a.d, p = a.constructor, B = p.rounding, m = p.precision;
            if (a.s < 0 || !h || !h[0] || !a.e && 1 == h[0] && 1 == h.length)
                return new p(h && !h[0] ? -1 / 0 : 1 != a.s ? NaN : h ? 0 : a);
            if (null == r ? (ge = !1,
            o = m) : o = r,
            p.precision = o += 10,
            n = (t = hr(h)).charAt(0),
            !(Math.abs(u = a.e) < 15e14))
                return d = Kt(p, o + 2, m).times(u + ""),
                a = Qr(new p(n + "." + t.slice(1)), o - 10).plus(d),
                p.precision = m,
                null == r ? ce(a, m, B, ge = !0) : a;
            for (; n < 7 && 1 != n || 1 == n && t.charAt(1) > 3; )
                n = (t = hr((a = a.times(e)).d)).charAt(0),
                y++;
            for (u = a.e,
            n > 1 ? (a = new p("0." + t),
            u++) : a = new p(n + "." + t.slice(1)),
            l = a,
            c = s = a = He(a.minus(1), a.plus(1), o, 1),
            D = ce(a.times(a), o, 1),
            i = 3; ; ) {
                if (s = ce(s.times(D), o, 1),
                hr((d = c.plus(He(s, new p(i), o, 1))).d).slice(0, o) === hr(c.d).slice(0, o)) {
                    if (c = c.times(2),
                    0 !== u && (c = c.plus(Kt(p, o + 2, m).times(u + ""))),
                    c = He(c, new p(y), o, 1),
                    null != r)
                        return p.precision = m,
                        c;
                    if (!At(c.d, o - 10, B, f))
                        return ce(c, p.precision = m, B, ge = !0);
                    p.precision = o += 10,
                    d = s = a = He(l.minus(1), l.plus(1), o, 1),
                    D = ce(a.times(a), o, 1),
                    i = f = 1
                }
                c = d,
                i += 2
            }
        }
        function Qn(e) {
            return String(e.s * e.s / 0)
        }
        function vn(e, r) {
            var t, n, i;
            for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")),
            (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n),
            t += +r.slice(n + 1),
            r = r.substring(0, n)) : t < 0 && (t = r.length),
            n = 0; 48 === r.charCodeAt(n); n++)
                ;
            for (i = r.length; 48 === r.charCodeAt(i - 1); --i)
                ;
            if (r = r.slice(n, i)) {
                if (i -= n,
                e.e = t = t - n - 1,
                e.d = [],
                n = (t + 1) % pe,
                t < 0 && (n += pe),
                n < i) {
                    for (n && e.d.push(+r.slice(0, n)),
                    i -= pe; n < i; )
                        e.d.push(+r.slice(n, n += pe));
                    r = r.slice(n),
                    n = pe - r.length
                } else
                    n -= i;
                for (; n--; )
                    r += "0";
                e.d.push(+r),
                ge && (e.e > e.constructor.maxE ? (e.d = null,
                e.e = NaN) : e.e < e.constructor.minE && (e.e = 0,
                e.d = [0]))
            } else
                e.e = 0,
                e.d = [0];
            return e
        }
        function ot(e, r, t, n, i) {
            var u, s, f, c, o = e.precision, l = Math.ceil(o / pe);
            for (ge = !1,
            c = t.times(t),
            f = new e(n); ; ) {
                if (s = He(f.times(c), new e(r++ * r++), o, 1),
                f = i ? n.plus(s) : n.minus(s),
                n = He(s.times(c), new e(r++ * r++), o, 1),
                void 0 !== (s = f.plus(n)).d[l]) {
                    for (u = l; s.d[u] === f.d[u] && u--; )
                        ;
                    if (-1 == u)
                        break
                }
                u = f,
                f = n,
                n = s,
                s = u
            }
            return ge = !0,
            s.d.length = l + 1,
            s
        }
        function Gt(e, r) {
            for (var t = e; --r; )
                t *= e;
            return t
        }
        function jn(e, r) {
            var t, n = r.s < 0, i = Pr(e, e.precision, 1), u = i.times(.5);
            if ((r = r.abs()).lte(u))
                return Wr = n ? 4 : 1,
                r;
            if ((t = r.divToInt(i)).isZero())
                Wr = n ? 3 : 2;
            else {
                if ((r = r.minus(t.times(i))).lte(u))
                    return Wr = Yn(t) ? n ? 2 : 3 : n ? 4 : 1,
                    r;
                Wr = Yn(t) ? n ? 1 : 4 : n ? 3 : 2
            }
            return r.minus(i).abs()
        }
        function pn(e, r, t, n) {
            var i, u, s, f, c, d, o, l, D, y = e.constructor, A = void 0 !== t;
            if (A ? (Mr(t, 1, Jr),
            void 0 === n ? n = y.rounding : Mr(n, 0, 8)) : (t = y.precision,
            n = y.rounding),
            e.isFinite()) {
                for (A ? (i = 2,
                16 == r ? t = 4 * t - 3 : 8 == r && (t = 3 * t - 2)) : i = r,
                (s = (o = Ur(e)).indexOf(".")) >= 0 && (o = o.replace(".", ""),
                (D = new y(1)).e = o.length - s,
                D.d = Ht(Ur(D), 10, i),
                D.e = D.d.length),
                u = c = (l = Ht(o, 10, i)).length; 0 == l[--c]; )
                    l.pop();
                if (l[0]) {
                    if (s < 0 ? u-- : ((e = new y(e)).d = l,
                    e.e = u,
                    l = (e = He(e, D, t, n, 0, i)).d,
                    u = e.e,
                    d = Zn),
                    s = l[t],
                    f = i / 2,
                    d = d || void 0 !== l[t + 1],
                    d = n < 4 ? (void 0 !== s || d) && (0 === n || n === (e.s < 0 ? 3 : 2)) : s > f || s === f && (4 === n || d || 6 === n && 1 & l[t - 1] || n === (e.s < 0 ? 8 : 7)),
                    l.length = t,
                    d)
                        for (; ++l[--t] > i - 1; )
                            l[t] = 0,
                            t || (++u,
                            l.unshift(1));
                    for (c = l.length; !l[c - 1]; --c)
                        ;
                    for (s = 0,
                    o = ""; s < c; s++)
                        o += ln.charAt(l[s]);
                    if (A) {
                        if (c > 1)
                            if (16 == r || 8 == r) {
                                for (s = 16 == r ? 4 : 3,
                                --c; c % s; c++)
                                    o += "0";
                                for (c = (l = Ht(o, i, r)).length; !l[c - 1]; --c)
                                    ;
                                for (s = 1,
                                o = "1."; s < c; s++)
                                    o += ln.charAt(l[s])
                            } else
                                o = o.charAt(0) + "." + o.slice(1);
                        o = o + (u < 0 ? "p" : "p+") + u
                    } else if (u < 0) {
                        for (; ++u; )
                            o = "0" + o;
                        o = "0." + o
                    } else if (++u > c)
                        for (u -= c; u--; )
                            o += "0";
                    else
                        u < c && (o = o.slice(0, u) + "." + o.slice(u))
                } else
                    o = A ? "0p+0" : "0";
                o = (16 == r ? "0x" : 2 == r ? "0b" : 8 == r ? "0o" : "") + o
            } else
                o = Qn(e);
            return e.s < 0 ? "-" + o : o
        }
        function kn(e, r) {
            if (e.length > r)
                return e.length = r,
                !0
        }
        function ji(e) {
            return new this(e).abs()
        }
        function ki(e) {
            return new this(e).acos()
        }
        function eu(e) {
            return new this(e).acosh()
        }
        function ru(e, r) {
            return new this(e).plus(r)
        }
        function tu(e) {
            return new this(e).asin()
        }
        function nu(e) {
            return new this(e).asinh()
        }
        function iu(e) {
            return new this(e).atan()
        }
        function uu(e) {
            return new this(e).atanh()
        }
        function au(e, r) {
            e = new this(e),
            r = new this(r);
            var t, n = this.precision, i = this.rounding, u = n + 4;
            return e.s && r.s ? e.d || r.d ? !r.d || e.isZero() ? (t = r.s < 0 ? Pr(this, n, i) : new this(0)).s = e.s : !e.d || r.isZero() ? (t = Pr(this, u, 1).times(.5)).s = e.s : r.s < 0 ? (this.precision = u,
            this.rounding = 1,
            t = this.atan(He(e, r, u, 1)),
            r = Pr(this, u, 1),
            this.precision = n,
            this.rounding = i,
            t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(He(e, r, u, 1)) : (t = Pr(this, u, 1).times(r.s > 0 ? .25 : .75)).s = e.s : t = new this(NaN),
            t
        }
        function ou(e) {
            return new this(e).cbrt()
        }
        function su(e) {
            return ce(e = new this(e), e.e + 1, 2)
        }
        function fu(e, r, t) {
            return new this(e).clamp(r, t)
        }
        function cu(e) {
            if (!e || "object" != typeof e)
                throw Error(Zt + "Object expected");
            var r, t, n, i = !0 === e.defaults, u = ["precision", 1, Jr, "rounding", 0, 8, "toExpNeg", -at, 0, "toExpPos", 0, at, "maxE", 0, at, "minE", -at, 0, "modulo", 0, 9];
            for (r = 0; r < u.length; r += 3)
                if (t = u[r],
                i && (this[t] = dn[t]),
                void 0 !== (n = e[t])) {
                    if (!(gr(n) === n && n >= u[r + 1] && n <= u[r + 2]))
                        throw Error(Yr + t + ": " + n);
                    this[t] = n
                }
            if (t = "crypto",
            i && (this[t] = dn[t]),
            void 0 !== (n = e[t])) {
                if (!0 !== n && !1 !== n && 0 !== n && 1 !== n)
                    throw Error(Yr + t + ": " + n);
                if (n) {
                    if (!(typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)))
                        throw Error(Vn);
                    this[t] = !0
                } else
                    this[t] = !1
            }
            return this
        }
        function lu(e) {
            return new this(e).cos()
        }
        function du(e) {
            return new this(e).cosh()
        }
        function hu(e, r) {
            return new this(e).div(r)
        }
        function Du(e) {
            return new this(e).exp()
        }
        function vu(e) {
            return ce(e = new this(e), e.e + 1, 3)
        }
        function pu() {
            var e, r, t = new this(0);
            for (ge = !1,
            e = 0; e < arguments.length; )
                if ((r = new this(arguments[e++])).d)
                    t.d && (t = t.plus(r.times(r)));
                else {
                    if (r.s)
                        return ge = !0,
                        new this(1 / 0);
                    t = r
                }
            return ge = !0,
            t.sqrt()
        }
        function ri(e) {
            return e instanceof wt || e && e.toStringTag === Kn || !1
        }
        function mu(e) {
            return new this(e).ln()
        }
        function gu(e, r) {
            return new this(e).log(r)
        }
        function yu(e) {
            return new this(e).log(2)
        }
        function Eu(e) {
            return new this(e).log(10)
        }
        function Au() {
            return Xn(this, arguments, "lt")
        }
        function wu() {
            return Xn(this, arguments, "gt")
        }
        function Fu(e, r) {
            return new this(e).mod(r)
        }
        function Cu(e, r) {
            return new this(e).mul(r)
        }
        function bu(e, r) {
            return new this(e).pow(r)
        }
        function _u(e) {
            var r, t, n, i, u = 0, s = new this(1), f = [];
            if (void 0 === e ? e = this.precision : Mr(e, 1, Jr),
            n = Math.ceil(e / pe),
            this.crypto)
                if (crypto.getRandomValues)
                    for (r = crypto.getRandomValues(new Uint32Array(n)); u < n; )
                        (i = r[u]) >= 429e7 ? r[u] = crypto.getRandomValues(new Uint32Array(1))[0] : f[u++] = i % 1e7;
                else {
                    if (!crypto.randomBytes)
                        throw Error(Vn);
                    for (r = crypto.randomBytes(n *= 4); u < n; )
                        (i = r[u] + (r[u + 1] << 8) + (r[u + 2] << 16) + ((127 & r[u + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(r, u) : (f.push(i % 1e7),
                        u += 4);
                    u = n / 4
                }
            else
                for (; u < n; )
                    f[u++] = 1e7 * Math.random() | 0;
            for (n = f[--u],
            e %= pe,
            n && e && (i = or(10, pe - e),
            f[u] = (n / i | 0) * i); 0 === f[u]; u--)
                f.pop();
            if (u < 0)
                t = 0,
                f = [0];
            else {
                for (t = -1; 0 === f[0]; t -= pe)
                    f.shift();
                for (n = 1,
                i = f[0]; i >= 10; i /= 10)
                    n++;
                n < pe && (t -= pe - n)
            }
            return s.e = t,
            s.d = f,
            s
        }
        function Mu(e) {
            return ce(e = new this(e), e.e + 1, this.rounding)
        }
        function Su(e) {
            return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN
        }
        function Bu(e) {
            return new this(e).sin()
        }
        function Nu(e) {
            return new this(e).sinh()
        }
        function xu(e) {
            return new this(e).sqrt()
        }
        function Tu(e, r) {
            return new this(e).sub(r)
        }
        function Ou() {
            var e = 0
              , r = arguments
              , t = new this(r[e]);
            for (ge = !1; t.s && ++e < r.length; )
                t = t.plus(r[e]);
            return ge = !0,
            ce(t, this.precision, this.rounding)
        }
        function Iu(e) {
            return new this(e).tan()
        }
        function Pu(e) {
            return new this(e).tanh()
        }
        function zu(e) {
            return ce(e = new this(e), e.e + 1, 1)
        }
        Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString,
        Z[Symbol.toStringTag] = "Decimal";
        var wt = Z.constructor = function ei(e) {
            var r, t, n;
            function i(u) {
                var s, f, c, d = this;
                if (!(d instanceof i))
                    return new i(u);
                if (d.constructor = i,
                ri(u))
                    return d.s = u.s,
                    void (ge ? !u.d || u.e > i.maxE ? (d.e = NaN,
                    d.d = null) : u.e < i.minE ? (d.e = 0,
                    d.d = [0]) : (d.e = u.e,
                    d.d = u.d.slice()) : (d.e = u.e,
                    d.d = u.d ? u.d.slice() : u.d));
                if ("number" == (c = typeof u)) {
                    if (0 === u)
                        return d.s = 1 / u < 0 ? -1 : 1,
                        d.e = 0,
                        void (d.d = [0]);
                    if (u < 0 ? (u = -u,
                    d.s = -1) : d.s = 1,
                    u === ~~u && u < 1e7) {
                        for (s = 0,
                        f = u; f >= 10; f /= 10)
                            s++;
                        return void (ge ? s > i.maxE ? (d.e = NaN,
                        d.d = null) : s < i.minE ? (d.e = 0,
                        d.d = [0]) : (d.e = s,
                        d.d = [u]) : (d.e = s,
                        d.d = [u]))
                    }
                    return 0 * u != 0 ? (u || (d.s = NaN),
                    d.e = NaN,
                    void (d.d = null)) : vn(d, u.toString())
                }
                if ("string" !== c)
                    throw Error(Yr + u);
                return 45 === (f = u.charCodeAt(0)) ? (u = u.slice(1),
                d.s = -1) : (43 === f && (u = u.slice(1)),
                d.s = 1),
                Gn.test(u) ? vn(d, u) : function Xi(e, r) {
                    var t, n, i, u, s, f, c, d, o;
                    if (r.indexOf("_") > -1) {
                        if (r = r.replace(/(\d)_(?=\d)/g, "$1"),
                        Gn.test(r))
                            return vn(e, r)
                    } else if ("Infinity" === r || "NaN" === r)
                        return +r || (e.s = NaN),
                        e.e = NaN,
                        e.d = null,
                        e;
                    if (Ki.test(r))
                        t = 16,
                        r = r.toLowerCase();
                    else if (Vi.test(r))
                        t = 2;
                    else {
                        if (!Gi.test(r))
                            throw Error(Yr + r);
                        t = 8
                    }
                    for ((u = r.search(/p/i)) > 0 ? (c = +r.slice(u + 1),
                    r = r.substring(2, u)) : r = r.slice(2),
                    u = r.indexOf("."),
                    n = e.constructor,
                    (s = u >= 0) && (u = (f = (r = r.replace(".", "")).length) - u,
                    i = Jn(n, new n(t), u, 2 * u)),
                    u = o = (d = Ht(r, t, Ir)).length - 1; 0 === d[u]; --u)
                        d.pop();
                    return u < 0 ? new n(0 * e.s) : (e.e = Vt(d, o),
                    e.d = d,
                    ge = !1,
                    s && (e = He(e, i, 4 * f)),
                    c && (e = e.times(Math.abs(c) < 54 ? or(2, c) : wt.pow(2, c))),
                    ge = !0,
                    e)
                }(d, u)
            }
            if (i.prototype = Z,
            i.ROUND_UP = 0,
            i.ROUND_DOWN = 1,
            i.ROUND_CEIL = 2,
            i.ROUND_FLOOR = 3,
            i.ROUND_HALF_UP = 4,
            i.ROUND_HALF_DOWN = 5,
            i.ROUND_HALF_EVEN = 6,
            i.ROUND_HALF_CEIL = 7,
            i.ROUND_HALF_FLOOR = 8,
            i.EUCLID = 9,
            i.config = i.set = cu,
            i.clone = ei,
            i.isDecimal = ri,
            i.abs = ji,
            i.acos = ki,
            i.acosh = eu,
            i.add = ru,
            i.asin = tu,
            i.asinh = nu,
            i.atan = iu,
            i.atanh = uu,
            i.atan2 = au,
            i.cbrt = ou,
            i.ceil = su,
            i.clamp = fu,
            i.cos = lu,
            i.cosh = du,
            i.div = hu,
            i.exp = Du,
            i.floor = vu,
            i.hypot = pu,
            i.ln = mu,
            i.log = gu,
            i.log10 = Eu,
            i.log2 = yu,
            i.max = Au,
            i.min = wu,
            i.mod = Fu,
            i.mul = Cu,
            i.pow = bu,
            i.random = _u,
            i.round = Mu,
            i.sign = Su,
            i.sin = Bu,
            i.sinh = Nu,
            i.sqrt = xu,
            i.sub = Tu,
            i.sum = Ou,
            i.tan = Iu,
            i.tanh = Pu,
            i.trunc = zu,
            void 0 === e && (e = {}),
            e && !0 !== e.defaults)
                for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"],
                r = 0; r < n.length; )
                    e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
            return i.config(e),
            i
        }(dn);
        Wt = new wt(Wt),
        qt = new wt(qt);
        const ti = wt;
        var $t = {
            createBigNumberClass: me("BigNumber", ["?on", "config"], e=>{
                var {on: r, config: t} = e
                  , n = ti.clone({
                    precision: t.precision,
                    modulo: ti.EUCLID
                });
                return n.prototype = Object.create(n.prototype),
                n.prototype.type = "BigNumber",
                n.prototype.isBigNumber = !0,
                n.prototype.toJSON = function() {
                    return {
                        mathjs: "BigNumber",
                        value: this.toString()
                    }
                }
                ,
                n.fromJSON = function(i) {
                    return new n(i.value)
                }
                ,
                r && r("config", function(i, u) {
                    i.precision !== u.precision && n.config({
                        precision: i.precision
                    })
                }),
                n
            }
            , {
                isClass: !0
            })
        }
          , mn = {
            createMatrixClass: me("Matrix", [], ()=>{
                function e() {
                    if (!(this instanceof e))
                        throw new SyntaxError("Constructor must be called with the new operator")
                }
                return e.prototype.type = "Matrix",
                e.prototype.isMatrix = !0,
                e.prototype.storage = function() {
                    throw new Error("Cannot invoke storage on a Matrix interface")
                }
                ,
                e.prototype.datatype = function() {
                    throw new Error("Cannot invoke datatype on a Matrix interface")
                }
                ,
                e.prototype.create = function(r, t) {
                    throw new Error("Cannot invoke create on a Matrix interface")
                }
                ,
                e.prototype.subset = function(r, t, n) {
                    throw new Error("Cannot invoke subset on a Matrix interface")
                }
                ,
                e.prototype.get = function(r) {
                    throw new Error("Cannot invoke get on a Matrix interface")
                }
                ,
                e.prototype.set = function(r, t, n) {
                    throw new Error("Cannot invoke set on a Matrix interface")
                }
                ,
                e.prototype.resize = function(r, t) {
                    throw new Error("Cannot invoke resize on a Matrix interface")
                }
                ,
                e.prototype.reshape = function(r, t) {
                    throw new Error("Cannot invoke reshape on a Matrix interface")
                }
                ,
                e.prototype.clone = function() {
                    throw new Error("Cannot invoke clone on a Matrix interface")
                }
                ,
                e.prototype.size = function() {
                    throw new Error("Cannot invoke size on a Matrix interface")
                }
                ,
                e.prototype.map = function(r, t) {
                    throw new Error("Cannot invoke map on a Matrix interface")
                }
                ,
                e.prototype.forEach = function(r) {
                    throw new Error("Cannot invoke forEach on a Matrix interface")
                }
                ,
                e.prototype[Symbol.iterator] = function() {
                    throw new Error("Cannot iterate a Matrix interface")
                }
                ,
                e.prototype.toArray = function() {
                    throw new Error("Cannot invoke toArray on a Matrix interface")
                }
                ,
                e.prototype.valueOf = function() {
                    throw new Error("Cannot invoke valueOf on a Matrix interface")
                }
                ,
                e.prototype.format = function(r) {
                    throw new Error("Cannot invoke format on a Matrix interface")
                }
                ,
                e.prototype.toString = function() {
                    throw new Error("Cannot invoke toString on a Matrix interface")
                }
                ,
                e
            }
            , {
                isClass: !0
            })
        };
        function ni(e) {
            return Object.keys(e.signatures || {}).reduce(function(r, t) {
                var n = (t.match(/,/g) || []).length + 1;
                return Math.max(r, n)
            }, -1)
        }
        var Ft = {
            MatrixDependencies: mn,
            createDenseMatrixClass: me("DenseMatrix", ["Matrix"], e=>{
                var {Matrix: r} = e;
                function t(o, l) {
                    if (!(this instanceof t))
                        throw new SyntaxError("Constructor must be called with the new operator");
                    if (l && !oe(l))
                        throw new Error("Invalid datatype: " + l);
                    if (T(o))
                        "DenseMatrix" === o.type ? (this._data = Pe(o._data),
                        this._size = Pe(o._size),
                        this._datatype = l || o._datatype) : (this._data = o.toArray(),
                        this._size = o.size(),
                        this._datatype = l || o._datatype);
                    else if (o && te(o.data) && te(o.size))
                        this._data = o.data,
                        this._size = o.size,
                        zt(this._data, this._size),
                        this._datatype = l || o.datatype;
                    else if (te(o))
                        this._data = d(o),
                        this._size = br(this._data),
                        zt(this._data, this._size),
                        this._datatype = l;
                    else {
                        if (o)
                            throw new TypeError("Unsupported type of data (" + ir(o) + ")");
                        this._data = [],
                        this._size = [0],
                        this._datatype = l
                    }
                }
                function i(o, l, D, y) {
                    var A = y === D - 1
                      , a = l.dimension(y);
                    return A ? a.map(function(h) {
                        return Ge(h, o.length),
                        o[h]
                    }).valueOf() : a.map(function(h) {
                        return Ge(h, o.length),
                        i(o[h], l, D, y + 1)
                    }).valueOf()
                }
                function s(o, l, D, y, A) {
                    var a = A === y - 1;
                    l.dimension(A).forEach(a ? function(p, B) {
                        Ge(p),
                        o[p] = D[B[0]]
                    }
                    : function(p, B) {
                        Ge(p),
                        s(o[p], l, D[B[0]], y, A + 1)
                    }
                    )
                }
                function f(o, l, D) {
                    if (0 === l.length) {
                        for (var y = o._data; te(y); )
                            y = y[0];
                        return y
                    }
                    return o._size = l.slice(0),
                    o._data = pt(o._data, o._size, D),
                    o
                }
                function c(o, l, D) {
                    for (var y = o._size.slice(0), A = !1; y.length < l.length; )
                        y.push(0),
                        A = !0;
                    for (var a = 0, h = l.length; a < h; a++)
                        l[a] > y[a] && (y[a] = l[a],
                        A = !0);
                    A && f(o, y, D)
                }
                function d(o) {
                    for (var l = 0, D = o.length; l < D; l++) {
                        var y = o[l];
                        te(y) ? o[l] = d(y) : y && !0 === y.isMatrix && (o[l] = d(y.valueOf()))
                    }
                    return o
                }
                return (t.prototype = new r).createDenseMatrix = function(o, l) {
                    return new t(o,l)
                }
                ,
                Object.defineProperty(t, "name", {
                    value: "DenseMatrix"
                }),
                t.prototype.constructor = t,
                t.prototype.type = "DenseMatrix",
                t.prototype.isDenseMatrix = !0,
                t.prototype.getDataType = function() {
                    return Lt(this._data, ir)
                }
                ,
                t.prototype.storage = function() {
                    return "dense"
                }
                ,
                t.prototype.datatype = function() {
                    return this._datatype
                }
                ,
                t.prototype.create = function(o, l) {
                    return new t(o,l)
                }
                ,
                t.prototype.subset = function(o, l, D) {
                    switch (arguments.length) {
                    case 1:
                        return function n(o, l) {
                            if (!N(l))
                                throw new TypeError("Invalid index");
                            if (l.isScalar())
                                return o.get(l.min());
                            var y = l.size();
                            if (y.length !== o._size.length)
                                throw new Te(y.length,o._size.length);
                            for (var A = l.min(), a = l.max(), h = 0, p = o._size.length; h < p; h++)
                                Ge(A[h], o._size[h]),
                                Ge(a[h], o._size[h]);
                            return new t(i(o._data, l, y.length, 0),o._datatype)
                        }(this, o);
                    case 2:
                    case 3:
                        return function u(o, l, D, y) {
                            if (!l || !0 !== l.isIndex)
                                throw new TypeError("Invalid index");
                            var h, A = l.size(), a = l.isScalar();
                            if (T(D) ? (h = D.size(),
                            D = D.valueOf()) : h = br(D),
                            a) {
                                if (0 !== h.length)
                                    throw new TypeError("Scalar expected");
                                o.set(l.min(), D, y)
                            } else {
                                if (A.length < o._size.length)
                                    throw new Te(A.length,o._size.length,"<");
                                if (h.length < A.length) {
                                    for (var p = 0, B = 0; 1 === A[p] && 1 === h[p]; )
                                        p++;
                                    for (; 1 === A[p]; )
                                        B++,
                                        p++;
                                    D = yt(D, A.length, B, h)
                                }
                                if (!Gr(A, h))
                                    throw new Te(A,h,">");
                                c(o, l.max().map(function(w) {
                                    return w + 1
                                }), y),
                                s(o._data, l, D, A.length, 0)
                            }
                            return o
                        }(this, o, l, D);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                    }
                }
                ,
                t.prototype.get = function(o) {
                    if (!te(o))
                        throw new TypeError("Array expected");
                    if (o.length !== this._size.length)
                        throw new Te(o.length,this._size.length);
                    for (var l = 0; l < o.length; l++)
                        Ge(o[l], this._size[l]);
                    for (var D = this._data, y = 0, A = o.length; y < A; y++) {
                        var a = o[y];
                        Ge(a, D.length),
                        D = D[a]
                    }
                    return D
                }
                ,
                t.prototype.set = function(o, l, D) {
                    if (!te(o))
                        throw new TypeError("Array expected");
                    if (o.length < this._size.length)
                        throw new Te(o.length,this._size.length,"<");
                    var y, A, a;
                    c(this, o.map(function(B) {
                        return B + 1
                    }), D);
                    var p = this._data;
                    for (y = 0,
                    A = o.length - 1; y < A; y++)
                        Ge(a = o[y], p.length),
                        p = p[a];
                    return Ge(a = o[o.length - 1], p.length),
                    p[a] = l,
                    this
                }
                ,
                t.prototype.resize = function(o, l, D) {
                    if (!v(o))
                        throw new TypeError("Array or Matrix expected");
                    var y = o.valueOf().map(a=>Array.isArray(a) && 1 === a.length ? a[0] : a);
                    return f(D ? this.clone() : this, y, l)
                }
                ,
                t.prototype.reshape = function(o, l) {
                    var D = l ? this.clone() : this;
                    D._data = function sn(e, r) {
                        var t = function ut(e) {
                            if (!Array.isArray(e))
                                return e;
                            var r = [];
                            return e.forEach(function t(n) {
                                Array.isArray(n) ? n.forEach(t) : r.push(n)
                            }),
                            r
                        }(e)
                          , n = t.length;
                        if (!Array.isArray(e) || !Array.isArray(r))
                            throw new TypeError("Array expected");
                        if (0 === r.length)
                            throw new Te(0,n,"!=");
                        var i = Ut(r = gt(r, n));
                        if (n !== i)
                            throw new Te(i,n,"!=");
                        try {
                            return function jr(e, r) {
                                for (var n, t = e, i = r.length - 1; i > 0; i--) {
                                    var u = r[i];
                                    n = [];
                                    for (var s = t.length / u, f = 0; f < s; f++)
                                        n.push(t.slice(f * u, (f + 1) * u));
                                    t = n
                                }
                                return t
                            }(t, r)
                        } catch (u) {
                            throw u instanceof Te ? new Te(i,n,"!=") : u
                        }
                    }(D._data, o);
                    var y = D._size.reduce((A,a)=>A * a);
                    return D._size = gt(o, y),
                    D
                }
                ,
                t.prototype.clone = function() {
                    return new t({
                        data: Pe(this._data),
                        size: Pe(this._size),
                        datatype: this._datatype
                    })
                }
                ,
                t.prototype.size = function() {
                    return this._size.slice(0)
                }
                ,
                t.prototype.map = function(o) {
                    var l = this
                      , D = ni(o)
                      , A = function h(p, B) {
                        return te(p) ? p.map(function(m, M) {
                            return h(m, B.concat(M))
                        }) : 1 === D ? o(p) : 2 === D ? o(p, B) : o(p, B, l)
                    }(this._data, []);
                    return new t(A,void 0 !== this._datatype ? Lt(A, ir) : void 0)
                }
                ,
                t.prototype.forEach = function(o) {
                    var l = this;
                    !function y(A, a) {
                        te(A) ? A.forEach(function(h, p) {
                            y(h, a.concat(p))
                        }) : o(A, a, l)
                    }(this._data, [])
                }
                ,
                t.prototype[Symbol.iterator] = function*() {
                    yield*function *l(D, y) {
                        if (te(D))
                            for (var A = 0; A < D.length; A++)
                                yield*l(D[A], y.concat(A));
                        else
                            yield{
                                value: D,
                                index: y
                            }
                    }(this._data, [])
                }
                ,
                t.prototype.rows = function() {
                    var o = [];
                    if (2 !== this.size().length)
                        throw new TypeError("Rows can only be returned for a 2D matrix.");
                    var D = this._data;
                    for (var y of D)
                        o.push(new t([y],this._datatype));
                    return o
                }
                ,
                t.prototype.columns = function() {
                    var o = this
                      , l = []
                      , D = this.size();
                    if (2 !== D.length)
                        throw new TypeError("Rows can only be returned for a 2D matrix.");
                    for (var y = this._data, A = function(p) {
                        var B = y.map(m=>[m[p]]);
                        l.push(new t(B,o._datatype))
                    }, a = 0; a < D[1]; a++)
                        A(a);
                    return l
                }
                ,
                t.prototype.toArray = function() {
                    return Pe(this._data)
                }
                ,
                t.prototype.valueOf = function() {
                    return this._data
                }
                ,
                t.prototype.format = function(o) {
                    return Ke(this._data, o)
                }
                ,
                t.prototype.toString = function() {
                    return Ke(this._data)
                }
                ,
                t.prototype.toJSON = function() {
                    return {
                        mathjs: "DenseMatrix",
                        data: this._data,
                        size: this._size,
                        datatype: this._datatype
                    }
                }
                ,
                t.prototype.diagonal = function(o) {
                    if (o) {
                        if (L(o) && (o = o.toNumber()),
                        !k(o) || !P(o))
                            throw new TypeError("The parameter k must be an integer number")
                    } else
                        o = 0;
                    for (var l = o > 0 ? o : 0, D = o < 0 ? -o : 0, a = Math.min(this._size[0] - D, this._size[1] - l), h = [], p = 0; p < a; p++)
                        h[p] = this._data[p + D][p + l];
                    return new t({
                        data: h,
                        size: [a],
                        datatype: this._datatype
                    })
                }
                ,
                t.diagonal = function(o, l, D, y) {
                    if (!te(o))
                        throw new TypeError("Array expected, size parameter");
                    if (2 !== o.length)
                        throw new Error("Only two dimensions matrix are supported");
                    if (o = o.map(function(x) {
                        if (L(x) && (x = x.toNumber()),
                        !k(x) || !P(x) || x < 1)
                            throw new Error("Size values must be positive integers");
                        return x
                    }),
                    D) {
                        if (L(D) && (D = D.toNumber()),
                        !k(D) || !P(D))
                            throw new TypeError("The parameter k must be an integer number")
                    } else
                        D = 0;
                    var m, A = D > 0 ? D : 0, a = D < 0 ? -D : 0, h = o[0], p = o[1], B = Math.min(h - a, p - A);
                    if (te(l)) {
                        if (l.length !== B)
                            throw new Error("Invalid value array length");
                        m = function(S) {
                            return l[S]
                        }
                    } else if (T(l)) {
                        var M = l.size();
                        if (1 !== M.length || M[0] !== B)
                            throw new Error("Invalid matrix length");
                        m = function(S) {
                            return l.get([S])
                        }
                    } else
                        m = function() {
                            return l
                        }
                        ;
                    y || (y = L(m(0)) ? m(0).mul(0) : 0);
                    var C = [];
                    if (o.length > 0) {
                        C = pt(C, o, y);
                        for (var w = 0; w < B; w++)
                            C[w + a][w + A] = m(w)
                    }
                    return new t({
                        data: C,
                        size: [h, p]
                    })
                }
                ,
                t.fromJSON = function(o) {
                    return new t(o)
                }
                ,
                t.prototype.swapRows = function(o, l) {
                    if (!(k(o) && P(o) && k(l) && P(l)))
                        throw new Error("Row index must be positive integers");
                    if (2 !== this._size.length)
                        throw new Error("Only two dimensional matrix is supported");
                    return Ge(o, this._size[0]),
                    Ge(l, this._size[0]),
                    t._swapRows(o, l, this._data),
                    this
                }
                ,
                t._swapRows = function(o, l, D) {
                    var y = D[o];
                    D[o] = D[l],
                    D[l] = y
                }
                ,
                t
            }
            , {
                isClass: !0
            })
        }
          , qr = J(44613)
          , gn = {
            createFractionClass: me("Fraction", [], ()=>(Object.defineProperty(qr, "name", {
                value: "Fraction"
            }),
            qr.prototype.constructor = qr,
            qr.prototype.type = "Fraction",
            qr.prototype.isFraction = !0,
            qr.prototype.toJSON = function() {
                return {
                    mathjs: "Fraction",
                    n: this.s * this.n,
                    d: this.d
                }
            }
            ,
            qr.fromJSON = function(e) {
                return new qr(e)
            }
            ,
            qr), {
                isClass: !0
            })
        }
          , Dr = J(1006)
          , ju = {
            createComplexClass: me("Complex", [], ()=>(Object.defineProperty(Dr, "name", {
                value: "Complex"
            }),
            Dr.prototype.constructor = Dr,
            Dr.prototype.type = "Complex",
            Dr.prototype.isComplex = !0,
            Dr.prototype.toJSON = function() {
                return {
                    mathjs: "Complex",
                    re: this.re,
                    im: this.im
                }
            }
            ,
            Dr.prototype.toPolar = function() {
                return {
                    r: this.abs(),
                    phi: this.arg()
                }
            }
            ,
            Dr.prototype.format = function(e) {
                var t = this.im
                  , n = this.re
                  , i = re(this.re, e)
                  , u = re(this.im, e)
                  , s = k(e) ? e : e ? e.precision : null;
                if (null !== s) {
                    var f = Math.pow(10, -s);
                    Math.abs(n / t) < f && (n = 0),
                    Math.abs(t / n) < f && (t = 0)
                }
                return 0 === t ? i : 0 === n ? 1 === t ? "i" : -1 === t ? "-i" : u + "i" : t < 0 ? -1 === t ? i + " - i" : i + " - " + u.substring(1) + "i" : 1 === t ? i + " + i" : i + " + " + u + "i"
            }
            ,
            Dr.fromPolar = function(e) {
                switch (arguments.length) {
                case 1:
                    var r = arguments[0];
                    if ("object" == typeof r)
                        return Dr(r);
                    throw new TypeError("Input has to be an object with r and phi keys.");
                case 2:
                    var t = arguments[0]
                      , n = arguments[1];
                    if (k(t)) {
                        if (Oe(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")),
                        k(n))
                            return new Dr({
                                r: t,
                                phi: n
                            });
                        throw new TypeError("Phi is not a number nor an angle unit.")
                    }
                    throw new TypeError("Radius r is not a number.");
                default:
                    throw new SyntaxError("Wrong number of arguments in function fromPolar")
                }
            }
            ,
            Dr.prototype.valueOf = Dr.prototype.toString,
            Dr.fromJSON = function(e) {
                return new Dr(e)
            }
            ,
            Dr.compare = function(e, r) {
                return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0
            }
            ,
            Dr), {
                isClass: !0
            })
        };
        function ii(e, r) {
            return !(!e || "object" != typeof e || !er(ta, r) && (r in Object.prototype || r in Function.prototype))
        }
        function ai(e) {
            return "object" == typeof e && e && e.constructor === Object
        }
        var ta = {
            length: !0,
            name: !0
        }
          , na = {
            toString: !0,
            valueOf: !0,
            toLocaleString: !0
        };
        class yn {
            constructor(r) {
                this.wrappedObject = r
            }
            keys() {
                return Object.keys(this.wrappedObject)
            }
            get(r) {
                return function ku(e, r) {
                    if (ai(e) && ii(e, r))
                        return e[r];
                    throw "function" == typeof e[r] && function ui(e, r) {
                        return !(null == e || "function" != typeof e[r] || er(e, r) && Object.getPrototypeOf && r in Object.getPrototypeOf(e) || !er(na, r) && (r in Object.prototype || r in Function.prototype))
                    }(e, r) ? new Error('Cannot access method "' + r + '" as a property') : new Error('No access to property "' + r + '"')
                }(this.wrappedObject, r)
            }
            set(r, t) {
                return function ea(e, r, t) {
                    if (ai(e) && ii(e, r))
                        return e[r] = t,
                        t;
                    throw new Error('No access to property "' + r + '"')
                }(this.wrappedObject, r, t),
                this
            }
            has(r) {
                return function ra(e, r) {
                    return r in e
                }(this.wrappedObject, r)
            }
        }
        function En(e) {
            return !!e && (e instanceof Map || e instanceof yn || "function" == typeof e.set && "function" == typeof e.get && "function" == typeof e.keys && "function" == typeof e.has)
        }
        var oi = function() {
            return oi = Ae.create,
            Ae
        };
        function An(e) {
            throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"))
        }
        function Jt(e) {
            throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"))
        }
        function wn(e) {
            throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."))
        }
        var Je = {
            BigNumberDependencies: $t,
            ComplexDependencies: ju,
            DenseMatrixDependencies: Ft,
            FractionDependencies: gn,
            createTyped: me("typed", ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], function(r) {
                var {BigNumber: t, Complex: n, DenseMatrix: i, Fraction: u} = r
                  , s = oi();
                return s.clear(),
                s.addTypes([{
                    name: "number",
                    test: k
                }, {
                    name: "Complex",
                    test: Se
                }, {
                    name: "BigNumber",
                    test: L
                }, {
                    name: "Fraction",
                    test: Me
                }, {
                    name: "Unit",
                    test: Oe
                }, {
                    name: "identifier",
                    test: f=>oe && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(f)
                }, {
                    name: "string",
                    test: oe
                }, {
                    name: "Chain",
                    test: Cr
                }, {
                    name: "Array",
                    test: te
                }, {
                    name: "Matrix",
                    test: T
                }, {
                    name: "DenseMatrix",
                    test: E
                }, {
                    name: "SparseMatrix",
                    test: F
                }, {
                    name: "Range",
                    test: b
                }, {
                    name: "Index",
                    test: N
                }, {
                    name: "boolean",
                    test: z
                }, {
                    name: "ResultSet",
                    test: W
                }, {
                    name: "Help",
                    test: X
                }, {
                    name: "function",
                    test: xe
                }, {
                    name: "Date",
                    test: K
                }, {
                    name: "RegExp",
                    test: be
                }, {
                    name: "null",
                    test: Ne
                }, {
                    name: "undefined",
                    test: ae
                }, {
                    name: "AccessorNode",
                    test: R
                }, {
                    name: "ArrayNode",
                    test: ue
                }, {
                    name: "AssignmentNode",
                    test: se
                }, {
                    name: "BlockNode",
                    test: ye
                }, {
                    name: "ConditionalNode",
                    test: Ee
                }, {
                    name: "ConstantNode",
                    test: he
                }, {
                    name: "FunctionNode",
                    test: Be
                }, {
                    name: "FunctionAssignmentNode",
                    test: Le
                }, {
                    name: "IndexNode",
                    test: We
                }, {
                    name: "Node",
                    test: qe
                }, {
                    name: "ObjectNode",
                    test: Ze
                }, {
                    name: "OperatorNode",
                    test: Ve
                }, {
                    name: "ParenthesisNode",
                    test: Br
                }, {
                    name: "RangeNode",
                    test: ke
                }, {
                    name: "RelationalNode",
                    test: Nr
                }, {
                    name: "SymbolNode",
                    test: Fr
                }, {
                    name: "Map",
                    test: En
                }, {
                    name: "Object",
                    test: we
                }]),
                s.addConversions([{
                    from: "number",
                    to: "BigNumber",
                    convert: function(c) {
                        if (t || An(c),
                        function lr(e) {
                            return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
                        }(c) > 15)
                            throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + c + "). Use function bignumber(x) to convert to BigNumber.");
                        return new t(c)
                    }
                }, {
                    from: "number",
                    to: "Complex",
                    convert: function(c) {
                        return n || Jt(c),
                        new n(c,0)
                    }
                }, {
                    from: "BigNumber",
                    to: "Complex",
                    convert: function(c) {
                        return n || Jt(c),
                        new n(c.toNumber(),0)
                    }
                }, {
                    from: "Fraction",
                    to: "BigNumber",
                    convert: function(c) {
                        throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")
                    }
                }, {
                    from: "Fraction",
                    to: "Complex",
                    convert: function(c) {
                        return n || Jt(c),
                        new n(c.valueOf(),0)
                    }
                }, {
                    from: "number",
                    to: "Fraction",
                    convert: function(c) {
                        u || wn(c);
                        var d = new u(c);
                        if (d.valueOf() !== c)
                            throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + c + "). Use function fraction(x) to convert to Fraction.");
                        return d
                    }
                }, {
                    from: "string",
                    to: "number",
                    convert: function(c) {
                        var d = Number(c);
                        if (isNaN(d))
                            throw new Error('Cannot convert "' + c + '" to a number');
                        return d
                    }
                }, {
                    from: "string",
                    to: "BigNumber",
                    convert: function(c) {
                        t || An(c);
                        try {
                            return new t(c)
                        } catch {
                            throw new Error('Cannot convert "' + c + '" to BigNumber')
                        }
                    }
                }, {
                    from: "string",
                    to: "Fraction",
                    convert: function(c) {
                        u || wn(c);
                        try {
                            return new u(c)
                        } catch {
                            throw new Error('Cannot convert "' + c + '" to Fraction')
                        }
                    }
                }, {
                    from: "string",
                    to: "Complex",
                    convert: function(c) {
                        n || Jt(c);
                        try {
                            return new n(c)
                        } catch {
                            throw new Error('Cannot convert "' + c + '" to Complex')
                        }
                    }
                }, {
                    from: "boolean",
                    to: "number",
                    convert: function(c) {
                        return +c
                    }
                }, {
                    from: "boolean",
                    to: "BigNumber",
                    convert: function(c) {
                        return t || An(c),
                        new t(+c)
                    }
                }, {
                    from: "boolean",
                    to: "Fraction",
                    convert: function(c) {
                        return u || wn(c),
                        new u(+c)
                    }
                }, {
                    from: "boolean",
                    to: "string",
                    convert: function(c) {
                        return String(c)
                    }
                }, {
                    from: "Array",
                    to: "Matrix",
                    convert: function(c) {
                        return i || function oa() {
                            throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")
                        }(),
                        new i(c)
                    }
                }, {
                    from: "Matrix",
                    to: "Array",
                    convert: function(c) {
                        return c.valueOf()
                    }
                }]),
                s.onMismatch = (f,c,d)=>{
                    var o = s.createError(f, c, d);
                    if (["wrongType", "mismatch"].includes(o.data.category) && 1 === c.length && v(c[0]) && d.some(D=>!D.params.includes(","))) {
                        var l = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
                        throw l.data = o.data,
                        l
                    }
                    throw o
                }
                ,
                s.onMismatch = (f,c,d)=>{
                    var o = s.createError(f, c, d);
                    if (["wrongType", "mismatch"].includes(o.data.category) && 1 === c.length && v(c[0]) && d.some(D=>!D.params.includes(","))) {
                        var l = new TypeError("Function '".concat(f, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(f, ")'."));
                        throw l.data = o.data,
                        l
                    }
                    throw o
                }
                ,
                s
            })
        };
        function Zr(e, r, t) {
            return e && "function" == typeof e.map ? e.map(function(n) {
                return Zr(n, r, t)
            }) : r(e)
        }
        var si = "isInteger"
          , la = {
            typedDependencies: Je,
            createIsInteger: me(si, ["typed"], e=>{
                var {typed: r} = e;
                return r(si, {
                    number: P,
                    BigNumber: function(n) {
                        return n.isInt()
                    },
                    Fraction: function(n) {
                        return 1 === n.d && isFinite(n.n)
                    },
                    "Array | Matrix": r.referToSelf(t=>n=>Zr(n, t))
                })
            }
            )
        };
        function fi(e, r, t) {
            if (null == t)
                return e.eq(r);
            if (e.eq(r))
                return !0;
            if (e.isNaN() || r.isNaN())
                return !1;
            if (e.isFinite() && r.isFinite()) {
                var n = e.minus(r).abs();
                if (n.isZero())
                    return !0;
                var i = e.constructor.max(e.abs(), r.abs());
                return n.lte(i.times(t))
            }
            return !1
        }
        var ci = me("compareUnits", ["typed"], e=>{
            var {typed: r} = e;
            return {
                "Unit, Unit": r.referToSelf(t=>(n,i)=>{
                    if (!n.equalBase(i))
                        throw new Error("Cannot compare units with different base");
                    return r.find(t, [n.valueType(), i.valueType()])(n.value, i.value)
                }
                )
            }
        }
        )
          , Xt = "equalScalar"
          , Da = me(Xt, ["typed", "config"], e=>{
            var {typed: r, config: t} = e
              , n = ci({
                typed: r
            });
            return r(Xt, {
                "boolean, boolean": function(u, s) {
                    return u === s
                },
                "number, number": function(u, s) {
                    return xr(u, s, t.epsilon)
                },
                "BigNumber, BigNumber": function(u, s) {
                    return u.eq(s) || fi(u, s, t.epsilon)
                },
                "Fraction, Fraction": function(u, s) {
                    return u.equals(s)
                },
                "Complex, Complex": function(u, s) {
                    return function da(e, r, t) {
                        return xr(e.re, r.re, t) && xr(e.im, r.im, t)
                    }(u, s, t.epsilon)
                }
            }, n)
        }
        )
          , Ct = (me(Xt, ["typed", "config"], e=>{
            var {typed: r, config: t} = e;
            return r(Xt, {
                "number, number": function(i, u) {
                    return xr(i, u, t.epsilon)
                }
            })
        }
        ),
        {
            typedDependencies: Je,
            createEqualScalar: Da
        })
          , li = {
            MatrixDependencies: mn,
            equalScalarDependencies: Ct,
            typedDependencies: Je,
            createSparseMatrixClass: me("SparseMatrix", ["typed", "equalScalar", "Matrix"], e=>{
                var {typed: r, equalScalar: t, Matrix: n} = e;
                function i(a, h) {
                    if (!(this instanceof i))
                        throw new SyntaxError("Constructor must be called with the new operator");
                    if (h && !oe(h))
                        throw new Error("Invalid datatype: " + h);
                    if (T(a))
                        !function u(a, h, p) {
                            "SparseMatrix" === h.type ? (a._values = h._values ? Pe(h._values) : void 0,
                            a._index = Pe(h._index),
                            a._ptr = Pe(h._ptr),
                            a._size = Pe(h._size),
                            a._datatype = p || h._datatype) : s(a, h.valueOf(), p || h._datatype)
                        }(this, a, h);
                    else if (a && te(a.index) && te(a.ptr) && te(a.size))
                        this._values = a.values,
                        this._index = a.index,
                        this._ptr = a.ptr,
                        this._size = a.size,
                        this._datatype = h || a.datatype;
                    else if (te(a))
                        s(this, a, h);
                    else {
                        if (a)
                            throw new TypeError("Unsupported type of data (" + ir(a) + ")");
                        this._values = [],
                        this._index = [],
                        this._ptr = [0],
                        this._size = [0, 0],
                        this._datatype = h
                    }
                }
                function s(a, h, p) {
                    a._values = [],
                    a._index = [],
                    a._ptr = [],
                    a._datatype = p;
                    var B = h.length
                      , m = 0
                      , M = t
                      , C = 0;
                    if (oe(p) && (M = r.find(t, [p, p]) || t,
                    C = r.convert(0, p)),
                    B > 0) {
                        var w = 0;
                        do {
                            a._ptr.push(a._index.length);
                            for (var x = 0; x < B; x++) {
                                var S = h[x];
                                if (te(S)) {
                                    if (0 === w && m < S.length && (m = S.length),
                                    w < S.length) {
                                        var O = S[w];
                                        M(O, C) || (a._values.push(O),
                                        a._index.push(x))
                                    }
                                } else
                                    0 === w && m < 1 && (m = 1),
                                    M(S, C) || (a._values.push(S),
                                    a._index.push(x))
                            }
                            w++
                        } while (w < m)
                    }
                    a._ptr.push(a._index.length),
                    a._size = [B, m]
                }
                function d(a, h, p, B) {
                    if (p - h == 0)
                        return p;
                    for (var m = h; m < p; m++)
                        if (B[m] === a)
                            return m;
                    return h
                }
                function l(a, h, p, B, m, M, C) {
                    m.splice(a, 0, B),
                    M.splice(a, 0, h);
                    for (var w = p + 1; w < C.length; w++)
                        C[w]++
                }
                function D(a, h, p, B) {
                    var m = B || 0
                      , M = t
                      , C = 0;
                    oe(a._datatype) && (M = r.find(t, [a._datatype, a._datatype]) || t,
                    C = r.convert(0, a._datatype),
                    m = r.convert(m, a._datatype));
                    var O, U, H, w = !M(m, C), x = a._size[0], S = a._size[1];
                    if (p > S) {
                        for (U = S; U < p; U++)
                            if (a._ptr[U] = a._values.length,
                            w)
                                for (O = 0; O < x; O++)
                                    a._values.push(m),
                                    a._index.push(O);
                        a._ptr[p] = a._values.length
                    } else
                        p < S && (a._ptr.splice(p + 1, S - p),
                        a._values.splice(a._ptr[p], a._values.length),
                        a._index.splice(a._ptr[p], a._index.length));
                    if (S = p,
                    h > x) {
                        if (w) {
                            var ee = 0;
                            for (U = 0; U < S; U++) {
                                a._ptr[U] = a._ptr[U] + ee,
                                H = a._ptr[U + 1] + ee;
                                var le = 0;
                                for (O = x; O < h; O++,
                                le++)
                                    a._values.splice(H + le, 0, m),
                                    a._index.splice(H + le, 0, O),
                                    ee++
                            }
                            a._ptr[S] = a._values.length
                        }
                    } else if (h < x) {
                        var ne = 0;
                        for (U = 0; U < S; U++) {
                            a._ptr[U] = a._ptr[U] - ne;
                            var V = a._ptr[U + 1] - ne;
                            for (H = a._ptr[U]; H < V; H++)
                                (O = a._index[H]) > h - 1 && (a._values.splice(H, 1),
                                a._index.splice(H, 1),
                                ne++)
                        }
                        a._ptr[U] = a._values.length
                    }
                    return a._size[0] = h,
                    a._size[1] = p,
                    a
                }
                function A(a, h, p, B, m) {
                    var x, S, M = B[0], C = B[1], w = [];
                    for (x = 0; x < M; x++)
                        for (w[x] = [],
                        S = 0; S < C; S++)
                            w[x][S] = 0;
                    for (S = 0; S < C; S++)
                        for (var U = p[S + 1], H = p[S]; H < U; H++)
                            w[x = h[H]][S] = a ? m ? Pe(a[H]) : a[H] : 1;
                    return w
                }
                return (i.prototype = new n).createSparseMatrix = function(a, h) {
                    return new i(a,h)
                }
                ,
                Object.defineProperty(i, "name", {
                    value: "SparseMatrix"
                }),
                i.prototype.constructor = i,
                i.prototype.type = "SparseMatrix",
                i.prototype.isSparseMatrix = !0,
                i.prototype.getDataType = function() {
                    return Lt(this._values, ir)
                }
                ,
                i.prototype.storage = function() {
                    return "sparse"
                }
                ,
                i.prototype.datatype = function() {
                    return this._datatype
                }
                ,
                i.prototype.create = function(a, h) {
                    return new i(a,h)
                }
                ,
                i.prototype.density = function() {
                    var a = this._size[0]
                      , h = this._size[1];
                    return 0 !== a && 0 !== h ? this._index.length / (a * h) : 0
                }
                ,
                i.prototype.subset = function(a, h, p) {
                    if (!this._values)
                        throw new Error("Cannot invoke subset on a Pattern only matrix");
                    switch (arguments.length) {
                    case 1:
                        return function f(a, h) {
                            if (!N(h))
                                throw new TypeError("Invalid index");
                            if (h.isScalar())
                                return a.get(h.min());
                            var B = h.size();
                            if (B.length !== a._size.length)
                                throw new Te(B.length,a._size.length);
                            var m, M, C, w, x = h.min(), S = h.max();
                            for (m = 0,
                            M = a._size.length; m < M; m++)
                                Ge(x[m], a._size[m]),
                                Ge(S[m], a._size[m]);
                            var O = a._values
                              , U = a._index
                              , H = a._ptr
                              , ee = h.dimension(0)
                              , le = h.dimension(1)
                              , ne = []
                              , ie = [];
                            ee.forEach(function(ve, Ce) {
                                ie[ve] = Ce[0],
                                ne[ve] = !0
                            });
                            var V = O ? [] : void 0
                              , De = []
                              , fe = [];
                            return le.forEach(function(ve) {
                                for (fe.push(De.length),
                                C = H[ve],
                                w = H[ve + 1]; C < w; C++)
                                    !0 === ne[m = U[C]] && (De.push(ie[m]),
                                    V && V.push(O[C]))
                            }),
                            fe.push(De.length),
                            new i({
                                values: V,
                                index: De,
                                ptr: fe,
                                size: B,
                                datatype: a._datatype
                            })
                        }(this, a);
                    case 2:
                    case 3:
                        return function c(a, h, p, B) {
                            if (!h || !0 !== h.isIndex)
                                throw new TypeError("Invalid index");
                            var C, m = h.size(), M = h.isScalar();
                            if (T(p) ? (C = p.size(),
                            p = p.toArray()) : C = br(p),
                            M) {
                                if (0 !== C.length)
                                    throw new TypeError("Scalar expected");
                                a.set(h.min(), p, B)
                            } else {
                                if (1 !== m.length && 2 !== m.length)
                                    throw new Te(m.length,a._size.length,"<");
                                if (C.length < m.length) {
                                    for (var w = 0, x = 0; 1 === m[w] && 1 === C[w]; )
                                        w++;
                                    for (; 1 === m[w]; )
                                        x++,
                                        w++;
                                    p = yt(p, m.length, x, C)
                                }
                                if (!Gr(m, C))
                                    throw new Te(m,C,">");
                                if (1 === m.length)
                                    h.dimension(0).forEach(function(H, ee) {
                                        Ge(H),
                                        a.set([H, 0], p[ee[0]], B)
                                    });
                                else {
                                    var O = h.dimension(0)
                                      , U = h.dimension(1);
                                    O.forEach(function(H, ee) {
                                        Ge(H),
                                        U.forEach(function(le, ne) {
                                            Ge(le),
                                            a.set([H, le], p[ee[0]][ne[0]], B)
                                        })
                                    })
                                }
                            }
                            return a
                        }(this, a, h, p);
                    default:
                        throw new SyntaxError("Wrong number of arguments")
                    }
                }
                ,
                i.prototype.get = function(a) {
                    if (!te(a))
                        throw new TypeError("Array expected");
                    if (a.length !== this._size.length)
                        throw new Te(a.length,this._size.length);
                    if (!this._values)
                        throw new Error("Cannot invoke get on a Pattern only matrix");
                    var h = a[0]
                      , p = a[1];
                    Ge(h, this._size[0]),
                    Ge(p, this._size[1]);
                    var B = d(h, this._ptr[p], this._ptr[p + 1], this._index);
                    return B < this._ptr[p + 1] && this._index[B] === h ? this._values[B] : 0
                }
                ,
                i.prototype.set = function(a, h, p) {
                    if (!te(a))
                        throw new TypeError("Array expected");
                    if (a.length !== this._size.length)
                        throw new Te(a.length,this._size.length);
                    if (!this._values)
                        throw new Error("Cannot invoke set on a Pattern only matrix");
                    var B = a[0]
                      , m = a[1]
                      , M = this._size[0]
                      , C = this._size[1]
                      , w = t
                      , x = 0;
                    oe(this._datatype) && (w = r.find(t, [this._datatype, this._datatype]) || t,
                    x = r.convert(0, this._datatype)),
                    (B > M - 1 || m > C - 1) && (D(this, Math.max(B + 1, M), Math.max(m + 1, C), p),
                    M = this._size[0],
                    C = this._size[1]),
                    Ge(B, M),
                    Ge(m, C);
                    var S = d(B, this._ptr[m], this._ptr[m + 1], this._index);
                    return S < this._ptr[m + 1] && this._index[S] === B ? w(h, x) ? function o(a, h, p, B, m) {
                        p.splice(a, 1),
                        B.splice(a, 1);
                        for (var M = h + 1; M < m.length; M++)
                            m[M]--
                    }(S, m, this._values, this._index, this._ptr) : this._values[S] = h : w(h, x) || l(S, B, m, h, this._values, this._index, this._ptr),
                    this
                }
                ,
                i.prototype.resize = function(a, h, p) {
                    if (!v(a))
                        throw new TypeError("Array or Matrix expected");
                    var B = a.valueOf().map(M=>Array.isArray(M) && 1 === M.length ? M[0] : M);
                    if (2 !== B.length)
                        throw new Error("Only two dimensions matrix are supported");
                    return B.forEach(function(M) {
                        if (!k(M) || !P(M) || M < 0)
                            throw new TypeError("Invalid size, must contain positive integers (size: " + Ke(B) + ")")
                    }),
                    D(p ? this.clone() : this, B[0], B[1], h)
                }
                ,
                i.prototype.reshape = function(a, h) {
                    if (!te(a))
                        throw new TypeError("Array expected");
                    if (2 !== a.length)
                        throw new Error("Sparse matrices can only be reshaped in two dimensions");
                    a.forEach(function(ve) {
                        if (!k(ve) || !P(ve) || ve <= -2 || 0 === ve)
                            throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Ke(a) + ")")
                    });
                    var p = this._size[0] * this._size[1];
                    if (p !== (a = gt(a, p))[0] * a[1])
                        throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
                    var m = h ? this.clone() : this;
                    if (this._size[0] === a[0] && this._size[1] === a[1])
                        return m;
                    for (var M = [], C = 0; C < m._ptr.length; C++)
                        for (var w = 0; w < m._ptr[C + 1] - m._ptr[C]; w++)
                            M.push(C);
                    for (var x = m._values.slice(), S = m._index.slice(), O = 0; O < m._index.length; O++) {
                        var ee = S[O] * m._size[1] + M[O];
                        M[O] = ee % a[1],
                        S[O] = Math.floor(ee / a[1])
                    }
                    m._values.length = 0,
                    m._index.length = 0,
                    m._ptr.length = a[1] + 1,
                    m._size = a.slice();
                    for (var le = 0; le < m._ptr.length; le++)
                        m._ptr[le] = 0;
                    for (var ne = 0; ne < x.length; ne++) {
                        var ie = S[ne]
                          , V = M[ne]
                          , De = x[ne];
                        l(d(ie, m._ptr[V], m._ptr[V + 1], m._index), ie, V, De, m._values, m._index, m._ptr)
                    }
                    return m
                }
                ,
                i.prototype.clone = function() {
                    return new i({
                        values: this._values ? Pe(this._values) : void 0,
                        index: Pe(this._index),
                        ptr: Pe(this._ptr),
                        size: Pe(this._size),
                        datatype: this._datatype
                    })
                }
                ,
                i.prototype.size = function() {
                    return this._size.slice(0)
                }
                ,
                i.prototype.map = function(a, h) {
                    if (!this._values)
                        throw new Error("Cannot invoke map on a Pattern only matrix");
                    var p = this
                      , B = this._size[0]
                      , m = this._size[1]
                      , M = ni(a);
                    return function y(a, h, p, B, m, M, C) {
                        var w = []
                          , x = []
                          , S = []
                          , O = t
                          , U = 0;
                        oe(a._datatype) && (O = r.find(t, [a._datatype, a._datatype]) || t,
                        U = r.convert(0, a._datatype));
                        for (var H = function(Ie, cr, sr) {
                            Ie = M(Ie, cr, sr),
                            O(Ie, U) || (w.push(Ie),
                            x.push(cr))
                        }, ee = B; ee <= m; ee++) {
                            S.push(w.length);
                            var le = a._ptr[ee]
                              , ne = a._ptr[ee + 1];
                            if (C)
                                for (var ie = le; ie < ne; ie++) {
                                    var V = a._index[ie];
                                    V >= h && V <= p && H(a._values[ie], V - h, ee - B)
                                }
                            else {
                                for (var De = {}, fe = le; fe < ne; fe++)
                                    De[a._index[fe]] = a._values[fe];
                                for (var Ce = h; Ce <= p; Ce++)
                                    H(Ce in De ? De[Ce] : 0, Ce - h, ee - B)
                            }
                        }
                        return S.push(w.length),
                        new i({
                            values: w,
                            index: x,
                            ptr: S,
                            size: [p - h + 1, m - B + 1]
                        })
                    }(this, 0, B - 1, 0, m - 1, function(x, S, O) {
                        return 1 === M ? a(x) : 2 === M ? a(x, [S, O]) : a(x, [S, O], p)
                    }, h)
                }
                ,
                i.prototype.forEach = function(a, h) {
                    if (!this._values)
                        throw new Error("Cannot invoke forEach on a Pattern only matrix");
                    for (var B = this._size[0], m = this._size[1], M = 0; M < m; M++) {
                        var C = this._ptr[M]
                          , w = this._ptr[M + 1];
                        if (h)
                            for (var x = C; x < w; x++)
                                a(this._values[x], [this._index[x], M], this);
                        else {
                            for (var O = {}, U = C; U < w; U++)
                                O[this._index[U]] = this._values[U];
                            for (var ee = 0; ee < B; ee++)
                                a(ee in O ? O[ee] : 0, [ee, M], this)
                        }
                    }
                }
                ,
                i.prototype[Symbol.iterator] = function*() {
                    if (!this._values)
                        throw new Error("Cannot iterate a Pattern only matrix");
                    for (var a = this._size[1], h = 0; h < a; h++)
                        for (var B = this._ptr[h + 1], m = this._ptr[h]; m < B; m++) {
                            var M = this._index[m];
                            yield{
                                value: this._values[m],
                                index: [M, h]
                            }
                        }
                }
                ,
                i.prototype.toArray = function() {
                    return A(this._values, this._index, this._ptr, this._size, !0)
                }
                ,
                i.prototype.valueOf = function() {
                    return A(this._values, this._index, this._ptr, this._size, !1)
                }
                ,
                i.prototype.format = function(a) {
                    for (var h = this._size[0], p = this._size[1], B = this.density(), m = "Sparse Matrix [" + Ke(h, a) + " x " + Ke(p, a) + "] density: " + Ke(B, a) + "\n", M = 0; M < p; M++)
                        for (var w = this._ptr[M + 1], x = this._ptr[M]; x < w; x++)
                            m += "\n    (" + Ke(this._index[x], a) + ", " + Ke(M, a) + ") ==> " + (this._values ? Ke(this._values[x], a) : "X");
                    return m
                }
                ,
                i.prototype.toString = function() {
                    return Ke(this.toArray())
                }
                ,
                i.prototype.toJSON = function() {
                    return {
                        mathjs: "SparseMatrix",
                        values: this._values,
                        index: this._index,
                        ptr: this._ptr,
                        size: this._size,
                        datatype: this._datatype
                    }
                }
                ,
                i.prototype.diagonal = function(a) {
                    if (a) {
                        if (L(a) && (a = a.toNumber()),
                        !k(a) || !P(a))
                            throw new TypeError("The parameter k must be an integer number")
                    } else
                        a = 0;
                    var h = a > 0 ? a : 0
                      , p = a < 0 ? -a : 0
                      , m = this._size[1]
                      , M = Math.min(this._size[0] - p, m - h)
                      , C = []
                      , w = []
                      , x = [];
                    x[0] = 0;
                    for (var S = h; S < m && C.length < M; S++)
                        for (var U = this._ptr[S + 1], H = this._ptr[S]; H < U; H++) {
                            var ee = this._index[H];
                            if (ee === S - h + p) {
                                C.push(this._values[H]),
                                w[C.length - 1] = ee - p;
                                break
                            }
                        }
                    return x.push(C.length),
                    new i({
                        values: C,
                        index: w,
                        ptr: x,
                        size: [M, 1]
                    })
                }
                ,
                i.fromJSON = function(a) {
                    return new i(a)
                }
                ,
                i.diagonal = function(a, h, p, B, m) {
                    if (!te(a))
                        throw new TypeError("Array expected, size parameter");
                    if (2 !== a.length)
                        throw new Error("Only two dimensions matrix are supported");
                    if (a = a.map(function(ve) {
                        if (L(ve) && (ve = ve.toNumber()),
                        !k(ve) || !P(ve) || ve < 1)
                            throw new Error("Size values must be positive integers");
                        return ve
                    }),
                    p) {
                        if (L(p) && (p = p.toNumber()),
                        !k(p) || !P(p))
                            throw new TypeError("The parameter k must be an integer number")
                    } else
                        p = 0;
                    var M = t
                      , C = 0;
                    oe(m) && (M = r.find(t, [m, m]) || t,
                    C = r.convert(0, m));
                    var H, w = p > 0 ? p : 0, x = p < 0 ? -p : 0, S = a[0], O = a[1], U = Math.min(S - x, O - w);
                    if (te(h)) {
                        if (h.length !== U)
                            throw new Error("Invalid value array length");
                        H = function(Ce) {
                            return h[Ce]
                        }
                    } else if (T(h)) {
                        var ee = h.size();
                        if (1 !== ee.length || ee[0] !== U)
                            throw new Error("Invalid matrix length");
                        H = function(Ce) {
                            return h.get([Ce])
                        }
                    } else
                        H = function() {
                            return h
                        }
                        ;
                    for (var le = [], ne = [], ie = [], V = 0; V < O; V++) {
                        ie.push(le.length);
                        var De = V - w;
                        if (De >= 0 && De < U) {
                            var fe = H(De);
                            M(fe, C) || (ne.push(De + x),
                            le.push(fe))
                        }
                    }
                    return ie.push(le.length),
                    new i({
                        values: le,
                        index: ne,
                        ptr: ie,
                        size: [S, O]
                    })
                }
                ,
                i.prototype.swapRows = function(a, h) {
                    if (!(k(a) && P(a) && k(h) && P(h)))
                        throw new Error("Row index must be positive integers");
                    if (2 !== this._size.length)
                        throw new Error("Only two dimensional matrix is supported");
                    return Ge(a, this._size[0]),
                    Ge(h, this._size[0]),
                    i._swapRows(a, h, this._size[1], this._values, this._index, this._ptr),
                    this
                }
                ,
                i._forEachRow = function(a, h, p, B, m) {
                    for (var C = B[a + 1], w = B[a]; w < C; w++)
                        m(p[w], h[w])
                }
                ,
                i._swapRows = function(a, h, p, B, m, M) {
                    for (var C = 0; C < p; C++) {
                        var w = M[C]
                          , x = M[C + 1]
                          , S = d(a, w, x, m)
                          , O = d(h, w, x, m);
                        if (S < x && O < x && m[S] === a && m[O] === h) {
                            if (B) {
                                var U = B[S];
                                B[S] = B[O],
                                B[O] = U
                            }
                        } else if (S < x && m[S] === a && (O >= x || m[O] !== h)) {
                            var H = B ? B[S] : void 0;
                            m.splice(O, 0, h),
                            B && B.splice(O, 0, H),
                            m.splice(O <= S ? S + 1 : S, 1),
                            B && B.splice(O <= S ? S + 1 : S, 1)
                        } else if (O < x && m[O] === h && (S >= x || m[S] !== a)) {
                            var ee = B ? B[O] : void 0;
                            m.splice(S, 0, a),
                            B && B.splice(S, 0, ee),
                            m.splice(S <= O ? O + 1 : O, 1),
                            B && B.splice(S <= O ? O + 1 : O, 1)
                        }
                    }
                }
                ,
                i
            }
            , {
                isClass: !0
            })
        }
          , Hr = {
            DenseMatrixDependencies: Ft,
            MatrixDependencies: mn,
            SparseMatrixDependencies: li,
            typedDependencies: Je,
            createMatrix: me("matrix", ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], e=>{
                var {typed: r, DenseMatrix: n, SparseMatrix: i} = e;
                return r("matrix", {
                    "": function() {
                        return u([])
                    },
                    string: function(f) {
                        return u([], f)
                    },
                    "string, string": function(f, c) {
                        return u([], f, c)
                    },
                    Array: function(f) {
                        return u(f)
                    },
                    Matrix: function(f) {
                        return u(f, f.storage())
                    },
                    "Array | Matrix, string": u,
                    "Array | Matrix, string, string": u
                });
                function u(s, f, c) {
                    if ("dense" === f || "default" === f || void 0 === f)
                        return new n(s,c);
                    if ("sparse" === f)
                        return new i(s,c);
                    throw new TypeError("Unknown matrix type " + JSON.stringify(f) + ".")
                }
            }
            )
        };
        function Di(e, r, t, n) {
            if (n < t) {
                if (e.length !== r.length)
                    throw new Te(e.length,r.length);
                for (var i = [], u = 0; u < e.length; u++)
                    i[u] = Di(e[u], r[u], t, n + 1);
                return i
            }
            return e.concat(r)
        }
        var vi = {
            isIntegerDependencies: la,
            matrixDependencies: Hr,
            typedDependencies: Je,
            createConcat: me("concat", ["typed", "matrix", "isInteger"], e=>{
                var {typed: r, matrix: t, isInteger: n} = e;
                return r("concat", {
                    "...Array | Matrix | number | BigNumber": function(u) {
                        var s, d, f = u.length, c = -1, o = !1, l = [];
                        for (s = 0; s < f; s++) {
                            var D = u[s];
                            if (T(D) && (o = !0),
                            k(D) || L(D)) {
                                if (s !== f - 1)
                                    throw new Error("Dimension must be specified as last argument");
                                if (d = c,
                                c = D.valueOf(),
                                !n(c))
                                    throw new TypeError("Integer number expected for dimension");
                                if (c < 0 || s > 0 && c > d)
                                    throw new zr(c,d + 1)
                            } else {
                                var y = Pe(D).valueOf()
                                  , A = br(y);
                                if (l[s] = y,
                                d = c,
                                c = A.length - 1,
                                s > 0 && c !== d)
                                    throw new Te(d + 1,c + 1)
                            }
                        }
                        if (0 === l.length)
                            throw new SyntaxError("At least one matrix expected");
                        for (var a = l.shift(); l.length; )
                            a = Di(a, l.shift(), c, 0);
                        return o ? t(a) : a
                    },
                    "...string": function(u) {
                        return u.join("")
                    }
                })
            }
            )
        }
          , pi = me("matAlgo03xDSf", ["typed"], e=>{
            var {typed: r} = e;
            return function(n, i, u, s) {
                var f = n._data
                  , c = n._size
                  , d = n._datatype
                  , o = i._values
                  , l = i._index
                  , D = i._ptr
                  , y = i._size
                  , A = i._datatype;
                if (c.length !== y.length)
                    throw new Te(c.length,y.length);
                if (c[0] !== y[0] || c[1] !== y[1])
                    throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + y + ")");
                if (!o)
                    throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                var p, a = c[0], h = c[1], B = 0, m = u;
                "string" == typeof d && d === A && (B = r.convert(0, p = d),
                m = r.find(u, [p, p]));
                for (var M = [], C = 0; C < a; C++)
                    M[C] = [];
                for (var w = [], x = [], S = 0; S < h; S++) {
                    for (var O = S + 1, H = D[S + 1], ee = D[S]; ee < H; ee++) {
                        var le = l[ee];
                        w[le] = s ? m(o[ee], f[le][S]) : m(f[le][S], o[ee]),
                        x[le] = O
                    }
                    for (var ne = 0; ne < a; ne++)
                        M[ne][S] = x[ne] === O ? w[ne] : s ? m(B, f[ne][S]) : m(f[ne][S], B)
                }
                return n.createDenseMatrix({
                    data: M,
                    size: [a, h],
                    datatype: p
                })
            }
        }
        )
          , mi = me("matAlgo12xSfs", ["typed", "DenseMatrix"], e=>{
            var {typed: r, DenseMatrix: t} = e;
            return function(i, u, s, f) {
                var c = i._values
                  , d = i._index
                  , o = i._ptr
                  , l = i._size
                  , D = i._datatype;
                if (!c)
                    throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                var a, y = l[0], A = l[1], h = s;
                "string" == typeof D && (u = r.convert(u, a = D),
                h = r.find(s, [a, a]));
                for (var p = [], B = [], m = [], M = 0; M < A; M++) {
                    for (var C = M + 1, x = o[M + 1], S = o[M]; S < x; S++) {
                        var O = d[S];
                        B[O] = c[S],
                        m[O] = C
                    }
                    for (var U = 0; U < y; U++)
                        0 === M && (p[U] = []),
                        p[U][M] = m[U] === C ? f ? h(u, B[U]) : h(B[U], u) : f ? h(u, 0) : h(0, u)
                }
                return new t({
                    data: p,
                    size: [y, A],
                    datatype: a
                })
            }
        }
        )
          , gi = me("matAlgo05xSfSf", ["typed", "equalScalar"], e=>{
            var {typed: r, equalScalar: t} = e;
            return function(i, u, s) {
                var f = i._values
                  , c = i._index
                  , d = i._ptr
                  , o = i._size
                  , l = i._datatype
                  , D = u._values
                  , y = u._index
                  , A = u._ptr
                  , a = u._size
                  , h = u._datatype;
                if (o.length !== a.length)
                    throw new Te(o.length,a.length);
                if (o[0] !== a[0] || o[1] !== a[1])
                    throw new RangeError("Dimension mismatch. Matrix A (" + o + ") must match Matrix B (" + a + ")");
                var m, p = o[0], B = o[1], M = t, C = 0, w = s;
                "string" == typeof l && l === h && (M = r.find(t, [m = l, m]),
                C = r.convert(0, m),
                w = r.find(s, [m, m]));
                var ne, ie, V, De, x = f && D ? [] : void 0, S = [], O = [], U = x ? [] : void 0, H = x ? [] : void 0, ee = [], le = [];
                for (ie = 0; ie < B; ie++) {
                    O[ie] = S.length;
                    var fe = ie + 1;
                    for (V = d[ie],
                    De = d[ie + 1]; V < De; V++)
                        S.push(ne = c[V]),
                        ee[ne] = fe,
                        U && (U[ne] = f[V]);
                    for (V = A[ie],
                    De = A[ie + 1]; V < De; V++)
                        ee[ne = y[V]] !== fe && S.push(ne),
                        le[ne] = fe,
                        H && (H[ne] = D[V]);
                    if (x)
                        for (V = O[ie]; V < S.length; ) {
                            var ve = ee[ne = S[V]]
                              , Ce = le[ne];
                            if (ve === fe || Ce === fe) {
                                var Ie = w(ve === fe ? U[ne] : C, Ce === fe ? H[ne] : C);
                                M(Ie, C) ? S.splice(V, 1) : (x.push(Ie),
                                V++)
                            }
                        }
                }
                return O[B] = S.length,
                i.createSparseMatrix({
                    values: x,
                    index: S,
                    ptr: O,
                    size: [p, B],
                    datatype: m
                })
            }
        }
        )
          , Na = me("matAlgo13xDD", ["typed"], e=>{
            var {typed: r} = e;
            return function(i, u, s) {
                var f = i._data
                  , c = i._size
                  , d = i._datatype
                  , o = u._data
                  , l = u._size
                  , D = u._datatype
                  , y = [];
                if (c.length !== l.length)
                    throw new Te(c.length,l.length);
                for (var A = 0; A < c.length; A++) {
                    if (c[A] !== l[A])
                        throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + l + ")");
                    y[A] = c[A]
                }
                var a, h = s;
                "string" == typeof d && d === D && (h = r.find(s, [a = d, a]));
                var p = y.length > 0 ? t(h, 0, y, y[0], f, o) : [];
                return i.createDenseMatrix({
                    data: p,
                    size: y,
                    datatype: a
                })
            }
            ;
            function t(n, i, u, s, f, c) {
                var d = [];
                if (i === u.length - 1)
                    for (var o = 0; o < s; o++)
                        d[o] = n(f[o], c[o]);
                else
                    for (var l = 0; l < s; l++)
                        d[l] = t(n, i + 1, u, u[i + 1], f[l], c[l]);
                return d
            }
        }
        )
          , Fn = me("matAlgo14xDs", ["typed"], e=>{
            var {typed: r} = e;
            return function(i, u, s, f) {
                var l, c = i._data, d = i._size, o = i._datatype, D = s;
                "string" == typeof o && (u = r.convert(u, l = o),
                D = r.find(s, [l, l]));
                var y = d.length > 0 ? t(D, 0, d, d[0], c, u, f) : [];
                return i.createDenseMatrix({
                    data: y,
                    size: Pe(d),
                    datatype: l
                })
            }
            ;
            function t(n, i, u, s, f, c, d) {
                var o = [];
                if (i === u.length - 1)
                    for (var l = 0; l < s; l++)
                        o[l] = d ? n(c, f[l]) : n(f[l], c);
                else
                    for (var D = 0; D < s; D++)
                        o[D] = t(n, i + 1, u, u[i + 1], f[D], c, d);
                return o
            }
        }
        )
          , Pa = me("broadcast", ["concat"], e=>{
            var {concat: r} = e;
            return function(u, s) {
                var f = Math.max(u._size.length, s._size.length);
                if (u._size.length === s._size.length && u._size.every((h,p)=>h === s._size[p]))
                    return [u, s];
                for (var c = t(u._size, f, 0), d = t(s._size, f, 0), o = [], l = 0; l < f; l++)
                    o[l] = Math.max(c[l], d[l]);
                for (var D = 0; D < f; D++)
                    i(c, o, D),
                    i(d, o, D);
                var y = u.clone()
                  , A = s.clone();
                y._size.length < f ? y.reshape(t(y._size, f, 1)) : A._size.length < f && A.reshape(t(A._size, f, 1));
                for (var a = 0; a < f; a++)
                    y._size[a] < o[a] && (y = n(y, o[a], a)),
                    A._size[a] < o[a] && (A = n(A, o[a], a));
                return [y, A]
            }
            ;
            function t(u, s, f) {
                return [...Array(s - u.length).fill(f), ...u]
            }
            function n(u, s, f) {
                return r(...Array(s).fill(u), f)
            }
            function i(u, s, f) {
                if (u[f] < s[f] & u[f] > 1)
                    throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(u, ") not possible to broadcast dimension ").concat(f, " with size ").concat(u[f], " to size ").concat(s[f]))
            }
        }
        )
          , yi = me("matrixAlgorithmSuite", ["typed", "matrix", "concat"], e=>{
            var {typed: r, matrix: t, concat: n} = e
              , i = Na({
                typed: r
            })
              , u = Fn({
                typed: r
            })
              , s = Pa({
                concat: n
            });
            return function(c) {
                var l, d = c.elop, o = c.SD || c.DS;
                d ? (l = {
                    "DenseMatrix, DenseMatrix": (a,h)=>i(...s(a, h), d),
                    "Array, Array": (a,h)=>i(...s(t(a), t(h)), d).valueOf(),
                    "Array, DenseMatrix": (a,h)=>i(...s(t(a), h), d),
                    "DenseMatrix, Array": (a,h)=>i(...s(a, t(h)), d)
                },
                c.SS && (l["SparseMatrix, SparseMatrix"] = (a,h)=>c.SS(...s(a, h), d, !1)),
                c.DS && (l["DenseMatrix, SparseMatrix"] = (a,h)=>c.DS(...s(a, h), d, !1),
                l["Array, SparseMatrix"] = (a,h)=>c.DS(...s(t(a), h), d, !1)),
                o && (l["SparseMatrix, DenseMatrix"] = (a,h)=>o(...s(h, a), d, !0),
                l["SparseMatrix, Array"] = (a,h)=>o(...s(t(h), a), d, !0))) : (l = {
                    "DenseMatrix, DenseMatrix": r.referToSelf(a=>(h,p)=>i(...s(h, p), a)),
                    "Array, Array": r.referToSelf(a=>(h,p)=>i(...s(t(h), t(p)), a).valueOf()),
                    "Array, DenseMatrix": r.referToSelf(a=>(h,p)=>i(...s(t(h), p), a)),
                    "DenseMatrix, Array": r.referToSelf(a=>(h,p)=>i(...s(h, t(p)), a))
                },
                c.SS && (l["SparseMatrix, SparseMatrix"] = r.referToSelf(a=>(h,p)=>c.SS(...s(h, p), a, !1))),
                c.DS && (l["DenseMatrix, SparseMatrix"] = r.referToSelf(a=>(h,p)=>c.DS(...s(h, p), a, !1)),
                l["Array, SparseMatrix"] = r.referToSelf(a=>(h,p)=>c.DS(...s(t(h), p), a, !1))),
                o && (l["SparseMatrix, DenseMatrix"] = r.referToSelf(a=>(h,p)=>o(...s(p, h), a, !0)),
                l["SparseMatrix, Array"] = r.referToSelf(a=>(h,p)=>o(...s(t(p), h), a, !0))));
                var D = c.scalar || "any";
                (c.Ds || c.Ss) && (d ? (l["DenseMatrix," + D] = (a,h)=>u(a, h, d, !1),
                l[D + ", DenseMatrix"] = (a,h)=>u(h, a, d, !0),
                l["Array," + D] = (a,h)=>u(t(a), h, d, !1).valueOf(),
                l[D + ", Array"] = (a,h)=>u(t(h), a, d, !0).valueOf()) : (l["DenseMatrix," + D] = r.referToSelf(a=>(h,p)=>u(h, p, a, !1)),
                l[D + ", DenseMatrix"] = r.referToSelf(a=>(h,p)=>u(p, h, a, !0)),
                l["Array," + D] = r.referToSelf(a=>(h,p)=>u(t(h), p, a, !1).valueOf()),
                l[D + ", Array"] = r.referToSelf(a=>(h,p)=>u(t(p), h, a, !0).valueOf())));
                var A = void 0 !== c.sS ? c.sS : c.Ss;
                return d ? (c.Ss && (l["SparseMatrix," + D] = (a,h)=>c.Ss(a, h, d, !1)),
                A && (l[D + ", SparseMatrix"] = (a,h)=>A(h, a, d, !0))) : (c.Ss && (l["SparseMatrix," + D] = r.referToSelf(a=>(h,p)=>c.Ss(h, p, a, !1))),
                A && (l[D + ", SparseMatrix"] = r.referToSelf(a=>(h,p)=>A(p, h, a, !0)))),
                d && d.signatures && Lr(l, d.signatures),
                l
            }
        }
        )
          , Qt = "compare"
          , La = me(Qt, ["typed", "config", "matrix", "equalScalar", "BigNumber", "Fraction", "DenseMatrix", "concat"], e=>{
            var {typed: r, config: t, equalScalar: n, matrix: i, BigNumber: u, Fraction: s, DenseMatrix: f, concat: c} = e
              , d = pi({
                typed: r
            })
              , o = gi({
                typed: r,
                equalScalar: n
            })
              , l = mi({
                typed: r,
                DenseMatrix: f
            })
              , D = yi({
                typed: r,
                matrix: i,
                concat: c
            })
              , y = ci({
                typed: r
            });
            return r(Qt, Wa({
                typed: r,
                config: t
            }), {
                "boolean, boolean": function(a, h) {
                    return a === h ? 0 : a > h ? 1 : -1
                },
                "BigNumber, BigNumber": function(a, h) {
                    return fi(a, h, t.epsilon) ? new u(0) : new u(a.cmp(h))
                },
                "Fraction, Fraction": function(a, h) {
                    return new s(a.compare(h))
                },
                "Complex, Complex": function() {
                    throw new TypeError("No ordering relation is defined for complex numbers")
                }
            }, y, D({
                SS: o,
                DS: d,
                Ss: l
            }))
        }
        )
          , Wa = me(Qt, ["typed", "config"], e=>{
            var {typed: r, config: t} = e;
            return r(Qt, {
                "number, number": function(i, u) {
                    return xr(i, u, t.epsilon) ? 0 : i > u ? 1 : -1
                }
            })
        }
        )
          , qa = {
            BigNumberDependencies: $t,
            DenseMatrixDependencies: Ft,
            FractionDependencies: gn,
            concatDependencies: vi,
            equalScalarDependencies: Ct,
            matrixDependencies: Hr,
            typedDependencies: Je,
            createCompare: La
        };
        function to() {
            throw new Error('No "bignumber" implementation available')
        }
        function no() {
            throw new Error('No "fraction" implementation available')
        }
        var Ei = "divideScalar"
          , Cn = {
            numericDependencies: {
                bignumberDependencies: {
                    BigNumberDependencies: $t,
                    typedDependencies: Je,
                    createBignumber: me("bignumber", ["typed", "BigNumber"], e=>{
                        var {typed: r, BigNumber: t} = e;
                        return r("bignumber", {
                            "": function() {
                                return new t(0)
                            },
                            number: function(i) {
                                return new t(i + "")
                            },
                            string: function(i) {
                                var u = i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                                if (u) {
                                    var s = u[2]
                                      , f = t(u[1])
                                      , c = new t(2).pow(Number(s));
                                    if (f.gt(c.sub(1)))
                                        throw new SyntaxError('String "'.concat(i, '" is out of range'));
                                    var d = new t(2).pow(Number(s) - 1);
                                    return f.gte(d) ? f.sub(c) : f
                                }
                                return new t(i)
                            },
                            BigNumber: function(i) {
                                return i
                            },
                            Unit: r.referToSelf(n=>i=>{
                                var u = i.clone();
                                return u.value = n(i.value),
                                u
                            }
                            ),
                            Fraction: function(i) {
                                return new t(i.n).div(i.d).times(i.s)
                            },
                            null: function(i) {
                                return new t(0)
                            },
                            "Array | Matrix": r.referToSelf(n=>i=>Zr(i, n))
                        })
                    }
                    )
                },
                fractionDependencies: {
                    FractionDependencies: gn,
                    typedDependencies: Je,
                    createFraction: me("fraction", ["typed", "Fraction"], e=>{
                        var {typed: r, Fraction: t} = e;
                        return r("fraction", {
                            number: function(i) {
                                if (!isFinite(i) || isNaN(i))
                                    throw new Error(i + " cannot be represented as a fraction");
                                return new t(i)
                            },
                            string: function(i) {
                                return new t(i)
                            },
                            "number, number": function(i, u) {
                                return new t(i,u)
                            },
                            null: function(i) {
                                return new t(0)
                            },
                            BigNumber: function(i) {
                                return new t(i.toString())
                            },
                            Fraction: function(i) {
                                return i
                            },
                            Unit: r.referToSelf(n=>i=>{
                                var u = i.clone();
                                return u.value = n(i.value),
                                u
                            }
                            ),
                            Object: function(i) {
                                return new t(i)
                            },
                            "Array | Matrix": r.referToSelf(n=>i=>Zr(i, n))
                        })
                    }
                    )
                },
                numberDependencies: {
                    typedDependencies: Je,
                    createNumber: me("number", ["typed"], e=>{
                        var {typed: r} = e
                          , t = r("number", {
                            "": function() {
                                return 0
                            },
                            number: function(i) {
                                return i
                            },
                            string: function(i) {
                                if ("NaN" === i)
                                    return NaN;
                                var u = function ja(e) {
                                    var r = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
                                    return r ? {
                                        input: e,
                                        radix: {
                                            "0b": 2,
                                            "0o": 8,
                                            "0x": 16
                                        }[r[1]],
                                        integerPart: r[2],
                                        fractionalPart: r[3]
                                    } : null
                                }(i);
                                if (u)
                                    return function ka(e) {
                                        for (var r = parseInt(e.integerPart, e.radix), t = 0, n = 0; n < e.fractionalPart.length; n++)
                                            t += parseInt(e.fractionalPart[n], e.radix) / Math.pow(e.radix, n + 1);
                                        var u = r + t;
                                        if (isNaN(u))
                                            throw new SyntaxError('String "' + e.input + '" is no valid number');
                                        return u
                                    }(u);
                                var s = 0
                                  , f = i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                                f && (s = Number(f[2]),
                                i = f[1]);
                                var c = Number(i);
                                if (isNaN(c))
                                    throw new SyntaxError('String "' + i + '" is no valid number');
                                if (f) {
                                    if (c > 2 ** s - 1)
                                        throw new SyntaxError('String "'.concat(i, '" is out of range'));
                                    c >= 2 ** (s - 1) && (c -= 2 ** s)
                                }
                                return c
                            },
                            BigNumber: function(i) {
                                return i.toNumber()
                            },
                            Fraction: function(i) {
                                return i.valueOf()
                            },
                            Unit: r.referToSelf(n=>i=>{
                                var u = i.clone();
                                return u.value = n(i.value),
                                u
                            }
                            ),
                            null: function(i) {
                                return 0
                            },
                            "Unit, string | Unit": function(i, u) {
                                return i.toNumber(u)
                            },
                            "Array | Matrix": r.referToSelf(n=>i=>Zr(i, n))
                        });
                        return t.fromJSON = function(n) {
                            return parseFloat(n.value)
                        }
                        ,
                        t
                    }
                    )
                },
                createNumeric: me("numeric", ["number", "?bignumber", "?fraction"], e=>{
                    var {number: r, bignumber: t, fraction: n} = e
                      , i = {
                        string: !0,
                        number: !0,
                        BigNumber: !0,
                        Fraction: !0
                    }
                      , u = {
                        number: s=>r(s),
                        BigNumber: t ? s=>t(s) : to,
                        Fraction: n ? s=>n(s) : no
                    };
                    return function(f) {
                        var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "number";
                        if (void 0 !== (arguments.length > 2 ? arguments[2] : void 0))
                            throw new SyntaxError("numeric() takes one or two arguments");
                        var o = ir(f);
                        if (!(o in i))
                            throw new TypeError("Cannot convert " + f + ' of type "' + o + '"; valid input types are ' + Object.keys(i).join(", "));
                        if (!(c in u))
                            throw new TypeError("Cannot convert " + f + ' to type "' + c + '"; valid output types are ' + Object.keys(u).join(", "));
                        return c === o ? f : u[c](f)
                    }
                }
                )
            },
            typedDependencies: Je,
            createDivideScalar: me(Ei, ["typed", "numeric"], e=>{
                var {typed: r} = e;
                return r(Ei, {
                    "number, number": function(i, u) {
                        return i / u
                    },
                    "Complex, Complex": function(i, u) {
                        return i.div(u)
                    },
                    "BigNumber, BigNumber": function(i, u) {
                        return i.div(u)
                    },
                    "Fraction, Fraction": function(i, u) {
                        return i.div(u)
                    },
                    "Unit, number | Complex | Fraction | BigNumber | Unit": (n,i)=>n.divide(i),
                    "number | Fraction | Complex | BigNumber, Unit": (n,i)=>i.divideInto(n)
                })
            }
            )
        }
          , Vr = "number, number";
        function Ai(e) {
            return Math.abs(e)
        }
        function wi(e, r) {
            return e + r
        }
        function Fi(e, r) {
            return e * r
        }
        function Ci(e) {
            return -e
        }
        Ai.signature = "number",
        wi.signature = Vr,
        Fi.signature = Vr,
        Ci.signature = "number";
        var Oo = {
            typedDependencies: Je,
            createAbs: me("abs", ["typed"], e=>{
                var {typed: r} = e;
                return r("abs", {
                    number: Ai,
                    "Complex | BigNumber | Fraction | Unit": t=>t.abs(),
                    "Array | Matrix": r.referToSelf(t=>n=>Zr(n, t, !0))
                })
            }
            )
        }
          , _i = "addScalar"
          , jt = {
            typedDependencies: Je,
            createAddScalar: me(_i, ["typed"], e=>{
                var {typed: r} = e;
                return r(_i, {
                    "number, number": wi,
                    "Complex, Complex": function(n, i) {
                        return n.add(i)
                    },
                    "BigNumber, BigNumber": function(n, i) {
                        return n.plus(i)
                    },
                    "Fraction, Fraction": function(n, i) {
                        return n.add(i)
                    },
                    "Unit, Unit": r.referToSelf(t=>(n,i)=>{
                        if (null == n.value)
                            throw new Error("Parameter x contains a unit with undefined value");
                        if (null == i.value)
                            throw new Error("Parameter y contains a unit with undefined value");
                        if (!n.equalBase(i))
                            throw new Error("Units do not match");
                        var u = n.clone();
                        return u.value = r.find(t, [u.valueType(), i.valueType()])(u.value, i.value),
                        u.fixPrefix = !1,
                        u
                    }
                    )
                })
            }
            )
        };
        function Mi(e) {
            return 0 === e
        }
        Mi.signature = "number";
        var Zo = {
            typedDependencies: Je,
            createIsZero: me("isZero", ["typed"], e=>{
                var {typed: r} = e;
                return r("isZero", {
                    number: Mi,
                    BigNumber: function(n) {
                        return n.isZero()
                    },
                    Complex: function(n) {
                        return 0 === n.re && 0 === n.im
                    },
                    Fraction: function(n) {
                        return 1 === n.d && 0 === n.n
                    },
                    Unit: r.referToSelf(t=>n=>r.find(t, n.valueType())(n.value)),
                    "Array | Matrix": r.referToSelf(t=>n=>Zr(n, t))
                })
            }
            )
        }
          , Ko = {
            typedDependencies: Je,
            createConj: me("conj", ["typed"], e=>{
                var {typed: r} = e;
                return r("conj", {
                    "number | BigNumber | Fraction": t=>t,
                    Complex: t=>t.conjugate(),
                    "Array | Matrix": r.referToSelf(t=>n=>Zr(n, t))
                })
            }
            )
        }
          , Ni = {
            typedDependencies: Je,
            createMultiplyScalar: me("multiplyScalar", ["typed"], e=>{
                var {typed: r} = e;
                return r("multiplyScalar", {
                    "number, number": Fi,
                    "Complex, Complex": function(n, i) {
                        return n.mul(i)
                    },
                    "BigNumber, BigNumber": function(n, i) {
                        return n.times(i)
                    },
                    "Fraction, Fraction": function(n, i) {
                        return n.mul(i)
                    },
                    "number | Fraction | BigNumber | Complex, Unit": (t,n)=>n.multiply(t),
                    "Unit, number | Fraction | BigNumber | Complex | Unit": (t,n)=>t.multiply(n)
                })
            }
            )
        }
          , es = {
            addScalarDependencies: jt,
            conjDependencies: Ko,
            multiplyScalarDependencies: Ni,
            sizeDependencies: {
                matrixDependencies: Hr,
                typedDependencies: Je,
                createSize: me("size", ["typed", "config", "?matrix"], e=>{
                    var {typed: r, config: t, matrix: n} = e;
                    return r("size", {
                        Matrix: function(u) {
                            return u.create(u.size())
                        },
                        Array: br,
                        string: function(u) {
                            return "Array" === t.matrix ? [u.length] : n([u.length])
                        },
                        "number | Complex | BigNumber | Unit | boolean | null": function(u) {
                            return "Array" === t.matrix ? [] : n ? n([]) : function io() {
                                throw new Error('No "matrix" implementation available')
                            }()
                        }
                    })
                }
                )
            },
            typedDependencies: Je,
            createDot: me("dot", ["typed", "addScalar", "multiplyScalar", "conj", "size"], e=>{
                var {typed: r, addScalar: t, multiplyScalar: n, conj: i, size: u} = e;
                return r("dot", {
                    "Array | DenseMatrix, Array | DenseMatrix": function f(o, l) {
                        var D = s(o, l)
                          , y = T(o) ? o._data : o
                          , A = T(o) ? o._datatype : void 0
                          , a = T(l) ? l._data : l
                          , h = T(l) ? l._datatype : void 0
                          , p = 2 === d(o).length
                          , B = 2 === d(l).length
                          , m = t
                          , M = n;
                        if (A && h && A === h && "string" == typeof A) {
                            var C = A;
                            m = r.find(t, [C, C]),
                            M = r.find(n, [C, C])
                        }
                        if (!p && !B) {
                            for (var w = M(i(y[0]), a[0]), x = 1; x < D; x++)
                                w = m(w, M(i(y[x]), a[x]));
                            return w
                        }
                        if (!p && B) {
                            for (var S = M(i(y[0]), a[0][0]), O = 1; O < D; O++)
                                S = m(S, M(i(y[O]), a[O][0]));
                            return S
                        }
                        if (p && !B) {
                            for (var U = M(i(y[0][0]), a[0]), H = 1; H < D; H++)
                                U = m(U, M(i(y[H][0]), a[H]));
                            return U
                        }
                        if (p && B) {
                            for (var ee = M(i(y[0][0]), a[0][0]), le = 1; le < D; le++)
                                ee = m(ee, M(i(y[le][0]), a[le][0]));
                            return ee
                        }
                    },
                    "SparseMatrix, SparseMatrix": function c(o, l) {
                        s(o, l);
                        for (var D = o._index, y = o._values, A = l._index, a = l._values, h = 0, p = t, B = n, m = 0, M = 0; m < D.length && M < A.length; ) {
                            var C = D[m]
                              , w = A[M];
                            C < w ? m++ : C > w ? M++ : C === w && (h = p(h, B(y[m], a[M])),
                            m++,
                            M++)
                        }
                        return h
                    }
                });
                function s(o, l) {
                    var A, a, D = d(o), y = d(l);
                    if (1 === D.length)
                        A = D[0];
                    else {
                        if (2 !== D.length || 1 !== D[1])
                            throw new RangeError("Expected a column vector, instead got a matrix of size (" + D.join(", ") + ")");
                        A = D[0]
                    }
                    if (1 === y.length)
                        a = y[0];
                    else {
                        if (2 !== y.length || 1 !== y[1])
                            throw new RangeError("Expected a column vector, instead got a matrix of size (" + y.join(", ") + ")");
                        a = y[0]
                    }
                    if (A !== a)
                        throw new RangeError("Vectors must have equal length (" + A + " != " + a + ")");
                    if (0 === A)
                        throw new RangeError("Cannot calculate the dot product of empty vectors");
                    return A
                }
                function d(o) {
                    return T(o) ? o.size() : u(o)
                }
            }
            )
        }
          , Oi = me("matAlgo11xS0s", ["typed", "equalScalar"], e=>{
            var {typed: r, equalScalar: t} = e;
            return function(i, u, s, f) {
                var c = i._values
                  , d = i._index
                  , o = i._ptr
                  , l = i._size
                  , D = i._datatype;
                if (!c)
                    throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                var a, y = l[0], A = l[1], h = t, p = 0, B = s;
                "string" == typeof D && (h = r.find(t, [a = D, a]),
                p = r.convert(0, a),
                u = r.convert(u, a),
                B = r.find(s, [a, a]));
                for (var m = [], M = [], C = [], w = 0; w < A; w++) {
                    C[w] = M.length;
                    for (var S = o[w + 1], O = o[w]; O < S; O++) {
                        var U = d[O]
                          , H = f ? B(u, c[O]) : B(c[O], u);
                        h(H, p) || (M.push(U),
                        m.push(H))
                    }
                }
                return C[A] = M.length,
                i.createSparseMatrix({
                    values: m,
                    index: M,
                    ptr: C,
                    size: [y, A],
                    datatype: a
                })
            }
        }
        )
          , Ii = "multiply"
          , kt = {
            addScalarDependencies: jt,
            dotDependencies: es,
            equalScalarDependencies: Ct,
            matrixDependencies: Hr,
            multiplyScalarDependencies: Ni,
            typedDependencies: Je,
            createMultiply: me(Ii, ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], e=>{
                var {typed: r, matrix: t, addScalar: n, multiplyScalar: i, equalScalar: u, dot: s} = e
                  , f = Oi({
                    typed: r,
                    equalScalar: u
                })
                  , c = Fn({
                    typed: r
                });
                function d(C, w) {
                    switch (C.length) {
                    case 1:
                        switch (w.length) {
                        case 1:
                            if (C[0] !== w[0])
                                throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                            break;
                        case 2:
                            if (C[0] !== w[0])
                                throw new RangeError("Dimension mismatch in multiplication. Vector length (" + C[0] + ") must match Matrix rows (" + w[0] + ")");
                            break;
                        default:
                            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)")
                        }
                        break;
                    case 2:
                        switch (w.length) {
                        case 1:
                            if (C[1] !== w[0])
                                throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + C[1] + ") must match Vector length (" + w[0] + ")");
                            break;
                        case 2:
                            if (C[1] !== w[0])
                                throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + C[1] + ") must match Matrix B rows (" + w[0] + ")");
                            break;
                        default:
                            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)")
                        }
                        break;
                    default:
                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + C.length + " dimensions)")
                    }
                }
                var y = r("_multiplyMatrixVector", {
                    "DenseMatrix, any": function a(C, w) {
                        var ne, x = C._data, S = C._size, O = C._datatype, U = w._data, H = w._datatype, ee = S[0], le = S[1], ie = n, V = i;
                        O && H && O === H && "string" == typeof O && (ie = r.find(n, [ne = O, ne]),
                        V = r.find(i, [ne, ne]));
                        for (var De = [], fe = 0; fe < ee; fe++) {
                            for (var ve = x[fe], Ce = V(ve[0], U[0]), Re = 1; Re < le; Re++)
                                Ce = ie(Ce, V(ve[Re], U[Re]));
                            De[fe] = Ce
                        }
                        return C.createDenseMatrix({
                            data: De,
                            size: [ee],
                            datatype: ne
                        })
                    },
                    "SparseMatrix, any": function B(C, w) {
                        var x = C._values
                          , S = C._index
                          , O = C._ptr
                          , U = C._datatype;
                        if (!x)
                            throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                        var fe, H = w._data, ee = w._datatype, le = C._size[0], ne = w._size[0], ie = [], V = [], De = [], ve = n, Ce = i, Re = u, ze = 0;
                        U && ee && U === ee && "string" == typeof U && (ve = r.find(n, [fe = U, fe]),
                        Ce = r.find(i, [fe, fe]),
                        Re = r.find(u, [fe, fe]),
                        ze = r.convert(0, fe));
                        var Ie = []
                          , cr = [];
                        De[0] = 0;
                        for (var sr = 0; sr < ne; sr++) {
                            var vr = H[sr];
                            if (!Re(vr, ze))
                                for (var Tr = O[sr + 1], nr = O[sr]; nr < Tr; nr++) {
                                    var Ye = S[nr];
                                    cr[Ye] ? Ie[Ye] = ve(Ie[Ye], Ce(vr, x[nr])) : (cr[Ye] = !0,
                                    V.push(Ye),
                                    Ie[Ye] = Ce(vr, x[nr]))
                                }
                        }
                        for (var Rr = V.length, Er = 0; Er < Rr; Er++)
                            ie[Er] = Ie[V[Er]];
                        return De[1] = V.length,
                        C.createSparseMatrix({
                            values: ie,
                            index: V,
                            ptr: De,
                            size: [le, 1],
                            datatype: fe
                        })
                    }
                })
                  , A = r("_multiplyMatrixMatrix", {
                    "DenseMatrix, DenseMatrix": function h(C, w) {
                        var V, x = C._data, S = C._size, O = C._datatype, U = w._data, ee = w._datatype, le = S[0], ne = S[1], ie = w._size[1], De = n, fe = i;
                        O && ee && O === ee && "string" == typeof O && (De = r.find(n, [V = O, V]),
                        fe = r.find(i, [V, V]));
                        for (var ve = [], Ce = 0; Ce < le; Ce++) {
                            var Re = x[Ce];
                            ve[Ce] = [];
                            for (var ze = 0; ze < ie; ze++) {
                                for (var Ie = fe(Re[0], U[0][ze]), cr = 1; cr < ne; cr++)
                                    Ie = De(Ie, fe(Re[cr], U[cr][ze]));
                                ve[Ce][ze] = Ie
                            }
                        }
                        return C.createDenseMatrix({
                            data: ve,
                            size: [le, ie],
                            datatype: V
                        })
                    },
                    "DenseMatrix, SparseMatrix": function p(C, w) {
                        var x = C._data
                          , S = C._size
                          , O = C._datatype
                          , U = w._values
                          , H = w._index
                          , ee = w._ptr
                          , le = w._size
                          , ne = w._datatype;
                        if (!U)
                            throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
                        var De, ie = S[0], V = le[1], fe = n, ve = i, Ce = u, Re = 0;
                        O && ne && O === ne && "string" == typeof O && (fe = r.find(n, [De = O, De]),
                        ve = r.find(i, [De, De]),
                        Ce = r.find(u, [De, De]),
                        Re = r.convert(0, De));
                        for (var ze = [], Ie = [], cr = [], sr = w.createSparseMatrix({
                            values: ze,
                            index: Ie,
                            ptr: cr,
                            size: [ie, V],
                            datatype: De
                        }), vr = 0; vr < V; vr++) {
                            cr[vr] = Ie.length;
                            var je = ee[vr]
                              , Tr = ee[vr + 1];
                            if (Tr > je)
                                for (var nr = 0, Ye = 0; Ye < ie; Ye++) {
                                    for (var Rr = Ye + 1, Er = void 0, $e = je; $e < Tr; $e++) {
                                        var Ar = H[$e];
                                        nr !== Rr ? (Er = ve(x[Ye][Ar], U[$e]),
                                        nr = Rr) : Er = fe(Er, ve(x[Ye][Ar], U[$e]))
                                    }
                                    nr === Rr && !Ce(Er, Re) && (Ie.push(Ye),
                                    ze.push(Er))
                                }
                        }
                        return cr[V] = Ie.length,
                        sr
                    },
                    "SparseMatrix, DenseMatrix": function m(C, w) {
                        var x = C._values
                          , S = C._index
                          , O = C._ptr
                          , U = C._datatype;
                        if (!x)
                            throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                        var V, H = w._data, ee = w._datatype, le = C._size[0], ne = w._size[0], ie = w._size[1], De = n, fe = i, ve = u, Ce = 0;
                        U && ee && U === ee && "string" == typeof U && (De = r.find(n, [V = U, V]),
                        fe = r.find(i, [V, V]),
                        ve = r.find(u, [V, V]),
                        Ce = r.convert(0, V));
                        for (var Re = [], ze = [], Ie = [], cr = C.createSparseMatrix({
                            values: Re,
                            index: ze,
                            ptr: Ie,
                            size: [le, ie],
                            datatype: V
                        }), sr = [], vr = [], je = 0; je < ie; je++) {
                            Ie[je] = ze.length;
                            for (var Tr = je + 1, nr = 0; nr < ne; nr++) {
                                var Ye = H[nr][je];
                                if (!ve(Ye, Ce))
                                    for (var Er = O[nr + 1], $e = O[nr]; $e < Er; $e++) {
                                        var Ar = S[$e];
                                        vr[Ar] !== Tr ? (vr[Ar] = Tr,
                                        ze.push(Ar),
                                        sr[Ar] = fe(Ye, x[$e])) : sr[Ar] = De(sr[Ar], fe(Ye, x[$e]))
                                    }
                            }
                            for (var st = ze.length, ft = Ie[je]; ft < st; ft++)
                                Re[ft] = sr[ze[ft]]
                        }
                        return Ie[ie] = ze.length,
                        cr
                    },
                    "SparseMatrix, SparseMatrix": function M(C, w) {
                        var fe, x = C._values, S = C._index, O = C._ptr, U = C._datatype, H = w._values, ee = w._index, le = w._ptr, ne = w._datatype, ie = C._size[0], V = w._size[1], De = x && H, ve = n, Ce = i;
                        U && ne && U === ne && "string" == typeof U && (ve = r.find(n, [fe = U, fe]),
                        Ce = r.find(i, [fe, fe]));
                        for (var je, nr, Ye, Er, $e, Ar, Re = De ? [] : void 0, ze = [], Ie = [], cr = C.createSparseMatrix({
                            values: Re,
                            index: ze,
                            ptr: Ie,
                            size: [ie, V],
                            datatype: fe
                        }), sr = De ? [] : void 0, vr = [], Kr = 0; Kr < V; Kr++) {
                            Ie[Kr] = ze.length;
                            var st = Kr + 1;
                            for (Er = le[Kr + 1],
                            Ye = le[Kr]; Ye < Er; Ye++)
                                if (Ar = ee[Ye],
                                De)
                                    for (nr = O[Ar + 1],
                                    je = O[Ar]; je < nr; je++)
                                        vr[$e = S[je]] !== st ? (vr[$e] = st,
                                        ze.push($e),
                                        sr[$e] = Ce(H[Ye], x[je])) : sr[$e] = ve(sr[$e], Ce(H[Ye], x[je]));
                                else
                                    for (nr = O[Ar + 1],
                                    je = O[Ar]; je < nr; je++)
                                        vr[$e = S[je]] !== st && (vr[$e] = st,
                                        ze.push($e));
                            if (De)
                                for (var _n = ze.length, en = Ie[Kr]; en < _n; en++)
                                    Re[en] = sr[ze[en]]
                        }
                        return Ie[V] = ze.length,
                        cr
                    }
                });
                return r(Ii, i, {
                    "Array, Array": r.referTo("Matrix, Matrix", C=>(w,x)=>{
                        d(br(w), br(x));
                        var S = C(t(w), t(x));
                        return T(S) ? S.valueOf() : S
                    }
                    ),
                    "Matrix, Matrix": function(w, x) {
                        var S = w.size()
                          , O = x.size();
                        return d(S, O),
                        1 === S.length ? 1 === O.length ? function o(C, w, x) {
                            if (0 === x)
                                throw new Error("Cannot multiply two empty vectors");
                            return s(C, w)
                        }(w, x, S[0]) : function l(C, w) {
                            if ("dense" !== w.storage())
                                throw new Error("Support for SparseMatrix not implemented");
                            return function D(C, w) {
                                var ie, x = C._data, O = C._datatype, U = w._data, ee = w._datatype, le = C._size[0], ne = w._size[1], V = n, De = i;
                                O && ee && O === ee && "string" == typeof O && (V = r.find(n, [ie = O, ie]),
                                De = r.find(i, [ie, ie]));
                                for (var fe = [], ve = 0; ve < ne; ve++) {
                                    for (var Ce = De(x[0], U[0][ve]), Re = 1; Re < le; Re++)
                                        Ce = V(Ce, De(x[Re], U[Re][ve]));
                                    fe[ve] = Ce
                                }
                                return C.createDenseMatrix({
                                    data: fe,
                                    size: [ne],
                                    datatype: ie
                                })
                            }(C, w)
                        }(w, x) : 1 === O.length ? y(w, x) : A(w, x)
                    },
                    "Matrix, Array": r.referTo("Matrix,Matrix", C=>(w,x)=>C(w, t(x))),
                    "Array, Matrix": r.referToSelf(C=>(w,x)=>C(t(w, x.storage()), x)),
                    "SparseMatrix, any": function(w, x) {
                        return f(w, x, i, !1)
                    },
                    "DenseMatrix, any": function(w, x) {
                        return c(w, x, i, !1)
                    },
                    "any, SparseMatrix": function(w, x) {
                        return f(x, w, i, !0)
                    },
                    "any, DenseMatrix": function(w, x) {
                        return c(x, w, i, !0)
                    },
                    "Array, any": function(w, x) {
                        return c(t(w), x, i, !1).valueOf()
                    },
                    "any, Array": function(w, x) {
                        return c(t(x), w, i, !0).valueOf()
                    },
                    "any, any": i,
                    "any, any, ...any": r.referToSelf(C=>(w,x,S)=>{
                        for (var O = C(w, x), U = 0; U < S.length; U++)
                            O = C(O, S[U]);
                        return O
                    }
                    )
                })
            }
            )
        }
          , Pi = "unaryMinus"
          , bn = {
            typedDependencies: Je,
            createUnaryMinus: me(Pi, ["typed"], e=>{
                var {typed: r} = e;
                return r(Pi, {
                    number: Ci,
                    "Complex | BigNumber | Fraction": t=>t.neg(),
                    Unit: r.referToSelf(t=>n=>{
                        var i = n.clone();
                        return i.value = r.find(t, i.valueType())(n.value),
                        i
                    }
                    ),
                    "Array | Matrix": r.referToSelf(t=>n=>Zr(n, t, !0))
                })
            }
            )
        }
          , fs = me("matAlgo01xDSid", ["typed"], e=>{
            var {typed: r} = e;
            return function(n, i, u, s) {
                var f = n._data
                  , c = n._size
                  , d = n._datatype
                  , o = i._values
                  , l = i._index
                  , D = i._ptr
                  , y = i._size
                  , A = i._datatype;
                if (c.length !== y.length)
                    throw new Te(c.length,y.length);
                if (c[0] !== y[0] || c[1] !== y[1])
                    throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + y + ")");
                if (!o)
                    throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                var m, M, a = c[0], h = c[1], p = "string" == typeof d && d === A ? d : void 0, B = p ? r.find(u, [p, p]) : u, C = [];
                for (m = 0; m < a; m++)
                    C[m] = [];
                var w = []
                  , x = [];
                for (M = 0; M < h; M++) {
                    for (var S = M + 1, U = D[M + 1], H = D[M]; H < U; H++)
                        w[m = l[H]] = s ? B(o[H], f[m][M]) : B(f[m][M], o[H]),
                        x[m] = S;
                    for (m = 0; m < a; m++)
                        C[m][M] = x[m] === S ? w[m] : f[m][M]
                }
                return n.createDenseMatrix({
                    data: C,
                    size: [a, h],
                    datatype: p
                })
            }
        }
        )
          , ds = me("matAlgo10xSids", ["typed", "DenseMatrix"], e=>{
            var {typed: r, DenseMatrix: t} = e;
            return function(i, u, s, f) {
                var c = i._values
                  , d = i._index
                  , o = i._ptr
                  , l = i._size
                  , D = i._datatype;
                if (!c)
                    throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                var a, y = l[0], A = l[1], h = s;
                "string" == typeof D && (u = r.convert(u, a = D),
                h = r.find(s, [a, a]));
                for (var p = [], B = [], m = [], M = 0; M < A; M++) {
                    for (var C = M + 1, x = o[M + 1], S = o[M]; S < x; S++) {
                        var O = d[S];
                        B[O] = c[S],
                        m[O] = C
                    }
                    for (var U = 0; U < y; U++)
                        0 === M && (p[U] = []),
                        p[U][M] = m[U] === C ? f ? h(u, B[U]) : h(B[U], u) : u
                }
                return new t({
                    data: p,
                    size: [y, A],
                    datatype: a
                })
            }
        }
        )
          , zi = "subtract"
          , Ui = {
            DenseMatrixDependencies: Ft,
            addScalarDependencies: jt,
            concatDependencies: vi,
            equalScalarDependencies: Ct,
            matrixDependencies: Hr,
            typedDependencies: Je,
            unaryMinusDependencies: bn,
            createSubtract: me(zi, ["typed", "matrix", "equalScalar", "addScalar", "unaryMinus", "DenseMatrix", "concat"], e=>{
                var {typed: r, matrix: t, equalScalar: n, DenseMatrix: s, concat: f} = e
                  , c = fs({
                    typed: r
                })
                  , d = pi({
                    typed: r
                })
                  , o = gi({
                    typed: r,
                    equalScalar: n
                })
                  , l = ds({
                    typed: r,
                    DenseMatrix: s
                })
                  , D = mi({
                    typed: r,
                    DenseMatrix: s
                })
                  , y = yi({
                    typed: r,
                    matrix: t,
                    concat: f
                });
                return r(zi, {
                    "number, number": (A,a)=>A - a,
                    "Complex, Complex": (A,a)=>A.sub(a),
                    "BigNumber, BigNumber": (A,a)=>A.minus(a),
                    "Fraction, Fraction": (A,a)=>A.sub(a),
                    "Unit, Unit": r.referToSelf(A=>(a,h)=>{
                        if (null === a.value)
                            throw new Error("Parameter x contains a unit with undefined value");
                        if (null === h.value)
                            throw new Error("Parameter y contains a unit with undefined value");
                        if (!a.equalBase(h))
                            throw new Error("Units do not match");
                        var p = a.clone();
                        return p.value = r.find(A, [p.valueType(), h.valueType()])(p.value, h.value),
                        p.fixPrefix = !1,
                        p
                    }
                    )
                }, y({
                    SS: o,
                    DS: c,
                    SD: d,
                    Ss: D,
                    sS: l
                }))
            }
            )
        }
          , Li = "identity";
        const Ss = function qn(e, r) {
            var t = j({}, Un, r);
            if ("function" != typeof Object.create)
                throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
            var n = function Tt(e) {
                var r = new xt;
                return e.on = r.on.bind(r),
                e.off = r.off.bind(r),
                e.once = r.once.bind(r),
                e.emit = r.emit.bind(r),
                e
            }({
                isNumber: k,
                isComplex: Se,
                isBigNumber: L,
                isFraction: Me,
                isUnit: Oe,
                isString: oe,
                isArray: te,
                isMatrix: T,
                isCollection: v,
                isDenseMatrix: E,
                isSparseMatrix: F,
                isRange: b,
                isIndex: N,
                isBoolean: z,
                isResultSet: W,
                isHelp: X,
                isFunction: xe,
                isDate: K,
                isRegExp: be,
                isObject: we,
                isNull: Ne,
                isUndefined: ae,
                isAccessorNode: R,
                isArrayNode: ue,
                isAssignmentNode: se,
                isBlockNode: ye,
                isConditionalNode: Ee,
                isConstantNode: he,
                isFunctionAssignmentNode: Le,
                isFunctionNode: Be,
                isIndexNode: We,
                isNode: qe,
                isObjectNode: Ze,
                isOperatorNode: Ve,
                isParenthesisNode: Br,
                isRangeNode: ke,
                isRelationalNode: Nr,
                isSymbolNode: Fr,
                isChain: Cr
            });
            n.config = Zi(t, n.emit),
            n.expression = {
                transform: {},
                mathWithTransform: {
                    config: n.config
                }
            };
            var f = {};
            function c() {
                for (var o = arguments.length, l = new Array(o), D = 0; D < o; D++)
                    l[D] = arguments[D];
                return n.typed.apply(n.typed, l)
            }
            c.isTypedFunction = Ae.isTypedFunction;
            var d = function qi(e, r, t, n) {
                function u(h, p, B) {
                    if (B.wrap && "function" == typeof p && (p = function c(h) {
                        var p = function() {
                            for (var m = [], M = 0, C = arguments.length; M < C; M++) {
                                var w = arguments[M];
                                m[M] = w && w.valueOf()
                            }
                            return h.apply(t, m)
                        };
                        return h.transform && (p.transform = h.transform),
                        p
                    }(p)),
                    function l(h) {
                        return "function" == typeof h && "string" == typeof h.signature
                    }(p) && (p = e(h, {
                        [p.signature]: p
                    })),
                    e.isTypedFunction(t[h]) && e.isTypedFunction(p))
                        return p = B.override ? e(h, p.signatures) : e(t[h], p),
                        t[h] = p,
                        delete n[h],
                        s(h, p),
                        void t.emit("import", h, function() {
                            return p
                        });
                    if (void 0 === t[h] || B.override)
                        return t[h] = p,
                        delete n[h],
                        s(h, p),
                        void t.emit("import", h, function() {
                            return p
                        });
                    if (!B.silent)
                        throw new Error('Cannot import "' + h + '": already exists')
                }
                function s(h, p) {
                    p && "function" == typeof p.transform ? (t.expression.transform[h] = p.transform,
                    D(h) && (t.expression.mathWithTransform[h] = p.transform)) : (delete t.expression.transform[h],
                    D(h) && (t.expression.mathWithTransform[h] = p))
                }
                function f(h) {
                    delete t.expression.transform[h],
                    D(h) ? t.expression.mathWithTransform[h] = t[h] : delete t.expression.mathWithTransform[h]
                }
                function d(h, p) {
                    var B = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.fn;
                    if (zn(B, "."))
                        throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(B));
                    var m = A(h) ? t.expression.transform : t
                      , M = B in t.expression.transform
                      , C = er(m, B) ? m[B] : void 0
                      , w = function() {
                        var S = {};
                        h.dependencies.map(I).forEach(U=>{
                            if (zn(U, "."))
                                throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(U));
                            "math" === U ? S.math = t : "mathWithTransform" === U ? S.mathWithTransform = t.expression.mathWithTransform : "classes" === U ? S.classes = t : S[U] = t[U]
                        }
                        );
                        var O = h(S);
                        if (O && "function" == typeof O.transform)
                            throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
                        if (void 0 === C || p.override)
                            return O;
                        if (e.isTypedFunction(C) && e.isTypedFunction(O))
                            return e(C, O);
                        if (p.silent)
                            return C;
                        throw new Error('Cannot import "' + B + '": already exists')
                    };
                    h.meta && !1 === h.meta.lazy ? (m[B] = w(),
                    C && M ? f(B) : (A(h) || y(h)) && nt(t.expression.mathWithTransform, B, ()=>m[B])) : (nt(m, B, w),
                    C && M ? f(B) : (A(h) || y(h)) && nt(t.expression.mathWithTransform, B, ()=>m[B])),
                    n[B] = h,
                    t.emit("import", B, w)
                }
                function o(h) {
                    return "function" == typeof h || "number" == typeof h || "string" == typeof h || "boolean" == typeof h || null === h || Oe(h) || Se(h) || L(h) || Me(h) || T(h) || Array.isArray(h)
                }
                function D(h) {
                    return !er(a, h)
                }
                function y(h) {
                    return !(-1 !== h.fn.indexOf(".") || er(a, h.fn) || h.meta && h.meta.isClass)
                }
                function A(h) {
                    return void 0 !== h && void 0 !== h.meta && !0 === h.meta.isTransformFunction || !1
                }
                var a = {
                    expression: !0,
                    type: !0,
                    docs: !0,
                    error: !0,
                    json: !0,
                    chain: !0
                };
                return function i(h, p) {
                    var B = arguments.length;
                    if (1 !== B && 2 !== B)
                        throw new et("import",B,1,2);
                    p || (p = {});
                    var M = {};
                    for (var C in function m(x, S, O) {
                        if (Array.isArray(S))
                            S.forEach(ee=>m(x, ee));
                        else if ("object" == typeof S)
                            for (var U in S)
                                er(S, U) && m(x, S[U], U);
                        else if (Or(S) || void 0 !== O) {
                            var H = Or(S) ? A(S) ? S.fn + ".transform" : S.fn : O;
                            if (er(x, H) && x[H] !== S && !p.silent)
                                throw new Error('Cannot import "' + H + '" twice');
                            x[H] = S
                        } else if (!p.silent)
                            throw new TypeError("Factory, Object, or Array expected")
                    }(M, h),
                    M)
                        if (er(M, C)) {
                            var w = M[C];
                            if (Or(w))
                                d(w, p);
                            else if (o(w))
                                u(C, w, p);
                            else if (!p.silent)
                                throw new TypeError("Factory, Object, or Array expected")
                        }
                }
            }(c, 0, n, f);
            return n.import = d,
            n.on("config", ()=>{
                dt(f).forEach(o=>{
                    o && o.meta && o.meta.recreateOnConfigChange && d(o, {
                        override: !0
                    })
                }
                )
            }
            ),
            n.create = qn.bind(null, e),
            n.factory = me,
            n.import(dt(ct(e))),
            n.ArgumentsError = et,
            n.DimensionError = Te,
            n.IndexError = zr,
            n
        }({
            compareDependencies: qa,
            divideDependencies: {
                divideScalarDependencies: Cn,
                equalScalarDependencies: Ct,
                invDependencies: {
                    absDependencies: Oo,
                    addScalarDependencies: jt,
                    detDependencies: {
                        divideScalarDependencies: Cn,
                        isZeroDependencies: Zo,
                        matrixDependencies: Hr,
                        multiplyDependencies: kt,
                        subtractDependencies: Ui,
                        typedDependencies: Je,
                        unaryMinusDependencies: bn,
                        createDet: me("det", ["typed", "matrix", "subtract", "multiply", "divideScalar", "isZero", "unaryMinus"], e=>{
                            var {typed: r, matrix: t, subtract: n, multiply: i, divideScalar: u, isZero: s, unaryMinus: f} = e;
                            return r("det", {
                                any: function(o) {
                                    return Pe(o)
                                },
                                "Array | Matrix": function(o) {
                                    var l;
                                    switch ((l = T(o) ? o.size() : Array.isArray(o) ? (o = t(o)).size() : []).length) {
                                    case 0:
                                        return Pe(o);
                                    case 1:
                                        if (1 === l[0])
                                            return Pe(o.valueOf()[0]);
                                        if (0 === l[0])
                                            return 1;
                                        throw new RangeError("Matrix must be square (size: " + Ke(l) + ")");
                                    case 2:
                                        var D = l[0]
                                          , y = l[1];
                                        if (D === y)
                                            return function c(d, o, l) {
                                                if (1 === o)
                                                    return Pe(d[0][0]);
                                                if (2 === o)
                                                    return n(i(d[0][0], d[1][1]), i(d[1][0], d[0][1]));
                                                for (var D = !1, y = new Array(o).fill(0).map((x,S)=>S), A = 0; A < o; A++) {
                                                    var a = y[A];
                                                    if (s(d[a][A])) {
                                                        var h = void 0;
                                                        for (h = A + 1; h < o; h++)
                                                            if (!s(d[y[h]][A])) {
                                                                a = y[h],
                                                                y[h] = y[A],
                                                                y[A] = a,
                                                                D = !D;
                                                                break
                                                            }
                                                        if (h === o)
                                                            return d[a][A]
                                                    }
                                                    for (var p = d[a][A], B = 0 === A ? 1 : d[y[A - 1]][A - 1], m = A + 1; m < o; m++)
                                                        for (var M = y[m], C = A + 1; C < o; C++)
                                                            d[M][C] = u(n(i(d[M][C], p), i(d[M][A], d[a][C])), B)
                                                }
                                                var w = d[y[o - 1]][o - 1];
                                                return D ? f(w) : w
                                            }(o.clone().valueOf(), D);
                                        if (0 === y)
                                            return 1;
                                        throw new RangeError("Matrix must be square (size: " + Ke(l) + ")");
                                    default:
                                        throw new RangeError("Matrix must be two dimensional (size: " + Ke(l) + ")")
                                    }
                                }
                            })
                        }
                        )
                    },
                    divideScalarDependencies: Cn,
                    identityDependencies: {
                        BigNumberDependencies: $t,
                        DenseMatrixDependencies: Ft,
                        SparseMatrixDependencies: li,
                        matrixDependencies: Hr,
                        typedDependencies: Je,
                        createIdentity: me(Li, ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], e=>{
                            var {typed: r, config: t, matrix: n, BigNumber: i, DenseMatrix: u, SparseMatrix: s} = e;
                            return r(Li, {
                                "": function() {
                                    return "Matrix" === t.matrix ? n([]) : []
                                },
                                string: function(o) {
                                    return n(o)
                                },
                                "number | BigNumber": function(o) {
                                    return c(o, o, "Matrix" === t.matrix ? "dense" : void 0)
                                },
                                "number | BigNumber, string": function(o, l) {
                                    return c(o, o, l)
                                },
                                "number | BigNumber, number | BigNumber": function(o, l) {
                                    return c(o, l, "Matrix" === t.matrix ? "dense" : void 0)
                                },
                                "number | BigNumber, number | BigNumber, string": function(o, l, D) {
                                    return c(o, l, D)
                                },
                                Array: function(o) {
                                    return f(o)
                                },
                                "Array, string": function(o, l) {
                                    return f(o, l)
                                },
                                Matrix: function(o) {
                                    return f(o.valueOf(), o.storage())
                                },
                                "Matrix, string": function(o, l) {
                                    return f(o.valueOf(), l)
                                }
                            });
                            function f(d, o) {
                                switch (d.length) {
                                case 0:
                                    return o ? n(o) : [];
                                case 1:
                                    return c(d[0], d[0], o);
                                case 2:
                                    return c(d[0], d[1], o);
                                default:
                                    throw new Error("Vector containing two values expected")
                                }
                            }
                            function c(d, o, l) {
                                var D = L(d) || L(o) ? i : null;
                                if (L(d) && (d = d.toNumber()),
                                L(o) && (o = o.toNumber()),
                                !P(d) || d < 1)
                                    throw new Error("Parameters in function identity must be positive integers");
                                if (!P(o) || o < 1)
                                    throw new Error("Parameters in function identity must be positive integers");
                                var y = D ? new i(1) : 1
                                  , A = D ? new D(0) : 0
                                  , a = [d, o];
                                if (l) {
                                    if ("sparse" === l)
                                        return s.diagonal(a, y, 0, A);
                                    if ("dense" === l)
                                        return u.diagonal(a, y, 0, A);
                                    throw new TypeError('Unknown matrix type "'.concat(l, '"'))
                                }
                                for (var h = pt([], a, A), p = d < o ? d : o, B = 0; B < p; B++)
                                    h[B][B] = y;
                                return h
                            }
                        }
                        )
                    },
                    matrixDependencies: Hr,
                    multiplyDependencies: kt,
                    typedDependencies: Je,
                    unaryMinusDependencies: bn,
                    createInv: me("inv", ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], e=>{
                        var {typed: r, matrix: t, divideScalar: n, addScalar: i, multiply: u, unaryMinus: s, det: f, identity: c, abs: d} = e;
                        return r("inv", {
                            "Array | Matrix": function(D) {
                                var y = T(D) ? D.size() : br(D);
                                switch (y.length) {
                                case 1:
                                    if (1 === y[0])
                                        return T(D) ? t([n(1, D.valueOf()[0])]) : [n(1, D[0])];
                                    throw new RangeError("Matrix must be square (size: " + Ke(y) + ")");
                                case 2:
                                    var A = y[0]
                                      , a = y[1];
                                    if (A === a)
                                        return T(D) ? t(o(D.valueOf(), A, a), D.storage()) : o(D, A, a);
                                    throw new RangeError("Matrix must be square (size: " + Ke(y) + ")");
                                default:
                                    throw new RangeError("Matrix must be two dimensional (size: " + Ke(y) + ")")
                                }
                            },
                            any: function(D) {
                                return n(1, D)
                            }
                        });
                        function o(l, D, y) {
                            var A, a, h, p, B;
                            if (1 === D) {
                                if (0 === (p = l[0][0]))
                                    throw Error("Cannot calculate inverse, determinant is zero");
                                return [[n(1, p)]]
                            }
                            if (2 === D) {
                                var m = f(l);
                                if (0 === m)
                                    throw Error("Cannot calculate inverse, determinant is zero");
                                return [[n(l[1][1], m), n(s(l[0][1]), m)], [n(s(l[1][0]), m), n(l[0][0], m)]]
                            }
                            var M = l.concat();
                            for (A = 0; A < D; A++)
                                M[A] = M[A].concat();
                            for (var C = c(D).valueOf(), w = 0; w < y; w++) {
                                var x = d(M[w][w])
                                  , S = w;
                                for (A = w + 1; A < D; )
                                    d(M[A][w]) > x && (x = d(M[A][w]),
                                    S = A),
                                    A++;
                                if (0 === x)
                                    throw Error("Cannot calculate inverse, determinant is zero");
                                (A = S) !== w && (B = M[w],
                                M[w] = M[A],
                                M[A] = B,
                                B = C[w],
                                C[w] = C[A],
                                C[A] = B);
                                var O = M[w]
                                  , U = C[w];
                                for (A = 0; A < D; A++) {
                                    var H = M[A]
                                      , ee = C[A];
                                    if (A !== w) {
                                        if (0 !== H[w]) {
                                            for (h = n(s(H[w]), O[w]),
                                            a = w; a < y; a++)
                                                H[a] = i(H[a], u(h, O[a]));
                                            for (a = 0; a < y; a++)
                                                ee[a] = i(ee[a], u(h, U[a]))
                                        }
                                    } else {
                                        for (h = O[w],
                                        a = w; a < y; a++)
                                            H[a] = n(H[a], h);
                                        for (a = 0; a < y; a++)
                                            ee[a] = n(ee[a], h)
                                    }
                                }
                            }
                            return C
                        }
                    }
                    )
                },
                matrixDependencies: Hr,
                multiplyDependencies: kt,
                typedDependencies: Je,
                createDivide: me("divide", ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], e=>{
                    var {typed: r, matrix: t, multiply: n, equalScalar: i, divideScalar: u, inv: s} = e
                      , f = Oi({
                        typed: r,
                        equalScalar: i
                    })
                      , c = Fn({
                        typed: r
                    });
                    return r("divide", Lr({
                        "Array | Matrix, Array | Matrix": function(o, l) {
                            return n(o, s(l))
                        },
                        "DenseMatrix, any": function(o, l) {
                            return c(o, l, u, !1)
                        },
                        "SparseMatrix, any": function(o, l) {
                            return f(o, l, u, !1)
                        },
                        "Array, any": function(o, l) {
                            return c(t(o), l, u, !1).valueOf()
                        },
                        "any, Array | Matrix": function(o, l) {
                            return n(o, s(l))
                        }
                    }, u.signatures))
                }
                )
            },
            multiplyDependencies: kt,
            subtractDependencies: Ui
        }, {
            number: "BigNumber",
            precision: 64
        })
    }
    ,
    1006: function(wr, Ue) {
        var j;
        !function(Ae) {
            "use strict";
            var k = Math.cosh || function(v) {
                return Math.abs(v) < 1e-9 ? 1 - v : .5 * (Math.exp(v) + Math.exp(-v))
            }
              , L = Math.sinh || function(v) {
                return Math.abs(v) < 1e-9 ? v : .5 * (Math.exp(v) - Math.exp(-v))
            }
              , Oe = function() {
                throw SyntaxError("Invalid Param")
            };
            function oe(v, E) {
                var F = Math.abs(v)
                  , b = Math.abs(E);
                return 0 === v ? Math.log(b) : 0 === E ? Math.log(F) : F < 3e3 && b < 3e3 ? .5 * Math.log(v * v + E * E) : (v /= 2,
                E /= 2,
                .5 * Math.log(v * v + E * E) + Math.LN2)
            }
            var te = function(v, E) {
                var F = {
                    re: 0,
                    im: 0
                };
                if (null == v)
                    F.re = F.im = 0;
                else if (void 0 !== E)
                    F.re = v,
                    F.im = E;
                else
                    switch (typeof v) {
                    case "object":
                        if ("im"in v && "re"in v)
                            F.re = v.re,
                            F.im = v.im;
                        else if ("abs"in v && "arg"in v) {
                            if (!Number.isFinite(v.abs) && Number.isFinite(v.arg))
                                return T.INFINITY;
                            F.re = v.abs * Math.cos(v.arg),
                            F.im = v.abs * Math.sin(v.arg)
                        } else if ("r"in v && "phi"in v) {
                            if (!Number.isFinite(v.r) && Number.isFinite(v.phi))
                                return T.INFINITY;
                            F.re = v.r * Math.cos(v.phi),
                            F.im = v.r * Math.sin(v.phi)
                        } else
                            2 === v.length ? (F.re = v[0],
                            F.im = v[1]) : Oe();
                        break;
                    case "string":
                        F.im = F.re = 0;
                        var b = v.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g)
                          , N = 1
                          , z = 0;
                        null === b && Oe();
                        for (var W = 0; W < b.length; W++) {
                            var X = b[W];
                            " " === X || "\t" === X || "\n" === X || ("+" === X ? N++ : "-" === X ? z++ : "i" === X || "I" === X ? (N + z === 0 && Oe(),
                            " " === b[W + 1] || isNaN(b[W + 1]) ? F.im += parseFloat((z % 2 ? "-" : "") + "1") : (F.im += parseFloat((z % 2 ? "-" : "") + b[W + 1]),
                            W++),
                            N = z = 0) : ((N + z === 0 || isNaN(X)) && Oe(),
                            "i" === b[W + 1] || "I" === b[W + 1] ? (F.im += parseFloat((z % 2 ? "-" : "") + X),
                            W++) : F.re += parseFloat((z % 2 ? "-" : "") + X),
                            N = z = 0))
                        }
                        N + z > 0 && Oe();
                        break;
                    case "number":
                        F.im = 0,
                        F.re = v;
                        break;
                    default:
                        Oe()
                    }
                return isNaN(F.re) || isNaN(F.im),
                F
            };
            function T(v, E) {
                if (!(this instanceof T))
                    return new T(v,E);
                var F = te(v, E);
                this.re = F.re,
                this.im = F.im
            }
            T.prototype = {
                re: 0,
                im: 0,
                sign: function() {
                    var v = this.abs();
                    return new T(this.re / v,this.im / v)
                },
                add: function(v, E) {
                    var F = new T(v,E);
                    return this.isInfinite() && F.isInfinite() ? T.NAN : this.isInfinite() || F.isInfinite() ? T.INFINITY : new T(this.re + F.re,this.im + F.im)
                },
                sub: function(v, E) {
                    var F = new T(v,E);
                    return this.isInfinite() && F.isInfinite() ? T.NAN : this.isInfinite() || F.isInfinite() ? T.INFINITY : new T(this.re - F.re,this.im - F.im)
                },
                mul: function(v, E) {
                    var F = new T(v,E);
                    return this.isInfinite() && F.isZero() || this.isZero() && F.isInfinite() ? T.NAN : this.isInfinite() || F.isInfinite() ? T.INFINITY : 0 === F.im && 0 === this.im ? new T(this.re * F.re,0) : new T(this.re * F.re - this.im * F.im,this.re * F.im + this.im * F.re)
                },
                div: function(v, E) {
                    var F = new T(v,E);
                    if (this.isZero() && F.isZero() || this.isInfinite() && F.isInfinite())
                        return T.NAN;
                    if (this.isInfinite() || F.isZero())
                        return T.INFINITY;
                    if (this.isZero() || F.isInfinite())
                        return T.ZERO;
                    v = this.re,
                    E = this.im;
                    var z, W, b = F.re, N = F.im;
                    return 0 === N ? new T(v / b,E / b) : Math.abs(b) < Math.abs(N) ? new T((v * (W = b / N) + E) / (z = b * W + N),(E * W - v) / z) : new T((v + E * (W = N / b)) / (z = N * W + b),(E - v * W) / z)
                },
                pow: function(v, E) {
                    var F = new T(v,E);
                    if (v = this.re,
                    E = this.im,
                    F.isZero())
                        return T.ONE;
                    if (0 === F.im) {
                        if (0 === E && v > 0)
                            return new T(Math.pow(v, F.re),0);
                        if (0 === v)
                            switch ((F.re % 4 + 4) % 4) {
                            case 0:
                                return new T(Math.pow(E, F.re),0);
                            case 1:
                                return new T(0,Math.pow(E, F.re));
                            case 2:
                                return new T(-Math.pow(E, F.re),0);
                            case 3:
                                return new T(0,-Math.pow(E, F.re))
                            }
                    }
                    if (0 === v && 0 === E && F.re > 0 && F.im >= 0)
                        return T.ZERO;
                    var b = Math.atan2(E, v)
                      , N = oe(v, E);
                    return v = Math.exp(F.re * N - F.im * b),
                    E = F.im * N + F.re * b,
                    new T(v * Math.cos(E),v * Math.sin(E))
                },
                sqrt: function() {
                    var b, N, v = this.re, E = this.im, F = this.abs();
                    if (v >= 0) {
                        if (0 === E)
                            return new T(Math.sqrt(v),0);
                        b = .5 * Math.sqrt(2 * (F + v))
                    } else
                        b = Math.abs(E) / Math.sqrt(2 * (F - v));
                    return N = v <= 0 ? .5 * Math.sqrt(2 * (F - v)) : Math.abs(E) / Math.sqrt(2 * (F + v)),
                    new T(b,E < 0 ? -N : N)
                },
                exp: function() {
                    var v = Math.exp(this.re);
                    return new T(v * Math.cos(this.im),v * Math.sin(this.im))
                },
                expm1: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(Math.expm1(v) * Math.cos(E) + function(v) {
                        var E = Math.PI / 4;
                        if (-E > v || v > E)
                            return Math.cos(v) - 1;
                        var F = v * v;
                        return F * (F * (F * (F * (F * (F * (F * (F / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - .5)
                    }(E),Math.exp(v) * Math.sin(E))
                },
                log: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(oe(v, E),Math.atan2(E, v))
                },
                abs: function() {
                    return v = this.re,
                    E = this.im,
                    F = Math.abs(v),
                    b = Math.abs(E),
                    F < 3e3 && b < 3e3 ? Math.sqrt(F * F + b * b) : (F < b ? (F = b,
                    b = v / E) : b = E / v,
                    F * Math.sqrt(1 + b * b));
                    var v, E, F, b
                },
                arg: function() {
                    return Math.atan2(this.im, this.re)
                },
                sin: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(Math.sin(v) * k(E),Math.cos(v) * L(E))
                },
                cos: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(Math.cos(v) * k(E),-Math.sin(v) * L(E))
                },
                tan: function() {
                    var v = 2 * this.re
                      , E = 2 * this.im
                      , F = Math.cos(v) + k(E);
                    return new T(Math.sin(v) / F,L(E) / F)
                },
                cot: function() {
                    var v = 2 * this.re
                      , E = 2 * this.im
                      , F = Math.cos(v) - k(E);
                    return new T(-Math.sin(v) / F,L(E) / F)
                },
                sec: function() {
                    var v = this.re
                      , E = this.im
                      , F = .5 * k(2 * E) + .5 * Math.cos(2 * v);
                    return new T(Math.cos(v) * k(E) / F,Math.sin(v) * L(E) / F)
                },
                csc: function() {
                    var v = this.re
                      , E = this.im
                      , F = .5 * k(2 * E) - .5 * Math.cos(2 * v);
                    return new T(Math.sin(v) * k(E) / F,-Math.cos(v) * L(E) / F)
                },
                asin: function() {
                    var v = this.re
                      , E = this.im
                      , F = new T(E * E - v * v + 1,-2 * v * E).sqrt()
                      , b = new T(F.re - E,F.im + v).log();
                    return new T(b.im,-b.re)
                },
                acos: function() {
                    var v = this.re
                      , E = this.im
                      , F = new T(E * E - v * v + 1,-2 * v * E).sqrt()
                      , b = new T(F.re - E,F.im + v).log();
                    return new T(Math.PI / 2 - b.im,b.re)
                },
                atan: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === v) {
                        if (1 === E)
                            return new T(0,1 / 0);
                        if (-1 === E)
                            return new T(0,-1 / 0)
                    }
                    var F = v * v + (1 - E) * (1 - E)
                      , b = new T((1 - E * E - v * v) / F,-2 * v / F).log();
                    return new T(-.5 * b.im,.5 * b.re)
                },
                acot: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === E)
                        return new T(Math.atan2(1, v),0);
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).atan() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).atan()
                },
                asec: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === v && 0 === E)
                        return new T(0,1 / 0);
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).acos() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).acos()
                },
                acsc: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === v && 0 === E)
                        return new T(Math.PI / 2,1 / 0);
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).asin() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).asin()
                },
                sinh: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(L(v) * Math.cos(E),k(v) * Math.sin(E))
                },
                cosh: function() {
                    var v = this.re
                      , E = this.im;
                    return new T(k(v) * Math.cos(E),L(v) * Math.sin(E))
                },
                tanh: function() {
                    var v = 2 * this.re
                      , E = 2 * this.im
                      , F = k(v) + Math.cos(E);
                    return new T(L(v) / F,Math.sin(E) / F)
                },
                coth: function() {
                    var v = 2 * this.re
                      , E = 2 * this.im
                      , F = k(v) - Math.cos(E);
                    return new T(L(v) / F,-Math.sin(E) / F)
                },
                csch: function() {
                    var v = this.re
                      , E = this.im
                      , F = Math.cos(2 * E) - k(2 * v);
                    return new T(-2 * L(v) * Math.cos(E) / F,2 * k(v) * Math.sin(E) / F)
                },
                sech: function() {
                    var v = this.re
                      , E = this.im
                      , F = Math.cos(2 * E) + k(2 * v);
                    return new T(2 * k(v) * Math.cos(E) / F,-2 * L(v) * Math.sin(E) / F)
                },
                asinh: function() {
                    var v = this.im;
                    this.im = -this.re,
                    this.re = v;
                    var E = this.asin();
                    return this.re = -this.im,
                    this.im = v,
                    v = E.re,
                    E.re = -E.im,
                    E.im = v,
                    E
                },
                acosh: function() {
                    var v = this.acos();
                    if (v.im <= 0) {
                        var E = v.re;
                        v.re = -v.im,
                        v.im = E
                    } else
                        E = v.im,
                        v.im = -v.re,
                        v.re = E;
                    return v
                },
                atanh: function() {
                    var v = this.re
                      , E = this.im
                      , F = v > 1 && 0 === E
                      , b = 1 - v
                      , N = 1 + v
                      , z = b * b + E * E
                      , W = 0 !== z ? new T((N * b - E * E) / z,(E * b + N * E) / z) : new T(-1 !== v ? v / 0 : 0,0 !== E ? E / 0 : 0)
                      , X = W.re;
                    return W.re = oe(W.re, W.im) / 2,
                    W.im = Math.atan2(W.im, X) / 2,
                    F && (W.im = -W.im),
                    W
                },
                acoth: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === v && 0 === E)
                        return new T(0,Math.PI / 2);
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).atanh() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).atanh()
                },
                acsch: function() {
                    var v = this.re
                      , E = this.im;
                    if (0 === E)
                        return new T(0 !== v ? Math.log(v + Math.sqrt(v * v + 1)) : 1 / 0,0);
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).asinh() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).asinh()
                },
                asech: function() {
                    var v = this.re
                      , E = this.im;
                    if (this.isZero())
                        return T.INFINITY;
                    var F = v * v + E * E;
                    return 0 !== F ? new T(v / F,-E / F).acosh() : new T(0 !== v ? v / 0 : 0,0 !== E ? -E / 0 : 0).acosh()
                },
                inverse: function() {
                    if (this.isZero())
                        return T.INFINITY;
                    if (this.isInfinite())
                        return T.ZERO;
                    var v = this.re
                      , E = this.im
                      , F = v * v + E * E;
                    return new T(v / F,-E / F)
                },
                conjugate: function() {
                    return new T(this.re,-this.im)
                },
                neg: function() {
                    return new T(-this.re,-this.im)
                },
                ceil: function(v) {
                    return v = Math.pow(10, v || 0),
                    new T(Math.ceil(this.re * v) / v,Math.ceil(this.im * v) / v)
                },
                floor: function(v) {
                    return v = Math.pow(10, v || 0),
                    new T(Math.floor(this.re * v) / v,Math.floor(this.im * v) / v)
                },
                round: function(v) {
                    return v = Math.pow(10, v || 0),
                    new T(Math.round(this.re * v) / v,Math.round(this.im * v) / v)
                },
                equals: function(v, E) {
                    var F = new T(v,E);
                    return Math.abs(F.re - this.re) <= T.EPSILON && Math.abs(F.im - this.im) <= T.EPSILON
                },
                clone: function() {
                    return new T(this.re,this.im)
                },
                toString: function() {
                    var v = this.re
                      , E = this.im
                      , F = "";
                    return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(v) < T.EPSILON && (v = 0),
                    Math.abs(E) < T.EPSILON && (E = 0),
                    0 === E ? F + v : (0 !== v ? (F += v,
                    F += " ",
                    E < 0 ? (E = -E,
                    F += "-") : F += "+",
                    F += " ") : E < 0 && (E = -E,
                    F += "-"),
                    1 !== E && (F += E),
                    F + "i"))
                },
                toVector: function() {
                    return [this.re, this.im]
                },
                valueOf: function() {
                    return 0 === this.im ? this.re : null
                },
                isNaN: function() {
                    return isNaN(this.re) || isNaN(this.im)
                },
                isZero: function() {
                    return 0 === this.im && 0 === this.re
                },
                isFinite: function() {
                    return isFinite(this.re) && isFinite(this.im)
                },
                isInfinite: function() {
                    return !(this.isNaN() || this.isFinite())
                }
            },
            T.ZERO = new T(0,0),
            T.ONE = new T(1,0),
            T.I = new T(0,1),
            T.PI = new T(Math.PI,0),
            T.E = new T(Math.E,0),
            T.INFINITY = new T(1 / 0,1 / 0),
            T.NAN = new T(NaN,NaN),
            T.EPSILON = 1e-15,
            void 0 !== (j = function() {
                return T
            }
            .apply(Ue, [])) && (wr.exports = j)
        }()
    },
    44613: function(wr, Ue) {
        var j;
        !function(Ae) {
            "use strict";
            var L = {
                s: 1,
                n: 0,
                d: 1
            };
            function Se(b, N) {
                if (isNaN(b = parseInt(b, 10)))
                    throw F.InvalidParameter;
                return b * N
            }
            function Me(b, N) {
                if (0 === N)
                    throw F.DivisionByZero;
                var z = Object.create(F.prototype);
                z.s = b < 0 ? -1 : 1;
                var W = E(b = b < 0 ? -b : b, N);
                return z.n = b / W,
                z.d = N / W,
                z
            }
            function Oe(b) {
                for (var N = {}, z = b, W = 2, X = 4; X <= z; ) {
                    for (; z % W == 0; )
                        z /= W,
                        N[W] = (N[W] || 0) + 1;
                    X += 1 + 2 * W++
                }
                return z !== b ? z > 1 && (N[z] = (N[z] || 0) + 1) : N[b] = (N[b] || 0) + 1,
                N
            }
            var oe = function(b, N) {
                var Ee, z = 0, W = 1, X = 1, xe = 0, K = 0, be = 0, we = 1, Ne = 1, ae = 0, R = 1, ue = 1, se = 1, ye = 1e7;
                if (null != b)
                    if (void 0 !== N) {
                        if (X = (z = b) * (W = N),
                        z % 1 != 0 || W % 1 != 0)
                            throw F.NonIntegerParameter
                    } else
                        switch (typeof b) {
                        case "object":
                            if ("d"in b && "n"in b)
                                z = b.n,
                                W = b.d,
                                "s"in b && (z *= b.s);
                            else {
                                if (!(0 in b))
                                    throw F.InvalidParameter;
                                z = b[0],
                                1 in b && (W = b[1])
                            }
                            X = z * W;
                            break;
                        case "number":
                            if (b < 0 && (X = b,
                            b = -b),
                            b % 1 == 0)
                                z = b;
                            else if (b > 0) {
                                for (b >= 1 && (b /= Ne = Math.pow(10, Math.floor(1 + Math.log(b) / Math.LN10))); R <= ye && se <= ye; ) {
                                    if (b === (Ee = (ae + ue) / (R + se))) {
                                        R + se <= ye ? (z = ae + ue,
                                        W = R + se) : se > R ? (z = ue,
                                        W = se) : (z = ae,
                                        W = R);
                                        break
                                    }
                                    b > Ee ? (ae += ue,
                                    R += se) : (ue += ae,
                                    se += R),
                                    R > ye ? (z = ue,
                                    W = se) : (z = ae,
                                    W = R)
                                }
                                z *= Ne
                            } else
                                (isNaN(b) || isNaN(N)) && (W = z = NaN);
                            break;
                        case "string":
                            if (null === (R = b.match(/\d+|./g)))
                                throw F.InvalidParameter;
                            if ("-" === R[ae] ? (X = -1,
                            ae++) : "+" === R[ae] && ae++,
                            R.length === ae + 1 ? K = Se(R[ae++], X) : "." === R[ae + 1] || "." === R[ae] ? ("." !== R[ae] && (xe = Se(R[ae++], X)),
                            (1 + ++ae === R.length || "(" === R[ae + 1] && ")" === R[ae + 3] || "'" === R[ae + 1] && "'" === R[ae + 3]) && (K = Se(R[ae], X),
                            we = Math.pow(10, R[ae].length),
                            ae++),
                            ("(" === R[ae] && ")" === R[ae + 2] || "'" === R[ae] && "'" === R[ae + 2]) && (be = Se(R[ae + 1], X),
                            Ne = Math.pow(10, R[ae + 1].length) - 1,
                            ae += 3)) : "/" === R[ae + 1] || ":" === R[ae + 1] ? (K = Se(R[ae], X),
                            we = Se(R[ae + 2], 1),
                            ae += 3) : "/" === R[ae + 3] && " " === R[ae + 1] && (xe = Se(R[ae], X),
                            K = Se(R[ae + 2], X),
                            we = Se(R[ae + 4], 1),
                            ae += 5),
                            R.length <= ae) {
                                X = z = be + (W = we * Ne) * xe + Ne * K;
                                break
                            }
                        default:
                            throw F.InvalidParameter
                        }
                if (0 === W)
                    throw F.DivisionByZero;
                L.s = X < 0 ? -1 : 1,
                L.n = Math.abs(z),
                L.d = Math.abs(W)
            };
            function E(b, N) {
                if (!b)
                    return N;
                if (!N)
                    return b;
                for (; ; ) {
                    if (!(b %= N))
                        return N;
                    if (!(N %= b))
                        return b
                }
            }
            function F(b, N) {
                if (oe(b, N),
                !(this instanceof F))
                    return Me(L.s * L.n, L.d);
                b = E(L.d, L.n),
                this.s = L.s,
                this.n = L.n / b,
                this.d = L.d / b
            }
            F.DivisionByZero = new Error("Division by Zero"),
            F.InvalidParameter = new Error("Invalid argument"),
            F.NonIntegerParameter = new Error("Parameters must be integer"),
            F.prototype = {
                s: 1,
                n: 0,
                d: 1,
                abs: function() {
                    return Me(this.n, this.d)
                },
                neg: function() {
                    return Me(-this.s * this.n, this.d)
                },
                add: function(b, N) {
                    return oe(b, N),
                    Me(this.s * this.n * L.d + L.s * this.d * L.n, this.d * L.d)
                },
                sub: function(b, N) {
                    return oe(b, N),
                    Me(this.s * this.n * L.d - L.s * this.d * L.n, this.d * L.d)
                },
                mul: function(b, N) {
                    return oe(b, N),
                    Me(this.s * L.s * this.n * L.n, this.d * L.d)
                },
                div: function(b, N) {
                    return oe(b, N),
                    Me(this.s * L.s * this.n * L.d, this.d * L.n)
                },
                clone: function() {
                    return Me(this.s * this.n, this.d)
                },
                mod: function(b, N) {
                    if (isNaN(this.n) || isNaN(this.d))
                        return new F(NaN);
                    if (void 0 === b)
                        return Me(this.s * this.n % this.d, 1);
                    if (oe(b, N),
                    0 === L.n && 0 === this.d)
                        throw F.DivisionByZero;
                    return Me(this.s * (L.d * this.n) % (L.n * this.d), L.d * this.d)
                },
                gcd: function(b, N) {
                    return oe(b, N),
                    Me(E(L.n, this.n) * E(L.d, this.d), L.d * this.d)
                },
                lcm: function(b, N) {
                    return oe(b, N),
                    0 === L.n && 0 === this.n ? Me(0, 1) : Me(L.n * this.n, E(L.n, this.n) * E(L.d, this.d))
                },
                ceil: function(b) {
                    return b = Math.pow(10, b || 0),
                    isNaN(this.n) || isNaN(this.d) ? new F(NaN) : Me(Math.ceil(b * this.s * this.n / this.d), b)
                },
                floor: function(b) {
                    return b = Math.pow(10, b || 0),
                    isNaN(this.n) || isNaN(this.d) ? new F(NaN) : Me(Math.floor(b * this.s * this.n / this.d), b)
                },
                round: function(b) {
                    return b = Math.pow(10, b || 0),
                    isNaN(this.n) || isNaN(this.d) ? new F(NaN) : Me(Math.round(b * this.s * this.n / this.d), b)
                },
                inverse: function() {
                    return Me(this.s * this.d, this.n)
                },
                pow: function(b, N) {
                    if (oe(b, N),
                    1 === L.d)
                        return L.s < 0 ? Me(Math.pow(this.s * this.d, L.n), Math.pow(this.n, L.n)) : Me(Math.pow(this.s * this.n, L.n), Math.pow(this.d, L.n));
                    if (this.s < 0)
                        return null;
                    var z = Oe(this.n)
                      , W = Oe(this.d)
                      , X = 1
                      , xe = 1;
                    for (var K in z)
                        if ("1" !== K) {
                            if ("0" === K) {
                                X = 0;
                                break
                            }
                            if (z[K] *= L.n,
                            z[K] % L.d != 0)
                                return null;
                            z[K] /= L.d,
                            X *= Math.pow(K, z[K])
                        }
                    for (var K in W)
                        if ("1" !== K) {
                            if (W[K] *= L.n,
                            W[K] % L.d != 0)
                                return null;
                            W[K] /= L.d,
                            xe *= Math.pow(K, W[K])
                        }
                    return L.s < 0 ? Me(xe, X) : Me(X, xe)
                },
                equals: function(b, N) {
                    return oe(b, N),
                    this.s * this.n * L.d == L.s * L.n * this.d
                },
                compare: function(b, N) {
                    oe(b, N);
                    var z = this.s * this.n * L.d - L.s * L.n * this.d;
                    return (0 < z) - (z < 0)
                },
                simplify: function(b) {
                    if (isNaN(this.n) || isNaN(this.d))
                        return this;
                    b = b || .001;
                    for (var N = this.abs(), z = N.toContinued(), W = 1; W < z.length; W++) {
                        for (var X = Me(z[W - 1], 1), xe = W - 2; xe >= 0; xe--)
                            X = X.inverse().add(z[xe]);
                        if (X.sub(N).abs().valueOf() < b)
                            return X.mul(this.s)
                    }
                    return this
                },
                divisible: function(b, N) {
                    return oe(b, N),
                    !(!(L.n * this.d) || this.n * L.d % (L.n * this.d))
                },
                valueOf: function() {
                    return this.s * this.n / this.d
                },
                toFraction: function(b) {
                    var N, z = "", W = this.n, X = this.d;
                    return this.s < 0 && (z += "-"),
                    1 === X ? z += W : (b && (N = Math.floor(W / X)) > 0 && (z += N,
                    z += " ",
                    W %= X),
                    z += W,
                    z += "/",
                    z += X),
                    z
                },
                toLatex: function(b) {
                    var N, z = "", W = this.n, X = this.d;
                    return this.s < 0 && (z += "-"),
                    1 === X ? z += W : (b && (N = Math.floor(W / X)) > 0 && (z += N,
                    W %= X),
                    z += "\\frac{",
                    z += W,
                    z += "}{",
                    z += X,
                    z += "}"),
                    z
                },
                toContinued: function() {
                    var b, N = this.n, z = this.d, W = [];
                    if (isNaN(N) || isNaN(z))
                        return W;
                    do {
                        W.push(Math.floor(N / z)),
                        b = N % z,
                        N = z,
                        z = b
                    } while (1 !== N);
                    return W
                },
                toString: function(b) {
                    var N = this.n
                      , z = this.d;
                    if (isNaN(N) || isNaN(z))
                        return "NaN";
                    b = b || 15;
                    var W = function T(b, N) {
                        for (; N % 2 == 0; N /= 2)
                            ;
                        for (; N % 5 == 0; N /= 5)
                            ;
                        if (1 === N)
                            return 0;
                        for (var z = 10 % N, W = 1; 1 !== z; W++)
                            if (z = 10 * z % N,
                            W > 2e3)
                                return 0;
                        return W
                    }(0, z)
                      , X = function v(b, N, z) {
                        for (var W = 1, X = function te(b, N, z) {
                            for (var W = 1; N > 0; b = b * b % z,
                            N >>= 1)
                                1 & N && (W = W * b % z);
                            return W
                        }(10, z, N), xe = 0; xe < 300; xe++) {
                            if (W === X)
                                return xe;
                            W = 10 * W % N,
                            X = 10 * X % N
                        }
                        return 0
                    }(0, z, W)
                      , xe = this.s < 0 ? "-" : "";
                    if (xe += N / z | 0,
                    N %= z,
                    (N *= 10) && (xe += "."),
                    W) {
                        for (var K = X; K--; )
                            xe += N / z | 0,
                            N %= z,
                            N *= 10;
                        for (xe += "(",
                        K = W; K--; )
                            xe += N / z | 0,
                            N %= z,
                            N *= 10;
                        xe += ")"
                    } else
                        for (K = b; N && K--; )
                            xe += N / z | 0,
                            N %= z,
                            N *= 10;
                    return xe
                }
            },
            void 0 !== (j = function() {
                return F
            }
            .apply(Ue, [])) && (wr.exports = j)
        }()
    },
    56958: wr=>{
        function Ue() {}
        Ue.prototype = {
            on: function(J, j, Ae) {
                var k = this.e || (this.e = {});
                return (k[J] || (k[J] = [])).push({
                    fn: j,
                    ctx: Ae
                }),
                this
            },
            once: function(J, j, Ae) {
                var k = this;
                function L() {
                    k.off(J, L),
                    j.apply(Ae, arguments)
                }
                return L._ = j,
                this.on(J, L, Ae)
            },
            emit: function(J) {
                for (var j = [].slice.call(arguments, 1), Ae = ((this.e || (this.e = {}))[J] || []).slice(), k = 0, L = Ae.length; k < L; k++)
                    Ae[k].fn.apply(Ae[k].ctx, j);
                return this
            },
            off: function(J, j) {
                var Ae = this.e || (this.e = {})
                  , k = Ae[J]
                  , L = [];
                if (k && j)
                    for (var Se = 0, Me = k.length; Se < Me; Se++)
                        k[Se].fn !== j && k[Se].fn._ !== j && L.push(k[Se]);
                return L.length ? Ae[J] = L : delete Ae[J],
                this
            }
        },
        wr.exports = Ue,
        wr.exports.TinyEmitter = Ue
    }
    ,
    95961: function(wr) {
        wr.exports = function() {
            "use strict";
            function Ue(te, T) {
                var v = typeof Symbol < "u" && te[Symbol.iterator] || te["@@iterator"];
                if (!v) {
                    if (Array.isArray(te) || (v = function J(te, T) {
                        if (te) {
                            if ("string" == typeof te)
                                return j(te, T);
                            var v = Object.prototype.toString.call(te).slice(8, -1);
                            if ("Object" === v && te.constructor && (v = te.constructor.name),
                            "Map" === v || "Set" === v)
                                return Array.from(te);
                            if ("Arguments" === v || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))
                                return j(te, T)
                        }
                    }(te)) || T && te && "number" == typeof te.length) {
                        v && (te = v);
                        var E = 0
                          , F = function() {};
                        return {
                            s: F,
                            n: function() {
                                return E >= te.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: te[E++]
                                }
                            },
                            e: function(X) {
                                throw X
                            },
                            f: F
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var z, b = !0, N = !1;
                return {
                    s: function() {
                        v = v.call(te)
                    },
                    n: function() {
                        var X = v.next();
                        return b = X.done,
                        X
                    },
                    e: function(X) {
                        N = !0,
                        z = X
                    },
                    f: function() {
                        try {
                            !b && null != v.return && v.return()
                        } finally {
                            if (N)
                                throw z
                        }
                    }
                }
            }
            function j(te, T) {
                (null == T || T > te.length) && (T = te.length);
                for (var v = 0, E = new Array(T); v < T; v++)
                    E[v] = te[v];
                return E
            }
            function Ae(te) {
                return (Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(T) {
                    return typeof T
                }
                : function(T) {
                    return T && "function" == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
                }
                )(te)
            }
            function k() {
                return !0
            }
            function L() {
                return !1
            }
            function Se() {}
            var Me = "Argument is not a typed-function.";
            return function Oe() {
                function te(g) {
                    return "object" === Ae(g) && null !== g && g.constructor === Object
                }
                var E, F, T = [{
                    name: "number",
                    test: function(_) {
                        return "number" == typeof _
                    }
                }, {
                    name: "string",
                    test: function(_) {
                        return "string" == typeof _
                    }
                }, {
                    name: "boolean",
                    test: function(_) {
                        return "boolean" == typeof _
                    }
                }, {
                    name: "Function",
                    test: function(_) {
                        return "function" == typeof _
                    }
                }, {
                    name: "Array",
                    test: Array.isArray
                }, {
                    name: "Date",
                    test: function(_) {
                        return _ instanceof Date
                    }
                }, {
                    name: "RegExp",
                    test: function(_) {
                        return _ instanceof RegExp
                    }
                }, {
                    name: "Object",
                    test: te
                }, {
                    name: "null",
                    test: function(_) {
                        return null === _
                    }
                }, {
                    name: "undefined",
                    test: function(_) {
                        return void 0 === _
                    }
                }], v = {
                    name: "any",
                    test: k,
                    isAny: !0
                }, b = 0, N = {
                    createCount: 0
                };
                function z(g) {
                    var _ = E.get(g);
                    if (_)
                        return _;
                    var G, Q, I = 'Unknown type "' + g + '"', P = g.toLowerCase(), $ = Ue(F);
                    try {
                        for ($.s(); !(Q = $.n()).done; )
                            if ((G = Q.value).toLowerCase() === P) {
                                I += '. Did you mean "' + G + '" ?';
                                break
                            }
                    } catch (q) {
                        $.e(q)
                    } finally {
                        $.f()
                    }
                    throw new TypeError(I)
                }
                function W(g) {
                    for (var _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "any", I = _ ? z(_).index : F.length, P = [], G = 0; G < g.length; ++G) {
                        if (!g[G] || "string" != typeof g[G].name || "function" != typeof g[G].test)
                            throw new TypeError("Object with properties {name: string, test: function} expected");
                        var $ = g[G].name;
                        if (E.has($))
                            throw new TypeError('Duplicate type name "' + $ + '"');
                        P.push($),
                        E.set($, {
                            name: $,
                            test: g[G].test,
                            isAny: g[G].isAny,
                            index: I + G,
                            conversionsTo: []
                        })
                    }
                    var Q = F.slice(I);
                    F = F.slice(0, I).concat(P).concat(Q);
                    for (var q = I + P.length; q < F.length; ++q)
                        E.get(F[q]).index = q
                }
                function X() {
                    E = new Map,
                    F = [],
                    b = 0,
                    W([v], !1)
                }
                function K(g) {
                    var _ = F.filter(function(I) {
                        var P = E.get(I);
                        return !P.isAny && P.test(g)
                    });
                    return _.length ? _ : ["any"]
                }
                function be(g) {
                    return g && "function" == typeof g && "_typedFunctionData"in g
                }
                function we(g, _, I) {
                    if (!be(g))
                        throw new TypeError(Me);
                    var P = I && I.exact
                      , $ = Ee(Array.isArray(_) ? _.join(",") : _)
                      , Q = R($);
                    if (!P || Q in g.signatures) {
                        var q = g._typedFunctionData.signatureMap.get(Q);
                        if (q)
                            return q
                    }
                    var de, Fe, Y = $.length;
                    if (P)
                        for (Fe in de = [],
                        g.signatures)
                            de.push(g._typedFunctionData.signatureMap.get(Fe));
                    else
                        de = g._typedFunctionData.signatures;
                    for (var re = 0; re < Y; ++re) {
                        var mr, rr = $[re], ur = [], fr = void 0, Qe = Ue(de);
                        try {
                            for (Qe.s(); !(mr = Qe.n()).done; ) {
                                var Xe = Be((fr = mr.value).params, re);
                                if (Xe && (!rr.restParam || Xe.restParam)) {
                                    if (!Xe.hasAny && "continue" === function() {
                                        var yr = ye(Xe);
                                        if (rr.types.some(function($r) {
                                            return !yr.has($r.name)
                                        }))
                                            return "continue"
                                    }())
                                        continue;
                                    ur.push(fr)
                                }
                            }
                        } catch (yr) {
                            Qe.e(yr)
                        } finally {
                            Qe.f()
                        }
                        if (0 === (de = ur).length)
                            break
                    }
                    var lr, xr, dr = Ue(de);
                    try {
                        for (dr.s(); !(xr = dr.n()).done; )
                            if ((lr = xr.value).params.length <= Y)
                                return lr
                    } catch (yr) {
                        dr.e(yr)
                    } finally {
                        dr.f()
                    }
                    throw new TypeError("Signature not found (signature: " + (g.name || "unnamed") + "(" + R($, ", ") + "))")
                }
                function R(g) {
                    var _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
                    return g.map(function(I) {
                        return I.name
                    }).join(_)
                }
                function ue(g) {
                    var _ = 0 === g.indexOf("...")
                      , P = (_ ? g.length > 3 ? g.slice(3) : "any" : g).split("|").map(function(q) {
                        return z(q.trim())
                    })
                      , G = !1
                      , $ = _ ? "..." : "";
                    return {
                        types: P.map(function(q) {
                            return G = q.isAny || G,
                            $ += q.name + "|",
                            {
                                name: q.name,
                                typeIndex: q.index,
                                test: q.test,
                                isAny: q.isAny,
                                conversion: null,
                                conversionIndex: -1
                            }
                        }),
                        name: $.slice(0, -1),
                        hasAny: G,
                        hasConversion: !1,
                        restParam: _
                    }
                }
                function se(g) {
                    var I = function Cr(g) {
                        if (0 === g.length)
                            return [];
                        var _ = g.map(z);
                        g.length > 1 && _.sort(function(Y, de) {
                            return Y.index - de.index
                        });
                        var I = _[0].conversionsTo;
                        if (1 === g.length)
                            return I;
                        I = I.concat([]);
                        for (var P = new Set(g), G = 1; G < _.length; ++G) {
                            var q, $ = void 0, Q = Ue(_[G].conversionsTo);
                            try {
                                for (Q.s(); !(q = Q.n()).done; )
                                    P.has(($ = q.value).from) || (I.push($),
                                    P.add($.from))
                            } catch (Y) {
                                Q.e(Y)
                            } finally {
                                Q.f()
                            }
                        }
                        return I
                    }(g.types.map(function(Q) {
                        return Q.name
                    }))
                      , P = g.hasAny
                      , G = g.name
                      , $ = I.map(function(Q) {
                        var q = z(Q.from);
                        return P = q.isAny || P,
                        G += "|" + Q.from,
                        {
                            name: Q.from,
                            typeIndex: q.index,
                            test: q.test,
                            isAny: q.isAny,
                            conversion: Q,
                            conversionIndex: Q.index
                        }
                    });
                    return {
                        types: g.types.concat($),
                        name: G,
                        hasAny: P,
                        hasConversion: $.length > 0,
                        restParam: g.restParam
                    }
                }
                function ye(g) {
                    return g.typeSet || (g.typeSet = new Set,
                    g.types.forEach(function(_) {
                        return g.typeSet.add(_.name)
                    })),
                    g.typeSet
                }
                function Ee(g) {
                    var _ = [];
                    if ("string" != typeof g)
                        throw new TypeError("Signatures must be strings");
                    var I = g.trim();
                    if ("" === I)
                        return _;
                    for (var P = I.split(","), G = 0; G < P.length; ++G) {
                        var $ = ue(P[G].trim());
                        if ($.restParam && G !== P.length - 1)
                            throw new SyntaxError('Unexpected rest parameter "' + P[G] + '": only allowed for the last parameter');
                        if (0 === $.types.length)
                            return null;
                        _.push($)
                    }
                    return _
                }
                function he(g) {
                    var _ = er(g);
                    return !!_ && _.restParam
                }
                function _e(g) {
                    if (!g || 0 === g.types.length)
                        return k;
                    if (1 === g.types.length)
                        return z(g.types[0].name).test;
                    if (2 === g.types.length) {
                        var _ = z(g.types[0].name).test
                          , I = z(g.types[1].name).test;
                        return function($) {
                            return _($) || I($)
                        }
                    }
                    var P = g.types.map(function(G) {
                        return z(G.name).test
                    });
                    return function($) {
                        for (var Q = 0; Q < P.length; Q++)
                            if (P[Q]($))
                                return !0;
                        return !1
                    }
                }
                function Le(g) {
                    var _, I, P;
                    if (he(g)) {
                        var G = (_ = Mt(g).map(_e)).length
                          , $ = _e(er(g));
                        return function(Y) {
                            for (var de = 0; de < _.length; de++)
                                if (!_[de](Y[de]))
                                    return !1;
                            return function(Y) {
                                for (var de = G; de < Y.length; de++)
                                    if (!$(Y[de]))
                                        return !1;
                                return !0
                            }(Y) && Y.length >= G + 1
                        }
                    }
                    return 0 === g.length ? function(Y) {
                        return 0 === Y.length
                    }
                    : 1 === g.length ? (I = _e(g[0]),
                    function(Y) {
                        return I(Y[0]) && 1 === Y.length
                    }
                    ) : 2 === g.length ? (I = _e(g[0]),
                    P = _e(g[1]),
                    function(Y) {
                        return I(Y[0]) && P(Y[1]) && 2 === Y.length
                    }
                    ) : (_ = g.map(_e),
                    function(Y) {
                        for (var de = 0; de < _.length; de++)
                            if (!_[de](Y[de]))
                                return !1;
                        return Y.length === _.length
                    }
                    )
                }
                function Be(g, _) {
                    return _ < g.length ? g[_] : he(g) ? er(g) : null
                }
                function We(g, _) {
                    var I = Be(g, _);
                    return I ? ye(I) : new Set
                }
                function qe(g) {
                    return null == g.conversion
                }
                function Ze(g, _) {
                    var I = new Set;
                    return g.forEach(function(P) {
                        var q, Q = Ue(We(P.params, _));
                        try {
                            for (Q.s(); !(q = Q.n()).done; )
                                I.add(q.value)
                        } catch (Y) {
                            Q.e(Y)
                        } finally {
                            Q.f()
                        }
                    }),
                    I.has("any") ? ["any"] : Array.from(I)
                }
                function Ve(g, _, I) {
                    var P, G, q, $ = g || "unnamed", Q = I, Y = function() {
                        var Qe = [];
                        if (Q.forEach(function(Xe) {
                            var lr = _e(Be(Xe.params, q));
                            (q < Xe.params.length || he(Xe.params)) && lr(_[q]) && Qe.push(Xe)
                        }),
                        0 === Qe.length) {
                            if ((G = Ze(Q, q)).length > 0) {
                                var mr = K(_[q]);
                                return (P = new TypeError("Unexpected type of argument in function " + $ + " (expected: " + G.join(" or ") + ", actual: " + mr.join(" | ") + ", index: " + q + ")")).data = {
                                    category: "wrongType",
                                    fn: $,
                                    index: q,
                                    actual: mr,
                                    expected: G
                                },
                                {
                                    v: P
                                }
                            }
                        } else
                            Q = Qe
                    };
                    for (q = 0; q < _.length; q++) {
                        var de = Y();
                        if ("object" === Ae(de))
                            return de.v
                    }
                    var Fe = Q.map(function(fr) {
                        return he(fr.params) ? 1 / 0 : fr.params.length
                    });
                    if (_.length < Math.min.apply(null, Fe))
                        return G = Ze(Q, q),
                        (P = new TypeError("Too few arguments in function " + $ + " (expected: " + G.join(" or ") + ", index: " + _.length + ")")).data = {
                            category: "tooFewArgs",
                            fn: $,
                            index: _.length,
                            expected: G
                        },
                        P;
                    var re = Math.max.apply(null, Fe);
                    if (_.length > re)
                        return (P = new TypeError("Too many arguments in function " + $ + " (expected: " + re + ", actual: " + _.length + ")")).data = {
                            category: "tooManyArgs",
                            fn: $,
                            index: _.length,
                            expectedLength: re
                        },
                        P;
                    for (var rr = [], ur = 0; ur < _.length; ++ur)
                        rr.push(K(_[ur]).join("|"));
                    return (P = new TypeError('Arguments of type "' + rr.join(", ") + '" do not match any of the defined signatures of function ' + $ + ".")).data = {
                        category: "mismatch",
                        actual: rr
                    },
                    P
                }
                function Br(g) {
                    for (var _ = F.length + 1, I = 0; I < g.types.length; I++)
                        qe(g.types[I]) && (_ = Math.min(_, g.types[I].typeIndex));
                    return _
                }
                function ke(g) {
                    for (var _ = b + 1, I = 0; I < g.types.length; I++)
                        qe(g.types[I]) || (_ = Math.min(_, g.types[I].conversionIndex));
                    return _
                }
                function Nr(g, _) {
                    if (g.hasAny) {
                        if (!_.hasAny)
                            return 1
                    } else if (_.hasAny)
                        return -1;
                    if (g.restParam) {
                        if (!_.restParam)
                            return 1
                    } else if (_.restParam)
                        return -1;
                    if (g.hasConversion) {
                        if (!_.hasConversion)
                            return 1
                    } else if (_.hasConversion)
                        return -1;
                    var I = Br(g) - Br(_);
                    if (I < 0)
                        return -1;
                    if (I > 0)
                        return 1;
                    var P = ke(g) - ke(_);
                    return P < 0 ? -1 : P > 0 ? 1 : 0
                }
                function Fr(g, _) {
                    var I = g.params
                      , P = _.params
                      , G = er(I)
                      , $ = er(P)
                      , Q = he(I)
                      , q = he(P);
                    if (Q && G.hasAny) {
                        if (!q || !$.hasAny)
                            return 1
                    } else if (q && $.hasAny)
                        return -1;
                    var Fe, rr, Y = 0, de = 0, re = Ue(I);
                    try {
                        for (re.s(); !(rr = re.n()).done; )
                            (Fe = rr.value).hasAny && ++Y,
                            Fe.hasConversion && ++de
                    } catch (it) {
                        re.e(it)
                    } finally {
                        re.f()
                    }
                    var mr, ur = 0, fr = 0, Qe = Ue(P);
                    try {
                        for (Qe.s(); !(mr = Qe.n()).done; )
                            (Fe = mr.value).hasAny && ++ur,
                            Fe.hasConversion && ++fr
                    } catch (it) {
                        Qe.e(it)
                    } finally {
                        Qe.f()
                    }
                    if (Y !== ur)
                        return Y - ur;
                    if (Q && G.hasConversion) {
                        if (!q || !$.hasConversion)
                            return 1
                    } else if (q && $.hasConversion)
                        return -1;
                    if (de !== fr)
                        return de - fr;
                    if (Q) {
                        if (!q)
                            return 1
                    } else if (q)
                        return -1;
                    var Xe = (I.length - P.length) * (Q ? -1 : 1);
                    if (0 !== Xe)
                        return Xe;
                    for (var ar = [], lr = 0, dr = 0; dr < I.length; ++dr) {
                        var xr = Nr(I[dr], P[dr]);
                        ar.push(xr),
                        lr += xr
                    }
                    if (0 !== lr)
                        return lr;
                    for (var yr, $r = 0, Dt = ar; $r < Dt.length; $r++)
                        if (0 !== (yr = Dt[$r]))
                            return yr;
                    return 0
                }
                function ir(g, _) {
                    var I = _;
                    if (g.some(function(q) {
                        return q.hasConversion
                    })) {
                        var P = he(g)
                          , G = g.map(Pe);
                        I = function() {
                            for (var Y = [], de = P ? arguments.length - 1 : arguments.length, Fe = 0; Fe < de; Fe++)
                                Y[Fe] = G[Fe](arguments[Fe]);
                            return P && (Y[de] = arguments[de].map(G[de])),
                            _.apply(this, Y)
                        }
                    }
                    var $ = I;
                    if (he(g)) {
                        var Q = g.length - 1;
                        $ = function() {
                            return I.apply(this, lt(arguments, 0, Q).concat([lt(arguments, Q)]))
                        }
                    }
                    return $
                }
                function Pe(g) {
                    var _, I, P, G, $ = [], Q = [];
                    switch (g.types.forEach(function(q) {
                        q.conversion && ($.push(z(q.conversion.from).test),
                        Q.push(q.conversion.convert))
                    }),
                    Q.length) {
                    case 0:
                        return function(Y) {
                            return Y
                        }
                        ;
                    case 1:
                        return _ = $[0],
                        P = Q[0],
                        function(Y) {
                            return _(Y) ? P(Y) : Y
                        }
                        ;
                    case 2:
                        return _ = $[0],
                        I = $[1],
                        P = Q[0],
                        G = Q[1],
                        function(Y) {
                            return _(Y) ? P(Y) : I(Y) ? G(Y) : Y
                        }
                        ;
                    default:
                        return function(Y) {
                            for (var de = 0; de < Q.length; de++)
                                if ($[de](Y))
                                    return Q[de](Y);
                            return Y
                        }
                    }
                }
                function pr(g) {
                    return function _(I, P, G) {
                        if (P < I.length) {
                            var $ = I[P]
                              , Q = [];
                            if ($.restParam) {
                                var q = $.types.filter(qe);
                                q.length < $.types.length && Q.push({
                                    types: q,
                                    name: "..." + q.map(function(Y) {
                                        return Y.name
                                    }).join("|"),
                                    hasAny: q.some(function(Y) {
                                        return Y.isAny
                                    }),
                                    hasConversion: !1,
                                    restParam: !0
                                }),
                                Q.push($)
                            } else
                                Q = $.types.map(function(Y) {
                                    return {
                                        types: [Y],
                                        name: Y.name,
                                        hasAny: Y.isAny,
                                        hasConversion: Y.conversion,
                                        restParam: !1
                                    }
                                });
                            return function Bt(g, _) {
                                return Array.prototype.concat.apply([], g.map(_))
                            }(Q, function(Y) {
                                return _(I, P + 1, G.concat([Y]))
                            })
                        }
                        return [G]
                    }(g, 0, [])
                }
                function Gr(g, _, I) {
                    var G, Q, P = [], $ = Ue(g);
                    try {
                        for ($.s(); !(Q = $.n()).done; ) {
                            var q = I[G = Q.value];
                            if ("number" != typeof q)
                                throw new TypeError('No definition for referenced signature "' + G + '"');
                            if ("function" != typeof (q = _[q]))
                                return !1;
                            P.push(q)
                        }
                    } catch (Y) {
                        $.e(Y)
                    } finally {
                        $.f()
                    }
                    return P
                }
                function ct(g, _, I) {
                    for (var P = function rt(g) {
                        return g.map(function(_) {
                            return xt(_) ? dt(_.referToSelf.callback) : ht(_) ? Nt(_.referTo.references, _.referTo.callback) : _
                        })
                    }(g), G = new Array(P.length).fill(!1), $ = !0; $; ) {
                        $ = !1;
                        for (var Q = !0, q = 0; q < P.length; ++q)
                            if (!G[q]) {
                                var Y = P[q];
                                if (xt(Y))
                                    P[q] = Y.referToSelf.callback(I),
                                    P[q].referToSelf = Y.referToSelf,
                                    G[q] = !0,
                                    Q = !1;
                                else if (ht(Y)) {
                                    var de = Gr(Y.referTo.references, P, _);
                                    de ? (P[q] = Y.referTo.callback.apply(this, de),
                                    P[q].referTo = Y.referTo,
                                    G[q] = !0,
                                    Q = !1) : $ = !0
                                }
                            }
                        if (Q && $)
                            throw new SyntaxError("Circular reference detected in resolving typed.referTo")
                    }
                    return P
                }
                function _t(g, _) {
                    if (N.createCount++,
                    0 === Object.keys(_).length)
                        throw new SyntaxError("No signatures provided");
                    N.warnAgainstDeprecatedThis && function tt(g) {
                        var _ = /\bthis(\(|\.signatures\b)/;
                        Object.keys(g).forEach(function(I) {
                            if (_.test(g[I].toString()))
                                throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")
                        })
                    }(_);
                    var Q, I = [], P = [], G = {}, $ = [], q = function() {
                        if (!Object.prototype.hasOwnProperty.call(_, Q))
                            return "continue";
                        var tr = Ee(Q);
                        if (!tr)
                            return "continue";
                        I.forEach(function(kr) {
                            if (function Lr(g, _) {
                                for (var I = Math.max(g.length, _.length), P = 0; P < I; P++) {
                                    var de, G = We(g, P), Q = !1, Y = Ue(We(_, P));
                                    try {
                                        for (Y.s(); !(de = Y.n()).done; )
                                            if (G.has(de.value)) {
                                                Q = !0;
                                                break
                                            }
                                    } catch (fr) {
                                        Y.e(fr)
                                    } finally {
                                        Y.f()
                                    }
                                    if (!Q)
                                        return !1
                                }
                                var Fe = g.length
                                  , re = _.length
                                  , rr = he(g)
                                  , ur = he(_);
                                return rr ? ur ? Fe === re : re >= Fe : ur ? Fe >= re : Fe === re
                            }(kr, tr))
                                throw new TypeError('Conflicting signatures "' + R(kr) + '" and "' + R(tr) + '".')
                        }),
                        I.push(tr);
                        var yt = P.length;
                        P.push(_[Q]);
                        var fn, ut = void 0, Et = Ue(pr(tr.map(se)));
                        try {
                            for (Et.s(); !(fn = Et.n()).done; ) {
                                var cn = R(ut = fn.value);
                                $.push({
                                    params: ut,
                                    name: cn,
                                    fn: yt
                                }),
                                ut.every(function(kr) {
                                    return !kr.hasConversion
                                }) && (G[cn] = yt)
                            }
                        } catch (kr) {
                            Et.e(kr)
                        } finally {
                            Et.f()
                        }
                    };
                    for (Q in _)
                        q();
                    $.sort(Fr);
                    var Fe, de = ct(P, G, jr);
                    for (Fe in G)
                        Object.prototype.hasOwnProperty.call(G, Fe) && (G[Fe] = de[G[Fe]]);
                    for (var re = [], rr = new Map, ur = 0, fr = $; ur < fr.length; ur++)
                        rr.has((Fe = fr[ur]).name) || (Fe.fn = de[Fe.fn],
                        re.push(Fe),
                        rr.set(Fe.name, Fe));
                    for (var Qe = re[0] && re[0].params.length <= 2 && !he(re[0].params), mr = re[1] && re[1].params.length <= 2 && !he(re[1].params), Xe = re[2] && re[2].params.length <= 2 && !he(re[2].params), ar = re[3] && re[3].params.length <= 2 && !he(re[3].params), lr = re[4] && re[4].params.length <= 2 && !he(re[4].params), dr = re[5] && re[5].params.length <= 2 && !he(re[5].params), xr = Qe && mr && Xe && ar && lr && dr, yr = 0; yr < re.length; ++yr)
                        re[yr].test = Le(re[yr].params);
                    for (var $r = Qe ? _e(re[0].params[0]) : L, Dt = mr ? _e(re[1].params[0]) : L, it = Xe ? _e(re[2].params[0]) : L, Bn = ar ? _e(re[3].params[0]) : L, Nn = lr ? _e(re[4].params[0]) : L, xn = dr ? _e(re[5].params[0]) : L, vt = Qe ? _e(re[0].params[1]) : L, tn = mr ? _e(re[1].params[1]) : L, nn = Xe ? _e(re[2].params[1]) : L, Ot = ar ? _e(re[3].params[1]) : L, un = lr ? _e(re[4].params[1]) : L, Tn = dr ? _e(re[5].params[1]) : L, Ke = 0; Ke < re.length; ++Ke)
                        re[Ke].implementation = ir(re[Ke].params, re[Ke].fn);
                    var an = Qe ? re[0].implementation : Se
                      , On = mr ? re[1].implementation : Se
                      , In = Xe ? re[2].implementation : Se
                      , It = ar ? re[3].implementation : Se
                      , on = lr ? re[4].implementation : Se
                      , Pn = dr ? re[5].implementation : Se
                      , Te = Qe ? re[0].params.length : -1
                      , zr = mr ? re[1].params.length : -1
                      , br = Xe ? re[2].params.length : -1
                      , Pt = ar ? re[3].params.length : -1
                      , zt = lr ? re[4].params.length : -1
                      , Ge = dr ? re[5].params.length : -1
                      , pt = xr ? 6 : 0
                      , mt = re.length
                      , sn = re.map(function(_r) {
                        return _r.test
                    })
                      , gt = re.map(function(_r) {
                        return _r.implementation
                    })
                      , Ut = function() {
                        for (var tr = pt; tr < mt; tr++)
                            if (sn[tr](arguments))
                                return gt[tr].apply(this, arguments);
                        return N.onMismatch(g, arguments, re)
                    };
                    function jr(_r, tr) {
                        return arguments.length === Te && $r(_r) && vt(tr) ? an.apply(this, arguments) : arguments.length === zr && Dt(_r) && tn(tr) ? On.apply(this, arguments) : arguments.length === br && it(_r) && nn(tr) ? In.apply(this, arguments) : arguments.length === Pt && Bn(_r) && Ot(tr) ? It.apply(this, arguments) : arguments.length === zt && Nn(_r) && un(tr) ? on.apply(this, arguments) : arguments.length === Ge && xn(_r) && Tn(tr) ? Pn.apply(this, arguments) : Ut.apply(this, arguments)
                    }
                    try {
                        Object.defineProperty(jr, "name", {
                            value: g
                        })
                    } catch {}
                    return jr.signatures = G,
                    jr._typedFunctionData = {
                        signatures: re,
                        signatureMap: rr
                    },
                    jr
                }
                function nt(g, _, I) {
                    throw Ve(g, _, I)
                }
                function Mt(g) {
                    return lt(g, 0, g.length - 1)
                }
                function er(g) {
                    return g[g.length - 1]
                }
                function lt(g, _, I) {
                    return Array.prototype.slice.call(g, _, I)
                }
                function Nt(g, _) {
                    return {
                        referTo: {
                            references: g,
                            callback: _
                        }
                    }
                }
                function dt(g) {
                    if ("function" != typeof g)
                        throw new TypeError("Callback function expected as first argument");
                    return {
                        referToSelf: {
                            callback: g
                        }
                    }
                }
                function ht(g) {
                    return g && "object" === Ae(g.referTo) && Array.isArray(g.referTo.references) && "function" == typeof g.referTo.callback
                }
                function xt(g) {
                    return g && "object" === Ae(g.referToSelf) && "function" == typeof g.referToSelf.callback
                }
                function Tt(g, _) {
                    if (!g)
                        return _;
                    if (_ && _ !== g) {
                        var I = new Error("Function names do not match (expected: " + g + ", actual: " + _ + ")");
                        throw I.data = {
                            actual: _,
                            expected: g
                        },
                        I
                    }
                    return g
                }
                function me(g) {
                    var _;
                    for (var I in g)
                        Object.prototype.hasOwnProperty.call(g, I) && (be(g[I]) || "string" == typeof g[I].signature) && (_ = Tt(_, g[I].name));
                    return _
                }
                function rn(g, _) {
                    var I;
                    for (I in _)
                        if (Object.prototype.hasOwnProperty.call(_, I)) {
                            if (I in g && _[I] !== g[I]) {
                                var P = new Error('Signature "' + I + '" is defined twice');
                                throw P.data = {
                                    signature: I,
                                    sourceFunction: _[I],
                                    destFunction: g[I]
                                },
                                P
                            }
                            g[I] = _[I]
                        }
                }
                X(),
                W(T);
                var Sn = N;
                function Or(g) {
                    if (!g || "string" != typeof g.from || "string" != typeof g.to || "function" != typeof g.convert)
                        throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
                    if (g.to === g.from)
                        throw new SyntaxError('Illegal to define conversion from "' + g.from + '" to itself.')
                }
                return N = function(_) {
                    for (var I = "string" == typeof _, G = I ? _ : "", $ = {}, Q = I ? 1 : 0; Q < arguments.length; ++Q) {
                        var q = arguments[Q]
                          , Y = {}
                          , de = void 0;
                        if ("function" == typeof q ? (de = q.name,
                        "string" == typeof q.signature ? Y[q.signature] = q : be(q) && (Y = q.signatures)) : te(q) && (Y = q,
                        I || (de = me(q))),
                        0 === Object.keys(Y).length) {
                            var Fe = new TypeError("Argument to 'typed' at index " + Q + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
                            throw Fe.data = {
                                index: Q,
                                argument: q
                            },
                            Fe
                        }
                        I || (G = Tt(G, de)),
                        rn($, Y)
                    }
                    return _t(G || "", $)
                }
                ,
                N.create = Oe,
                N.createCount = Sn.createCount,
                N.onMismatch = nt,
                N.throwMismatchError = nt,
                N.createError = Ve,
                N.clear = X,
                N.clearConversions = function xe() {
                    var I, _ = Ue(F);
                    try {
                        for (_.s(); !(I = _.n()).done; )
                            E.get(I.value).conversionsTo = []
                    } catch (P) {
                        _.e(P)
                    } finally {
                        _.f()
                    }
                    b = 0
                }
                ,
                N.addTypes = W,
                N._findType = z,
                N.referTo = function Mn() {
                    var g = Mt(arguments).map(function(I) {
                        return R(Ee(I))
                    })
                      , _ = er(arguments);
                    if ("function" != typeof _)
                        throw new TypeError("Callback function expected as last argument");
                    return Nt(g, _)
                }
                ,
                N.referToSelf = dt,
                N.convert = function ae(g, _) {
                    var I = z(_);
                    if (I.test(g))
                        return g;
                    var P = I.conversionsTo;
                    if (0 === P.length)
                        throw new Error("There are no conversions to " + _ + " defined.");
                    for (var G = 0; G < P.length; G++)
                        if (z(P[G].from).test(g))
                            return P[G].convert(g);
                    throw new Error("Cannot convert " + g + " to " + _)
                }
                ,
                N.findSignature = we,
                N.find = function Ne(g, _, I) {
                    return we(g, _, I).implementation
                }
                ,
                N.isTypedFunction = be,
                N.warnAgainstDeprecatedThis = !0,
                N.addType = function(g, _) {
                    var I = "any";
                    !1 !== _ && E.has("Object") && (I = "Object"),
                    N.addTypes([g], I)
                }
                ,
                N.addConversion = function(g) {
                    Or(g);
                    var _ = z(g.to);
                    if (!_.conversionsTo.every(function(I) {
                        return I.from !== g.from
                    }))
                        throw new Error('There is already a conversion from "' + g.from + '" to "' + _.name + '"');
                    _.conversionsTo.push({
                        from: g.from,
                        convert: g.convert,
                        index: b++
                    })
                }
                ,
                N.addConversions = function(g) {
                    g.forEach(N.addConversion)
                }
                ,
                N.removeConversion = function(g) {
                    Or(g);
                    var _ = z(g.to)
                      , I = function St(g, _) {
                        for (var I = 0; I < g.length; I++)
                            if (_(g[I]))
                                return g[I]
                    }(_.conversionsTo, function(G) {
                        return G.from === g.from
                    });
                    if (!I)
                        throw new Error("Attempt to remove nonexistent conversion from " + g.from + " to " + g.to);
                    if (I.convert !== g.convert)
                        throw new Error("Conversion to remove does not match existing conversion");
                    var P = _.conversionsTo.indexOf(I);
                    _.conversionsTo.splice(P, 1)
                }
                ,
                N.resolve = function(g, _) {
                    if (!be(g))
                        throw new TypeError(Me);
                    for (var I = g._typedFunctionData.signatures, P = 0; P < I.length; ++P)
                        if (I[P].test(_))
                            return I[P];
                    return null
                }
                ,
                N
            }()
        }()
    },
    80787: wr=>{
        "use strict";
        wr.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
    }
}]);
