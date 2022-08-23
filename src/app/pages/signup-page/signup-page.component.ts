import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private UserService:UserService,private router:Router) { }

  newUserName!:string

  ngOnInit(): void {
  }


  onSignup(){
    if(!this.newUserName) return
    this.UserService.signup(this.newUserName)
    this.router.navigateByUrl('')
  }

}
