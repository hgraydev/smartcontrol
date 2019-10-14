import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchoolLevelComponent } from './new-school-level.component';

describe('NewSchoolLevelComponent', () => {
  let component: NewSchoolLevelComponent;
  let fixture: ComponentFixture<NewSchoolLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSchoolLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSchoolLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
