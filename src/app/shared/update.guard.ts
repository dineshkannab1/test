import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class UpdateGuard implements CanActivate, CanActivateChild {
  constructor(activatedRoute: ActivatedRoute) {
    let assetId = activatedRoute.snapshot.params.assetId;
  };
  canActivate() {
    console.log('i am checking to see if you are logged in');
    return true;
  }
 
 
  canActivateChild() {
    console.log('checking child route access');
  
    return true;
  }

}