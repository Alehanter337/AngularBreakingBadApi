import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})

export class CharacterApiService {
  constructor(private http: HttpClient) {
  }

  loadCharacters(): Observable<Character[]> {
    return this.http.get<any>('https://www.breakingbadapi.com/api/characters');
  }
}
