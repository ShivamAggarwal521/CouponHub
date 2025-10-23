import api, { setAuthToken } from './api';

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller'; // include role
  rating: number;
  totalSales: number;
  isVerified: boolean;
}

interface AuthResponse {
  token: string;
  user: User;
}

// ✅ Register user (buyer or seller)
export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: 'buyer' | 'seller' = 'buyer'
): Promise<User> => {
  const response = await api.post<AuthResponse>('/auth/register', { name, email, password, role });

  const { token, user } = response.data;
  localStorage.setItem('token', token);
  setAuthToken(token); // set token in axios header for future requests
  return user;
};

// ✅ Login user
export const loginUser = async (email: string, password: string): Promise<User> => {
  const response = await api.post<AuthResponse>('/auth/login', { email, password });
  const { token, user } = response.data;
  localStorage.setItem('token', token);
  setAuthToken(token);
  return user;
};

// ✅ Logout user
export const logoutUser = () => {
  localStorage.removeItem('token');
  setAuthToken(null);
};
