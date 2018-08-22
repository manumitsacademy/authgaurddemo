import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }
  getLevel(){
    return window.localStorage.getItem('level');
  }
}
