import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Game } from 'src/app/Model/game';
import { TodoService } from 'src/app/service/todo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent {

 myControl = new FormControl();
  filteredOptions: Game[] = []
  TodoGameList : any  = []
  id = ''
  private eventSubscription: Subscription = new Subscription;

  constructor(private todoService: TodoService, private userService : UserService, private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.myControl.valueChanges.pipe(
     debounceTime(300), // Attendre 300 ms après la dernière saisie
     distinctUntilChanged(), // Ignorer les saisies identiques successives
     switchMap(searchTerm => this.todoService.searchGame(searchTerm))
   ).subscribe(games => {
     this.filteredOptions = games;
   }
   );
   this.getTodoByid
 }

  getTodoByid(){
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.eventSubscription= this.todoService.getTodoByid(this.id).subscribe((data)=>{
        if(data.length != 0 ){
            for(let i=0 ; i < data[0].games.length ; i++){      
               this.TodoGameList.push(data[0].games[i])
         }
        }
       
       })
  
      //  this.TodoGameList = []
  }




  drop(event: CdkDragDrop<{name: string; imageUrl: string}[]> ) {
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

  UpdateTodoList(game : any){
  
    this.todoService.updateTodo(this.id, game).subscribe(()=>{
      console.log("ok")
   })
    
   }
}
