/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { monthAbbrv } from '../../../lang/en.lang';
var MonthComponent = /** @class */ (function () {
    function MonthComponent() {
        this.monthChange = new EventEmitter();
        this.abbrv = monthAbbrv;
    }
    // Init
    /**
     * @return {?}
     */
    MonthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    // Month click event
    /**
     * @param {?} idx
     * @return {?}
     */
    MonthComponent.prototype.clickMonth = /**
     * @param {?} idx
     * @return {?}
     */
    function (idx) {
        if (this.stateMonthDisabled(idx)) {
            return;
        }
        this.month = idx;
        this.monthChange.emit(this.month);
    };
    // Month active state
    /**
     * @param {?} i
     * @return {?}
     */
    MonthComponent.prototype.stateMonthActive = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return this.dateSelected && this.dateSelected.year === this.year && this.month === i;
    };
    // Month disabled state
    /**
     * @param {?} i
     * @return {?}
     */
    MonthComponent.prototype.stateMonthDisabled = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _this = this;
        /** @type {?} */
        var disabledRanges = this.options.disabledDateRanges && this.options.disabledDateRanges.filter(function (range) {
            /** @type {?} */
            var startDate = new Date(range[0].year, range[0].month, 1);
            /** @type {?} */
            var endDate = new Date(range[1].year, range[1].month, 1);
            /** @type {?} */
            var viewDate = new Date(_this.year, i, 1);
            return viewDate >= startDate && viewDate <= endDate;
        }).length > 0;
        /** @type {?} */
        var disabledIndividual = this.options.disabledDates && this.options.disabledDates.filter(function (date) { return date.year === _this.year && date.month === i; }).length > 0;
        return (disabledRanges || disabledIndividual);
    };
    MonthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-month',
                    template: "<div class=\"months-wrapper\">\n  <div class=\"month-col\" *ngFor=\"let month of abbrv; let i = index\">\n    <div class=\"month-col__inner\" [class.month-col__inner--selected]=\"stateMonthActive(i)\" [class.month-col__inner--disabled]=\"stateMonthDisabled(i)\" (click)=\"clickMonth(i);\">\n      {{ month }}\n    </div>\n  </div>\n</div>",
                    styles: [".months-wrapper{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:center;font-size:1em;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.month-col{flex:1 0 33%;text-align:center}.month-col__inner{border-radius:999px;padding:.5em;margin:.25em;cursor:pointer;font-size:1em;text-transform:uppercase}.month-col__inner:hover{background-color:rgba(0,0,0,.04)}.month-col__inner--selected,.month-col__inner--selected:hover{background-color:#d2d1d1;color:#fff}.month-col__inner--disabled,.month-col__inner--disabled:hover{color:#d2d1d1;background-color:transparent;cursor:default}"]
                }] }
    ];
    /** @nocollapse */
    MonthComponent.ctorParameters = function () { return []; };
    MonthComponent.propDecorators = {
        options: [{ type: Input }],
        dateSelected: [{ type: Input }],
        year: [{ type: Input }],
        month: [{ type: Input }],
        monthChange: [{ type: Output }]
    };
    return MonthComponent;
}());
export { MonthComponent };
if (false) {
    /** @type {?} */
    MonthComponent.prototype.options;
    /** @type {?} */
    MonthComponent.prototype.dateSelected;
    /** @type {?} */
    MonthComponent.prototype.year;
    /** @type {?} */
    MonthComponent.prototype.month;
    /** @type {?} */
    MonthComponent.prototype.monthChange;
    /** @type {?} */
    MonthComponent.prototype.abbrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9tb250aC9tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQWVqRDsyQkFId0IsSUFBSSxZQUFZLEVBQUU7cUJBQ3hCLFVBQVU7S0FFWDtJQUVqQixPQUFPOzs7O0lBQ1AsaUNBQVE7OztJQUFSLGVBQWM7SUFFZCxvQkFBb0I7Ozs7O0lBQ3BCLG1DQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQztJQUVELHFCQUFxQjs7Ozs7SUFDckIseUNBQWdCOzs7O0lBQWhCLFVBQWlCLENBQVM7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7S0FDdEY7SUFFRCx1QkFBdUI7Ozs7O0lBQ3ZCLDJDQUFrQjs7OztJQUFsQixVQUFtQixDQUFTO1FBQTVCLGlCQVNDOztRQVJDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxLQUFLOztZQUNyRyxJQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQzdELElBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDM0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxRQUFRLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUM7U0FDckQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1FBQ2QsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNKLE9BQU8sQ0FBQyxjQUFjLElBQUksa0JBQWtCLENBQUMsQ0FBQztLQUMvQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOFZBQXFDOztpQkFFdEM7Ozs7OzBCQUVFLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7eUJBZlQ7O1NBVWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3RvckRhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSc7XG5pbXBvcnQgeyBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0lNb250aFllYXJTZWxlY3Rvck9wdGlvbnMnO1xuaW1wb3J0IHsgbW9udGhBYmJydiB9IGZyb20gJy4uLy4uLy4uL2xhbmcvZW4ubGFuZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tb250aCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tb250aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21vbnRoLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBvcHRpb25zOiBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zO1xuICBASW5wdXQoKSBkYXRlU2VsZWN0ZWQ6IElNb250aFllYXJTZWxlY3RvckRhdGU7XG4gIEBJbnB1dCgpIHllYXI6IG51bWJlcjtcbiAgQElucHV0KCkgbW9udGg6IG51bWJlcjtcbiAgQE91dHB1dCgpIG1vbnRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBhYmJydjogc3RyaW5nW10gPSBtb250aEFiYnJ2O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8gSW5pdFxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIC8vIE1vbnRoIGNsaWNrIGV2ZW50XG4gIGNsaWNrTW9udGgoaWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGF0ZU1vbnRoRGlzYWJsZWQoaWR4KSkgeyByZXR1cm47IH1cbiAgICB0aGlzLm1vbnRoID0gaWR4O1xuICAgIHRoaXMubW9udGhDaGFuZ2UuZW1pdCh0aGlzLm1vbnRoKTtcbiAgfVxuXG4gIC8vIE1vbnRoIGFjdGl2ZSBzdGF0ZVxuICBzdGF0ZU1vbnRoQWN0aXZlKGk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRhdGVTZWxlY3RlZCAmJiB0aGlzLmRhdGVTZWxlY3RlZC55ZWFyID09PSB0aGlzLnllYXIgJiYgdGhpcy5tb250aCA9PT0gaTtcbiAgfVxuXG4gIC8vIE1vbnRoIGRpc2FibGVkIHN0YXRlXG4gIHN0YXRlTW9udGhEaXNhYmxlZChpOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBkaXNhYmxlZFJhbmdlcyA9IHRoaXMub3B0aW9ucy5kaXNhYmxlZERhdGVSYW5nZXMgJiYgdGhpcy5vcHRpb25zLmRpc2FibGVkRGF0ZVJhbmdlcy5maWx0ZXIoKHJhbmdlKSA9PiB7XG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShyYW5nZVswXS55ZWFyLCByYW5nZVswXS5tb250aCwgMSk7XG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUocmFuZ2VbMV0ueWVhciwgcmFuZ2VbMV0ubW9udGgsIDEpO1xuICAgICAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnllYXIsIGksIDEpO1xuICAgICAgcmV0dXJuIHZpZXdEYXRlID49IHN0YXJ0RGF0ZSAmJiB2aWV3RGF0ZSA8PSBlbmREYXRlO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgY29uc3QgZGlzYWJsZWRJbmRpdmlkdWFsID0gdGhpcy5vcHRpb25zLmRpc2FibGVkRGF0ZXMgJiYgdGhpcy5vcHRpb25zLmRpc2FibGVkRGF0ZXMuZmlsdGVyKGRhdGUgPT4gZGF0ZS55ZWFyID09PSB0aGlzLnllYXIgJiYgZGF0ZS5tb250aCA9PT0gaSkubGVuZ3RoID4gMDtcbiAgICByZXR1cm4gKGRpc2FibGVkUmFuZ2VzIHx8IGRpc2FibGVkSW5kaXZpZHVhbCk7XG4gIH1cbn1cbiJdfQ==