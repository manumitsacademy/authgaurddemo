import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbcService {
  isAuthentic(){
    if(window.localStorage.getItem('token')){
      return true;
    }
    else{      
     return false;
    }
  }
  constructor() { }
}
