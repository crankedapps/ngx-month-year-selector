import { IMonthYearSelectorDate } from './IMonthYearSelectorDate';
export interface IMonthYearSelectorOptions {
    closeOnSelect?: boolean; // Closes dropdown on month selection
    disabledDates?: IMonthYearSelectorDate[]; // Disable individual dates
    disabledDateRanges?: [IMonthYearSelectorDate, IMonthYearSelectorDate][]; // Disable date ranges
    format?: string; // Format for year (yyyy, yy, mmmm, mmm, mm)
    resetYearOnBlur?: boolean; // Reset year view in dropdown on blur
    yearMax?: number; // Minimum year range
    yearMin?: number; // Maximum year range
    yearStart?: number; // Dialog opens to this no matter what date selected
}
