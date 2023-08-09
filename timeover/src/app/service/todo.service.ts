import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from "../Model/todo"
import { Game } from '../Model/game';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL = environment.API_URL;
  constructor(private http : HttpClient) { }

  searchGame(titre : string | null){
    return this.http.get<Game>(`${this.API_URL}/todo/${titre}`)
  }

  createTodo(name : string , game : Game , user : User){
    return this.http.post<Todo>(`${this.API_URL}/todo/`, {name : name, game : game , user : user} )
  }

  updateTodo(id :string, game : Game){
    return this.http.patch<Todo>(`${this.API_URL}/todo/${id}`, {game : game} )
  }
}
