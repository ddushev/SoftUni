import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import environment from '../environments/environment.development';
import { Post } from '../types/posts';
import { Theme } from '../types/themes';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiUrl: string = environment.apiUrl
  private http = inject(HttpClient);

  constructor() { }

  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?limit=5`);
  };

  getThemes() {
    return this.http.get<Theme[]>(`${this.apiUrl}/themes`);
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`${this.apiUrl}/themes/${id}`);
  }
}
