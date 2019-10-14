import { TestBed } from '@angular/core/testing';

import { SchoolShiftService } from './school-shift.service';

describe('SchoolShiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolShiftService = TestBed.get(SchoolShiftService);
    expect(service).toBeTruthy();
  });
});
