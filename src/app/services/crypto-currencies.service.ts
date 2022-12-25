import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoCurrenciesModel } from '../models/crypto-currencies.model';

@Injectable()
export class CryptoCurrenciesService {
  constructor(private _httpClient: HttpClient) {}

  public getAllCryptoCurrencies(): Observable<CryptoCurrenciesModel[]> {
    return this._httpClient.get<CryptoCurrenciesModel[]>(
      'https://api2.binance.com/api/v3/ticker/24hr'
    );
  }

}
