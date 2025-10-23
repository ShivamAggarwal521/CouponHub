import { Platform, Category, Coupon, User } from '../types';

export const platforms: Platform[] = [
  { id: '1', name: 'Paytm', logo: '💳', color: '#00BAF2' },
  { id: '2', name: 'PhonePe', logo: '📱', color: '#5F2EEA' },
  { id: '3', name: 'Swiggy', logo: '🍔', color: '#FC8019' },
  { id: '4', name: 'Zomato', logo: '🍕', color: '#E23744' },
  { id: '5', name: 'Amazon', logo: '📦', color: '#FF9900' },
  { id: '6', name: 'Flipkart', logo: '🛒', color: '#2874F0' },
  { id: '7', name: 'Myntra', logo: '👕', color: '#FF3E6C' },
  { id: '8', name: 'BookMyShow', logo: '🎬', color: '#C4242B' },
];

export const categories: Category[] = [
  { id: '1', name: 'Food & Dining', icon: '🍽️' },
  { id: '2', name: 'Shopping', icon: '🛍️' },
  { id: '3', name: 'Travel', icon: '✈️' },
  { id: '4', name: 'Entertainment', icon: '🎭' },
  { id: '5', name: 'Grocery', icon: '🛒' },
  { id: '6', name: 'Fashion', icon: '👗' },
  { id: '7', name: 'Electronics', icon: '📱' },
  { id: '8', name: 'Health & Beauty', icon: '💄' },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    rating: 4.8,
    totalSales: 47,
    joinedDate: '2024-01-15',
    isVerified: true,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    rating: 4.9,
    totalSales: 82,
    joinedDate: '2023-11-20',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Amit Singh',
    email: 'amit@example.com',
    rating: 4.6,
    totalSales: 23,
    joinedDate: '2024-03-10',
    isVerified: false,
  },
];

export const mockCoupons: Coupon[] = [
  {
    id: '1',
    title: '₹500 OFF on Food Orders',
    description: 'Get ₹500 off on orders above ₹1000. Valid for all restaurants.',
    platform: platforms[2], // Swiggy
    originalValue: 500,
    sellingPrice: 350,
    discount: 30,
    category: categories[0], // Food & Dining
    validUntil: '2024-12-31',
    couponCode: 'SWIGGY500',
    seller: mockUsers[0],
    images: ['https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'],
    isActive: true,
    createdAt: '2024-12-01',
    tags: ['food', 'restaurant', 'discount'],
  },
  {
    id: '2',
    title: '₹200 Cashback on Recharge',
    description: 'Get ₹200 cashback on mobile recharge of ₹500 or above.',
    platform: platforms[0], // Paytm
    originalValue: 200,
    sellingPrice: 150,
    discount: 25,
    category: categories[6], // Electronics
    validUntil: '2024-12-25',
    couponCode: 'PAYTM200',
    seller: mockUsers[1],
    images: ['https://images.pexels.com/photos/163065/mobile-phone-android-apps-phone-163065.jpeg'],
    isActive: true,
    createdAt: '2024-11-28',
    tags: ['mobile', 'recharge', 'cashback'],
  },
  {
    id: '3',
    title: '₹1000 OFF on Electronics',
    description: 'Flat ₹1000 discount on electronics worth ₹10,000 or more.',
    platform: platforms[4], // Amazon
    originalValue: 1000,
    sellingPrice: 750,
    discount: 25,
    category: categories[6], // Electronics
    validUntil: '2024-12-20',
    couponCode: 'AMAZON1K',
    seller: mockUsers[0],
    images: ['https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg'],
    isActive: true,
    createdAt: '2024-11-25',
    tags: ['electronics', 'gadgets', 'amazon'],
  },
  {
    id: '4',
    title: '₹300 OFF on Fashion',
    description: 'Get ₹300 off on fashion items worth ₹1500 or above.',
    platform: platforms[6], // Myntra
    originalValue: 300,
    sellingPrice: 220,
    discount: 27,
    category: categories[5], // Fashion
    validUntil: '2024-12-18',
    couponCode: 'FASHION300',
    seller: mockUsers[2],
    images: ['https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'],
    isActive: true,
    createdAt: '2024-11-22',
    tags: ['fashion', 'clothing', 'style'],
  },
  {
    id: '5',
    title: '₹150 Movie Ticket Discount',
    description: 'Save ₹150 on movie tickets. Valid for all shows.',
    platform: platforms[7], // BookMyShow
    originalValue: 150,
    sellingPrice: 100,
    discount: 33,
    category: categories[3], // Entertainment
    validUntil: '2024-12-15',
    couponCode: 'MOVIE150',
    seller: mockUsers[1],
    images: ['https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg'],
    isActive: true,
    createdAt: '2024-11-20',
    tags: ['movies', 'entertainment', 'cinema'],
  },
  {
    id: '6',
    title: '₹400 OFF on Grocery',
    description: 'Get ₹400 off on grocery orders above ₹2000.',
    platform: platforms[5], // Flipkart
    originalValue: 400,
    sellingPrice: 280,
    discount: 30,
    category: categories[4], // Grocery
    validUntil: '2024-12-30',
    couponCode: 'GROCERY400',
    seller: mockUsers[0],
    images: ['https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'],
    isActive: true,
    createdAt: '2024-11-18',
    tags: ['grocery', 'food', 'essentials'],
  },
];