import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './todo/todo.component';
import { TodoStartComponent } from './todo-start/todo-start.component';
import { TodoEndComponent } from './todo-end/todo-end.component';

const routes: Routes = [
  {path: 'inscription', component: SignUpComponent},
  {path: 'connexion', component: SignInComponent},
  {path: 'calendar/:activity', component: CalendarComponent, canActivate : [AuthGuard]},
  {path: 'todo', component: TodoComponent, canActivate : [AuthGuard]},
  {path: 'todo/start', component: TodoStartComponent, canActivate : [AuthGuard]},
  {path: 'todo/end', component: TodoEndComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
