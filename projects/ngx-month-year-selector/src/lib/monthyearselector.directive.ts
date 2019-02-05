import { Directive, ElementRef, OnInit, HostListener, Renderer2, Inject, ViewContainerRef, ComponentRef, OnDestroy, OnChanges, Input, Output,
  EventEmitter, ComponentFactoryResolver, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NGXMonthYear } from './NGXMonthYear';
import { IMonthYearSelectorOptions } from './models/IMonthYearSelectorOptions';
import { IMonthYearSelectorDate } from './models/IMonthYearSelectorDate';

@Directive({
  selector: '[ngxMonthYearSelector]'
})
export class MonthyearselectorDirective implements OnInit, OnDestroy, OnChanges {
  @Input('ngxMonthYearSelector') ngxMonthYearSelector: IMonthYearSelectorOptions;
  @Output('dateSelected') dateSelected = new EventEmitter<IMonthYearSelectorDate>();
  componentRef: ComponentRef<DropdownComponent>;
  subDateSelected: Subscription;
  ngxMonthYear: NGXMonthYear = new NGXMonthYear();
  selectedDate: IMonthYearSelectorDate;
  viewContainerRef;
  factoryResolver;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    @Inject(ViewContainerRef) viewContainerRef,
    @Inject(ComponentFactoryResolver) factoryResolver
  ) {
    this.viewContainerRef = viewContainerRef;
    this.factoryResolver = factoryResolver;
  }

  ngOnInit() {
    // add dropdown component to DOM
    this.componentRef = this.addDynamicComponent(this.ngxMonthYearSelector ? this.ngxMonthYearSelector : {});
    // subscribe to date selection from dropdown component
    this.subDateSelected = this.componentRef.instance.selected.subscribe((val: IMonthYearSelectorDate) => {
      // update input value
      this.selectedDate = val;
      this.updateValue();
    });
  }

  // Listen to @Input changes
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'ngxMonthYearSelector') {
        // If options updated, update input value
        this.updateValue();
      }
    }
  }

  // click event
  @HostListener('click') onClick() {
    this.componentRef.instance.dateSelected = this.selectedDate;
    this.componentRef.instance.display = !this.componentRef.instance.display;
    if (this.componentRef.instance.display) { this.componentRef.instance.onDisplayEnabled(); } else { this.componentRef.instance.onDisplayDisabled(); }
  }

  // Window resize event
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.componentRef.instance.offsetLeft = this.el.nativeElement.offsetLeft; // readjust offset
  }

  // On input changed event
  @HostListener('keyup') onChanged() {
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

  // Adds dropdown component to DOM
  addDynamicComponent(options?: IMonthYearSelectorOptions): ComponentRef<DropdownComponent> {
    console.log('addDynamicComponent', options);
    // Create component
    const factory = this.factoryResolver.resolveComponentFactory(DropdownComponent);
    const component = factory.create(this.viewContainerRef.parentInjector);
    // Setup component
    if (options) { component.instance.options = options; } // set component options
    component.instance.offsetLeft = this.el.nativeElement.offsetLeft; // adjust X offset in view
    // Inject in DOM
    this.viewContainerRef.insert(component.hostView);
    return component;
  }

  // Update value with latest selected date
  updateValue(): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.getFormattedValue());
    this.el.nativeElement.dispatchEvent(new Event('input'));
    this.dateSelected.emit(this.selectedDate);
  }

  // Get formatted date value
  getFormattedValue(): string {
    return this.ngxMonthYear.formatValue(this.ngxMonthYearSelector && this.ngxMonthYearSelector.format ? this.ngxMonthYearSelector.format : this.ngxMonthYear.defaultOptions.format, this.selectedDate);
  }

  ngOnDestroy() {
    // Clean up subscriptions
    if (this.subDateSelected) { this.subDateSelected.unsubscribe(); }
  }
}
