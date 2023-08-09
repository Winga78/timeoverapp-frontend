import { Component } from '@angular/core';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user : User = {
    firstname : "",
    lastname : "",
    email : "",
    password : ""
  }

  constructor(
    private userService : UserService, 
    private route : Router
  ){}

  sign_up()
  {
    this.userService.sign_up(this.user).subscribe(() => {
      this.route.navigateByUrl('connexion');
    })
  }

}
