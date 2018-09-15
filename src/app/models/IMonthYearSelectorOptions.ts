import { IMonthYearSelectorDate } from './IMonthYearSelectorDate';
export interface IMonthYearSelectorOptions {
    closeOnSelect?: boolean; // Closes dropdown on month selection
    disabled?: boolean; // Input textbox & dropdown disabled
    disabledDates?: IMonthYearSelectorDate[]; // Disable individual dates
    disableDateRanges?: [IMonthYearSelectorDate, IMonthYearSelectorDate][]; // Disable date ranges
    format?: string; // Format for year (yyyy, yy, mmmm, mmm, mm)
    yearMax?: number; // Minimum year range
    yearMin?: number; // Maximum year range
    yearStart?: number; // Dialog opens to this no matter what date selected
}
