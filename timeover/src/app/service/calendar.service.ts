import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Calendar } from '../Model/calendar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private API_URL = environment.API_URL;
  constructor(private http : HttpClient) { }

  generateTimebygame(id : string | null): Observable<Calendar>{
    return this.http.get<Calendar>(`${this.API_URL}/calendar/${id}`)
  }
}
