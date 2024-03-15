import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiRoootsService {
  privateUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
   let url = `${this.privateUrl}/users`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getUser(userId: any): Observable<any> {
    return this.http.get(`${this.privateUrl}/users/${userId}`);
  }

  postUser(user: any): Observable<any> {
    return this.http.post(`${this.privateUrl}/users`, user);
  }

  getAllArticles(){
    let url = `${this.privateUrl}/articles`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur s\'est produite :', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Erreur côté serveur ${error.status}, ` +
        `message: ${error.error}`);
    }
    // Renvoyer une erreur observable
    return throwError('Une erreur est survenue, veuillez réessayer plus tard.');
  }
}
