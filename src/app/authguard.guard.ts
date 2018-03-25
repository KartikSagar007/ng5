import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserLoginService } from './user-login.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user:UserLoginService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.user.getUserLoggedIn() == true){
      return true;
    }
    else{
      console.log("You are not Authenticated. Please Login first.");
      this.router.navigate(['login']);
      return false;
    }
    // return this.user.getUserLoggedIn(); //if this will return false then it will cancel the route
  }
}
