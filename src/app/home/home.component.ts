import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db:AngularFirestore) { }
  students=[];
  showAddStudentFlag=false;
  showEditStudentFlag=false;
  currentStudent;
  ngOnInit() {
    this.db.collection('students').snapshotChanges()
    .subscribe((res)=>{
      this.students=[];
      console.log("res",res);
      res.map((x)=>{
        let d = x.payload.doc.data();
        d['id'] = x.payload.doc.id;
        this.students.push(d);        
      })
    });
  }
  deleteStudent(id){    
    this.db.collection('students').doc(`/${id}`).delete();    
  }
  addStudent(fn,ln,a){
    this.db.collection('students').add({'firstname':fn,'lastname':ln,'age':a});
  }
  showAddStudent(){
    this.showAddStudentFlag=true;
    this.showEditStudentFlag=false;
  }
  showEditStudent(s){
    this.showEditStudentFlag=true;
    this.showAddStudentFlag=false;
    console.log(s);
    this.currentStudent=s;    
  }
  editStudent(fn,ln,a){
    this.db.collection('students').doc(`/${this.currentStudent.id}`).set({
      'firstname':fn,
      'lastname':ln,
      'age':a
    });
  }
}
