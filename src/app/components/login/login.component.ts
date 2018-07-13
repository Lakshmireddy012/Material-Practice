import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  constructor(private userService: UserService,private router: Router, private sharedService: SharedServiceService,public auth: AuthService) { }

  ngOnInit() {
    // console.log(this.auth.currentUser);
    // if(this.auth.currentUser){
    //   this.router.navigate(["/home"]);
    // }
  }
  login(){
    // var status=this.userService.login(this.username,this.password);
    // if(!isNaN(status)){
    //   if(status==0){
    //     alert("Invalid username and Password");
    //   }
    //   if(status==2){
    //     alert("Invalid password");
    //   }
    // }else{
    //   this.router.navigate(["/home"]);
      
    // }
    var status=this.auth.emailLogin(this.username,this.password);
    this.router.navigate(["/home"]);
  }
  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }
  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }
  signInWithTwitter(): void {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }
  signInWithGithub(): void {
    this.auth.githubLogin()
      .then(() => this.afterSignIn());
  }
  private afterSignIn(): void {
    this.router.navigate(['/home']);
  }

}
