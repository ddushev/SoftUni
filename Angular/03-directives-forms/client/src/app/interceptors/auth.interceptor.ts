import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authUrl = new RegExp('login|register');
  if (req.url.match(authUrl)) {
    req = req.clone({
      withCredentials: true
    })
  }
  return next(req);
};
