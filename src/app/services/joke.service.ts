import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeModel } from '../models/joke.model';

@Injectable()
export class JokeService {
  constructor(private _httpClient: HttpClient) {}

  public getJoke(type: string): Observable<JokeModel[]> {
    return this._httpClient.get<JokeModel[]>(
      'https://official-joke-api.appspot.com/jokes/' + type + '/random'
    );
  }
}
