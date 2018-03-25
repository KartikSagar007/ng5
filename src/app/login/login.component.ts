import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserLoginService) { }

  ngOnInit() {
    this.init();
  }
  init() {
  }
  loginUser(e) {
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    e.preventDefault();
    console.log(username, password);
    if (username == 'sagar' && password == 'sagar') {
      this.user.setUserLoggedIn(username);
      this.router.navigate(['dashboard']);
    }
    else if(username == 'admin' && password == 'admin'){
      this.user.setUserLoggedIn(username);
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Invalid User");
    }
  }

}
