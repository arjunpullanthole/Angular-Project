import { CanActivateFn } from '@angular/router';
import { StorageService } from './storage.service';
import { inject} from '@angular/core';

export const actGuard: CanActivateFn = (route, state) => {
  const storage = inject(StorageService);
  const { roles } = route.data;
  if (!storage.isAuth)
    return false;
  if (roles && !roles.includes(storage.getrole()))
  {
    return false;
  }
  return true;
};
