import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { CameraComponent } from './pages/camera/camera.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cameras',
    component:CamerasComponent
  },
  {
    path:'camera/:id',
    component:CameraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
