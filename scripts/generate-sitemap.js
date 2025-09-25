import fs from 'fs'

const pages = ['/', '/about', '/builder', '/tips', '/examples', '/privacy', '/terms']

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>https://resumate.munees.co.in${p}</loc>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

fs.writeFileSync('./public/sitemap.xml', sitemap)
console.log('Sitemap generated ✅')
