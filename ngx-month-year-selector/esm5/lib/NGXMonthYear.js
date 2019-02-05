/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { monthNames, monthAbbrv } from './lang/en.lang';
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
export { NGXMonthYear };
if (false) {
    /** @type {?} */
    NGXMonthYear.prototype.defaultOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkdYTW9udGhZZWFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvTkdYTW9udGhZZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELElBQUE7Ozs4QkFHOEM7WUFDMUMsYUFBYSxFQUFFLElBQUk7WUFDbkIsYUFBYSxFQUFFLEVBQUU7WUFDakIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixNQUFNLEVBQUUsU0FBUztZQUNqQixlQUFlLEVBQUUsSUFBSTtZQUNyQixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLElBQUk7U0FDaEI7O0lBRUQsa0RBQWtEOzs7OztJQUNsRCx3Q0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBa0M7UUFBcEQsaUJBV0M7O1FBVEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUM1RCxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7U0FDL0U7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUMvRTs7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQWpGLENBQWlGLENBQUMsQ0FBQztRQUN0SSxPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7O0lBRUQsa0NBQVc7Ozs7O0lBQVgsVUFBWSxNQUFjLEVBQUUsSUFBNEI7UUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7O1FBQ3pCLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLG9CQUFPLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQztRQUN0RCxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN6RSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLG9CQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNuRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLG9CQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUNsRSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxPQUFPLFNBQVMsQ0FBQztLQUNsQjt1QkExQ0g7SUE0Q0MsQ0FBQTtBQXZDRCx3QkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyc7XHJcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3RvckRhdGUgfSBmcm9tICcuL21vZGVscy9JTW9udGhZZWFyU2VsZWN0b3JEYXRlJztcclxuaW1wb3J0IHsgbW9udGhOYW1lcywgbW9udGhBYmJydiB9IGZyb20gJy4vbGFuZy9lbi5sYW5nJztcclxuXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBjbGFzcyBOR1hNb250aFllYXIge1xyXG5cclxuICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gIGRlZmF1bHRPcHRpb25zOiBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zID0ge1xyXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcclxuICAgIGRpc2FibGVkRGF0ZXM6IFtdLFxyXG4gICAgZGlzYWJsZWREYXRlUmFuZ2VzOiBbXSxcclxuICAgIGZvcm1hdDogJ3l5eXktbW0nLFxyXG4gICAgcmVzZXRZZWFyT25CbHVyOiB0cnVlLFxyXG4gICAgeWVhck1pbjogbnVsbCxcclxuICAgIHllYXJNYXg6IG51bGwsXHJcbiAgICB5ZWFyU3RhcnQ6IG51bGxcclxuICB9O1xyXG5cclxuICAvLyBWYWxpZGF0ZSBvcHRpb25zICYgc2V0IGRlZmF1bHRzIGZvciBhbnkgbWlzc2luZ1xyXG4gIHNldERlZmF1bHRPcHRpb25zKG9wdGlvbnM6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMpOiBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zIHtcclxuICAgIC8vIFZhbGlkYXRlIG9wdGlvbnNcclxuICAgIGlmIChvcHRpb25zLnllYXJTdGFydCAmJiBvcHRpb25zLnllYXJTdGFydCA8IG9wdGlvbnMueWVhck1pbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25nLW1vbnRoLXllYXItc2VsZWN0b3IgZXJyb3I6IHllYXJTdGFydCBtdXN0IGJlID49IHllYXJNaW4nKTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnllYXJTdGFydCAmJiBvcHRpb25zLnllYXJTdGFydCA+IG9wdGlvbnMueWVhck1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25nLW1vbnRoLXllYXItc2VsZWN0b3IgZXJyb3I6IHllYXJTdGFydCBtdXN0IGJlIDw9IHllYXJNYXgnKTtcclxuICAgIH1cclxuICAgIC8vIEFwcGx5IGRlZmF1bHRzXHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRPcHRpb25zKS5mb3JFYWNoKG9wdEtleSA9PiBvcHRpb25zW29wdEtleV0gPSBvcHRpb25zW29wdEtleV0gPyBvcHRpb25zW29wdEtleV0gOiB0aGlzLmRlZmF1bHRPcHRpb25zW29wdEtleV0pO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZShmb3JtYXQ6IHN0cmluZywgZGF0ZTogSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIWRhdGUpIHsgcmV0dXJuICcnOyB9XHJcbiAgICBsZXQgcmV0dXJuU3RyID0gZm9ybWF0O1xyXG4gICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoJ3l5eXknLCA8YW55PmRhdGUueWVhcik7XHJcbiAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZSgneXknLCA8YW55PmRhdGUueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSk7XHJcbiAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZSgnbW1tbScsIDxhbnk+bW9udGhOYW1lc1tkYXRlLm1vbnRoXSk7XHJcbiAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZSgnbW1tJywgPGFueT5tb250aEFiYnJ2W2RhdGUubW9udGhdKTtcclxuICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKCdtbScsICgnMCcgKyAoZGF0ZS5tb250aCArIDEpKS5zbGljZSgtMikpO1xyXG4gICAgcmV0dXJuIHJldHVyblN0cjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==