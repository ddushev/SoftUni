import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { UserId } from '../../types/user-id';
import environment from '../../environments/environment.development';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterData } from '../../types/registerData';
import { BehaviorSubject, Observable, Subscription, catchError, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | UserId>(undefined);
  user$ = this.user$$.asObservable();

  user: UserId | undefined;
  apiUrl: string = environment.apiUrl
  subscription: Subscription;
  constructor(private http: HttpClient, private router: Router) {
    this.subscription = this.user$.subscribe(user => {
        this.user = user;
      });
  }

  login(form: NgForm) {
    if (form.invalid) {
      form.reset();
      return;
    }
    this.http.post<UserId>(`${this.apiUrl}/login`, form.value).subscribe({
        next: (user) => {
          this.user$$.next(user);
          this.router.navigate(["/themes"]);
        },
        error(err) {
          console.warn(err.message);
        },
      });
    form.reset();

  }

  register(registerData: RegisterData): void {
    this.http.post<UserId>(`${this.apiUrl}/register`, registerData).subscribe({
      next: (user) => {
          this.user$$.next(user);
          this.router.navigate(["/themes"]);
      },
      error(err) {
        console.warn(err.message);
      }
    })
  }

  logout(): void {
    this.http.post<any>(`${this.apiUrl}/logout`, {}).subscribe((res) => this.user$$.next(res));
    this.router.navigate(["/home"]);
  }

  // verifyUser(): void {
  //   this.http.get<UserId>(`${this.apiUrl}/users/profile`).subscribe({
  //     next: (user) => {
  //       this.user = user;
  //     },
  //     error: (err) => {
  //       this.user = undefined;
  //       console.warn(err.message);
  //     },
  //   })
  // }

  // verifyUser(): Observable<UserId> {
  //   return this.http.get<UserId>(`${this.apiUrl}/users/profile`).pipe(
  //     tap((user) => {
  //       this.user = user;
  //     }),
  //     catchError((err) => {
  //       this.user = undefined;
  //       console.warn(err.message);
  //       throw err; // rethrow the error
  //     })
  //   );
  // }

  verifyUser() {
    return this.http.get<UserId>(`${this.apiUrl}/users/profile`).pipe(
      tap((user) => {
        this.user$$.next(user);
      }),
      catchError((err) => {
        this.user$$.next(undefined);
        console.warn(err.message);
        throw err; // rethrow the error
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
