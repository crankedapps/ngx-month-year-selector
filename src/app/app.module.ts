import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretSquareRight, faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { MonthyearselectorComponent } from './monthyearselector/monthyearselector.component';
import { TextinputComponent } from './monthyearselector/textinput/textinput.component';
import { DropdownComponent } from './monthyearselector/dropdown/dropdown.component';
import { YearComponent } from './monthyearselector/dropdown/year/year.component';
import { MonthComponent } from './monthyearselector/dropdown/month/month.component';

library.add(faCaretSquareRight, faCaretSquareLeft);

@NgModule({
  declarations: [
    AppComponent,
    MonthyearselectorComponent,
    TextinputComponent,
    DropdownComponent,
    YearComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
