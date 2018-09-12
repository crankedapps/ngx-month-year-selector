import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMonthYearSelectorDate } from '../../../models/IMonthYearSelectorDate';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';
import { monthAbbrv } from '../../../lang.en';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  @Input() options: IMonthYearSelectorOptions;
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() year: number;
  @Input() month: number;
  @Output() monthChange = new EventEmitter();
  abbrv: string[] = monthAbbrv;

  constructor() { }

  // Init
  ngOnInit() {
  }

  // Month click event
  clickMonth(idx: number): void {
    if (this.stateMonthDisabled(idx)) { return; }
    this.month = idx;
    this.monthChange.emit(this.month);
  }

  // Month active state
  stateMonthActive(i: number): boolean {
    return this.dateSelected.year == this.year && this.month == i;
  }

  // Month disabled state
  stateMonthDisabled(i: number): boolean {
    return this.options.disabledDates.filter((date) => {
      console.log(date.year, this.year, date.month, i);
      console.log(date.year == this.year, date.month == i);
      return date.year == this.year && date.month == i;
    }).length > 0;
  }
}
