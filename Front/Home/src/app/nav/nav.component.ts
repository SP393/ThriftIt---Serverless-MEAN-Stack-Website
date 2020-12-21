import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AdminAuthService} from '../admin-auth.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {Cart} from '../Cart';

import {Category} from '../Category';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: Category[] = [];
  

  carts: Cart[] = []; 
  get totalRows(): number{
    return this.carts.length;
    
  }
  constructor(private auth:AuthService, private _auth: AdminAuthService,private route:ActivatedRoute, private categoryService:CategoryService, private router:Router) { }
  
  ngOnInit(): void {
    this.categoryService.getType()
    .subscribe(types =>
      this.types = types);
      

      this.route.params.subscribe((params: Params)=>{
        const type =params.type;
        if(!type) return;
        this.categoryService.getcategory(type).subscribe((categories: Category[])=> this.categories= categories);
      })
      this.categoryService.getCarts()
    .subscribe(carts =>
      this.carts = carts);
    
  }
  

}
