import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  page: number = 1;
  passenger:any;
  itemsPerPage = 9;
  totalItems : any =[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPassengerData();
  }

  getAllPassengerData() {
    this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${1}&size=${this.itemsPerPage}`).subscribe((data: any) => {
      console.log("xxxxxxxxx" , data)
    this.passenger = data.data;
    this.totalItems = data.totalPassengers;
    })

    

}
gty(page: any){
  this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
    this.passenger =  data.data;
    this.totalItems = data.totalPassengers;
    console.log("xxxxxxxxx" , data)
  })
}
}
