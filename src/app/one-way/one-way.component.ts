import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {
  @ViewChild('myInputText') inputText;//use ViewChild to get the first element or the directive matching the selector from the view DOM. 
  //If the view DOM changes, and a new child matches the selector, the property will be updated. 

  constructor() { }

  ngOnInit() {
    this.onInit();
  }
  onInit(){
    setInterval(()=>{this.sendToServer();},2000);
  }
  sendToServer(){
    let data = this.inputText.nativeElement;
    debugger;
    console.log(data.value);
  }

}
