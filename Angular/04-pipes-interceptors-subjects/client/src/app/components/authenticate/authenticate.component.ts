import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-authenticate',
  standalone: true,
  imports: [],
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.scss'
})
export class AuthenticateComponent implements OnInit {

  public userService = inject(UserService);

  ngOnInit(): void {
    this.userService.verifyUser();
  }
}
