import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../Employees/employee';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }
   BaseUrl:string = 'http://localhost:8080/';

   getAllEmployees() {
    return this.http.get<Employee[]>(this.BaseUrl+"/employees",{responseType: 'json'});
  }
    getEmployeesFromARange(start:string="1",range:string="10") {
        // let range="5";
        // let start="1";
        // let params1 = new HttpParams();
        // params1.set(range,range);s
        // params1.set(start,start);
  return this.http.get<Employee[]>(this.BaseUrl+`employees/range?start=${start}&range=${range}`,{responseType: 'json'});
}
}