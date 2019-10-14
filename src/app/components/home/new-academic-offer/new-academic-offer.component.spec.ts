import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcademicOfferComponent } from './new-academic-offer.component';

describe('NewAcademicOfferComponent', () => {
  let component: NewAcademicOfferComponent;
  let fixture: ComponentFixture<NewAcademicOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAcademicOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAcademicOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
