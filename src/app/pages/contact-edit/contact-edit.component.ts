import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact!: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact =
        contact || (this.ContactService.getEmptyContact() as Contact);
    });
  }

  async onSaveContact() {
    if (!this.contact.name || !this.contact.phone || !this.contact.email)
      return;
    console.log(this.contact);

    const newContact = await this.ContactService.saveContact({
      ...this.contact,
    });
    this.router.navigateByUrl(`/contact/${newContact._id}`);
  }

  onBack() {
    if (this.contact._id)
      this.router.navigateByUrl(`/contact/${this.contact._id}`);
    else this.router.navigateByUrl('/contact');
  }
}
