import { Component, OnInit } from '@angular/core';
import {AddCategoryService} from '../add-category.service';
import {Category} from './Category';
import { FormControl, FormGroup } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [AddCategoryService]
})
export class AddCategoryComponent implements OnInit {
categories:Category[];
category:Category;
title: string;
type: string;
    

  constructor(private addCategoryService:AddCategoryService, private flash:FlashMessagesService) { }
 addCategories(){
   const newCategory ={
     title: this.title,
     type: this.type
     
   }
   this.addCategoryService.addCategory(newCategory)
   .subscribe(result =>{
     console.log(result);
     this.flash.show('Successfully Added Sub-Category ',{cssClass:'alert-success', timeout:3000});
   })
 }
 



  ngOnInit():void{
    
  }

}
