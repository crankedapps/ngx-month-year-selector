import { OnInit, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';
export declare class YearComponent implements OnInit, OnDestroy {
    options: IMonthYearSelectorOptions;
    year: number;
    yearChange: EventEmitter<{}>;
    yearEditInput: ElementRef;
    yearEdit: number;
    yearEditState: boolean;
    _year: number;
    constructor();
    ngOnInit(): void;
    yearBack(): void;
    yearForward(): void;
    yearClick(): void;
    yearKeyPress(e: KeyboardEvent): void;
    yearBlur(): void;
    yearEditValid(): boolean;
    ngOnDestroy(): void;
}
