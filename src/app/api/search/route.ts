import { USERS } from '@/lib/data';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || '';
  const type = url.searchParams.get('type');
  const results = USERS.filter(user => {
    const name = user.name.toLowerCase();
    const email = user.email.toLowerCase();
    return (name.includes(q.toLowerCase()) || email.includes(q.toLowerCase())) && (type ? user.role === type : true);
  }).slice(0, 20);
  return new Response(JSON.stringify({
    ok: true,
    data: {
      results,
      total: results.length,
      query: q,
    },
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}