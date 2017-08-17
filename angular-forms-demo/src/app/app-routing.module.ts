import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindComponent } from './bind/bind.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  { path: '', component: BindComponent },
  { path: 'bind', component: BindComponent },
  { path: 'template', component: TemplateFormsComponent },
  { path: 'reactive', component: ReactiveFormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
