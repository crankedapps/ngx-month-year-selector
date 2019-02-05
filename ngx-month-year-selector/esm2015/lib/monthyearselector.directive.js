/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2, Inject, ViewContainerRef, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NGXMonthYear } from './NGXMonthYear';
export class MonthyearselectorDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} viewContainerRef
     * @param {?} factoryResolver
     */
    constructor(el, renderer, document, viewContainerRef, factoryResolver) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.dateSelected = new EventEmitter();
        this.ngxMonthYear = new NGXMonthYear();
        this.viewContainerRef = viewContainerRef;
        this.factoryResolver = factoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // add dropdown component to DOM
        this.componentRef = this.addDynamicComponent(this.ngxMonthYearSelector ? this.ngxMonthYearSelector : {});
        // subscribe to date selection from dropdown component
        this.subDateSelected = this.componentRef.instance.selected.subscribe((val) => {
            // update input value
            this.selectedDate = val;
            this.updateValue();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const propName in changes) {
            if (propName === 'ngxMonthYearSelector') {
                // If options updated, update input value
                this.updateValue();
            }
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        this.componentRef.instance.dateSelected = this.selectedDate;
        this.componentRef.instance.display = !this.componentRef.instance.display;
        if (this.componentRef.instance.display) {
            this.componentRef.instance.onDisplayEnabled();
        }
        else {
            this.componentRef.instance.onDisplayDisabled();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.componentRef.instance.offsetLeft = this.el.nativeElement.offsetLeft; // readjust offset
    }
    /**
     * @return {?}
     */
    onChanged() {
        // if not clearing value and changed, reset to proper formatting
        if (this.el.nativeElement.value !== '' && this.el.nativeElement.value !== this.getFormattedValue()) {
            this.updateValue();
        }
        // if value cleared, clear state
        if (this.el.nativeElement.value === '') {
            this.selectedDate = null;
            this.componentRef.instance.clearState();
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    addDynamicComponent(options) {
        console.log('addDynamicComponent', options);
        /** @type {?} */
        const factory = this.factoryResolver.resolveComponentFactory(DropdownComponent);
        /** @type {?} */
        const component = factory.create(this.viewContainerRef.parentInjector);
        // Setup component
        if (options) {
            component.instance.options = options;
        } // set component options
        component.instance.offsetLeft = this.el.nativeElement.offsetLeft; // adjust X offset in view
        // Inject in DOM
        this.viewContainerRef.insert(component.hostView);
        return component;
    }
    /**
     * @return {?}
     */
    updateValue() {
        this.renderer.setProperty(this.el.nativeElement, 'value', this.getFormattedValue());
        this.el.nativeElement.dispatchEvent(new Event('input'));
        this.dateSelected.emit(this.selectedDate);
    }
    /**
     * @return {?}
     */
    getFormattedValue() {
        return this.ngxMonthYear.formatValue(this.ngxMonthYearSelector && this.ngxMonthYearSelector.format ? this.ngxMonthYearSelector.format : this.ngxMonthYear.defaultOptions.format, this.selectedDate);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Clean up subscriptions
        if (this.subDateSelected) {
            this.subDateSelected.unsubscribe();
        }
    }
}
MonthyearselectorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxMonthYearSelector]'
            },] }
];
/** @nocollapse */
MonthyearselectorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ViewContainerRef,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ComponentFactoryResolver,] }] }
];
MonthyearselectorDirective.propDecorators = {
    ngxMonthYearSelector: [{ type: Input, args: ['ngxMonthYearSelector',] }],
    dateSelected: [{ type: Output, args: ['dateSelected',] }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    onChanged: [{ type: HostListener, args: ['keyup',] }]
};
if (false) {
    /** @type {?} */
    MonthyearselectorDirective.prototype.ngxMonthYearSelector;
    /** @type {?} */
    MonthyearselectorDirective.prototype.dateSelected;
    /** @type {?} */
    MonthyearselectorDirective.prototype.componentRef;
    /** @type {?} */
    MonthyearselectorDirective.prototype.subDateSelected;
    /** @type {?} */
    MonthyearselectorDirective.prototype.ngxMonthYear;
    /** @type {?} */
    MonthyearselectorDirective.prototype.selectedDate;
    /** @type {?} */
    MonthyearselectorDirective.prototype.viewContainerRef;
    /** @type {?} */
    MonthyearselectorDirective.prototype.factoryResolver;
    /** @type {?} */
    MonthyearselectorDirective.prototype.el;
    /** @type {?} */
    MonthyearselectorDirective.prototype.renderer;
    /** @type {?} */
    MonthyearselectorDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGh5ZWFyc2VsZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvbW9udGh5ZWFyc2VsZWN0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBc0MsS0FBSyxFQUFFLE1BQU0sRUFDMUksWUFBWSxFQUFFLHdCQUF3QixFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLE1BQU07Ozs7Ozs7O0lBU0osWUFDVSxJQUNBLFVBQ2tCLFFBQVEsRUFDUixnQkFBZ0IsRUFDUixlQUFlO1FBSnpDLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFDVSxhQUFRLEdBQVIsUUFBUSxDQUFBOzRCQVZHLElBQUksWUFBWSxFQUEwQjs0QkFHcEQsSUFBSSxZQUFZLEVBQUU7UUFXN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0tBQ3hDOzs7O0lBRUQsUUFBUTs7UUFFTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7O1FBRXpHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFB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QUFDO0tBQzNDOzs7O0lBR0QsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyTTs7OztJQUVELFdBQVc7O1FBRVQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUFFO0tBQ2xFOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUFYbUIsVUFBVTtZQUF3QixTQUFTOzRDQXdCMUQsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLGdCQUFnQjs0Q0FDdkIsTUFBTSxTQUFDLHdCQUF3Qjs7O21DQWJqQyxLQUFLLFNBQUMsc0JBQXNCOzJCQUM1QixNQUFNLFNBQUMsY0FBYztzQkF3Q3JCLFlBQVksU0FBQyxPQUFPO3VCQU9wQixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUt4QyxZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTkdYTW9udGhZZWFyIH0gZnJvbSAnLi9OR1hNb250aFllYXInO1xuaW1wb3J0IHsgSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL0lNb250aFllYXJTZWxlY3Rvck9wdGlvbnMnO1xuaW1wb3J0IHsgSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSB9IGZyb20gJy4vbW9kZWxzL0lNb250aFllYXJTZWxlY3RvckRhdGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4TW9udGhZZWFyU2VsZWN0b3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBNb250aHllYXJzZWxlY3RvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ25neE1vbnRoWWVhclNlbGVjdG9yJykgbmd4TW9udGhZZWFyU2VsZWN0b3I6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnM7XG4gIEBPdXRwdXQoJ2RhdGVTZWxlY3RlZCcpIGRhdGVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SU1vbnRoWWVhclNlbGVjdG9yRGF0ZT4oKTtcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8RHJvcGRvd25Db21wb25lbnQ+O1xuICBzdWJEYXRlU2VsZWN0ZWQ6IFN1YnNjcmlwdGlvbjtcbiAgbmd4TW9udGhZZWFyOiBOR1hNb250aFllYXIgPSBuZXcgTkdYTW9udGhZZWFyKCk7XG4gIHNlbGVjdGVkRGF0ZTogSU1vbnRoWWVhclNlbGVjdG9yRGF0ZTtcbiAgdmlld0NvbnRhaW5lclJlZjtcbiAgZmFjdG9yeVJlc29sdmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50LFxuICAgIEBJbmplY3QoVmlld0NvbnRhaW5lclJlZikgdmlld0NvbnRhaW5lclJlZixcbiAgICBASW5qZWN0KENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgZmFjdG9yeVJlc29sdmVyXG4gICkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZiA9IHZpZXdDb250YWluZXJSZWY7XG4gICAgdGhpcy5mYWN0b3J5UmVzb2x2ZXIgPSBmYWN0b3J5UmVzb2x2ZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBhZGQgZHJvcGRvd24gY29tcG9uZW50IHRvIERPTVxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5hZGREeW5hbWljQ29tcG9uZW50KHRoaXMubmd4TW9udGhZZWFyU2VsZWN0b3IgPyB0aGlzLm5neE1vbnRoWWVhclNlbGVjdG9yIDoge30pO1xuICAgIC8vIHN1YnNjcmliZSB0byBkYXRlIHNlbGVjdGlvbiBmcm9tIGRyb3Bkb3duIGNvbXBvbmVudFxuICAgIHRoaXMuc3ViRGF0ZVNlbGVjdGVkID0gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uuc2VsZWN0ZWQuc3Vic2NyaWJlKCh2YWw6IElNb250aFllYXJTZWxlY3RvckRhdGUpID0+IHtcbiAgICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWw7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBMaXN0ZW4gdG8gQElucHV0IGNoYW5nZXNcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKHByb3BOYW1lID09PSAnbmd4TW9udGhZZWFyU2VsZWN0b3InKSB7XG4gICAgICAgIC8vIElmIG9wdGlvbnMgdXBkYXRlZCwgdXBkYXRlIGlucHV0IHZhbHVlXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBjbGljayBldmVudFxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZVNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZGlzcGxheSA9ICF0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNwbGF5O1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kaXNwbGF5KSB7IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLm9uRGlzcGxheUVuYWJsZWQoKTsgfSBlbHNlIHsgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Uub25EaXNwbGF5RGlzYWJsZWQoKTsgfVxuICB9XG5cbiAgLy8gV2luZG93IHJlc2l6ZSBldmVudFxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5vZmZzZXRMZWZ0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7IC8vIHJlYWRqdXN0IG9mZnNldFxuICB9XG5cbiAgLy8gT24gaW5wdXQgY2hhbmdlZCBldmVudFxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpIG9uQ2hhbmdlZCgpIHtcbiAgICAvLyBpZiBub3QgY2xlYXJpbmcgdmFsdWUgYW5kIGNoYW5nZWQsIHJlc2V0IHRvIHByb3BlciBmb3JtYXR0aW5nXG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSAhPT0gJycgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlICE9PSB0aGlzLmdldEZvcm1hdHRlZFZhbHVlKCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICB9XG4gICAgLy8gaWYgdmFsdWUgY2xlYXJlZCwgY2xlYXIgc3RhdGVcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID09PSAnJykge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBudWxsO1xuICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuY2xlYXJTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZHMgZHJvcGRvd24gY29tcG9uZW50IHRvIERPTVxuICBhZGREeW5hbWljQ29tcG9uZW50KG9wdGlvbnM/OiBJTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zKTogQ29tcG9uZW50UmVmPERyb3Bkb3duQ29tcG9uZW50PiB7XG4gICAgY29uc29sZS5sb2coJ2FkZER5bmFtaWNDb21wb25lbnQnLCBvcHRpb25zKTtcbiAgICAvLyBDcmVhdGUgY29tcG9uZW50XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KERyb3Bkb3duQ29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLnZpZXdDb250YWluZXJSZWYucGFyZW50SW5qZWN0b3IpO1xuICAgIC8vIFNldHVwIGNvbXBvbmVudFxuICAgIGlmIChvcHRpb25zKSB7IGNvbXBvbmVudC5pbnN0YW5jZS5vcHRpb25zID0gb3B0aW9uczsgfSAvLyBzZXQgY29tcG9uZW50IG9wdGlvbnNcbiAgICBjb21wb25lbnQuaW5zdGFuY2Uub2Zmc2V0TGVmdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0OyAvLyBhZGp1c3QgWCBvZmZzZXQgaW4gdmlld1xuICAgIC8vIEluamVjdCBpbiBET01cbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB2YWx1ZSB3aXRoIGxhdGVzdCBzZWxlY3RlZCBkYXRlXG4gIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB0aGlzLmdldEZvcm1hdHRlZFZhbHVlKCkpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgdGhpcy5kYXRlU2VsZWN0ZWQuZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gIH1cblxuICAvLyBHZXQgZm9ybWF0dGVkIGRhdGUgdmFsdWVcbiAgZ2V0Rm9ybWF0dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uZ3hNb250aFllYXIuZm9ybWF0VmFsdWUodGhpcy5uZ3hNb250aFllYXJTZWxlY3RvciAmJiB0aGlzLm5neE1vbnRoWWVhclNlbGVjdG9yLmZvcm1hdCA/IHRoaXMubmd4TW9udGhZZWFyU2VsZWN0b3IuZm9ybWF0IDogdGhpcy5uZ3hNb250aFllYXIuZGVmYXVsdE9wdGlvbnMuZm9ybWF0LCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBDbGVhbiB1cCBzdWJzY3JpcHRpb25zXG4gICAgaWYgKHRoaXMuc3ViRGF0ZVNlbGVjdGVkKSB7IHRoaXMuc3ViRGF0ZVNlbGVjdGVkLnVuc3Vic2NyaWJlKCk7IH1cbiAgfVxufVxuIl19