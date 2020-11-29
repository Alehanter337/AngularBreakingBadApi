import { Component, OnInit } from '@angular/core';
import { Quote} from '../../core/models/quote';
import { QuoteApiService} from '../../core/services/quote.api.service';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  private author;
  private subs: Subscription;
  quotes: Observable<Quote[]>;


  constructor(private quoteApiService: QuoteApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: ParamMap): void => {
      this.author = params['author'];
    });
  }

}
