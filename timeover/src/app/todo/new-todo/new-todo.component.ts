import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from 'src/app/Model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { NewTodoFormComponent } from '../new-todo-form/new-todo-form.component';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

 
  constructor(private todoService: TodoService , public dialog: MatDialog) {}

  // createTodo(){
  //       this.todoService.createTodo(this.todo).subscribe(()=>{})
  // }

 
  
    openDialog() {
      this.dialog.open(NewTodoFormComponent);
    }
  

ngOnInit(): void {
  // this.createTodo()
}


}
