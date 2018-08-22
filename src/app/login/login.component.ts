import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private http:HttpClient) { }
  loginForm = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
  ngOnInit() {
  }
  login(){
    //console.log(this.loginForm.controls['username']);
    var url = "http://localhost:4000/authenticate?username="+this.loginForm.controls['username'].value+"&password="+this.loginForm.controls['password'].value;
    this.http.get(url).subscribe((res)=>{
      
      window.localStorage.setItem("level", res['level']);
      window.localStorage.setItem("token", res['token']);
      window.localStorage.setItem("username", res['username']);
      console.log(res);
    })
  }
}
