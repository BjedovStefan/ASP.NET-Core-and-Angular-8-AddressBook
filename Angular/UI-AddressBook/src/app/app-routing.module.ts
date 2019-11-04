import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";


import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:'',component:ContactListComponent},

{path:'Add',component:ContactComponent},
{path: 'Edit', component:ContactEditComponent},
{path: 'Detail', component:ContactDetailComponent},
{path:'Home',component:ContactListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }