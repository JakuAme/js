"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[3773], {
    13773: (Dn,ve,o)=>{
        o.r(ve),
        o.d(ve, {
            arrayRegex: ()=>F.Ow,
            assertCurrentChain: ()=>V.qg,
            assertRequest: ()=>Tn.F,
            assertTransactionEIP1559: ()=>ye,
            assertTransactionEIP2930: ()=>pe,
            assertTransactionLegacy: ()=>me,
            boolToBytes: ()=>b.Cu,
            boolToHex: ()=>f.C4,
            buildRequest: ()=>st.n,
            bytesRegex: ()=>F.eL,
            bytesToBigint: ()=>Ke,
            bytesToBool: ()=>je,
            bytesToHex: ()=>f.ci,
            bytesToNumber: ()=>J,
            bytesToString: ()=>He,
            ccipFetch: ()=>D.ccipFetch,
            concat: ()=>T.zo,
            concatBytes: ()=>T.eV,
            concatHex: ()=>T.SM,
            containsNodeError: ()=>Ye.B,
            decodeAbiParameters: ()=>be.r,
            decodeErrorResult: ()=>ct.p,
            decodeEventLog: ()=>ut.F,
            decodeFunctionData: ()=>lt,
            decodeFunctionResult: ()=>dt.k,
            defineBlock: ()=>Ue.G,
            defineChain: ()=>V.ax,
            defineFormatter: ()=>bn.$,
            defineTransaction: ()=>se.y_,
            defineTransactionReceipt: ()=>fn.d,
            defineTransactionRequest: ()=>De.i,
            encodeAbiParameters: ()=>k.E,
            encodeDeployData: ()=>ft.w,
            encodeErrorResult: ()=>ht,
            encodeEventTopics: ()=>yt.O,
            encodeFunctionData: ()=>pt.R,
            encodeFunctionResult: ()=>gt,
            encodePacked: ()=>an,
            extract: ()=>hn.K,
            extractFunctionName: ()=>Z.jW,
            extractFunctionParams: ()=>Z.Df,
            extractFunctionParts: ()=>Z.ll,
            extractFunctionType: ()=>Z.yl,
            formatAbiItem: ()=>K.t,
            formatAbiItemWithArgs: ()=>on.z,
            formatAbiParams: ()=>K.h,
            formatBlock: ()=>Ue.Z,
            formatEther: ()=>Ln.d,
            formatGwei: ()=>On.o,
            formatLog: ()=>dn.U,
            formatTransaction: ()=>se.Tr,
            formatTransactionRequest: ()=>De.t,
            formatUnits: ()=>Bn.b,
            fromBytes: ()=>yn,
            fromHex: ()=>h.H_,
            fromRlp: ()=>Y,
            getAbiItem: ()=>q.m,
            getAddress: ()=>E.K,
            getCallError: ()=>mn.P,
            getChainContractAddress: ()=>V.LI,
            getContractAddress: ()=>ln,
            getContractError: ()=>gn.S,
            getCreate2Address: ()=>Ne,
            getCreateAddress: ()=>Be,
            getEstimateGasError: ()=>vn.Z,
            getEventSelector: ()=>Pn.e,
            getFunctionSelector: ()=>Q.o,
            getNodeError: ()=>Ye.k,
            getSerializedTransactionType: ()=>_e,
            getSocket: ()=>xe.h,
            getTransactionError: ()=>xn.$,
            getTransactionType: ()=>et,
            hashMessage: ()=>Qe.r,
            hashTypedData: ()=>Xe.J,
            hexToBigInt: ()=>h.y_,
            hexToBool: ()=>h.XA,
            hexToBytes: ()=>b.nr,
            hexToNumber: ()=>h.ly,
            hexToString: ()=>h.rR,
            integerRegex: ()=>F.lh,
            isAddress: ()=>M.U,
            isAddressEqual: ()=>ie.E,
            isBytes: ()=>re,
            isHash: ()=>We,
            isHex: ()=>p.v,
            keccak256: ()=>G.w,
            numberToBytes: ()=>b.hL,
            numberToHex: ()=>f.eC,
            offchainLookup: ()=>D.offchainLookup,
            offchainLookupAbiItem: ()=>D.offchainLookupAbiItem,
            offchainLookupSignature: ()=>D.offchainLookupSignature,
            pad: ()=>I.vk,
            padBytes: ()=>I.i3,
            padHex: ()=>I.gc,
            parseAbi: ()=>tn,
            parseAbiItem: ()=>nn,
            parseAbiParameter: ()=>rn,
            parseAbiParameters: ()=>sn,
            parseAccount: ()=>cn.T,
            parseEther: ()=>Gn,
            parseGwei: ()=>Un.L,
            parseTransaction: ()=>In,
            parseUnits: ()=>rt.v,
            prepareRequest: ()=>Rn.h,
            publicKeyToAddress: ()=>Fe,
            recoverAddress: ()=>oe,
            recoverMessageAddress: ()=>ke,
            recoverPublicKey: ()=>Ve,
            recoverTypedDataAddress: ()=>qe,
            rpc: ()=>xe.f,
            serializeAccessList: ()=>ge,
            serializeTransaction: ()=>Mn,
            size: ()=>Ge.d,
            slice: ()=>$.tP,
            sliceBytes: ()=>$.T4,
            sliceHex: ()=>$.p5,
            stringToBytes: ()=>b.qX,
            stringToHex: ()=>f.$G,
            stringify: ()=>at.P,
            toBytes: ()=>b.O0,
            toHex: ()=>f.NC,
            toRlp: ()=>U,
            transactionType: ()=>se.c8,
            trim: ()=>L.f,
            validateTypedData: ()=>ot.i,
            verifyMessage: ()=>wn,
            verifyTypedData: ()=>An
        });
        var st = o(98635)
          , D = o(7501)
          , V = o(71863)
          , F = o(45616)
          , xe = o(81035)
          , at = o(76744)
          , ot = o(42764)
          , be = o(11824)
          , ct = o(49095)
          , ut = o(6135)
          , A = o(55816)
          , $ = o(52281)
          , Q = o(3796)
          , K = o(34076);
        function lt({abi: e, data: t}) {
            const n = (0,
            $.tP)(t, 0, 4)
              , r = e.find(i=>"function" === i.type && n === (0,
            Q.o)((0,
            K.t)(i)));
            if (!r)
                throw new A.eF(n,{
                    docsPath: "/docs/contract/decodeFunctionData"
                });
            return {
                functionName: r.name,
                args: "inputs"in r && r.inputs && r.inputs.length > 0 ? (0,
                be.r)(r.inputs, (0,
                $.tP)(t, 4)) : void 0
            }
        }
        var dt = o(53292)
          , k = o(91677)
          , ft = o(32415)
          , T = o(81364)
          , q = o(95270);
        const _ = "/docs/contract/encodeErrorResult";
        function ht({abi: e, errorName: t, args: n}) {
            let r = e[0];
            if (t && (r = (0,
            q.m)({
                abi: e,
                args: n,
                name: t
            }),
            !r))
                throw new A.MS(t,{
                    docsPath: _
                });
            if ("error" !== r.type)
                throw new A.MS(void 0,{
                    docsPath: _
                });
            const i = (0,
            K.t)(r)
              , s = (0,
            Q.o)(i);
            let a = "0x";
            if (n && n.length > 0) {
                if (!r.inputs)
                    throw new A.Zh(r.name,{
                        docsPath: _
                    });
                a = (0,
                k.E)(r.inputs, n)
            }
            return (0,
            T.SM)([s, a])
        }
        var yt = o(40814)
          , pt = o(75445);
        const mt = "/docs/contract/encodeFunctionResult";
        function gt({abi: e, functionName: t, result: n}) {
            let r = e[0];
            if (t && (r = (0,
            q.m)({
                abi: e,
                name: t
            }),
            !r))
                throw new A.xL(t,{
                    docsPath: "/docs/contract/encodeFunctionResult"
                });
            if ("function" !== r.type)
                throw new A.xL(void 0,{
                    docsPath: "/docs/contract/encodeFunctionResult"
                });
            if (!r.outputs)
                throw new A.MX(r.name,{
                    docsPath: mt
                });
            let i = Array.isArray(n) ? n : [n];
            return 0 === r.outputs.length && !i[0] && (i = []),
            (0,
            k.E)(r.outputs, i)
        }
        class v extends Error {
            constructor(t, n={}) {
                const r = n.cause instanceof v ? n.cause.details : n.cause?.message ? n.cause.message : n.details
                  , i = n.cause instanceof v && n.cause.docsPath || n.docsPath;
                super([t || "An error occurred.", "", ...n.metaMessages ? [...n.metaMessages, ""] : [], ...i ? [`Docs: https://abitype.dev ${i}`] : [], ...r ? [`Details: ${r}`] : [], "Version: abitype@0.8.7"].join("\n")),
                Object.defineProperty(this, "details", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "docsPath", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "metaMessages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "shortMessage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "AbiTypeError"
                }),
                n.cause && (this.cause = n.cause),
                this.details = r,
                this.docsPath = i,
                this.metaMessages = n.metaMessages,
                this.shortMessage = t
            }
        }
        class xt extends v {
            constructor({signature: t}) {
                super("Failed to parse ABI item.", {
                    details: `parseAbiItem(${JSON.stringify(t, null, 2)})`,
                    docsPath: "/api/human.html#parseabiitem-1"
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidAbiItemError"
                })
            }
        }
        class bt extends v {
            constructor({type: t}) {
                super("Unknown type.", {
                    metaMessages: [`Type "${t}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownTypeError"
                })
            }
        }
        class Pt extends v {
            constructor({type: t}) {
                super("Unknown type.", {
                    metaMessages: [`Type "${t}" is not a valid ABI type.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownSolidityTypeError"
                })
            }
        }
        class wt extends v {
            constructor({param: t}) {
                super("Failed to parse ABI parameter.", {
                    details: `parseAbiParameter(${JSON.stringify(t, null, 2)})`,
                    docsPath: "/api/human.html#parseabiparameter-1"
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidAbiParameterError"
                })
            }
        }
        class At extends v {
            constructor({params: t}) {
                super("Failed to parse ABI parameters.", {
                    details: `parseAbiParameters(${JSON.stringify(t, null, 2)})`,
                    docsPath: "/api/human.html#parseabiparameters-1"
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidAbiParametersError"
                })
            }
        }
        class Tt extends v {
            constructor({param: t}) {
                super("Invalid ABI parameter.", {
                    details: t
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidParameterError"
                })
            }
        }
        class It extends v {
            constructor({param: t, name: n}) {
                super("Invalid ABI parameter.", {
                    details: t,
                    metaMessages: [`"${n}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "SolidityProtectedKeywordError"
                })
            }
        }
        class Et extends v {
            constructor({param: t, type: n, modifier: r}) {
                super("Invalid ABI parameter.", {
                    details: t,
                    metaMessages: [`Modifier "${r}" not allowed ${n ? ` in "${n}" type` : ""}.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidModifierError"
                })
            }
        }
        class St extends v {
            constructor({param: t, type: n, modifier: r}) {
                super("Invalid ABI parameter.", {
                    details: t,
                    metaMessages: [`Modifier "${r}" not allowed ${n ? ` in "${n}" type` : ""}.`, `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidFunctionModifierError"
                })
            }
        }
        class $t extends v {
            constructor({abiParameter: t}) {
                super("Invalid ABI parameter.", {
                    details: JSON.stringify(t, null, 2),
                    metaMessages: ["ABI parameter type is invalid."]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidAbiTypeParameterError"
                })
            }
        }
        class B extends v {
            constructor({signature: t, type: n}) {
                super(`Invalid ${n} signature.`, {
                    details: t
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidSignatureError"
                })
            }
        }
        class Rt extends v {
            constructor({signature: t}) {
                super("Unknown signature.", {
                    details: t
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "UnknownSignatureError"
                })
            }
        }
        class Mt extends v {
            constructor({signature: t}) {
                super("Invalid struct signature.", {
                    details: t,
                    metaMessages: ["No properties exist."]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidStructSignatureError"
                })
            }
        }
        class Ct extends v {
            constructor({current: t, depth: n}) {
                super("Unbalanced parentheses.", {
                    metaMessages: [`"${t.trim()}" has too many ${n > 0 ? "opening" : "closing"} parentheses.`],
                    details: `Depth "${n}"`
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "InvalidParenthesisError"
                })
            }
        }
        class Ft extends v {
            constructor({type: t}) {
                super("Circular reference detected.", {
                    metaMessages: [`Struct "${t}" is a circular reference.`]
                }),
                Object.defineProperty(this, "name", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "CircularReferenceError"
                })
            }
        }
        function R(e, t) {
            return e.exec(t)?.groups
        }
        const Pe = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/
          , we = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/
          , Ae = /^\(.+?\).*?$/
          , Te = /^error (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/
          , Ie = /^event (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)$/
          , Ee = /^function (?<name>[a-zA-Z0-9_]+)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/
          , Se = /^struct (?<name>[a-zA-Z0-9_]+) \{(?<properties>.*?)\}$/;
        function N(e) {
            return Se.test(e)
        }
        function Ut(e) {
            return R(Se, e)
        }
        const $e = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/
          , jt = /^fallback\(\)$/
          , Zt = /^receive\(\) external payable$/
          , j = new Set(["memory", "indexed", "storage", "calldata"])
          , Yt = new Set(["indexed"])
          , ee = new Set(["calldata", "memory", "storage"])
          , te = new Map([["address", {
            type: "address"
        }], ["bool", {
            type: "bool"
        }], ["bytes", {
            type: "bytes"
        }], ["bytes32", {
            type: "bytes32"
        }], ["int", {
            type: "int256"
        }], ["int256", {
            type: "int256"
        }], ["string", {
            type: "string"
        }], ["uint", {
            type: "uint256"
        }], ["uint8", {
            type: "uint8"
        }], ["uint16", {
            type: "uint16"
        }], ["uint24", {
            type: "uint24"
        }], ["uint32", {
            type: "uint32"
        }], ["uint64", {
            type: "uint64"
        }], ["uint96", {
            type: "uint96"
        }], ["uint112", {
            type: "uint112"
        }], ["uint160", {
            type: "uint160"
        }], ["uint192", {
            type: "uint192"
        }], ["uint256", {
            type: "uint256"
        }], ["address owner", {
            type: "address",
            name: "owner"
        }], ["address to", {
            type: "address",
            name: "to"
        }], ["bool approved", {
            type: "bool",
            name: "approved"
        }], ["bytes _data", {
            type: "bytes",
            name: "_data"
        }], ["bytes data", {
            type: "bytes",
            name: "data"
        }], ["bytes signature", {
            type: "bytes",
            name: "signature"
        }], ["bytes32 hash", {
            type: "bytes32",
            name: "hash"
        }], ["bytes32 r", {
            type: "bytes32",
            name: "r"
        }], ["bytes32 root", {
            type: "bytes32",
            name: "root"
        }], ["bytes32 s", {
            type: "bytes32",
            name: "s"
        }], ["string name", {
            type: "string",
            name: "name"
        }], ["string symbol", {
            type: "string",
            name: "symbol"
        }], ["string tokenURI", {
            type: "string",
            name: "tokenURI"
        }], ["uint tokenId", {
            type: "uint256",
            name: "tokenId"
        }], ["uint8 v", {
            type: "uint8",
            name: "v"
        }], ["uint256 balance", {
            type: "uint256",
            name: "balance"
        }], ["uint256 tokenId", {
            type: "uint256",
            name: "tokenId"
        }], ["uint256 value", {
            type: "uint256",
            name: "value"
        }], ["event:address indexed from", {
            type: "address",
            name: "from",
            indexed: !0
        }], ["event:address indexed to", {
            type: "address",
            name: "to",
            indexed: !0
        }], ["event:uint indexed tokenId", {
            type: "uint256",
            name: "tokenId",
            indexed: !0
        }], ["event:uint256 indexed tokenId", {
            type: "uint256",
            name: "tokenId",
            indexed: !0
        }]]);
        function ne(e, t={}) {
            if (function Nt(e) {
                return Ee.test(e)
            }(e)) {
                const n = function Gt(e) {
                    return R(Ee, e)
                }(e);
                if (!n)
                    throw new B({
                        signature: e,
                        type: "function"
                    });
                const r = P(n.parameters)
                  , i = []
                  , s = r.length;
                for (let u = 0; u < s; u++)
                    i.push(w(r[u], {
                        modifiers: ee,
                        structs: t,
                        type: "function"
                    }));
                const a = [];
                if (n.returns) {
                    const u = P(n.returns)
                      , c = u.length;
                    for (let l = 0; l < c; l++)
                        a.push(w(u[l], {
                            modifiers: ee,
                            structs: t,
                            type: "function"
                        }))
                }
                return {
                    name: n.name,
                    type: "function",
                    stateMutability: n.stateMutability ?? "nonpayable",
                    inputs: i,
                    outputs: a
                }
            }
            if (function Ot(e) {
                return Ie.test(e)
            }(e)) {
                const n = function Bt(e) {
                    return R(Ie, e)
                }(e);
                if (!n)
                    throw new B({
                        signature: e,
                        type: "event"
                    });
                const r = P(n.parameters)
                  , i = []
                  , s = r.length;
                for (let a = 0; a < s; a++)
                    i.push(w(r[a], {
                        modifiers: Yt,
                        structs: t,
                        type: "event"
                    }));
                return {
                    name: n.name,
                    type: "event",
                    inputs: i
                }
            }
            if (function zt(e) {
                return Te.test(e)
            }(e)) {
                const n = function Lt(e) {
                    return R(Te, e)
                }(e);
                if (!n)
                    throw new B({
                        signature: e,
                        type: "error"
                    });
                const r = P(n.parameters)
                  , i = []
                  , s = r.length;
                for (let a = 0; a < s; a++)
                    i.push(w(r[a], {
                        structs: t,
                        type: "error"
                    }));
                return {
                    name: n.name,
                    type: "error",
                    inputs: i
                }
            }
            if (function Dt(e) {
                return $e.test(e)
            }(e)) {
                const n = function Kt(e) {
                    return R($e, e)
                }(e);
                if (!n)
                    throw new B({
                        signature: e,
                        type: "constructor"
                    });
                const r = P(n.parameters)
                  , i = []
                  , s = r.length;
                for (let a = 0; a < s; a++)
                    i.push(w(r[a], {
                        structs: t,
                        type: "constructor"
                    }));
                return {
                    type: "constructor",
                    stateMutability: n.stateMutability ?? "nonpayable",
                    inputs: i
                }
            }
            if (function Ht(e) {
                return jt.test(e)
            }(e))
                return {
                    type: "fallback"
                };
            if (function Jt(e) {
                return Zt.test(e)
            }(e))
                return {
                    type: "receive",
                    stateMutability: "payable"
                };
            throw new Rt({
                signature: e
            })
        }
        const Xt = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/
          , Vt = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z0-9_]+))?$/
          , Qt = /^u?int$/;
        function w(e, t) {
            const n = function Wt(e, t) {
                return t ? `${t}:${e}` : e
            }(e, t?.type);
            if (te.has(n))
                return te.get(n);
            const r = Ae.test(e)
              , i = R(r ? Vt : Xt, e);
            if (!i)
                throw new Tt({
                    param: e
                });
            if (i.name && function qt(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || "tuple" === e || Pe.test(e) || we.test(e) || kt.test(e)
            }(i.name))
                throw new It({
                    param: e,
                    name: i.name
                });
            const s = i.name ? {
                name: i.name
            } : {}
              , a = "indexed" === i.modifier ? {
                indexed: !0
            } : {}
              , u = t?.structs ?? {};
            let c, l = {};
            if (r) {
                c = "tuple";
                const y = P(i.type)
                  , x = []
                  , g = y.length;
                for (let m = 0; m < g; m++)
                    x.push(w(y[m], {
                        structs: u
                    }));
                l = {
                    components: x
                }
            } else if (i.type in u)
                c = "tuple",
                l = {
                    components: u[i.type]
                };
            else if (Qt.test(i.type))
                c = `${i.type}256`;
            else if (c = i.type,
            "struct" !== t?.type && !Re(c))
                throw new Pt({
                    type: c
                });
            if (i.modifier) {
                if (!t?.modifiers?.has?.(i.modifier))
                    throw new Et({
                        param: e,
                        type: t?.type,
                        modifier: i.modifier
                    });
                if (ee.has(i.modifier) && !function _t(e, t) {
                    return t || "bytes" === e || "string" === e || "tuple" === e
                }(c, !!i.array))
                    throw new St({
                        param: e,
                        type: t?.type,
                        modifier: i.modifier
                    })
            }
            const d = {
                type: `${c}${i.array ?? ""}`,
                ...s,
                ...a,
                ...l
            };
            return te.set(n, d),
            d
        }
        function P(e, t=[], n="", r=0) {
            if ("" === e) {
                if ("" === n)
                    return t;
                if (0 !== r)
                    throw new Ct({
                        current: n,
                        depth: r
                    });
                return t.push(n.trim()),
                t
            }
            const i = e.length;
            for (let s = 0; s < i; s++) {
                const a = e[s]
                  , u = e.slice(s + 1);
                switch (a) {
                case ",":
                    return 0 === r ? P(u, [...t, n.trim()]) : P(u, t, `${n}${a}`, r);
                case "(":
                    return P(u, t, `${n}${a}`, r + 1);
                case ")":
                    return P(u, t, `${n}${a}`, r - 1);
                default:
                    return P(u, t, `${n}${a}`, r)
                }
            }
            return []
        }
        function Re(e) {
            return "address" === e || "bool" === e || "function" === e || "string" === e || Pe.test(e) || we.test(e)
        }
        const kt = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
        function H(e) {
            const t = {}
              , n = e.length;
            for (let a = 0; a < n; a++) {
                const u = e[a];
                if (!N(u))
                    continue;
                const c = Ut(u);
                if (!c)
                    throw new B({
                        signature: u,
                        type: "struct"
                    });
                const l = c.properties.split(";")
                  , d = []
                  , y = l.length;
                for (let x = 0; x < y; x++) {
                    const m = l[x].trim();
                    if (!m)
                        continue;
                    const it = w(m, {
                        type: "struct"
                    });
                    d.push(it)
                }
                if (!d.length)
                    throw new Mt({
                        signature: u
                    });
                t[c.name] = d
            }
            const r = {}
              , i = Object.entries(t)
              , s = i.length;
            for (let a = 0; a < s; a++) {
                const [u,c] = i[a];
                r[u] = Me(c, t)
            }
            return r
        }
        const en = /^(?<type>[a-zA-Z0-9_]+?)(?<array>(?:\[\d*?\])+?)?$/;
        function Me(e, t, n=new Set) {
            const r = []
              , i = e.length;
            for (let s = 0; s < i; s++) {
                const a = e[s];
                if (Ae.test(a.type))
                    r.push(a);
                else {
                    const c = R(en, a.type);
                    if (!c?.type)
                        throw new $t({
                            abiParameter: a
                        });
                    const {array: l, type: d} = c;
                    if (d in t) {
                        if (n.has(d))
                            throw new Ft({
                                type: d
                            });
                        r.push({
                            ...a,
                            type: `tuple ${l ?? ""}`,
                            components: Me(t[d] ?? [], t, new Set([...n, d]))
                        })
                    } else {
                        if (!Re(d))
                            throw new bt({
                                type: d
                            });
                        r.push(a)
                    }
                }
            }
            return r
        }
        function tn(e) {
            const t = H(e)
              , n = []
              , r = e.length;
            for (let i = 0; i < r; i++) {
                const s = e[i];
                N(s) || n.push(ne(s, t))
            }
            return n
        }
        function nn(e) {
            let t;
            if ("string" == typeof e)
                t = ne(e);
            else {
                const n = H(e)
                  , r = e.length;
                for (let i = 0; i < r; i++) {
                    const s = e[i];
                    if (!N(s)) {
                        t = ne(s, n);
                        break
                    }
                }
            }
            if (!t)
                throw new xt({
                    signature: e
                });
            return t
        }
        function rn(e) {
            let t;
            if ("string" == typeof e)
                t = w(e, {
                    modifiers: j
                });
            else {
                const n = H(e)
                  , r = e.length;
                for (let i = 0; i < r; i++) {
                    const s = e[i];
                    if (!N(s)) {
                        t = w(s, {
                            modifiers: j,
                            structs: n
                        });
                        break
                    }
                }
            }
            if (!t)
                throw new wt({
                    param: e
                });
            return t
        }
        function sn(e) {
            const t = [];
            if ("string" == typeof e) {
                const n = P(e)
                  , r = n.length;
                for (let i = 0; i < r; i++)
                    t.push(w(n[i], {
                        modifiers: j
                    }))
            } else {
                const n = H(e)
                  , r = e.length;
                for (let i = 0; i < r; i++) {
                    const s = e[i];
                    if (N(s))
                        continue;
                    const a = P(s)
                      , u = a.length;
                    for (let c = 0; c < u; c++)
                        t.push(w(a[c], {
                            modifiers: j,
                            structs: n
                        }))
                }
            }
            if (0 === t.length)
                throw new At({
                    params: e
                });
            return t
        }
        var z = o(62150)
          , M = o(60253)
          , I = o(22204)
          , f = o(65381);
        function an(e, t) {
            if (e.length !== t.length)
                throw new A.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
            const n = [];
            for (let r = 0; r < e.length; r++)
                n.push(Ce(e[r], t[r]));
            return (0,
            T.zo)(n)
        }
        function Ce(e, t, n=!1) {
            if ("address" === e) {
                const a = t;
                if (!(0,
                M.U)(a))
                    throw new z.b({
                        address: a
                    });
                return (0,
                I.vk)(a.toLowerCase(), {
                    size: n ? 32 : null
                })
            }
            if ("string" === e)
                return (0,
                f.$G)(t);
            if ("bytes" === e)
                return t;
            if ("bool" === e)
                return (0,
                I.vk)((0,
                f.C4)(t), {
                    size: n ? 32 : 1
                });
            const r = e.match(F.lh);
            if (r) {
                const [a,u,c="256"] = r
                  , l = parseInt(c) / 8;
                return (0,
                f.eC)(t, {
                    size: n ? 32 : l,
                    signed: "int" === u
                })
            }
            const i = e.match(F.eL);
            if (i) {
                const [a,u] = i;
                if (parseInt(u) !== (t.length - 2) / 2)
                    throw new A.KY({
                        expectedSize: parseInt(u),
                        givenSize: (t.length - 2) / 2
                    });
                return (0,
                I.vk)(t, {
                    dir: "right",
                    size: n ? 32 : null
                })
            }
            const s = e.match(F.Ow);
            if (s && Array.isArray(t)) {
                const [a,u] = s
                  , c = [];
                for (let l = 0; l < t.length; l++)
                    c.push(Ce(u, t[l], !0));
                return (0,
                T.zo)(c)
            }
            throw new A.Mi(e)
        }
        var on = o(42835)
          , cn = o(45751)
          , E = o(5335)
          , G = o(9611);
        function Fe(e) {
            const t = (0,
            G.w)(`0x ${e.substring(4)}`).substring(26);
            return (0,
            E.x)(`0x ${t}`)
        }
        function re(e) {
            return !(!e || "object" != typeof e || !("BYTES_PER_ELEMENT"in e)) && 1 === e.BYTES_PER_ELEMENT && "Uint8Array" === e.constructor.name
        }
        var b = o(12899);
        function U(e, t) {
            const n = t || "hex";
            return function un(e, t="bytes") {
                return "hex" === t ? (0,
                f.ci)(e) : e
            }(Le(ze(e)), n)
        }
        function ze(e) {
            return Array.isArray(e) ? e.map(ze) : "string" == typeof e ? (0,
            b.O0)(e) : e
        }
        function Le(e) {
            if (Array.isArray(e)) {
                const t = (0,
                T.zo)(e.map(Le));
                return new Uint8Array([...Oe(t.length, 192), ...t])
            }
            return 1 === e.length && e[0] < 128 ? e : new Uint8Array([...Oe(e.length, 128), ...e])
        }
        function Oe(e, t) {
            return e < 56 ? [t + e] : [(0,
            b.O0)(e).length + t + 55, ...(0,
            b.O0)(e)]
        }
        function ln(e) {
            return "CREATE2" === e.opcode ? Ne(e) : Be(e)
        }
        function Be(e) {
            const t = (0,
            b.O0)((0,
            E.K)(e.from));
            let n = (0,
            b.O0)(e.nonce);
            return 0 === n[0] && (n = new Uint8Array([])),
            (0,
            E.K)(`0x ${(0,
            G.w)(U([t, n], "bytes")).slice(26)}`)
        }
        function Ne(e) {
            const t = (0,
            b.O0)((0,
            E.K)(e.from))
              , n = (0,
            I.vk)(re(e.salt) ? e.salt : (0,
            b.O0)(e.salt), {
                size: 32
            })
              , r = (0,
            b.O0)((0,
            G.w)(re(e.bytecode) ? e.bytecode : (0,
            b.O0)(e.bytecode)));
            return (0,
            E.K)((0,
            $.tP)((0,
            G.w)((0,
            T.zo)([(0,
            b.O0)("0xff"), t, n, r])), 12))
        }
        var ie = o(20232)
          , Z = o(55533)
          , p = o(9571)
          , Ge = o(40974)
          , L = o(12573)
          , Ue = o(39330)
          , se = o(82374)
          , dn = o(95245)
          , fn = o(96780)
          , De = o(7255)
          , hn = o(4366)
          , C = o(15783)
          , h = o(46210);
        function yn(e, t) {
            const n = "string" == typeof t ? {
                to: t
            } : t
              , r = n.to;
            return "number" === r ? J(e, n) : "bigint" === r ? Ke(e, n) : "boolean" === r ? je(e, n) : "string" === r ? He(e, n) : (0,
            f.ci)(e, n)
        }
        function Ke(e, t={}) {
            typeof t.size < "u" && (0,
            h.Yf)(e, {
                size: t.size
            });
            const n = (0,
            f.ci)(e, t);
            return (0,
            h.y_)(n)
        }
        function je(e, t={}) {
            let n = e;
            if (typeof t.size < "u" && ((0,
            h.Yf)(n, {
                size: t.size
            }),
            n = (0,
            L.f)(n)),
            n.length > 1 || n[0] > 1)
                throw new C.yr(n);
            return Boolean(n[0])
        }
        function J(e, t={}) {
            typeof t.size < "u" && (0,
            h.Yf)(e, {
                size: t.size
            });
            const n = (0,
            f.ci)(e, t);
            return (0,
            h.ly)(n)
        }
        function He(e, t={}) {
            let n = e;
            return typeof t.size < "u" && ((0,
            h.Yf)(n, {
                size: t.size
            }),
            n = (0,
            L.f)(n, {
                dir: "right"
            })),
            (new TextDecoder).decode(n)
        }
        function Y(e, t) {
            const n = function pn(e) {
                if ("string" == typeof e) {
                    if (e.length > 3 && e.length % 2 != 0)
                        throw new C.P9(e);
                    return (0,
                    b.nr)(e)
                }
                return e
            }(e)
              , [r,i] = Je(n);
            if (i < n.length)
                throw new C.e1({
                    consumed: i,
                    length: n.length
                });
            return Ze(r, t)
        }
        function Ze(e, t) {
            return Array.isArray(e) ? e.map(n=>Ze(n, t)) : "hex" === t ? (0,
            f.ci)(e) : e
        }
        function Je(e, t=0) {
            if (0 === e.length)
                return [new Uint8Array([]), 0];
            const n = e[t];
            if (n <= 127)
                return [new Uint8Array([e[t]]), 1];
            if (n <= 183) {
                const c = n - 128
                  , l = t + 1;
                if (l + c > e.length)
                    throw new C.M({
                        length: l + c,
                        dataLength: e.length
                    });
                return [e.slice(l, l + c), 1 + c]
            }
            if (n <= 191) {
                const c = n - 183
                  , l = t + 1
                  , d = J(e.slice(l, l + c));
                if (l + c + d > e.length)
                    throw new C.M({
                        length: c + d,
                        dataLength: e.length - c
                    });
                return [e.slice(l + c, l + c + d), 1 + c + d]
            }
            let r = 0
              , i = n - 192;
            n > 247 && (r = n - 247,
            i = J(e.slice(t + 1, t + 1 + r)));
            let s = t + 1 + r;
            if (s > e.length)
                throw new C.M({
                    length: s,
                    dataLength: e.length
                });
            const a = 1 + r + i
              , u = [];
            for (; s < t + a; ) {
                const c = Je(e, s);
                if (u.push(c[0]),
                s += c[1],
                s > t + a)
                    throw new C.MH({
                        nextOffset: s,
                        offset: t + a
                    })
            }
            return [u, a]
        }
        var Ye = o(83982)
          , mn = o(62036)
          , gn = o(55112)
          , vn = o(67844)
          , xn = o(21223)
          , bn = o(13765)
          , Pn = o(14723);
        function We(e) {
            return (0,
            p.v)(e) && 32 === (0,
            Ge.d)(e)
        }
        var Xe = o(65778)
          , O = o(15861);
        function Ve(e) {
            return ae.apply(this, arguments)
        }
        function ae() {
            return (ae = (0,
            O.Z)(function*({hash: e, signature: t}) {
                const n = (0,
                p.v)(t) ? t : (0,
                f.NC)(t)
                  , r = (0,
                p.v)(e) ? e : (0,
                f.NC)(e);
                let i = (0,
                h.ly)(`0x ${n.slice(130)}`);
                (0 === i || 1 === i) && (i += 27);
                const {secp256k1: s} = yield o.e(4238).then(o.bind(o, 24238));
                return `0x ${s.Signature.fromCompact(n.substring(2, 130)).addRecoveryBit(i - 27).recoverPublicKey(r.substring(2)).toHex(!1)}`
            })).apply(this, arguments)
        }
        function oe(e) {
            return ce.apply(this, arguments)
        }
        function ce() {
            return (ce = (0,
            O.Z)(function*({hash: e, signature: t}) {
                return Fe(yield Ve({
                    hash: e,
                    signature: t
                }))
            })).apply(this, arguments)
        }
        var Qe = o(81613);
        function ke(e) {
            return ue.apply(this, arguments)
        }
        function ue() {
            return (ue = (0,
            O.Z)(function*({message: e, signature: t}) {
                return oe({
                    hash: (0,
                    Qe.r)(e),
                    signature: t
                })
            })).apply(this, arguments)
        }
        function qe(e) {
            return le.apply(this, arguments)
        }
        function le() {
            return (le = (0,
            O.Z)(function*({domain: e, message: t, primaryType: n, signature: r, types: i}) {
                return oe({
                    hash: (0,
                    Xe.J)({
                        domain: e,
                        message: t,
                        primaryType: n,
                        types: i
                    }),
                    signature: r
                })
            })).apply(this, arguments)
        }
        function wn(e) {
            return de.apply(this, arguments)
        }
        function de() {
            return (de = (0,
            O.Z)(function*({address: e, message: t, signature: n}) {
                return (0,
                ie.E)((0,
                E.K)(e), yield ke({
                    message: t,
                    signature: n
                }))
            })).apply(this, arguments)
        }
        function An(e) {
            return fe.apply(this, arguments)
        }
        function fe() {
            return (fe = (0,
            O.Z)(function*({address: e, domain: t, message: n, primaryType: r, signature: i, types: s}) {
                return (0,
                ie.E)((0,
                E.K)(e), yield qe({
                    domain: t,
                    message: n,
                    primaryType: r,
                    signature: i,
                    types: s
                }))
            })).apply(this, arguments)
        }
        var S = o(3766);
        function _e(e) {
            const t = (0,
            $.p5)(e, 0, 1);
            if ("0x02" === t)
                return "eip1559";
            if ("0x01" === t)
                return "eip2930";
            if ("0x" !== t && (0,
            h.ly)(t) >= 192)
                return "legacy";
            throw new S.DU({
                serializedType: t
            })
        }
        function et(e) {
            if (e.type)
                return e.type;
            if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
                return "eip1559";
            if (typeof e.gasPrice < "u")
                return typeof e.accessList < "u" ? "eip2930" : "legacy";
            throw new S.j3({
                transaction: e
            })
        }
        var Tn = o(45962)
          , W = o(8180)
          , he = o(64898)
          , X = o(21331);
        function ye(e) {
            const {chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: i, to: s} = e;
            if (t <= 0)
                throw new he.hJ({
                    chainId: t
                });
            if (s && !(0,
            M.U)(s))
                throw new z.b({
                    address: s
                });
            if (r)
                throw new W.G("`gasPrice` is not a valid EIP-1559 Transaction attribute.");
            if (i && i > 2n ** 256n - 1n)
                throw new X.Hh({
                    maxFeePerGas: i
                });
            if (n && i && n > i)
                throw new X.cs({
                    maxFeePerGas: i,
                    maxPriorityFeePerGas: n
                })
        }
        function pe(e) {
            const {chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: i, to: s} = e;
            if (t <= 0)
                throw new he.hJ({
                    chainId: t
                });
            if (s && !(0,
            M.U)(s))
                throw new z.b({
                    address: s
                });
            if (n || i)
                throw new W.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
            if (r && r > 2n ** 256n - 1n)
                throw new X.Hh({
                    maxFeePerGas: r
                })
        }
        function me(e) {
            const {chainId: t, maxPriorityFeePerGas: n, gasPrice: r, maxFeePerGas: i, to: s, accessList: a} = e;
            if (s && !(0,
            M.U)(s))
                throw new z.b({
                    address: s
                });
            if (typeof t < "u" && t <= 0)
                throw new he.hJ({
                    chainId: t
                });
            if (n || i)
                throw new W.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
            if (r && r > 2n ** 256n - 1n)
                throw new X.Hh({
                    maxFeePerGas: r
                });
            if (a)
                throw new W.G("`accessList` is not a valid Legacy Transaction attribute.")
        }
        function In(e) {
            const t = _e(e);
            return "eip1559" === t ? function En(e) {
                const t = Y(`0x ${e.slice(4)}`, "hex")
                  , [n,r,i,s,a,u,c,l,d,y,x,g] = t;
                if (9 !== t.length && 12 !== t.length)
                    throw new S.XZ({
                        attributes: {
                            chainId: n,
                            nonce: r,
                            maxPriorityFeePerGas: i,
                            maxFeePerGas: s,
                            gas: a,
                            to: u,
                            value: c,
                            data: l,
                            accessList: d,
                            ...t.length > 9 ? {
                                v: y,
                                r: x,
                                s: g
                            } : {}
                        },
                        serializedTransaction: e,
                        type: "eip1559"
                    });
                const m = {
                    chainId: (0,
                    h.ly)(n),
                    type: "eip1559"
                };
                return (0,
                p.v)(u) && "0x" !== u && (m.to = u),
                (0,
                p.v)(a) && "0x" !== a && (m.gas = (0,
                h.y_)(a)),
                (0,
                p.v)(l) && "0x" !== l && (m.data = l),
                (0,
                p.v)(r) && "0x" !== r && (m.nonce = (0,
                h.ly)(r)),
                (0,
                p.v)(c) && "0x" !== c && (m.value = (0,
                h.y_)(c)),
                (0,
                p.v)(s) && "0x" !== s && (m.maxFeePerGas = (0,
                h.y_)(s)),
                (0,
                p.v)(i) && "0x" !== i && (m.maxPriorityFeePerGas = (0,
                h.y_)(i)),
                0 !== d.length && "0x" !== d && (m.accessList = tt(d)),
                ye(m),
                {
                    ...12 === t.length ? nt(t) : void 0,
                    ...m
                }
            }(e) : "eip2930" === t ? function Sn(e) {
                const t = Y(`0x ${e.slice(4)}`, "hex")
                  , [n,r,i,s,a,u,c,l,d,y,x] = t;
                if (8 !== t.length && 11 !== t.length)
                    throw new S.XZ({
                        attributes: {
                            chainId: n,
                            nonce: r,
                            gasPrice: i,
                            gas: s,
                            to: a,
                            value: u,
                            data: c,
                            accessList: l,
                            ...t.length > 8 ? {
                                v: d,
                                r: y,
                                s: x
                            } : {}
                        },
                        serializedTransaction: e,
                        type: "eip2930"
                    });
                const g = {
                    chainId: (0,
                    h.ly)(n),
                    type: "eip2930"
                };
                return (0,
                p.v)(a) && "0x" !== a && (g.to = a),
                (0,
                p.v)(s) && "0x" !== s && (g.gas = (0,
                h.y_)(s)),
                (0,
                p.v)(c) && "0x" !== c && (g.data = c),
                (0,
                p.v)(r) && "0x" !== r && (g.nonce = (0,
                h.ly)(r)),
                (0,
                p.v)(u) && "0x" !== u && (g.value = (0,
                h.y_)(u)),
                (0,
                p.v)(i) && "0x" !== i && (g.gasPrice = (0,
                h.y_)(i)),
                0 !== l.length && "0x" !== l && (g.accessList = tt(l)),
                pe(g),
                {
                    ...11 === t.length ? nt(t) : void 0,
                    ...g
                }
            }(e) : function $n(e) {
                const t = Y(e, "hex")
                  , [n,r,i,s,a,u,c,l,d] = t;
                if (6 !== t.length && 9 !== t.length)
                    throw new S.XZ({
                        attributes: {
                            nonce: n,
                            gasPrice: r,
                            gas: i,
                            to: s,
                            value: a,
                            data: u,
                            ...t.length > 6 ? {
                                v: c,
                                r: l,
                                s: d
                            } : {}
                        },
                        serializedTransaction: e,
                        type: "legacy"
                    });
                const y = {
                    type: "legacy"
                };
                if ((0,
                p.v)(s) && "0x" !== s && (y.to = s),
                (0,
                p.v)(i) && "0x" !== i && (y.gas = (0,
                h.y_)(i)),
                (0,
                p.v)(u) && "0x" !== u && (y.data = u),
                (0,
                p.v)(n) && "0x" !== n && (y.nonce = (0,
                h.ly)(n)),
                (0,
                p.v)(a) && "0x" !== a && (y.value = (0,
                h.y_)(a)),
                (0,
                p.v)(r) && "0x" !== r && (y.gasPrice = (0,
                h.y_)(r)),
                me(y),
                6 === t.length)
                    return y;
                const x = (0,
                p.v)(c) && "0x" !== c ? (0,
                h.y_)(c) : 0n;
                if ("0x" === d && "0x" === l)
                    return x > 0 && (y.chainId = Number(x)),
                    y;
                const g = x
                  , m = Number((g - 35n) / 2n);
                if (m > 0)
                    y.chainId = m;
                else if (27n !== g && 28n !== g)
                    throw new S.vl({
                        v: g
                    });
                return y.v = g,
                y.s = d,
                y.r = l,
                y
            }(e)
        }
        function tt(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const [r,i] = e[n];
                if (!(0,
                M.U)(r))
                    throw new z.b({
                        address: r
                    });
                t.push({
                    address: r,
                    storageKeys: i.map(s=>We(s) ? s : (0,
                    L.f)(s))
                })
            }
            return t
        }
        function nt(e) {
            const t = e.slice(-3)
              , n = "0x" === t[0] || 0n === (0,
            h.y_)(t[0]) ? 27n : 28n;
            return {
                r: (0,
                I.gc)(t[1], {
                    size: 32
                }),
                s: (0,
                I.gc)(t[2], {
                    size: 32
                }),
                v: n,
                yParity: 27n === n ? 0 : 1
            }
        }
        var Rn = o(96946);
        function ge(e) {
            if (!e || 0 === e.length)
                return [];
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const {address: r, storageKeys: i} = e[n];
                for (let s = 0; s < i.length; s++)
                    if (i[s].length - 2 != 64)
                        throw new S.JC({
                            storageKey: i[s]
                        });
                if (!(0,
                M.U)(r))
                    throw new z.b({
                        address: r
                    });
                t.push([r, i])
            }
            return t
        }
        function Mn(e, t) {
            const n = et(e);
            return "eip1559" === n ? function Cn(e, t) {
                const {chainId: n, gas: r, nonce: i, to: s, value: a, maxFeePerGas: u, maxPriorityFeePerGas: c, accessList: l, data: d} = e;
                ye(e);
                const y = ge(l)
                  , x = [(0,
                f.NC)(n), i ? (0,
                f.NC)(i) : "0x", c ? (0,
                f.NC)(c) : "0x", u ? (0,
                f.NC)(u) : "0x", r ? (0,
                f.NC)(r) : "0x", s ?? "0x", a ? (0,
                f.NC)(a) : "0x", d ?? "0x", y];
                return t && x.push(27n === t.v ? "0x" : (0,
                f.NC)(1), (0,
                L.f)(t.r), (0,
                L.f)(t.s)),
                (0,
                T.SM)(["0x02", U(x)])
            }(e, t) : "eip2930" === n ? function Fn(e, t) {
                const {chainId: n, gas: r, data: i, nonce: s, to: a, value: u, accessList: c, gasPrice: l} = e;
                pe(e);
                const d = ge(c)
                  , y = [(0,
                f.NC)(n), s ? (0,
                f.NC)(s) : "0x", l ? (0,
                f.NC)(l) : "0x", r ? (0,
                f.NC)(r) : "0x", a ?? "0x", u ? (0,
                f.NC)(u) : "0x", i ?? "0x", d];
                return t && y.push(27n === t.v ? "0x" : (0,
                f.NC)(1), t.r, t.s),
                (0,
                T.SM)(["0x01", U(y)])
            }(e, t) : function zn(e, t) {
                const {chainId: n=0, gas: r, data: i, nonce: s, to: a, value: u, gasPrice: c} = e;
                me(e);
                let l = [s ? (0,
                f.NC)(s) : "0x", c ? (0,
                f.NC)(c) : "0x", r ? (0,
                f.NC)(r) : "0x", a ?? "0x", u ? (0,
                f.NC)(u) : "0x", i ?? "0x"];
                if (t) {
                    let d = 27n + (27n === t.v ? 0n : 1n);
                    if (n > 0)
                        d = BigInt(2 * n) + BigInt(35n + t.v - 27n);
                    else if (t.v !== d)
                        throw new S.vl({
                            v: t.v
                        });
                    l = [...l, (0,
                    f.NC)(d), t.r, t.s]
                } else
                    n > 0 && (l = [...l, (0,
                    f.NC)(n), "0x", "0x"]);
                return U(l)
            }(e, t)
        }
        var Ln = o(88043)
          , On = o(73344)
          , Bn = o(63893)
          , rt = o(41395)
          , Nn = o(53472);
        function Gn(e, t="wei") {
            return (0,
            rt.v)(e, Nn.ez[t])
        }
        var Un = o(65169)
    }
}]);
