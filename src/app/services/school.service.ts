import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setSchool(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/school', data);
  }

  getSchool():Observable<any> {
    return this.http.get<any>(this.apiURL + '/school');
  }

  updateSchool(idSchool: any, data: any):Observable<any> {
    return this.http.put<any>(this.apiURL + '/school/' +  idSchool, data);
  }

  //LOCAL STORAGE
  
}


