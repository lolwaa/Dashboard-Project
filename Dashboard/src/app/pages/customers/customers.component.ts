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
String(arg0: number|undefined) {
throw new Error('Method not implemented.');
}

  private usdToKwdRate: number = 0.31;
  editedCustomer: {id:number, name: string, email: string, phone: string, address: string, notes: string } | undefined;
  editingIndex: number | null = null;

  customers : Customer[] = [
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '99221366',
      address: '123 Main Street, City, Kuwait',
      cardDetails: 'XXXX-XXXX-XXXX-1234',
      createdAt: '2025-01-10',
      status: 'Active',
      totalSpent: 45,
      notes: '',
      showDetails: false
    },
    {
      id: 2,
      name: 'Fatima Ali',
      email: 'fatima@example.com',
      phone: '99876547',
      address: '456 Oak Avenue, City, Country',
      cardDetails: 'XXXX-XXXX-XXXX-5678',
      createdAt: '2024-01-10',
      status: 'Active',
      totalSpent: 40,
      notes: '',
      showDetails: false,
    }
  ]
  
  
  convertToKwd(usdAmount: number): number {
    return usdAmount * this.usdToKwdRate;
  }

  toggleDetails(index: number): void {
    this.customers[index].showDetails = !this.customers[index].showDetails;
  }

  saveNote(index: number, note: string) {
    this.customers[index]['notes']= note;
    alert(`Note saved for ${this.customers[index].name}`);
  }

  editCustomer(index: any) {
    const customer = this.customers[index];
    this.editingIndex = index;
    this.editedCustomer = { ...customer };
    alert(`Editing ${customer.name}`);
  }
  saveEdit(id: number, name: string, email: string, phone: string, address: string) {
    if (this.editingIndex !== null) {
      const original = this.customers[this.editingIndex];
  
      this.customers[this.editingIndex] = {
        id,
        name,
        email,
        phone,
        address,
        cardDetails: original.cardDetails,     // preserved
        createdAt: original.createdAt,         // preserved
        status: original.status,               // preserved
        totalSpent: original.totalSpent,       // preserved
        notes: original.notes,                 // preserved
        showDetails: original.showDetails      // preserved
      };
  
      this.editingIndex = null;
    }
  }
  
  cancelEdit() {
    this.editingIndex = null;
  }
  

  deactivateCustomer(customer: any) {
    if (confirm(`Deactivate ${customer.name}?`)) {
      customer.status = 'Inactive';
    }
  }

  deleteCustomer(customer: any) {
    if (confirm(`Delete ${customer.name}?`)) {
      this.customers = this.customers.filter(c => c !== customer);
    }
  }

  exportCustomer(customer: any) {
    const data = {
      Name: customer.name,
      Email: customer.email,
      Phone: customer.phone,
      Address: customer.address,
      Status: customer.status,
      TotalSpent: customer.totalSpent,
      Notes: customer.notes
    };

    const csv = this.convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `${customer.name}-info.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  convertToCSV(obj: any): string {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return `${keys.join(',')}\n${values.join(',')}`;
  }


}