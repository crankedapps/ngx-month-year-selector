import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMonthYearSelectorOptions } from '../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../models/IMonthYearSelectorDate';

@Component({
  selector: 'app-monthyearselector',
  templateUrl: './monthyearselector.component.html',
  styleUrls: ['./monthyearselector.component.css']
})
export class MonthyearselectorComponent implements OnInit {
  @Output() change = new EventEmitter();
  dropDownToggled: boolean = false;
  options: IMonthYearSelectorOptions;
  dateSelected: {
    year: number;
    month: number;
  };

  constructor() {
    this.options = {
      yearMax: (new Date).getFullYear(),
      yearMin: (new Date).getFullYear() - 100,
      closeOnSelect: true
    };
  }

  ngOnInit() {
    // If no date selected, select today's date
    if (!this.dateSelected) {
      this.dateSelected = {
        year: (new Date).getFullYear(),
        month: (new Date).getMonth()
      };
    }
  }

  onDateSelected(e: IMonthYearSelectorDate): void {
    console.log('onDateSelected', e);
    this.dateSelected = e;
    this.change.emit(this.dateSelected);
  }

  textInputClick($event: Event) {
    this.dropDownToggled = !this.dropDownToggled;
    $event.preventDefault();
    $event.stopPropagation();
  }

}
