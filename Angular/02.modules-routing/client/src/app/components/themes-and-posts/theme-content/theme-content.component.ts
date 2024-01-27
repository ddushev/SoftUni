import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { HomeComponent } from '../../home/home.component';
import { Theme } from '../../../types/theme';

@Component({
  selector: 'app-theme-content',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './theme-content.component.html',
  styleUrl: './theme-content.component.scss'
})
export class ThemeContentComponent implements OnInit {
  theme!: Theme
  constructor(private activeRoute: ActivatedRoute, public userService: UserService) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data) => {
      console.log(data);
      this.theme = data['themeData']
    })
  }
}
