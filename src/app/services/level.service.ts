import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  setLevel(data: any):Observable<any> {
    return this.http.post<any>( this.apiURL + '/level', data )
  }

  getLevel():Observable<any> {
    return this.http.get<any>( this.apiURL + '/level' );
  }

  getLeveById(id: any):Observable<any> {
    return this.http.get<any>( this.apiURL + '/level/' + id );
  }

  updateLevel(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.apiURL + '/level/' + id, data);
  }

  deleteLevel(id: any):Observable<any> {
    return this.http.delete<any>( this.apiURL + '/level/' + id);
  }
  
}
