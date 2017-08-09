import { Component,Input } from '@angular/core'
import  { HistorialCharacter  } from '../classes/historicalCharacter'
import { Router } from "@angular/router";

@Component({
  selector: 'character-preview',
  template: `
  <div *ngIf="character">
  Hola mi nombre es {{character.name}}
  <br>

    <button (click)="goToDetail()">Ver Detalle</button>
    
</div>`
})

export class CharacterPreviewComponent {
    @Input() character:HistorialCharacter

    constructor(private router:Router){

    }
      
    goToDetail() {
      this.router.navigate(['/detail',this.character.id])
    }

}
