import { Component } from '@angular/core';
import {CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarService } from '../service/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Calendar } from '../Model/calendar';
import { Game } from '../Model/game';
import frLocale from '@fullcalendar/core/locales/fr';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
date : Date = new Date()
dates : Date[] = []
events : any[] = []
 
  game: Game = {
    name: "",
  
    searchTerm: "",
  
    imageUrl: "",
  
    gamePlayMain: 0,
  
    gamePlayMainExtra: 0,
  
    gamePlayCompletionist: 0,
  
    index: 0
  }
  calendar: Calendar = {

    activity: "",
  
    game: this.game,
  
  
    start: this.date ,
  
  
    dates_end: this.dates ,
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    
    plugins: [timeGridPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay' // user can switch between the two
    },
    locales: [frLocale ],
    
    events: [],
    

  };
  constructor(
    private calendarService : CalendarService, 
    private router : Router,
    private route : ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.displayCalendar()
  }

  displayCalendar(){
    const activity = this.route.snapshot.paramMap.get('activity');
    this.calendarService.generateTimebygame(activity).subscribe(data=>{
       
       for(let i = 0 ; i < data.length ; i++){
        for(let u = 0 ; u < data[i].dates_end.length; u++){
            let res = new Date (data[i].start )
          let newres = res.setDate(res.getDate() + u)
        let myevent = {title : data[i].game.name ,
           start : newres , 
           end : data[i].dates_end[u]
          }
          this.events.push(myevent)
        }
       }
       this.calendarOptions.events = this.events;
       this.calendarOptions = { ...this.calendarOptions };
    });

    console.log(this.events)
    
  }

  

  

}
