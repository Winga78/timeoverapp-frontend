import { Component, OnInit } from '@angular/core';
import { Game } from '../Model/game';
import { TodoService } from '../service/todo.service';
import { Todo } from '../Model/todo';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo : Todo[] = []
 


  constructor(private todoService: TodoService, private userService : UserService, private router : Router) {}


  displayTodos(){
    this.userService.getProfil().subscribe((data)=> {
      
        this.todoService.getTodoByidUser(data.sub).subscribe((todo_user_data)=>{
          this.todo = todo_user_data
        })
    })
   
}

displayOneTodo(idTodo : any ){
  this.router.navigate(['todo', idTodo]);
}
ngOnInit(): void {
  this.displayTodos()
}

}
