import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrls: ['./camera-card.component.css']
})
export class CameraCardComponent{
  @Input() Camera:any = {}
  constructor(){}
}
