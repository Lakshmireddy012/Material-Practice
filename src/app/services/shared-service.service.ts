import { Injectable } from '@angular/core';

@Injectable()
export class SharedServiceService {
  currentUser: any={};

  constructor() { 
    
  }
  setUser(user: any){
    
  }
  getUser(): any{
    return JSON.parse(localStorage.getItem("user"));
  }

}
