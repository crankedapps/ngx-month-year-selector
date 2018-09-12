import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IMonthYearSelectorOptions } from '../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../models/IMonthYearSelectorDate';

@Component({
  selector: 'app-monthyearselector',
  templateUrl: './monthyearselector.component.html',
  styleUrls: ['./monthyearselector.component.css']
})
export class MonthyearselectorComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input() options: IMonthYearSelectorOptions;
  dropdownToggled: boolean = false;
  dateSelected: {
    year: number;
    month: number;
  };

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
    this.dateSelected = e;
    this.change.emit(this.dateSelected);
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

}
