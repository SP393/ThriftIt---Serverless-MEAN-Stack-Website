import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import {DisplayproductComponent} from './displayproduct/displayproduct.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
const routes: Routes = [{path: 'Home' ,component:HomeComponent},
{path: 'register' ,component:RegisterComponent},
{path: 'login' ,component:LoginComponent },
{path: 'Admin/login' ,component:AdminLoginComponent}, 
{path: 'Admin/Area' ,component:AdminAreaComponent },
{path: 'Products' ,component:DisplayproductComponent },
{path: 'Products/:category' ,component:DisplayproductComponent },
{path: 'Home/:type' ,component:HomeComponent},
{path: 'Orders' ,component:OrdersComponent},
{path: 'Details/:userId/:productId/:title/:desc/:price' ,component:ViewdetailsComponent},
{path: 'MyCart/:userId' ,component:MyCartComponent},
{path: 'OrderPlaced' ,component:ThankYouPageComponent },
{path: 'myOrders/:userId' ,component:MyOrdersComponent },
{path: 'myProfile/:id' ,component:ProfileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
