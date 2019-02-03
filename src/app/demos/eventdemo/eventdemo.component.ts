import { Component, OnInit } from '@angular/core';
import { IMonthYearSelectorDate } from 'ngx-month-year-selector';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.sass']
})
export class EventdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onDateSelected(e: IMonthYearSelectorDate): void {
    console.log('onDateSelected', e);
    alert(JSON.stringify(e));
  }

}
