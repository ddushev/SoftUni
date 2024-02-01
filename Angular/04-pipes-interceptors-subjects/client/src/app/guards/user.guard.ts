import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { catchError, map, of, take } from 'rxjs';

export const userGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  if (!userService.user$) {
    return router.navigate(['/login']);
  }
  return true;
  // return userService.verifyUser().pipe(
  //   take(1),
  //   map((user) => {
  //     if (!user) {
  //       router.navigate(["login"]);
  //       return false;
  //     }
  //     return true;
  //   }),
  //   catchError(() => {
  //     router.navigate(["login"]);
  //     return of(false);
  //   })
  // );
};
