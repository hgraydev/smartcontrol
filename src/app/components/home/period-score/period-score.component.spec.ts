import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodScoreComponent } from './period-score.component';

describe('PeriodScoreComponent', () => {
  let component: PeriodScoreComponent;
  let fixture: ComponentFixture<PeriodScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
