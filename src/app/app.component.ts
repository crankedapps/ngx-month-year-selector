import { Component } from '@angular/core';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-year-selector';
  options: IMonthYearSelectorOptions = {
    disabled: false,
    yearMax: (new Date).getFullYear() + 10,
    yearMin: (new Date).getFullYear() - 10,
    //closeOnSelect: true,
    format: 'yyyy mmm' // 'yyyy-mm yy mmm mmmm'
  };

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }
}
