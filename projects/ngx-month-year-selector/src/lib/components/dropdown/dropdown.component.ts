import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnChanges, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';
import { NGXMonthYear } from '../../NGXMonthYear';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
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
    if (this.options.forceOpenDirection && ['left', 'right', 'middle'].indexOf(this.options.forceOpenDirection) !== -1) {
      this.openDirection = this.options.forceOpenDirection;
    }
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
      this.detectOrientation();
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
    if (this.openDirection !== 'middle' && (dropdownDimensions.left < 0 || overflowRight > 0) && dropdownDimensions.width <= document.documentElement.clientWidth) {
      this.openDirection = 'middle';
      return;
    }
    console.log('detectEnd');
  }

}
