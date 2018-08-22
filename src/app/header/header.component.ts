import { Component} from '@angular/core';
import {LevelService} from '../level.service';
import {AbcService} from '../abc.service';
import{ PqrService} from '../pqr.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
	
	constructor(public pqrService:PqrService,public levelService:LevelService,public abcService:AbcService){
		console.log("Im in HeaderComponent Constructor");
	}
	ngOnInit(){		
	}
	
	
}

