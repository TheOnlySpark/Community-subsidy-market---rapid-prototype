
export enum AppRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: AppRole;
  isMember: boolean;
  avatar: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  stockLevel: number;
  maxStock: number;
  memberPrice: number;
  nonMemberPrice: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
  discount?: string;
  description?: string;
}

export interface Reservation {
  id: string;
  memberId: string;
  memberName: string;
  memberAvatar: string;
  productId: string;
  productName: string;
  sku: string;
  timeRemainingSeconds: number;
  status: 'Active' | 'Expiring' | 'Overdue';
  price: number;
  location: string;
}
