import {  Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ContactServiceService } from "../Shared/contact-service.service";
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/Shared/contact';
import { Router } from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  @Input() cleardata: boolean = false;
  @Output() Event = new EventEmitter<string>();
  objectTemp: Contact;
  @Input() objcon: Contact = new Contact();
  @ViewChild('closeBtn',{static: false}) cb : ElementRef;
 
  constructor(private service: ContactServiceService,private route:Router) { }
  
  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form? : NgForm){
    if(form!=null) 
     form.resetForm();
    this.objectTemp = {
      ID:null,
      FirstName: '',
      LastName: '',
      Address: '',
      PhoneNo: ''
    }
  }

  onSubmit(form:NgForm){
    this.objectTemp = new Contact();
    this.objectTemp.FirstName = form.value.firstName;
    this.objectTemp.LastName = form.value.lastName;
    this.objectTemp.Address = form.value.address;
    this.objectTemp.PhoneNo = form.value.phoneNo;
    
    this.service.saveContact(this.objectTemp).subscribe(res =>{
      
        alert("Contact added successfully!");
        this.takeHome();
         });
      }
    
    
  
    takeHome(){
         this.Event.emit('ccc');
         this.cb.nativeElement.click();
         this.route.navigateByUrl('');  
    }

    
  }


