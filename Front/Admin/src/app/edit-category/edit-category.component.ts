import { Component, OnInit } from '@angular/core';
import {AddCategoryService} from '../add-category.service';
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private addCategoryService:AddCategoryService) { }

  ngOnInit(): void {
  }

}
