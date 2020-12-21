import { Component, OnInit } from '@angular/core';
import {AddCategoryService} from '../add-category.service';
import {Type} from '../Type';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-types',
  templateUrl: './add-types.component.html',
  styleUrls: ['./add-types.component.css'],
  providers: [AddCategoryService]
})
export class AddTypesComponent implements OnInit {
  types:Type[];
  type:Type;
  title: string;
  constructor(private addCategoryService:AddCategoryService) { }
  addType(){
    const newType ={
      title: this.title
      
    }
    this.addCategoryService.addType(newType)
    .subscribe(result =>{
      console.log(result);
      
    })
  }
  
  ngOnInit(): void {
  }

}
