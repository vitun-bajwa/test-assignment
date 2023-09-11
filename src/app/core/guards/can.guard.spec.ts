import { TestBed } from '@angular/core/testing';

import { CanGuard } from './can.guard';

describe('CanGuard', () => {
  let guard: CanGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
