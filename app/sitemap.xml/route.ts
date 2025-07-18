export async function GET() {
  const baseUrl = 'https://joaovitorotavio.com.br';

  const pages = ['', '/about', '/blog'];

  const urls = pages.map((page) => {
    return `
      <url>
        <loc>${baseUrl}${page}</loc>
      </url>
    `;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
