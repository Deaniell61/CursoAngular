import { Component,Input,OnInit } from '@angular/core'
import  { HistorialCharacter  } from '../classes/historicalCharacter'
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { CharacterService } from "../services/character.service";

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'character-detail',
  template: `
  <div *ngIf="character">
  Hola mi nombre es {{character.name}}
  <br>

  <div>
    <label>id</label>
    {{character.id}} <br>
    <label>nombre</label>
    <input [(ngModel)] = "character.name" placeholder="nombre">
  </div>
    
    <button (click)="goBack()">Regresar</button>
    <button (click)="goToDetail()">Guardar</button>
</div>`
})

export class CharacterDetailComponent implements OnInit {
    @Input() character:HistorialCharacter

    constructor(
        private router:Router,
        private route:ActivatedRoute,
        private location:Location,
        private characterService:CharacterService){

    }

    ngOnInit(): void {
      this.route.params
        .switchMap((params: ParamMap) => this.characterService.getHistoricalCharacter(+params['id']))
        .subscribe(character => this.character = character);
    }
      

    goBack(): void {
      this.location.back();
    }
}
