import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router }  from '@angular/router'; 
import {  BehaviorSubject }  from 'rxjs'; 
// import {  User }  from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   loggedIn = new  BehaviorSubject<boolean>(false); 
  constructor(private _http:HttpClient , private router:  Router) { }

 
  api_url ='https://fakestoreapi.com/products'
  login_api_url ="https://fakestoreapi.com/auth/login"
  get_Products(){
      return this._http.get(this.api_url)
  }


  single_product(productID:any){
        return this._http.get(this.api_url +'/'+ productID )
  }

  authentication(data: any){
    return this._http.post(this.login_api_url , data)
}

get isLoggedIn() { 
  return this.loggedIn.asObservable(); 
}
logout(){
  this.loggedIn.next(false); 
  this.router.navigate(['/']); 
}
}
