import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../brands/brand';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
   configUrl:string = 'http://localhost:8080/employees';

    getConfig() {
  return this.http.get<Brand[]>(this.configUrl,{responseType: 'json'});
}
}