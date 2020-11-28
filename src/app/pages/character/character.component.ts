import { Component } from '@angular/core';
import {Character} from '../../core/models/character';
import { CharacterApiService} from '../../core/services/character.api.service';
import {Observable} from 'rxjs';
import {Status} from '../../core/models/status';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor(private apiService: CharacterApiService) {
  }
  status: Status = 'all';
  characters: Observable<Character[]> = this.apiService.loadCharacters();

  onSetStatus(status: Status): void {
    this.status = status;
  }

}
