import { Component, OnInit } from '@angular/core';
import {AuthService} from  '../../service/auth.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products : any =[];
  constructor(private __authService:AuthService) { }

  ngOnInit(): void {

      this.__authService.get_Products().subscribe((data)=>{
              this.products = data
              console.log("data===" + data)
      })
     
  }

}
