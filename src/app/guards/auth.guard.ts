import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean> {
    // if not go to signup
    return this.AuthService.checkLoggedIn();
  }
}
