import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() myAwesomeValues //here receiving value as input from app.component.html
  constructor() { }

  ngOnInit() {
    console.log(this.myAwesomeValues, ": is what I got using @input");
  }

}
