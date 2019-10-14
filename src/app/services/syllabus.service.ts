import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})

export class SyllabusService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  setSyllabus(data: any) {
    return this.http.post<any>(this.apiURL + '/syllabus', data);
  }

  getSyllabus(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/syllabus');
  }

  getSyllabysById(id: any):Observable<any> {
    return this.http.get<any>( this.apiURL + '/syllabus/' + id);
  }
  
  updateSyllabus(id: any, data: any):Observable<any> {
    return this.http.put<any>(this.apiURL + '/syllabus/' + id, data);
  }

  // subjects by Syllabus

  getSubjectsBySyllabus(syllabus_id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/subject/syllabus/' + syllabus_id);
  }


}
