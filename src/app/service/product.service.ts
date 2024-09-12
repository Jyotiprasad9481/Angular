import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, filter, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class productService {
  private history: string[] = [];
  url_: string = 'assets/products.json';

  constructor(private http: HttpClient, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.history.push(this.router.url);
      });
  }

  //_______________________________ fetch data from local Json server_______________________________

  getData(): Observable<any> {
    return this.http.get<any>(`${this.url_}`).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError(error.message || 'Server error');
      })
    );
  }

  //_____________________________________________________________________________________________

  //____________To navigate back to the exact previous route, you can manually maintain a history stack in your service____________
  //Here's a simplified approach to do this:

  getPreviousUrl(): string | null {
    return this.history.length > 1
      ? this.history[this.history.length - 2]
      : null;
  }

  goBack(): void {
    if (this.history.length > 1) {
      const previousUrl = this.getPreviousUrl();
      if (previousUrl) {
        this.router.navigateByUrl(previousUrl);
        this.history.pop();
      }
    } else {
      console.warn('No previous URL found.');
    }
  }

  //_____________________________________________________________________________________________________________
}
