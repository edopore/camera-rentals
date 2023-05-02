import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { CameraComponent } from './pages/camera/camera.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { RentalComponent } from './pages/rental/rental.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'rental/:id',
    component:RentalComponent
  },
  {
    path:'cameras',
    component:CamerasComponent
  },
  {
    path:'camera/:id',
    component:CameraComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'customer/:id',
    component:CustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
