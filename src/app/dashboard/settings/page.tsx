'use client';

import { useState } from 'react';
import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={cn('flex', 'flex-col', 'h-screen', 'bg-zinc-50')}>
      <AppHeader />
      <div className={cn('flex-1', 'p-4', 'overflow-y-scroll')}>
        <div className={cn('flex', 'justify-between', 'mb-4')}>
          <h2 className={cn('text-zinc-900', 'font-bold', 'text-2xl')}>Settings</h2>
        </div>
        <div className={cn('flex', 'flex-wrap', 'justify-around', 'mb-4')}>
          <Button
            className={cn(
              activeTab === 'profile' ? 'bg-zinc-900' : 'bg-zinc-200',
              'text-white',
              'py-2',
              'px-4',
              'rounded-lg'
            )}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </Button>
          <Button
            className={cn(
              activeTab === 'notifications' ? 'bg-zinc-900' : 'bg-zinc-200',
              'text-white',
              'py-2',
              'px-4',
              'rounded-lg'
            )}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </Button>
          <Button
            className={cn(
              activeTab === 'appearance' ? 'bg-zinc-900' : 'bg-zinc-200',
              'text-white',
              'py-2',
              'px-4',
              'rounded-lg'
            )}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </Button>
        </div>
        {activeTab === 'profile' && (
          <Card className={cn('bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm', 'p-4')}>
            <h3 className={cn('text-zinc-900', 'font-bold', 'text-xl')}>Profile</h3>
            <div className={cn('flex', 'flex-col', 'mb-4')}>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md', 'py-2', 'px-4')}
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md', 'py-2', 'px-4')}
              />
              <Input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
                className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md', 'py-2', 'px-4')}
              />
            </div>
            <Button
              className={cn('bg-zinc-900', 'text-white', 'py-2', 'px-4', 'rounded-lg')}
              onClick={handleSave}
            >
              Save
            </Button>
            {saved && <Badge className={cn('bg-emerald-50', 'text-emerald-600', 'px-2', 'py-1', 'rounded-md')}>Saved!</Badge>}
          </Card>
        )}
        {activeTab === 'notifications' && (
          <Card className={cn('bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm', 'p-4')}>
            <h3 className={cn('text-zinc-900', 'font-bold', 'text-xl')}>Notifications</h3>
            <div className={cn('flex', 'flex-col', 'mb-4')}>
              <div
                className={cn('flex', 'justify-between', 'py-2', 'px-4', 'rounded-md', 'cursor-pointer')}
                onClick={() => setEmailNotifications(!emailNotifications)}
              >
                <span className={cn('text-zinc-600')}>Email notifications</span>
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
                />
              </div>
              <div
                className={cn('flex', 'justify-between', 'py-2', 'px-4', 'rounded-md', 'cursor-pointer')}
                onClick={() => setPushNotifications(!pushNotifications)}
              >
                <span className={cn('text-zinc-600')}>Push notifications</span>
                <input
                  type="checkbox"
                  checked={pushNotifications}
                  className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
                />
              </div>
              <div
                className={cn('flex', 'justify-between', 'py-2', 'px-4', 'rounded-md', 'cursor-pointer')}
                onClick={() => setWeeklyDigest(!weeklyDigest)}
              >
                <span className={cn('text-zinc-600')}>Weekly digest</span>
                <input
                  type="checkbox"
                  checked={weeklyDigest}
                  className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md')}
                />
              </div>
            </div>
          </Card>
        )}
        {activeTab === 'appearance' && (
          <Card className={cn('bg-white', 'border', 'border-zinc-200', 'rounded-xl', 'shadow-sm', 'p-4')}>
            <h3 className={cn('text-zinc-900', 'font-bold', 'text-xl')}>Appearance</h3>
            <div className={cn('flex', 'flex-col', 'mb-4')}>
              <div className={cn('flex', 'justify-between', 'py-2', 'px-4', 'rounded-md', 'cursor-pointer')}>
                <span className={cn('text-zinc-600')}>Theme</span>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md', 'py-2', 'px-4')}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <div className={cn('flex', 'justify-between', 'py-2', 'px-4', 'rounded-md', 'cursor-pointer')}>
                <span className={cn('text-zinc-600')}>Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={cn('bg-zinc-100', 'border', 'border-zinc-200', 'rounded-md', 'py-2', 'px-4')}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}