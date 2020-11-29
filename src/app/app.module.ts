import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import { CharacterComponent } from './pages/character/character.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import {CharacterApiService} from './core/services/character.api.service';
import {FilterStatusPipe} from './core/pipes/filter-status.pipe';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    QuotesComponent,
    FilterStatusPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CharacterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
