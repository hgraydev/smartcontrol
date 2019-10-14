import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiUrl;
  adminRole: boolean = false;
  teacherRole: any;
  sControl: any;
  aControl: any;

  constructor(private http: HttpClient) { }

  createSession(login: any):Observable<any>{
    return  this.http.post<any>(this.apiURL + '/login', login);
  }
  
  setUserLoggedIn(user) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  setRole(role: any) {
    if(role === "admin") this.adminRole = true;
    if(role === "scontrol") this.sControl = true;
    if(role === "teacher") this.teacherRole = true;
    if(role === "acontrol") this.aControl = true;
  }

  isAdmin() {
    return this.adminRole;
  }

  getUserLoggedIn() {
    // return JSON.parse(localStorage.getItem('currentUser'));
    return  { 
              user_id:  "3d0b0c30-0e8e-427b-a2a4-1fba0f957914",
              role: "admin"
            }; //MOCK
    //return false;
  }

  getLoggegIn() {
    // return localStorage.getItem('isLoggedIn');
    return true; //MOCK
  }
  
  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentUser');
  } 
}
