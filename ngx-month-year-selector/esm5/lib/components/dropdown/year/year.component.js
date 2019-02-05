/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
var YearComponent = /** @class */ (function () {
    function YearComponent() {
        this.yearChange = new EventEmitter();
        this.yearEditState = false;
    }
    Object.defineProperty(YearComponent.prototype, "year", {
        get: /**
         * @return {?}
         */
        function () {
            return this._year;
        },
        set: /**
         * @param {?} change
         * @return {?}
         */
        function (change) {
            this._year = change;
            this.yearChange.emit(change);
        },
        enumerable: true,
        configurable: true
    });
    // Init
    /**
     * @return {?}
     */
    YearComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    // Year back click event
    /**
     * @return {?}
     */
    YearComponent.prototype.yearBack = /**
     * @return {?}
     */
    function () {
        this.year--;
        this.yearChange.emit(this.year);
    };
    // Year forward click event
    /**
     * @return {?}
     */
    YearComponent.prototype.yearForward = /**
     * @return {?}
     */
    function () {
        console.log('this.options', this.options);
        this.year++;
        this.yearChange.emit(this.year);
    };
    // Year label click event
    /**
     * @return {?}
     */
    YearComponent.prototype.yearClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.yearEdit = _this.year;
            _this.yearEditState = true; // enable edit state
            setTimeout(function () { return _this.yearEditInput.nativeElement.focus(); }, 0); // set focus to input
        });
    };
    // Year edit input keypress event
    /**
     * @param {?} e
     * @return {?}
     */
    YearComponent.prototype.yearKeyPress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // Blur year input on Enter key press
        if (e.keyCode === 13) {
            this.yearEditInput.nativeElement.blur();
        }
    };
    // Year edit input blur event
    /**
     * @return {?}
     */
    YearComponent.prototype.yearBlur = /**
     * @return {?}
     */
    function () {
        console.log('yearBlur', this.yearEditValid());
        this.year = this.yearEditValid() ? this.yearEdit : this.year;
        this.yearEditState = false;
        console.log('yearBLur', this.year);
    };
    // Year input valid state
    /**
     * @return {?}
     */
    YearComponent.prototype.yearEditValid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var yearMinValid = this.options.yearMin ? this.yearEdit >= this.options.yearMin : true;
        /** @type {?} */
        var yearMaxValid = this.options.yearMax ? this.yearEdit <= this.options.yearMax : true;
        return !isNaN(this.yearEdit) && yearMinValid && yearMaxValid;
    };
    /**
     * @return {?}
     */
    YearComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('ngOnDestroy', this.yearEditState, this.yearEditValid());
        if (this.yearEditState && this.yearEditValid()) {
            this.year = this.yearEdit;
        }
    };
    YearComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-year',
                    template: "<div class=\"year-wrapper\">\n  <div class=\"year-label\" *ngIf=\"!yearEditState\" (click)=\"yearClick()\">{{ year }}</div>\n  <div class=\"year-edit\" *ngIf=\"yearEditState\">\n    <input type=\"number\" [min]=\"options.yearMin\" [max]=\"options.yearMax\" [(ngModel)]=\"yearEdit\" (blur)=\"yearBlur()\" (keypress)=\"yearKeyPress($event)\"\n     [class.year-edit--invalid]=\"!yearEditValid()\" autocomplete=\"off\" #yearEditInput>\n  </div>\n  <div class=\"year-spacer\"></div>\n  <div class=\"year-nav\" (click)=\"yearBack()\" *ngIf=\"!options.yearMin || year > options.yearMin\">\n    <span class=\"arrow arrow--left\"></span>\n  </div>\n  <div class=\"year-nav\" (click)=\"yearForward()\" *ngIf=\"!options.yearMax || year < options.yearMax\">\n    <span class=\"arrow arrow--right\"></span>\n  </div>\n</div>",
                    styles: [".year-wrapper{display:flex;align-items:center;margin:5% calc(33% / 7 - 16px)}.year-spacer{flex:1 1 auto}.year-label{position:relative;line-height:36px;padding:0 16px;font-size:14px;font-weight:500;margin:0;vertical-align:baseline;text-decoration:none;cursor:pointer}.year-nav{position:relative;width:40px;height:40px;line-height:40px;border-radius:50%;cursor:pointer}.year-nav:hover{background-color:rgba(0,0,0,.04)}.arrow{padding:0;min-width:0}.arrow.arrow--left::after,.arrow.arrow--right::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid rgba(0,0,0,.54);border-top-width:2px}.arrow.arrow--right::after{border-right-width:2px;-webkit-transform:translateX(-2px) rotate(45deg);transform:translateX(-2px) rotate(45deg)}.arrow.arrow--left::after{border-left-width:2px;-webkit-transform:translateX(2px) rotate(-45deg);transform:translateX(2px) rotate(-45deg)}.year-edit input[type=number],.year-edit input[type=number]:focus{display:inline-block;font-size:14px;width:4.5em;padding:.1em;border:1px solid #666;border-radius:3px;margin:0 16px;outline:0}.year-edit input[type=number]::-webkit-inner-spin-button,.year-edit input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.year-edit--invalid,.year-edit--invalid:focus{border:1px solid red!important;outline:0}"]
                }] }
    ];
    /** @nocollapse */
    YearComponent.ctorParameters = function () { return []; };
    YearComponent.propDecorators = {
        options: [{ type: Input }],
        year: [{ type: Input }],
        yearChange: [{ type: Output }],
        yearEditInput: [{ type: ViewChild, args: ['yearEditInput',] }]
    };
    return YearComponent;
}());
export { YearComponent };
if (false) {
    /** @type {?} */
    YearComponent.prototype.options;
    /** @type {?} */
    YearComponent.prototype.yearChange;
    /** @type {?} */
    YearComponent.prototype.yearEditInput;
    /** @type {?} */
    YearComponent.prototype.yearEdit;
    /** @type {?} */
    YearComponent.prototype.yearEditState;
    /** @type {?} */
    YearComponent.prototype._year;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbW9udGgteWVhci1zZWxlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Ryb3Bkb3duL3llYXIveWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7SUF3Qi9HOzBCQU51QixJQUFJLFlBQVksRUFBRTs2QkFHaEIsS0FBSztLQUdkO0lBZGhCLHNCQUNJLCtCQUFJOzs7O1FBSVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUEQsVUFDUyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCOzs7T0FBQTtJQVlELE9BQU87Ozs7SUFDUCxnQ0FBUTs7O0lBQVIsZUFBYTtJQUViLHdCQUF3Qjs7OztJQUN4QixnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7SUFFRCwyQkFBMkI7Ozs7SUFDM0IsbUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQztJQUVELHlCQUF5Qjs7OztJQUN6QixpQ0FBUzs7O0lBQVQ7UUFBQSxpQkFNQztRQUxDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUF4QyxDQUF3QyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztLQUNKO0lBRUQsaUNBQWlDOzs7OztJQUNqQyxvQ0FBWTs7OztJQUFaLFVBQWEsQ0FBZ0I7O1FBRTNCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekM7S0FDRjtJQUVELDZCQUE2Qjs7OztJQUM3QixnQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7SUFFRCx5QkFBeUI7Ozs7SUFDekIscUNBQWE7OztJQUFiOztRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O1FBQ3pGLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDekYsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQztLQUM5RDs7OztJQUVELG1DQUFXOzs7SUFBWDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDM0I7S0FDRjs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsdXpCQUFvQzs7aUJBRXJDOzs7OzswQkFFRSxLQUFLO3VCQUNMLEtBQUs7NkJBUUwsTUFBTTtnQ0FDTixTQUFTLFNBQUMsZUFBZTs7d0JBbkI1Qjs7U0FRYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi15ZWFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3llYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi95ZWFyLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgWWVhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgb3B0aW9uczogSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucztcbiAgQElucHV0KClcbiAgc2V0IHllYXIoY2hhbmdlOiBudW1iZXIpIHtcbiAgICB0aGlzLl95ZWFyID0gY2hhbmdlO1xuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KGNoYW5nZSk7XG4gIH1cbiAgZ2V0IHllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3llYXI7XG4gIH1cbiAgQE91dHB1dCgpIHllYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ3llYXJFZGl0SW5wdXQnKSB5ZWFyRWRpdElucHV0OiBFbGVtZW50UmVmO1xuICB5ZWFyRWRpdDogbnVtYmVyO1xuICB5ZWFyRWRpdFN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gIF95ZWFyOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIC8vIEluaXRcbiAgbmdPbkluaXQoKSB7fVxuXG4gIC8vIFllYXIgYmFjayBjbGljayBldmVudFxuICB5ZWFyQmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnllYXItLTtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh0aGlzLnllYXIpO1xuICB9XG5cbiAgLy8gWWVhciBmb3J3YXJkIGNsaWNrIGV2ZW50XG4gIHllYXJGb3J3YXJkKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLm9wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMueWVhcisrO1xuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KHRoaXMueWVhcik7XG4gIH1cblxuICAvLyBZZWFyIGxhYmVsIGNsaWNrIGV2ZW50XG4gIHllYXJDbGljaygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMueWVhckVkaXQgPSB0aGlzLnllYXI7XG4gICAgICB0aGlzLnllYXJFZGl0U3RhdGUgPSB0cnVlOyAvLyBlbmFibGUgZWRpdCBzdGF0ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnllYXJFZGl0SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpLCAwKTsgLy8gc2V0IGZvY3VzIHRvIGlucHV0XG4gICAgfSk7XG4gIH1cblxuICAvLyBZZWFyIGVkaXQgaW5wdXQga2V5cHJlc3MgZXZlbnRcbiAgeWVhcktleVByZXNzKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAvLyBCbHVyIHllYXIgaW5wdXQgb24gRW50ZXIga2V5IHByZXNzXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMueWVhckVkaXRJbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvLyBZZWFyIGVkaXQgaW5wdXQgYmx1ciBldmVudFxuICB5ZWFyQmx1cigpIHtcbiAgICBjb25zb2xlLmxvZygneWVhckJsdXInLCB0aGlzLnllYXJFZGl0VmFsaWQoKSk7XG4gICAgdGhpcy55ZWFyID0gdGhpcy55ZWFyRWRpdFZhbGlkKCkgPyB0aGlzLnllYXJFZGl0IDogdGhpcy55ZWFyO1xuICAgIHRoaXMueWVhckVkaXRTdGF0ZSA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCd5ZWFyQkx1cicsIHRoaXMueWVhcik7XG4gIH1cblxuICAvLyBZZWFyIGlucHV0IHZhbGlkIHN0YXRlXG4gIHllYXJFZGl0VmFsaWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeWVhck1pblZhbGlkID0gdGhpcy5vcHRpb25zLnllYXJNaW4gPyB0aGlzLnllYXJFZGl0ID49IHRoaXMub3B0aW9ucy55ZWFyTWluIDogdHJ1ZTtcbiAgICBjb25zdCB5ZWFyTWF4VmFsaWQgPSB0aGlzLm9wdGlvbnMueWVhck1heCA/IHRoaXMueWVhckVkaXQgPD0gdGhpcy5vcHRpb25zLnllYXJNYXggOiB0cnVlO1xuICAgIHJldHVybiAhaXNOYU4odGhpcy55ZWFyRWRpdCkgJiYgeWVhck1pblZhbGlkICYmIHllYXJNYXhWYWxpZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveScsIHRoaXMueWVhckVkaXRTdGF0ZSwgdGhpcy55ZWFyRWRpdFZhbGlkKCkpO1xuICAgIGlmICh0aGlzLnllYXJFZGl0U3RhdGUgJiYgdGhpcy55ZWFyRWRpdFZhbGlkKCkpIHtcbiAgICAgIHRoaXMueWVhciA9IHRoaXMueWVhckVkaXQ7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==