import { Component,OnInit } from '@angular/core';
import {EmployeeService} from './services/employee.services'
import {ApiService} from './services/api.services'
@Component({
  selector: 'test',
  template: `
  <h3></h3>
  <ul>
  <li *ngFor = "let employee of apiData">{{employee.id}} {{employee.name}}</li>
  </ul>
  `,  
  providers:[EmployeeService,ApiService]
})
export class TestComponent  { 
  employeeList :Array<any>;
  apiData :Array<any>;
  constructor(private employeeService:EmployeeService,private apiService:ApiService){
    this.employeeList=this.employeeService.getList();
    this.apiService.getApi().subscribe((response:any)=>{this.apiData=response})
    console.log(this.apiData);
  }
  // ngOnInit(){
  //   this.employeeList=this.employeeService.getList();
  // }
}