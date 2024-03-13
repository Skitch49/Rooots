import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRoootsService {
  privateUrl = 'http;//localhost:3000/api/';
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    return this.http.get(`${this.privateUrl}/users`);
  }

  getUser(userId: any): Observable<any> {
    return this.http.get(`${this.privateUrl}/users${userId}`);
  }

  postUser(user: any): Observable<any> {
    return this.http.post(`${this.privateUrl}/users`, user); // Assurez-vous d'envoyer l'utilisateur
  }
}
