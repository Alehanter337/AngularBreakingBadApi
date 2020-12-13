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

<<<<<<< Updated upstream
=======
  status: Status = 'all';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  name = '';
  season = 0;


>>>>>>> Stashed changes
  constructor(private apiService: CharacterApiService, private router: Router) {
  }
  status: Status = 'all';
  characters: Observable<Character[]> = this.apiService.loadCharacters();

  onSetStatus(status: Status): void {
    this.status = status;
  }

<<<<<<< Updated upstream
=======
  onSetSeason(season: number): void{
    this.season = season;
  }

>>>>>>> Stashed changes
}
