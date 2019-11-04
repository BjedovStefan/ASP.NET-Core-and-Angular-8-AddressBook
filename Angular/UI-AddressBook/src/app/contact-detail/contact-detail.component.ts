import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output  } from '@angular/core';
import { ContactServiceService } from '../Shared/contact-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/Shared/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @ViewChild('closeBtn',{static: false}) cb : ElementRef;
  @Input() objcon: Contact = new Contact();
  @Output() Event = new EventEmitter<string>();
  @Input() reset: boolean = false;
  @ViewChild('detail',{static: false}) myForm: NgForm;
  @Input() isReset: boolean = false;

  constructor(private service:ContactServiceService,private route:Router) { }

  ngOnInit() {
  }



}
