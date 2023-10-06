import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { Subscription, debounceTime, distinctUntilChanged, filter, skipWhile, switchMap } from 'rxjs';
import { Game } from 'src/app/Model/game';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-todo-form',
  templateUrl: './new-todo-form.component.html',
  styleUrls: ['./new-todo-form.component.css']
})
export class NewTodoFormComponent {

 
  name = new FormControl();
  games = new FormControl();
  options : Game []= []
  nbGames : number = 0
  todo : Todo = {
    name: '',
    games: [],
    user: '',
  }
 
  constructor(private todoService: TodoService, private userService : UserService , private router : Router,private route: ActivatedRoute) {}



  createTodo(){
   
    this.userService.getProfil().subscribe((data)=> {
      this.todo.name = this.name.value
      this.todo.user = data.sub
      this.todoService.createTodo(this.todo).subscribe(()=>{
        this.router.navigate(['todo']);
      })
    })
       
  }
}
