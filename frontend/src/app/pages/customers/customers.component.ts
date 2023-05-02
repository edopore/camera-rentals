import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  @Input() Customers:Customer[]
  constructor(public _httpService:HttpService){}
  ngOnInit(): void{
      this._httpService
      .getCustomers()
      .subscribe((customers:Customer[])=>{
        this.Customers = customers['data'];
        console.log(this.Customers)
      });
  }
}
