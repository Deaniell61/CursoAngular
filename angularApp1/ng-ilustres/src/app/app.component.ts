import { Component } from '@angular/core';
import { ListCharactersComponent } from "./components/list-historical-caracters.component";


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './template/app.component.html',
  styleUrls: ['./template/styles/app.component.style.css']
})
export class AppComponent {
  title = 'Personajes Historicos'
}
