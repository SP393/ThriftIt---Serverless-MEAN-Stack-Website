import { Injectable } from '@angular/core';
import {Category} from './Category';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

import {WebServiceService} from './web-service.service';
import {Product} from './Product';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   
url= 'http://localhost:5000/Category'
Url= 'http://localhost:5000/products'
URL= 'http://localhost:5000/Types'
orderurl='http://localhost:7000/orders'
 
  constructor(private http:HttpClient, private webService:WebServiceService) { }
  getCategory(){
    return this.http.get(this.url)
  }
  getType(){
    return this.http.get(this.URL)
  }

  getcategory(type:string){
    return this.webService.get(`Category/${type}/category`);
  }
  getProduct(category:string){
   return this.webService.get(`Category/${category}/products`);
  }
  getProductSingle( id:string){
    return this.webService.get(`products/${id}`);
   }
  getproduct(){
    return this.http.get(this.Url);
   }

   createCart(userId:string, productId:string, title:string,desc:string, price:number,  quantity:number){
     return this.webService.post(`Cart/${userId}/${productId}/${title}/${desc}/${price}`, {quantity})
   }
   getCart(userId:string){
    return this.webService.get(`Cart/${userId}`);
   }
   deleteCart(id){
    return this.http.delete('http://localhost:5000/Cart/'+id)
    //.pipe(map((res:any)=> res.send()));
  }

  getCarts(){
    return this.http.get('http://localhost:5000/Cart')
  }
  addOrder(newOrder){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:7000/orders', newOrder ,{headers:headers})
   }
   getOrder(){
    return this.http.get('http://localhost:7000/orders')
  }
  
  }
