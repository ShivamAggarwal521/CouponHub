// src/services/couponService.ts
import api from './api';

export interface Coupon {
  _id: string;
  title: string;
  description: string;
  platform: string;
  category: string;
  originalValue: number;
  sellingPrice: number;
  validUntil: string;
  isActive: boolean;
  seller: {
    _id: string;
    name: string;
    email: string;
    rating: number;
  };
}

// Fetch all coupons
export const getCoupons = async (): Promise<Coupon[]> => {
  const response = await api.get<Coupon[]>('/coupons');
  return response.data;
};

// Create a coupon
export const createCoupon = async (couponData: Omit<Coupon, '_id' | 'seller'>): Promise<Coupon> => {
  const response = await api.post<Coupon>('/coupons', couponData);
  return response.data;
};
