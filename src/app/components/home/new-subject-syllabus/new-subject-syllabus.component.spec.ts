import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubjectSyllabusComponent } from './new-subject-syllabus.component';

describe('NewSubjectSyllabusComponent', () => {
  let component: NewSubjectSyllabusComponent;
  let fixture: ComponentFixture<NewSubjectSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubjectSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubjectSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
