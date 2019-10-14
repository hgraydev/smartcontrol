import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeriodGroupComponent } from './new-period-group.component';

describe('NewPeriodGroupComponent', () => {
  let component: NewPeriodGroupComponent;
  let fixture: ComponentFixture<NewPeriodGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeriodGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeriodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
