import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  AdminloginUrl = "http://localhost:8000/Admin/login"
  constructor(private http: HttpClient, private router: Router) { }

loginAdmin(admin){
  
  return this.http.post(this.AdminloginUrl, admin)
}
 AdminloggedIn(){
   return !!localStorage.getItem('pin')
 }
 Adminlogout(){
   localStorage.removeItem('pin')
   this.router.navigate(['/Home'])
 }
}
