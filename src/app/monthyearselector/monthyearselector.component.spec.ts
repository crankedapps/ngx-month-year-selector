import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthyearselectorComponent } from './monthyearselector.component';

describe('MonthyearselectorComponent', () => {
  let component: MonthyearselectorComponent;
  let fixture: ComponentFixture<MonthyearselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthyearselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthyearselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
