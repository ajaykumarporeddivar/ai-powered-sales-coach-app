import { clsx } from 'clsx';
import { twMerge } from 'wind-merge';
import { formatDistanceToNow } from 'date-fns';

export function(...inputs: Parameters<typeofx>): string {
  return tw(...inputs);
}

export functionRelativeTime(iso: string): string {
 return formatDistanceToNow(new(iso), { addSuffix: true });
}

 function truncate(str:, len: number): string {
  return str.length > len ? str.substring(0, len) + '...' : str;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateId(): string {
  try {
    return crypto.randomUUID();
  } catch (error) {
    return Math.random().toString(36).substring(2, 15);
  }
}