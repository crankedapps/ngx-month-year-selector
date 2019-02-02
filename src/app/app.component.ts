import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMonthYearSelectorOptions, IMonthYearSelectorDate } from 'ngx-month-year-selector';
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
    /*
    disabled: false,
    yearMax: (new Date).getFullYear() + 10,
    yearMin: (new Date).getFullYear() - 10,
    closeOnSelect: true,
    yearStart: 2010,
    format: 'yyyy mmm', // 'yyyy-mm yy mmm mmmm',
    forceOpenLeft: true,
    forceOpenRight: true,
    disabledDates: [
      { year: 2018, month: 10 } // individual date
    ],
    disabledDateRanges: [
      [{ year: 2017, month: 5 }, { year: 2019, month: 6 }] // [start,end][]
    ]
    */
  };
  subMax: Subscription;
  subMaxCheck: Subscription;
  subMin: Subscription;
  subMinCheck: Subscription;
  subDisabled: Subscription;
  subCloseOnSelect: Subscription;
  subForceOpenDirectionCheck: Subscription;
  subForceOpenDirection: Subscription;
  subFormatEnabled: Subscription;
  subFormat: Subscription;

  sampleForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    monthYear: [null, Validators.compose([Validators.required])],
    maxEnabled: [false],
    max: [(new Date).getFullYear() + 10],
    minEnabled: [false],
    min: [(new Date).getFullYear() - 10],
    inputDisabled: [false],
    closeOnSelect: [true],
    forceOpenDirectionEnabled: [false],
    forceOpenDirection: ['left'],
    formatEnabled: [false],
    format: ['mmm yyyy']
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.subMax = this.sampleForm.controls.max.valueChanges.subscribe(() => { this.updateMax(); });
    this.subMaxCheck = this.sampleForm.controls.maxEnabled.valueChanges.subscribe(() => { this.updateMax(); });
    this.subMin = this.sampleForm.controls.min.valueChanges.subscribe(() => { this.updateMin(); });
    this.subMinCheck = this.sampleForm.controls.minEnabled.valueChanges.subscribe(() => { this.updateMin(); });
    this.subDisabled = this.sampleForm.controls.inputDisabled.valueChanges.subscribe(val => { this.updateDisabled(); });
    this.subCloseOnSelect = this.sampleForm.controls.closeOnSelect.valueChanges.subscribe(() => { this.updateCloseOnSelect(); });
    this.subForceOpenDirectionCheck = this.sampleForm.controls.forceOpenDirectionEnabled.valueChanges.subscribe(() => { this.updateForceOpenDirection(); });
    this.subForceOpenDirection = this.sampleForm.controls.forceOpenDirection.valueChanges.subscribe(() => { this.updateForceOpenDirection(); });
    this.subFormatEnabled = this.sampleForm.controls.formatEnabled.valueChanges.subscribe(() => { this.updateFormat(); });
    this.subFormat = this.sampleForm.controls.format.valueChanges.subscribe(() => { this.updateFormat(); });
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
    if (this.sampleForm.controls.inputDisabled.value) {
      this.sampleForm.controls.monthYear.disable();
    } else {
      this.sampleForm.controls.monthYear.enable();
    }
  }

  updateCloseOnSelect() {
    console.log('updateCloseOnSelect', this.sampleForm.controls.closeOnSelect.value);
    this.options.closeOnSelect = this.sampleForm.controls.closeOnSelect.value;
  }

  updateForceOpenDirection() {
    console.log('updateForceOpenDirection', this.sampleForm.controls.forceOpenDirection.value);
    this.options.forceOpenDirection = this.sampleForm.controls.forceOpenDirectionEnabled.value ? this.sampleForm.controls.forceOpenDirection.value : null;
  }

  updateFormat() {
    console.log('updateFormat', this.sampleForm.controls.format.value);
    this.options.format = this.sampleForm.controls.formatEnabled.value ? this.sampleForm.controls.format.value : 'yyyy mmm';
    this.options = Object.assign({}, this.options);
  }

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }

  onSubmit() {
    console.log('onSubmit', this.sampleForm.value);
  }

  onEventEmitter(e: IMonthYearSelectorDate): void {
    console.log('onEventEmitter', e);
    alert(JSON.stringify(e));
  }

  ngOnDestroy() {
    if (this.subMax) { this.subMax.unsubscribe(); }
    if (this.subMaxCheck) { this.subMaxCheck.unsubscribe(); }
    if (this.subMin) { this.subMin.unsubscribe(); }
    if (this.subMinCheck) { this.subMinCheck.unsubscribe(); }
    if (this.subDisabled) { this.subDisabled.unsubscribe(); }
    if (this.subCloseOnSelect) { this.subCloseOnSelect.unsubscribe(); }
    if (this.subForceOpenDirectionCheck) { this.subForceOpenDirectionCheck.unsubscribe(); }
    if (this.subForceOpenDirection) { this.subForceOpenDirection.unsubscribe(); }
    if (this.subFormatEnabled) { this.subFormatEnabled.unsubscribe(); }
    if (this.subFormat) { this.subFormat.unsubscribe(); }
  }
}
