import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { actGuard } from './act.guard';

describe('actGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => actGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
