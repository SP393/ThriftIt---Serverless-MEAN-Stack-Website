import { Component, OnInit } from '@angular/core';
import {AddCategoryService} from '../add-category.service';
@Component({
  selector: 'app-all-types',
  templateUrl: './all-types.component.html',
  styleUrls: ['./all-types.component.css']
})
export class AllTypesComponent implements OnInit {

  constructor(private addCategoryService:AddCategoryService) { }
  deleteType(id:any){
    var types= this.types;
    this.addCategoryService.deleteType(id)
    .subscribe(data =>{
      if(data.null==1)
      {
        for(var i=0; i< types.length; i++)
      {
        if(types[i]._id == id)
        {
          types.splice(i,1);
    }
  }
}
  })
}
  ngOnInit(): void {
    this.addCategoryService.getType()
    .subscribe(types =>
      this.types = types);
  
  }

}
