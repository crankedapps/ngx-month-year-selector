import { Component, OnInit, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMonthYearSelectorOptions } from '../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../models/IMonthYearSelectorDate';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MonthyearselectorComponent),
    multi: true
};

@Component({
  selector: 'app-monthyearselector',
  templateUrl: './monthyearselector.component.html',
  styleUrls: ['./monthyearselector.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MonthyearselectorComponent implements OnInit, ControlValueAccessor {
  // Setup defaults
  defaultOptions: IMonthYearSelectorOptions = {
    closeOnSelect: false,
    disabled: false,
    disabledDates: [],
    disableDateRanges: [],
    forceOpenDirection: null,
    format: 'yyyy-mm',
    resetYearOnBlur: true,
    yearMin: null,
    yearMax: null,
    yearStart: null
  };
  _options: IMonthYearSelectorOptions;
  @Input()
  set options(val: IMonthYearSelectorOptions) {
    this._options = this.optionsValidate(val);
  }
  get options(): IMonthYearSelectorOptions {
    return this._options;
  }
  @Input() placeholder: string;
  @Output() change = new EventEmitter();
  dropdownToggled: boolean = false;
  dateSelected: IMonthYearSelectorDate;

  constructor() { }

  // Init
  ngOnInit() { }

  // Validate options
  optionsValidate(options: IMonthYearSelectorOptions): IMonthYearSelectorOptions {
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

  // selected event for dropdown component
  onDateSelected(e: IMonthYearSelectorDate): void {
    console.log('onDateSelected', e);
    // this.dateSelected = e;
    this.value = e;
    // this.change.emit(this.value);
    if (this.options.closeOnSelect) {
      this.dropdownToggled = false;
    }
  }

  // text input click event
  textInputClick($event: Event) {
    if (!this.options.disabled) {
      this.toggle();
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  // Toggle selector
  toggle(): void {
    this.dropdownToggled = !this.dropdownToggled;
    console.log(this.options);
  }

  // Setup [ngModel] binding via ControlValueAccessor
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};
  get value(): IMonthYearSelectorDate {
    return this.dateSelected;
  }
  set value(v: IMonthYearSelectorDate) {
    if (v !== this.dateSelected) {
      this.dateSelected = v;
      this.onChangeCallback(v);
    }
  }
  // ControlValueAccessor interface methods
  writeValue(value: any) {
    if (value && value !== this.dateSelected) {
      this.dateSelected = value;
    }
  }
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }
  setDisabledState(state: boolean) { this.options.disabled = state; }

}
