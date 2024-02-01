import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  if (userService.user) {
    return router.navigate(['/themes']);
  }
  return true;
};
