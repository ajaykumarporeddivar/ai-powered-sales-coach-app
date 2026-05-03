import { User, Team, Sale, Coaching, PerformanceMetric } from './types';

export const DEMO_USER: User = {
  id: 'demo-user-123',
  name: 'Emily Chen',
  email: 'emily.chen@example.com',
  role: 'sales_manager',
  plan: 'premium',
  avatar: 'https://example.com/avatar/emily-chen.jpg',
  joinedAt: '2024-02-01T12:00:00.000Z',
};

export const USERS: User[] = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    role: 'sales_representative',
    avatar: 'https://example.com/avatar/john-doe.jpg',
    joinedAt: '2024-02-01T12:00:00.000Z',
  },
  {
    id: 'user-2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password123',
    role: 'sales_manager',
    avatar: 'https://example.com/avatar/jane-doe.jpg',
    joinedAt: '2024-02-01T12:00:00.000Z',
  },
];

export const SALES: Sale[] = [
  {
    id: 'sale-1',
    user: USERS[0],
    amount: 1000,
    status: 'active',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
  {
    id: 'sale-2',
    user: USERS[1],
    amount: 500,
    status: 'pending',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
];

export const COACHING: Coaching[] = [
  {
    id: 'coaching-1',
    user: USERS[0],
    topic: 'Sales Strategy',
    status: 'active',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
  {
    id: 'coaching-2',
    user: USERS[1],
    topic: 'Time Management',
    status: 'pending',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    id: 'metric-1',
    name: 'Sales Revenue',
    value: 10000,
    trend: 'up',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
  {
    id: 'metric-2',
    name: 'Conversion Rate',
    value: 20,
    trend: 'stable',
    createdAt: '2024-02-01T12:00:00.000Z',
    updatedAt: '2024-02-01T12:00:00.000Z',
  },
];