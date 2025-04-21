import { CommonModule, NgIfContext } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      id: 'P001',
      name: 'Foundation',
      quantity: 50,
      price: 20.99,
      imageUrl: 'https://th.bing.com/th/id/OIP.DipXFA269LxtdvUBMOtFmQHaHa?rs=1&pid=ImgDetMain'
    },
    {
      id: 'P002',
      name: 'Concelar',
      quantity: 30,
      price: 16.5,
      imageUrl: 'https://i5.walmartimages.com/asr/e1f990de-d91e-4b45-97d3-e01172024e1b.354814301823d0782451b514a2f77274.jpeg'
    },
    {
      id: 'P003',
      name: 'Eye-shadow',
      quantity: 15,
      price: 19.99,
      imageUrl: 'https://img.freepik.com/premium-photo/eye-shadow-palette_926887-3171.jpg'
    }
  ];
  showForm = false;
  editingIndex: number | null = null;

  newProduct = {
    id: '',
    name: '',
    quantity: 0,
    price: 0,
    imageUrl: ''
  };
  editedProduct: { id: string; name: string; quantity: number; price: number; imageUrl: string; } | undefined;

  
  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProduct(id: string, name: string, quantity: string, price: string, imageUrl: string) {
    if (id && name) {
      this.products.push({
        id,
        name,
        quantity: +quantity,
        price: +price,
        imageUrl: imageUrl || 'https://via.placeholder.com/80?text=Product'
      });
      this.toggleForm(); // hide form
    }
  }

  

  deleteProduct(productId: string) {
    this.products = this.products.filter(p => p.id !== productId);
  }

  editProduct(index: number) {
    const product = this.products[index];
    this.editingIndex = index;
    this.editedProduct = { ...product };
  }
  
  saveEdit(id: string, name: string, quantity: string, price: string, imageUrl: string) {
    if (this.editingIndex !== null) {
      const original = this.products[this.editingIndex];
  
      this.products[this.editingIndex] = {
        id: id || original.id,
        name: name || original.name,
        quantity: quantity ? +quantity : original.quantity,
        price: price ? +price : original.price,
        imageUrl: imageUrl || original.imageUrl
      };
      this.editingIndex = null;
    }
  }
  
  cancelEdit() {
    this.editingIndex = null;
  }
}  