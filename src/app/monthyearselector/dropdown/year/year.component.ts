import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../../models/IMonthYearSelectorOptions';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit, OnDestroy {
  @Input() options: IMonthYearSelectorOptions;
  @Input()
  set year(change: number) {
    this._year = change;
    this.yearChange.emit(change);
  }
  get year() {
    return this._year;
  }
  @Output() yearChange = new EventEmitter();
  @ViewChild('yearEditInput') yearEditInput: ElementRef;
  yearEdit: number;
  yearEditState: boolean = false;
  _year: number;

  constructor() {}

  // Init
  ngOnInit() {}

  // Year back click event
  yearBack(): void {
    this.year--;
    this.yearChange.emit(this.year);
  }

  // Year forward click event
  yearForward(): void {
    this.year++;
    this.yearChange.emit(this.year);
  }

  // Year label click event
  yearClick() {
    this.yearEdit = this.year;
    this.yearEditState = true; // enable edit state
    setTimeout(() => this.yearEditInput.nativeElement.focus(), 0); // set focus to input
  }

  // Year edit input keypress event
  yearKeyPress(e: KeyboardEvent) {
    // Blur year input on Enter key press
    if (e.keyCode === 13) {
      this.yearEditInput.nativeElement.blur();
    }
  }

  // Year edit input blur event
  yearBlur() {
    console.log('yearBlur', this.yearEditValid());
    this.year = this.yearEditValid() ? this.yearEdit : this.year;
    this.yearEditState = false;
    console.log('yearBLur', this.year);
  }

  // Year input valid state
  yearEditValid(): boolean {
    return !isNaN(this.yearEdit) && this.yearEdit >= this.options.yearMin && this.yearEdit <= this.options.yearMax;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy', this.yearEditState, this.yearEditValid());
    if (this.yearEditState && this.yearEditValid()) {
      this.year = this.yearEdit;
    }
  }

}
