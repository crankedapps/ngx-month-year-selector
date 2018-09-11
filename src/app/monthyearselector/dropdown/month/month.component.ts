import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMonthYearSelectorDate } from '../../../models/IMonthYearSelectorDate';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  abbrv: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() year: number;
  @Input() month: number;
  @Output() monthChange = new EventEmitter();

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
