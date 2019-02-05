(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-month-year-selector', ['exports', '@angular/forms', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-month-year-selector'] = {}),global.ng.forms,global.ng.core,global.ng.common));
}(this, (function (exports,forms,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var YearComponent = /** @class */ (function () {
        function YearComponent() {
            this.yearChange = new core.EventEmitter();
            this.yearEditState = false;
        }
        Object.defineProperty(YearComponent.prototype, "year", {
            get: /**
             * @return {?}
             */ function () {
                return this._year;
            },
            set: /**
             * @param {?} change
             * @return {?}
             */ function (change) {
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
            { type: core.Component, args: [{
                        selector: 'lib-year',
                        template: "<div class=\"year-wrapper\">\n  <div class=\"year-label\" *ngIf=\"!yearEditState\" (click)=\"yearClick()\">{{ year }}</div>\n  <div class=\"year-edit\" *ngIf=\"yearEditState\">\n    <input type=\"number\" [min]=\"options.yearMin\" [max]=\"options.yearMax\" [(ngModel)]=\"yearEdit\" (blur)=\"yearBlur()\" (keypress)=\"yearKeyPress($event)\"\n     [class.year-edit--invalid]=\"!yearEditValid()\" autocomplete=\"off\" #yearEditInput>\n  </div>\n  <div class=\"year-spacer\"></div>\n  <div class=\"year-nav\" (click)=\"yearBack()\" *ngIf=\"!options.yearMin || year > options.yearMin\">\n    <span class=\"arrow arrow--left\"></span>\n  </div>\n  <div class=\"year-nav\" (click)=\"yearForward()\" *ngIf=\"!options.yearMax || year < options.yearMax\">\n    <span class=\"arrow arrow--right\"></span>\n  </div>\n</div>",
                        styles: [".year-wrapper{display:flex;align-items:center;margin:5% calc(33% / 7 - 16px)}.year-spacer{flex:1 1 auto}.year-label{position:relative;line-height:36px;padding:0 16px;font-size:14px;font-weight:500;margin:0;vertical-align:baseline;text-decoration:none;cursor:pointer}.year-nav{position:relative;width:40px;height:40px;line-height:40px;border-radius:50%;cursor:pointer}.year-nav:hover{background-color:rgba(0,0,0,.04)}.arrow{padding:0;min-width:0}.arrow.arrow--left::after,.arrow.arrow--right::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid rgba(0,0,0,.54);border-top-width:2px}.arrow.arrow--right::after{border-right-width:2px;-webkit-transform:translateX(-2px) rotate(45deg);transform:translateX(-2px) rotate(45deg)}.arrow.arrow--left::after{border-left-width:2px;-webkit-transform:translateX(2px) rotate(-45deg);transform:translateX(2px) rotate(-45deg)}.year-edit input[type=number],.year-edit input[type=number]:focus{display:inline-block;font-size:14px;width:4.5em;padding:.1em;border:1px solid #666;border-radius:3px;margin:0 16px;outline:0}.year-edit input[type=number]::-webkit-inner-spin-button,.year-edit input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.year-edit--invalid,.year-edit--invalid:focus{border:1px solid red!important;outline:0}"]
                    }] }
        ];
        /** @nocollapse */
        YearComponent.ctorParameters = function () { return []; };
        YearComponent.propDecorators = {
            options: [{ type: core.Input }],
            year: [{ type: core.Input }],
            yearChange: [{ type: core.Output }],
            yearEditInput: [{ type: core.ViewChild, args: ['yearEditInput',] }]
        };
        return YearComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    /** @type {?} */
    var monthAbbrv = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MonthComponent = /** @class */ (function () {
        function MonthComponent() {
            this.monthChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-month',
                        template: "<div class=\"months-wrapper\">\n  <div class=\"month-col\" *ngFor=\"let month of abbrv; let i = index\">\n    <div class=\"month-col__inner\" [class.month-col__inner--selected]=\"stateMonthActive(i)\" [class.month-col__inner--disabled]=\"stateMonthDisabled(i)\" (click)=\"clickMonth(i);\">\n      {{ month }}\n    </div>\n  </div>\n</div>",
                        styles: [".months-wrapper{display:flex;flex-wrap:wrap;justify-content:space-evenly;align-items:center;font-size:1em;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.month-col{flex:1 0 33%;text-align:center}.month-col__inner{border-radius:999px;padding:.5em;margin:.25em;cursor:pointer;font-size:1em;text-transform:uppercase}.month-col__inner:hover{background-color:rgba(0,0,0,.04)}.month-col__inner--selected,.month-col__inner--selected:hover{background-color:#d2d1d1;color:#fff}.month-col__inner--disabled,.month-col__inner--disabled:hover{color:#d2d1d1;background-color:transparent;cursor:default}"]
                    }] }
        ];
        /** @nocollapse */
        MonthComponent.ctorParameters = function () { return []; };
        MonthComponent.propDecorators = {
            options: [{ type: core.Input }],
            dateSelected: [{ type: core.Input }],
            year: [{ type: core.Input }],
            month: [{ type: core.Input }],
            monthChange: [{ type: core.Output }]
        };
        return MonthComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NGXMonthYear = /** @class */ (function () {
        function NGXMonthYear() {
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
        // Validate options & set defaults for any missing
        /**
         * @param {?} options
         * @return {?}
         */
        NGXMonthYear.prototype.setDefaultOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                var _this = this;
                // Validate options
                if (options.yearStart && options.yearStart < options.yearMin) {
                    throw new Error('ng-month-year-selector error: yearStart must be >= yearMin');
                }
                if (options.yearStart && options.yearStart > options.yearMax) {
                    throw new Error('ng-month-year-selector error: yearStart must be <= yearMax');
                }
                // Apply defaults
                Object.keys(this.defaultOptions).forEach(function (optKey) { return options[optKey] = options[optKey] ? options[optKey] : _this.defaultOptions[optKey]; });
                return options;
            };
        /**
         * @param {?} format
         * @param {?} date
         * @return {?}
         */
        NGXMonthYear.prototype.formatValue = /**
         * @param {?} format
         * @param {?} date
         * @return {?}
         */
            function (format, date) {
                if (!date) {
                    return '';
                }
                /** @type {?} */
                var returnStr = format;
                returnStr = returnStr.replace('yyyy', /** @type {?} */ (date.year));
                returnStr = returnStr.replace('yy', /** @type {?} */ (date.year.toString().slice(-2)));
                returnStr = returnStr.replace('mmmm', /** @type {?} */ (monthNames[date.month]));
                returnStr = returnStr.replace('mmm', /** @type {?} */ (monthAbbrv[date.month]));
                returnStr = returnStr.replace('mm', ('0' + (date.month + 1)).slice(-2));
                return returnStr;
            };
        return NGXMonthYear;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent(eRef) {
            this.eRef = eRef;
            this.selected = new core.EventEmitter();
            this.displayChange = new core.EventEmitter();
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
                    for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
            { type: core.Component, args: [{
                        selector: 'lib-dropdown',
                        template: "<div #dropdownWrapper class=\"dropdown-wrapper\" \n  [class.dropdown-wrapper--open-left]=\"openDirection == 'left'\" \n  [class.dropdown-wrapper--open-middle]=\"openDirection == 'middle'\" \n  [style.left]=\"offsetLeft ? offsetLeft + 'px' : null\"\n  *ngIf=\"display\">\n  <lib-year [options]=\"options\" [(year)]=\"year\"></lib-year>\n  <div class=\"dropdown-divider\"></div>\n  <lib-month [options]=\"options\" [dateSelected]=\"dateSelected\" [(month)]=\"month\" [year]=\"year\" (monthChange)=\"monthChange($event)\"></lib-month>\n</div>",
                        styles: [".dropdown-wrapper{position:absolute;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;padding:.5em;width:300px;margin-top:9px;font-size:1rem;z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;font-family:-apple-system,vBlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.dropdown-divider{border-top:1px solid rgba(0,0,0,.12);margin-bottom:10px}@media (max-width:575.98px){.dropdown-wrapper{left:0!important;width:100%}}"]
                    }] }
        ];
        /** @nocollapse */
        DropdownComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        DropdownComponent.propDecorators = {
            options: [{ type: core.Input }],
            dateSelected: [{ type: core.Input }],
            display: [{ type: core.Input }],
            selected: [{ type: core.Output }],
            displayChange: [{ type: core.Output }],
            dropdownWrapper: [{ type: core.ViewChild, args: ['dropdownWrapper',] }],
            clickout: [{ type: core.HostListener, args: ['document:click', ['$event'],] }]
        };
        return DropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MonthyearselectorDirective = /** @class */ (function () {
        function MonthyearselectorDirective(el, renderer, document, viewContainerRef, factoryResolver) {
            this.el = el;
            this.renderer = renderer;
            this.document = document;
            this.dateSelected = new core.EventEmitter();
            this.ngxMonthYear = new NGXMonthYear();
            this.viewContainerRef = viewContainerRef;
            this.factoryResolver = factoryResolver;
        }
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // add dropdown component to DOM
                this.componentRef = this.addDynamicComponent(this.ngxMonthYearSelector ? this.ngxMonthYearSelector : {});
                // subscribe to date selection from dropdown component
                this.subDateSelected = this.componentRef.instance.selected.subscribe(function (val) {
                    // update input value
                    // update input value
                    _this.selectedDate = val;
                    _this.updateValue();
                });
            };
        // Listen to @Input changes
        /**
         * @param {?} changes
         * @return {?}
         */
        MonthyearselectorDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                for (var propName in changes) {
                    if (propName === 'ngxMonthYearSelector') {
                        // If options updated, update input value
                        this.updateValue();
                    }
                }
            };
        // click event
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.onClick = /**
         * @return {?}
         */
            function () {
                this.componentRef.instance.dateSelected = this.selectedDate;
                this.componentRef.instance.display = !this.componentRef.instance.display;
                if (this.componentRef.instance.display) {
                    this.componentRef.instance.onDisplayEnabled();
                }
                else {
                    this.componentRef.instance.onDisplayDisabled();
                }
            };
        // Window resize event
        /**
         * @param {?} event
         * @return {?}
         */
        MonthyearselectorDirective.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.componentRef.instance.offsetLeft = this.el.nativeElement.offsetLeft; // readjust offset
            };
        // On input changed event
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.onChanged = /**
         * @return {?}
         */
            function () {
                // if not clearing value and changed, reset to proper formatting
                if (this.el.nativeElement.value !== '' && this.el.nativeElement.value !== this.getFormattedValue()) {
                    this.updateValue();
                }
                // if value cleared, clear state
                if (this.el.nativeElement.value === '') {
                    this.selectedDate = null;
                    this.componentRef.instance.clearState();
                }
            };
        // Adds dropdown component to DOM
        /**
         * @param {?=} options
         * @return {?}
         */
        MonthyearselectorDirective.prototype.addDynamicComponent = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                console.log('addDynamicComponent', options);
                /** @type {?} */
                var factory = this.factoryResolver.resolveComponentFactory(DropdownComponent);
                /** @type {?} */
                var component = factory.create(this.viewContainerRef.parentInjector);
                // Setup component
                if (options) {
                    component.instance.options = options;
                } // set component options
                component.instance.offsetLeft = this.el.nativeElement.offsetLeft; // adjust X offset in view
                // Inject in DOM
                this.viewContainerRef.insert(component.hostView);
                return component;
            };
        // Update value with latest selected date
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.updateValue = /**
         * @return {?}
         */
            function () {
                this.renderer.setProperty(this.el.nativeElement, 'value', this.getFormattedValue());
                this.el.nativeElement.dispatchEvent(new Event('input'));
                this.dateSelected.emit(this.selectedDate);
            };
        // Get formatted date value
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.getFormattedValue = /**
         * @return {?}
         */
            function () {
                return this.ngxMonthYear.formatValue(this.ngxMonthYearSelector && this.ngxMonthYearSelector.format ? this.ngxMonthYearSelector.format : this.ngxMonthYear.defaultOptions.format, this.selectedDate);
            };
        /**
         * @return {?}
         */
        MonthyearselectorDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // Clean up subscriptions
                if (this.subDateSelected) {
                    this.subDateSelected.unsubscribe();
                }
            };
        MonthyearselectorDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[ngxMonthYearSelector]'
                    },] }
        ];
        /** @nocollapse */
        MonthyearselectorDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.ViewContainerRef,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.ComponentFactoryResolver,] }] }
            ];
        };
        MonthyearselectorDirective.propDecorators = {
            ngxMonthYearSelector: [{ type: core.Input, args: ['ngxMonthYearSelector',] }],
            dateSelected: [{ type: core.Output, args: ['dateSelected',] }],
            onClick: [{ type: core.HostListener, args: ['click',] }],
            onResize: [{ type: core.HostListener, args: ['window:resize', ['$event'],] }],
            onChanged: [{ type: core.HostListener, args: ['keyup',] }]
        };
        return MonthyearselectorDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgxMonthYearSelectorModule = /** @class */ (function () {
        function NgxMonthYearSelectorModule() {
        }
        NgxMonthYearSelectorModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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
        return NgxMonthYearSelectorModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // Models

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgxMonthYearSelectorModule = NgxMonthYearSelectorModule;
    exports.ɵc = DropdownComponent;
    exports.ɵb = MonthComponent;
    exports.ɵa = YearComponent;
    exports.ɵd = MonthyearselectorDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-month-year-selector.umd.js.map