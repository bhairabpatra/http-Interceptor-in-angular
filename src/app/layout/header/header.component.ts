import { Component, OnInit } from '@angular/core';
import {  AuthService }  from '../../service/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | undefined; 
  constructor(private authService:  AuthService) { }


  ngOnInit(): void {

    this.isLoggedIn$ =  this.authService.isLoggedIn;

  }
  onLogout(){ this.authService.logout();                   }

}
