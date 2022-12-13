import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  combineLatest,
  Subject,
} from 'rxjs';
import { EmployeeModelV2 } from '../../../models/employee.model';

export enum ageEnum {
  AGE_RANGE_1 = '0-20',
  AGE_RANGE_2 = '21-30',
  AGE_RANGE_3 = '31-40',
  AGE_RANGE_4 = '41-50',
  AGE_RANGE_5 = '51-100',
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'asc'
  );
  private _ageSubject: Subject<string> = new Subject<string>();
  public order$: Observable<string> = this._orderSubject.asObservable();
  public age$: Observable<string> = this._ageSubject.asObservable();

  public employeeList$: Observable<EmployeeModelV2[]> = combineLatest([
    this._employeeService.getAll(),
    this.order$,
    this.age$,
  ]).pipe(
    map(([employee, order, age]: [EmployeeModelV2[], string, string]) => {
      return employee
        .sort((a, b) => {
          if (a.height > b.height) return order === 'asc' ? 1 : -1;
          if (a.height < b.height) return order === 'asc' ? -1 : 1;
          return 0;
        })
        .filter((emp) => {
          switch (age) {
            case ageEnum.AGE_RANGE_1: {
              return emp.age > 0 && emp.age <= 20;
            }
            case ageEnum.AGE_RANGE_2: {
              return emp.age > 20 && emp.age <= 30;
            }
            case ageEnum.AGE_RANGE_3: {
              return emp.age > 30 && emp.age <= 40;
            }
            case ageEnum.AGE_RANGE_4: {
              return emp.age > 40 && emp.age <= 50;
            }
            case ageEnum.AGE_RANGE_5: {
              return emp.age > 50 && emp.age <= 100;
            }
            default: {
              return emp;
            }
          }
        });
    })
  );

  public orders: Observable<string[]> = of(['asc', 'desc']);
  public ages: Observable<string[]> = of([
    'All',
    ageEnum.AGE_RANGE_1,
    ageEnum.AGE_RANGE_2,
    ageEnum.AGE_RANGE_3,
    ageEnum.AGE_RANGE_4,
    ageEnum.AGE_RANGE_5,
  ]);
  public displayedColumns: string[] = ['id', 'firstName', 'age', 'height'];

  constructor(private _employeeService: EmployeeService) {}

  public sort(order: string): void {
    this._orderSubject.next(order);
  }

  public selectAge(age: string): void {
    this._ageSubject.next(age);
  }
}
