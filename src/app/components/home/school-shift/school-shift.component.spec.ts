import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolShiftComponent } from './school-shift.component';

describe('SchoolShiftComponent', () => {
  let component: SchoolShiftComponent;
  let fixture: ComponentFixture<SchoolShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
