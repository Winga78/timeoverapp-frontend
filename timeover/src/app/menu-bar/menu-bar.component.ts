import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  id : string = ''
  name : string = ''
  start : Date = new Date()
  end : Date = new Date()
  todos: any[] = []


  constructor(
    private todoService : TodoService, 
    private router : Router,
    private route: ActivatedRoute,
    private userService : UserService,
  ){}


  displayListTodos(){
    this.userService.getProfil().subscribe((data)=> {
      
        this.todoService.getTodoByidUser(data.sub).subscribe((todo_user_data)=>{
          this.todos = todo_user_data
        })
    })
   
}

displayOneTodo(idTodo : any ){
  this.router.navigate(['todo', idTodo]);
}
  
  ngOnInit(): void {
    this.displayListTodos()
  }
}
