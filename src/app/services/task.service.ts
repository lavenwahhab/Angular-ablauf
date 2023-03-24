import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Contenet-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
   return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(el: Task): Observable<Task> {
    const url = `${this.apiUrl}/${el.id}`;
    return this.http.delete<Task>(url);
  }

 addTask(el: Task): Observable<Task> {
  return this.http.post<Task>(this.apiUrl, el,httpOptions);
 }

 updateTaskReminder(el: Task): Observable<Task> {
  const url = `${this.apiUrl}/${el.id}`;
  return this.http.put<Task>(url, el, httpOptions);
 }
}
