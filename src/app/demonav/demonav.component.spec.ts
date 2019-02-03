import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonavComponent } from './demonav.component';

describe('DemonavComponent', () => {
  let component: DemonavComponent;
  let fixture: ComponentFixture<DemonavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
