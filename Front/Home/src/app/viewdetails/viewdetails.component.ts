import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {AuthService} from '../auth.service';
import {AdminAuthService} from '../admin-auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
   userId:string;
   productId:string;
   title: string;
   desc:string;
   price: number;
   image: string
  constructor( private route:ActivatedRoute, private categoryService:CategoryService, private router:Router,private auth:AuthService, private _auth: AdminAuthService, private flash:FlashMessagesService) {
    this.route.params.subscribe((params: Params)=>{this.userId= params.userId, this.productId= params.productId, this.title= params.title,this.desc= params.desc, this.price= params.price })
   }

  ngOnInit(): void {
  }
  addCart(value: number){
  this.categoryService.createCart(this.userId, this.productId, this.title,this.desc,this.price, value)
  .subscribe(res =>{
     console.log(res);
     this.flash.show(`${this.title} has been successfully added to cart` ,{cssClass:'alert-success', timeout:3000});
    
     
  })
  }
}
