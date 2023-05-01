import { Component, Input, OnInit } from '@angular/core';
import { Camera } from 'src/app/models/camera.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit{
  @Input() Cameras:Camera[]
  constructor(public _httpService:HttpService){}
  ngOnInit(): void {
    this._httpService
    .getCameras()
    .subscribe((cameras: Camera[]) => {
      this.Cameras = cameras['data'];
      console.log(this.Cameras)
    });
  }
}
