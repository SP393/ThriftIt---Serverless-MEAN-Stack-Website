import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient ,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductService]
})
export class AddProductComponent implements OnInit {

    
  


  products:Product[];
  product:Product;
   title: string;
   
    desc: string;
    category:string;
   price: number;
 image: string

  constructor(private productService:ProductService, private http: HttpClient) { }
  addProduct(){
    const newProduct ={
      title: this.title,
      desc: this.desc,
      category: this.category,
      price: this.price,
      image: this.image
      
    }
    this.productService.addProduct(newProduct)
    .subscribe(result =>{
      console.log(result);
      
    })
  }
  

  ngOnInit(): void {
  }

}
