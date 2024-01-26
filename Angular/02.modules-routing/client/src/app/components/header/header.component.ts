import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { UserId } from '../../types/user-id';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private userService: UserService) {
  }

  get isLoggedIn(): boolean{
    return !!this.userService.user;
  }

  get user(): UserId | undefined {
    return this.userService.user;
  }

  set logout(event: MouseEvent) {
    event.preventDefault();
    this.userService.logout();
  }

}
