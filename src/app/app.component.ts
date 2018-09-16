import { Component } from '@angular/core';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataModel: any = {
    month: 0,
    year: 2018
  };
  title = 'date-year-selector';
  options: IMonthYearSelectorOptions = {
    disabled: false,
    yearMax: (new Date).getFullYear() + 10,
    yearMin: (new Date).getFullYear() - 10,
    closeOnSelect: true,
    // yearStart: 2010,
    format: 'yyyy mmm', // 'yyyy-mm yy mmm mmmm',
    disabledDates: [
      { year: 2018, month: 10 } // individual date
    ],
    /*
    disableDateRanges: [
      [{ year: 2017, month: 5 }, { year: 2019, month: 6 }]
    ]
    */
  };

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }
}
