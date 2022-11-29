import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { UserModel, UserModelDTO } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  public getUser(id: number): Observable<UserModel> {
    return this._httpClient.get<UserModel>(
      'https://fakestoreapi.com/users/' + id
    );
  }

  public register(user: UserModelDTO): Observable<UserModelDTO> {
    return this._httpClient.post<UserModelDTO>(
      'https://fakestoreapi.com/users',
      user
    );
  }

  public login(login: LoginModel): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>(
      'https://fakestoreapi.com/auth/login',
      login
    );
  }
}
