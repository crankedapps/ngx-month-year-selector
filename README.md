# ngx-month-year-selector

This project is a month/year selector for for Angular 6+.  This selector differs from standard date selector in that it only lets you select a month & year and not a day.  The selector works with both ngModel binding and Reactive Forms.

## Getting Started


## Options Model
| Option 	| Type 	| Description 	|
|-------------------	|----------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------	|
| yearMin 	| integer 	| Minimum year allowed 	|
| yearMax 	| integer 	| Maximum year allowed 	|
| yearStart 	| integer 	| Year to start on when selector dialog opens 	|
| closeOnSelect 	| boolean 	| If true, dialog automatically closes after both year & month selection 	|
| format 	| string 	| Format of input value (ex: 'yyyy-mm yy mmm mmmm') 	|
| forceOpenLeft 	| boolean 	| Force dialog to open left of input 	|
| forceOpenRight 	| boolean 	| Force dialog to open right of input 	|
| disabledDates 	| {  year: number, month: number }[] 	| Disabled year/month combinations.  	|
| disableDateRanges 	| [{ year: number, month: number }, { year: number, month: number }][] 	| Disabled date ranges.  Array of array objects where first element is start date and second element is end date. 	|