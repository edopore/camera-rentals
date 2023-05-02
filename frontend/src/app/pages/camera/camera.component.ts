import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera } from 'src/app/models/camera.model';
import { Film } from 'src/app/models/film.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit{
  public camera: Camera = {
    _id: '',
    model: '',
    vendor: '',
    has_flash: false,
    film_id:[''],
    photo_url:'',
    createdAt:null,
    updatedAt:null
  }

  public film:Film = {
    _id: '',
    model:'',
    vendor:'',
    sesibility_iso:'',
    format_film:'',
    createdAt:null,
    updatedAt:null
  }

  constructor(private _activatedRoute: ActivatedRoute, private _httpService:HttpService){}

  ngOnInit(): void {
      this._activatedRoute.params.subscribe(params => {
        const id:string = params['id'];
        this._httpService.getCamera(id).subscribe((camera:Camera) => {
          this.camera = camera['data'];
          let listFilms = [];
          for(let i=0;i<this.camera.film_id.length;i++){
            this._httpService.getFilm(this.camera.film_id[i]).subscribe((film:Film)=>{
              this.film = film['data'];
              listFilms.push(this.film)
              console.log(this.film)
            })            
          }
        })
      })
  }
}
