import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  statusOptions = ['Delivered', 'Pending', 'Out for Delivery', 'Preparing the Order'];
   private searchSub!: Subscription;
filteredItems: any;
  
    
  
    constructor(public searchService: SearchService) {}

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
  originalProducts = this.orders

  updateStatus(index: number, newStatus: string) {
    this.orders[index].status = newStatus;
  }
  ngOnInit() {
    this.originalProducts = [...this.orders]; // store the full list

  this.searchSub = this.searchService.searchTerm$.subscribe(term => {
    const search = term.toLowerCase();

    this.orders = this.originalProducts.filter(order =>
      order.id.toLowerCase().includes(search)
    );
  });
}
  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }
}


