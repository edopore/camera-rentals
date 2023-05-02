import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer:Customer = {
    _id: '',
    full_name: '',
    nuip: '',
    photo_user: '',
    createdAt:null,
    updatedAt:null
  }

  constructor(private _activatedRoute:ActivatedRoute,private _httpService:HttpService){}
  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      const id:string = params['id'];
      this._httpService
      .getCustomer(id)
      .subscribe((customer:Customer) => {
        this.customer = customer['data'];
      })
    })
  }
}
