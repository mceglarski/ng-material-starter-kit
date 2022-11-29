import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  public userDetail$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._userService.getUser(data['id']))
  );

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
