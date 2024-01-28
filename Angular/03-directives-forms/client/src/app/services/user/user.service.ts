import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserId } from '../../types/user-id';
import environment from '../../environments/environment.development';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegisterData } from '../../types/registerData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserId | undefined;
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient, private router: Router) { }

  login(form: NgForm): void {
    form.reset();
    if (form.invalid) {
      return;
    }
      this.http.post<UserId>(`${this.apiUrl}/login`, form.value).subscribe({
        next: (data) => {
          this.user = data;
          this.router.navigate(["/home"]);
        },
        error(err) {
          console.warn(err.message);
        },
      });
  }

  register(registerData: RegisterData): void {
    this.http.post<UserId>(`${this.apiUrl}/register`, registerData).subscribe({
      next: (data) => {
          this.user = data;
          this.router.navigate(["/home"]);
      },
      error(err) {
        console.warn(err.message);
      }
    })
  }

  logout(): void {
    this.user = undefined;
  }
}
