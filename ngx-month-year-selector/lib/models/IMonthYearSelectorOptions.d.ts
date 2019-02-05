import { IMonthYearSelectorDate } from './IMonthYearSelectorDate';
export interface IMonthYearSelectorOptions {
    closeOnSelect?: boolean;
    disabledDates?: IMonthYearSelectorDate[];
    disabledDateRanges?: [IMonthYearSelectorDate, IMonthYearSelectorDate][];
    format?: string;
    resetYearOnBlur?: boolean;
    yearMax?: number;
    yearMin?: number;
    yearStart?: number;
}
