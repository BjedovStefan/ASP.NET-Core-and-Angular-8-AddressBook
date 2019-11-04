import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ContactServiceService } from "../Shared/contact-service.service";
import { Contact } from 'src/app/Shared/contact';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { ContactEditComponent } from "../contact-edit/contact-edit.component";
import {NgxPaginationModule} from 'ngx-pagination';

import { ContactDetailComponent } from "../contact-detail/contact-detail.component";


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  config: any;
  pageOfItems: Array<any>;
  searchText;
  actualPage:number = 1;
  public conList: Contact[];
  dataavailbale: Boolean = false;
  datatemp: Contact;
  id:number;
  num = [this.conList].length;
  p:number = 1;
  @Output() Event = new EventEmitter<number>();
  
  constructor(public http: Http,private router: Router, private service: ContactServiceService,) {
    this.getContacts();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.num
    };
   }
  
   

  ngOnInit() {
    
  }

  pageChanged(Event){
    this.config.currentPage = Event;
  }

  absoluteIndex(indexOnPage: number): number {
  return this.config.itemsPerPage * (this.config.currentPage - 1) + indexOnPage;
}

  getContacts(){
    this.service.getContacts().subscribe((data) => {
      this.conList = data;
    console.log(this.conList);
    if(this.conList.length>0){
      this.dataavailbale = true;
    }
    else{
      this.dataavailbale = false;
    }
  }
    ),err => {console.log(err);
    }
  }

  

  deleteContact(conID: number){
    var ans = confirm("Do you want to delete this contact?");  
        this.datatemp = new Contact();
        this.datatemp.ID = conID; 
            this.service.deleteContact(conID).subscribe(res => { 
              alert("Deleted successfuly!"); 
                this.getContacts();  
            })
       
          
        }

   @ViewChild('form',{static: false}) newContact: ContactComponent;
   @ViewChild('editForm',{static: false}) editContact: ContactEditComponent;
   @ViewChild('detail',{static: false}) detailContact : ContactDetailComponent;

  loadnewContact() {

    this.newContact.objcon.FirstName = ""
    this.newContact.objcon.LastName = ""
    this.newContact.objcon.Address = ""
    this.newContact.objcon.PhoneNo = ""
    this.newContact.objcon.ID = 0
  }

  loadEditForm(id: number, firstname: string, lastname: string, address: string, phoneNo: string){
    this.editContact.objcon.FirstName = firstname
    this.editContact.objcon.LastName = lastname
    this.editContact.objcon.Address = address
    this.editContact.objcon.PhoneNo = phoneNo
    this.editContact.objcon.ID = id
  }

  loadDetailForm(id: number, firstname: string, lastname: string, address: string, phoneNo: string){
    this.detailContact.objcon.FirstName = firstname
    this.detailContact.objcon.LastName = lastname
    this.detailContact.objcon.Address = address
    this.detailContact.objcon.PhoneNo = phoneNo
    this.detailContact.objcon.ID = id
  }

}
