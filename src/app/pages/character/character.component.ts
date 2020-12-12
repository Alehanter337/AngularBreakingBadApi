import { Component } from '@angular/core';
import {Character} from '../../core/models/character';
import { CharacterApiService} from '../../core/services/character.api.service';
import {Observable} from 'rxjs';
import {Status} from '../../core/models/status';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  status: Status = 'all';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  name = '';


  constructor(private apiService: CharacterApiService, private router: Router) {
  }

  onSetStatus(status: Status): void {
    this.status = status;
  }



}
