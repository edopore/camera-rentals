import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera } from 'src/app/models/camera.model';
import { Customer } from 'src/app/models/customer.model';
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
  public customer:Customer = {
    _id: '',
    full_name: '',
    nuip: '',
    photo_user: '',
    createdAt:null,
    updatedAt:null
  };
  public camera: Camera = {
    _id: '',
    model: '',
    vendor: '',
    has_flash: false,
    film_id:[''],
    photo_url:'',
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
        console.log(this.rental.camera_id)
        this._httpService.getCustomer(this.rental.customer_id).subscribe((customer:Customer)=>{
          this.customer = customer['data'];
          console.log(this.customer)
        })
        this._httpService.getCamera(this.rental.camera_id).subscribe((camera:Camera)=>{
          this.camera = camera['data'];
          console.log(this.camera)
        })
      })
    })
  }
}
