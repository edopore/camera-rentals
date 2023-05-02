import { Component,Input,OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() Rentals:Rental[]
  constructor(public _httpService:HttpService){}
  ngOnInit(): void {
      this._httpService
      .getRentals()
      .subscribe((rentals:Rental[])=>{
        this.Rentals = rentals['data'];
        console.log(this.Rentals)
      })
  }
}
