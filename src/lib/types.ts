export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'sales_manager' | 'sales_representative' | 'business_owner';
  avatar: string;
  joinedAt: string;
}

export interface Team {
  id: string;
  name: string;
  members: User[];
  createdAt: string;
  updatedAt: string;
}

export interface Sale {
  id: string;
  user: User;
  amount: number;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Coaching {
  id: string;
  user: User;
  topic: string;
  status: 'active' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}