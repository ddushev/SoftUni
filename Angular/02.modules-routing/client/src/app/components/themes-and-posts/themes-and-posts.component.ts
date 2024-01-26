import { Component } from '@angular/core';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesComponent, PostsComponent, HomeComponent],
  templateUrl: './themes-and-posts.component.html',
  styleUrl: './themes-and-posts.component.scss'
})
export class ThemesAndPosts {
  constructor(public userService: UserService) {}
}
