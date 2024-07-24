import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
url= 'https://krzqc46hph.execute-api.us-east-1.amazonaws.com/production';
  constructor(private http: HttpClient) { }
  get(uri: string){
    return this.http.get(`${this.url}/${uri}`);
  }
   post(uri: string, payload:Object){
     return this.http.post(`${this.url}/${uri}`,payload);
   }
   delete(uri: string){
    return this.http.delete(`${this.url}/${uri}`);
  }
}
