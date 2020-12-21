import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminAuthService} from '../admin-auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  AdminData = {}
  constructor(private auth: AdminAuthService , private router: Router) { }

  ngOnInit(): void {
  }
  loginAdmin(){
  
    this.auth.loginAdmin(this.AdminData)
     .subscribe(
       res =>{
        console.log(res)
         localStorage.setItem('pin' , res.pin)
        this.router.navigate(['/Home'])
         },
           err => console.log(err)
     
     )
     
   
  }
}
