export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  totalSales: number;
  joinedDate: string;
  isVerified: boolean;
}

export interface Coupon {
  id: string;
  title: string;
  description: string;
  platform: Platform;
  originalValue: number;
  sellingPrice: number;
  discount: number;
  category: Category;
  validUntil: string;
  couponCode: string;
  seller: User;
  images: string[];
  isActive: boolean;
  createdAt: string;
  tags: string[];
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}