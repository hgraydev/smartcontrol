import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmployeeTypes(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/employee_type');
  }

}
