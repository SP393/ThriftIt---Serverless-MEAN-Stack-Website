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
    return this.http.get('http://localhost:5000/Category')
    //.pipe(map((res:any)=> res.send()));
    
  }
  addCategory(newCategory)
  {
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:5000/Category', newCategory ,{headers:headers})
  //.pipe(map((res:any)=> res.send()));
  }
  deleteCategory(id){
    return this.http.delete('http://localhost:5000/Category/'+id)
    //.pipe(map((res:any)=> res.send()));
  }
  editCategory(id,data){
    return this.http.put('http://localhost:5000/Category/'+id ,data)
   }

   getType(){
    return this.http.get('http://localhost:5000/Types')
    //.pipe(map((res:any)=> res.send()));
    
  }
  addType(newType)
  {
  var headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:5000/Types', newType ,{headers:headers})
  //.pipe(map((res:any)=> res.send()));
  }
  deleteType(id){
    return this.http.delete('http://localhost:5000/Types/'+id)
    //.pipe(map((res:any)=> res.send()));
  }
  editType(id,data){
    return this.http.put('http://localhost:5000/Types/'+id ,data)
   }
}
