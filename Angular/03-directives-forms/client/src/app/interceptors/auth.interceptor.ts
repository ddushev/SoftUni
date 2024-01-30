import { HttpInterceptorFn } from '@angular/common/http';
import environment from '../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiUrl = environment.apiUrl
  if (req.url.startsWith(apiUrl)) {
    req = req.clone({
      withCredentials: true
    })
  }
  return next(req);
};
