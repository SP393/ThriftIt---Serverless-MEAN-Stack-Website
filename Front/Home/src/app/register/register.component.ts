import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {ValidateService} from '../validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {}
  constructor(private _auth:AuthService, private router:Router, private validateService:ValidateService, private flash:FlashMessagesService) { }

  ngOnInit(): void {
  }
 registerUser(){
   this._auth.registerUser(this.registerData)
   .subscribe(
     res =>{
       console.log(res)
       
      this.router.navigate(['/login'])
        },err => console.log(err)
   
   )
   if(!this.validateService.validateregister(this.registerData)){
     this.flash.show('Please fill in all fields',{cssClass:'alert-danger', timeout:3000});
     return false;
     
   }
   
 
}

}
