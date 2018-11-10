import { Component } from '@angular/core';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataModel = null;
  title = 'date-year-selector';
  options: IMonthYearSelectorOptions = {
    disabled: false,
    yearMax: (new Date).getFullYear() + 10,
    yearMin: (new Date).getFullYear() - 10,
    closeOnSelect: true,
    // yearStart: 2010,
    format: 'yyyy mmm', // 'yyyy-mm yy mmm mmmm',
    // forceOpenLeft: true,
    // forceOpenRight: true,
    disabledDates: [
      { year: 2018, month: 10 } // individual date
    ],
    /*
    disableDateRanges: [
      [{ year: 2017, month: 5 }, { year: 2019, month: 6 }]
    ]
    */
  };

  constructor(private formBuilder: FormBuilder) {}

  sampleForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    monthyear: [null, Validators.compose([Validators.required])]
  });

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }

  onSubmit() {
    console.log('onSubmit', this.sampleForm.value);
  }
}
