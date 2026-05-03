'use client';

import { AppSidebar, AppHeader,Banner } from '@//layout';
import { } from '@/lib/dataconst navItems =  { icon: <LucideIcon size={} name="briefcase" />, label: 'Sales', href: '/dashboardales' },
  icon: <LucideIcon size={16 name="chart-pie" />, label: 'Performance', href: '/dashboard/performance' },
  { icon: <LucideIcon size={16} name="user" />, label: 'Team', href: '/dashboard/team' },
  { icon: <LucideIcon size={16} name="settings" />, label: 'Settings', href: '/dashboard/settings' },
];

const projectName = 'AI-Powered Sales Coach';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName={projectName} />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}