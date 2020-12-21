import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {DisplayproductComponent} from './displayproduct/displayproduct.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './auth.service';
import {AdminAuthService} from './admin-auth.service';
import {ValidateService} from './validate.service';
import { AdminAreaComponent } from './admin-area/admin-area.component';

import { from } from 'rxjs';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import { OrdersComponent } from './orders/orders.component';
import {OrderService} from './order.service';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    AdminAreaComponent,
    AdminLoginComponent,
    DisplayproductComponent,
    OrdersComponent,
    ViewdetailsComponent,
    ProfileComponent,
    MyCartComponent,
    ThankYouPageComponent,
    
    MyProfileComponent,
    
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    NgxPayPalModule
    
   
  
  ],
  providers: [AuthService ,AdminAuthService,ValidateService,FlashMessagesService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
