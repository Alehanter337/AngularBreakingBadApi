import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { CharacterComponent} from './pages/character/character.component';
import { QuotesComponent} from './pages/quotes/quotes.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  {path: 'quotes\:author', component: QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
