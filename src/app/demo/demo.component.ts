import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  usable: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  toggleAnchor() {
    this.usable = !this.usable;
    console.log(this.usable);
  }
  doOperation(e) {
    if (this.usable !== true) {
      e.preventDefault();
    }
    else {
      e.preventDefault();
      alert("Anchor element is enabled");
    }
  }
}
