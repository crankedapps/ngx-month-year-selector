import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextinputComponent } from './monthyearselector/textinput/textinput.component';
import { DropdownComponent } from './monthyearselector/dropdown/dropdown.component';
import { YearComponent } from './monthyearselector/dropdown/year/year.component';
import { MonthComponent } from './monthyearselector/dropdown/month/month.component';
import { MonthyearselectorDirective } from './monthyearselector/monthyearselector.directive';
import { DynamicComponent } from './monthyearselector/dynamic/dynamic.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TextinputComponent,
    DropdownComponent,
    YearComponent,
    MonthComponent,
    MonthyearselectorDirective,
    DynamicComponent
  ],
  entryComponents: [
    DynamicComponent,
    DropdownComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
