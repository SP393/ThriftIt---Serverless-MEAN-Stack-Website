import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginData = {}
  constructor(private auth: AuthService , private router: Router,private flash:FlashMessagesService) { }

  ngOnInit(): void {
  }
loginUser(){
  
  this.auth.loginUser(this.loginData)
   .subscribe(
     res =>{ 
      
      console.log(res)
     
      localStorage.setItem('token' , res.token)
      this.router.navigate(['/Home'])
       },
         err => this.flash.show('Invalid Password or Email' ,{cssClass:'alert-danger'})
   
   )
   
      
      
}


}
