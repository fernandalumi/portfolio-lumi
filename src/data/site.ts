// Informações gerais do site. Para trocar um link ou um texto do menu/rodapé, edite aqui.

export const site = {
  name: 'Lumi',
  fullName: 'Fernanda Lumi Sato',
  role: 'UX/UI Designer',
  location: 'São Paulo, Brasil',
  description:
    'Portfólio de Fernanda Lumi Sato, UX/UI designer. Interfaces para e-commerce, fluxos de usuário e design systems, do fluxo ao pixel final.',
  email: 'fernanda.lumist@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fernandalumist',
  behance: 'https://www.behance.net/fernandalumist',
  // Coloque o PDF do currículo em public/curriculo-fernanda-lumi-sato.pdf
  cv: '/curriculo-fernanda-lumi-sato.pdf',
  // Endereço do serviço que recebe o formulário de contato (ex.: Formspree).
  // Enquanto estiver vazio, o botão "Enviar" abre o app de e-mail da pessoa com a mensagem pronta.
  formEndpoint: '',
};

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Sobre mim', href: '/sobre' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Contato', href: '/contato' },
];

export const footer = {
  title: 'Vamos conversar',
  text: 'Aberta a novos projetos, trabalhos freelance e oportunidades.',
  navigation: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Contato', href: '/contato' },
  ],
  contact: [
    { label: 'E-mail', href: `mailto:${site.email}` },
    { label: 'LinkedIn', href: site.linkedin },
    { label: 'Behance', href: site.behance },
  ],
  copyright: '© 2026 Lumi — Todos os direitos reservados',
};
