import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubjectScheduleComponent } from './new-subject-schedule.component';

describe('NewSubjectScheduleComponent', () => {
  let component: NewSubjectScheduleComponent;
  let fixture: ComponentFixture<NewSubjectScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubjectScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubjectScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
