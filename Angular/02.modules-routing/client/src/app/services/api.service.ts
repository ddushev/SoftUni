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
    const { appUrl } = environment;
    return this.http.get<Post[]>(`${appUrl}/posts?limit=5`);
  };

  getThemes() {
    const { appUrl } = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }
}
