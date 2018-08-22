import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AbcService} from './abc.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService implements CanActivate {

  canActivate(){
   
    if(this.abcService.isAuthentic()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
    }
  }
  constructor(private abcService:AbcService,private router:Router) { }
}
