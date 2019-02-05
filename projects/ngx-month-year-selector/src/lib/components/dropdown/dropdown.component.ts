import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';
import { NGXMonthYear } from '../../NGXMonthYear';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() options: IMonthYearSelectorOptions;
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() display: boolean;
  @Output() selected = new EventEmitter();
  @Output() displayChange = new EventEmitter();
  year: number;
  month: number;
  openDirection: 'left' | 'right' | 'middle' = 'right';
  @ViewChild('dropdownWrapper') dropdownWrapper: ElementRef;
  ngxMonthYear = new NGXMonthYear();
  offsetLeft: number;
  dropdownReady: boolean;
  allowClose: boolean;

  constructor(private eRef: ElementRef) { }

  // Init
  ngOnInit() {
    console.log('display', this.display);
    this.options = this.ngxMonthYear.setDefaultOptions(this.options ? this.options : {});
    console.log('options', this.options);
    if (!this.dateSelected) {
      this.month = (new Date).getMonth();
      this.year = (new Date).getFullYear();
    }
  }

  // Detect when click outside of dropdown component
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      if (this.dropdownReady) {
        this.close();
        this.displayChange.emit(false);
      }
    }
  }

  // Listen for changes to @Input values
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('ngOnChanges');
    for (const propName of Object.keys(changes)) {
      // Clear state when dropdown is toggled
      if (propName === 'display' && !changes.display.firstChange) {
        if (!changes.display.currentValue) { this.onDisplayDisabled(); } else { this.onDisplayEnabled(); }
      }
    }
  }

  // Display enabled listener
  onDisplayEnabled() {
    console.log('onDisplayEnabled', this.month, this.year, this.dateSelected);
    if (this.month === undefined || this.year === undefined) { this.clearState(); }
    setTimeout(() => {
      this.dropdownReady = true;
    }, 0);
  }

  // Display disabled listener
  onDisplayDisabled() {
    console.log('onDisplayDisabled');
    if (this.options.resetYearOnBlur) {
      this.clearState();
    }
  }

  // monthChange event listneer for month component
  monthChange(e): void {
    this.selected.emit({ year: this.year, month: this.month });
    if (this.options.closeOnSelect) {
      this.close();
    }
  }

  // Close dropdown
  close(): void {
    this.display = false;
    this.dropdownReady = false;
  }

  // Clear month/year view state
  clearState(): void {
    this.month = this.dateSelected ? this.dateSelected.month : (new Date).getMonth();
    this.year = this.options.yearStart ? this.options.yearStart :
      this.dateSelected ? this.dateSelected.year : (new Date).getFullYear();
    console.log('clearState', this.month, this.year);
  }

}
