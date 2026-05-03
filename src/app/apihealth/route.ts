export async function GET():<Response> {
  new Response(JSON.stringify({
    ok: true,
    version: '1.0.0',
    mode 'demo',
    ts: Date.now(),
    features: ['dashboard 'analytics', ''],
  }), {
    headers: {
      'Content-Type': 'application',
    },
  });
}