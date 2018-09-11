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
  dropDownToggled: boolean = false;
  dateSelected: {
    year: number;
    month: number;
  };

  constructor() { }

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
    if (this.options.closeOnSelect) {
      this.dropDownToggled = false;
    }
  }

  textInputClick($event: Event) {
    this.dropDownToggled = !this.dropDownToggled;
    $event.preventDefault();
    $event.stopPropagation();
  }

}
