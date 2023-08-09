import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { UserService } from "./service/user.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(private _userService : UserService, private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this._userService.userSubject.value;
        if(token){
            req = req.clone({
                headers : new HttpHeaders({
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                })
            })
        }
       
        return next.handle(req).pipe(
            catchError((err) => {
              if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                  this.router.navigateByUrl('');
               }
            }
            return throwError(err);
          })
         )
    }
}
