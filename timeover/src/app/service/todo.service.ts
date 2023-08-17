import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from "../Model/todo"
import { Game } from '../Model/game';
import { User } from '../Model/user';
import { Observable } from 'rxjs';
import { S } from '@fullcalendar/core/internal-common';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = environment.API_URL;
  constructor(private http : HttpClient) { }

  searchGame(titre : string | null) : Observable<Game[]>{
    return this.http.post<Game[]>(`${this.API_URL}/todo/search`, {titre : titre })
  }

  createTodo(todo : Todo){
    return this.http.post<Todo>(`${this.API_URL}/todo/`, {name : todo.name, game : todo.games , user : todo.user} )
  }

  updateTodo(id :string, game : any){
    return this.http.patch<Todo>(`${this.API_URL}/todo/${id}`, {game : game} )
  }

  getTodoByid(id :string) : Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/todo/${id}`)
  }

  updateGamePosition(id :string, newGames : Game[]){
    return this.http.put<any>(`${this.API_URL}/todo/${id}`, {newGames : newGames} )
  }

  getTodoByidUser(id :string) : Observable<any>{
    return this.http.get<any>(`${this.API_URL}/todo/todos/${id}`)
  }

}
