import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';

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

  constructor(private _loginService: LoginService) {}

  public onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService
      .login({
        username: loginForm.get('username')?.value,
        password: loginForm.get('password')?.value,
      })
      .subscribe();
  }
}
