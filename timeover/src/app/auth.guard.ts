import { Injectable } from '@angular/core';
import {Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router:Router ){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = localStorage.getItem('UserToken');
      if(token){
        return true; 
      }
      this.router.navigateByUrl('');
      return false;
  }
  
}
