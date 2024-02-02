import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { asyncScheduler, catchError, map, scheduled, take } from 'rxjs';


export const userGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  return userService.verifyUser().pipe(
    map((user) => {
      if (!user) {
        router.navigate(["login"]);
        return false;
      }
      return true;
    }),
    catchError(() => {
      router.navigate(["login"]);
      return scheduled([false], asyncScheduler);
    })
  );
};
