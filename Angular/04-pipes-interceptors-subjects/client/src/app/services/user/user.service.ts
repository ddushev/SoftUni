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
export class UserService {

  user: UserId | undefined;
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient, private router: Router) {

  }

  login(form: NgForm) {
    if (form.invalid) {
      form.reset();
      return;
    }
    this.http.post<UserId>(`${this.apiUrl}/login`, form.value).subscribe({
        next: (user) => {
          this.user = user;
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
          this.user = user;
          this.router.navigate(["/themes"]);
      },
      error(err) {
        console.warn(err.message);
      }
    })
  }

  logout(): void {
    this.http.post<any>(`${this.apiUrl}/logout`, {}).subscribe((res) => this.user = res);
    this.router.navigate(["/home"]);
  }

  verifyUser() {
    return this.http.get<UserId>(`${this.apiUrl}/users/profile`);
  }

}
