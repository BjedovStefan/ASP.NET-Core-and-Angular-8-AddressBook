import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/Shared/contact';
import { ContactServiceService } from "../Shared/contact-service.service";


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  datatemp: Contact;

  constructor(private service: ContactServiceService,private route:Router) { }

  @Output() Event = new EventEmitter<string>();
  @ViewChild('closeBtn',{static: false}) cb: ElementRef;

  ngOnInit() {
    
  }

  @Input() reset: boolean = false;
  @ViewChild('editForm',{static: false}) myForm: NgForm;
  @Input() isReset: boolean = false;
  objectTemp: Contact;
  @Input() objcon: Contact = new Contact();


  editContact(editForm:NgForm){
    this.service.updateContact(this.objcon).subscribe(res => {
      alert("Contact updated successfully");
      this.Event.emit("ccc");
      this.cb.nativeElement.click();

    },
    )
  }

  
}
