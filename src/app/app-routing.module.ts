import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { EssaiDetailComponent } from './essai-detail/essai-detail.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'vehicules', component: CardDetailComponent },
  { path: 'locations', component: LocationDetailComponent },
  { path: 'essai', component: EssaiDetailComponent },
  { path: 'personnes', component: PersonneDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CardDetailComponent, LocationDetailComponent, PersonneDetailComponent, EssaiDetailComponent]
