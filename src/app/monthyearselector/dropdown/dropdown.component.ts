import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
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
  
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.display = false;
      this.displayChange.emit(false);
    }
    this.wasInside = false;
  }

  ngOnInit() {
    this.year = this.dateSelected.year;
    this.month = this.dateSelected.month;
  }

  monthChange(e): void {
    this.selected.emit({ year: this.year, month: this.month });
  }

}
