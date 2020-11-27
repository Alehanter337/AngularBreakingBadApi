import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import { CharacterComponent } from './pages/character/character.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import {CharacterApiService} from './core/services/character.api.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [CharacterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
