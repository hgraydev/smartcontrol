import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setEmployee(data: any):Observable<any>{
    return this.http.post<any>(this.apiURL + '/employee', data);
  }

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/employee');
  }
  

  getTeachers():Observable<any> {
    return this.http.get<any>(this.apiURL + '/employee/teacher');
  }
}
