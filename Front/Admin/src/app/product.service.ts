import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import {Product} from './product';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }
    getProduct(){
      return this.http.get('http://localhost:5000/products');
    }
     addProduct(newProduct){
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:5000/products', newProduct ,{headers:headers})
     }
     deleteProduct(id){
      return this.http.delete('http://localhost:5000/products/'+id)
}


}