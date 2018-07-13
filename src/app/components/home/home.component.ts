import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../services/shared-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any={};
  constructor(private userService: UserService, 
              private router: Router, 
              private sharedService : SharedServiceService,
              public auth: AuthService) { }

  ngOnInit() {
    
    this.auth.currentUserObservable.subscribe( auth =>{
      if(auth!==null){
        console.log("auth",auth);
        this.currentUser= {name: auth.displayName , email: auth.email};
      }
      
    })
  }
  logout(){
    
    //this.userService.logout();
    this.auth.signOut();
    this.router.navigate(["/login"]);
  }
}
