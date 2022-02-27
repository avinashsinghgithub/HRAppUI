import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeData } from '../model/employee-data';
import { EmployeeService } from '../service/employee.service';
import { Employee } from './employee';
@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   // page = 1;
   // pageSize = 10;
   // employees = new Array<Employee>();
   employeeData: EmployeeData;
        ngOnInit(): void {
            this.getEmployeesFromARange();
        }
constructor(private employeeService : EmployeeService){

}
getEmployees() {
    this.employeeData = new EmployeeData();

    this.employeeService.getAllEmployees()
        .subscribe((data: any) => {
            this.employeeData.employees = data;
            });
        
}
getEmployeesFromARange() {
    this.employeeData = new EmployeeData();
    this.employeeData.currentPage="1";
    this.employeeData.totalEmployeesOnPage="10";
    this.employeeData.totalEmployees="106";
    this.employeeService.getEmployeesFromARange()
        .subscribe((data: any) => {
            this.employeeData.employees = data;
            });
        
}
pageChange(EventEmitter){
this.employeeData.currentPage=EventEmitter;
this.employeeService.getEmployeesFromARange(""+Number.parseInt(this.employeeData.currentPage)*Number.parseInt(this.employeeData.totalEmployeesOnPage))
.subscribe((data: any) => {
    this.employeeData.employees = data;
    });
}
}