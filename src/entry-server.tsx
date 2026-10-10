import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getRoute, ROUTES, NOT_FOUND } from './seo/routes';
import { renderHead } from './seo/head';

export { ROUTES, NOT_FOUND };

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return { html, head: renderHead(getRoute(url)) };
}
