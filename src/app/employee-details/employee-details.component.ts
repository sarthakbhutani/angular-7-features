import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee = [];
  constructor(public _employeeService : EmployeeService) {}
  
  // constructor(){}
  ngOnInit() {
    // this.employee = this._employeeService.getEmployee();
    // console.log(this.employee);
  }

}
