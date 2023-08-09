import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'inscription', component: SignUpComponent},
  {path: 'connexion', component: SignInComponent},
  {path: 'calendar/:activity', component: CalendarComponent, canActivate : [AuthGuard]},
  //{path: 'calendar', component: CalendarComponent, canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
