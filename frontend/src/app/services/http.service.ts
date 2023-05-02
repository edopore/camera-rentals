import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '../models/camera.model';
import { environment } from '../../environments/environment.development' 
import { Customer } from '../models/customer.model';
import { Rental } from '../models/rental.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_URL_API;
  constructor(private readonly _http:HttpClient) {}

  public getCameras(){
    return this._http.get<Camera[]>(this.baseUrl+"/cameras");
  }

  public getCamera(id:string){
    return this._http.get<Camera>(this.baseUrl+"/cameras/"+id);
  }

  public getCustomers(){
    return this._http.get<Customer[]>(this.baseUrl+'/customers');
  }
  public getCustomer(id:string){
    return this._http.get<Customer>(this.baseUrl+'/customers/'+id);
  }
  public getRentals(){
    return this._http.get<Rental[]>(this.baseUrl+"/rentals");
  }
  public getRental(id:string){
    return this._http.get<Rental>(this.baseUrl+'/rentals/'+id);
  }
}
