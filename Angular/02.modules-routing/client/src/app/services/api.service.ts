import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import environment from '../environments/environment.development';
import { Post } from '../types/posts';
import { Theme } from '../types/themes';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private http = inject(HttpClient);

  constructor() { }

  getPosts() {
    const { apiUrl } = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts?limit=5`);
  };

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
}
