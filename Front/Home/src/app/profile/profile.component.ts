import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,Params} from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  registerData = {}
  constructor(private _auth:AuthService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{
      const id =params.id;
      if(!id) return;
      this._auth.getUser(id).subscribe(  res =>{
        console.log(res)
       
         },err => console.log(err)
    
    )
    })
  }

}
