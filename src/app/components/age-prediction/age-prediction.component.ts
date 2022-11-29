import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { AgePredictionService } from '../../services/age-prediction.service';
import { ActivatedRoute } from '@angular/router';
import { AgePredictionModel } from '../../models/age-prediction.model';

@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  styleUrls: ['./age-prediction.component.scss'],
})
export class AgePredictionComponent {
  public agePrediction$: Observable<AgePredictionModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) =>
        this._agePredictionService.getAgePrediction(data['name'])
      )
    );

  constructor(
    private _agePredictionService: AgePredictionService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
