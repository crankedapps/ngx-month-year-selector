/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NGXMonthYear } from '../../NGXMonthYear';
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(eRef) {
        this.eRef = eRef;
        this.selected = new EventEmitter();
        this.displayChange = new EventEmitter();
        this.openDirection = 'right';
        this.ngxMonthYear = new NGXMonthYear();
    }
    // Init
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('display', this.display);
        this.options = this.ngxMonthYear.setDefaultOptions(this.options ? this.options : {});
        console.log('options', this.options);
        if (!this.dateSelected) {
            this.month = (new Date).getMonth();
            this.year = (new Date).getFullYear();
        }
    };
    // Detect when click outside of dropdown component
    /**
     * @param {?} event
     * @return {?}
     */
    DropdownComponent.prototype.clickout = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            if (this.dropdownReady) {
                this.close();
                this.displayChange.emit(false);
            }
        }
    };
    // Listen for changes to @Input values
    /**
     * @param {?} changes
     * @return {?}
     */
    DropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var e_1, _a;
        console.log('ngOnChanges');
        try {
            for (var _b = tslib_1.__values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var propName = _c.value;
                // Clear state when dropdown is toggled
                if (propName === 'display' && !changes["display"].firstChange) {
                    if (!changes["display"].currentValue) {
                        this.onDisplayDisabled();
                    }
                    else {
                        this.onDisplayEnabled();
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    // Display enabled listener
    /**
     * @return {?}
     */
    DropdownComponent.prototype.onDisplayEnabled = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('onDisplayEnabled', this.month, this.year, this.dateSelected);
        if (this.month === undefined || this.year === undefined) {
            this.clearState();
        }
        setTimeout(function () {
            _this.dropdownReady = true;
        }, 0);
    };
    // Display disabled listener
    /**
     * @return {?}
     */
    DropdownComponent.prototype.onDisplayDisabled = /**
     * @return {?}
     */
    function () {
        console.log('onDisplayDisabled');
        if (this.options.resetYearOnBlur) {
            this.clearState();
        }
    };
    // monthChange event listneer for month component
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype.monthChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.selected.emit({ year: this.year, month: this.month });
        if (this.options.closeOnSelect) {
            this.close();
        }
    };
    // Close dropdown
    /**
     * @return {?}
     */
    DropdownComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.display = false;
        this.dropdownReady = false;
    };
    // Clear month/year view state
    /**
     * @return {?}
     */
    DropdownComponent.prototype.clearState = /**
     * @return {?}
     */
    function () {
        this.month = this.dateSelected ? this.dateSelected.month : (new Date).getMonth();
        this.year = this.options.yearStart ? this.options.yearStart :
            this.dateSelected ? this.dateSelected.year : (new Date).getFullYear();
        console.log('clearState', this.month, this.year);
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-dropdown',
                    template: "<div #dropdownWrapper class=\"dropdown-wrapper\" \n  [class.dropdown-wrapper--open-left]=\"openDirection == 'left'\" \n  [class.dropdown-wrapper--open-middle]=\"openDirection == 'middle'\" \n  [style.left]=\"offsetLeft ? offsetLeft + 'px' : null\"\n  *ngIf=\"display\">\n  <lib-year [options]=\"options\" [(year)]=\"year\"></lib-year>\n  <div class=\"dropdown-divider\"></div>\n  <lib-month [options]=\"options\" [dateSelected]=\"dateSelected\" [(month)]=\"month\" [year]=\"year\" (monthChange)=\"monthChange($event)\"></lib-month>\n</div>",
                    styles: [".dropdown-wrapper{position:absolute;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;padding:.5em;width:300px;margin-top:9px;font-size:1rem;z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;font-family:-apple-system,vBlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.dropdown-divider{border-top:1px solid rgba(0,0,0,.12);margin-bottom:10px}@media (max-width:575.98px){.dropdown-wrapper{left:0!important;width:100%}}"]
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DropdownComponent.propDecorators = {
        options: [{ type: Input }],
        dateSelected: [{ type: Input }],
        display: [{ type: Input }],
        selected: [{ type: Output }],
        displayChange: [{ type: Output }],
        dropdownWrapper: [{ type: ViewChild, args: ['dropdownWrapper',] }],
        clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return DropdownComponent;
}());
export { DropdownComponent };
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.options;
    /** @type {?} */
    DropdownComponent.prototype.dateSelected;
    /** @type {?} */
    DropdownComponent.prototype.display;
    /** @type {?} */
    DropdownComponent.prototype.selected;
    /** @type {?} */
    DropdownComponent.prototype.displayChange;
    /** @type {?} */
    DropdownComponent.prototype.year;
    /** @type {?} */
    DropdownComponent.prototype.month;
    /** @type {?} */
    DropdownComponent.prototype.openDirection;
    /** @type {?} */
    DropdownComponent.prototype.dropdownWrapper;
    /** @type {?} */
    DropdownComponent.prototype.ngxMonthYear;
    /** @type {?} */
    DropdownComponent.prototype.offsetLeft;
    /** @type {?} */
    DropdownComponent.prototype.dropdownReady;
    /** @type {?} */
    DropdownComponent.prototype.allowClose;
    /** @type {?} */
    DropdownComponent.prototype.eRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBMkIsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3SSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBdUJoRCwyQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTt3QkFYZixJQUFJLFlBQVksRUFBRTs2QkFDYixJQUFJLFlBQVksRUFBRTs2QkFHQyxPQUFPOzRCQUVyQyxJQUFJLFlBQVksRUFBRTtLQUtRO0lBRXpDLE9BQU87Ozs7SUFDUCxvQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FB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QUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEQ7O2dCQTVGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHVpQkFBd0M7O2lCQUV6Qzs7OztnQkFWMEcsVUFBVTs7OzBCQVlsSCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxNQUFNO2dDQUNOLE1BQU07a0NBSU4sU0FBUyxTQUFDLGlCQUFpQjsyQkFvQjNCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7NEJBeEM1Qzs7U0FXYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyc7XG5pbXBvcnQgeyBJTW9udGhZZWFyU2VsZWN0b3JEYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0lNb250aFllYXJTZWxlY3RvckRhdGUnO1xuaW1wb3J0IHsgTkdYTW9udGhZZWFyIH0gZnJvbSAnLi4vLi4vTkdYTW9udGhZZWFyJztcbmltcG9ydCB7IF9nZXRDb21wb25lbnRIb3N0TEVsZW1lbnROb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9zcmMvcmVuZGVyMy9pbnN0cnVjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBvcHRpb25zOiBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zO1xuICBASW5wdXQoKSBkYXRlU2VsZWN0ZWQ6IElNb250aFllYXJTZWxlY3RvckRhdGU7XG4gIEBJbnB1dCgpIGRpc3BsYXk6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRpc3BsYXlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHllYXI6IG51bWJlcjtcbiAgbW9udGg6IG51bWJlcjtcbiAgb3BlbkRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdtaWRkbGUnID0gJ3JpZ2h0JztcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25XcmFwcGVyJykgZHJvcGRvd25XcmFwcGVyOiBFbGVtZW50UmVmO1xuICBuZ3hNb250aFllYXIgPSBuZXcgTkdYTW9udGhZZWFyKCk7XG4gIG9mZnNldExlZnQ6IG51bWJlcjtcbiAgZHJvcGRvd25SZWFkeTogYm9vbGVhbjtcbiAgYWxsb3dDbG9zZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIC8vIEluaXRcbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXknLCB0aGlzLmRpc3BsYXkpO1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubmd4TW9udGhZZWFyLnNldERlZmF1bHRPcHRpb25zKHRoaXMub3B0aW9ucyA/IHRoaXMub3B0aW9ucyA6IHt9KTtcbiAgICBjb25zb2xlLmxvZygnb3B0aW9ucycsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKCF0aGlzLmRhdGVTZWxlY3RlZCkge1xuICAgICAgdGhpcy5tb250aCA9IChuZXcgRGF0ZSkuZ2V0TW9udGgoKTtcbiAgICAgIHRoaXMueWVhciA9IChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZXRlY3Qgd2hlbiBjbGljayBvdXRzaWRlIG9mIGRyb3Bkb3duIGNvbXBvbmVudFxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGNsaWNrb3V0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93blJlYWR5KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIExpc3RlbiBmb3IgY2hhbmdlcyB0byBASW5wdXQgdmFsdWVzXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHtbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xuICAgIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcycpO1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlcykpIHtcbiAgICAgIC8vIENsZWFyIHN0YXRlIHdoZW4gZHJvcGRvd24gaXMgdG9nZ2xlZFxuICAgICAgaWYgKHByb3BOYW1lID09PSAnZGlzcGxheScgJiYgIWNoYW5nZXMuZGlzcGxheS5maXJzdENoYW5nZSkge1xuICAgICAgICBpZiAoIWNoYW5nZXMuZGlzcGxheS5jdXJyZW50VmFsdWUpIHsgdGhpcy5vbkRpc3BsYXlEaXNhYmxlZCgpOyB9IGVsc2UgeyB0aGlzLm9uRGlzcGxheUVuYWJsZWQoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc3BsYXkgZW5hYmxlZCBsaXN0ZW5lclxuICBvbkRpc3BsYXlFbmFibGVkKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkRpc3BsYXlFbmFibGVkJywgdGhpcy5tb250aCwgdGhpcy55ZWFyLCB0aGlzLmRhdGVTZWxlY3RlZCk7XG4gICAgaWYgKHRoaXMubW9udGggPT09IHVuZGVmaW5lZCB8fCB0aGlzLnllYXIgPT09IHVuZGVmaW5lZCkgeyB0aGlzLmNsZWFyU3RhdGUoKTsgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kcm9wZG93blJlYWR5ID0gdHJ1ZTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8vIERpc3BsYXkgZGlzYWJsZWQgbGlzdGVuZXJcbiAgb25EaXNwbGF5RGlzYWJsZWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29uRGlzcGxheURpc2FibGVkJyk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldFllYXJPbkJsdXIpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vbnRoQ2hhbmdlIGV2ZW50IGxpc3RuZWVyIGZvciBtb250aCBjb21wb25lbnRcbiAgbW9udGhDaGFuZ2UoZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IHllYXI6IHRoaXMueWVhciwgbW9udGg6IHRoaXMubW9udGggfSk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xvc2UgZHJvcGRvd25cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgdGhpcy5kcm9wZG93blJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICAvLyBDbGVhciBtb250aC95ZWFyIHZpZXcgc3RhdGVcbiAgY2xlYXJTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5kYXRlU2VsZWN0ZWQgPyB0aGlzLmRhdGVTZWxlY3RlZC5tb250aCA6IChuZXcgRGF0ZSkuZ2V0TW9udGgoKTtcbiAgICB0aGlzLnllYXIgPSB0aGlzLm9wdGlvbnMueWVhclN0YXJ0ID8gdGhpcy5vcHRpb25zLnllYXJTdGFydCA6XG4gICAgICB0aGlzLmRhdGVTZWxlY3RlZCA/IHRoaXMuZGF0ZVNlbGVjdGVkLnllYXIgOiAobmV3IERhdGUpLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc29sZS5sb2coJ2NsZWFyU3RhdGUnLCB0aGlzLm1vbnRoLCB0aGlzLnllYXIpO1xuICB9XG5cbn1cbiJdfQ==