import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SharedServiceService } from './services/shared-service.service';


const routes: Routes =[
  { path: '' ,pathMatch: 'full' ,redirectTo:'/login' },
  { path: 'login' , component:LoginComponent},
  { path: 'signup' , component:SignupComponent},
  { path: 'home' , component:HomeComponent , canActivate: [AuthService]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [AuthService,UserService,SharedServiceService],
  declarations: [
    
  ]
})
export class RoutingModule { }