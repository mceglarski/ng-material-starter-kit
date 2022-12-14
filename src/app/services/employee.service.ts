import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeModel, EmployeeModelV2 } from '../models/employee.model';

export interface ApiResponse<T> {
  users: T;
}

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  public create(
    employee: Omit<EmployeeModel, 'id'>
  ): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>(
      'https://reqres.in/api/create',
      employee
    );
  }

  public getAll(): Observable<EmployeeModelV2[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeModelV2[]>>('https://dummyjson.com/users')
      .pipe(
        map((response: ApiResponse<EmployeeModelV2[]>) => {
          return response.users.map((employeeResponse: EmployeeModelV2) => {
            return {
              id: employeeResponse.id,
              firstName: employeeResponse.firstName,
              height: employeeResponse.height,
              age: employeeResponse.age,
            };
          });
        })
      );
  }

  public delete(id: number): Observable<EmployeeModelV2> {
    return this._httpClient.delete<EmployeeModelV2>(
      'https://dummyjson.com/users/' + id
    );
  }
}
