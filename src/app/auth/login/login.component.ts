import { Component, OnInit } from '@angular/core';
import {  FormGroup,  FormBuilder,  Validators }  from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup; 
  private formSubmitAttempt:  boolean | undefined;
  constructor(private fb:  FormBuilder,private authService:  AuthService , private router:  Router) { }

  ngOnInit(): void {

    this.form =  this.fb.group(
            {username: ['',  Validators.required], 
            password: ['',  Validators.required] });
  }

  
  onSubmit(){
      console.log("form value" +  this.form.value)
      this.authService.authentication(this.form.value).subscribe((data)=>{
           console.log("Login result" + data)
           this.authService.loggedIn.next(true)

           this.router.navigate(['/products']);
           
      })
  }

}
