import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';
import { FormControl } from '@angular/forms';
import { Game } from '../Model/game';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-end',
  templateUrl: './todo-end.component.html',
  styleUrls: ['./todo-end.component.css']
})
export class TodoEndComponent implements OnInit , OnDestroy {
  myControl = new FormControl();
  filteredOptions: Game[] = []
  TodoGameList : any[]  = []
  id = ''
  private eventSubscription: Subscription = new Subscription;

  constructor(private todoService: TodoService, private userService : UserService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.displayTodoEnd()
  }

  getTodoByid(id : string){
  
    this.eventSubscription= this.todoService.getTodoByid(id).subscribe((data)=>{
        if(data.length != 0 ){
            for(let i=0 ; i < data[0].games.length ; i++){
          this.TodoGameList.push(data[0].games[i])
         }
        }
       
       })
  
       this.TodoGameList = []
  }

  displayTodoEnd(){
    this.userService.getProfil().subscribe((data)=> {
      this.todoService.getTodoByidUser(data.sub).subscribe((dataTodo)=>{
        for(let i = 0 ; i < dataTodo.length ; i++){
          if(dataTodo[i].name === "end"){
            this.id = dataTodo[i]._id
            this.getTodoByid(dataTodo[i]._id)
          }
        }
      })
     
   })
  
  }


  drop(event: CdkDragDrop<string[]> ) {
    moveItemInArray(this.TodoGameList, event.previousIndex, event.currentIndex);
    console.log({name :event.item.element.nativeElement.innerText , index : event.currentIndex })
  
   for(let i = 0 ; i < this.TodoGameList.length; i ++){
    this.TodoGameList[i].index = i 
   }
   this.updateTodoPosition()
  }
  

  updateTodoPosition(){
    this.todoService.updateGamePosition(this.id,this.TodoGameList).subscribe((data)=>{})
  }
}
