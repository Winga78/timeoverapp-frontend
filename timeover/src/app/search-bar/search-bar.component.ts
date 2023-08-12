import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Game } from '../Model/game';
import { TimerService } from '../service/timer.service';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Users {
  name: string;
}



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],

})
export class SearchBarComponent implements OnInit , OnDestroy {

  constructor(private todoService: TodoService, private userService : UserService,  private router : Router, private route : ActivatedRoute) {}
  myControl = new FormControl();
  filteredOptions: Game[] = []
  TodoGameList : any[]  = []

  ngOnInit() {}

  ngOnDestroy() {}

displayTodoStart(){
  
 this.router.navigateByUrl(`todo/start`);
}

displayTodoEnd(){
  this.router.navigateByUrl(`todo/end`);
}

}
