import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loadCharacters(): Observable<Quote[]> {
    return this.http.get<any>('https://breakingbadapi.com/api/quotes').pipe(
      map(data => data.results)
    );
  }
}
