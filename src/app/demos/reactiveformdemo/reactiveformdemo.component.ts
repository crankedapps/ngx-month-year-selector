import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IMonthYearSelectorOptions } from 'ngx-month-year-selector';

@Component({
  selector: 'app-reactiveformdemo',
  templateUrl: './reactiveformdemo.component.html',
  styleUrls: ['./reactiveformdemo.component.sass']
})
export class ReactiveformComponent implements OnInit, OnDestroy {
  options: IMonthYearSelectorOptions = {
    /*
    disabled: false,
    yearMax: (new Date).getFullYear() + 10,
    yearMin: (new Date).getFullYear() - 10,
    closeOnSelect: true,
    yearStart: 2010,
    format: 'yyyy mmm', // 'yyyy-mm yy mmm mmmm',
    forceOpenDirection: 'left', // left, right, middle
    resetYearOnBlur: true,
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
    monthYear: [null, Validators.compose([Validators.required])]
  });

  optionsForm = this.formBuilder.group({
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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions() {
    this.subMax = this.optionsForm.controls.max.valueChanges.subscribe(() => { this.updateMax(); });
    this.subMaxCheck = this.optionsForm.controls.maxEnabled.valueChanges.subscribe(() => { this.updateMax(); });
    this.subMin = this.optionsForm.controls.min.valueChanges.subscribe(() => { this.updateMin(); });
    this.subMinCheck = this.optionsForm.controls.minEnabled.valueChanges.subscribe(() => { this.updateMin(); });
    this.subDisabled = this.optionsForm.controls.inputDisabled.valueChanges.subscribe(val => { this.updateDisabled(); });
    this.subCloseOnSelect = this.optionsForm.controls.closeOnSelect.valueChanges.subscribe(() => { this.updateCloseOnSelect(); });
    this.subForceOpenDirectionCheck = this.optionsForm.controls.forceOpenDirectionEnabled.valueChanges.subscribe(() => { this.updateForceOpenDirection(); });
    this.subForceOpenDirection = this.optionsForm.controls.forceOpenDirection.valueChanges.subscribe(() => { this.updateForceOpenDirection(); });
    this.subFormatEnabled = this.optionsForm.controls.formatEnabled.valueChanges.subscribe(() => { this.updateFormat(); });
    this.subFormat = this.optionsForm.controls.format.valueChanges.subscribe(() => { this.updateFormat(); });
  }

  updateMax() {
    console.log('updateMax', this.optionsForm.controls.maxEnabled.value);
    const maxEnabled = this.optionsForm.controls.maxEnabled.value;
    const maxVal = this.optionsForm.controls.max.value;
    this.options.yearMax = (maxEnabled && !isNaN(maxVal) && maxVal > 0) ? maxVal : null;
  }

  updateMin() {
    console.log('updateMin', this.optionsForm.controls.minEnabled.value);
    const minEnabled = this.optionsForm.controls.minEnabled.value;
    const minVal = this.optionsForm.controls.min.value;
    this.options.yearMin = (minEnabled && !isNaN(minVal) && minVal > 0) ? minVal : null;
  }

  updateDisabled() {
    console.log('updateDisabled', this.optionsForm.controls.inputDisabled.value);
    if (this.optionsForm.controls.inputDisabled.value) {
      this.sampleForm.controls.monthYear.disable();
    } else {
      this.sampleForm.controls.monthYear.enable();
    }
  }

  updateCloseOnSelect() {
    console.log('updateCloseOnSelect', this.optionsForm.controls.closeOnSelect.value);
    this.options.closeOnSelect = this.optionsForm.controls.closeOnSelect.value;
  }

  updateForceOpenDirection() {
    console.log('updateForceOpenDirection', this.optionsForm.controls.forceOpenDirection.value);
    this.options.forceOpenDirection = this.optionsForm.controls.forceOpenDirectionEnabled.value ? this.optionsForm.controls.forceOpenDirection.value : null;
  }

  updateFormat() {
    console.log('updateFormat', this.optionsForm.controls.format.value);
    this.options.format = this.optionsForm.controls.formatEnabled.value ? this.optionsForm.controls.format.value : 'yyyy-mm';
    this.options = Object.assign({}, this.options);
  }

  onChange(e: { year: number, month: number }) {
    console.log('onChange', e);
  }

  onSubmit() {
    console.log('onSubmit', this.sampleForm.value);
    alert(JSON.stringify(this.sampleForm.value));
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
