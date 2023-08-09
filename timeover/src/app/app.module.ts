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
import { FormsModule } from '@angular/forms';
import { JwtInterceptor } from './jwt.interceptor';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CalendarComponent,
    TodoComponent,
    GametimeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FullCalendarModule,
    HttpClientModule, 
    FormsModule,
   
  ],
  providers: [ HttpClient, 
    { provide : HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
