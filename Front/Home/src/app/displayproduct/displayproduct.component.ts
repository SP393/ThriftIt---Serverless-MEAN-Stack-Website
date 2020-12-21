import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router,Params} from '@angular/router';
import {CategoryService} from '../category.service';
import {Category} from '../Category';
import {Product} from '../Product';
import {AuthService} from '../auth.service';
import {AdminAuthService} from '../admin-auth.service';
@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {
 
 products: Product[] = []; 
  constructor(private auth:AuthService, private _auth: AdminAuthService, private route:ActivatedRoute, private categoryService:CategoryService, private router:Router) { }
 
  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params)=>{
    const category =params.category;
    if(!category) return;
    this.categoryService.getProduct(category).subscribe((products: Product[])=> this.products= products);
  })
  }

  
}
