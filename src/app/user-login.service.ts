import { Injectable } from '@angular/core';

@Injectable()
export class UserLoginService {
  private isUserLoggedIn;
  public username;

  constructor() { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(u){
    this.isUserLoggedIn = true;
    this.username = u;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}
