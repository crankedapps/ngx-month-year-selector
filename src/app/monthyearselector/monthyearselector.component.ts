import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthyearselector',
  templateUrl: './monthyearselector.component.html',
  styleUrls: ['./monthyearselector.component.css']
})
export class MonthyearselectorComponent implements OnInit {
  options: {
    yearStart: number;
    yearEnd: number;
  };
  dateSelected: {
    year: number;
    month: number;
  };

  constructor() { }

  ngOnInit() {
    // If no date selected, select today's date
    if (!this.dateSelected) {
      this.dateSelected = {
        year: (new Date).getFullYear(),
        month: (new Date).getMonth()
      };
    }
  }

  onDateSelected(e: { year: number, month: number }): void {
    console.log('onDateSelected', e);
    this.dateSelected = e;
  }

}
