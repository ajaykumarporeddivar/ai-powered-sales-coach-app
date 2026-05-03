'use client';
import { useState } from 'react';
import { Button, Input, Badge } from '@/components/ui';
import { User, Sale, Team } from '@/lib/types';
import { cn } from '@/components/ui';

export function CreateEntityForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState('');
  const [saleAmount, setSaleAmount] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', role: '', team: '', saleAmount: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = { name: '', email: '', role: '', team: '', saleAmount: '' };
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!role) newErrors.role = 'Role is required';
    if (!team) newErrors.team = 'Team is required';
    if (!saleAmount) newErrors.saleAmount = 'Sale amount is required';
    setErrors(newErrors);
    if (Object.values(newErrors).every((error) => error === '')) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setRole('');
    setTeam('');
    setSaleAmount('');
    setErrors({ name: '', email: '', role: '', team: '', saleAmount: '' });
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        error={errors.name}
      />
      <Input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        error={errors.email}
      />
      <Input
        type="text"
        value={role}
        onChange={(event) => setRole(event.target.value)}
        placeholder="Role"
        error={errors.role}
      />
      <Input
        type="text"
        value={team}
        onChange={(event) => setTeam(event.target.value)}
        placeholder="Team"
        error={errors.team}
      />
      <Input
        type="number"
        value={saleAmount}
        onChange={(event) => setSaleAmount(event.target.value)}
        placeholder="Sale Amount"
        error={errors.saleAmount}
      />
      <Button type="submit" variant="primary">
        Create Entity
      </Button>
      <Button type="button" variant="secondary" onClick={handleReset}>
        Reset
      </Button>
      {submitted && (
        <Badge variant="success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Entity created successfully!
        </Badge>
      )}
    </form>
  );
}

export interface FilterState {
  search: string;
  status: string;
  dateRange: string;
  sortBy: string;
  sortDir: 'asc' | 'desc';
}

export function SearchAndFilter({ onChange }: { onChange: (filters: FilterState) => void }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onChange({ search: newSearch, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onChange({ search, status: newStatus, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDateRange = event.target.value;
    setDateRange(newDateRange);
    onChange({ search, status, dateRange: newDateRange, sortBy, sortDir });
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
    onChange({ search, status, dateRange, sortBy: newSortBy, sortDir });
  };

  const handleSortDirChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortDir = event.target.value as 'asc' | 'desc';
    setSortDir(newSortDir);
    onChange({ search, status, dateRange, sortBy, sortDir: newSortDir });
  };

  const handleClearFilters = () => {
    setSearch('');
    setStatus('');
    setDateRange('');
    setSortBy('');
    setSortDir('asc');
    onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' });
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="search"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
      />
      <select
        value={status}
        onChange={handleStatusChange}
        className={cn(
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        )}
      >
        <option value="">Select status</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
      <Input
        type="date"
        value={dateRange}
        onChange={handleDateRangeChange}
        placeholder="Date range"
      />
      <select
        value={sortBy}
        onChange={handleSortByChange}
        className={cn(
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        )}
      >
        <option value="">Select sort by</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="role">Role</option>
        <option value="team">Team</option>
        <option value="saleAmount">Sale amount</option>
      </select>
      <select
        value={sortDir}
        onChange={handleSortDirChange}
        className={cn(
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          'block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
        )}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <Button type="button" variant="secondary" onClick={handleClearFilters}>
        Clear filters
      </Button>
    </div>
  );
}

export function ExportButton({ data, onClick }: { data: any[]; onClick: () => void }) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((row) => Object.values(row).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.csv';
    a.click();
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  return (
    <Button type="button" variant="primary" onClick={handleExport}>
      {exported ? 'Exported!' : 'Export CSV'}
    </Button>
  );
}