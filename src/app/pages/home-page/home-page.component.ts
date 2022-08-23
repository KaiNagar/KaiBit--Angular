import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private UserService: UserService, private router: Router) {}
  user!: User;
  ngOnInit(): void {
    this.UserService.user$.subscribe(user=>{
      if(user){this.user = user}
    })
  }

  onGoSignup() {
    this.router.navigateByUrl('/signup');
  }

  onLogout() {
    this.UserService.logout();
  }
}
