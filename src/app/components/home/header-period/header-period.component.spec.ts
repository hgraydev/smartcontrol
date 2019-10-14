import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPeriodComponent } from './header-period.component';

describe('HeaderPeriodComponent', () => {
  let component: HeaderPeriodComponent;
  let fixture: ComponentFixture<HeaderPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
