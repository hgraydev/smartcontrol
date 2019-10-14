import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class SchoolShiftService {
  private apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  /*
  ** CREATE
  **/
  setSchoolShift(SchoolShift: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/school-shift', SchoolShift);
  }
  /*
  ** READ ALL
  **/
  getSchoolShift(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/school-shift');
  }
  /*
  ** READ BY ID
  **/
  getSchoolShiftById(id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/school-shift/' + id );
  }
  /*
  ** UPDATE
  **/
  updateSchoolShift(id: any, data: any) {
    return this.http.put<any>(this.apiURL + '/school-shift/' + id, data);
  }
  /*
  ** DELETE
  **/
  deleteSchoolShift(idSchoolShift: any):Observable<any> {
    return this.http.delete<any>(this.apiURL + '/school-shift/' + idSchoolShift);
  }



}
