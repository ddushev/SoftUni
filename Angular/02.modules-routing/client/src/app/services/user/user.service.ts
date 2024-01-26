import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserId } from '../../types/user-id';
import environment from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: UserId;
  apiUrl: string = environment.apiUrl
  constructor(private http: HttpClient) { }

  login(event: MouseEvent, email: string, password: string): void {
      event.preventDefault();
      this.http.post<UserId>(`${this.apiUrl}/login`, {email, password}).subscribe({
        next: (value) => {
          this.user = value
        },
        error(err) {
          console.warn(err.message);
        },
      });
  }
}
