import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class PqrService {

  constructor() { }
  isAllowed(l){
    if(window.localStorage.getItem('level')){
      if(l<=window.localStorage.getItem('level')){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
    
  }
  isAuthentic(){
    if(window.localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
  canActivate(){
    if(window.localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
}
