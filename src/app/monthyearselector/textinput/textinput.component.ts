import { Component, OnInit, Input } from '@angular/core';
import { IMonthYearSelectorOptions } from '../../models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';
import { monthNames, monthAbbrv } from '../../lang.en';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  @Input() options: IMonthYearSelectorOptions;
  @Input() dateSelected: IMonthYearSelectorDate;
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

  value(): string {
    if (!this.dateSelected) { return ''; }
    let returnStr = this.options.format;
    returnStr = returnStr.replace('yyyy', <any>this.dateSelected.year);
    returnStr = returnStr.replace('yy', <any>this.dateSelected.year.toString().slice(-2));
    returnStr = returnStr.replace('mmmm', <any>monthNames[this.dateSelected.month]);
    returnStr = returnStr.replace('mmm', <any>monthAbbrv[this.dateSelected.month]);
    returnStr = returnStr.replace('mm', ('0' + (this.dateSelected.month + 1)).slice(-2));
    return returnStr;
  }

}
