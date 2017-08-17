import { NgModule } from '@angular/core' 
import { RouterModule,Routes } from '@angular/router'

import { CharacterDetailComponent } from '../components/historical-character.component'
import { CharacterPreviewComponent } from "../components/historical-character-preview.component";
import { ListCharactersComponent } from "../components/list-historical-caracters.component";
import { DashboardComponent } from "../components/dashboard.component";
import { NotFoundComponent } from "../components/not-found.component";
import { CreateCharacterComponent } from "../components/new-character.component";
import { AppComponent } from "../app.component";

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterPreviewComponent
  },
  {
    path: 'list',
    component: ListCharactersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'create',
    component: CreateCharacterComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
