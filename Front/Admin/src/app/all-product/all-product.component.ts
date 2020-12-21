import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  constructor(private productService:ProductService) { }
  deleteProduct(id:any){
    var products= this.products;
    this.productService.deleteProduct(id)
    .subscribe(data =>{
      if(data.null==1)
      {
        for(var i=0; i< products.length; i++)
      {
        if(products[i]._id == id)
        {
          products.splice(i,1);
    }
  }
}
  })
}

  ngOnInit(): void {
    this.productService.getProduct()
    .subscribe(products =>
      this.products = products);
  }

}
