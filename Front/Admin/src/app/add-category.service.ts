import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Category} from './add-category/Category';
import {Type} from './Type';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {
  

  constructor(private http: HttpClient) { }
  getCategory(){
    return this.http.get('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Category')
    //.pipe(map((res:any)=> res.send()));
    
  }
  addCategory(newCategory)
  {
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Category', newCategory ,{headers:headers})
  //.pipe(map((res:any)=> res.send()));
  }
  deleteCategory(id){
    return this.http.delete('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Category/'+id)
    //.pipe(map((res:any)=> res.send()));
  }
  editCategory(id,data){
    return this.http.put('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Category/'+id ,data)
   }

   getType(){
    return this.http.get('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Types')
    //.pipe(map((res:any)=> res.send()));
    
  }
  addType(newType)
  {
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Types', newType ,{headers:headers})
  //.pipe(map((res:any)=> res.send()));
  }
  deleteType(id){
    return this.http.delete('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Types/'+id)
    //.pipe(map((res:any)=> res.send()));
  }
  editType(id,data){
    return this.http.put('https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production/Types/'+id ,data)
   }
}
