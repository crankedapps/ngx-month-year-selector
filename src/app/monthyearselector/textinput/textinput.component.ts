import { Component, OnInit, Input } from '@angular/core';
import { IMonthYearSelectorOptions } from '../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../models/IMonthYearSelectorDate';
import { NGXMonthYear } from '../NGXMonthYear';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  @Input() options: IMonthYearSelectorOptions;
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() placeholder: string;
  ngxMonthYear: NGXMonthYear = new NGXMonthYear();
  constructor() { }

  ngOnInit() {
  }

  value(): string {
    return this.ngxMonthYear.formatValue(this.options.format, this.dateSelected);
  }

}
