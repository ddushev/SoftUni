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
  registerForm = this.FormBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    telCode: ['', [Validators.required]],
    passGroup: this.FormBuilder.nonNullable.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]],
    })
  });
  constructor(private FormBuilder: FormBuilder, private userService: UserService) { }

  handleSubmit() {
    console.log(this.registerForm.invalid)
    if (this.registerForm.invalid) {
      return;
    }
    const registerData = {
      tel: this.registerForm.value.telCode?.concat(this.registerForm.value.tel!),
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.passGroup?.password,
      rePassword: this.registerForm.value.passGroup?.rePassword,
    }
    this.userService.register(registerData);
  }

   isInputValid(field: string, error: string, group?: string): boolean {
    if (group) {
      return !!this.registerForm.get(group)?.get(field)?.hasError(error);
    }
    return !!this.registerForm.get(field)?.hasError(error);
  }

}
