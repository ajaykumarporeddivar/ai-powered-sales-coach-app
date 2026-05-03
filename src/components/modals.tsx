'use client';
import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';
import { User, Sale, Team } from '@/lib/types';
import { cn } from '@/components/ui';

export interface EntityDetailModalProps {
  item: Record<string, unknown> | null;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function EntityDetailModal({ item, open, onClose, title }: EntityDetailModalProps) {
  const [approveLoading, setApproveLoading] = useState(false);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleApprove = () => {
    setApproveLoading(true);
    // Add approve logic here
    setTimeout(() => {
      setApproveLoading(false);
      onClose();
    }, 1000);
  };

  const handleArchive = () => {
    setArchiveLoading(true);
    // Add archive logic here
    setTimeout(() => {
      setArchiveLoading(false);
      onClose();
    }, 1000);
  };

  const handleDelete = () => {
    setDeleteLoading(true);
    // Add delete logic here
    setTimeout(() => {
      setDeleteLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <h2 className="text-lg font-bold">{title}</h2>
        {item && item.status && (
          <Badge variant="success">
            {item.status}
          </Badge>
        )}
      </Modal.Header>
      <Modal.Body>
        {item && (
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(item).map((key) => (
              <div key={key} className="flex flex-col">
                <span className="text-gray-600">{key}</span>
                <span className="text-gray-900">{item[key]}</span>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="primary" loading={approveLoading} onClick={handleApprove}>
          Approve
        </Button>
        <Button type="button" variant="secondary" loading={archiveLoading} onClick={handleArchive}>
          Archive
        </Button>
        <Button type="button" variant="danger" loading={deleteLoading} onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  variant?: 'danger' | 'info';
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <h2 className="text-lg font-bold">{title}</h2>
      </Modal.Header>
      <Modal.Body>
        <p className="text-gray-600">{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant={variant === 'danger' ? 'danger' : 'primary'} onClick={onConfirm}>
          {confirmLabel}
        </Button>
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: Array<{ label: string; href: string; icon?: React.ReactNode; description?: string }>;
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [focusedItem, setFocusedItem] = useState<number | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      if (focusedItem === null) {
        setFocusedItem(items.length - 1);
      } else {
        setFocusedItem((focusedItem - 1 + items.length) % items.length);
      }
    } else if (event.key === 'ArrowDown') {
      if (focusedItem === null) {
        setFocusedItem(0);
      } else {
        setFocusedItem((focusedItem + 1) % items.length);
      }
    } else if (event.key === 'Enter') {
      if (focusedItem !== null) {
        const item = items[focusedItem];
        if (item.href) {
          window.location.href = item.href;
        }
      }
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>
        <h2 className="text-lg font-bold">Command Palette</h2>
      </Modal.Header>
      <Modal.Body>
        <input
          type="search"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          autoFocus
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <ul>
          {items
            .filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <li key={item.label} className={cn({ 'bg-gray-100': focusedItem === index })}>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.label}</span>
                {item.description && <span className="text-gray-600">{item.description}</span>}
              </li>
            ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
}