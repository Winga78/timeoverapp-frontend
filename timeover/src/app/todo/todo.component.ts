import { Component } from '@angular/core';
import { Game } from '../Model/game';
import { TodoService } from '../service/todo.service';
import { Todo } from '../Model/todo';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todo : Todo = {
    name : '' ,
    games : [],
    user : '',
  }
 


  constructor(private todoService: TodoService, private userService : UserService ) {}


  createTodo(){
    this.userService.getProfil().subscribe((data)=> {
      
        this.todo.user = data.sub

        this.todoService.createTodo(this.todo).subscribe(()=>{
          console.log("ok")
        })
    })
   
}

}
