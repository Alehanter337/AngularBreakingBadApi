import { Component, OnInit } from '@angular/core';
import { Quote} from '../../core/models/quote';
import { QuoteApiService} from '../../core/services/quote.api.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  private author;
  quotes: Observable<Quote[]>;


  constructor(private quoteApiService: QuoteApiService) {

  }

  ngOnInit(): void {
  }

}
