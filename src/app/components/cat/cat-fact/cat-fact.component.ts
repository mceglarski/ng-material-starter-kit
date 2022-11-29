import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../../models/cat-fact.model';
import { CatFactService } from '../../../services/cat-fact.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss'],
})
export class CatFactComponent {
  public catFact$: Observable<CatFactModel> = this._catFactService.getCatFact();

  constructor(private _catFactService: CatFactService) {}
}
