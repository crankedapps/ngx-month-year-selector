import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YearComponent } from './components/dropdown/year/year.component';
import { MonthComponent } from './components/dropdown/month/month.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MonthyearselectorDirective } from './monthyearselector.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    YearComponent,
    MonthComponent,
    DropdownComponent,
    MonthyearselectorDirective
  ],
  entryComponents: [
    DropdownComponent
  ],
  exports: [
    MonthyearselectorDirective
  ]
})
export class NgxMonthYearSelectorModule { }
