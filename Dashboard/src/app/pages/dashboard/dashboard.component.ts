import { CommonModule  } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedRange = 'month';

  totalSales = 25000;
  bestProduct = '';
  orderStatus = 'Pending';
  visits = 0;
  total: number= 0;

  ngOnInit() {
    this.loadDashboardData();
  }

  onRangeChange() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // You can replace this with API calls later
    switch (this.selectedRange) {
      case 'day':
        this.totalSales = 125;
        this.bestProduct = 'Green T-Shirt';
        this.orderStatus = '5 Orders Pending';
        this.visits = 150;
        break;
      case 'week':
        this.totalSales = 980;
        this.bestProduct = 'Sneakers X';
        this.orderStatus = '15 Orders Shipped';
        this.visits = 1200;
        break;
      case 'month':
        this.totalSales = 4380;
        this.bestProduct = 'Wireless Earbuds';
        this.orderStatus = '45 Orders Completed';
        this.visits = 6300;
        break;
      case 'year':
        this.totalSales = 55000;
        this.bestProduct = 'Smart Watch Z';
        this.orderStatus = '500 Orders';
        this.visits = 72300;
        break;
    }
  }
  get pieGradient(): string {
    const total = this.totalSales + this.orderStatus;
    const salesPercent = (this.totalSales / this.total) * 100;
    return `conic-gradient(#42A5F5 0% ${salesPercent}%, #66BB6A ${salesPercent}% 100%)`;
  }


 


}
