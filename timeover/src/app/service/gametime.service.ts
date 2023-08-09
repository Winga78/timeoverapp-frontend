import { Injectable } from '@angular/core';
import { Tdate } from '../Model/tdate';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GametimeService {
  private API_URL = environment.API_URL;
  constructor(private http : HttpClient) { }

  createGameTime(id :string , start : Date , end : Date){
    return this.http.post<Tdate>(`${this.API_URL}/gametime/`, {id : id , start : start , end : end})
  }
}
