import { Component,Input,OnInit } from '@angular/core'
import  { HistorialCharacter  } from '../classes/historicalCharacter'
import { Router,ParamMap,ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { CharacterService } from "../services/character.service";

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'character-detail',
  templateUrl: './../template/historical-character.component.html'
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
      
    submitForm(formValue:any){
      console.log(formValue)
    }
    goBack(): void {
      this.location.back();
    }
}
