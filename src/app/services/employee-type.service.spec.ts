import { TestBed } from '@angular/core/testing';

import { EmployeeTypeService } from './employee-type.service';

describe('EmployeeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeTypeService = TestBed.get(EmployeeTypeService);
    expect(service).toBeTruthy();
  });
});
