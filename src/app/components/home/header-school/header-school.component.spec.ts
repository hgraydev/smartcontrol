import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSchoolComponent } from './header-school.component';

describe('HeaderSchoolComponent', () => {
  let component: HeaderSchoolComponent;
  let fixture: ComponentFixture<HeaderSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
