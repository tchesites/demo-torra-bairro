# Torra Bairro (demo)

- **Cliente:** Torra Bairro — *negócio fictício (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-torra-bairro` — `git@github.com-tchesites:tchesites/demo-torra-bairro.git`
- **Como rodar:** `npm install` e depois `npm run dev` (http://localhost:4321)

## Sobre

Catálogo de produtos de uma torrefação de café fictícia, criado como **projeto
demonstrativo** para o portfólio da Tchê Sites. É o exemplo vivo do serviço
"Catálogo de produtos" na **versão Essencial**: home com categorias → lista de
itens por categoria → página de detalhe de cada item → pedido pelo WhatsApp.
Sem backend — 100% estático, dados em `src\data\`. Identidade visual própria;
negócio, endereço, horário e telefone são fictícios.

## Estrutura

- `src\` — código-fonte (pages, components, layouts, styles, data)
- `src\data\negocio.js` — dados do negócio (endereço, horários, WhatsApp)
- `src\data\catalogo.js` — categorias, produtos e helpers do catálogo
- `public\` — assets estáticos (favicon)
- `dist\` — build (gerado por `npm run build`)

## Rotas

| Rota | O que é |
|---|---|
| `/` | Home: hero, categorias e destaques |
| `/categoria/<slug>/` | Itens de uma categoria (4 categorias) |
| `/produto/<slug>/` | Detalhe do item + pedido pelo WhatsApp (16 itens) |
| `/contato/` | Endereço, horários, entrega e WhatsApp |

As páginas de categoria e de produto são geradas estaticamente com
`getStaticPaths` a partir de `src\data\catalogo.js`.

## Decisões

- Astro puro, HTML estático; sem framework de UI. Rotas dinâmicas resolvidas em
  build (`getStaticPaths`), sem servidor.
- Identidade própria: base quase-preta, creme e âmbar; fontes Space Grotesk + DM Sans.
- **Regra de contraste:** o âmbar `#d98a2b` **não** é usado como texto sobre fundo
  escuro (daria ~3,9:1); para texto em seção escura usa-se `--ambar-texto`
  (`#f0b968`, 10,4:1) e o CTA usa fundo `--ambar-escuro` (`#9c6113`) com texto
  claro (5,1:1).
- Dados separados por responsabilidade: `negocio.js` (endereço, horários, WhatsApp)
  e `catalogo.js` (categorias, produtos e helpers). As imagens dos produtos são
  SVG gerados na paleta da marca (`public\produtos\`), referenciados por
  `produtoImagem(slug)`.

## Deploy

**Pendente.** O host dos demos é o **GitHub Pages**, como no
`demo-padaria-da-praca` e no `demo-studio-vertice`. Falta ligar o Pages no repo
(*Settings → Pages → Source = GitHub Actions*) e publicar; URL prevista
`https://tchesites.github.io/demo-torra-bairro/`.

O nome do repositório segue a convenção de `projetos\README.md`: `demo-` marca
cliente fictício. O rodapé traz o aviso "Projeto demonstrativo — desenvolvido
pela Tchê Sites".
