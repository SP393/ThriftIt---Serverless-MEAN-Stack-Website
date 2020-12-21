import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AllProductComponent } from './all-product/all-product.component';
import { AddProductComponent } from './add-product/add-product.component';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AddTypesComponent } from './add-types/add-types.component';
import { AllTypesComponent } from './all-types/all-types.component';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';




@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    HomeComponent,
    AllCategoriesComponent,
    EditCategoryComponent,
    AllProductComponent,
    AddProductComponent,
    AdminAreaComponent,
    AddTypesComponent,
    AllTypesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule ,
    MaterialFileInputModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
