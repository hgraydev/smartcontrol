import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod'


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  student_mock = "53c868de-ba60-11e9-9891-e20e9ff0d868";
  academic_mock_01 = "195796fd-1eb4-44c0-93b2-2916f1bf0c41";
  academic_mock_02 = "c8d912a3-8407-4beb-95d0-119825939969";
  academic_mock_03 = "73d50dce-8395-40c0-a4e0-5df665c8f868";

  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  setSchedule(data: any):Observable<any> {
    return this.http.post<any>(this.apiURL + '/schedule', data);
  }

  getSchedules(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/schedule/student/' + this.student_mock);
  }

// Academic
  getAcademicSchedules(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/schedule/academic/' + this.academic_mock_01);
  }

  getOfferByAcademic(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/schedule/offer/academic/' + this.academic_mock_01);
  }

  getSubjectByAcademic(offer_id: any): Observable<any> {
    return this.http.get<any>(this.apiURL + '/schedule/subject/academic/' + offer_id);
  }

  getStudentsEnrolled(Filters: any): Observable<any> {
    return this.http.post<any>(this.apiURL + '/schedule/student/enrolled', Filters);
  }

  getScheduleByGroup(id: any):Observable<any> {
    return this.http.get<any>(this.apiURL + '/schedule/group/' + id);
  }

  deleteSchedule(id: any):Observable<any> {
    return this.http.delete<any>(this.apiURL + '/schedule/' + id);
  }
}
