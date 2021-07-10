import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Employee } from './employee';
@Component({
    selector: 'employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees = new Array<Employee>();
        ngOnInit(): void {
            this.getEmployees();
        }
constructor(private configService : ConfigService){

}
getEmployees() {
    this.configService.getConfig()
        .subscribe((data: any) => {
            this.employees = data;
            });
        
}
getEmployeesFromARange() {
    this.configService.getConfig()
        .subscribe((data: any) => {
            this.employees = data;
            });
        
}
}