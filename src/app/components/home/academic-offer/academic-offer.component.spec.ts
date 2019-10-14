import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicOfferComponent } from './academic-offer.component';

describe('AcademicOfferComponent', () => {
  let component: AcademicOfferComponent;
  let fixture: ComponentFixture<AcademicOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
