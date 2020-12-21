import { Component, OnInit, NgZone } from '@angular/core';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {CategoryService} from '../category.service';
import {Cart} from '../Cart';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import { url } from 'inspector';
import {ICustomWindow, WindowRefService} from '../window-ref.service';
import {Order} from '../Order';
import {FlashMessagesService} from 'angular2-flash-messages';
declare let paypal:any;
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

 
  public payPalConfig ?: IPayPalConfig;

  private _window: ICustomWindow;
  public rzp: any;

  public options: any = {
    key: 'rzp_test_uwVqQm4RkGO5vc', // add razorpay key here
    name: 'ThriftIt',
    description: 'Shopping',
    amount: 80000, // razorpay takes amount in paisa
    prefill: {
      name: 'Sruthi',
      email: 'sruthipandiath@gamil.com', // add your email id
    },
    notes: {},
    theme: {
      color: '#3880FF'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {
          // add current page routing if payment fails
          
        })
      })
    }
  };
  

  carts: Cart[] = []; 
  orders:Order[];
  order:Order;
   address: string;
   
    city: string;
    state:string;
   country: string;
 pincode: string
  constructor(private route:ActivatedRoute, private categoryService:CategoryService, private router:Router,private zone: NgZone,
    private winRef: WindowRefService, private flash:FlashMessagesService) { this._window = this.winRef.nativeWindow;}
     get totalRows(): number{
      return this.carts.length;
      
    }
    addOrder(){
      const newOrder ={
        address: this.address,
        city: this.city,
        state: this.state,
        country: this.country,
        pincode: this.pincode
        
      }
      this.categoryService.addOrder(newOrder)
      .subscribe(result =>{
        console.log(result);
        alert('Address Added Successfully!!')
        
      })
    }
    
    initPay(): void {
      this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
      this.rzp.open();
    }
    paymentHandler(res: any) {
      this.zone.run(() => {
        // add API call here
        this.router.navigate(['/OrderPlaced'])
      });
    }
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

this.flash.show('Successfully Removed From Cart',{cssClass:'alert-success', timeout:3000})
  })
};


  ngOnInit(): void {
    
    this.initConfig();

    this.route.params.subscribe((params: Params)=>{
      const userId =params.userId;
      if(!userId) return;
      this.categoryService.getCart(userId).subscribe((carts: Cart[])=> this.carts= carts);
    })
  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'INR',
      clientId: 'ASbAMkNP-6NKGGMKB6nhV1zfkxD4vIanL8Q8jKRS7U3JzIVRKMz5ie8Bmh-Ag99LITWtW1koNK-hc5Hu', // add paypal clientId here
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'INR',
            value: '800',
            breakdown: {
              item_total: {
                currency_code: 'INR',
                value: '800'
              }
            }
          },
          items: [{
            name: 'Clothes',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'INR',
              value: '800',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'blue',
        shape: 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
          this.router.navigate(['/OrderPlaced'])
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      }
    
    };
    
  }
  

}
