import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit {
  constructor(private UserService: UserService) {}

  @Input() contact!: Contact;
  user!: User;
  movesToDisplay!: Move[];

  ngOnInit(): void {
    this.UserService.user$.subscribe((user) => {
      if (user) {
        this.user = user;
        this.setMoves();
      }
    });
  }

  setMoves() {
    if (this.contact) {
      this.movesToDisplay = this.user.moves
        .filter((m) => m.toId === this.contact._id)
        .reverse();
    } else {
      this.movesToDisplay = this.user.moves.reverse().slice(0, 3);
    }
  }
}
