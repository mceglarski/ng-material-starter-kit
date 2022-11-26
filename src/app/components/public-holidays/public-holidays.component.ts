import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PublicHolidayModel } from '../../models/public-holiday.model';
import { PublicHolidaysService } from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holidays',
  templateUrl: './public-holidays.component.html',
  styleUrls: ['./public-holidays.component.scss'],
})
export class PublicHolidaysComponent {
  public publicHolidaysList$: Observable<PublicHolidayModel[]> =
    this._publicHolidaysService.getAllPublicHolidays();

  constructor(private _publicHolidaysService: PublicHolidaysService) {}
}
