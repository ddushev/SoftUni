import { Component } from '@angular/core';
import { ThemesComponent } from './themes/themes.component';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemesComponent, PostsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
