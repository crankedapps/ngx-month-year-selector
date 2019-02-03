import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxMonthYearSelectorModule } from 'ngx-month-year-selector';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './demos/reactiveformdemo/reactiveformdemo.component';
import { DemonavComponent } from './demonav/demonav.component';
import { ModeldemoComponent } from './demos/modeldemo/modeldemo.component';
import { EventdemoComponent } from './demos/eventdemo/eventdemo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMonthYearSelectorModule
  ],
  declarations: [
    AppComponent,
    ReactiveformComponent,
    DemonavComponent,
    ModeldemoComponent,
    EventdemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
