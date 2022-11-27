import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  public registerForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    firstname: new FormControl(),
    lastname: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _userService: UserService) {}

  public onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._userService
      .register({
        username: registerForm.get('username')?.value,
        password: registerForm.get('password')?.value,
        email: registerForm.get('email')?.value,
        firstname: registerForm.get('firstname')?.value,
        lastname: registerForm.get('lastname')?.value,
        city: registerForm.get('city')?.value,
        street: registerForm.get('street')?.value,
        number: registerForm.get('number')?.value,
        zipcode: registerForm.get('zipcode')?.value,
        phone: registerForm.get('phone')?.value,
      })
      .subscribe();
  }
}
