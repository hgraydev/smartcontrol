import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setPeriod(data: any):Observable<any>{
    return this.http.post<any>(this.apiURL + '/period', data);
  }

  getPeriods(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/period');
  }

  getPeriodById(id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/period/' + id);
  }

  updatePeriod(id: any, data: any):Observable<any> {
    return this.http.put<any>( this.apiURL + '/period/' + id, data);
  }

  disablePeriod(id: any):Observable<any> {
    return this.http.put<any>(this.apiURL + '/period/disable/' + id, '');
  }

  enablePeriod(id: any):Observable<any> {
    return this.http.put<any>(this.apiURL + '/period/enable/' + id, '');
  }

  deletePeriod(id: any):Observable<any> {
    return this.http.delete<any>(this.apiURL + '/period/' + id);
  }

  getPeriodsByStatus(status: any): Observable<any> { // se busca para unica escuela, se debe agregar idSchool para mas de una escuela
    return this.http.get<any>(this.apiURL + '/period/status/' + status);
  }



}
