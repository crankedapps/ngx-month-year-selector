import { OnInit, EventEmitter } from '@angular/core';
import { IMonthYearSelectorDate } from '../../../models/IMonthYearSelectorDate';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';
export declare class MonthComponent implements OnInit {
    options: IMonthYearSelectorOptions;
    dateSelected: IMonthYearSelectorDate;
    year: number;
    month: number;
    monthChange: EventEmitter<{}>;
    abbrv: string[];
    constructor();
    ngOnInit(): void;
    clickMonth(idx: number): void;
    stateMonthActive(i: number): boolean;
    stateMonthDisabled(i: number): boolean;
}
