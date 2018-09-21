import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
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
  openDirection: 'left' | 'right' | 'middle' = 'right';
  @ViewChild('dropdownWrapper')
  dropdownWrapper: ElementRef;
  
  private wasInside = false;

  constructor() { }

  // Init
  ngOnInit() {
    console.log('options', this.options);
    if (this.options.forceOpenDirection && ['left', 'right', 'middle'].indexOf(this.options.forceOpenDirection) !== -1) {
      this.openDirection = this.options.forceOpenDirection;
    }
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
      if (propName === 'display' && !changes.display.firstChange) {
        if (!changes.display.currentValue) { this.onDisplayDisabled(); } else { this.onDisplayEnabled(); }
      }
    }
  }

  // Display enabled listener
  onDisplayEnabled() {
    console.log('onDisplayEnabled', this.month, this.year);
    if (this.month === undefined || this.year === undefined) { this.clearState(); }
    setTimeout(() => {
      this.detectOrientation();
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
  }

  // Close dropdown
  close(): void {
    this.display = false;
  }

  // Clear month/year view state
  clearState(): void {
    console.log('clearState');
    this.month = this.dateSelected.month;
    this.year = this.options.yearStart ? this.options.yearStart : this.dateSelected.year;
  }

  // On window resize
  onResize(event): void {
    this.detectOrientation();
  }

  // Automatically detect dropdown orientation (open right, middle, left) based on visibility in viewport
  detectOrientation(): void {
    // If forced orientation set in options, use those
    if (this.options.forceOpenDirection) { this.openDirection = this.options.forceOpenDirection; return; }
    // Calculate dropdown orientation to display dropdown based position in viewport
    const dropdownDimensions = this.dropdownWrapper.nativeElement.getBoundingClientRect();
    const overflowRight = dropdownDimensions.right - document.documentElement.clientWidth;
    let distToRight, distToLeft;
    if (this.openDirection === 'left') {
      distToRight = document.documentElement.clientWidth - dropdownDimensions.right;
      distToLeft = dropdownDimensions.right;
    } else if (this.openDirection === 'right') {
      distToRight = document.documentElement.clientWidth - dropdownDimensions.left;
      distToLeft = dropdownDimensions.left;
    } else {
      distToRight = document.documentElement.clientWidth - (dropdownDimensions.right - (dropdownDimensions.width / 2));
      distToLeft = dropdownDimensions.left + (dropdownDimensions.width / 2);
    }
    // If dropdown right overflow viewport, and distance available on left, switch to left orientation
    if (overflowRight > 0 && distToLeft > dropdownDimensions.width) {
      this.openDirection = 'left';
      return;
    }
    // If dropdown orientated to left/middle amd space available again to right, orientate back to right (default)
    if (this.openDirection !== 'right' && overflowRight < 0 && distToRight > dropdownDimensions.width) {
      this.openDirection = 'right';
      return;
    }
    // If no space on either side, orientate middle
    if (this.openDirection != 'middle' && (dropdownDimensions.left < 0 || overflowRight > 0) && dropdownDimensions.width <= document.documentElement.clientWidth) {
      this.openDirection = 'middle';
      return;
    }
    console.log('detectEnd');
  }

}
