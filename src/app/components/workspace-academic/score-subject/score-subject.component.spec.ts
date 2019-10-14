import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubjectComponent } from './score-subject.component';

describe('ScoreSubjectComponent', () => {
  let component: ScoreSubjectComponent;
  let fixture: ComponentFixture<ScoreSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
