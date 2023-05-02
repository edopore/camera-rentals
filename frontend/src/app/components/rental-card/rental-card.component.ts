import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.css']
})
export class RentalCardComponent {
  @Input() Rental:any = {}
}
