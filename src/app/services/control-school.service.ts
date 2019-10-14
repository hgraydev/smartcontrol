import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class ControlSchoolService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOffersBySchool(id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/offer/' + id);
  }


}
