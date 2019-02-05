/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { monthNames, monthAbbrv } from './lang/en.lang';
export class NGXMonthYear {
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
if (false) {
    /** @type {?} */
    NGXMonthYear.prototype.defaultOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkdYTW9udGhZZWFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvTkdYTW9udGhZZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE1BQU07Ozs4QkFHd0M7WUFDMUMsYUFBYSxFQUFFLElBQUk7WUFDbkIsYUFBYSxFQUFFLEVBQUU7WUFDakIsa0JBQWtCLEVBQUUsRUFBRTtZQUN0QixNQUFNLEVBQUUsU0FBUztZQUNqQixlQUFlLEVBQUUsSUFBSTtZQUNyQixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLElBQUk7U0FDaEI7Ozs7OztJQUdELGlCQUFpQixDQUFDLE9BQWtDOztRQUVsRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztTQUMvRTtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDNUQsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1NBQy9FOztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RJLE9BQU8sT0FBTyxDQUFDO0tBQ2hCOzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBYyxFQUFFLElBQTRCO1FBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLEVBQUUsQ0FBQztTQUFFOztRQUN6QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxvQkFBTyxJQUFJLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDdEQsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDbkUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxvQkFBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7UUFDbEUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsT0FBTyxTQUFTLENBQUM7S0FDbEI7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9JTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zJztcclxuaW1wb3J0IHsgSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSB9IGZyb20gJy4vbW9kZWxzL0lNb250aFllYXJTZWxlY3RvckRhdGUnO1xyXG5pbXBvcnQgeyBtb250aE5hbWVzLCBtb250aEFiYnJ2IH0gZnJvbSAnLi9sYW5nL2VuLmxhbmcnO1xyXG5cclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIE5HWE1vbnRoWWVhciB7XHJcblxyXG4gIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgZGVmYXVsdE9wdGlvbnM6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMgPSB7XHJcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxyXG4gICAgZGlzYWJsZWREYXRlczogW10sXHJcbiAgICBkaXNhYmxlZERhdGVSYW5nZXM6IFtdLFxyXG4gICAgZm9ybWF0OiAneXl5eS1tbScsXHJcbiAgICByZXNldFllYXJPbkJsdXI6IHRydWUsXHJcbiAgICB5ZWFyTWluOiBudWxsLFxyXG4gICAgeWVhck1heDogbnVsbCxcclxuICAgIHllYXJTdGFydDogbnVsbFxyXG4gIH07XHJcblxyXG4gIC8vIFZhbGlkYXRlIG9wdGlvbnMgJiBzZXQgZGVmYXVsdHMgZm9yIGFueSBtaXNzaW5nXHJcbiAgc2V0RGVmYXVsdE9wdGlvbnMob3B0aW9uczogSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyk6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnMge1xyXG4gICAgLy8gVmFsaWRhdGUgb3B0aW9uc1xyXG4gICAgaWYgKG9wdGlvbnMueWVhclN0YXJ0ICYmIG9wdGlvbnMueWVhclN0YXJ0IDwgb3B0aW9ucy55ZWFyTWluKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmctbW9udGgteWVhci1zZWxlY3RvciBlcnJvcjogeWVhclN0YXJ0IG11c3QgYmUgPj0geWVhck1pbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMueWVhclN0YXJ0ICYmIG9wdGlvbnMueWVhclN0YXJ0ID4gb3B0aW9ucy55ZWFyTWF4KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmctbW9udGgteWVhci1zZWxlY3RvciBlcnJvcjogeWVhclN0YXJ0IG11c3QgYmUgPD0geWVhck1heCcpO1xyXG4gICAgfVxyXG4gICAgLy8gQXBwbHkgZGVmYXVsdHNcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdE9wdGlvbnMpLmZvckVhY2gob3B0S2V5ID0+IG9wdGlvbnNbb3B0S2V5XSA9IG9wdGlvbnNbb3B0S2V5XSA/IG9wdGlvbnNbb3B0S2V5XSA6IHRoaXMuZGVmYXVsdE9wdGlvbnNbb3B0S2V5XSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIGZvcm1hdFZhbHVlKGZvcm1hdDogc3RyaW5nLCBkYXRlOiBJTW9udGhZZWFyU2VsZWN0b3JEYXRlKTogc3RyaW5nIHtcclxuICAgIGlmICghZGF0ZSkgeyByZXR1cm4gJyc7IH1cclxuICAgIGxldCByZXR1cm5TdHIgPSBmb3JtYXQ7XHJcbiAgICByZXR1cm5TdHIgPSByZXR1cm5TdHIucmVwbGFjZSgneXl5eScsIDxhbnk+ZGF0ZS55ZWFyKTtcclxuICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKCd5eScsIDxhbnk+ZGF0ZS55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpKTtcclxuICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKCdtbW1tJywgPGFueT5tb250aE5hbWVzW2RhdGUubW9udGhdKTtcclxuICAgIHJldHVyblN0ciA9IHJldHVyblN0ci5yZXBsYWNlKCdtbW0nLCA8YW55Pm1vbnRoQWJicnZbZGF0ZS5tb250aF0pO1xyXG4gICAgcmV0dXJuU3RyID0gcmV0dXJuU3RyLnJlcGxhY2UoJ21tJywgKCcwJyArIChkYXRlLm1vbnRoICsgMSkpLnNsaWNlKC0yKSk7XHJcbiAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG4gIH1cclxuXHJcbn1cclxuIl19