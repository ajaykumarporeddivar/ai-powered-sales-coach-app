'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue) as T);
    }
  }, [key]);

  const setValueAndStore = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValueAndStore];
}

export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): { filtered: T[]; search: string; setSearch: (s: string) => void; status: string; setStatus: (s: string) => void } {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filteredItems = items.filter((item) => {
    const searchMatch = fields.some((field) => item[field].toString().toLowerCase().includes(search.toLowerCase()));
    const statusMatch = status === '' || item.status === status;
    return searchMatch && statusMatch;
  });

  return { filtered: filteredItems, search, setSearch, status, setStatus };
}

export function useModal<T = unknown>(): {
  isOpen: boolean;
  open: (item?: T) => void;
  close: () => void;
  activeItem: T | null;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const open = (item?: T) => {
    setIsOpen(true);
    setActiveItem(item);
  };

  const close = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return { isOpen, open, close, activeItem };
}

export function useDemoToast(): {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
  show: (msg: string, type?: 'success' | 'error' | 'info') => void;
} {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('success');
  const [visible, setVisible] = useState(false);

  const show = (msg: string, type?: 'success' | 'error' | 'info') => {
    setMessage(msg);
    setType(type || 'success');
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  };

  return { message, type, visible, show };
}