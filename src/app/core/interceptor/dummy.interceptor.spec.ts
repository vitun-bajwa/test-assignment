import { TestBed } from '@angular/core/testing';

import { DummyInterceptor } from './dummy.interceptor';

describe('DummyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DummyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DummyInterceptor = TestBed.inject(DummyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
