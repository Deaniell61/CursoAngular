import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor( private fb:FormBuilder ) {
      this.reactiveForm = fb.group({
        'firstname':[null,Validators.compose([Validators.required,Validators.minLength(3)])],
        'lastname': '',
        'gender':'male',
        'hiking':false,
        'running':false,
        'swimming':true
      })
    }

  ngOnInit() {
  }

}
