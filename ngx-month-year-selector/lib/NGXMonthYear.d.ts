import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from './models/IMonthYearSelectorDate';
export declare class NGXMonthYear {
    defaultOptions: IMonthYearSelectorOptions;
    setDefaultOptions(options: IMonthYearSelectorOptions): IMonthYearSelectorOptions;
    formatValue(format: string, date: IMonthYearSelectorDate): string;
}
