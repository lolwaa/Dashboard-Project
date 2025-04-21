import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  statusOptions = ['Delivered', 'Pending', 'Out for Delivery', 'Preparing the Order'];

  orders = [
    {
      id: 'ORD001',
      customerName: 'Ahmed Ali',
      email: 'ahmed@example.com',
      date: '2025-04-20',
      status: 'Pending'
    },
    {
      id: 'ORD002',
      customerName: 'Fatima Ali',
      email: 'fatima@example.com',
      date: '2025-04-19',
      status: 'Delivered'
    }
    
  ];

  updateStatus(index: number, newStatus: string) {
    this.orders[index].status = newStatus;
  }
}


