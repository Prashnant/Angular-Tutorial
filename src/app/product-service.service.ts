import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient:HttpClient) { }
  getProducts(page:number):Observable<any>{
    return this.httpClient.get(`http://localhost:1050/getAllProducts/${page}/All/NoSearch`,{withCredentials:true})
  }
}

