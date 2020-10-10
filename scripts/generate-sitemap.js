const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
        'pages/**/*{.js,.mdx,.tsx}',
        '!pages/_*.js',
        '!pages/api'
    ]);
    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
            .map((page) => {
                console.log(page);
                const path = page
                    .replace('pages', '')
                    .replace('.ts', '')
                    .replace('.tsx', '')
                    .replace('.mdx', '')
                    .replace('/index.tsx', '');
                console.error(`FewBox: ${path}`);
                const route = path === '/' ? '' : path;

                return `
                        <url>
                            <loc>${`https://fewbox.com${route}`}</loc>
                        </url>
                    `;
            })
            .join('')}
        </urlset>
    `;

    // If you're not using Prettier, you can remove this.
    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
    });
    try {
        fs.unlinkSync('public/sitemap.xml');
      } catch (err) {
        console.error(err);
      }
    fs.writeFileSync('public/sitemap.xml', formatted);
})();