import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, Directive, Renderer2, Inject, ViewContainerRef, ComponentFactoryResolver, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class YearComponent {
    constructor() {
        this.yearChange = new EventEmitter();
        this.yearEditState = false;
    }
    /**
     * @param {?} change
     * @return {?}
     */
    set year(change) {
        this._year = change;
        this.yearChange.emit(change);
    }
    /**
     * @return {?}
     */
    get year() {
        return this._year;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    yearBack() {
        this.year--;
        this.yearChange.emit(this.year);
    }
    /**
     * @return {?}
     */
    yearForward() {
        console.log('this.options', this.options);
        this.year++;
        this.yearChange.emit(this.year);
    }
    /**
     * @return {?}
     */
    yearClick() {
        setTimeout(() => {
            this.yearEdit = this.year;
            this.yearEditState = true; // enable edit state
            setTimeout(() => this.yearEditInput.nativeElement.focus(), 0); // set focus to input
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    yearKeyPress(e) {
        // Blur year input on Enter key press
        if (e.keyCode === 13) {
            this.yearEditInput.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    yearBlur() {
        console.log('yearBlur', this.yearEditValid());
        this.year = this.yearEditValid() ? this.yearEdit : this.year;
        this.yearEditState = false;
        console.log('yearBLur', this.year);
    }
    /**
     * @return {?}
     */
    yearEditValid() {
        /** @type {?} */
        const yearMinValid = this.options.yearMin ? this.yearEdit >= this.options.yearMin : true;
        /** @type {?} */
        const yearMaxValid = this.options.yearMax ? this.yearEdit <= this.options.yearMax : true;
        return !isNaN(this.yearEdit) && yearMinValid && yearMaxValid;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log('ngOnDestroy', this.yearEditState, this.yearEditValid());
        if (this.yearEditState && this.yearEditValid()) {
            this.year = this.yearEdit;
        }
    }
}
YearComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-year',
                template: "<div class=\"year-wrapper\">\n  <div class=\"year-label\" *ngIf=\"!yearEditState\" (click)=\"yearClick()\">{{ year }}</div>\n  <div class=\"year-edit\" *ngIf=\"yearEditState\">\n    <input type=\"number\" [min]=\"options.yearMin\" [max]=\"options.yearMax\" [(ngModel)]=\"yearEdit\" (blur)=\"yearBlur()\" (keypress)=\"yearKeyPress($event)\"\n     [class.year-edit--invalid]=\"!yearEditValid()\" autocomplete=\"off\" #yearEditInput>\n  </div>\n  <div class=\"year-spacer\"></div>\n  <div class=\"year-nav\" (click)=\"yearBack()\" *ngIf=\"!options.yearMin || year > options.yearMin\">\n    <span class=\"arrow arrow--left\"></span>\n  </div>\n  <div class=\"year-nav\" (click)=\"yearForward()\" *ngIf=\"!options.yearMax || year < options.yearMax\">\n    <span class=\"arrow arrow--right\"></span>\n  </div>\n</div>",
                styles: [".year-wrapper{display:flex;align-items:center;margin:5% calc(33% / 7 - 16px)}.year-spacer{flex:1 1 auto}.year-label{position:relative;line-height:36px;padding:0 16px;font-size:14px;font-weight:500;margin:0;vertical-align:baseline;text-decoration:none;cursor:pointer}.year-nav{position:relative;width:40px;height:40px;line-height:40px;border-radius:50%;cursor:pointer}.year-nav:hover{background-color:rgba(0,0,0,.04)}.arrow{padding:0;min-width:0}.arrow.arrow--left::after,.arrow.arrow--right::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid rgba(0,0,0,.54);border-top-width:2px}.arrow.arrow--right::after{border-right-width:2px;-webkit-transform:translateX(-2px) rotate(45deg);transform:translateX(-2px) rotate(45deg)}.arrow.arrow--left::after{border-left-width:2px;-webkit-transform:translateX(2px) rotate(-45deg);transform:translateX(2px) rotate(-45deg)}.year-edit input[type=number],.year-edit input[type=number]:focus{display:inline-block;font-size:14px;width:4.5em;padding:.1em;border:1px solid #666;border-radius:3px;margin:0 16px;outline:0}.year-edit input[type=number]::-webkit-inner-spin-button,.year-edit input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.year-edit--invalid,.year-edit--invalid:focus{border:1px solid red!important;outline:0}"]
            }] }
];
/** @nocollapse */
YearComponent.ctorParameters = () => [];
YearComponent.propDecorators = {
    options: [{ type: Input }],
    year: [{ type: Input }],
    yearChange: [{ type: Output }],
    yearEditInput: [{ type: ViewChild, args: ['yearEditInput',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/** @type {?} */
const monthAbbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MonthComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NGXMonthYear {
    constructor() {
        // Setup defaults
        this.defaultOptions = {
            closeOnSelect: true,
            disabledDates: [],
            disabledDateRanges: [],
            format: 'yyyy-mm',
            resetYearOnBlur: true,
            yearMin: null,
            yearMax: null,
            yearStart: null
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setDefaultOptions(options) {
        // Validate options
        if (options.yearStart && options.yearStart < options.yearMin) {
            throw new Error('ng-month-year-selector error: yearStart must be >= yearMin');
        }
        if (options.yearStart && options.yearStart > options.yearMax) {
            throw new Error('ng-month-year-selector error: yearStart must be <= yearMax');
        }
        // Apply defaults
        Object.keys(this.defaultOptions).forEach(optKey => options[optKey] = options[optKey] ? options[optKey] : this.defaultOptions[optKey]);
        return options;
    }
    /**
     * @param {?} format
     * @param {?} date
     * @return {?}
     */
    formatValue(format, date) {
        if (!date) {
            return '';
        }
        /** @type {?} */
        let returnStr = format;
        returnStr = returnStr.replace('yyyy', /** @type {?} */ (date.year));
        returnStr = returnStr.replace('yy', /** @type {?} */ (date.year.toString().slice(-2)));
        returnStr = returnStr.replace('mmmm', /** @type {?} */ (monthNames[date.month]));
        returnStr = returnStr.replace('mmm', /** @type {?} */ (monthAbbrv[date.month]));
        returnStr = returnStr.replace('mm', ('0' + (date.month + 1)).slice(-2));
        return returnStr;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DropdownComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.selected = new EventEmitter();
        this.displayChange = new EventEmitter();
        this.openDirection = 'right';
        this.ngxMonthYear = new NGXMonthYear();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('display', this.display);
        this.options = this.ngxMonthYear.setDefaultOptions(this.options ? this.options : {});
        console.log('options', this.options);
        if (!this.dateSelected) {
            this.month = (new Date).getMonth();
            this.year = (new Date).getFullYear();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            if (this.dropdownReady) {
                this.close();
                this.displayChange.emit(false);
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('ngOnChanges');
        for (const propName of Object.keys(changes)) {
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
    /**
     * @return {?}
     */
    onDisplayEnabled() {
        console.log('onDisplayEnabled', this.month, this.year, this.dateSelected);
        if (this.month === undefined || this.year === undefined) {
            this.clearState();
        }
        setTimeout(() => {
            this.dropdownReady = true;
        }, 0);
    }
    /**
     * @return {?}
     */
    onDisplayDisabled() {
        console.log('onDisplayDisabled');
        if (this.options.resetYearOnBlur) {
            this.clearState();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    monthChange(e) {
        this.selected.emit({ year: this.year, month: this.month });
        if (this.options.closeOnSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.display = false;
        this.dropdownReady = false;
    }
    /**
     * @return {?}
     */
    clearState() {
        this.month = this.dateSelected ? this.dateSelected.month : (new Date).getMonth();
        this.year = this.options.yearStart ? this.options.yearStart :
            this.dateSelected ? this.dateSelected.year : (new Date).getFullYear();
        console.log('clearState', this.month, this.year);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-dropdown',
                template: "<div #dropdownWrapper class=\"dropdown-wrapper\" \n  [class.dropdown-wrapper--open-left]=\"openDirection == 'left'\" \n  [class.dropdown-wrapper--open-middle]=\"openDirection == 'middle'\" \n  [style.left]=\"offsetLeft ? offsetLeft + 'px' : null\"\n  *ngIf=\"display\">\n  <lib-year [options]=\"options\" [(year)]=\"year\"></lib-year>\n  <div class=\"dropdown-divider\"></div>\n  <lib-month [options]=\"options\" [dateSelected]=\"dateSelected\" [(month)]=\"month\" [year]=\"year\" (monthChange)=\"monthChange($event)\"></lib-month>\n</div>",
                styles: [".dropdown-wrapper{position:absolute;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;padding:.5em;width:300px;margin-top:9px;font-size:1rem;z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;font-family:-apple-system,vBlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.dropdown-divider{border-top:1px solid rgba(0,0,0,.12);margin-bottom:10px}@media (max-width:575.98px){.dropdown-wrapper{left:0!important;width:100%}}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
DropdownComponent.propDecorators = {
    options: [{ type: Input }],
    dateSelected: [{ type: Input }],
    display: [{ type: Input }],
    selected: [{ type: Output }],
    displayChange: [{ type: Output }],
    dropdownWrapper: [{ type: ViewChild, args: ['dropdownWrapper',] }],
    clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MonthyearselectorDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} viewContainerRef
     * @param {?} factoryResolver
     */
    constructor(el, renderer, document, viewContainerRef, factoryResolver) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.dateSelected = new EventEmitter();
        this.ngxMonthYear = new NGXMonthYear();
        this.viewContainerRef = viewContainerRef;
        this.factoryResolver = factoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // add dropdown component to DOM
        this.componentRef = this.addDynamicComponent(this.ngxMonthYearSelector ? this.ngxMonthYearSelector : {});
        // subscribe to date selection from dropdown component
        this.subDateSelected = this.componentRef.instance.selected.subscribe((val) => {
            // update input value
            this.selectedDate = val;
            this.updateValue();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (propName === 'ngxMonthYearSelector') {
                // If options updated, update input value
                this.updateValue();
            }
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        this.componentRef.instance.dateSelected = this.selectedDate;
        this.componentRef.instance.display = !this.componentRef.instance.display;
        if (this.componentRef.instance.display) {
            this.componentRef.instance.onDisplayEnabled();
        }
        else {
            this.componentRef.instance.onDisplayDisabled();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.componentRef.instance.offsetLeft = this.el.nativeElement.offsetLeft; // readjust offset
    }
    /**
     * @return {?}
     */
    onChanged() {
        // if not clearing value and changed, reset to proper formatting
        if (this.el.nativeElement.value !== '' && this.el.nativeElement.value !== this.getFormattedValue()) {
            this.updateValue();
        }
        // if value cleared, clear state
        if (this.el.nativeElement.value === '') {
            this.selectedDate = null;
            this.componentRef.instance.clearState();
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    addDynamicComponent(options) {
        console.log('addDynamicComponent', options);
        /** @type {?} */
        const factory = this.factoryResolver.resolveComponentFactory(DropdownComponent);
        /** @type {?} */
        const component = factory.create(this.viewContainerRef.parentInjector);
        // Setup component
        if (options) {
            component.instance.options = options;
        } // set component options
        component.instance.offsetLeft = this.el.nativeElement.offsetLeft; // adjust X offset in view
        // Inject in DOM
        this.viewContainerRef.insert(component.hostView);
        return component;
    }
    /**
     * @return {?}
     */
    updateValue() {
        this.renderer.setProperty(this.el.nativeElement, 'value', this.getFormattedValue());
        this.el.nativeElement.dispatchEvent(new Event('input'));
        this.dateSelected.emit(this.selectedDate);
    }
    /**
     * @return {?}
     */
    getFormattedValue() {
        return this.ngxMonthYear.formatValue(this.ngxMonthYearSelector && this.ngxMonthYearSelector.format ? this.ngxMonthYearSelector.format : this.ngxMonthYear.defaultOptions.format, this.selectedDate);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Clean up subscriptions
        if (this.subDateSelected) {
            this.subDateSelected.unsubscribe();
        }
    }
}
MonthyearselectorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMonthYearSelector]'
            },] }
];
/** @nocollapse */
MonthyearselectorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ComponentFactoryResolver,] }] }
];
MonthyearselectorDirective.propDecorators = {
    ngxMonthYearSelector: [{ type: Input, args: ['ngxMonthYearSelector',] }],
    dateSelected: [{ type: Output, args: ['dateSelected',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    onChanged: [{ type: HostListener, args: ['keyup',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgxMonthYearSelectorModule {
}
NgxMonthYearSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [
                    YearComponent,
                    MonthComponent,
                    DropdownComponent,
                    MonthyearselectorDirective
                ],
                entryComponents: [
                    DropdownComponent
                ],
                exports: [
                    MonthyearselectorDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Models

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgxMonthYearSelectorModule, DropdownComponent as ɵc, MonthComponent as ɵb, YearComponent as ɵa, MonthyearselectorDirective as ɵd };

//# sourceMappingURL=ngx-month-year-selector.js.map