# ngx-month-year-selector
This project is a month/year selector for for Angular 6+.  This selector differs from standard date selectors in that it only lets you select month & year and is independent from any UI frameworks.  The selector works with both ngModel binding and Reactive Forms.

## Getting Started

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
| forceOpenDirection 	| 'left' | 'right' | 'middle' 	| Force dialog to open with specific direction 	|
| format 	| string 	| Format of input value (ex: 'yyyy-mm yy mmm mmmm') 	|
| resetYearOnBlur 	| boolean 	| Reset year in when dropdown closes 	|
| yearMax 	| number 	| Maximum year allowed 	|
| yearMin 	| number 	| Minimum year allowed 	|
| yearStart 	| number 	| Year to start on when selector dialog opens 	|

## Build Library
* `npm run build:lib` build angular library
* `npm run watch:lib` build angular library & watch for changes

## Styling

