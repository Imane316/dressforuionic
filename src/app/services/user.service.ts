import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class User {
  'pseudo': string;
  'password': string;
  'role': string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8880';

  constructor(private http: HttpClient) { }


  getUserList(): Observable<any> { 
    return this.http.get(this.apiUrl + '/users');
  }


  login(pseudo: string, password: string) {
    return this.http.post<any>(this.apiUrl + '/login', { pseudo, password })

      };
   
  userNew(pseudo: string, password: string, role: string){
    return this.http.post<any>(this.apiUrl + '/user', { pseudo, password, role })


  };

  logout() {
    localStorage.removeItem('token');

  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
    console.log("ok");
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }


  isAdmin(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getAuthToken()}`
    });
    return this.http.get<any>(this.apiUrl + '/checkadmin', { headers });
    console.log("ok");

  }
  

}