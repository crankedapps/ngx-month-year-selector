import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from './models/IMonthYearSelectorDate';
import { monthNames, monthAbbrv } from './lang/en.lang';

// @dynamic
export class NGXMonthYear {

  // Setup defaults
  defaultOptions: IMonthYearSelectorOptions = {
    closeOnSelect: true,
    disabled: false,
    disabledDates: [],
    disableDateRanges: [],
    forceOpenDirection: null,
    format: 'mmm yyyy',
    resetYearOnBlur: true,
    yearMin: null,
    yearMax: null,
    yearStart: null
  };

  // Validate options & set defaults for any missing
  setDefaultOptions(options: IMonthYearSelectorOptions): IMonthYearSelectorOptions {
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

  formatValue(format: string, date: IMonthYearSelectorDate): string {
    if (!date) { return ''; }
    let returnStr = format;
    returnStr = returnStr.replace('yyyy', <any>date.year);
    returnStr = returnStr.replace('yy', <any>date.year.toString().slice(-2));
    returnStr = returnStr.replace('mmmm', <any>monthNames[date.month]);
    returnStr = returnStr.replace('mmm', <any>monthAbbrv[date.month]);
    returnStr = returnStr.replace('mm', ('0' + (date.month + 1)).slice(-2));
    return returnStr;
  }

}
