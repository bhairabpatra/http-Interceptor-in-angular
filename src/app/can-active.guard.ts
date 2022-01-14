import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import {  AuthService }  from './service/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
 
  constructor(private _authService:AuthService , private router:  Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn:  boolean) => {         
        
        if (!isLoggedIn){ 
          this.router.navigate(['/login']); 
        } 
        return true; })
    )
  }

  
}
