import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentarea',
	templateUrl: 'contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent{

  constructor(){
		console.log("Im in ContentAreaComponent Constructor");
	}
	ngOnInit() {
	
	}

}
