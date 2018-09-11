import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() options: IMonthYearSelectorOptions;
  @Input() year: number;
  @Output() yearChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  yearBack(): void {
    this.year--;
    this.yearChange.emit(this.year);
  }

  yearForward(): void {
    this.year++;
    this.yearChange.emit(this.year);
  }

}
