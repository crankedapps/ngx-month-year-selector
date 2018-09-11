import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dateSelected: { year: number; month: number; };
  @Output() selected = new EventEmitter();
  year: number;
  month: number;
  constructor() { }

  ngOnInit() {
    this.year = this.dateSelected.year;
    this.month = this.dateSelected.month;
  }

  monthChange(e): void {
    this.selected.emit({ year: this.year, month: this.month });
  }

}
