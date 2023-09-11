import { TestBed } from '@angular/core/testing';

import { TableFunctionService } from './table-function.service';

describe('TableFunctionService', () => {
  let service: TableFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
