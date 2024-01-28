import { Component, OnInit, inject } from '@angular/core';
import { Themes } from '../../../types/themes';
import { ApiServiceService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent implements OnInit {
  themes: Themes[] = [];

  private service = inject(ApiServiceService);
  public userService = inject(UserService);
  constructor() { }

  ngOnInit(): void {
    this.service.getThemes().subscribe((data) => this.themes = data);
  }
}
