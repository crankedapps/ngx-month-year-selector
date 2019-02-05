import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMonthYearSelectorDate } from '../../../models/IMonthYearSelectorDate';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';
import { monthAbbrv } from '../../../lang/en.lang';

@Component({
  selector: 'lib-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.sass']
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
  ngOnInit() { }

  // Month click event
  clickMonth(idx: number): void {
    if (this.stateMonthDisabled(idx)) { return; }
    this.month = idx;
    this.monthChange.emit(this.month);
  }

  // Month active state
  stateMonthActive(i: number): boolean {
    return this.dateSelected && this.dateSelected.year === this.year && this.month === i;
  }

  // Month disabled state
  stateMonthDisabled(i: number): boolean {
    const disabledRanges = this.options.disabledDateRanges && this.options.disabledDateRanges.filter((range) => {
      const startDate = new Date(range[0].year, range[0].month, 1);
      const endDate = new Date(range[1].year, range[1].month, 1);
      const viewDate = new Date(this.year, i, 1);
      return viewDate >= startDate && viewDate <= endDate;
    }).length > 0;
    const disabledIndividual = this.options.disabledDates && this.options.disabledDates.filter(date => date.year === this.year && date.month === i).length > 0;
    return (disabledRanges || disabledIndividual);
  }
}
