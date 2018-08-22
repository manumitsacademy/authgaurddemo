import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
  students;
  ngOnInit() {
    this.httpClient.get("http://localhost:4000/students").subscribe((res)=>{
      this.students=res;
    })
  }

}
