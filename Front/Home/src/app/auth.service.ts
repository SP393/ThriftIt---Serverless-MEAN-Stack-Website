import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 registerUrl = "http://localhost:8000/Register";
 loginUrl = "http://localhost:8000/login"

  constructor(private http: HttpClient, private router: Router) { }
registerUser(user){
  
  return this.http.post(this.registerUrl, user)
}
grtUser(){
  
  return this.http.get(this.loginUrl)
}
loginUser(user){
  
  return this.http.post(this.loginUrl, user)
}
 Adminlog(){
   return !!localStorage.getItem('token');
   
 }
 logout(){
   localStorage.removeItem('token')
   this.router.navigate(['/Home'])
 }

 getUser(id:string){
  return this.http.get(`http://localhost:8000/Register/${id}`);
 }
}
