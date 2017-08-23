import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-character',
  templateUrl: './../template/new-character.component.html',
  styleUrls: ['./../template/styles/template-forms.component.css']
})

export class CreateCharacterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  submitForm(formValue:any){
    console.log(formValue)
  }
}
