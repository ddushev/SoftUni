import { Component, OnInit, inject } from '@angular/core';
import { Theme } from '../../../types/themes';
import { ApiServiceService } from '../../../services/api.service';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent implements OnInit {
  themes: Theme[] = [];

  private service = inject(ApiServiceService);

  constructor() { }

  ngOnInit(): void {
    this.service.getThemes().subscribe((data) => this.themes = data);
  }
}
