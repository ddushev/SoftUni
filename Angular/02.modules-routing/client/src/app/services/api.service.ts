import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import environment from '../environments/environment.development';
import { Post } from '../types/posts';
import { Themes } from '../types/themes';
import { Theme } from '../types/theme';

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
    return this.http.get<Themes[]>(`${this.apiUrl}/themes`);
  }

  getSingleTheme(id: string) {
    return this.http.get<Theme>(`${this.apiUrl}/themes/${id}`);
  }

  createTheme(newTheme: {themeName: string, postText: string}) {
    return this.http.post<Themes>(`${this.apiUrl}/themes`, newTheme);
  }

  // subscribeForTheme(id: string) {
  //   return this.http.put(`${this.apiUrl}/themes/${id}`, "");
  // }
}
