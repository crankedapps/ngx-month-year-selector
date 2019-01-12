import { Directive, ElementRef, OnInit, HostListener, Renderer2, Inject, ViewContainerRef, ComponentRef, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NGXMonthYear } from './NGXMonthYear';
import { IMonthYearSelectorOptions } from '../monthyearselector/models/IMonthYearSelectorOptions';

@Directive({
  selector: '[appMonthyearselector]'
})
export class MonthyearselectorDirective implements OnInit, OnDestroy {
  @Input('appMonthyearselector') appMonthyearselector: IMonthYearSelectorOptions;
  componentRef: ComponentRef<DropdownComponent>;
  subDateSelected: Subscription;
  ngxMonthYear: NGXMonthYear = new NGXMonthYear();
  viewContainerRef;
  factoryResolver;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    @Inject(ViewContainerRef) viewContainerRef,
    @Inject(ComponentFactoryResolver) factoryResolver
  ) {
    // selectorService.setRootViewContainerRef(viewContainerRef);
    this.viewContainerRef = viewContainerRef;
    this.factoryResolver = factoryResolver;
  }

  ngOnInit() {
    this.componentRef = this.addDynamicComponent(this.appMonthyearselector ? this.appMonthyearselector : {});
    this.subDateSelected = this.componentRef.instance.selected.subscribe(val => {
      this.renderer.setProperty(this.el.nativeElement, 'value', this.ngxMonthYear.formatValue('yyyy-mm', val));
      this.el.nativeElement.dispatchEvent(new Event('input'));
    });
  }

  @HostListener('click') onClick() {
    console.log('appMonthyearselector', this.appMonthyearselector);
    console.log('options', this.componentRef.instance.options);
    this.componentRef.instance.display = !this.componentRef.instance.display;
    if (this.componentRef.instance.display) { this.componentRef.instance.onDisplayEnabled(); } else { this.componentRef.instance.onDisplayDisabled(); }
  }

  addDynamicComponent(options?: IMonthYearSelectorOptions): ComponentRef<DropdownComponent> {
    const factory = this.factoryResolver.resolveComponentFactory(DropdownComponent);
    const component = factory.create(this.viewContainerRef.parentInjector);
    if (options) { component.instance.options = options; }
    this.viewContainerRef.insert(component.hostView);
    return component;
  }

  ngOnDestroy() {
    if (this.subDateSelected) { this.subDateSelected.unsubscribe(); }
  }
}
