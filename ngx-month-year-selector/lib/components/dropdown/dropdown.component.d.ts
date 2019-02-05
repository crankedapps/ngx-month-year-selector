import { OnInit, EventEmitter, OnChanges, SimpleChange, ElementRef } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';
import { NGXMonthYear } from '../../NGXMonthYear';
export declare class DropdownComponent implements OnInit, OnChanges {
    private eRef;
    options: IMonthYearSelectorOptions;
    dateSelected: IMonthYearSelectorDate;
    display: boolean;
    selected: EventEmitter<{}>;
    displayChange: EventEmitter<{}>;
    year: number;
    month: number;
    openDirection: 'left' | 'right' | 'middle';
    dropdownWrapper: ElementRef;
    ngxMonthYear: NGXMonthYear;
    offsetLeft: number;
    dropdownReady: boolean;
    allowClose: boolean;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    clickout(event: any): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    onDisplayEnabled(): void;
    onDisplayDisabled(): void;
    monthChange(e: any): void;
    close(): void;
    clearState(): void;
}
