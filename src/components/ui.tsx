'use client';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AiOutlineLoading } from 'lucide-react';

export function cn(...inputs: Parameters<typeof clsx>): string {
  return twMerge(...inputs);
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', size = 'md', loading = false, onClick }: ButtonProps) {
  const className = cn(
    'inline-flex items-center rounded-lg font-bold',
    {
      'bg-zinc-900 text-white hover:bg-zinc-700': variant === 'primary',
      'bg-zinc-100 text-zinc-600 hover:bg-zinc-200': variant === 'secondary',
      'bg-transparent text-zinc-600 hover:bg-zinc-100': variant === 'outline',
      'bg-zinc-100 text-zinc-600 hover:bg-zinc-200': variant === 'ghost',
      'bg-red-500 text-white hover:bg-red-700': variant === 'danger',
    },
    {
      'py-2 px-4': size === 'md',
      'py-1.5 px-3': size === 'sm',
      'py-3 px-6': size === 'lg',
    }
  );

  return (
    <button onClick={onClick} className={className}>
      {loading ? <AiOutlineLoading className="mr-2" /> : null}
      {children}
    </button>
  );
}

export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <div className="bg-white border border-zinc-200 rounded-xl shadow-sm">{children}</div>;
}

export interface CardHeaderProps {
  children: React.ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="px-4 py-2 border-b border-zinc-200">{children}</div>;
}

export interface CardTitleProps {
  children: React.ReactNode;
}

export function CardTitle({ children }: CardTitleProps) {
  return <h2 className="text-lg font-bold text-zinc-900">{children}</h2>;
}

export interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return <div className="px-4 py-2">{children}</div>;
}

export interface BadgeProps {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export function Badge({ variant, children }: BadgeProps) {
  const className = cn(
    'inline-flex items-center rounded-lg font-bold text-xs',
    {
      'bg-zinc-900 text-white': variant === 'primary',
      'bg-zinc-100 text-zinc-600': variant === 'secondary',
      'bg-emerald-500 text-white': variant === 'success',
      'bg-amber-500 text-white': variant === 'warning',
      'bg-red-500 text-white': variant === 'error',
    }
  );

  return <span className={className}>{children}</span>;
}

export interface InputProps {
  type: 'text' | 'search' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function Input({ type, value, onChange, placeholder, className }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn('block w-full rounded-md p-2 border border-zinc-200', className)}
    />
  );
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-zinc-900/50 flex items-center justify-center">
      <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">{children}</div>
      <button onClick={onClose} className="absolute top-4 right-4">
        <AiOutlineLoading className="mr-2" />
      </button>
    </div>
  );
}