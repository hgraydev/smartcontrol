import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAcademicComponent } from './header-academic.component';

describe('HeaderAcademicComponent', () => {
  let component: HeaderAcademicComponent;
  let fixture: ComponentFixture<HeaderAcademicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAcademicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
