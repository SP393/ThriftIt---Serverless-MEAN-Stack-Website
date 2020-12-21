import { Component, OnInit } from '@angular/core';
import {AddCategoryService} from '../add-category.service';
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  constructor(private addCategoryService:AddCategoryService) { }
  deleteCategory(id:any){
    var categories= this.categories;
    this.addCategoryService.deleteCategory(id)
    .subscribe(data =>{
      if(data.null==1)
      {
        for(var i=0; i< categories.length; i++)
      {
        if(categories[i]._id == id)
        {
          categories.splice(i,1);
    }
  }
}
  })
}
  ngOnInit(): void {
    this.addCategoryService.getCategory()
    .subscribe(categories =>
      this.categories = categories);
  }

}
