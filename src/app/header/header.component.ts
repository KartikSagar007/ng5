import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() myAwesomeValues //here receiving value as input from app.component.html(parent to child)
  @Output() myOutputValue = new EventEmitter(); //here sending value as output from header to app.component.ts(child to parent)

  constructor() { }

  ngOnInit() {
    console.log(this.myAwesomeValues, ": is what I got using @input");
    this.myOutputValue.emit("Helo from CHILD");
  }

}
