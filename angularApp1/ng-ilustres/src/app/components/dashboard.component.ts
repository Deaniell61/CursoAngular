import { Component,OnInit } from '@angular/core';
import { HistorialCharacter } from '../classes/historicalCharacter'
import { CharacterService } from '../services/character.service'



@Component({
  selector: 'my-dashboard',
  templateUrl: './../template/dashboard.component.html',
  styleUrls: ['./../template/styles/dashboard.style.css' ]
})
export class DashboardComponent implements OnInit { 

  selectedCharacter:HistorialCharacter

  characters:HistorialCharacter[]

  constructor(private service: CharacterService) {
  }

  ngOnInit() {
    this.service.getHistoricalCharacters().then(characters => {
      this.characters = characters.slice(1, 6)
    }).catch(error => console.log(error))
  }
}
