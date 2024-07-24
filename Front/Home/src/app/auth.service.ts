import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 registerUrl = "https://umjz5uvjb0.execute-api.us-east-1.amazonaws.com/production/Register";
 loginUrl = "https://umjz5uvjb0.execute-api.us-east-1.amazonaws.com/production/login"

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
  return this.http.get(`https://umjz5uvjb0.execute-api.us-east-1.amazonaws.com/production/Register/${id}`);
 }
}
