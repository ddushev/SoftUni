import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserId } from '../../types/user-id';
import environment from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserId | undefined;
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient, private router: Router) { }

  login(event: MouseEvent, email: string, password: string): void {
      event.preventDefault();
      this.http.post<UserId>(`${this.apiUrl}/login`, {email, password}).subscribe({
        next: (value) => {
          this.user = value
          this.router.navigate(["/home"]);
        },
        error(err) {
          console.warn(err.message);
        },
      });
  }

  logout(): void {
    this.user = undefined;
  }
}
