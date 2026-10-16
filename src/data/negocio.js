export const negocio = {
  nome: 'Torra Bairro',
  tagline: 'Café torrado no bairro, fresco toda semana.',
  endereco: 'Rua da Torra, 88 — Cidade Baixa, Porto Alegre/RS',
  horarios: [
    { dias: 'Terça a sexta', horas: '9h às 19h' },
    { dias: 'Sábado', horas: '9h às 14h' },
  ],
  whatsappDisplay: '(51) 97777-6666',
  whatsappDigits: '5551977776666',
  entrega: 'Retirada no balcão ou entrega no mesmo dia em Porto Alegre.',
};

export const whatsappLink = (mensagem) =>
  `https://wa.me/${negocio.whatsappDigits}?text=${encodeURIComponent(mensagem)}`;

export const precoBRL = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
