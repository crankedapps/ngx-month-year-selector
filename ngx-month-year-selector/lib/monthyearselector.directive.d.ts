import { ElementRef, OnInit, Renderer2, ComponentRef, OnDestroy, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NGXMonthYear } from './NGXMonthYear';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from './models/IMonthYearSelectorDate';
export declare class MonthyearselectorDirective implements OnInit, OnDestroy, OnChanges {
    private el;
    private renderer;
    private document;
    ngxMonthYearSelector: IMonthYearSelectorOptions;
    dateSelected: EventEmitter<IMonthYearSelectorDate>;
    componentRef: ComponentRef<DropdownComponent>;
    subDateSelected: Subscription;
    ngxMonthYear: NGXMonthYear;
    selectedDate: IMonthYearSelectorDate;
    viewContainerRef: any;
    factoryResolver: any;
    constructor(el: ElementRef, renderer: Renderer2, document: any, viewContainerRef: any, factoryResolver: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClick(): void;
    onResize(event: any): void;
    onChanged(): void;
    addDynamicComponent(options?: IMonthYearSelectorOptions): ComponentRef<DropdownComponent>;
    updateValue(): void;
    getFormattedValue(): string;
    ngOnDestroy(): void;
}
