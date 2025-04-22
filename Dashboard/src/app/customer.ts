export interface Customer {
[x: string]: any;
    id: number;         
    name: string;     
    email: string;      
    phone: string;      
    address: string;  
    cardDetails: string;
    createdAt: string;
    status: 'Active' | 'Inactive';
    totalSpent: number;
    notes: string;  
    showDetails: boolean;
   
  }
  
