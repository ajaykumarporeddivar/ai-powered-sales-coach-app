'use client';
import { useParams } from 'next/navigation';
import {cn} from "@/components/ui";
import {, SALES, COACHING, PERFORMANCE_METRICS } from '@/lib/data';
import { Button, Card, CardHeader, CardTitle, CardContent Badge, Input, Modal, Avatar } from '@/components/ui';
import { AiOutlineLoading, AiOutlineCheckCircle } from 'lucide-react';

const params = useParams();
const slug = (params.feature as string) ?? '';

const features = {
  'sales': {
    title: 'Sales Performance',
    subtitle: 'Optimize your sales strategy with data-driven insights',
    data: SALES,
  },
  'coaching': {
    title: 'Coaching Insights',
    subtitle: 'Personalized coaching to improve sales performance',
    data: COACHING,
  },
  'performance': {
    title: 'Sales Performance Metrics',
    subtitle: 'Track key performance metrics to optimize sales strategy',
    data: PERFORMANCE_METRICS,
  },
};

const feature = features[slug];

if (!feature) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.keys(features).map((key) => (
        <Card key={key} className="bg-white border border-zinc-200 rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle>{features[key].title}</CardTitle>
            <p className="text-zinc-600">{features[key].subtitle}</p>
          </CardHeader>
          <CardContent>
            <Button href={`/dashboard/${key}`} className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg">
              Open →
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const [filter, setFilter] = React.useState('');
const [search, setSearch] = React.useState('');
const [selected, setSelected] = React.useState(null);
const [modalOpen, setModalOpen] = React.useState(false);

const filteredData = feature.data.filter((item) => {
  const nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
  const filterMatch = item.status === filter;
  return nameMatch && (filter === '' || filterMatch);
});

const handleFilterChange = (e) => {
  setFilter(e.target.value);
};

const handleSearchChange = (e) => {
  setSearch(e.target.value);
};

const handleItemClick = (item) => {
  setSelected(item);
  setModalOpen(true);
};

const handleModalClose = () => {
  setModalOpen(false);
  setSelected(null);
};

return (
  <div>
    <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle>{feature.title}</CardTitle>
        <p className="text-zinc-600">{feature.subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">
          <Input
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full md:w-1/2 lg:w-1/3 bg-zinc-100 rounded-md p-2"
          />
          <select
            value={filter}
            onChange={handleFilterChange}
            className="bg-zinc-100 rounded-md p-2"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <table className="w-full border border-zinc-200 rounded-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  <Badge variant={item.status}>{item.status}</Badge>
                </td>
                <td className="px-4 py-2">
                  <Button
                    onClick={() => handleItemClick(item)}
                    className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg"
                  >
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
    {modalOpen && (
      <Modal onClose={handleModalClose}>
        <Modal.Header>
          <Modal.Title>{selected.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-zinc-600">Status: {selected.status}</p>
          <p className="text-zinc-600">Description: {selected.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose} className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  </div>
);