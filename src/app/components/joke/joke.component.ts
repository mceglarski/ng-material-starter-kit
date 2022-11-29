import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { JokeService } from '../../services/joke.service';
import { JokeModel } from '../../models/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  public joke$: Observable<JokeModel[]> = this._activatedRoute.params.pipe(
    switchMap((data) => this._jokeService.getJoke(data['type']))
  );

  constructor(
    private _jokeService: JokeService,
    private _activatedRoute: ActivatedRoute
  ) {}

  consoling(a: any) {
    console.log(a);
  }
}
