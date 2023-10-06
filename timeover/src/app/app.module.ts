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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkDrag,  CdkDragDrop,CdkDropList,CdkDropListGroup,moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';
import { TodoStartComponent } from './todo-start/todo-start.component';
import { TodoEndComponent } from './todo-end/todo-end.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DisplayMenu } from './menu-bar/pipes/display-menu.pipe';
import { NewTodoComponent } from './todo/new-todo/new-todo.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NewTodoFormComponent } from './todo/new-todo-form/new-todo-form.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DetailTodoComponent } from './todo/detail-todo/detail-todo.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CalendarComponent,
    TodoComponent,
    GametimeComponent,
    TodoStartComponent,
    TodoEndComponent,
    MenuBarComponent,
    DisplayMenu,
    NewTodoComponent,
    NewTodoFormComponent,
    DetailTodoComponent,
    FooterComponent
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
    MatButtonModule, 
    MatDialogModule,
    MatDividerModule,
     MatIconModule,
     MatSelectModule,
     MatCardModule, 
  ],
  exports: [DisplayMenu],
  providers: [ HttpClient, 
    { provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
