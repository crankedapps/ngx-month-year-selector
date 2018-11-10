import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthyearselectorComponent } from './monthyearselector/monthyearselector.component';
import { TextinputComponent } from './monthyearselector/textinput/textinput.component';
import { DropdownComponent } from './monthyearselector/dropdown/dropdown.component';
import { YearComponent } from './monthyearselector/dropdown/year/year.component';
import { MonthComponent } from './monthyearselector/dropdown/month/month.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MonthyearselectorComponent,
    TextinputComponent,
    DropdownComponent,
    YearComponent,
    MonthComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
