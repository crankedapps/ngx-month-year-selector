/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NGXMonthYear } from '../../NGXMonthYear';
export class DropdownComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.selected = new EventEmitter();
        this.displayChange = new EventEmitter();
        this.openDirection = 'right';
        this.ngxMonthYear = new NGXMonthYear();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('display', this.display);
        this.options = this.ngxMonthYear.setDefaultOptions(this.options ? this.options : {});
        console.log('options', this.options);
        if (!this.dateSelected) {
            this.month = (new Date).getMonth();
            this.year = (new Date).getFullYear();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            if (this.dropdownReady) {
                this.close();
                this.displayChange.emit(false);
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log('ngOnChanges');
        for (const propName of Object.keys(changes)) {
            // Clear state when dropdown is toggled
            if (propName === 'display' && !changes["display"].firstChange) {
                if (!changes["display"].currentValue) {
                    this.onDisplayDisabled();
                }
                else {
                    this.onDisplayEnabled();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onDisplayEnabled() {
        console.log('onDisplayEnabled', this.month, this.year, this.dateSelected);
        if (this.month === undefined || this.year === undefined) {
            this.clearState();
        }
        setTimeout(() => {
            this.dropdownReady = true;
        }, 0);
    }
    /**
     * @return {?}
     */
    onDisplayDisabled() {
        console.log('onDisplayDisabled');
        if (this.options.resetYearOnBlur) {
            this.clearState();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    monthChange(e) {
        this.selected.emit({ year: this.year, month: this.month });
        if (this.options.closeOnSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.display = false;
        this.dropdownReady = false;
    }
    /**
     * @return {?}
     */
    clearState() {
        this.month = this.dateSelected ? this.dateSelected.month : (new Date).getMonth();
        this.year = this.options.yearStart ? this.options.yearStart :
            this.dateSelected ? this.dateSelected.year : (new Date).getFullYear();
        console.log('clearState', this.month, this.year);
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-dropdown',
                template: "<div #dropdownWrapper class=\"dropdown-wrapper\" \n  [class.dropdown-wrapper--open-left]=\"openDirection == 'left'\" \n  [class.dropdown-wrapper--open-middle]=\"openDirection == 'middle'\" \n  [style.left]=\"offsetLeft ? offsetLeft + 'px' : null\"\n  *ngIf=\"display\">\n  <lib-year [options]=\"options\" [(year)]=\"year\"></lib-year>\n  <div class=\"dropdown-divider\"></div>\n  <lib-month [options]=\"options\" [dateSelected]=\"dateSelected\" [(month)]=\"month\" [year]=\"year\" (monthChange)=\"monthChange($event)\"></lib-month>\n</div>",
                styles: [".dropdown-wrapper{position:absolute;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;padding:.5em;width:300px;margin-top:9px;font-size:1rem;z-index:999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;font-family:-apple-system,vBlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}.dropdown-divider{border-top:1px solid rgba(0,0,0,.12);margin-bottom:10px}@media (max-width:575.98px){.dropdown-wrapper{left:0!important;width:100%}}"]
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
DropdownComponent.propDecorators = {
    options: [{ type: Input }],
    dateSelected: [{ type: Input }],
    display: [{ type: Input }],
    selected: [{ type: Output }],
    displayChange: [{ type: Output }],
    dropdownWrapper: [{ type: ViewChild, args: ['dropdownWrapper',] }],
    clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.options;
    /** @type {?} */
    DropdownComponent.prototype.dateSelected;
    /** @type {?} */
    DropdownComponent.prototype.display;
    /** @type {?} */
    DropdownComponent.prototype.selected;
    /** @type {?} */
    DropdownComponent.prototype.displayChange;
    /** @type {?} */
    DropdownComponent.prototype.year;
    /** @type {?} */
    DropdownComponent.prototype.month;
    /** @type {?} */
    DropdownComponent.prototype.openDirection;
    /** @type {?} */
    DropdownComponent.prototype.dropdownWrapper;
    /** @type {?} */
    DropdownComponent.prototype.ngxMonthYear;
    /** @type {?} */
    DropdownComponent.prototype.offsetLeft;
    /** @type {?} */
    DropdownComponent.prototype.dropdownReady;
    /** @type {?} */
    DropdownComponent.prototype.allowClose;
    /** @type {?} */
    DropdownComponent.prototype.eRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1vbnRoLXllYXItc2VsZWN0b3IvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUEyQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzdJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVFsRCxNQUFNOzs7O0lBZUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTt3QkFYZixJQUFJLFlBQVksRUFBRTs2QkFDYixJQUFJLFlBQVksRUFBRTs2QkFHQyxPQUFPOzRCQUVyQyxJQUFJLFlBQVksRUFBRTtLQUtROzs7O0lBR3pDLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QztLQUNGOzs7OztJQUlELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDRjtLQUNGOzs7OztJQUdELFdBQVcsQ0FBQyxPQUEwQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7WUFFM0MsSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLENBQUMsT0FBTyxZQUFTLFdBQVcsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLE9BQU8sWUFBUyxZQUFZLEVBQUU7b0JBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQUU7cUJBQU07b0JBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQUU7YUFDbkc7U0FDRjtLQUNGOzs7O0lBR0QsZ0JBQWdCO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FBRTtRQUMvRSxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNQOzs7O0lBR0QsaUJBQWlCO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7Ozs7O0lBR0QsV0FBVyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0tBQ0Y7Ozs7SUFHRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7S0FDNUI7Ozs7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRDs7O1lBNUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsdWlCQUF3Qzs7YUFFekM7Ozs7WUFWMEcsVUFBVTs7O3NCQVlsSCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxNQUFNOzRCQUNOLE1BQU07OEJBSU4sU0FBUyxTQUFDLGlCQUFpQjt1QkFvQjNCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU1vbnRoWWVhclNlbGVjdG9yT3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9JTW9udGhZZWFyU2VsZWN0b3JPcHRpb25zJztcbmltcG9ydCB7IElNb250aFllYXJTZWxlY3RvckRhdGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvSU1vbnRoWWVhclNlbGVjdG9yRGF0ZSc7XG5pbXBvcnQgeyBOR1hNb250aFllYXIgfSBmcm9tICcuLi8uLi9OR1hNb250aFllYXInO1xuaW1wb3J0IHsgX2dldENvbXBvbmVudEhvc3RMRWxlbWVudE5vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zYXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IElNb250aFllYXJTZWxlY3Rvck9wdGlvbnM7XG4gIEBJbnB1dCgpIGRhdGVTZWxlY3RlZDogSU1vbnRoWWVhclNlbGVjdG9yRGF0ZTtcbiAgQElucHV0KCkgZGlzcGxheTogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGlzcGxheUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgeWVhcjogbnVtYmVyO1xuICBtb250aDogbnVtYmVyO1xuICBvcGVuRGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJ21pZGRsZScgPSAncmlnaHQnO1xuICBAVmlld0NoaWxkKCdkcm9wZG93bldyYXBwZXInKSBkcm9wZG93bldyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIG5neE1vbnRoWWVhciA9IG5ldyBOR1hNb250aFllYXIoKTtcbiAgb2Zmc2V0TGVmdDogbnVtYmVyO1xuICBkcm9wZG93blJlYWR5OiBib29sZWFuO1xuICBhbGxvd0Nsb3NlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgLy8gSW5pdFxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGlzcGxheScsIHRoaXMuZGlzcGxheSk7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5uZ3hNb250aFllYXIuc2V0RGVmYXVsdE9wdGlvbnModGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zIDoge30pO1xuICAgIGNvbnNvbGUubG9nKCdvcHRpb25zJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAoIXRoaXMuZGF0ZVNlbGVjdGVkKSB7XG4gICAgICB0aGlzLm1vbnRoID0gKG5ldyBEYXRlKS5nZXRNb250aCgpO1xuICAgICAgdGhpcy55ZWFyID0gKG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERldGVjdCB3aGVuIGNsaWNrIG91dHNpZGUgb2YgZHJvcGRvd24gY29tcG9uZW50XG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tvdXQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duUmVhZHkpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIHRvIEBJbnB1dCB2YWx1ZXNcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2V9KSB7XG4gICAgY29uc29sZS5sb2coJ25nT25DaGFuZ2VzJyk7XG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzKSkge1xuICAgICAgLy8gQ2xlYXIgc3RhdGUgd2hlbiBkcm9wZG93biBpcyB0b2dnbGVkXG4gICAgICBpZiAocHJvcE5hbWUgPT09ICdkaXNwbGF5JyAmJiAhY2hhbmdlcy5kaXNwbGF5LmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIGlmICghY2hhbmdlcy5kaXNwbGF5LmN1cnJlbnRWYWx1ZSkgeyB0aGlzLm9uRGlzcGxheURpc2FibGVkKCk7IH0gZWxzZSB7IHRoaXMub25EaXNwbGF5RW5hYmxlZCgpOyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzcGxheSBlbmFibGVkIGxpc3RlbmVyXG4gIG9uRGlzcGxheUVuYWJsZWQoKSB7XG4gICAgY29uc29sZS5sb2coJ29uRGlzcGxheUVuYWJsZWQnLCB0aGlzLm1vbnRoLCB0aGlzLnllYXIsIHRoaXMuZGF0ZVNlbGVjdGVkKTtcbiAgICBpZiAodGhpcy5tb250aCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMueWVhciA9PT0gdW5kZWZpbmVkKSB7IHRoaXMuY2xlYXJTdGF0ZSgpOyB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRyb3Bkb3duUmVhZHkgPSB0cnVlO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLy8gRGlzcGxheSBkaXNhYmxlZCBsaXN0ZW5lclxuICBvbkRpc3BsYXlEaXNhYmxlZCgpIHtcbiAgICBjb25zb2xlLmxvZygnb25EaXNwbGF5RGlzYWJsZWQnKTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlc2V0WWVhck9uQmx1cikge1xuICAgICAgdGhpcy5jbGVhclN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9udGhDaGFuZ2UgZXZlbnQgbGlzdG5lZXIgZm9yIG1vbnRoIGNvbXBvbmVudFxuICBtb250aENoYW5nZShlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHsgeWVhcjogdGhpcy55ZWFyLCBtb250aDogdGhpcy5tb250aCB9KTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvLyBDbG9zZSBkcm9wZG93blxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgICB0aGlzLmRyb3Bkb3duUmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIENsZWFyIG1vbnRoL3llYXIgdmlldyBzdGF0ZVxuICBjbGVhclN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGggPSB0aGlzLmRhdGVTZWxlY3RlZCA/IHRoaXMuZGF0ZVNlbGVjdGVkLm1vbnRoIDogKG5ldyBEYXRlKS5nZXRNb250aCgpO1xuICAgIHRoaXMueWVhciA9IHRoaXMub3B0aW9ucy55ZWFyU3RhcnQgPyB0aGlzLm9wdGlvbnMueWVhclN0YXJ0IDpcbiAgICAgIHRoaXMuZGF0ZVNlbGVjdGVkID8gdGhpcy5kYXRlU2VsZWN0ZWQueWVhciA6IChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zb2xlLmxvZygnY2xlYXJTdGF0ZScsIHRoaXMubW9udGgsIHRoaXMueWVhcik7XG4gIH1cblxufVxuIl19