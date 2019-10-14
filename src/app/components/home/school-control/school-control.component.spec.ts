import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolControlComponent } from './school-control.component';

describe('SchoolControlComponent', () => {
  let component: SchoolControlComponent;
  let fixture: ComponentFixture<SchoolControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
