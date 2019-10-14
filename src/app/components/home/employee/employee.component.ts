import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Employees: any;
  searchFilter: any;
  //initializing p to one
  p: number = 1;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe( result => { console.log(result);
      this.Employees = result;
    })
  }

}
