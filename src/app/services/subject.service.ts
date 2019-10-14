import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setSubject(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/subject', data);
  }

  getSubjectById(id: any):Observable<any> {
    return this.http.get<any>(this.apiURL + '/subject/' + id)
  }

  getSubjectsByGroupAndSyllabus(data: any) {
    return this.http.post<any>(this.apiURL + '/subject/SG', data);
  }

  updateSubject(id: any, data: any):Observable<any> {
    return this.http.put<any>(this.apiURL + '/subject/' + id, data);
  }

  deleteSubject(id: any):Observable<any> {
    return this.http.delete<any>(this.apiURL + '/subject/' + id);
  }
}
