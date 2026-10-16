export const categorias = [
  {
    slug: 'torras',
    nome: 'Torras',
    descricao: 'Cafés torrados aqui, com origem e data de torra na embalagem.',
  },
  {
    slug: 'metodos',
    nome: 'Métodos',
    descricao: 'Pra preparar em casa do jeito que tu gosta.',
  },
  {
    slug: 'acessorios',
    nome: 'Acessórios',
    descricao: 'O que faz diferença na xícara — do moedor à balança.',
  },
  {
    slug: 'kits',
    nome: 'Kits',
    descricao: 'Combinações prontas pra começar ou presentear.',
  },
];

export const produtos = [
  {
    slug: 'bourbon-amarelo',
    nome: 'Bourbon Amarelo · Serra Gaúcha',
    categoria: 'torras',
    descricao: 'Doce e equilibrado, o café do dia a dia com um pouco mais de cuidado.',
    notas: 'Caramelo, castanha-do-pará e finalização macia.',
    preco: 42,
    unidade: '250g',
    destaque: true,
  },
  {
    slug: 'catuai-vermelho',
    nome: 'Catuaí Vermelho · Cerrado Mineiro',
    categoria: 'torras',
    descricao: 'Corpo médio e acidez na medida, vai bem com e sem leite.',
    notas: 'Chocolate, laranja e um fundo de castanha.',
    preco: 38,
    unidade: '250g',
  },
  {
    slug: 'geisha-da-mantiqueira',
    nome: 'Geisha · Mantiqueira',
    categoria: 'torras',
    descricao: 'O café mais delicado da casa, pra tomar devagar e sem pressa.',
    notas: 'Jasmim, frutas amarelas e um final prolongado.',
    preco: 68,
    unidade: '250g',
    destaque: true,
  },
  {
    slug: 'blend-da-casa',
    nome: 'Blend da Casa',
    categoria: 'torras',
    descricao: 'Nosso café de todo dia. Também disponível em pacote de 500g.',
    notas: 'Cacau, mel e finalização doce.',
    preco: 32,
    unidade: '250g',
    destaque: true,
  },
  {
    slug: 'descafeinado',
    nome: 'Descafeinado',
    categoria: 'torras',
    descricao: 'Sem cafeína, com o corpo e o sabor de um café de verdade.',
    notas: 'Mel, amêndoa e toque de cacau.',
    preco: 44,
    unidade: '250g',
  },
  {
    slug: 'prensa-francesa-600',
    nome: 'Prensa Francesa 600ml',
    categoria: 'metodos',
    descricao: 'Prática e generosa: faz café pra duas ou três pessoas de uma vez.',
    preco: 89,
    unidade: '600ml',
  },
  {
    slug: 'v60-ceramica',
    nome: 'V60 Cerâmica',
    categoria: 'metodos',
    descricao: 'O coador que revela as notas frutadas e florais do café coado.',
    preco: 79,
    unidade: 'unidade',
    destaque: true,
  },
  {
    slug: 'moka-3-xicaras',
    nome: 'Moka 3 Xícaras',
    categoria: 'metodos',
    descricao: 'Café intenso no fogão, do jeito italiano.',
    preco: 129,
    unidade: '3 xícaras',
  },
  {
    slug: 'aeropress',
    nome: 'AeroPress',
    categoria: 'metodos',
    descricao: 'Versátil e rápida: um café limpo em menos de dois minutos.',
    preco: 249,
    unidade: 'unidade',
  },
  {
    slug: 'moedor-manual',
    nome: 'Moedor Manual',
    categoria: 'acessorios',
    descricao: 'Moagem na hora faz mais diferença do que qualquer equipamento caro.',
    preco: 189,
    unidade: 'unidade',
  },
  {
    slug: 'balanca-de-precisao',
    nome: 'Balança de Precisão',
    categoria: 'acessorios',
    descricao: 'Pesa grama por grama e ajuda a acertar o café em casa.',
    preco: 99,
    unidade: 'unidade',
  },
  {
    slug: 'filtros-v60-100',
    nome: 'Filtros V60 · 100 unidades',
    categoria: 'acessorios',
    descricao: 'Filtros de papel para o coador V60 — cem unidades.',
    preco: 29,
    unidade: '100 un.',
  },
  {
    slug: 'caneca-torra-bairro',
    nome: 'Caneca Torra Bairro',
    categoria: 'acessorios',
    descricao: 'Cerâmica de 300ml, pra acompanhar o café de todo dia.',
    preco: 39,
    unidade: '300ml',
  },
  {
    slug: 'kit-iniciante',
    nome: 'Kit Iniciante',
    categoria: 'kits',
    descricao: 'V60 + filtros + 250g de café. Tudo pra começar no coado.',
    preco: 129,
    unidade: 'kit',
    destaque: true,
  },
  {
    slug: 'kit-presente',
    nome: 'Kit Presente',
    categoria: 'kits',
    descricao: 'Prensa francesa + 250g de café, com embalagem pra presente.',
    preco: 199,
    unidade: 'kit',
  },
];

export const categoriaPorSlug = (slug) => categorias.find((c) => c.slug === slug);
export const produtoPorSlug = (slug) => produtos.find((p) => p.slug === slug);
export const produtosDaCategoria = (slug) => produtos.filter((p) => p.categoria === slug);
export const destaques = produtos.filter((p) => p.destaque);

export const categoriaUrl = (slug) => `/categoria/${slug}/`;
export const produtoUrl = (slug) => `/produto/${slug}/`;
