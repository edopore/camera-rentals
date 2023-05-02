import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraCardComponent } from './components/camera-card/camera-card.component';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CameraComponent } from './pages/camera/camera.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { RentalCardComponent } from './components/rental-card/rental-card.component';
import { RentalComponent } from './pages/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraCardComponent,
    CamerasComponent,
    NavbarComponent,
    HomeComponent,
    CameraComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerCardComponent,
    RentalCardComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
