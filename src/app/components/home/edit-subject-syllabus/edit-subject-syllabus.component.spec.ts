import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubjectSyllabusComponent } from './edit-subject-syllabus.component';

describe('EditSubjectSyllabusComponent', () => {
  let component: EditSubjectSyllabusComponent;
  let fixture: ComponentFixture<EditSubjectSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubjectSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubjectSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
