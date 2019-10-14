import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setOffer(data: any):Observable<any> {
    return this.http.post( this.apiURL + '/offer', data);
  }

  getOffers():Observable<any>{
    return this.http.get<any>( this.apiURL + '/offer');
  }

  getOffersBySchool(id: any):Observable<any>{
    return this.http.get<any>( this.apiURL + '/offer/byschool/' + id);
  }

  getOfferByyId(id: any):Observable<any>{
    return this.http.get<any>( this.apiURL + '/offer/' + id);
  }

  putOffer(id: any, data: any):Observable<any>{
    return this.http.put<any>( this.apiURL + '/offer/' + id, data);
  }

  deleteOffer(id: any):Observable<any>{
    return this.http.delete<any>( this.apiURL + '/offer/' + id);
  }

}
