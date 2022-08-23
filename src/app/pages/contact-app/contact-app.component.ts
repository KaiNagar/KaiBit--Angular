import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.scss'],
})
export class ContactAppComponent implements OnInit {
  constructor(private ContactService: ContactService) {}

  contacts!: Contact[];
  contacts$!: Observable<Contact[]>;
  

  ngOnInit(): void {
    this.ContactService.loadContacts({ term: '' });
    this.contacts$ = this.ContactService.contacts$;
  }


  onChangeFilterBy(filterBy: object) {
    
  }
}
