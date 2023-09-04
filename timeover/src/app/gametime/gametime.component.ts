import { Component, OnDestroy, OnInit } from '@angular/core';
import { GametimeService } from '../service/gametime.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-gametime',
  templateUrl: './gametime.component.html',
  styleUrls: ['./gametime.component.css']
})
export class GametimeComponent implements OnInit {
  id : string = ''
  name : string = ''
  start : Date = new Date()
  end : Date = new Date()
  todos: any[] = [];
  constructor(
    private gametimeService : GametimeService, 
    private router : Router,
    private route: ActivatedRoute,
    private todoService : TodoService,
    private userService : UserService,
  ){}

  ngOnInit(): void {
   
    this.userService.getProfil().subscribe((data)=> {
      this.todoService.getTodoByidUser(data.sub).subscribe((dataTodo)=>{
        for(let i = 0 ; i < dataTodo.length ; i++){
          if(dataTodo[i].name === "start"){
            this.getTodoByid(dataTodo[i]._id)
          }
        }
      })
     
   })
   
   
  }

  createGameTime(){
    this.gametimeService.createGameTime(this.id , this.name , this.start, this.end).subscribe((data)=>{
      this.router.navigate(['calendar', data[0]._id]);
    })
   
  }

  getTodoByid(id : string){
 
     this.todoService.getTodoByid(id).subscribe((data)=>{
          this.todos.push(data[0])
         
       }) 
  }

}
