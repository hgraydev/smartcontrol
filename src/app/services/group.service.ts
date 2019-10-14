import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setGroup(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/group', data);
  }

  getGroups(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/group');
  }

  getGroupById(id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/group/' + id);
  }

  deleteGroup(id: any):Observable<any> {
    return this.http.delete<any>(this.apiURL + '/group/' + id);
  }
  
}



