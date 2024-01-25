import { Component } from '@angular/core';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesComponent, PostsComponent],
  templateUrl: './themes-and-posts.component.html',
  styleUrl: './themes-and-posts.component.scss'
})
export class ThemesAndPosts {

}
