import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private UserService:UserService) { }
  isLoggedIn = !!this.UserService.getUser()
  
  checkLoggedIn(){
    return of(this.isLoggedIn).pipe(delay(100))
  }
}
