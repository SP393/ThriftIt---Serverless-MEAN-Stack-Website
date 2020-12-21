import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
url= 'http://localhost:5000';
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
