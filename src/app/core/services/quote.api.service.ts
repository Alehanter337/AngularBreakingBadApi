import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteApiService {

  constructor(private http: HttpClient) { }

  loadQuotes(): Observable<Quote[]> {
    return this.http.get<any>('https://breakingbadapi.com/api/quotes');
  }
}
