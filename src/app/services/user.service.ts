import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user';
import { UtilService } from './util.service';

const USER_KEY = 'userDB';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private UtilService: UtilService) {}

  private _user$ = new BehaviorSubject<User | null>(this.getUser());
  public user$ = this._user$.asObservable();

  public getUser() {
    return this.UtilService.loadFromStorage(USER_KEY);
  }

  public signup(name: string) {
    const newUser = {
      name,
      coins: 100,
      moves: [],
    };
    this._user$.next(newUser);
    this.UtilService.saveToStorage(USER_KEY, newUser);
    return newUser;
  }

  public logout() {
    localStorage.removeItem(USER_KEY);
    this._user$.next(this.getUser())
  }

  public addMove(contact: Contact, amount: number) {
    const user = this.getUser();
    const newMove = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    user.moves.push(newMove);
    user.coins -= amount;
    this._user$.next(user);
    this.UtilService.saveToStorage(USER_KEY, user);

    return newMove;
  }
}
