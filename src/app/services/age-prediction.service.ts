import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactModel } from '../models/cat-fact.model';
import { AgePredictionModel } from '../models/age-prediction.model';

@Injectable()
export class AgePredictionService {
  constructor(private _httpClient: HttpClient) {}

  public getAgePrediction(name: string): Observable<AgePredictionModel> {
    return this._httpClient.get<AgePredictionModel>(
      'https://api.agify.io/?name=' + name
    );
  }
}