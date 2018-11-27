import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  dataModel = null;
  title = 'date-year-selector';
  options: IMonthYearSelectorOptions = {
    disabled: false,
    // yearMax: (new Date).getFullYear() + 10,
    // yearMin: (new Date).getFullYear() - 10,
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
  subMaxChange: Subscription;

  sampleForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    monthyear: [null, Validators.compose([Validators.required])],
    maxEnabled: [false],
    max: [(new Date).getFullYear() + 10]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.subMaxChange = this.sampleForm.controls.maxEnabled.valueChanges.subscribe(val => { this.updateMax(); });
  }

  updateMax() {
    console.log('updateMax', this.sampleForm.controls.maxEnabled.value);
    const maxEnabled = this.sampleForm.controls.maxEnabled.value;
    const maxVal = this.sampleForm.controls.max.value;
    if (maxEnabled && !isNaN(maxVal) && maxVal > 0) {
      this.options.yearMax = maxVal;
      console.log('this.options', this.options);
    } else {
      this.options.yearMax = null;
    }
  }

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }

  onSubmit() {
    console.log('onSubmit', this.sampleForm.value);
  }

  ngOnDestroy() {
    if (this.subMaxChange) { this.subMaxChange.unsubscribe(); }
  }
}
