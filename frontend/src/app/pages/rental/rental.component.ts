import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rental } from 'src/app/models/rental.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  public rental:Rental={
    _id: "",
    customer_id: "",
    camera_id: "",
    createdAt:null,
    updatedAt:null
  };
  constructor(private _activatedRoute:ActivatedRoute,private _httpService:HttpService){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      const id:string = params['id'];
      this._httpService
      .getRental(id)
      .subscribe((rental:Rental) => {
        this.rental = rental['data'];
      })
    })
  }
}
