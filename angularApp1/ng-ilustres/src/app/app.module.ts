import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { CharacterService }  from './services/character.service';

import { CharacterDetailComponent } from './components/historical-character.component'
import { CharacterPreviewComponent } from "./components/historical-character-preview.component";
import { NotFoundComponent } from './components/not-found.component'
import { DashboardComponent } from "./components/dashboard.component";
import { ListCharactersComponent } from "./components/list-historical-caracters.component";
import { CreateCharacterComponent } from "./components/new-character.component";


import { AppRoutingModule } from "./routes/app-routing.module";

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  AppRoutingModule//siempre tiene que ser el ultimo
                ],
  declarations: [
                  AppComponent,
                  CharacterDetailComponent,
                  CharacterPreviewComponent,
                  ListCharactersComponent,
                  DashboardComponent,
                  NotFoundComponent,
                  CreateCharacterComponent
                ],
  providers:  [CharacterService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

