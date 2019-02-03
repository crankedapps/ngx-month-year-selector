import { Component, OnInit } from '@angular/core';
import { IMonthYearSelectorDate } from 'ngx-month-year-selector';

@Component({
  selector: 'app-modeldemo',
  templateUrl: './modeldemo.component.html',
  styleUrls: ['./modeldemo.component.sass']
})
export class ModeldemoComponent implements OnInit {
  dataModel: IMonthYearSelectorDate = null;

  constructor() { }

  ngOnInit() {
  }

}
