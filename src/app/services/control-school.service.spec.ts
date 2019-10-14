import { TestBed } from '@angular/core/testing';

import { ControlSchoolService } from './control-school.service';

describe('ControlSchoolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlSchoolService = TestBed.get(ControlSchoolService);
    expect(service).toBeTruthy();
  });
});
