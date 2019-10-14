import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeriodScoreComponent } from './new-period-score.component';

describe('NewPeriodScoreComponent', () => {
  let component: NewPeriodScoreComponent;
  let fixture: ComponentFixture<NewPeriodScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeriodScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeriodScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
