import { Component, OnInit, Input } from '@angular/core';
import { IMonthYearSelectorDate } from '../../models/IMonthYearSelectorDate';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css']
})
export class TextinputComponent implements OnInit {
  @Input() dateSelected: IMonthYearSelectorDate;
  constructor() { }

  ngOnInit() {
  }

  value() {
    return this.dateSelected.year + '-' + ('0' + (this.dateSelected.month + 1)).slice(-2);
  }

}
