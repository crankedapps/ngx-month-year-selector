import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() year: number;
  @Output() yearChange = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  yearBack(): void {
    this.year--;
    this.yearChange.emit(this.year);
  }

  yearForward(): void {
    this.year++;
    this.yearChange.emit(this.year);
  }

}
