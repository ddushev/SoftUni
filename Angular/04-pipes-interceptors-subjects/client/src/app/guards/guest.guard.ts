import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { inject } from '@angular/core';
import { asyncScheduler, catchError, map, scheduled, take } from 'rxjs';


export const guestGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  return userService.verifyUser().pipe(
    take(1),
    map((user) => {
      if (user) {
        router.navigate(["themes"]);
        return false;
      }
      return true;
    }),
    catchError(() => {
      return scheduled([true], asyncScheduler);
    })
  );
};
