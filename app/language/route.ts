export async function POST(request: Request) {
  let locale: unknown;
  try { locale = (await request.json()).locale; } catch { return new Response(null, { status: 400 }); }
  if (locale !== 'id' && locale !== 'en') return new Response(null, { status: 400 });
  return new Response(null, { status: 204, headers: {
    'Set-Cookie': `primadev-language=${locale}; Path=/; Max-Age=31536000; SameSite=Lax; HttpOnly${new URL(request.url).protocol === 'https:' ? '; Secure' : ''}`,
    'Cache-Control': 'no-store',
  } });
}
