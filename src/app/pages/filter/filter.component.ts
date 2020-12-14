import {Component, OnInit, Output} from '@angular/core';
import { FilterSettings} from '../../core/models/FilterSettings';
import {EventEmitter} from 'events';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() public setFilters: EventEmitter<FilterSettings> = new EventEmitter<FilterSettings>();

  constructor() { }

  ngOnInit(): void {
  }

}
