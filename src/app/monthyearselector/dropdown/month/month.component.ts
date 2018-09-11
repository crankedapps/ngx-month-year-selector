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

  ngOnInit() {
  }

  clickMonth(idx: number): void {
    this.month = idx;
    this.monthChange.emit(this.month);
  }

  stateMonthActive(i: number): boolean {
    return this.dateSelected.year == this.year && this.month == i;
  }

}
