import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL_JPA } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }


  retrieveAllTodos(username: string) {
    console.log("retrieve all: " + `${API_URL_JPA}/users/${username}/todos`)
    return this.http.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }


  retrieveTodo(username, id){
    return this.http.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(
                `${API_URL_JPA}/users/${username}/todos/${id}`
                , todo);
  }


  createTodo(username, todo){
    console.log(50)
    console.log(username)
    return this.http.post(
                `${API_URL_JPA}/users/${username}/todos`
                , todo);
  }

}
