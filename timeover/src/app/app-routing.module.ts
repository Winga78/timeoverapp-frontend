import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './todo/todo.component';
import { TodoStartComponent } from './todo-start/todo-start.component';
import { TodoEndComponent } from './todo-end/todo-end.component';
import { GametimeComponent } from './gametime/gametime.component';
import { DetailTodoComponent } from './todo/detail-todo/detail-todo.component';

const routes: Routes = [
  {path: 'inscription', component: SignUpComponent},
  {path: 'connexion', component: SignInComponent},
  {path: 'calendar/:id', component: CalendarComponent, canActivate : [AuthGuard]},
  {path: 'todo', component: TodoComponent, canActivate : [AuthGuard]},
  {path: 'todo/:id', component: DetailTodoComponent, canActivate : [AuthGuard]},
  {path: 'todo/start', component: TodoStartComponent, canActivate : [AuthGuard]},
  {path: 'todo/end', component: TodoEndComponent, canActivate : [AuthGuard]},
  {path: 'gameTime', component: GametimeComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
