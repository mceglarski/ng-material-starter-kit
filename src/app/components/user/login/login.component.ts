import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _userService: UserService) {}

  public onLoginFormSubmitted(loginForm: FormGroup): void {
    this._userService
      .login({
        username: loginForm.get('username')?.value,
        password: loginForm.get('password')?.value,
      })
      .subscribe();
  }
}
