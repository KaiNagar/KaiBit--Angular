import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact!: Contact;

  async ngOnInit() {
    this.route.data.subscribe((data) => {
      this.contact = data['contact'];
    });
  }

  onRemove() {
    if (!this.contact._id) return;
    this.ContactService.deleteContact(this.contact._id);
    this.router.navigateByUrl('/contact');
  }
}
