import { Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

  user : User = {
    email : "",
    password : ""
  }



  constructor(
    private userService : UserService, 
    private route : Router
  ){}
  
  sign_in(){
    this.userService.sign_in(this.user).subscribe((data)=>{
       const token = data.toString()
       localStorage.setItem('UserToken', token);
       this.userService.userSubject.next(token)
       this.route.navigateByUrl('calendar/Noir et blanc');
    })
  }
}
