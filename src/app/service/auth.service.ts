import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  api_url ='https://fakestoreapi.com/products'
  get_Products(){
      return this._http.get(this.api_url)
  }


  single_product(productID:any){
        return this._http.get(this.api_url +'/'+ productID )
  }
}
