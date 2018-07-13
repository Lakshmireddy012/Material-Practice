import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { stat } from 'fs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any={};
  
  constructor(private userService: UserService,private route: Router,private auth: AuthService) { 
    console.log("inside signup controller");
    
  }

  ngOnInit() {
    
  }
  signup(){
    // var status=this.userService.signup(this.user);
    // if(status==0){
    //   alert("Failed to add user");
    // }
    // if(status==1){
    //   alert("User already exist. Please login");
    // }
    // if(status==2){
    //   alert("User added successfully. Please login");
    //   this.route.navigate(["/login"]);
    // }
    var status=this.auth.emailSignUp(this.user);
    status.then( val => {
      console.log("val is ",val);
      if(val==undefined){
        alert("User added successfully. Please login");
        this.route.navigate(["/login"]);
      }else{
        if(val.code=="auth/email-already-in-use"){
          var ok=confirm("User already exist. Do you want to login.");
          if(ok==true){
            this.route.navigate(["/login"]);
          } 
        }else{
          alert(val.message);
        }
        
      }
    });
    
  }
}
