import { Injectable } from '@angular/core';
import { Tdate } from '../Model/tdate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GametimeService {
  private API_URL = environment.API_URL;
  constructor(private http : HttpClient) { }

  createGameTime(id :string , name : string , start : Date , end : Date): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/gametime/`, {id : id , name : name ,start : start , end : end})
  }
}
