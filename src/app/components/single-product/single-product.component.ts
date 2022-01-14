import { Component, OnInit } from '@angular/core';
import {AuthService} from  '../../service/auth.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  singleProd: any;

  constructor(private _productService:AuthService , private activatedRoute:ActivatedRoute)  { }

  ngOnInit(): void {
    

      
      
         this._productService.single_product(this.activatedRoute.snapshot.params['id']).subscribe((data) =>{
          this.singleProd = data
          
         })
         
     }
  

}
