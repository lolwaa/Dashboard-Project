import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customer } from './../../customer';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers : Customer[] = [
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '99221366',
      address: '123 Main Street, City, Kuwait',
      cardDetails: 'XXXX-XXXX-XXXX-1234',
      showDetails: false
    },
    {
      id: 2,
      name: 'Fatima Ali',
      email: 'fatima@example.com',
      phone: '99876547',
      address: '456 Oak Avenue, City, Country',
      cardDetails: 'XXXX-XXXX-XXXX-5678',

      showDetails: false,
    }
  ]

 
  

  toggleDetails(index: number): void {
    this.customers[index].showDetails = !this.customers[index].showDetails;
  }


}