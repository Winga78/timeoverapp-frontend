import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;
  optionRequete = {
    Headers : new HttpHeaders({
      'Content-Type': 'application/json'
    }), responseType: 'text' as 'json'
  }
  public user : Observable<string>
  public userSubject : BehaviorSubject<string>

  constructor(private http : HttpClient, private router: Router) { 
    this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') || '')
    this.user = this.userSubject.asObservable();
  }

  sign_up(user : User) {
    return this.http.post(`${this.API_URL}/users/`, {firstname : user.firstname , lastname : user.lastname , email : user.email , password : user.password})
  }

  
  sign_in(user : User) {
    return this.http.post(`${this.API_URL}/auth/login`, {email : user.email , password:user.password}, this.optionRequete)
  }

  getProfil() : Observable<any>{
    return this.http.get<any>(`${this.API_URL}/auth/profile`)
  }

  logout(){
    localStorage.removeItem('UserToken')
    this.userSubject.next('')
    this.router.navigateByUrl('')
   }
}
