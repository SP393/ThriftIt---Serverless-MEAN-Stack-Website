import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {CategoryService} from '../category.service';
import {Cart} from '../Cart';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  carts: Cart[] = [];
  constructor(private route:ActivatedRoute, private categoryService:CategoryService, private router:Router,private flash:FlashMessagesService) { }

  deleteCart(id:any){
    var carts= this.carts;
    this.categoryService.deleteCart(id)
    .subscribe(data =>{
      if(data.null==1)
      {
        for(var i=0; i< carts.length; i++)
      {
        if(carts[i]._id == id)
        {
          carts.splice(i,1);
          
    }
  }
}
alert('Order cancelled successfully')

  })
};

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{
      const userId =params.userId;
      if(!userId) return;
      this.categoryService.getCart(userId).subscribe((carts: Cart[])=> this.carts= carts);
    })
  }

}
