import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    salary: new FormControl(),
  });

  constructor(private _employeeService: EmployeeService) {}

  public onEmployeeFormSubmitted(employeeForm: FormGroup): void {
    this._employeeService
      .create({
        name: employeeForm.get('name')?.value,
        age: employeeForm.get('age')?.value,
        salary: employeeForm.get('salary')?.value,
      })
      .subscribe();
  }
}
