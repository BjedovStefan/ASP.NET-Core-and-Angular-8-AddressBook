import { Injectable,Inject } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
   
  
  myAppUrl:string = "http://localhost:59678/";
  constructor(private _http: Http,private router: Router) {

  }

  
  getContacts() {
    return this._http.get(this.myAppUrl + 'api/Contacts/GetContacts').pipe(map((response: Response) => response.json()));
  }
  getContactById(conID: number) {
    return this._http.get(this.myAppUrl + "api/Contacts/GetContactDetails/" + conID).pipe(map((response: Response) => response.json()));
  }
  deleteContact(conID: number) {
    return this._http.delete(this.myAppUrl + "api/Contacts/DeleteContact/" + conID).pipe(map((response: Response) => response.json()));
  }
  updateContact(con: Contact) {
     
    return this._http.put(this.myAppUrl + 'api/Contacts/EditContact', con).pipe(map((response: Response) => response.json()));
  }
  saveContact(con: any) {
    return this._http.post(this.myAppUrl + 'api/Contacts/AddContact', con).pipe(map((response: Response) => response.json()));
  }
}
