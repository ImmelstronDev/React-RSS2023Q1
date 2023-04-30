import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const html = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { pipe } = render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(3000, () => console.log('http://localhost:3000/'));
}

createServer();
