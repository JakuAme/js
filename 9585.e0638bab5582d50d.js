"use strict";
(self.webpackChunkdextools = self.webpackChunkdextools || []).push([[9585], {
    69585: (eo,re,b)=>{
        b.d(re, {
            UC: ()=>q,
            dX: ()=>K,
            hq: ()=>C,
            ii: ()=>Q,
            nE: ()=>Vt,
            tk: ()=>V,
            vq: ()=>U,
            xD: ()=>Ut
        });
        var t = b(94650)
          , p = b(36895)
          , ae = b(77579)
          , v = b(54968)
          , le = b(61135)
          , F = b(82722)
          , ce = b(97582);
        const B = ["*"]
          , de = ["cellTemplate"];
        function ue(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "label", 4)(1, "input", 5),
                t.NdJ("click", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onCheckboxChange(i))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("checked", e.isSelected)
            }
        }
        function he(n, r) {
            1 & n && t._UZ(0, "i", 11)
        }
        function pe(n, r) {
            1 & n && t._UZ(0, "i", 12)
        }
        function ge(n, r) {
            1 & n && t._UZ(0, "i", 13)
        }
        function fe(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "button", 7),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.onTreeAction())
                }),
                t.TgZ(1, "span"),
                t.YNc(2, he, 1, 0, "i", 8),
                t.YNc(3, pe, 1, 0, "i", 9),
                t.YNc(4, ge, 1, 0, "i", 10),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw(2);
                t.Q6J("disabled", "disabled" === e.treeStatus),
                t.xp6(2),
                t.Q6J("ngIf", "loading" === e.treeStatus),
                t.xp6(1),
                t.Q6J("ngIf", "collapsed" === e.treeStatus),
                t.xp6(1),
                t.Q6J("ngIf", "expanded" === e.treeStatus || "disabled" === e.treeStatus)
            }
        }
        function me(n, r) {}
        const we = function(n) {
            return {
                cellContext: n
            }
        };
        function _e(n, r) {
            if (1 & n && t.YNc(0, me, 0, 0, "ng-template", 14),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngTemplateOutlet", e.column.treeToggleTemplate)("ngTemplateOutletContext", t.VKq(2, we, e.cellContext))
            }
        }
        function be(n, r) {
            if (1 & n && (t.ynx(0),
            t.YNc(1, fe, 5, 4, "button", 6),
            t.YNc(2, _e, 1, 4, null, 2),
            t.BQk()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", !e.column.treeToggleTemplate),
                t.xp6(1),
                t.Q6J("ngIf", e.column.treeToggleTemplate)
            }
        }
        function ye(n, r) {
            if (1 & n && t._UZ(0, "span", 15),
            2 & n) {
                const e = t.oxw();
                t.Q6J("title", e.sanitizedValue)("innerHTML", e.value, t.oJD)
            }
        }
        function Ce(n, r) {}
        function xe(n, r) {
            if (1 & n && t.YNc(0, Ce, 0, 0, "ng-template", 14, 16, t.W1O),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngTemplateOutlet", e.column.cellTemplate)("ngTemplateOutletContext", e.cellContext)
            }
        }
        function Te(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-body-cell", 3),
                t.NdJ("activate", function(i) {
                    const a = t.CHM(e).index
                      , l = t.oxw(2);
                    return t.KtG(l.onActivate(i, a))
                })("treeAction", function() {
                    t.CHM(e);
                    const i = t.oxw(2);
                    return t.KtG(i.onTreeAction())
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = r.$implicit
                  , o = t.oxw(2);
                t.Q6J("row", o.row)("group", o.group)("expanded", o.expanded)("isSelected", o.isSelected)("rowIndex", o.rowIndex)("column", e)("rowHeight", o.rowHeight)("displayCheck", o.displayCheck)("treeStatus", o.treeStatus)
            }
        }
        function ve(n, r) {
            if (1 & n && (t.TgZ(0, "div", 1),
            t.YNc(1, Te, 1, 9, "datatable-body-cell", 2),
            t.qZA()),
            2 & n) {
                const e = r.$implicit
                  , o = t.oxw();
                t.Gre("datatable-row-", e.type, " datatable-row-group"),
                t.Q6J("ngStyle", o._groupStyles[e.type]),
                t.xp6(1),
                t.Q6J("ngForOf", e.columns)("ngForTrackBy", o.columnTrackingFn)
            }
        }
        function De(n, r) {
            if (1 & n && t._UZ(0, "datatable-body-row", 1),
            2 & n) {
                const e = t.oxw();
                t.Q6J("innerWidth", e.innerWidth)("offsetX", e.offsetX)("columns", e._internalColumns)("rowHeight", e.rowHeight)("row", e.summaryRow)("rowIndex", -1)
            }
        }
        function He(n, r) {}
        function Re(n, r) {
            if (1 & n && t.YNc(0, He, 0, 0, "ng-template", 4),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngTemplateOutlet", e.groupHeader.template)("ngTemplateOutletContext", e.groupContext)
            }
        }
        function Se(n, r) {
            if (1 & n && (t.TgZ(0, "div", 3),
            t.YNc(1, Re, 1, 2, null, 1),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngStyle", e.getGroupHeaderStyle()),
                t.xp6(1),
                t.Q6J("ngIf", e.groupHeader && e.groupHeader.template)
            }
        }
        function Ie(n, r) {
            1 & n && t.Hsn(0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"])
        }
        function ke(n, r) {}
        function Me(n, r) {
            if (1 & n && t.YNc(0, ke, 0, 0, "ng-template", 4),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngTemplateOutlet", e.rowDetail.template)("ngTemplateOutletContext", e.rowContext)
            }
        }
        function Pe(n, r) {
            if (1 & n && (t.TgZ(0, "div", 5),
            t.YNc(1, Me, 1, 2, null, 1),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.Udp("height", e.detailRowHeight, "px"),
                t.xp6(1),
                t.Q6J("ngIf", e.rowDetail && e.rowDetail.template)
            }
        }
        function Fe(n, r) {
            1 & n && t._UZ(0, "datatable-progress")
        }
        function Be(n, r) {
            if (1 & n && t._UZ(0, "datatable-summary-row", 9),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("rowHeight", e.summaryHeight)("offsetX", e.offsetX)("innerWidth", e.innerWidth)("rows", e.rows)("columns", e.columns)
            }
        }
        function Ae(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-body-row", 13),
                t.NdJ("treeAction", function() {
                    t.CHM(e);
                    const i = t.oxw().$implicit
                      , s = t.oxw(2);
                    return t.KtG(s.onTreeAction(i))
                })("activate", function(i) {
                    t.CHM(e);
                    const s = t.oxw().index
                      , a = t.oxw(2)
                      , l = t.MAs(2);
                    return t.KtG(l.onActivate(i, a.indexes.first + s))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw(2)
                  , i = t.MAs(2);
                t.Q6J("isSelected", i.getRowSelected(e))("innerWidth", o.innerWidth)("offsetX", o.offsetX)("columns", o.columns)("rowHeight", o.getRowHeight(e))("row", e)("rowIndex", o.getRowIndex(e))("expanded", o.getRowExpanded(e))("rowClass", o.rowClass)("displayCheck", o.displayCheck)("treeStatus", e && e.treeStatus)
            }
        }
        function ze(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-body-row", 15),
                t.NdJ("activate", function(i) {
                    const a = t.CHM(e).index;
                    t.oxw(4);
                    const l = t.MAs(2);
                    return t.KtG(l.onActivate(i, a))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = r.$implicit
                  , o = t.oxw(2).$implicit
                  , i = t.oxw(2)
                  , s = t.MAs(2);
                t.Q6J("isSelected", s.getRowSelected(e))("innerWidth", i.innerWidth)("offsetX", i.offsetX)("columns", i.columns)("rowHeight", i.getRowHeight(e))("row", e)("group", o.value)("rowIndex", i.getRowIndex(e))("expanded", i.getRowExpanded(e))("rowClass", i.rowClass)
            }
        }
        function Ee(n, r) {
            if (1 & n && t.YNc(0, ze, 1, 10, "datatable-body-row", 14),
            2 & n) {
                const e = t.oxw().$implicit
                  , o = t.oxw(2);
                t.Q6J("ngForOf", e.value)("ngForTrackBy", o.rowTrackingFn)
            }
        }
        function We(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-row-wrapper", 10),
                t.NdJ("rowContextmenu", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.rowContextmenu.emit(i))
                }),
                t.YNc(1, Ae, 1, 11, "datatable-body-row", 11),
                t.YNc(2, Ee, 1, 2, "ng-template", null, 12, t.W1O),
                t.qZA()
            }
            if (2 & n) {
                const e = r.$implicit
                  , o = r.index
                  , i = t.MAs(3)
                  , s = t.oxw(2);
                t.Q6J("groupedRows", s.groupedRows)("innerWidth", s.innerWidth)("ngStyle", s.getRowsStyles(e))("rowDetail", s.rowDetail)("groupHeader", s.groupHeader)("offsetX", s.offsetX)("detailRowHeight", s.getDetailRowHeight(e && e[o], o))("row", e)("expanded", s.getRowExpanded(e))("rowIndex", s.getRowIndex(e && e[o])),
                t.xp6(1),
                t.Q6J("ngIf", !s.groupedRows)("ngIfElse", i)
            }
        }
        function Ge(n, r) {
            if (1 & n && t._UZ(0, "datatable-summary-row", 16),
            2 & n) {
                const e = t.oxw(2);
                t.Q6J("ngStyle", e.getBottomSummaryRowStyles())("rowHeight", e.summaryHeight)("offsetX", e.offsetX)("innerWidth", e.innerWidth)("rows", e.rows)("columns", e.columns)
            }
        }
        function Oe(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-scroller", 5),
                t.NdJ("scroll", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onBodyScroll(i))
                }),
                t.YNc(1, Be, 1, 5, "datatable-summary-row", 6),
                t.YNc(2, We, 4, 12, "datatable-row-wrapper", 7),
                t.YNc(3, Ge, 1, 6, "datatable-summary-row", 8),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("scrollbarV", e.scrollbarV)("scrollbarH", e.scrollbarH)("scrollHeight", e.scrollHeight)("scrollWidth", null == e.columnGroupWidths ? null : e.columnGroupWidths.total),
                t.xp6(1),
                t.Q6J("ngIf", e.summaryRow && "top" === e.summaryPosition),
                t.xp6(1),
                t.Q6J("ngForOf", e.temp)("ngForTrackBy", e.rowTrackingFn),
                t.xp6(1),
                t.Q6J("ngIf", e.summaryRow && "bottom" === e.summaryPosition)
            }
        }
        function Ne(n, r) {
            if (1 & n && t._UZ(0, "div", 17),
            2 & n) {
                const e = t.oxw();
                t.Q6J("innerHTML", e.emptyMessage, t.oJD)
            }
        }
        function Ye(n, r) {}
        function Xe(n, r) {
            if (1 & n && t.YNc(0, Ye, 0, 0, "ng-template", 5),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngTemplateOutlet", e.targetMarkerTemplate)("ngTemplateOutletContext", e.targetMarkerContext)
            }
        }
        function Qe(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "label", 6)(1, "input", 7),
                t.NdJ("change", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.select.emit(!i.allRowsSelected))
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("checked", e.allRowsSelected)
            }
        }
        function Je(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "span", 8)(1, "span", 9),
                t.NdJ("click", function() {
                    t.CHM(e);
                    const i = t.oxw();
                    return t.KtG(i.onSort())
                }),
                t.qZA()()
            }
            if (2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("innerHTML", e.name, t.oJD)
            }
        }
        function Le(n, r) {}
        function Ze(n, r) {
            if (1 & n && t.YNc(0, Le, 0, 0, "ng-template", 5),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngTemplateOutlet", e.column.headerTemplate)("ngTemplateOutletContext", e.cellContext)
            }
        }
        function $e(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-header-cell", 4),
                t.NdJ("resize", function(i) {
                    const a = t.CHM(e).$implicit
                      , l = t.oxw(2);
                    return t.KtG(l.onColumnResized(i, a))
                })("longPressStart", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.onLongPressStart(i))
                })("longPressEnd", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.onLongPressEnd(i))
                })("sort", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.onSort(i))
                })("select", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.select.emit(i))
                })("columnContextmenu", function(i) {
                    t.CHM(e);
                    const s = t.oxw(2);
                    return t.KtG(s.columnContextmenu.emit(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = r.$implicit
                  , o = t.oxw(2);
                t.Q6J("resizeEnabled", e.resizeable)("pressModel", e)("pressEnabled", o.reorderable && e.draggable)("dragX", o.reorderable && e.draggable && e.dragging)("dragY", !1)("dragModel", e)("dragEventTarget", o.dragEventTarget)("headerHeight", o.headerHeight)("isTarget", e.isTarget)("targetMarkerTemplate", o.targetMarkerTemplate)("targetMarkerContext", e.targetMarkerContext)("column", e)("sortType", o.sortType)("sorts", o.sorts)("selectionType", o.selectionType)("sortAscendingIcon", o.sortAscendingIcon)("sortDescendingIcon", o.sortDescendingIcon)("sortUnsetIcon", o.sortUnsetIcon)("allRowsSelected", o.allRowsSelected)
            }
        }
        function Ve(n, r) {
            if (1 & n && (t.TgZ(0, "div", 2),
            t.YNc(1, $e, 1, 19, "datatable-header-cell", 3),
            t.qZA()),
            2 & n) {
                const e = r.$implicit
                  , o = t.oxw();
                t.Tol("datatable-row-" + e.type),
                t.Q6J("ngStyle", o._styleByGroup[e.type]),
                t.xp6(1),
                t.Q6J("ngForOf", e.columns)("ngForTrackBy", o.columnTrackingFn)
            }
        }
        function Ue(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "li", 6)(1, "a", 7),
                t.NdJ("click", function() {
                    const s = t.CHM(e).$implicit
                      , a = t.oxw();
                    return t.KtG(a.selectPage(s.number))
                }),
                t._uU(2),
                t.qZA()()
            }
            if (2 & n) {
                const e = r.$implicit
                  , o = t.oxw();
                t.ekj("active", e.number === o.page),
                t.uIk("aria-label", "page " + e.number),
                t.xp6(2),
                t.hij(" ", e.text, " ")
            }
        }
        function qe(n, r) {}
        const Ke = function(n, r, e, o, i) {
            return {
                rowCount: n,
                pageSize: r,
                selectedCount: e,
                curPage: o,
                offset: i
            }
        };
        function je(n, r) {
            if (1 & n && t.YNc(0, qe, 0, 0, "ng-template", 4),
            2 & n) {
                const e = t.oxw();
                t.Q6J("ngTemplateOutlet", e.footerTemplate.template)("ngTemplateOutletContext", t.qbA(2, Ke, e.rowCount, e.pageSize, e.selectedCount, e.curPage, e.offset))
            }
        }
        function et(n, r) {
            if (1 & n && (t.TgZ(0, "span"),
            t._uU(1),
            t.qZA()),
            2 & n) {
                const e = t.oxw(2);
                t.xp6(1),
                t.AsE(" ", null == e.selectedCount ? null : e.selectedCount.toLocaleString(), " ", e.selectedMessage, " / ")
            }
        }
        function tt(n, r) {
            if (1 & n && (t.TgZ(0, "div", 5),
            t.YNc(1, et, 2, 2, "span", 1),
            t._uU(2),
            t.qZA()),
            2 & n) {
                const e = t.oxw();
                t.xp6(1),
                t.Q6J("ngIf", e.selectedMessage),
                t.xp6(1),
                t.AsE(" ", null == e.rowCount ? null : e.rowCount.toLocaleString(), " ", e.totalMessage, " ")
            }
        }
        function ot(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-pager", 6),
                t.NdJ("change", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.page.emit(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("pagerLeftArrowIcon", e.pagerLeftArrowIcon)("pagerRightArrowIcon", e.pagerRightArrowIcon)("pagerPreviousIcon", e.pagerPreviousIcon)("pagerNextIcon", e.pagerNextIcon)("page", e.curPage)("size", e.pageSize)("count", e.rowCount)("hidden", !e.isVisible)
            }
        }
        const nt = function(n) {
            return {
                "selected-count": n
            }
        };
        function it(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-header", 4),
                t.NdJ("sort", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onColumnSort(i))
                })("resize", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onColumnResize(i))
                })("reorder", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onColumnReorder(i))
                })("select", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onHeaderSelect(i))
                })("columnContextmenu", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onColumnContextmenu(i))
                }),
                t.ALo(1, "async"),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("sorts", e.sorts)("sortType", e.sortType)("scrollbarH", e.scrollbarH)("innerWidth", e._innerWidth)("offsetX", t.lcZ(1, 15, e._offsetX))("dealsWithGroup", void 0 !== e.groupedRows)("columns", e._internalColumns)("headerHeight", e.headerHeight)("reorderable", e.reorderable)("targetMarkerTemplate", e.targetMarkerTemplate)("sortAscendingIcon", e.cssClasses.sortAscending)("sortDescendingIcon", e.cssClasses.sortDescending)("sortUnsetIcon", e.cssClasses.sortUnset)("allRowsSelected", e.allRowsSelected)("selectionType", e.selectionType)
            }
        }
        function st(n, r) {
            if (1 & n) {
                const e = t.EpF();
                t.TgZ(0, "datatable-footer", 5),
                t.NdJ("page", function(i) {
                    t.CHM(e);
                    const s = t.oxw();
                    return t.KtG(s.onFooterPage(i))
                }),
                t.qZA()
            }
            if (2 & n) {
                const e = t.oxw();
                t.Q6J("rowCount", e.rowCount)("pageSize", e.pageSize)("offset", e.offset)("footerHeight", e.footerHeight)("footerTemplate", e.footer)("totalMessage", e.messages.totalMessage)("pagerLeftArrowIcon", e.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", e.cssClasses.pagerRightArrow)("pagerPreviousIcon", e.cssClasses.pagerPrevious)("selectedCount", e.selected.length)("selectedMessage", !!e.selectionType && e.messages.selectedMessage)("pagerNextIcon", e.cssClasses.pagerNext)
            }
        }
        let A = (()=>{
            class n {
                constructor(e) {
                    this.document = e,
                    this.width = this.getWidth()
                }
                getWidth() {
                    const e = this.document.createElement("div");
                    e.style.visibility = "hidden",
                    e.style.width = "100px",
                    e.style.msOverflowStyle = "scrollbar",
                    this.document.body.appendChild(e);
                    const o = e.offsetWidth;
                    e.style.overflow = "scroll";
                    const i = this.document.createElement("div");
                    i.style.width = "100%",
                    e.appendChild(i);
                    const s = i.offsetWidth;
                    return e.parentNode.removeChild(e),
                    o - s
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.LFG(p.K0))
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , X = (()=>{
            class n {
                getDimensions(e) {
                    return e.getBoundingClientRect()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , z = (()=>{
            class n {
                constructor() {
                    this.columnInputChanges = new ae.x
                }
                get columnInputChanges$() {
                    return this.columnInputChanges.asObservable()
                }
                onInputChange() {
                    this.columnInputChanges.next()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275prov = t.Yz7({
                token: n,
                factory: n.\u0275fac
            }),
            n
        }
        )()
          , Q = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-footer-template", ""]]
            }),
            n
        }
        )()
          , rt = (()=>{
            class n {
                constructor(e, o) {
                    this.element = e,
                    this.zone = o,
                    this.isVisible = !1,
                    this.visible = new t.vpe
                }
                ngOnInit() {
                    this.runCheck()
                }
                ngOnDestroy() {
                    clearTimeout(this.timeout)
                }
                onVisibilityChange() {
                    this.zone.run(()=>{
                        this.isVisible = !0,
                        this.visible.emit(!0)
                    }
                    )
                }
                runCheck() {
                    const e = ()=>{
                        const {offsetHeight: o, offsetWidth: i} = this.element.nativeElement;
                        o && i ? (clearTimeout(this.timeout),
                        this.onVisibilityChange()) : (clearTimeout(this.timeout),
                        this.zone.runOutsideAngular(()=>{
                            this.timeout = setTimeout(()=>e(), 50)
                        }
                        ))
                    }
                    ;
                    this.timeout = setTimeout(()=>e())
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.SBq),t.Y36(t.R0b))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "visibilityObserver", ""]],
                hostVars: 2,
                hostBindings: function(e, o) {
                    2 & e && t.ekj("visible", o.isVisible)
                },
                outputs: {
                    visible: "visible"
                }
            }),
            n
        }
        )()
          , J = (()=>{
            class n {
                constructor(e) {
                    this.dragX = !0,
                    this.dragY = !0,
                    this.dragStart = new t.vpe,
                    this.dragging = new t.vpe,
                    this.dragEnd = new t.vpe,
                    this.isDragging = !1,
                    this.element = e.nativeElement
                }
                ngOnChanges(e) {
                    e.dragEventTarget && e.dragEventTarget.currentValue && this.dragModel.dragging && this.onMousedown(e.dragEventTarget.currentValue)
                }
                ngOnDestroy() {
                    this._destroySubscription()
                }
                onMouseup(e) {
                    this.isDragging && (this.isDragging = !1,
                    this.element.classList.remove("dragging"),
                    this.subscription && (this._destroySubscription(),
                    this.dragEnd.emit({
                        event: e,
                        element: this.element,
                        model: this.dragModel
                    })))
                }
                onMousedown(e) {
                    if (e.target.classList.contains("draggable") && (this.dragX || this.dragY)) {
                        e.preventDefault(),
                        this.isDragging = !0;
                        const i = {
                            x: e.clientX,
                            y: e.clientY
                        }
                          , s = (0,
                        v.R)(document, "mouseup");
                        this.subscription = s.subscribe(l=>this.onMouseup(l));
                        const a = (0,
                        v.R)(document, "mousemove").pipe((0,
                        F.R)(s)).subscribe(l=>this.move(l, i));
                        this.subscription.add(a),
                        this.dragStart.emit({
                            event: e,
                            element: this.element,
                            model: this.dragModel
                        })
                    }
                }
                move(e, o) {
                    if (!this.isDragging)
                        return;
                    const s = e.clientY - o.y;
                    this.dragX && (this.element.style.left = e.clientX - o.x + "px"),
                    this.dragY && (this.element.style.top = `${s}px`),
                    this.element.classList.add("dragging"),
                    this.dragging.emit({
                        event: e,
                        element: this.element,
                        model: this.dragModel
                    })
                }
                _destroySubscription() {
                    this.subscription && (this.subscription.unsubscribe(),
                    this.subscription = void 0)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.SBq))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "draggable", ""]],
                inputs: {
                    dragEventTarget: "dragEventTarget",
                    dragModel: "dragModel",
                    dragX: "dragX",
                    dragY: "dragY"
                },
                outputs: {
                    dragStart: "dragStart",
                    dragging: "dragging",
                    dragEnd: "dragEnd"
                },
                features: [t.TTD]
            }),
            n
        }
        )()
          , at = (()=>{
            class n {
                constructor(e, o) {
                    this.renderer = o,
                    this.resizeEnabled = !0,
                    this.resize = new t.vpe,
                    this.resizing = !1,
                    this.element = e.nativeElement
                }
                ngAfterViewInit() {
                    const e = this.renderer;
                    this.resizeHandle = e.createElement("span"),
                    e.addClass(this.resizeHandle, this.resizeEnabled ? "resize-handle" : "resize-handle--not-resizable"),
                    e.appendChild(this.element, this.resizeHandle)
                }
                ngOnDestroy() {
                    this._destroySubscription(),
                    this.renderer.destroyNode ? this.renderer.destroyNode(this.resizeHandle) : this.resizeHandle && this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle)
                }
                onMouseup() {
                    this.resizing = !1,
                    this.subscription && !this.subscription.closed && (this._destroySubscription(),
                    this.resize.emit(this.element.clientWidth))
                }
                onMousedown(e) {
                    const o = e.target.classList.contains("resize-handle")
                      , i = this.element.clientWidth
                      , s = e.screenX;
                    if (o) {
                        e.stopPropagation(),
                        this.resizing = !0;
                        const a = (0,
                        v.R)(document, "mouseup");
                        this.subscription = a.subscribe(c=>this.onMouseup());
                        const l = (0,
                        v.R)(document, "mousemove").pipe((0,
                        F.R)(a)).subscribe(c=>this.move(c, i, s));
                        this.subscription.add(l)
                    }
                }
                move(e, o, i) {
                    const a = o + (e.screenX - i);
                    (!this.minWidth || a >= this.minWidth) && (!this.maxWidth || a <= this.maxWidth) && (this.element.style.width = `${a}px`)
                }
                _destroySubscription() {
                    this.subscription && (this.subscription.unsubscribe(),
                    this.subscription = void 0)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.SBq),t.Y36(t.Qsj))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "resizeable", ""]],
                hostVars: 2,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("mousedown", function(s) {
                        return o.onMousedown(s)
                    }),
                    2 & e && t.ekj("resizeable", o.resizeEnabled)
                },
                inputs: {
                    resizeEnabled: "resizeEnabled",
                    minWidth: "minWidth",
                    maxWidth: "maxWidth"
                },
                outputs: {
                    resize: "resize"
                }
            }),
            n
        }
        )()
          , lt = (()=>{
            class n {
                constructor(e, o) {
                    this.document = o,
                    this.reorder = new t.vpe,
                    this.targetChanged = new t.vpe,
                    this.differ = e.find({}).create()
                }
                ngAfterContentInit() {
                    this.updateSubscriptions(),
                    this.draggables.changes.subscribe(this.updateSubscriptions.bind(this))
                }
                ngOnDestroy() {
                    this.draggables.forEach(e=>{
                        e.dragStart.unsubscribe(),
                        e.dragging.unsubscribe(),
                        e.dragEnd.unsubscribe()
                    }
                    )
                }
                updateSubscriptions() {
                    const e = this.differ.diff(this.createMapDiffs());
                    if (e) {
                        const o = ({currentValue: s, previousValue: a})=>{
                            i({
                                previousValue: a
                            }),
                            s && (s.dragStart.subscribe(this.onDragStart.bind(this)),
                            s.dragging.subscribe(this.onDragging.bind(this)),
                            s.dragEnd.subscribe(this.onDragEnd.bind(this)))
                        }
                          , i = ({previousValue: s})=>{
                            s && (s.dragStart.unsubscribe(),
                            s.dragging.unsubscribe(),
                            s.dragEnd.unsubscribe())
                        }
                        ;
                        e.forEachAddedItem(o),
                        e.forEachRemovedItem(i)
                    }
                }
                onDragStart() {
                    this.positions = {};
                    let e = 0;
                    for (const o of this.draggables.toArray()) {
                        const i = o.element
                          , s = parseInt(i.offsetLeft.toString(), 0);
                        this.positions[o.dragModel.prop] = {
                            left: s,
                            right: s + parseInt(i.offsetWidth.toString(), 0),
                            index: e++,
                            element: i
                        }
                    }
                }
                onDragging({model: o, event: i}) {
                    const s = this.positions[o.prop]
                      , a = this.isTarget(o, i);
                    a ? this.lastDraggingIndex !== a.i && (this.targetChanged.emit({
                        prevIndex: this.lastDraggingIndex,
                        newIndex: a.i,
                        initialIndex: s.index
                    }),
                    this.lastDraggingIndex = a.i) : this.lastDraggingIndex !== s.index && (this.targetChanged.emit({
                        prevIndex: this.lastDraggingIndex,
                        initialIndex: s.index
                    }),
                    this.lastDraggingIndex = s.index)
                }
                onDragEnd({element: e, model: o, event: i}) {
                    const s = this.positions[o.prop]
                      , a = this.isTarget(o, i);
                    a && this.reorder.emit({
                        prevIndex: s.index,
                        newIndex: a.i,
                        model: o
                    }),
                    this.lastDraggingIndex = void 0,
                    e.style.left = "auto"
                }
                isTarget(e, o) {
                    let i = 0;
                    const l = this.document.elementsFromPoint(o.x || o.clientX, o.y || o.clientY);
                    for (const c in this.positions) {
                        const d = this.positions[c];
                        if (e.prop !== c && l.find(h=>h === d.element))
                            return {
                                pos: d,
                                i
                            };
                        i++
                    }
                }
                createMapDiffs() {
                    return this.draggables.toArray().reduce((e,o)=>(e[o.dragModel.$$id] = o,
                    e), {})
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.aQg),t.Y36(p.K0))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "orderable", ""]],
                contentQueries: function(e, o, i) {
                    if (1 & e && t.Suo(i, J, 5),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o.draggables = s)
                    }
                },
                outputs: {
                    reorder: "reorder",
                    targetChanged: "targetChanged"
                }
            }),
            n
        }
        )()
          , ct = (()=>{
            class n {
                constructor() {
                    this.pressEnabled = !0,
                    this.duration = 500,
                    this.longPressStart = new t.vpe,
                    this.longPressing = new t.vpe,
                    this.longPressEnd = new t.vpe,
                    this.mouseX = 0,
                    this.mouseY = 0
                }
                get press() {
                    return this.pressing
                }
                get isLongPress() {
                    return this.isLongPressing
                }
                onMouseDown(e) {
                    if (1 !== e.which || !this.pressEnabled || e.target.classList.contains("resize-handle"))
                        return;
                    this.mouseX = e.clientX,
                    this.mouseY = e.clientY,
                    this.pressing = !0,
                    this.isLongPressing = !1;
                    const i = (0,
                    v.R)(document, "mouseup");
                    this.subscription = i.subscribe(s=>this.onMouseup()),
                    this.timeout = setTimeout(()=>{
                        this.isLongPressing = !0,
                        this.longPressStart.emit({
                            event: e,
                            model: this.pressModel
                        }),
                        this.subscription.add((0,
                        v.R)(document, "mousemove").pipe((0,
                        F.R)(i)).subscribe(s=>this.onMouseMove(s))),
                        this.loop(e)
                    }
                    , this.duration),
                    this.loop(e)
                }
                onMouseMove(e) {
                    if (this.pressing && !this.isLongPressing) {
                        const o = Math.abs(e.clientX - this.mouseX) > 10
                          , i = Math.abs(e.clientY - this.mouseY) > 10;
                        (o || i) && this.endPress()
                    }
                }
                loop(e) {
                    this.isLongPressing && (this.timeout = setTimeout(()=>{
                        this.longPressing.emit({
                            event: e,
                            model: this.pressModel
                        }),
                        this.loop(e)
                    }
                    , 50))
                }
                endPress() {
                    clearTimeout(this.timeout),
                    this.isLongPressing = !1,
                    this.pressing = !1,
                    this._destroySubscription(),
                    this.longPressEnd.emit({
                        model: this.pressModel
                    })
                }
                onMouseup() {
                    this.endPress()
                }
                ngOnDestroy() {
                    this._destroySubscription()
                }
                _destroySubscription() {
                    this.subscription && (this.subscription.unsubscribe(),
                    this.subscription = void 0)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "long-press", ""]],
                hostVars: 4,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("mousedown", function(s) {
                        return o.onMouseDown(s)
                    }),
                    2 & e && t.ekj("press", o.press)("longpress", o.isLongPress)
                },
                inputs: {
                    pressEnabled: "pressEnabled",
                    pressModel: "pressModel",
                    duration: "duration"
                },
                outputs: {
                    longPressStart: "longPressStart",
                    longPressing: "longPressing",
                    longPressEnd: "longPressEnd"
                }
            }),
            n
        }
        )()
          , L = (()=>{
            class n {
                constructor(e, o, i) {
                    this.ngZone = e,
                    this.renderer = i,
                    this.scrollbarV = !1,
                    this.scrollbarH = !1,
                    this.scroll = new t.vpe,
                    this.scrollYPos = 0,
                    this.scrollXPos = 0,
                    this.prevScrollYPos = 0,
                    this.prevScrollXPos = 0,
                    this._scrollEventListener = null,
                    this.element = o.nativeElement
                }
                ngOnInit() {
                    if (this.scrollbarV || this.scrollbarH) {
                        const e = this.renderer;
                        this.parentElement = e.parentNode(e.parentNode(this.element)),
                        this._scrollEventListener = this.onScrolled.bind(this),
                        this.parentElement.addEventListener("scroll", this._scrollEventListener)
                    }
                }
                ngOnDestroy() {
                    this._scrollEventListener && (this.parentElement.removeEventListener("scroll", this._scrollEventListener),
                    this._scrollEventListener = null)
                }
                setOffset(e) {
                    this.parentElement && (this.parentElement.scrollTop = e)
                }
                onScrolled(e) {
                    const o = e.currentTarget;
                    requestAnimationFrame(()=>{
                        this.scrollYPos = o.scrollTop,
                        this.scrollXPos = o.scrollLeft,
                        this.updateOffset()
                    }
                    )
                }
                updateOffset() {
                    let e;
                    this.scrollYPos < this.prevScrollYPos ? e = "down" : this.scrollYPos > this.prevScrollYPos && (e = "up"),
                    this.scroll.emit({
                        direction: e,
                        scrollYPos: this.scrollYPos,
                        scrollXPos: this.scrollXPos
                    }),
                    this.prevScrollYPos = this.scrollYPos,
                    this.prevScrollXPos = this.scrollXPos
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.Qsj))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-scroller"]],
                hostAttrs: [1, "datatable-scroll"],
                hostVars: 4,
                hostBindings: function(e, o) {
                    2 & e && t.Udp("height", o.scrollHeight, "px")("width", o.scrollWidth, "px")
                },
                inputs: {
                    scrollbarV: "scrollbarV",
                    scrollbarH: "scrollbarH",
                    scrollHeight: "scrollHeight",
                    scrollWidth: "scrollWidth"
                },
                outputs: {
                    scroll: "scroll"
                },
                ngContentSelectors: B,
                decls: 1,
                vars: 0,
                template: function(e, o) {
                    1 & e && (t.F$t(),
                    t.Hsn(0))
                },
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , dt = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-group-header-template", ""]]
            }),
            n
        }
        )()
          , ut = (()=>{
            class n {
                constructor() {
                    this.rowHeight = 0,
                    this.toggle = new t.vpe
                }
                get template() {
                    return this._templateInput || this._templateQuery
                }
                toggleExpandGroup(e) {
                    this.toggle.emit({
                        type: "group",
                        value: e
                    })
                }
                expandAllGroups() {
                    this.toggle.emit({
                        type: "all",
                        value: !0
                    })
                }
                collapseAllGroups() {
                    this.toggle.emit({
                        type: "all",
                        value: !1
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["ngx-datatable-group-header"]],
                contentQueries: function(e, o, i) {
                    if (1 & e && t.Suo(i, dt, 7, t.Rgc),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o._templateQuery = s.first)
                    }
                },
                inputs: {
                    rowHeight: "rowHeight",
                    _templateInput: ["template", "_templateInput"]
                },
                outputs: {
                    toggle: "toggle"
                }
            }),
            n
        }
        )();
        function ht() {
            return ""
        }
        function E(n) {
            return null == n ? ht : "number" == typeof n ? pt : -1 !== n.indexOf(".") ? ft : gt
        }
        function pt(n, r) {
            return null == n ? "" : n && null != r ? n[r] ?? "" : n
        }
        function gt(n, r) {
            return null == n ? "" : n && r ? n[r] ?? "" : n
        }
        function ft(n, r) {
            if (null == n)
                return "";
            if (!n || !r)
                return n;
            let e = n[r];
            if (void 0 !== e)
                return e;
            e = n;
            const o = r.split(".");
            if (o.length)
                for (let i = 0; i < o.length; i++)
                    if (e = e[o[i]],
                    null == e)
                        return "";
            return e
        }
        function D(n) {
            return n && (r=>E(n)(r, n))
        }
        function W(n, r, e) {
            if (r && e) {
                const o = {}
                  , i = n.length;
                let s = null;
                o[0] = new Z;
                const a = n.reduce((c,d)=>{
                    const h = e(d);
                    return -1 === c.indexOf(h) && c.push(h),
                    c
                }
                , []);
                for (let c = 0; c < i; c++)
                    o[e(n[c])] = new Z(n[c]);
                for (let c = 0; c < i; c++) {
                    s = o[e(n[c])];
                    let d = 0;
                    const h = r(s.row);
                    h && a.indexOf(h) > -1 && (d = h),
                    s.parent = o[d],
                    s.row.level = s.parent.row.level + 1,
                    s.parent.children.push(s)
                }
                let l = [];
                return o[0].flatten(function() {
                    l = [...l, this.row]
                }, !0),
                l
            }
            return n
        }
        class Z {
            constructor(r=null) {
                r || (r = {
                    level: -1,
                    treeStatus: "expanded"
                }),
                this.row = r,
                this.parent = null,
                this.children = []
            }
            flatten(r, e) {
                if ("expanded" === this.row.treeStatus)
                    for (let o = 0, i = this.children.length; o < i; o++) {
                        const s = this.children[o];
                        r.apply(s, Array.prototype.slice.call(arguments, 2)),
                        e && s.flatten.apply(s, arguments)
                    }
            }
        }
        function G(n) {
            return (n = (n = (n = n.replace(/[^a-zA-Z0-9 ]/g, " ")).replace(/([a-z](?=[A-Z]))/g, "$1 ")).replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, "").trim().toLowerCase()).replace(/([ 0-9]+)([a-zA-Z])/g, function(r, e, o) {
                return e.trim() + o.toUpperCase()
            })
        }
        function mt(n) {
            return n.replace(/([A-Z])/g, r=>` ${r}`).replace(/^./, r=>r.toUpperCase())
        }
        function $(n) {
            if (!n)
                return;
            let r = !1;
            for (const e of n)
                e.$$id || (e.$$id = ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)),
                R(e.prop) && e.name && (e.prop = G(e.name)),
                e.$$valueGetter || (e.$$valueGetter = E(e.prop)),
                !R(e.prop) && R(e.name) && (e.name = mt(String(e.prop))),
                R(e.prop) && R(e.name) && (e.name = ""),
                e.hasOwnProperty("resizeable") || (e.resizeable = !0),
                e.hasOwnProperty("sortable") || (e.sortable = !0),
                e.hasOwnProperty("draggable") || (e.draggable = !0),
                e.hasOwnProperty("canAutoResize") || (e.canAutoResize = !0),
                e.hasOwnProperty("width") || (e.width = 150),
                e.hasOwnProperty("isTreeColumn") && e.isTreeColumn && !r ? r = !0 : e.isTreeColumn = !1
        }
        function R(n) {
            return null == n
        }
        var C = (()=>{
            return (n = C || (C = {})).standard = "standard",
            n.flex = "flex",
            n.force = "force",
            C;
            var n
        }
        )()
          , m = (()=>{
            return (n = m || (m = {})).single = "single",
            n.multi = "multi",
            n.multiClick = "multiClick",
            n.cell = "cell",
            n.checkbox = "checkbox",
            m;
            var n
        }
        )()
          , H = (()=>{
            return (n = H || (H = {})).single = "single",
            n.multi = "multi",
            H;
            var n
        }
        )()
          , S = (()=>{
            return (n = S || (S = {})).header = "header",
            n.body = "body",
            S;
            var n
        }
        )();
        let V = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-header-template", ""]]
            }),
            n
        }
        )()
          , U = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-cell-template", ""]]
            }),
            n
        }
        )()
          , bt = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-tree-toggle", ""]]
            }),
            n
        }
        )()
          , q = (()=>{
            class n {
                constructor(e) {
                    this.columnChangesService = e,
                    this.isFirstChange = !0
                }
                get cellTemplate() {
                    return this._cellTemplateInput || this._cellTemplateQuery
                }
                get headerTemplate() {
                    return this._headerTemplateInput || this._headerTemplateQuery
                }
                get treeToggleTemplate() {
                    return this._treeToggleTemplateInput || this._treeToggleTemplateQuery
                }
                ngOnChanges() {
                    this.isFirstChange ? this.isFirstChange = !1 : this.columnChangesService.onInputChange()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(z))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["ngx-datatable-column"]],
                contentQueries: function(e, o, i) {
                    if (1 & e && (t.Suo(i, U, 7, t.Rgc),
                    t.Suo(i, V, 7, t.Rgc),
                    t.Suo(i, bt, 7, t.Rgc)),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o._cellTemplateQuery = s.first),
                        t.iGM(s = t.CRH()) && (o._headerTemplateQuery = s.first),
                        t.iGM(s = t.CRH()) && (o._treeToggleTemplateQuery = s.first)
                    }
                },
                inputs: {
                    name: "name",
                    prop: "prop",
                    frozenLeft: "frozenLeft",
                    frozenRight: "frozenRight",
                    flexGrow: "flexGrow",
                    resizeable: "resizeable",
                    comparator: "comparator",
                    pipe: "pipe",
                    sortable: "sortable",
                    draggable: "draggable",
                    canAutoResize: "canAutoResize",
                    minWidth: "minWidth",
                    width: "width",
                    maxWidth: "maxWidth",
                    checkboxable: "checkboxable",
                    headerCheckboxable: "headerCheckboxable",
                    headerClass: "headerClass",
                    cellClass: "cellClass",
                    isTreeColumn: "isTreeColumn",
                    treeLevelIndent: "treeLevelIndent",
                    summaryFunc: "summaryFunc",
                    summaryTemplate: "summaryTemplate",
                    _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
                    _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
                    _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
                },
                features: [t.TTD]
            }),
            n
        }
        )()
          , yt = (()=>{
            class n {
                constructor(e) {
                    this.template = e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.Rgc))
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["", "ngx-datatable-row-detail-template", ""]]
            }),
            n
        }
        )()
          , Ct = (()=>{
            class n {
                constructor() {
                    this.rowHeight = 0,
                    this.toggle = new t.vpe
                }
                get template() {
                    return this._templateInput || this._templateQuery
                }
                toggleExpandRow(e) {
                    this.toggle.emit({
                        type: "row",
                        value: e
                    })
                }
                expandAllRows() {
                    this.toggle.emit({
                        type: "all",
                        value: !0
                    })
                }
                collapseAllRows() {
                    this.toggle.emit({
                        type: "all",
                        value: !1
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["ngx-datatable-row-detail"]],
                contentQueries: function(e, o, i) {
                    if (1 & e && t.Suo(i, yt, 7, t.Rgc),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o._templateQuery = s.first)
                    }
                },
                inputs: {
                    rowHeight: "rowHeight",
                    _templateInput: ["template", "_templateInput"]
                },
                outputs: {
                    toggle: "toggle"
                }
            }),
            n
        }
        )()
          , K = (()=>{
            class n {
                get template() {
                    return this._templateInput || this._templateQuery
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275dir = t.lG2({
                type: n,
                selectors: [["ngx-datatable-footer"]],
                contentQueries: function(e, o, i) {
                    if (1 & e && t.Suo(i, Q, 5, t.Rgc),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o._templateQuery = s.first)
                    }
                },
                inputs: {
                    footerHeight: "footerHeight",
                    totalMessage: "totalMessage",
                    selectedMessage: "selectedMessage",
                    pagerLeftArrowIcon: "pagerLeftArrowIcon",
                    pagerRightArrowIcon: "pagerRightArrowIcon",
                    pagerPreviousIcon: "pagerPreviousIcon",
                    pagerNextIcon: "pagerNextIcon",
                    _templateInput: ["template", "_templateInput"]
                }
            }),
            n
        }
        )();
        function x(n) {
            const r = {
                left: [],
                center: [],
                right: []
            };
            if (n)
                for (const e of n)
                    e.frozenLeft ? r.left.push(e) : e.frozenRight ? r.right.push(e) : r.center.push(e);
            return r
        }
        function I(n, r) {
            return {
                left: k(n.left),
                center: k(n.center),
                right: k(n.right),
                total: Math.floor(k(r))
            }
        }
        function k(n, r) {
            let e = 0;
            if (n)
                for (const o of n)
                    e += parseFloat(r && o[r] ? o[r] : o.width);
            return e
        }
        function j(n) {
            const r = []
              , e = x(n);
            return r.push({
                type: "left",
                columns: e.left
            }),
            r.push({
                type: "center",
                columns: e.center
            }),
            r.push({
                type: "right",
                columns: e.right
            }),
            r
        }
        class Tt {
            constructor() {
                this.treeArray = []
            }
            clearCache() {
                this.treeArray = []
            }
            initCache(r) {
                const {rows: e, rowHeight: o, detailRowHeight: i, externalVirtual: s, rowCount: a, rowIndexes: l, rowExpansions: c} = r
                  , d = "function" == typeof o
                  , h = "function" == typeof i;
                if (!d && isNaN(o))
                    throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number or function value: (${o}) when 'scrollbarV' is enabled.`);
                if (!h && isNaN(i))
                    throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number or function value: (${i}) when 'scrollbarV' is enabled.`);
                const _ = s ? a : e.length;
                this.treeArray = new Array(_);
                for (let u = 0; u < _; ++u)
                    this.treeArray[u] = 0;
                for (let u = 0; u < _; ++u) {
                    const w = e[u];
                    let T = o;
                    d && (T = o(w));
                    const Kt = c.has(w);
                    w && Kt && (T += h ? i(w, l.get(w)) : i),
                    this.update(u, T)
                }
            }
            getRowIndex(r) {
                return 0 === r ? 0 : this.calcRowIndex(r)
            }
            update(r, e) {
                if (!this.treeArray.length)
                    throw new Error(`Update at index ${r} with value ${e} failed:\n        Row Height cache not initialized.`);
                const o = this.treeArray.length;
                for (r |= 0; r < o; )
                    this.treeArray[r] += e,
                    r |= r + 1
            }
            query(r) {
                if (!this.treeArray.length)
                    throw new Error(`query at index ${r} failed: Fenwick tree array not initialized.`);
                let e = 0;
                for (r |= 0; r >= 0; )
                    e += this.treeArray[r],
                    r = (r & r + 1) - 1;
                return e
            }
            queryBetween(r, e) {
                return this.query(e) - this.query(r - 1)
            }
            calcRowIndex(r) {
                if (!this.treeArray.length)
                    return 0;
                let e = -1;
                const o = this.treeArray.length;
                for (let s = Math.pow(2, o.toString(2).length - 1); 0 !== s; s >>= 1) {
                    const a = e + s;
                    a < o && r >= this.treeArray[a] && (r -= this.treeArray[a],
                    e = a)
                }
                return e + 1
            }
        }
        const M = {}
          , ee = typeof document < "u" ? document.createElement("div").style : void 0
          , O = function() {
            const n = typeof window < "u" ? window.getComputedStyle(document.documentElement, "") : void 0
              , r = typeof n < "u" ? Array.prototype.slice.call(n).join("").match(/-(moz|webkit|ms)-/) : null
              , e = null !== r ? r[1] : void 0
              , o = typeof e < "u" ? "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")","i"))[1] : void 0;
            return o ? {
                dom: o,
                lowercase: e,
                css: `-${e}-`,
                js: e[0].toUpperCase() + e.substr(1)
            } : void 0
        }();
        function P(n) {
            const r = G(n);
            return M[r] || (void 0 !== O && void 0 !== ee[O.css + n] ? M[r] = O.css + n : void 0 !== ee[n] && (M[r] = n)),
            M[r]
        }
        const N = typeof window < "u" ? P("transform") : void 0
          , vt = typeof window < "u" ? P("backfaceVisibility") : void 0
          , Dt = typeof window < "u" ? !!P("transform") : void 0
          , Ht = typeof window < "u" ? !!P("perspective") : void 0
          , te = typeof window < "u" ? window.navigator.userAgent : "Chrome"
          , Rt = /Safari\//.test(te) && !/Chrome\//.test(te);
        function y(n, r, e) {
            typeof N < "u" && Dt ? !Rt && Ht ? (n[N] = `translate3d(${r}px, ${e}px, 0)`,
            n[vt] = "hidden") : n[G(N)] = `translate(${r}px, ${e}px)` : (n.top = `${e}px`,
            n.left = `${r}px`)
        }
        let St = (()=>{
            class n {
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-progress"]],
                decls: 3,
                vars: 0,
                consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0)(1, "div", 1),
                    t._UZ(2, "div", 2),
                    t.qZA()())
                },
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function Y(n, r, e) {
            const o = e(r, n);
            return o > -1 ? n.splice(o, 1) : n.push(r),
            n
        }
        var g = (()=>{
            return (n = g || (g = {}))[n.up = 38] = "up",
            n[n.down = 40] = "down",
            n[n.return = 13] = "return",
            n[n.escape = 27] = "escape",
            n[n.left = 37] = "left",
            n[n.right = 39] = "right",
            g;
            var n
        }
        )();
        let kt = (()=>{
            class n {
                constructor() {
                    this.activate = new t.vpe,
                    this.select = new t.vpe
                }
                selectRow(e, o, i) {
                    if (!this.selectEnabled)
                        return;
                    const s = this.selectionType === m.checkbox
                      , l = this.selectionType === m.multiClick;
                    let c = [];
                    c = this.selectionType === m.multi || s || l ? e.shiftKey ? function It(n, r, e, o, i) {
                        const s = e < o;
                        for (let a = 0; a < r.length; a++) {
                            let h = {
                                start: 0,
                                end: 0
                            };
                            h = s ? {
                                start: e,
                                end: o
                            } : {
                                start: o,
                                end: e + 1
                            },
                            (s && a <= o && a >= e || !s && a >= o && a <= e) && a >= h.start && a <= h.end && n.push(r[a])
                        }
                        return n
                    }([], this.rows, o, this.prevIndex, this.getRowSelectedIdx.bind(this)) : Y(e.ctrlKey || e.metaKey || l || s ? [...this.selected] : [], i, this.getRowSelectedIdx.bind(this)) : Y([], i, this.getRowSelectedIdx.bind(this)),
                    "function" == typeof this.selectCheck && (c = c.filter(this.selectCheck.bind(this))),
                    this.selected.splice(0, this.selected.length),
                    this.selected.push(...c),
                    this.prevIndex = o,
                    this.select.emit({
                        selected: c
                    })
                }
                onActivate(e, o) {
                    const {type: i, event: s, row: a} = e
                      , l = this.selectionType === m.checkbox;
                    !l && ("click" === i || "dblclick" === i) || l && "checkbox" === i ? this.selectRow(s, o, a) : "keydown" === i && (s.keyCode === g.return ? this.selectRow(s, o, a) : this.onKeyboardFocus(e)),
                    this.activate.emit(e)
                }
                onKeyboardFocus(e) {
                    const {keyCode: o} = e.event;
                    if (o === g.up || o === g.down || o === g.right || o === g.left) {
                        const s = this.selectionType === m.cell;
                        e.cellElement && s ? s && this.focusCell(e.cellElement, e.rowElement, o, e.cellIndex) : this.focusRow(e.rowElement, o)
                    }
                }
                focusRow(e, o) {
                    const i = this.getPrevNextRow(e, o);
                    i && i.focus()
                }
                getPrevNextRow(e, o) {
                    const i = e.parentElement;
                    if (i) {
                        let s;
                        if (o === g.up ? s = i.previousElementSibling : o === g.down && (s = i.nextElementSibling),
                        s && s.children.length)
                            return s.children[0]
                    }
                }
                focusCell(e, o, i, s) {
                    let a;
                    if (i === g.left)
                        a = e.previousElementSibling;
                    else if (i === g.right)
                        a = e.nextElementSibling;
                    else if (i === g.up || i === g.down) {
                        const l = this.getPrevNextRow(o, i);
                        if (l) {
                            const c = l.getElementsByClassName("datatable-body-cell");
                            c.length && (a = c[s])
                        }
                    }
                    a && a.focus()
                }
                getRowSelected(e) {
                    return this.getRowSelectedIdx(e, this.selected) > -1
                }
                getRowSelectedIdx(e, o) {
                    if (!o || !o.length)
                        return -1;
                    const i = this.rowIdentity(e);
                    return o.findIndex(s=>this.rowIdentity(s) === i)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-selection"]],
                inputs: {
                    rows: "rows",
                    selected: "selected",
                    selectEnabled: "selectEnabled",
                    selectionType: "selectionType",
                    rowIdentity: "rowIdentity",
                    selectCheck: "selectCheck"
                },
                outputs: {
                    activate: "activate",
                    select: "select"
                },
                ngContentSelectors: B,
                decls: 1,
                vars: 0,
                template: function(e, o) {
                    1 & e && (t.F$t(),
                    t.Hsn(0))
                },
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        var f = (()=>{
            return (n = f || (f = {})).asc = "asc",
            n.desc = "desc",
            f;
            var n
        }
        )();
        let Mt = (()=>{
            class n {
                constructor(e, o) {
                    this.cd = o,
                    this.activate = new t.vpe,
                    this.treeAction = new t.vpe,
                    this.isFocused = !1,
                    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this),
                    this.activateFn = this.activate.emit.bind(this.activate),
                    this.cellContext = {
                        onCheckboxChangeFn: this.onCheckboxChangeFn,
                        activateFn: this.activateFn,
                        row: this.row,
                        group: this.group,
                        value: this.value,
                        column: this.column,
                        rowHeight: this.rowHeight,
                        isSelected: this.isSelected,
                        rowIndex: this.rowIndex,
                        treeStatus: this.treeStatus,
                        onTreeAction: this.onTreeAction.bind(this)
                    },
                    this._element = e.nativeElement
                }
                set group(e) {
                    this._group = e,
                    this.cellContext.group = e,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get group() {
                    return this._group
                }
                set rowHeight(e) {
                    this._rowHeight = e,
                    this.cellContext.rowHeight = e,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get rowHeight() {
                    return this._rowHeight
                }
                set isSelected(e) {
                    this._isSelected = e,
                    this.cellContext.isSelected = e,
                    this.cd.markForCheck()
                }
                get isSelected() {
                    return this._isSelected
                }
                set expanded(e) {
                    this._expanded = e,
                    this.cellContext.expanded = e,
                    this.cd.markForCheck()
                }
                get expanded() {
                    return this._expanded
                }
                set rowIndex(e) {
                    this._rowIndex = e,
                    this.cellContext.rowIndex = e,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get rowIndex() {
                    return this._rowIndex
                }
                set column(e) {
                    this._column = e,
                    this.cellContext.column = e,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get column() {
                    return this._column
                }
                set row(e) {
                    this._row = e,
                    this.cellContext.row = e,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get row() {
                    return this._row
                }
                set sorts(e) {
                    this._sorts = e,
                    this.calcSortDir = this.calcSortDir(e)
                }
                get sorts() {
                    return this._sorts
                }
                set treeStatus(e) {
                    this._treeStatus = "collapsed" !== e && "expanded" !== e && "loading" !== e && "disabled" !== e ? "collapsed" : e,
                    this.cellContext.treeStatus = this._treeStatus,
                    this.checkValueUpdates(),
                    this.cd.markForCheck()
                }
                get treeStatus() {
                    return this._treeStatus
                }
                get columnCssClasses() {
                    let e = "datatable-body-cell";
                    if (this.column.cellClass)
                        if ("string" == typeof this.column.cellClass)
                            e += " " + this.column.cellClass;
                        else if ("function" == typeof this.column.cellClass) {
                            const o = this.column.cellClass({
                                row: this.row,
                                group: this.group,
                                column: this.column,
                                value: this.value,
                                rowHeight: this.rowHeight
                            });
                            if ("string" == typeof o)
                                e += " " + o;
                            else if ("object" == typeof o) {
                                const i = Object.keys(o);
                                for (const s of i)
                                    !0 === o[s] && (e += ` ${s}`)
                            }
                        }
                    return this.sortDir || (e += " sort-active"),
                    this.isFocused && (e += " active"),
                    this.sortDir === f.asc && (e += " sort-asc"),
                    this.sortDir === f.desc && (e += " sort-desc"),
                    e
                }
                get width() {
                    return this.column.width
                }
                get minWidth() {
                    return this.column.minWidth
                }
                get maxWidth() {
                    return this.column.maxWidth
                }
                get height() {
                    const e = this.rowHeight;
                    return isNaN(e) ? e : e + "px"
                }
                ngDoCheck() {
                    this.checkValueUpdates()
                }
                ngOnDestroy() {
                    this.cellTemplate && this.cellTemplate.clear()
                }
                checkValueUpdates() {
                    let e = "";
                    if (this.row && this.column) {
                        const o = this.column.$$valueGetter(this.row, this.column.prop)
                          , i = this.column.pipe;
                        i ? e = i.transform(o) : void 0 !== e && (e = o)
                    } else
                        e = "";
                    this.value !== e && (this.value = e,
                    this.cellContext.value = e,
                    this.sanitizedValue = null != e ? this.stripHtml(e) : e,
                    this.cd.markForCheck())
                }
                onFocus() {
                    this.isFocused = !0
                }
                onBlur() {
                    this.isFocused = !1
                }
                onClick(e) {
                    this.activate.emit({
                        type: "click",
                        event: e,
                        row: this.row,
                        group: this.group,
                        rowHeight: this.rowHeight,
                        column: this.column,
                        value: this.value,
                        cellElement: this._element
                    })
                }
                onDblClick(e) {
                    this.activate.emit({
                        type: "dblclick",
                        event: e,
                        row: this.row,
                        group: this.group,
                        rowHeight: this.rowHeight,
                        column: this.column,
                        value: this.value,
                        cellElement: this._element
                    })
                }
                onKeyDown(e) {
                    const o = e.keyCode;
                    (o === g.return || o === g.down || o === g.up || o === g.left || o === g.right) && e.target === this._element && (e.preventDefault(),
                    e.stopPropagation(),
                    this.activate.emit({
                        type: "keydown",
                        event: e,
                        row: this.row,
                        group: this.group,
                        rowHeight: this.rowHeight,
                        column: this.column,
                        value: this.value,
                        cellElement: this._element
                    }))
                }
                onCheckboxChange(e) {
                    this.activate.emit({
                        type: "checkbox",
                        event: e,
                        row: this.row,
                        group: this.group,
                        rowHeight: this.rowHeight,
                        column: this.column,
                        value: this.value,
                        cellElement: this._element,
                        treeStatus: "collapsed"
                    })
                }
                calcSortDir(e) {
                    if (!e)
                        return;
                    const o = e.find(i=>i.prop === this.column.prop);
                    return o ? o.dir : void 0
                }
                stripHtml(e) {
                    return e.replace ? e.replace(/<\/?[^>]+(>|$)/g, "") : e
                }
                onTreeAction() {
                    this.treeAction.emit(this.row)
                }
                calcLeftMargin(e, o) {
                    return e.isTreeColumn ? o.level * (null != e.treeLevelIndent ? e.treeLevelIndent : 50) : 0
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.SBq),t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-body-cell"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(de, 7, t.s_b),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.cellTemplate = i.first)
                    }
                },
                hostVars: 10,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("focus", function() {
                        return o.onFocus()
                    })("blur", function() {
                        return o.onBlur()
                    })("click", function(s) {
                        return o.onClick(s)
                    })("dblclick", function(s) {
                        return o.onDblClick(s)
                    })("keydown", function(s) {
                        return o.onKeyDown(s)
                    }),
                    2 & e && (t.Tol(o.columnCssClasses),
                    t.Udp("width", o.width, "px")("min-width", o.minWidth, "px")("max-width", o.maxWidth, "px")("height", o.height))
                },
                inputs: {
                    displayCheck: "displayCheck",
                    group: "group",
                    rowHeight: "rowHeight",
                    isSelected: "isSelected",
                    expanded: "expanded",
                    rowIndex: "rowIndex",
                    column: "column",
                    row: "row",
                    sorts: "sorts",
                    treeStatus: "treeStatus"
                },
                outputs: {
                    activate: "activate",
                    treeAction: "treeAction"
                },
                decls: 5,
                vars: 6,
                consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, ue, 2, 1, "label", 1),
                    t.YNc(2, be, 3, 2, "ng-container", 2),
                    t.YNc(3, ye, 1, 2, "span", 3),
                    t.YNc(4, xe, 2, 2, null, 2),
                    t.qZA()),
                    2 & e && (t.Udp("margin-left", o.calcLeftMargin(o.column, o.row), "px"),
                    t.xp6(1),
                    t.Q6J("ngIf", o.column.checkboxable && (!o.displayCheck || o.displayCheck(o.row, o.column, o.value))),
                    t.xp6(1),
                    t.Q6J("ngIf", o.column.isTreeColumn),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.column.cellTemplate),
                    t.xp6(1),
                    t.Q6J("ngIf", o.column.cellTemplate))
                },
                dependencies: [p.O5, p.tP],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , oe = (()=>{
            class n {
                constructor(e, o, i, s) {
                    this.differs = e,
                    this.scrollbarHelper = o,
                    this.cd = i,
                    this.treeStatus = "collapsed",
                    this.activate = new t.vpe,
                    this.treeAction = new t.vpe,
                    this._groupStyles = {
                        left: {},
                        center: {},
                        right: {}
                    },
                    this._element = s.nativeElement,
                    this._rowDiffer = e.find({}).create()
                }
                set columns(e) {
                    this._columns = e,
                    this.recalculateColumns(e),
                    this.buildStylesByGroup()
                }
                get columns() {
                    return this._columns
                }
                set innerWidth(e) {
                    if (this._columns) {
                        const o = x(this._columns);
                        this._columnGroupWidths = I(o, this._columns)
                    }
                    this._innerWidth = e,
                    this.recalculateColumns(),
                    this.buildStylesByGroup()
                }
                get innerWidth() {
                    return this._innerWidth
                }
                set offsetX(e) {
                    this._offsetX = e,
                    this.buildStylesByGroup()
                }
                get offsetX() {
                    return this._offsetX
                }
                get cssClass() {
                    let e = "datatable-body-row";
                    if (this.isSelected && (e += " active"),
                    this.rowIndex % 2 != 0 && (e += " datatable-row-odd"),
                    this.rowIndex % 2 == 0 && (e += " datatable-row-even"),
                    this.rowClass) {
                        const o = this.rowClass(this.row);
                        if ("string" == typeof o)
                            e += ` ${o}`;
                        else if ("object" == typeof o) {
                            const i = Object.keys(o);
                            for (const s of i)
                                !0 === o[s] && (e += ` ${s}`)
                        }
                    }
                    return e
                }
                get columnsTotalWidths() {
                    return this._columnGroupWidths.total
                }
                ngDoCheck() {
                    this._rowDiffer.diff(this.row) && this.cd.markForCheck()
                }
                trackByGroups(e, o) {
                    return o.type
                }
                columnTrackingFn(e, o) {
                    return o.$$id
                }
                buildStylesByGroup() {
                    this._groupStyles.left = this.calcStylesByGroup("left"),
                    this._groupStyles.center = this.calcStylesByGroup("center"),
                    this._groupStyles.right = this.calcStylesByGroup("right"),
                    this.cd.markForCheck()
                }
                calcStylesByGroup(e) {
                    const o = this._columnGroupWidths
                      , i = this.offsetX
                      , s = {
                        width: `${o[e]}px`
                    };
                    if ("left" === e)
                        y(s, i, 0);
                    else if ("right" === e) {
                        const a = parseInt(this.innerWidth + "", 0);
                        y(s, -1 * (o.total - a - i + this.scrollbarHelper.width), 0)
                    }
                    return s
                }
                onActivate(e, o) {
                    e.cellIndex = o,
                    e.rowElement = this._element,
                    this.activate.emit(e)
                }
                onKeyDown(e) {
                    const o = e.keyCode;
                    (o === g.return || o === g.down || o === g.up || o === g.left || o === g.right) && e.target === this._element && (e.preventDefault(),
                    e.stopPropagation(),
                    this.activate.emit({
                        type: "keydown",
                        event: e,
                        row: this.row,
                        rowElement: this._element
                    }))
                }
                onMouseenter(e) {
                    this.activate.emit({
                        type: "mouseenter",
                        event: e,
                        row: this.row,
                        rowElement: this._element
                    })
                }
                recalculateColumns(e=this.columns) {
                    this._columns = e;
                    const o = x(this._columns);
                    this._columnsByPin = j(this._columns),
                    this._columnGroupWidths = I(o, this._columns)
                }
                onTreeAction() {
                    this.treeAction.emit()
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.aQg),t.Y36(A, 4),t.Y36(t.sBO),t.Y36(t.SBq))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-body-row"]],
                hostVars: 6,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("keydown", function(s) {
                        return o.onKeyDown(s)
                    })("mouseenter", function(s) {
                        return o.onMouseenter(s)
                    }),
                    2 & e && (t.Tol(o.cssClass),
                    t.Udp("height", o.rowHeight, "px")("width", o.columnsTotalWidths, "px"))
                },
                inputs: {
                    columns: "columns",
                    innerWidth: "innerWidth",
                    expanded: "expanded",
                    rowClass: "rowClass",
                    row: "row",
                    group: "group",
                    isSelected: "isSelected",
                    rowIndex: "rowIndex",
                    displayCheck: "displayCheck",
                    treeStatus: "treeStatus",
                    offsetX: "offsetX",
                    rowHeight: "rowHeight"
                },
                outputs: {
                    activate: "activate",
                    treeAction: "treeAction"
                },
                decls: 1,
                vars: 2,
                consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, ve, 2, 6, "div", 0),
                    2 & e && t.Q6J("ngForOf", o._columnsByPin)("ngForTrackBy", o.trackByGroups)
                },
                dependencies: [Mt, p.sg, p.PC],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function Pt(n) {
            const r = n.filter(e=>!!e);
            return !r.length || r.some(e=>"number" != typeof e) ? null : r.reduce((e,o)=>e + o)
        }
        function Ft(n) {
            return null
        }
        let Bt = (()=>{
            class n {
                constructor() {
                    this.summaryRow = {}
                }
                ngOnChanges() {
                    !this.columns || !this.rows || (this.updateInternalColumns(),
                    this.updateValues())
                }
                updateInternalColumns() {
                    this._internalColumns = this.columns.map(e=>({
                        ...e,
                        cellTemplate: e.summaryTemplate
                    }))
                }
                updateValues() {
                    this.summaryRow = {},
                    this.columns.filter(e=>!e.summaryTemplate).forEach(e=>{
                        const o = this.rows.map(s=>s[e.prop])
                          , i = this.getSummaryFunction(e);
                        this.summaryRow[e.prop] = e.pipe ? e.pipe.transform(i(o)) : i(o)
                    }
                    )
                }
                getSummaryFunction(e) {
                    return void 0 === e.summaryFunc ? Pt : null === e.summaryFunc ? Ft : e.summaryFunc
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-summary-row"]],
                hostAttrs: [1, "datatable-summary-row"],
                inputs: {
                    rows: "rows",
                    columns: "columns",
                    rowHeight: "rowHeight",
                    offsetX: "offsetX",
                    innerWidth: "innerWidth"
                },
                features: [t.TTD],
                decls: 1,
                vars: 1,
                consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
                template: function(e, o) {
                    1 & e && t.YNc(0, De, 1, 6, "datatable-body-row", 0),
                    2 & e && t.Q6J("ngIf", o.summaryRow && o._internalColumns)
                },
                dependencies: [oe, p.O5],
                encapsulation: 2
            }),
            n
        }
        )()
          , At = (()=>{
            class n {
                constructor(e, o) {
                    this.cd = e,
                    this.differs = o,
                    this.rowContextmenu = new t.vpe(!1),
                    this._expanded = !1,
                    this.groupContext = {
                        group: this.row,
                        expanded: this.expanded,
                        rowIndex: this.rowIndex
                    },
                    this.rowContext = {
                        row: this.row,
                        expanded: this.expanded,
                        rowIndex: this.rowIndex
                    },
                    this.rowDiffer = o.find({}).create()
                }
                set rowIndex(e) {
                    this._rowIndex = e,
                    this.rowContext.rowIndex = e,
                    this.groupContext.rowIndex = e,
                    this.cd.markForCheck()
                }
                get rowIndex() {
                    return this._rowIndex
                }
                set expanded(e) {
                    this._expanded = e,
                    this.groupContext.expanded = e,
                    this.rowContext.expanded = e,
                    this.cd.markForCheck()
                }
                get expanded() {
                    return this._expanded
                }
                ngDoCheck() {
                    this.rowDiffer.diff(this.row) && (this.rowContext.row = this.row,
                    this.groupContext.group = this.row,
                    this.cd.markForCheck())
                }
                onContextmenu(e) {
                    this.rowContextmenu.emit({
                        event: e,
                        row: this.row
                    })
                }
                getGroupHeaderStyle() {
                    const e = {};
                    return e.transform = "translate3d(" + this.offsetX + "px, 0px, 0px)",
                    e["backface-visibility"] = "hidden",
                    e.width = this.innerWidth,
                    e
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO),t.Y36(t.aQg))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-row-wrapper"]],
                hostAttrs: [1, "datatable-row-wrapper"],
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("contextmenu", function(s) {
                        return o.onContextmenu(s)
                    })
                },
                inputs: {
                    innerWidth: "innerWidth",
                    rowDetail: "rowDetail",
                    groupHeader: "groupHeader",
                    offsetX: "offsetX",
                    detailRowHeight: "detailRowHeight",
                    row: "row",
                    groupedRows: "groupedRows",
                    rowIndex: "rowIndex",
                    expanded: "expanded"
                },
                outputs: {
                    rowContextmenu: "rowContextmenu"
                },
                ngContentSelectors: B,
                decls: 3,
                vars: 3,
                consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
                template: function(e, o) {
                    1 & e && (t.F$t(),
                    t.YNc(0, Se, 2, 2, "div", 0),
                    t.YNc(1, Ie, 1, 0, "ng-content", 1),
                    t.YNc(2, Pe, 2, 3, "div", 2)),
                    2 & e && (t.Q6J("ngIf", o.groupHeader && o.groupHeader.template),
                    t.xp6(1),
                    t.Q6J("ngIf", o.groupHeader && o.groupHeader.template && o.expanded || !o.groupHeader || !o.groupHeader.template),
                    t.xp6(1),
                    t.Q6J("ngIf", o.rowDetail && o.rowDetail.template && o.expanded))
                },
                dependencies: [p.O5, p.PC, p.tP],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , ne = (()=>{
            class n {
                constructor(e) {
                    this.cd = e,
                    this.selected = [],
                    this.scroll = new t.vpe,
                    this.page = new t.vpe,
                    this.activate = new t.vpe,
                    this.select = new t.vpe,
                    this.detailToggle = new t.vpe,
                    this.rowContextmenu = new t.vpe(!1),
                    this.treeAction = new t.vpe,
                    this.rowHeightsCache = new Tt,
                    this.temp = [],
                    this.offsetY = 0,
                    this.indexes = {},
                    this.rowIndexes = new WeakMap,
                    this.rowExpansions = [],
                    this.getDetailRowHeight = (o,i)=>{
                        if (!this.rowDetail)
                            return 0;
                        const s = this.rowDetail.rowHeight;
                        return "function" == typeof s ? s(o, i) : s
                    }
                    ,
                    this.rowTrackingFn = (o,i)=>{
                        const s = this.getRowIndex(i);
                        return this.trackByProp ? i[this.trackByProp] : s
                    }
                }
                set pageSize(e) {
                    this._pageSize = e,
                    this.recalcLayout()
                }
                get pageSize() {
                    return this._pageSize
                }
                set rows(e) {
                    this._rows = e,
                    this.recalcLayout()
                }
                get rows() {
                    return this._rows
                }
                set columns(e) {
                    this._columns = e;
                    const o = x(e);
                    this.columnGroupWidths = I(o, e)
                }
                get columns() {
                    return this._columns
                }
                set offset(e) {
                    this._offset = e,
                    (!this.scrollbarV || this.scrollbarV && !this.virtualization) && this.recalcLayout()
                }
                get offset() {
                    return this._offset
                }
                set rowCount(e) {
                    this._rowCount = e,
                    this.recalcLayout()
                }
                get rowCount() {
                    return this._rowCount
                }
                get bodyWidth() {
                    return this.scrollbarH ? this.innerWidth + "px" : "100%"
                }
                set bodyHeight(e) {
                    this._bodyHeight = this.scrollbarV ? e + "px" : "auto",
                    this.recalcLayout()
                }
                get bodyHeight() {
                    return this._bodyHeight
                }
                get selectEnabled() {
                    return !!this.selectionType
                }
                get scrollHeight() {
                    if (this.scrollbarV && this.virtualization && this.rowCount)
                        return this.rowHeightsCache.query(this.rowCount - 1)
                }
                ngOnInit() {
                    this.rowDetail && (this.listener = this.rowDetail.toggle.subscribe(({type: e, value: o})=>{
                        "row" === e && this.toggleRowExpansion(o),
                        "all" === e && this.toggleAllRows(o),
                        this.updateIndexes(),
                        this.updateRows(),
                        this.cd.markForCheck()
                    }
                    )),
                    this.groupHeader && (this.listener = this.groupHeader.toggle.subscribe(({type: e, value: o})=>{
                        "group" === e && this.toggleRowExpansion(o),
                        "all" === e && this.toggleAllRows(o),
                        this.updateIndexes(),
                        this.updateRows(),
                        this.cd.markForCheck()
                    }
                    ))
                }
                ngOnDestroy() {
                    (this.rowDetail || this.groupHeader) && this.listener.unsubscribe()
                }
                updateOffsetY(e) {
                    this.scroller && (this.scrollbarV && this.virtualization && e ? e = this.rowHeightsCache.query(this.pageSize * e - 1) : this.scrollbarV && !this.virtualization && (e = 0),
                    this.scroller.setOffset(e || 0))
                }
                onBodyScroll(e) {
                    const o = e.scrollYPos
                      , i = e.scrollXPos;
                    (this.offsetY !== o || this.offsetX !== i) && this.scroll.emit({
                        offsetY: o,
                        offsetX: i
                    }),
                    this.offsetY = o,
                    this.offsetX = i,
                    this.updateIndexes(),
                    this.updatePage(e.direction),
                    this.updateRows()
                }
                updatePage(e) {
                    let o = this.indexes.first / this.pageSize;
                    "up" === e ? o = Math.ceil(o) : "down" === e && (o = Math.floor(o)),
                    void 0 !== e && !isNaN(o) && this.page.emit({
                        offset: o
                    })
                }
                updateRows() {
                    const {first: e, last: o} = this.indexes;
                    let i = e
                      , s = 0;
                    const a = [];
                    if (this.groupedRows) {
                        let l = 3;
                        for (1 === this.groupedRows.length && (l = this.groupedRows[0].value.length); i < o && i < this.groupedRows.length; ) {
                            const c = this.groupedRows[i];
                            this.rowIndexes.set(c, i),
                            c.value && c.value.forEach((d,h)=>{
                                this.rowIndexes.set(d, `${i}-${h}`)
                            }
                            ),
                            a[s] = c,
                            s++,
                            i++
                        }
                    } else
                        for (; i < o && i < this.rowCount; ) {
                            const l = this.rows[i];
                            l && (this.rowIndexes.set(l, i),
                            a[s] = l),
                            s++,
                            i++
                        }
                    this.temp = a
                }
                getRowHeight(e) {
                    return "function" == typeof this.rowHeight ? this.rowHeight(e) : this.rowHeight
                }
                getGroupHeight(e) {
                    let o = 0;
                    if (e.value)
                        for (let i = 0; i < e.value.length; i++)
                            o += this.getRowAndDetailHeight(e.value[i]);
                    return o
                }
                getRowAndDetailHeight(e) {
                    let o = this.getRowHeight(e);
                    return this.getRowExpanded(e) && (o += this.getDetailRowHeight(e)),
                    o
                }
                getRowsStyles(e) {
                    const o = {};
                    if (this.groupedRows && (o.width = this.columnGroupWidths.total),
                    this.scrollbarV && this.virtualization) {
                        let i = 0;
                        if (this.groupedRows) {
                            const a = e[e.length - 1];
                            i = a ? this.getRowIndex(a) : 0
                        } else
                            i = this.getRowIndex(e);
                        y(o, 0, this.rowHeightsCache.query(i - 1))
                    }
                    return o
                }
                getBottomSummaryRowStyles() {
                    if (!this.scrollbarV || !this.rows || !this.rows.length)
                        return null;
                    const e = {
                        position: "absolute"
                    };
                    return y(e, 0, this.rowHeightsCache.query(this.rows.length - 1)),
                    e
                }
                hideIndicator() {
                    setTimeout(()=>this.loadingIndicator = !1, 500)
                }
                updateIndexes() {
                    let e = 0
                      , o = 0;
                    if (this.scrollbarV)
                        if (this.virtualization) {
                            const i = parseInt(this.bodyHeight, 0);
                            e = this.rowHeightsCache.getRowIndex(this.offsetY),
                            o = this.rowHeightsCache.getRowIndex(i + this.offsetY) + 1
                        } else
                            e = 0,
                            o = this.rowCount;
                    else
                        this.externalPaging || (e = Math.max(this.offset * this.pageSize, 0)),
                        o = Math.min(e + this.pageSize, this.rowCount);
                    this.indexes = {
                        first: e,
                        last: o
                    }
                }
                refreshRowHeightCache() {
                    if (this.scrollbarV && (!this.scrollbarV || this.virtualization) && (this.rowHeightsCache.clearCache(),
                    this.rows && this.rows.length)) {
                        const e = new Set;
                        for (const o of this.rows)
                            this.getRowExpanded(o) && e.add(o);
                        this.rowHeightsCache.initCache({
                            rows: this.rows,
                            rowHeight: this.rowHeight,
                            detailRowHeight: this.getDetailRowHeight,
                            externalVirtual: this.scrollbarV && this.externalPaging,
                            rowCount: this.rowCount,
                            rowIndexes: this.rowIndexes,
                            rowExpansions: e
                        })
                    }
                }
                getAdjustedViewPortIndex() {
                    const e = this.indexes.first;
                    return this.scrollbarV && this.virtualization && this.rowHeightsCache.query(e - 1) <= this.offsetY ? e - 1 : e
                }
                toggleRowExpansion(e) {
                    const o = this.getAdjustedViewPortIndex()
                      , i = this.getRowExpandedIdx(e, this.rowExpansions)
                      , s = i > -1;
                    if (this.scrollbarV && this.virtualization) {
                        const a = this.getDetailRowHeight(e) * (s ? -1 : 1)
                          , l = this.getRowIndex(e);
                        this.rowHeightsCache.update(l, a)
                    }
                    s ? this.rowExpansions.splice(i, 1) : this.rowExpansions.push(e),
                    this.detailToggle.emit({
                        rows: [e],
                        currentIndex: o
                    })
                }
                toggleAllRows(e) {
                    this.rowExpansions = [];
                    const o = this.getAdjustedViewPortIndex();
                    if (e)
                        for (const i of this.rows)
                            this.rowExpansions.push(i);
                    this.scrollbarV && this.recalcLayout(),
                    this.detailToggle.emit({
                        rows: this.rows,
                        currentIndex: o
                    })
                }
                recalcLayout() {
                    this.refreshRowHeightCache(),
                    this.updateIndexes(),
                    this.updateRows()
                }
                columnTrackingFn(e, o) {
                    return o.$$id
                }
                stylesByGroup(e) {
                    const o = this.columnGroupWidths
                      , i = this.offsetX
                      , s = {
                        width: `${o[e]}px`
                    };
                    if ("left" === e)
                        y(s, i, 0);
                    else if ("right" === e) {
                        const a = parseInt(this.innerWidth + "", 0);
                        y(s, -1 * (o.total - a - i), 0)
                    }
                    return s
                }
                getRowExpanded(e) {
                    if (0 === this.rowExpansions.length && this.groupExpansionDefault)
                        for (const o of this.groupedRows)
                            this.rowExpansions.push(o);
                    return this.getRowExpandedIdx(e, this.rowExpansions) > -1
                }
                getRowExpandedIdx(e, o) {
                    if (!o || !o.length)
                        return -1;
                    const i = this.rowIdentity(e);
                    return o.findIndex(s=>this.rowIdentity(s) === i)
                }
                getRowIndex(e) {
                    return this.rowIndexes.get(e) || 0
                }
                onTreeAction(e) {
                    this.treeAction.emit({
                        row: e
                    })
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-body"]],
                viewQuery: function(e, o) {
                    if (1 & e && t.Gf(L, 5),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.scroller = i.first)
                    }
                },
                hostAttrs: [1, "datatable-body"],
                hostVars: 4,
                hostBindings: function(e, o) {
                    2 & e && t.Udp("width", o.bodyWidth)("height", o.bodyHeight)
                },
                inputs: {
                    scrollbarV: "scrollbarV",
                    scrollbarH: "scrollbarH",
                    loadingIndicator: "loadingIndicator",
                    externalPaging: "externalPaging",
                    rowHeight: "rowHeight",
                    offsetX: "offsetX",
                    emptyMessage: "emptyMessage",
                    selectionType: "selectionType",
                    selected: "selected",
                    rowIdentity: "rowIdentity",
                    rowDetail: "rowDetail",
                    groupHeader: "groupHeader",
                    selectCheck: "selectCheck",
                    displayCheck: "displayCheck",
                    trackByProp: "trackByProp",
                    rowClass: "rowClass",
                    groupedRows: "groupedRows",
                    groupExpansionDefault: "groupExpansionDefault",
                    innerWidth: "innerWidth",
                    groupRowsBy: "groupRowsBy",
                    virtualization: "virtualization",
                    summaryRow: "summaryRow",
                    summaryPosition: "summaryPosition",
                    summaryHeight: "summaryHeight",
                    pageSize: "pageSize",
                    rows: "rows",
                    columns: "columns",
                    offset: "offset",
                    rowCount: "rowCount",
                    bodyHeight: "bodyHeight"
                },
                outputs: {
                    scroll: "scroll",
                    page: "page",
                    activate: "activate",
                    select: "select",
                    detailToggle: "detailToggle",
                    rowContextmenu: "rowContextmenu",
                    treeAction: "treeAction"
                },
                decls: 5,
                vars: 9,
                consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
                template: function(e, o) {
                    1 & e && (t.YNc(0, Fe, 1, 0, "datatable-progress", 0),
                    t.TgZ(1, "datatable-selection", 1, 2),
                    t.NdJ("select", function(s) {
                        return o.select.emit(s)
                    })("activate", function(s) {
                        return o.activate.emit(s)
                    }),
                    t.YNc(3, Oe, 4, 8, "datatable-scroller", 3),
                    t.YNc(4, Ne, 1, 1, "div", 4),
                    t.qZA()),
                    2 & e && (t.Q6J("ngIf", o.loadingIndicator),
                    t.xp6(1),
                    t.Q6J("selected", o.selected)("rows", o.rows)("selectCheck", o.selectCheck)("selectEnabled", o.selectEnabled)("selectionType", o.selectionType)("rowIdentity", o.rowIdentity),
                    t.xp6(2),
                    t.Q6J("ngIf", null == o.rows ? null : o.rows.length),
                    t.xp6(1),
                    t.Q6J("ngIf", !(null != o.rows && o.rows.length || o.loadingIndicator)))
                },
                dependencies: [St, kt, L, Bt, At, oe, p.O5, p.sg, p.PC],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function Et(n, r) {
            if ((null === n || typeof n > "u") && (n = 0),
            (null === r || typeof r > "u") && (r = 0),
            n instanceof Date && r instanceof Date) {
                if (n < r)
                    return -1;
                if (n > r)
                    return 1
            } else if (isNaN(parseFloat(n)) || !isFinite(n) || isNaN(parseFloat(r)) || !isFinite(r)) {
                if (n = String(n),
                r = String(r),
                n.toLowerCase() < r.toLowerCase())
                    return -1;
                if (n.toLowerCase() > r.toLowerCase())
                    return 1
            } else {
                if (parseFloat(n) < parseFloat(r))
                    return -1;
                if (parseFloat(n) > parseFloat(r))
                    return 1
            }
            return 0
        }
        let Gt = (()=>{
            class n {
                constructor(e) {
                    this.cd = e,
                    this.sort = new t.vpe,
                    this.select = new t.vpe,
                    this.columnContextmenu = new t.vpe(!1),
                    this.sortFn = this.onSort.bind(this),
                    this.selectFn = this.select.emit.bind(this.select),
                    this.cellContext = {
                        column: this.column,
                        sortDir: this.sortDir,
                        sortFn: this.sortFn,
                        allRowsSelected: this.allRowsSelected,
                        selectFn: this.selectFn
                    }
                }
                set allRowsSelected(e) {
                    this._allRowsSelected = e,
                    this.cellContext.allRowsSelected = e
                }
                get allRowsSelected() {
                    return this._allRowsSelected
                }
                set column(e) {
                    this._column = e,
                    this.cellContext.column = e,
                    this.cd.markForCheck()
                }
                get column() {
                    return this._column
                }
                set sorts(e) {
                    this._sorts = e,
                    this.sortDir = this.calcSortDir(e),
                    this.cellContext.sortDir = this.sortDir,
                    this.sortClass = this.calcSortClass(this.sortDir),
                    this.cd.markForCheck()
                }
                get sorts() {
                    return this._sorts
                }
                get columnCssClasses() {
                    let e = "datatable-header-cell";
                    if (this.column.sortable && (e += " sortable"),
                    this.column.resizeable && (e += " resizeable"),
                    this.column.headerClass)
                        if ("string" == typeof this.column.headerClass)
                            e += " " + this.column.headerClass;
                        else if ("function" == typeof this.column.headerClass) {
                            const i = this.column.headerClass({
                                column: this.column
                            });
                            if ("string" == typeof i)
                                e += i;
                            else if ("object" == typeof i) {
                                const s = Object.keys(i);
                                for (const a of s)
                                    !0 === i[a] && (e += ` ${a}`)
                            }
                        }
                    const o = this.sortDir;
                    return o && (e += ` sort-active sort-${o}`),
                    e
                }
                get name() {
                    return void 0 === this.column.headerTemplate ? this.column.name : void 0
                }
                get minWidth() {
                    return this.column.minWidth
                }
                get maxWidth() {
                    return this.column.maxWidth
                }
                get width() {
                    return this.column.width
                }
                get isCheckboxable() {
                    return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === m.checkbox
                }
                onContextmenu(e) {
                    this.columnContextmenu.emit({
                        event: e,
                        column: this.column
                    })
                }
                ngOnInit() {
                    this.sortClass = this.calcSortClass(this.sortDir)
                }
                calcSortDir(e) {
                    if (e && this.column) {
                        const o = e.find(i=>i.prop === this.column.prop);
                        if (o)
                            return o.dir
                    }
                }
                onSort() {
                    if (!this.column.sortable)
                        return;
                    const e = function zt(n, r) {
                        return n === H.single ? r === f.asc ? f.desc : f.asc : r ? r === f.asc ? f.desc : void 0 : f.asc
                    }(this.sortType, this.sortDir);
                    this.sort.emit({
                        column: this.column,
                        prevValue: this.sortDir,
                        newValue: e
                    })
                }
                calcSortClass(e) {
                    if (this.cellContext.column.sortable)
                        return e === f.asc ? `sort-btn sort-asc ${this.sortAscendingIcon}` : e === f.desc ? `sort-btn sort-desc ${this.sortDescendingIcon}` : `sort-btn ${this.sortUnsetIcon}`
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-header-cell"]],
                hostAttrs: [1, "datatable-header-cell"],
                hostVars: 11,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("contextmenu", function(s) {
                        return o.onContextmenu(s)
                    }),
                    2 & e && (t.uIk("title", o.name),
                    t.Tol(o.columnCssClasses),
                    t.Udp("height", o.headerHeight, "px")("min-width", o.minWidth, "px")("max-width", o.maxWidth, "px")("width", o.width, "px"))
                },
                inputs: {
                    sortType: "sortType",
                    sortAscendingIcon: "sortAscendingIcon",
                    sortDescendingIcon: "sortDescendingIcon",
                    sortUnsetIcon: "sortUnsetIcon",
                    isTarget: "isTarget",
                    targetMarkerTemplate: "targetMarkerTemplate",
                    targetMarkerContext: "targetMarkerContext",
                    allRowsSelected: "allRowsSelected",
                    selectionType: "selectionType",
                    column: "column",
                    headerHeight: "headerHeight",
                    sorts: "sorts"
                },
                outputs: {
                    sort: "sort",
                    select: "select",
                    columnContextmenu: "columnContextmenu"
                },
                decls: 6,
                vars: 6,
                consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, Xe, 1, 2, null, 1),
                    t.YNc(2, Qe, 2, 1, "label", 2),
                    t.YNc(3, Je, 2, 1, "span", 3),
                    t.YNc(4, Ze, 1, 2, null, 1),
                    t.TgZ(5, "span", 4),
                    t.NdJ("click", function() {
                        return o.onSort()
                    }),
                    t.qZA()()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", o.isTarget),
                    t.xp6(1),
                    t.Q6J("ngIf", o.isCheckboxable),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.column.headerTemplate),
                    t.xp6(1),
                    t.Q6J("ngIf", o.column.headerTemplate),
                    t.xp6(1),
                    t.Tol(o.sortClass))
                },
                dependencies: [p.O5, p.tP],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , ie = (()=>{
            class n {
                constructor(e) {
                    this.cd = e,
                    this.sort = new t.vpe,
                    this.reorder = new t.vpe,
                    this.resize = new t.vpe,
                    this.select = new t.vpe,
                    this.columnContextmenu = new t.vpe(!1),
                    this._columnGroupWidths = {
                        total: 100
                    },
                    this._styleByGroup = {
                        left: {},
                        center: {},
                        right: {}
                    },
                    this.destroyed = !1
                }
                set innerWidth(e) {
                    this._innerWidth = e,
                    setTimeout(()=>{
                        if (this._columns) {
                            const o = x(this._columns);
                            this._columnGroupWidths = I(o, this._columns),
                            this.setStylesByGroup()
                        }
                    }
                    )
                }
                get innerWidth() {
                    return this._innerWidth
                }
                set headerHeight(e) {
                    this._headerHeight = "auto" !== e ? `${e}px` : e
                }
                get headerHeight() {
                    return this._headerHeight
                }
                set columns(e) {
                    this._columns = e;
                    const o = x(e);
                    this._columnsByPin = j(e),
                    setTimeout(()=>{
                        this._columnGroupWidths = I(o, e),
                        this.setStylesByGroup()
                    }
                    )
                }
                get columns() {
                    return this._columns
                }
                set offsetX(e) {
                    this._offsetX = e,
                    this.setStylesByGroup()
                }
                get offsetX() {
                    return this._offsetX
                }
                ngOnDestroy() {
                    this.destroyed = !0
                }
                onLongPressStart({event: e, model: o}) {
                    o.dragging = !0,
                    this.dragEventTarget = e
                }
                onLongPressEnd({event: e, model: o}) {
                    this.dragEventTarget = e,
                    setTimeout(()=>{
                        const i = this._columns.find(s=>s.$$id === o.$$id);
                        i && (i.dragging = !1)
                    }
                    , 5)
                }
                get headerWidth() {
                    return this.scrollbarH ? this.innerWidth + "px" : "100%"
                }
                trackByGroups(e, o) {
                    return o.type
                }
                columnTrackingFn(e, o) {
                    return o.$$id
                }
                onColumnResized(e, o) {
                    e <= o.minWidth ? e = o.minWidth : e >= o.maxWidth && (e = o.maxWidth),
                    this.resize.emit({
                        column: o,
                        prevValue: o.width,
                        newValue: e
                    })
                }
                onColumnReordered({prevIndex: e, newIndex: o, model: i}) {
                    const s = this.getColumn(o);
                    s.isTarget = !1,
                    s.targetMarkerContext = void 0,
                    this.reorder.emit({
                        column: i,
                        prevValue: e,
                        newValue: o
                    })
                }
                onTargetChanged({prevIndex: e, newIndex: o, initialIndex: i}) {
                    if (e || 0 === e) {
                        const s = this.getColumn(e);
                        s.isTarget = !1,
                        s.targetMarkerContext = void 0
                    }
                    if (o || 0 === o) {
                        const s = this.getColumn(o);
                        s.isTarget = !0,
                        i !== o && (s.targetMarkerContext = {
                            class: "targetMarker ".concat(i > o ? "dragFromRight" : "dragFromLeft")
                        })
                    }
                }
                getColumn(e) {
                    const o = this._columnsByPin[0].columns.length;
                    if (e < o)
                        return this._columnsByPin[0].columns[e];
                    const i = this._columnsByPin[1].columns.length;
                    return e < o + i ? this._columnsByPin[1].columns[e - o] : this._columnsByPin[2].columns[e - o - i]
                }
                onSort({column: e, prevValue: o, newValue: i}) {
                    if (e.dragging)
                        return;
                    const s = this.calcNewSorts(e, o, i);
                    this.sort.emit({
                        sorts: s,
                        column: e,
                        prevValue: o,
                        newValue: i
                    })
                }
                calcNewSorts(e, o, i) {
                    let s = 0;
                    this.sorts || (this.sorts = []);
                    const a = this.sorts.map((l,c)=>((l = {
                        ...l
                    }).prop === e.prop && (s = c),
                    l));
                    return void 0 === i ? a.splice(s, 1) : o ? a[s].dir = i : (this.sortType === H.single && a.splice(0, this.sorts.length),
                    a.push({
                        dir: i,
                        prop: e.prop
                    })),
                    a
                }
                setStylesByGroup() {
                    this._styleByGroup.left = this.calcStylesByGroup("left"),
                    this._styleByGroup.center = this.calcStylesByGroup("center"),
                    this._styleByGroup.right = this.calcStylesByGroup("right"),
                    this.destroyed || this.cd.detectChanges()
                }
                calcStylesByGroup(e) {
                    const o = this._columnGroupWidths
                      , s = {
                        width: `${o[e]}px`
                    };
                    return "center" === e ? y(s, -1 * this.offsetX, 0) : "right" === e && y(s, -1 * (o.total - this.innerWidth), 0),
                    s
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(t.sBO))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-header"]],
                hostAttrs: [1, "datatable-header"],
                hostVars: 4,
                hostBindings: function(e, o) {
                    2 & e && t.Udp("height", o.headerHeight)("width", o.headerWidth)
                },
                inputs: {
                    sortAscendingIcon: "sortAscendingIcon",
                    sortDescendingIcon: "sortDescendingIcon",
                    sortUnsetIcon: "sortUnsetIcon",
                    scrollbarH: "scrollbarH",
                    dealsWithGroup: "dealsWithGroup",
                    targetMarkerTemplate: "targetMarkerTemplate",
                    innerWidth: "innerWidth",
                    sorts: "sorts",
                    sortType: "sortType",
                    allRowsSelected: "allRowsSelected",
                    selectionType: "selectionType",
                    reorderable: "reorderable",
                    headerHeight: "headerHeight",
                    columns: "columns",
                    offsetX: "offsetX"
                },
                outputs: {
                    sort: "sort",
                    reorder: "reorder",
                    resize: "resize",
                    select: "select",
                    columnContextmenu: "columnContextmenu"
                },
                decls: 2,
                vars: 4,
                consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.NdJ("reorder", function(s) {
                        return o.onColumnReordered(s)
                    })("targetChanged", function(s) {
                        return o.onTargetChanged(s)
                    }),
                    t.YNc(1, Ve, 2, 5, "div", 1),
                    t.qZA()),
                    2 & e && (t.Udp("width", o._columnGroupWidths.total, "px"),
                    t.xp6(1),
                    t.Q6J("ngForOf", o._columnsByPin)("ngForTrackBy", o.trackByGroups))
                },
                dependencies: [Gt, lt, p.sg, p.PC, at, ct, J],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )();
        function Ot(n, r, e) {
            e = e || {};
            let o, i, s, a = null, l = 0;
            function c() {
                l = !1 === e.leading ? 0 : +new Date,
                a = null,
                s = n.apply(o, i)
            }
            return function() {
                const d = +new Date;
                !l && !1 === e.leading && (l = d);
                const h = r - (d - l);
                return o = this,
                i = arguments,
                h <= 0 ? (clearTimeout(a),
                a = null,
                l = d,
                s = n.apply(o, i)) : !a && !1 !== e.trailing && (a = setTimeout(c, h)),
                s
            }
        }
        function Nt(n, r) {
            return function(o, i, s) {
                return {
                    configurable: !0,
                    enumerable: s.enumerable,
                    get: function() {
                        return Object.defineProperty(this, i, {
                            configurable: !0,
                            enumerable: s.enumerable,
                            value: Ot(s.value, n, r)
                        }),
                        this[i]
                    }
                }
            }
        }
        function Lt(n, r) {
            for (const e of r) {
                const o = n.indexOf(e);
                n.splice(o, 1)
            }
        }
        function se(n, r=300) {
            let e = 0;
            for (const o of n)
                e += o.width || r;
            return e
        }
        let Zt = (()=>{
            class n {
                constructor() {
                    this.change = new t.vpe,
                    this._count = 0,
                    this._page = 1,
                    this._size = 0
                }
                set size(e) {
                    this._size = e,
                    this.pages = this.calcPages()
                }
                get size() {
                    return this._size
                }
                set count(e) {
                    this._count = e,
                    this.pages = this.calcPages()
                }
                get count() {
                    return this._count
                }
                set page(e) {
                    this._page = e,
                    this.pages = this.calcPages()
                }
                get page() {
                    return this._page
                }
                get totalPages() {
                    const e = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
                    return Math.max(e || 0, 1)
                }
                canPrevious() {
                    return this.page > 1
                }
                canNext() {
                    return this.page < this.totalPages
                }
                prevPage() {
                    this.selectPage(this.page - 1)
                }
                nextPage() {
                    this.selectPage(this.page + 1)
                }
                selectPage(e) {
                    e > 0 && e <= this.totalPages && e !== this.page && (this.page = e,
                    this.change.emit({
                        page: e
                    }))
                }
                calcPages(e) {
                    const o = [];
                    let i = 1
                      , s = this.totalPages;
                    e = e || this.page,
                    5 < this.totalPages && (i = e - Math.floor(2.5),
                    s = e + Math.floor(2.5),
                    i < 1 ? (i = 1,
                    s = Math.min(i + 5 - 1, this.totalPages)) : s > this.totalPages && (i = Math.max(this.totalPages - 5 + 1, 1),
                    s = this.totalPages));
                    for (let c = i; c <= s; c++)
                        o.push({
                            number: c,
                            text: c
                        });
                    return o
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-pager"]],
                hostAttrs: [1, "datatable-pager"],
                inputs: {
                    pagerLeftArrowIcon: "pagerLeftArrowIcon",
                    pagerRightArrowIcon: "pagerRightArrowIcon",
                    pagerPreviousIcon: "pagerPreviousIcon",
                    pagerNextIcon: "pagerNextIcon",
                    size: "size",
                    count: "count",
                    page: "page"
                },
                outputs: {
                    change: "change"
                },
                decls: 14,
                vars: 21,
                consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "ul", 0)(1, "li")(2, "a", 1),
                    t.NdJ("click", function() {
                        return o.selectPage(1)
                    }),
                    t._UZ(3, "i"),
                    t.qZA()(),
                    t.TgZ(4, "li")(5, "a", 2),
                    t.NdJ("click", function() {
                        return o.prevPage()
                    }),
                    t._UZ(6, "i"),
                    t.qZA()(),
                    t.YNc(7, Ue, 3, 4, "li", 3),
                    t.TgZ(8, "li")(9, "a", 4),
                    t.NdJ("click", function() {
                        return o.nextPage()
                    }),
                    t._UZ(10, "i"),
                    t.qZA()(),
                    t.TgZ(11, "li")(12, "a", 5),
                    t.NdJ("click", function() {
                        return o.selectPage(o.totalPages)
                    }),
                    t._UZ(13, "i"),
                    t.qZA()()()),
                    2 & e && (t.xp6(1),
                    t.ekj("disabled", !o.canPrevious()),
                    t.xp6(2),
                    t.Tol(o.pagerPreviousIcon),
                    t.xp6(1),
                    t.ekj("disabled", !o.canPrevious()),
                    t.xp6(2),
                    t.Tol(o.pagerLeftArrowIcon),
                    t.xp6(1),
                    t.Q6J("ngForOf", o.pages),
                    t.xp6(1),
                    t.ekj("disabled", !o.canNext()),
                    t.xp6(2),
                    t.Tol(o.pagerRightArrowIcon),
                    t.xp6(1),
                    t.ekj("disabled", !o.canNext()),
                    t.xp6(2),
                    t.Tol(o.pagerNextIcon))
                },
                dependencies: [p.sg],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , $t = (()=>{
            class n {
                constructor() {
                    this.selectedCount = 0,
                    this.page = new t.vpe
                }
                get isVisible() {
                    return this.rowCount / this.pageSize > 1
                }
                get curPage() {
                    return this.offset + 1
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["datatable-footer"]],
                hostAttrs: [1, "datatable-footer"],
                inputs: {
                    footerHeight: "footerHeight",
                    rowCount: "rowCount",
                    pageSize: "pageSize",
                    offset: "offset",
                    pagerLeftArrowIcon: "pagerLeftArrowIcon",
                    pagerRightArrowIcon: "pagerRightArrowIcon",
                    pagerPreviousIcon: "pagerPreviousIcon",
                    pagerNextIcon: "pagerNextIcon",
                    totalMessage: "totalMessage",
                    footerTemplate: "footerTemplate",
                    selectedCount: "selectedCount",
                    selectedMessage: "selectedMessage"
                },
                outputs: {
                    page: "page"
                },
                decls: 4,
                vars: 8,
                consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.YNc(1, je, 1, 8, null, 1),
                    t.YNc(2, tt, 3, 3, "div", 2),
                    t.YNc(3, ot, 1, 8, "datatable-pager", 3),
                    t.qZA()),
                    2 & e && (t.Udp("height", o.footerHeight, "px"),
                    t.Q6J("ngClass", t.VKq(6, nt, o.selectedMessage)),
                    t.xp6(1),
                    t.Q6J("ngIf", o.footerTemplate),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.footerTemplate),
                    t.xp6(1),
                    t.Q6J("ngIf", !o.footerTemplate))
                },
                dependencies: [Zt, p.mk, p.O5, p.tP],
                encapsulation: 2,
                changeDetection: 0
            }),
            n
        }
        )()
          , Vt = (()=>{
            class n {
                constructor(e, o, i, s, a, l, c) {
                    this.scrollbarHelper = e,
                    this.dimensionsHelper = o,
                    this.cd = i,
                    this.columnChangesService = l,
                    this.configuration = c,
                    this.selected = [],
                    this.scrollbarV = !1,
                    this.scrollbarH = !1,
                    this.rowHeight = 30,
                    this.columnMode = C.standard,
                    this.headerHeight = 30,
                    this.footerHeight = 0,
                    this.externalPaging = !1,
                    this.externalSorting = !1,
                    this.loadingIndicator = !1,
                    this.reorderable = !0,
                    this.swapColumns = !0,
                    this.sortType = H.single,
                    this.sorts = [],
                    this.cssClasses = {
                        sortAscending: "datatable-icon-up",
                        sortDescending: "datatable-icon-down",
                        sortUnset: "datatable-icon-sort-unset",
                        pagerLeftArrow: "datatable-icon-left",
                        pagerRightArrow: "datatable-icon-right",
                        pagerPrevious: "datatable-icon-prev",
                        pagerNext: "datatable-icon-skip"
                    },
                    this.messages = {
                        emptyMessage: "No data to display",
                        totalMessage: "total",
                        selectedMessage: "selected"
                    },
                    this.groupExpansionDefault = !1,
                    this.selectAllRowsOnPage = !1,
                    this.virtualization = !0,
                    this.summaryRow = !1,
                    this.summaryHeight = 30,
                    this.summaryPosition = "top",
                    this.scroll = new t.vpe,
                    this.activate = new t.vpe,
                    this.select = new t.vpe,
                    this.sort = new t.vpe,
                    this.page = new t.vpe,
                    this.reorder = new t.vpe,
                    this.resize = new t.vpe,
                    this.tableContextmenu = new t.vpe(!1),
                    this.treeAction = new t.vpe,
                    this.rowCount = 0,
                    this._offsetX = new le.X(0),
                    this._count = 0,
                    this._offset = 0,
                    this._subscriptions = [],
                    this.rowIdentity = d=>this._groupRowsBy ? d.key : d,
                    this.element = s.nativeElement,
                    this.rowDiffer = a.find({}).create(),
                    this.configuration && this.configuration.messages && (this.messages = {
                        ...this.configuration.messages
                    })
                }
                set rows(e) {
                    this._rows = e,
                    e && (this._internalRows = [...e]),
                    this.externalSorting || this.sortInternalRows(),
                    this._internalRows = W(this._internalRows, D(this.treeFromRelation), D(this.treeToRelation)),
                    this.recalculate(),
                    this._rows && this._groupRowsBy && (this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy)),
                    this.cd.markForCheck()
                }
                get rows() {
                    return this._rows
                }
                set groupRowsBy(e) {
                    e && (this._groupRowsBy = e,
                    this._rows && this._groupRowsBy && (this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy)))
                }
                get groupRowsBy() {
                    return this._groupRowsBy
                }
                set columns(e) {
                    e && (this._internalColumns = [...e],
                    $(this._internalColumns),
                    this.recalculateColumns()),
                    this._columns = e
                }
                get columns() {
                    return this._columns
                }
                set limit(e) {
                    this._limit = e,
                    this.recalculate()
                }
                get limit() {
                    return this._limit
                }
                set count(e) {
                    this._count = e,
                    this.recalculate()
                }
                get count() {
                    return this._count
                }
                set offset(e) {
                    this._offset = e
                }
                get offset() {
                    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0)
                }
                get isFixedHeader() {
                    const e = this.headerHeight;
                    return "string" != typeof e || "auto" !== e
                }
                get isFixedRow() {
                    return "auto" !== this.rowHeight
                }
                get isVertScroll() {
                    return this.scrollbarV
                }
                get isVirtualized() {
                    return this.virtualization
                }
                get isHorScroll() {
                    return this.scrollbarH
                }
                get isSelectable() {
                    return void 0 !== this.selectionType
                }
                get isCheckboxSelection() {
                    return this.selectionType === m.checkbox
                }
                get isCellSelection() {
                    return this.selectionType === m.cell
                }
                get isSingleSelection() {
                    return this.selectionType === m.single
                }
                get isMultiSelection() {
                    return this.selectionType === m.multi
                }
                get isMultiClickSelection() {
                    return this.selectionType === m.multiClick
                }
                set columnTemplates(e) {
                    this._columnTemplates = e,
                    this.translateColumns(e)
                }
                get columnTemplates() {
                    return this._columnTemplates
                }
                get allRowsSelected() {
                    let e = this.rows && this.selected && this.selected.length === this.rows.length;
                    if (this.bodyComponent && this.selectAllRowsOnPage) {
                        const o = this.bodyComponent.indexes;
                        e = this.selected.length === o.last - o.first
                    }
                    return this.selected && this.rows && 0 !== this.rows.length && e
                }
                ngOnInit() {
                    this.recalculate()
                }
                ngAfterViewInit() {
                    this.externalSorting || this.sortInternalRows(),
                    !(typeof requestAnimationFrame > "u") && requestAnimationFrame(()=>{
                        this.recalculate(),
                        this.externalPaging && this.scrollbarV && this.page.emit({
                            count: this.count,
                            pageSize: this.pageSize,
                            limit: this.limit,
                            offset: 0
                        })
                    }
                    )
                }
                ngAfterContentInit() {
                    this.columnTemplates.changes.subscribe(e=>this.translateColumns(e)),
                    this.listenForColumnInputChanges()
                }
                translateColumns(e) {
                    if (e) {
                        const o = e.toArray();
                        o.length && (this._internalColumns = function _t(n) {
                            const r = [];
                            for (const e of n) {
                                const o = {}
                                  , i = Object.getOwnPropertyNames(e);
                                for (const s of i)
                                    o[s] = e[s];
                                e.headerTemplate && (o.headerTemplate = e.headerTemplate),
                                e.cellTemplate && (o.cellTemplate = e.cellTemplate),
                                e.summaryFunc && (o.summaryFunc = e.summaryFunc),
                                e.summaryTemplate && (o.summaryTemplate = e.summaryTemplate),
                                r.push(o)
                            }
                            return r
                        }(o),
                        $(this._internalColumns),
                        this.recalculateColumns(),
                        this.sortInternalRows(),
                        this.cd.markForCheck())
                    }
                }
                groupArrayBy(e, o) {
                    const i = new Map;
                    return e.forEach(l=>{
                        const c = l[o];
                        i.has(c) ? i.get(c).push(l) : i.set(c, [l])
                    }
                    ),
                    Array.from(i, l=>((l,c)=>({
                        key: l,
                        value: c
                    }))(l[0], l[1]))
                }
                ngDoCheck() {
                    this.rowDiffer.diff(this.rows) && (this.externalSorting ? this._internalRows = [...this.rows] : this.sortInternalRows(),
                    this._internalRows = W(this._internalRows, D(this.treeFromRelation), D(this.treeToRelation)),
                    this.recalculatePages(),
                    this.cd.markForCheck())
                }
                recalculate() {
                    this.recalculateDims(),
                    this.recalculateColumns(),
                    this.cd.markForCheck()
                }
                onWindowResize() {
                    this.recalculate()
                }
                recalculateColumns(e=this._internalColumns, o=-1, i=this.scrollbarH) {
                    if (!e)
                        return;
                    let s = this._innerWidth;
                    return this.scrollbarV && (s -= this.scrollbarHelper.width),
                    this.columnMode === C.force ? function Jt(n, r, e, o, i=300) {
                        const s = n.slice(e + 1, n.length).filter(u=>!1 !== u.canAutoResize);
                        for (const u of s)
                            u.$$oldWidth || (u.$$oldWidth = u.width);
                        let a = 0
                          , l = !1
                          , c = se(n, i)
                          , d = r - c;
                        const h = [];
                        do {
                            a = d / s.length,
                            l = c >= r;
                            for (const u of s) {
                                if (l && o)
                                    u.width = u.$$oldWidth || u.width || i;
                                else {
                                    const w = (u.width || i) + a;
                                    u.minWidth && w < u.minWidth ? (u.width = u.minWidth,
                                    h.push(u)) : u.maxWidth && w > u.maxWidth ? (u.width = u.maxWidth,
                                    h.push(u)) : u.width = w
                                }
                                u.width = Math.max(0, u.width)
                            }
                            c = se(n),
                            d = r - c,
                            Lt(s, h)
                        } while (d > 1 && 0 !== s.length)
                    }(e, s, o, i) : this.columnMode === C.flex && function Xt(n, r) {
                        const e = function xt(n, r) {
                            let e = 0;
                            for (const o of n)
                                e += r && o[r] ? o[r] : o.width;
                            return e
                        }(n)
                          , o = function Yt(n) {
                            let r = 0;
                            for (const e of n)
                                r += e.flexGrow || 0;
                            return r
                        }(n)
                          , i = x(n);
                        e !== r && function Qt(n, r, e) {
                            for (const s in n)
                                for (const a of n[s])
                                    a.canAutoResize ? a.width = 0 : (r -= a.width,
                                    e -= a.flexGrow ? a.flexGrow : 0);
                            const o = {};
                            let i = r;
                            do {
                                const s = i / e;
                                i = 0;
                                for (const a in n)
                                    for (const l of n[a])
                                        if (l.canAutoResize && !o[l.prop]) {
                                            const c = l.width + l.flexGrow * s;
                                            void 0 !== l.minWidth && c < l.minWidth ? (i += c - l.minWidth,
                                            l.width = l.minWidth,
                                            o[l.prop] = !0) : l.width = c
                                        }
                            } while (0 !== i)
                        }(i, r, o)
                    }(e, s),
                    e
                }
                recalculateDims() {
                    const e = this.dimensionsHelper.getDimensions(this.element);
                    if (this._innerWidth = Math.floor(e.width),
                    this.scrollbarV) {
                        let o = e.height;
                        this.headerHeight && (o -= this.headerHeight),
                        this.footerHeight && (o -= this.footerHeight),
                        this.bodyHeight = o
                    }
                    this.recalculatePages()
                }
                recalculatePages() {
                    this.pageSize = this.calcPageSize(),
                    this.rowCount = this.calcRowCount()
                }
                onBodyPage({offset: e}) {
                    this.externalPaging && !this.virtualization || (this.offset = e,
                    this.page.emit({
                        count: this.count,
                        pageSize: this.pageSize,
                        limit: this.limit,
                        offset: this.offset
                    }))
                }
                onBodyScroll(e) {
                    this._offsetX.next(e.offsetX),
                    this.scroll.emit(e),
                    this.cd.detectChanges()
                }
                onFooterPage(e) {
                    this.offset = e.page - 1,
                    this.bodyComponent.updateOffsetY(this.offset),
                    this.page.emit({
                        count: this.count,
                        pageSize: this.pageSize,
                        limit: this.limit,
                        offset: this.offset
                    }),
                    this.selectAllRowsOnPage && (this.selected = [],
                    this.select.emit({
                        selected: this.selected
                    }))
                }
                calcPageSize(e=this.rows) {
                    if (this.scrollbarV && this.virtualization) {
                        const o = Math.ceil(this.bodyHeight / this.rowHeight);
                        return Math.max(o, 0)
                    }
                    return void 0 !== this.limit ? this.limit : e ? e.length : 0
                }
                calcRowCount(e=this.rows) {
                    return this.externalPaging ? this.count : e ? this.groupedRows ? this.groupedRows.length : null != this.treeFromRelation && null != this.treeToRelation ? this._internalRows.length : e.length : 0
                }
                onColumnContextmenu({event: e, column: o}) {
                    this.tableContextmenu.emit({
                        event: e,
                        type: S.header,
                        content: o
                    })
                }
                onRowContextmenu({event: e, row: o}) {
                    this.tableContextmenu.emit({
                        event: e,
                        type: S.body,
                        content: o
                    })
                }
                onColumnResize({column: e, newValue: o}) {
                    if (void 0 === e)
                        return;
                    let i;
                    const s = this._internalColumns.map((a,l)=>((a = {
                        ...a
                    }).$$id === e.$$id && (i = l,
                    a.width = o,
                    a.$$oldWidth = o),
                    a));
                    this.recalculateColumns(s, i),
                    this._internalColumns = s,
                    this.resize.emit({
                        column: e,
                        newValue: o
                    })
                }
                onColumnReorder({column: e, newValue: o, prevValue: i}) {
                    const s = this._internalColumns.map(a=>({
                        ...a
                    }));
                    if (this.swapColumns) {
                        const a = s[o];
                        s[o] = e,
                        s[i] = a
                    } else if (o > i) {
                        const a = s[i];
                        for (let l = i; l < o; l++)
                            s[l] = s[l + 1];
                        s[o] = a
                    } else {
                        const a = s[i];
                        for (let l = i; l > o; l--)
                            s[l] = s[l - 1];
                        s[o] = a
                    }
                    this._internalColumns = s,
                    this.reorder.emit({
                        column: e,
                        newValue: o,
                        prevValue: i
                    })
                }
                onColumnSort(e) {
                    this.selectAllRowsOnPage && (this.selected = [],
                    this.select.emit({
                        selected: this.selected
                    })),
                    this.sorts = e.sorts,
                    !1 === this.externalSorting && this.sortInternalRows(),
                    this._internalRows = W(this._internalRows, D(this.treeFromRelation), D(this.treeToRelation)),
                    this.offset = 0,
                    this.bodyComponent.updateOffsetY(this.offset),
                    this.sort.emit(e)
                }
                onHeaderSelect(e) {
                    if (this.bodyComponent && this.selectAllRowsOnPage) {
                        const o = this.bodyComponent.indexes.first
                          , i = this.bodyComponent.indexes.last
                          , s = this.selected.length === i - o;
                        this.selected = [],
                        s || this.selected.push(...this._internalRows.slice(o, i))
                    } else {
                        const o = this.selected.length === this.rows.length;
                        this.selected = [],
                        o || this.selected.push(...this.rows)
                    }
                    this.select.emit({
                        selected: this.selected
                    })
                }
                onBodySelect(e) {
                    this.select.emit(e)
                }
                onTreeAction(e) {
                    const o = e.row
                      , i = this._rows.findIndex(s=>s[this.treeToRelation] === e.row[this.treeToRelation]);
                    this.treeAction.emit({
                        row: o,
                        rowIndex: i
                    })
                }
                ngOnDestroy() {
                    this._subscriptions.forEach(e=>e.unsubscribe())
                }
                listenForColumnInputChanges() {
                    this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(()=>{
                        this.columnTemplates && this.columnTemplates.notifyOnChanges()
                    }
                    ))
                }
                sortInternalRows() {
                    this._internalRows = function Wt(n, r, e) {
                        if (!n)
                            return [];
                        if (!e || !e.length || !r)
                            return [...n];
                        const o = new Map;
                        n.forEach((l,c)=>o.set(l, c));
                        const i = [...n]
                          , s = r.reduce((l,c)=>(c.comparator && "function" == typeof c.comparator && (l[c.prop] = c.comparator),
                        l), {})
                          , a = e.map(l=>{
                            const c = l.prop;
                            return {
                                prop: c,
                                dir: l.dir,
                                valueGetter: E(c),
                                compareFn: s[c] || Et
                            }
                        }
                        );
                        return i.sort(function(l, c) {
                            for (const d of a) {
                                const {prop: h, valueGetter: _} = d
                                  , u = _(l, h)
                                  , w = _(c, h)
                                  , T = d.dir !== f.desc ? d.compareFn(u, w, l, c, d.dir) : -d.compareFn(u, w, l, c, d.dir);
                                if (0 !== T)
                                    return T
                            }
                            return o.has(l) && o.has(c) ? o.get(l) < o.get(c) ? -1 : 1 : 0
                        })
                    }(this._internalRows, this._internalColumns, this.sorts)
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)(t.Y36(A, 4),t.Y36(X, 4),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(t.aQg),t.Y36(z),t.Y36("configuration", 8))
            }
            ,
            n.\u0275cmp = t.Xpm({
                type: n,
                selectors: [["ngx-datatable"]],
                contentQueries: function(e, o, i) {
                    if (1 & e && (t.Suo(i, Ct, 5),
                    t.Suo(i, ut, 5),
                    t.Suo(i, K, 5),
                    t.Suo(i, q, 4)),
                    2 & e) {
                        let s;
                        t.iGM(s = t.CRH()) && (o.rowDetail = s.first),
                        t.iGM(s = t.CRH()) && (o.groupHeader = s.first),
                        t.iGM(s = t.CRH()) && (o.footer = s.first),
                        t.iGM(s = t.CRH()) && (o.columnTemplates = s)
                    }
                },
                viewQuery: function(e, o) {
                    if (1 & e && (t.Gf(ne, 5),
                    t.Gf(ie, 5)),
                    2 & e) {
                        let i;
                        t.iGM(i = t.CRH()) && (o.bodyComponent = i.first),
                        t.iGM(i = t.CRH()) && (o.headerComponent = i.first)
                    }
                },
                hostAttrs: [1, "ngx-datatable"],
                hostVars: 22,
                hostBindings: function(e, o) {
                    1 & e && t.NdJ("resize", function() {
                        return o.onWindowResize()
                    }, !1, t.Jf7),
                    2 & e && t.ekj("fixed-header", o.isFixedHeader)("fixed-row", o.isFixedRow)("scroll-vertical", o.isVertScroll)("virtualized", o.isVirtualized)("scroll-horz", o.isHorScroll)("selectable", o.isSelectable)("checkbox-selection", o.isCheckboxSelection)("cell-selection", o.isCellSelection)("single-selection", o.isSingleSelection)("multi-selection", o.isMultiSelection)("multi-click-selection", o.isMultiClickSelection)
                },
                inputs: {
                    targetMarkerTemplate: "targetMarkerTemplate",
                    rows: "rows",
                    groupRowsBy: "groupRowsBy",
                    groupedRows: "groupedRows",
                    columns: "columns",
                    selected: "selected",
                    scrollbarV: "scrollbarV",
                    scrollbarH: "scrollbarH",
                    rowHeight: "rowHeight",
                    columnMode: "columnMode",
                    headerHeight: "headerHeight",
                    footerHeight: "footerHeight",
                    externalPaging: "externalPaging",
                    externalSorting: "externalSorting",
                    limit: "limit",
                    count: "count",
                    offset: "offset",
                    loadingIndicator: "loadingIndicator",
                    selectionType: "selectionType",
                    reorderable: "reorderable",
                    swapColumns: "swapColumns",
                    sortType: "sortType",
                    sorts: "sorts",
                    cssClasses: "cssClasses",
                    messages: "messages",
                    rowClass: "rowClass",
                    selectCheck: "selectCheck",
                    displayCheck: "displayCheck",
                    groupExpansionDefault: "groupExpansionDefault",
                    trackByProp: "trackByProp",
                    selectAllRowsOnPage: "selectAllRowsOnPage",
                    virtualization: "virtualization",
                    treeFromRelation: "treeFromRelation",
                    treeToRelation: "treeToRelation",
                    summaryRow: "summaryRow",
                    summaryHeight: "summaryHeight",
                    summaryPosition: "summaryPosition",
                    rowIdentity: "rowIdentity"
                },
                outputs: {
                    scroll: "scroll",
                    activate: "activate",
                    select: "select",
                    sort: "sort",
                    page: "page",
                    reorder: "reorder",
                    resize: "resize",
                    tableContextmenu: "tableContextmenu",
                    treeAction: "treeAction"
                },
                decls: 5,
                vars: 34,
                consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
                template: function(e, o) {
                    1 & e && (t.TgZ(0, "div", 0),
                    t.NdJ("visible", function() {
                        return o.recalculate()
                    }),
                    t.YNc(1, it, 2, 17, "datatable-header", 1),
                    t.TgZ(2, "datatable-body", 2),
                    t.NdJ("page", function(s) {
                        return o.onBodyPage(s)
                    })("activate", function(s) {
                        return o.activate.emit(s)
                    })("rowContextmenu", function(s) {
                        return o.onRowContextmenu(s)
                    })("select", function(s) {
                        return o.onBodySelect(s)
                    })("scroll", function(s) {
                        return o.onBodyScroll(s)
                    })("treeAction", function(s) {
                        return o.onTreeAction(s)
                    }),
                    t.ALo(3, "async"),
                    t.qZA(),
                    t.YNc(4, st, 1, 12, "datatable-footer", 3),
                    t.qZA()),
                    2 & e && (t.xp6(1),
                    t.Q6J("ngIf", o.headerHeight),
                    t.xp6(1),
                    t.Q6J("groupRowsBy", o.groupRowsBy)("groupedRows", o.groupedRows)("rows", o._internalRows)("groupExpansionDefault", o.groupExpansionDefault)("scrollbarV", o.scrollbarV)("scrollbarH", o.scrollbarH)("virtualization", o.virtualization)("loadingIndicator", o.loadingIndicator)("externalPaging", o.externalPaging)("rowHeight", o.rowHeight)("rowCount", o.rowCount)("offset", o.offset)("trackByProp", o.trackByProp)("columns", o._internalColumns)("pageSize", o.pageSize)("offsetX", t.lcZ(3, 32, o._offsetX))("rowDetail", o.rowDetail)("groupHeader", o.groupHeader)("selected", o.selected)("innerWidth", o._innerWidth)("bodyHeight", o.bodyHeight)("selectionType", o.selectionType)("emptyMessage", o.messages.emptyMessage)("rowIdentity", o.rowIdentity)("rowClass", o.rowClass)("selectCheck", o.selectCheck)("displayCheck", o.displayCheck)("summaryRow", o.summaryRow)("summaryHeight", o.summaryHeight)("summaryPosition", o.summaryPosition),
                    t.xp6(2),
                    t.Q6J("ngIf", o.footerHeight))
                },
                dependencies: [ie, ne, $t, rt, p.O5, p.Ov],
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"],
                encapsulation: 2,
                changeDetection: 0
            }),
            (0,
            ce.__decorate)([Nt(5)], n.prototype, "onWindowResize", null),
            n
        }
        )()
          , Ut = (()=>{
            class n {
                static forRoot(e) {
                    return {
                        ngModule: n,
                        providers: [{
                            provide: "configuration",
                            useValue: e
                        }]
                    }
                }
            }
            return n.\u0275fac = function(e) {
                return new (e || n)
            }
            ,
            n.\u0275mod = t.oAB({
                type: n
            }),
            n.\u0275inj = t.cJS({
                providers: [A, X, z],
                imports: [[p.ez]]
            }),
            n
        }
        )();
        typeof document < "u" && !document.elementsFromPoint && (document.elementsFromPoint = function qt(n, r) {
            const e = []
              , o = [];
            let i, s, a;
            for (; (i = document.elementFromPoint(n, r)) && -1 === e.indexOf(i) && null != i; )
                e.push(i),
                o.push({
                    value: i.style.getPropertyValue("pointer-events"),
                    priority: i.style.getPropertyPriority("pointer-events")
                }),
                i.style.setProperty("pointer-events", "none", "important");
            for (s = o.length; a = o[--s]; )
                e[s].style.setProperty("pointer-events", a.value ? a.value : "", a.priority);
            return e
        }
        )
    }
}]);
