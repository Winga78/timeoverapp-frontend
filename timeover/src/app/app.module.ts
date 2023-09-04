import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoComponent } from './todo/todo.component';
import { GametimeComponent } from './gametime/gametime.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './jwt.interceptor';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkDrag,  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,} from '@angular/cdk/drag-drop';
import { TodoStartComponent } from './todo-start/todo-start.component';
import { TodoEndComponent } from './todo-end/todo-end.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CalendarComponent,
    TodoComponent,
    GametimeComponent,
    SearchBarComponent,
    TodoStartComponent,
    TodoEndComponent,
    IndexComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    HttpClientModule, 
    FormsModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    CdkDrag,
    CdkDropListGroup,
    CdkDropList,
    MatPaginatorModule,
  ],
  providers: [ HttpClient, 
    { provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
