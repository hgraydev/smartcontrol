import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusDetailComponent } from './syllabus-detail.component';

describe('SyllabusDetailComponent', () => {
  let component: SyllabusDetailComponent;
  let fixture: ComponentFixture<SyllabusDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
