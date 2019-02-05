# ngx-month-year-selector
Month & year selector form control for Angular 6+ with support for ngModel binding, Reactive Forms, and Events.  ngx-month-year-selector is independent from any UI frameworks (however should be compatible in any UI framework like Bootstrap, Angular Material, etc).

Demo: https://crankedapps.github.io/ngx-month-year-selector/

## Getting Started

### Installation
Install the packaging using `npm`:
```
npm install ngx-month-year-selector
```
Import `NgxMonthYearSelectorModule` into your app or feature module:
```
import { NgxMonthYearSelectorModule } from 'ngx-month-year-selector';
@NgModule({
  imports: [
    NgxMonthYearSelectorModule
  ]
})
export class AppModule { }
```

### Directive
`ngxMonthYearSelector` directive accepts the `IMonthYearSelectorOptions` options model described below as a value and can be used on any HTML input text element.
```
<input type="text" [ngxMonthYearSelector]="options">
```

### Reactive Forms
```
<input type="text" [ngxMonthYearSelector]="options" formControlName="myDate">
```

### ngModel
```
<input type="text" [ngxMonthYearSelector]="options" [(ngModel)]="myDate">
```

### Event Emitter
```
<input type="text" [ngxMonthYearSelector] [(ngModel)]="myDate" (dateSelected)="yourFunction($event)">
```

## Options Model
`IMonthYearSelectorOptions` interface can be imported from the library:
```
import { IMonthYearSelectorOptions } from 'ngx-month-year-selector';
```
It contains the following typed properties:

| Property 	| Type 	| Description 	|
|-------------------	|----------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------	|
| closeOnSelect 	| boolean 	| If true, dialog automatically closes after both year & month selection 	|
| disabledDates 	| {  year: number, month: number }[] 	| Disabled year/month combinations.  	|
| disabledDateRanges 	| [{ year: number, month: number }, { year: number, month: number }][] 	| Disabled date ranges.  Array of array objects where first element is start date and second element is end date. 	|
| format 	| string 	| Format of input value (ex: 'yyyy-mm yy mmm mmmm') 	|
| resetYearOnBlur 	| boolean 	| Reset year in when dropdown closes 	|
| yearMax 	| number 	| Maximum year allowed 	|
| yearMin 	| number 	| Minimum year allowed 	|
| yearStart 	| number 	| Year to start on when selector dialog opens 	|

## Build Library
* `npm run build:lib` build angular library
* `npm run watch:lib` build angular library & watch for changes

## Styling
Use the global styling sheet in Angular to style the element as you wish.