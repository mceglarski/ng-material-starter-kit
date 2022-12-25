import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoCurrenciesModel } from '../../../models/crypto-currencies.model';
import { CryptoCurrenciesService } from '../../../services/crypto-currencies.service';

@Component({
  selector: 'app-crypto-grid-list',
  templateUrl: './crypto-grid-list.component.html',
  styleUrls: ['./crypto-grid-list.component.scss'],
})
export class CryptoGridListComponent {
  private _cryptoSubject: Subject<CryptoCurrenciesModel> =
    new Subject<CryptoCurrenciesModel>();
  public cryptoDetails$: Observable<CryptoCurrenciesModel> =
    this._cryptoSubject.asObservable();
  public cryptoList$: Observable<CryptoCurrenciesModel[]> =
    this._cryptoCurrenciesService.getAllCryptoCurrencies();

  constructor(private _cryptoCurrenciesService: CryptoCurrenciesService) {}

  public selectCrypto(crypto: CryptoCurrenciesModel): void {
    this._cryptoSubject.next(crypto);
  }
}
