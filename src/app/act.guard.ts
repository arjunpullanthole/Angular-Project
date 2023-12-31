import { CanActivateFn } from '@angular/router';
import { StorageService } from './storage.service';
import { inject} from '@angular/core';

export const actGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  if (!storage.isAuth())
    return false;
  return true;
};
