import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setStudent(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/student', data);
  }

  getStudents() {
    return this.http.get<any>(this.apiURL + '/student');
  }

  // getStudents(offer_id: any): Observable<any> {
  //   return this.http.get<any>(this.apiURL + '/enroll/' + offer_id);
  // }
  
}
