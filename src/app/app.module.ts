import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { EssaiDetailComponent } from './essai-detail/essai-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EssaiDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
