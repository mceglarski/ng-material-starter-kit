import { Component } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModelV2 } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-grid-list',
  templateUrl: './employee-grid-list.component.html',
  styleUrls: ['./employee-grid-list.component.scss'],
})
export class EmployeeGridListComponent {
  private _selectedEmployeeIdSubject: Subject<number> = new Subject<number>();

  public selectedProductId$: Observable<number> =
    this._selectedEmployeeIdSubject.asObservable();
  public readonly employeeList$: Observable<EmployeeModelV2[]> =
    this._employeeService.getAll();
  public readonly employeeDetails$: Observable<EmployeeModelV2> =
    this.selectedProductId$.pipe(
      switchMap((data) => this._employeeService.getOne(data))
    );

  constructor(private _employeeService: EmployeeService) {}

  public selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(id);
  }
}
