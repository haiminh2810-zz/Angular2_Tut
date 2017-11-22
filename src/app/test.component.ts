import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './services/employee.services'
@Component({
  selector: 'test',
  template: `
  <h3></h3>
  <ul>
  <li *ngFor = "let employee of employeeList">{{employee.Name}} {{employee.Id}}</li>
  </ul>
  `,  
  providers:[EmployeeService]
})
export class TestComponent  { 
  employeeList :Array<any>;
  constructor(private employeeService:EmployeeService){
    this.employeeList=this.employeeService.getList();
  }
  
  // ngOnInit(){
  //   this.employeeList=this.employeeService.getList();
  // }
}