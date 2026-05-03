'use client';

import { USERS, DEMO_USER, STATS, MOCK_SALES, RECENT_ACTIVITY, CHART_DATA, SPARKLINE_DATA, formatDate, formatCurrency } from '@/lib/data';
import { StatCard, Card, CardHeader, CardTitle, CardContent, Badge, Avatar, Table, Button } from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import { AppHeader } from '@/components/layout';
import { useState } from 'react';
import { cn } from '@/components/ui';

const [selectedRow, setSelectedRow] = useState(null);
const [activeTab, setActiveTab] = useState('overview');

export default function DashboardPage() {
  const kpiCards = STATS.map((stat, index) => (
    <StatCard key={index} title={stat.name} value={stat.value} sparkline={SPARKLINE_DATA[index]} />
  ));

  const recentActivityRows = RECENT_ACTIVITY.map((activity, index) => (
    <div key={index} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
      <Avatar src={activity.user.avatar} size="sm" />
      <div>
        <div className="text-zinc-600">{activity.action}</div>
        <div className="text-zinc-400 text-sm">{formatDate(activity.time)}</div>
      </div>
    </div>
  ));

  const tableColumns = [
    'Name',
    'Amount',
    'Status',
    'Created At',
    'Updated At',
  ];

  const tableRows = MOCK_SALES.map((sale, index) => (
    <Table.Row key={index} onClick={() => setSelectedRow(sale)}>
      <Table.Cell>{sale.user.name}</Table.Cell>
      <Table.Cell>{formatCurrency(sale.amount)}</Table.Cell>
      <Table.Cell>
        <Badge variant={sale.status === 'active' ? 'success' : sale.status === 'pending' ? 'warning' : 'error'}>{sale.status}</Badge>
      </Table.Cell>
      <Table.Cell>{formatDate(sale.createdAt)}</Table.Cell>
      <Table.Cell>{formatDate(sale.updatedAt)}</Table.Cell>
    </Table.Row>
  ));

  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <AppHeader title="Dashboard" subtitle={`Good morning, ${DEMO_USER.name}`} actions={<Button size="sm">+ New Sale</Button>} />
      <div className="grid grid-cols-2 gap-6 p-6">
        {kpiCards}
      </div>
      <div className="grid grid-cols-3 gap-6 p-6">
        <Card colSpan={2} className="shadow-sm">
          <CardHeader>
            <CardTitle> Sales Overview </CardTitle>
            <span className="text-zinc-400 text-sm">Last 12 weeks</span>
          </CardHeader>
          <CardContent>
            <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
          </CardContent>
        </Card>
        <Card colSpan={1} className="shadow-sm">
          <CardHeader>
            <CardTitle> Recent Activity </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivityRows}
          </CardContent>
        </Card>
      </div>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle> All Sales </CardTitle>
          <div className="flex items-center gap-3">
            <input type="search" className="w-40 rounded-md p-2 border border-zinc-200" placeholder="Search" />
            <Button size="sm">Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table columns={tableColumns}>
            {tableRows}
          </Table>
        </CardContent>
      </Card>
      <div className="flex gap-3 p-6">
        <Button size="sm" onClick={() => setToastMsg('New contract created!')}>New Contract</Button>
        <Button size="sm" onClick={() => setToastMsg('Invoice sent!')}>Send Invoice</Button>
        <Button size="sm" onClick={() => setToastMsg('Report generated!')}>Run Report</Button>
      </div>
      {showToast && (
        <div className={cn('fixed bottom-6 right-6 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm', showToast ? 'block' : 'hidden')}>{toastMsg}</div>
      )}
    </div>
  );
}