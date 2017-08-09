import { Component,OnInit } from '@angular/core';
import { HistorialCharacter } from '../classes/historicalCharacter'
import { CharacterService } from '../services/character.service'
import { Router } from "@angular/router";


@Component({
  selector: 'list-historical-characters',
  template: `
  <character-preview [character]="selectedCharacter"></character-preview>
  
  <ul class="characters">
    <li *ngFor="let character of characters"
        [class.selected] ="character === selectedCharacter"
        (click) = "onSelect(character)">
      <span class="badge">{{character.id}}</span>{{character.name}}
    </li>
  </ul>
  
  `,
  styles: [
    `.selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .characters {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .characters li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: 10px;
    padding: 0;
    height: 30px;
    border-radius: 4px;
  }
  .characters li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .characters li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .characters .text {
    position: relative;
    top: -3px;
  }
  .characters .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: 0;
    height: 30px;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`
  ]
})
export class ListCharactersComponent implements OnInit {
  selectedCharacter:HistorialCharacter

  characters:HistorialCharacter[]

  constructor(
              private service: CharacterService,
              private router:Router) {
  }

  onSelect(character:HistorialCharacter){
    this.selectedCharacter = character;
  }


  ngOnInit() {
    // this.service.getHistoricalCharacters()
    //             .subscribe(data => this.characters = data)
    this.service.getHistoricalCharacters().then(response => {
      this.characters = response
    }).catch(error => console.log(error))
  }
}
