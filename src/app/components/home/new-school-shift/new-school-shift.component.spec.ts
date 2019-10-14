import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolShiftComponent } from './new-school-shift.component';

describe('NewSchoolShiftComponent', () => {
  let component: NewSchoolShiftComponent;
  let fixture: ComponentFixture<NewSchoolShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSchoolShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchoolShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
