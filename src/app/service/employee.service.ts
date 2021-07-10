import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../Employees/employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
   BaseUrl:string = 'http://localhost:8080/';

    getEmployeesFromARange() {
        let range="5";
        let start="1";
        let params1 = new HttpParams();
        params1.append(range,range);
        params1.append(start,start);
  return this.http.get<Employee[]>(this.BaseUrl,{params:params1,responseType: 'json'});
}
}