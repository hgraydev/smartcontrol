import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createAccount(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/account', data);
  }

  getAccount(idAccount: any):Observable<any> {
    return this.http.get<any>(this.apiURL + '/account/' + idAccount);
  }
}
