import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  signup(user: User): Observable<User>{
    return this.http.post<User>(`${this.API_URL}/signup`,user)
  }

  
}
