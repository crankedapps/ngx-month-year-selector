import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChange } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: IMonthYearSelectorOptions;
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() display: boolean;
  @Output() selected = new EventEmitter();
  @Output() displayChange = new EventEmitter();
  year: number;
  month: number;
  
  private wasInside = false;

  constructor() { }

  // Init
  ngOnInit() {
    this.year = this.dateSelected.year;
    this.month = this.dateSelected.month;
  }
  
  // Detect when click outside of dropdown component
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.close();
      this.displayChange.emit(false);
    }
    this.wasInside = false;
  }

  // Listen for changes to @Input values
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName of Object.keys(changes)) {
      // Clear state when dropdown is toggled
      if (propName === 'display') {
        this.clearState();
      }
    }
  }

  // monthChange event listneer for month component
  monthChange(e): void {
    this.selected.emit({ year: this.year, month: this.month });
  }

  // Close dropdown
  close(): void {
    this.display = false;
  }

  // Clear month/year view state
  clearState(): void {
    this.month = this.dateSelected.month;
    this.year = this.dateSelected.year;
  }

}
