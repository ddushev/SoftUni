import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  standalone: true,
  imports: [],
  templateUrl: './new-theme.component.html',
  styleUrl: './new-theme.component.scss'
})
export class NewThemeComponent {
  constructor(private apiService: ApiServiceService, private router: Router) {}

  onCreateTheme(event: MouseEvent, newTheme: {themeName: string, postText: string}) {
    event.preventDefault();
    this.apiService.createTheme(newTheme).subscribe((data) => this.router.navigate(["/themes", data._id]));
  }
}
