import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sec: number;
  min: number;
  hrs: number;
  username: string;
  constructor(private user:UserLoginService) {
    this.sec = 0;
    this.min = 0;
    this.hrs = 0;
    this.username = user.username;
  }
  init() {
    setInterval(() => {
      this.sec = ++this.sec;
      if (this.sec % 60 == 0) {
        this.sec = 0;
        this.min = ++this.min;
        console.log("total minutes: " + this.min);
      }
      if ((this.min % 60 == 0) && (this.min > 0)) {
        this.min = 0;
        this.hrs = ++this.hrs;
        console.log("total hour:" + this.hrs);
      }
    }, 1000);
  }
  ngOnInit() {
    this.init();
  }
}
