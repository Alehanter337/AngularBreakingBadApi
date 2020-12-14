import {Component, OnInit, ViewChild} from '@angular/core';
import {Character} from '../../core/models/character';
import { CharacterApiService} from '../../core/services/character.api.service';
import {Observable} from 'rxjs';
import {Status} from '../../core/models/status';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import { MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  status: Status = 'all';
  characters: Observable<Character[]> = this.apiService.loadCharacters();
  name = '';
  season = 0;
  page: number;
  pageSize: number;


  constructor(private apiService: CharacterApiService, private router: Router, private route: ActivatedRoute) {
  }

  onSetStatus(status: Status): void {
    this.status = status;
  }

  onSetSeason(season: number): void{
    this.season = season;
    //this.isClicked = !this.isClicked;
  }
  ngOnInit(): void{
  this.page = +this.route.snapshot.queryParams['page'];
  this.pageSize = +this.route.snapshot.queryParams['pageSize'];

}

  changePage(pageEvent: PageEvent): void{
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: pageEvent.pageIndex + 1,
        pageSize: pageEvent.pageSize
      },
      queryParamsHandling: 'merge'});
  }

}
