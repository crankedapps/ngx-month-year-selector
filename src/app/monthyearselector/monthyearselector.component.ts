import { Component, OnInit, Output, EventEmitter, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from './models/IMonthYearSelectorDate';
import { NGXMonthYear } from './NGXMonthYear';

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
  @Input()
  set options(val: IMonthYearSelectorOptions) {
    this._options = this.ngxMonthYear.setDefaultOptions(val);
  }
  get options(): IMonthYearSelectorOptions {
    return this._options;
  }
  @Input() placeholder: string;
  @Output() change = new EventEmitter();
  dropdownToggled: boolean = false;
  dateSelected: IMonthYearSelectorDate;
  ngxMonthYear = new NGXMonthYear();
  _options: IMonthYearSelectorOptions;

  constructor() { }

  // Init
  ngOnInit() { }

  // selected event for dropdown component
  onDateSelected(e: IMonthYearSelectorDate): void {
    console.log('onDateSelected', e);
    // this.dateSelected = e;
    this.value = e;
    // this.change.emit(this.value);
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
