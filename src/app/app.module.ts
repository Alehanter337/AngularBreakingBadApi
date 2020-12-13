import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CharacterComponent } from './pages/character/character.component';
import { QuotesComponent } from './pages/quotes/quotes.component';
import {CharacterApiService} from './core/services/character.api.service';
import {FilterStatusPipe} from './core/pipes/filter-status.pipe';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FilterNamePipe } from './core/pipes/filter-name.pipe';
import { FilterSeasonPipe } from './core/pipes/filter-season.pipe';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    QuotesComponent,
    FilterStatusPipe,
    FilterNamePipe,
    FilterSeasonPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [CharacterApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
