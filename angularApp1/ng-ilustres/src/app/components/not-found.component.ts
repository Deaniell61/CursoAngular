import { Component } from "@angular/core";
import { Location } from "@angular/common";
@Component({
  templateUrl: './../template/notFound.component.html',
  styles: [
    `.background {
    background-image: url("./app/template/searching.jpg");
     background-size: 100% 100%;
     background-repeat: no-repeat;
     width:80%;
     height: 500px; 
  }`
  ]
})
export class NotFoundComponent {
  constructor(
        private location: Location
    ){}

    goBack() {
        this.location.back();
    }
}
