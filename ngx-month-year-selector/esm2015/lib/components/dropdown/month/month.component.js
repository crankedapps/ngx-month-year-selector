/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { monthAbbrv } from '../../../lang/en.lang';
export class MonthComponent {
    constructor() {
        this.monthChange = new EventEmitter();
        this.abbrv = monthAbbrv;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} idx
     * @return {?}
     */
    clickMonth(idx) {
        if (this.stateMonthDisabled(idx)) {
            return;
        }
        this.month = idx;
        this.monthChange.emit(this.month);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    stateMonthActive(i) {
        return this.dateSelected && this.dateSelected.year === this.year && this.month === i;
    }
    /**
     * @param {?} i
     * @return {?}
     */
    stateMonthDisabled(i) {
        /** @type {?} */
        const disabledRanges = this.options.disabledDateRanges && this.options.disabledDateRanges.filter((range) => {
            /** @type {?} */
            const startDate = new Date(range[0].year, range[0].month, 1);
            /** @type {?} */
            const endDate = new Date(range[1].year, range[1].month, 1);
            /** @type {?} */
            const viewDate = new Date(this.year, i, 1);
            return viewDate >= startDate && viewDate <= endDate;
        }).length > 0;
        /** @type {?} */
        const disabledIndividual = this.options.disabledDates && this.options.disabledDates.filter(date => date.year === this.year && date.month === i).length > 0;
        return (disabledRanges || disabledIndividual);
    }
}
MonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-month',
                template: "<div class=\"months-wrapper\">\n  <div class=\"month-col\" *ngFor=\"let month of abbrv; let i = index\">\n    <div class=\"month-col__inner\" [class.month-col__inner--selected]=\"stateMonthActive(i)\" [class.month-col__inner--disabled]=\"stateMonthDisabled(i)\" (click)=\"clickMonth(i);\">\n      {{ month }}\n    </div>\n  </div>\n</div>",
                styles: [".months-wrapper{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:center;font-size:1em;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.month-col{flex:1 0 33%;text-align:center}.month-col__inner{border-radius:999px;padding:.5em;margin:.25em;cursor:pointer;font-size:1em;text-transform:uppercase}.month-col__inner:hover{background-color:rgba(0,0,0,.04)}.month-col__inner--selected,.month-col__inner--selected:hover{background-color:#d2d1d1;color:#fff}.month-col__inner--disabled,.month-col__inner--disabled:hover{color:#d2d1d1;background-color:transparent;cursor:default}"]
            }] }
];
/** @nocollapse */
MonthComponent.ctorParameters = () => [];
MonthComponent.propDecorators = {
    options: [{ type: Input }],
    dateSelected: [{ type: Input }],
    year: [{ type: Input }],
    month: [{ type: Input }],
    monthChange: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9tb250aC9tb250aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT25ELE1BQU07SUFRSjsyQkFId0IsSUFBSSxZQUFZLEVBQUU7cUJBQ3hCLFVBQVU7S0FFWDs7OztJQUdqQixRQUFRLE1BQU07Ozs7O0lBR2QsVUFBVSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7OztJQUdELGdCQUFnQixDQUFDLENBQVM7UUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBR0Qsa0JBQWtCLENBQUMsQ0FBUzs7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFOztZQUN6RyxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQzdELE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDM0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTyxRQUFRLElBQUksU0FBUyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUM7U0FDckQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1FBQ2QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzNKLE9BQU8sQ0FBQyxjQUFjLElBQUksa0JBQWtCLENBQUMsQ0FBQztLQUMvQzs7O1lBeENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOFZBQXFDOzthQUV0Qzs7Ozs7c0JBRUUsS0FBSzsyQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9JTW9udGhZZWFyU2VsZWN0b3JEYXRlJztcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyc7XG5pbXBvcnQgeyBtb250aEFiYnJ2IH0gZnJvbSAnLi4vLi4vLi4vbGFuZy9lbi5sYW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW1vbnRoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21vbnRoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9udGguY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNb250aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnM7XG4gIEBJbnB1dCgpIGRhdGVTZWxlY3RlZDogSU1vbnRoWWVhclNlbGVjdG9yRGF0ZTtcbiAgQElucHV0KCkgeWVhcjogbnVtYmVyO1xuICBASW5wdXQoKSBtb250aDogbnVtYmVyO1xuICBAT3V0cHV0KCkgbW9udGhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGFiYnJ2OiBzdHJpbmdbXSA9IG1vbnRoQWJicnY7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvLyBJbml0XG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgLy8gTW9udGggY2xpY2sgZXZlbnRcbiAgY2xpY2tNb250aChpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlTW9udGhEaXNhYmxlZChpZHgpKSB7IHJldHVybjsgfVxuICAgIHRoaXMubW9udGggPSBpZHg7XG4gICAgdGhpcy5tb250aENoYW5nZS5lbWl0KHRoaXMubW9udGgpO1xuICB9XG5cbiAgLy8gTW9udGggYWN0aXZlIHN0YXRlXG4gIHN0YXRlTW9udGhBY3RpdmUoaTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0ZVNlbGVjdGVkICYmIHRoaXMuZGF0ZVNlbGVjdGVkLnllYXIgPT09IHRoaXMueWVhciAmJiB0aGlzLm1vbnRoID09PSBpO1xuICB9XG5cbiAgLy8gTW9udGggZGlzYWJsZWQgc3RhdGVcbiAgc3RhdGVNb250aERpc2FibGVkKGk6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRpc2FibGVkUmFuZ2VzID0gdGhpcy5vcHRpb25zLmRpc2FibGVkRGF0ZVJhbmdlcyAmJiB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlUmFuZ2VzLmZpbHRlcigocmFuZ2UpID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHJhbmdlWzBdLnllYXIsIHJhbmdlWzBdLm1vbnRoLCAxKTtcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZShyYW5nZVsxXS55ZWFyLCByYW5nZVsxXS5tb250aCwgMSk7XG4gICAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMueWVhciwgaSwgMSk7XG4gICAgICByZXR1cm4gdmlld0RhdGUgPj0gc3RhcnREYXRlICYmIHZpZXdEYXRlIDw9IGVuZERhdGU7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgICBjb25zdCBkaXNhYmxlZEluZGl2aWR1YWwgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcyAmJiB0aGlzLm9wdGlvbnMuZGlzYWJsZWREYXRlcy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnllYXIgPT09IHRoaXMueWVhciAmJiBkYXRlLm1vbnRoID09PSBpKS5sZW5ndGggPiAwO1xuICAgIHJldHVybiAoZGlzYWJsZWRSYW5nZXMgfHwgZGlzYWJsZWRJbmRpdmlkdWFsKTtcbiAgfVxufVxuIl19