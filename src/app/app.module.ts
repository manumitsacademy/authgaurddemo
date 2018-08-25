import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { StudentsComponent } from './students/students.component';
import { AbcService } from './abc.service';
import { LevelService } from './level.service';
import { AuthgaurdService } from './authgaurd.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PqrService } from './pqr.service';
import { TokenInterceptorService } from  './token-interceptor.service';
import { LeadsModule } from './leads/leads.module';
var config= {
  apiKey: "AIzaSyCNPiNwpdoABAePeRfuhsEvBFNaGxoDlCM",
  authDomain: "manumitsangfiredemo.firebaseapp.com",
  databaseURL: "https://manumitsangfiredemo.firebaseio.com",
  projectId: "manumitsangfiredemo",
  storageBucket: "manumitsangfiredemo.appspot.com",
  messagingSenderId: "435167824461"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentareaComponent,
    FooterComponent,
    EmployeesComponent,
    StudentsComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    LogoutComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule, RouterModule.forRoot([
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"aboutus",
        component:AboutusComponent
      },
      {
        path:"employees",
        component:EmployeesComponent,
        canActivate:[ AuthgaurdService ]
      },
      {
        path:"students",
        component:StudentsComponent,
        canActivate:[ AuthgaurdService ]
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"logout",
        component:LogoutComponent
      },
      {
        path:"accounts",
        component:AccountsComponent,
        canActivate:[PqrService]
      }
    ]), LeadsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [AbcService,AuthgaurdService,LevelService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
