// Prefixa caminhos internos com a base do site (`import.meta.env.BASE_URL`).
//
// No GitHub Pages de projeto a base é o nome do repositório
// (`https://tchesites.github.io/demo-torra-bairro/`), então todo link interno
// precisa deste prefixo — `href="/categoria/torras/"` sozinho levaria para a
// raiz de `tchesites.github.io` e daria 404. Em host sem subcaminho
// (Vercel/Netlify) a base é "/" e as URLs saem como sempre.
//
// Use `url('/caminho/')` em `href`, `src` e em dados que geram links.
// Âncoras internas (`#categorias`) não precisam: são relativas à página atual —
// mas `/#categorias` (âncora em outra rota) precisa.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
