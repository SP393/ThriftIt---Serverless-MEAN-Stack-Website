import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AdminAuthService} from '../admin-auth.service';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router,Params} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private auth:AuthService, private _auth: AdminAuthService,private route:ActivatedRoute, private categoryService:CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getType()
    .subscribe(types =>
      this.types = types);

      this.route.params.subscribe((params: Params)=>{
        const type =params.type;
        if(!type) return;
        this.categoryService.getcategory(type).subscribe((categories: Category[])=> this.categories= categories);
      })
  }
  }


