import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera } from '../models/camera.model';
import { environment } from '../../environments/environment.development' 

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
}
