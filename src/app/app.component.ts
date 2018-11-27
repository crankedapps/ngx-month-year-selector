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
  subMaxCheckChange: Subscription;
  subMinChange: Subscription;
  subMinCheckChange: Subscription;
  subDisabled: Subscription;
  subCloseOnSelect: Subscription;

  sampleForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    monthyear: [null, Validators.compose([Validators.required])],
    maxEnabled: [false],
    max: [(new Date).getFullYear() + 10],
    minEnabled: [false],
    min: [(new Date).getFullYear() - 10],
    inputDisabled: [false],
    closeOnSelect: [true]
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.subMaxChange = this.sampleForm.controls.max.valueChanges.subscribe(val => { this.updateMax(); });
    this.subMaxCheckChange = this.sampleForm.controls.maxEnabled.valueChanges.subscribe(val => { this.updateMax(); });
    this.subMinChange = this.sampleForm.controls.min.valueChanges.subscribe(val => { this.updateMin(); });
    this.subMinCheckChange = this.sampleForm.controls.minEnabled.valueChanges.subscribe(val => { this.updateMin(); });
    this.subDisabled = this.sampleForm.controls.inputDisabled.valueChanges.subscribe(val => { this.updateDisabled(); });
    this.subCloseOnSelect = this.sampleForm.controls.closeOnSelect.valueChanges.subscribe(val => { this.updateCloseOnSelect(); });
  }

  updateMax() {
    console.log('updateMax', this.sampleForm.controls.maxEnabled.value);
    const maxEnabled = this.sampleForm.controls.maxEnabled.value;
    const maxVal = this.sampleForm.controls.max.value;
    this.options.yearMax = (maxEnabled && !isNaN(maxVal) && maxVal > 0) ? maxVal : null;
  }

  updateMin() {
    console.log('updateMin', this.sampleForm.controls.minEnabled.value);
    const minEnabled = this.sampleForm.controls.minEnabled.value;
    const minVal = this.sampleForm.controls.min.value;
    this.options.yearMin = (minEnabled && !isNaN(minVal) && minVal > 0) ? minVal : null;
  }

  updateDisabled() {
    console.log('updateDisabled', this.sampleForm.controls.inputDisabled.value);
    this.options.disabled = this.sampleForm.controls.inputDisabled.value;
  }

  updateCloseOnSelect() {
    console.log('updateCloseOnSelect', this.sampleForm.controls.closeOnSelect.value);
    this.options.closeOnSelect = this.sampleForm.controls.closeOnSelect.value;
  }

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }

  onSubmit() {
    console.log('onSubmit', this.sampleForm.value);
  }

  ngOnDestroy() {
    if (this.subMaxChange) { this.subMaxChange.unsubscribe(); }
    if (this.subMaxCheckChange) { this.subMaxCheckChange.unsubscribe(); }
    if (this.subMinChange) { this.subMinChange.unsubscribe(); }
    if (this.subMinCheckChange) { this.subMinCheckChange.unsubscribe(); }
    if (this.subDisabled) { this.subDisabled.unsubscribe(); }
    if (this.subCloseOnSelect) { this.subCloseOnSelect.unsubscribe(); }
  }
}
