import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCurrenciesService } from '../../../services/crypto-currencies.service';
import { CryptoCurrenciesModel } from '../../../models/crypto-currencies.model';

@Component({
  selector: 'app-crypto-currencies',
  templateUrl: './crypto-currencies.component.html',
  styleUrls: ['./crypto-currencies.component.scss'],
})
export class CryptoCurrenciesComponent {
  public cryptoList$: Observable<CryptoCurrenciesModel[]> =
    this._cryptoCurrenciesService.getAllCryptoCurrencies();

  constructor(private _cryptoCurrenciesService: CryptoCurrenciesService) {}
}
