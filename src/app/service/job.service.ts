import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../Employees/employee';

@Injectable()
export class JobService {
  constructor(private http: HttpClient) { }
   BaseUrl:string = 'http://localhost:8080/';

   getAllJobs() {
    return this.http.get<Employee[]>(this.BaseUrl+"jobs",{responseType: 'json'});
  }
}