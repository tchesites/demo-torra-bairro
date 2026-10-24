import { defineConfig } from 'astro/config';

// https://astro.build/config
// Publicado no GitHub Pages como site de projeto:
// https://tchesites.github.io/demo-torra-bairro/
// `base` é o nome do repositório; os links internos passam por `src/utils/url.js`.
export default defineConfig({
  site: 'https://tchesites.github.io',
  base: '/demo-torra-bairro',
});
