import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-reactive-form.component.html',
  styleUrl: './register-reactive-form.component.scss'
})
export class RegisterReactiveFormComponent {
  registerForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    telCode: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    rePassword: ['', [Validators.required]],
  });
  constructor(private FormBuilder: FormBuilder, private userService: UserService) { }

  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    const registerData = {
      tel: this.registerForm.value.telCode?.concat(this.registerForm.value.tel!),
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      rePassword: this.registerForm.value.rePassword,
    }
    this.userService.register(registerData);
  }

}
