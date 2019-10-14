import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolShiftComponent } from './edit-school-shift.component';

describe('EditSchoolShiftComponent', () => {
  let component: EditSchoolShiftComponent;
  let fixture: ComponentFixture<EditSchoolShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchoolShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
