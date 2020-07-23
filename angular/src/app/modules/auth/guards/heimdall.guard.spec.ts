import { TestBed } from '@angular/core/testing';

import { HeimdallGuard } from './heimdall.guard';

describe('HeimdallGuard', () => {
  let guard: HeimdallGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeimdallGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
