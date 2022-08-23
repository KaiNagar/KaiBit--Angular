import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  constructor(private ContactService: ContactService) {}

  filterBy!: ContactFilter;
  subscription!: Subscription;

  onChangeFilterBy() {
    this.ContactService.setFilterBy(this.filterBy);
  }

  ngOnInit(): void {
    this.subscription = this.ContactService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }
}
