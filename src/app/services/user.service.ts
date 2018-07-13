import { Injectable } from '@angular/core';
import { element } from 'protractor';
@Injectable()
export class UserService {
  users: any[]=[];
  constructor() { }
  signup(user: any): Number {
    var status: Number = 0;
    if (localStorage.getItem("users") === null) {
      this.users.push(user);
      localStorage.setItem("users", JSON.stringify(this.users));
      status=2;
    } else {
      this.users = JSON.parse(localStorage.getItem("users"));
      var temp=false;
      this.users.forEach(element => {
        console.log("email values",element.email.trim() ,user.email.trim());
        if (element.email.trim() == user.email.trim()) {
          // user alread exist
          temp=true;
          status = 1;
        } 
      })
      console.log("temp value ",temp);
      if(temp==false) {
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        status = 2 // user added successfully
      };
    }
    return status;
  }
  login(usernane: String, password: String): any{
    var status=0;
    if(usernane!=undefined && password !=undefined && usernane !=null && password !=null ){
      var users=JSON.parse(localStorage.getItem("users"));
      for(let i=0; i<users.length ; i++) {
        var element =users[i];
        if(element.email.trim()==usernane){
          if(element.password.trim()==password){
            localStorage.setItem("user",JSON.stringify(element));
            return element;
          }else{
            return 2;
          }
          
        }
       

      };
    }
    return status;
  }
  logout(){
    if(localStorage.getItem("user")!==null){
      localStorage.removeItem("user");
    }
  }
}
