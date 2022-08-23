import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  constructor(private UserService: UserService) {}

  @Input() contact!: Contact;

  user!: User;
  transferAmount!: number;

  ngOnInit(): void {
    this.user = this.UserService.getUser();

    this.transferAmount = 1;
  }

  onTransferFund() {
    if (this.transferAmount <= 0) return console.error('You are too cheap');
    if (this.user.coins < this.transferAmount)
      return console.error('You are too poor');
    this.UserService.addMove(this.contact, this.transferAmount);
    this.user = this.UserService.getUser();
    this.transferAmount = 1;
  }
}
