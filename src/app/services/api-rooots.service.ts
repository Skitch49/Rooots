import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiRoootsService {
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<any> {
    let url = `${environment.api}/users`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getUser(userId: any): Observable<any> {
    return this.http.get(`${environment.api}/users/${userId}`);
  }

  postUser(user: any): Observable<any> {
    return this.http.post(`${environment.api}/users`, user);
  }

  getAllArticles() {
    let url = `${environment.api}/articles`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getArticleById(articleId: any): Observable<any> {
    let url = `${environment.api}/articles/${articleId}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getAllProducts() {
    return this.http
      .get(`${environment.api}/products`)
      .pipe(catchError(this.handleError));
  }

  getProductId(idProduct: string) {
    return this.http
      .get(
        `${environment.api}/products/${idProduct}`
      )
      .pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error("Une erreur s'est produite :", error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Erreur côté serveur ${error.status}, ` + `message: ${error.error}`
      );
    }
    // Renvoyer une erreur observable
    return throwError('Une erreur est survenue, veuillez réessayer plus tard.');
  }
}
