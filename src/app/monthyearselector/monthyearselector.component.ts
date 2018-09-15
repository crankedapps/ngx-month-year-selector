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
  // @Output() change = new EventEmitter();
  @Input() options: IMonthYearSelectorOptions;
  dropdownToggled: boolean = false;
  dateSelected: IMonthYearSelectorDate;

  constructor() { }

  // Init
  ngOnInit() {
    // Setup options
    this.optionsSetup();
    // If no date selected, select today's date
    if (!this.dateSelected) {
      this.dateSelected = {
        year: (new Date).getFullYear(),
        month: (new Date).getMonth()
      };
    }
    console.log('ngOnInit', this.dateSelected);
  }

  // Setup options
  optionsSetup(): void {
    // Setup defaults
    const defaultOptions: IMonthYearSelectorOptions = {
      closeOnSelect: false,
      disabled: false,
      format: 'yyyy-mm',
      yearMin: null,
      yearMax: null,
      yearStart: null
    };
    // Set options
    this.options = Object.assign(defaultOptions, this.options);
    // Validate @Input options
    if (!this.optionsValidate(this.options)) { return; }
  }

  // Validate options
  optionsValidate(options: IMonthYearSelectorOptions): boolean {
    if (options.yearStart && options.yearStart < options.yearMin) {
      throw new Error('ng-month-year-selector error: yearStart must be >= yearMin');
    }
    if (options.yearStart && options.yearStart > options.yearMax) {
      throw new Error('ng-month-year-selector error: yearStart must be <= yearMax');
    }
    return true;
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
      this.dropdownToggled = !this.dropdownToggled;
    }
    $event.preventDefault();
    $event.stopPropagation();
  }

  // Setup [ngModel] binding via ControlValueAccessor
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};
  get value(): IMonthYearSelectorDate {
    return this.dateSelected;
  };
  set value(v: IMonthYearSelectorDate) {
    if (v !== this.dateSelected) {
      this.dateSelected = v;
      this.onChangeCallback(v);
    }
  }
  // ControlValueAccessor interface methods
  writeValue(value: any) {
    if (value !== this.dateSelected) {
      this.dateSelected = value;
    }
  }
  registerOnChange(fn: any) { this.onChangeCallback = fn; }
  registerOnTouched(fn: any) { this.onTouchedCallback = fn; }
  setDisabledState(state: boolean) { this.options.disabled = state; }

}
