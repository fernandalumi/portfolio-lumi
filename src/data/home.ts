// Textos e imagens da Home. Para trocar um texto, edite aqui.
// As imagens usam o nome do arquivo em src/assets/cases, sem a extensão.

export const hero = {
  greeting: 'Olá, eu sou a Lumi.',
  titleIntro: 'Projeto',
  titleA: 'produtos',
  titleB: 'digitais',
  titleC: 'do fluxo ao',
  titleAccent: 'pixel final.',
  text: 'UX/UI designer com foco em e-commerce e design system, com base em direção de arte.',
  cta: { label: 'Ver projetos', href: '#projetos' },
  // Pontos sobre a flor. x e y são a posição do ponto; tagX e tagY, a da etiqueta (área de 860 x 620).
  points: [
    { label: 'Pesquisa', x: 190, y: 190, tagX: 0, tagY: 96, image: 'catharine-hill-003', title: 'Pesquisa', text: 'Auditoria e benchmark antes de desenhar qualquer tela.', project: 'Catharine Hill', href: '/projetos/catharine-hill' },
    { label: 'Arquitetura', x: 520, y: 170, tagX: 610, tagY: 96, image: 'linde-white-martins-d-002', title: 'Arquitetura', text: 'Fluxos e estados que organizam a informação.', project: 'White Martins', href: '/projetos/linde-white-martins' },
    { label: 'Interação', x: 170, y: 400, tagX: 0, tagY: 460, image: 'balaroti-d-002', title: 'Interação', text: 'Componentes que resolvem a tarefa sem interromper a compra.', project: 'Balaroti', href: '/projetos/balaroti' },
    { label: 'Prototipação', x: 530, y: 380, tagX: 390, tagY: 440, image: 'catharine-hill-001', title: 'Prototipação', text: 'Da ideia ao protótipo navegável em código.', project: 'Catharine Hill', href: '/projetos/catharine-hill' },
  ],
};

export const etapas = {
  title: 'Quatro etapas, do fluxo',
  titleAccent: 'ao pixel final',
  text: 'Cada etapa leva aos projetos em que ela aparece melhor.',
  items: [
    { art: 'fluxo', title: 'Fluxos e arquitetura', text: 'Jornadas e estados que organizam a informação antes do visual.' },
    { art: 'wireframe', title: 'Wireframe', text: 'Hierarquia resolvida em cinza, antes de qualquer decisão visual.' },
    { art: 'sistema', title: 'Design system', text: 'Tokens, componentes e estados documentados para o time escalar.' },
    { art: 'prototipo', title: 'Protótipo e handoff', text: 'Alta fidelidade e protótipo navegável para o desenvolvimento.' },
  ],
};

export const lista = {
  title: 'Projetos',
  titleAccent: 'selecionados',
  cta: 'Ver todos os projetos',
  short: {
    'catharine-hill': 'Da auditoria ao protótipo navegável em código.',
    lattafa: 'Perfumaria árabe de luxo, da home à página de produto.',
    'linde-white-martins': 'E-commerce B2B, do wireframe ao brandbook aplicado.',
    'ui-design-customizacao': 'Template proprietário com componentes personalizados.',
    balaroti: 'Página de produto que vira montagem de kit.',
    milium: '85 lojas e três escolhas para achar a mais próxima.',
    itatiaia: 'Cupons em um só lugar, com o status de cada um na hora.',
  } as Record<string, string>,
};

export const comoEuPenso = {
  title: 'Do pensamento estratégico à',
  titleAccent: 'tela final',
  center: 'Produtos claros, funcionais e escaláveis.',
  items: [
    { title: 'Pensamento estratégico', text: 'Decisões de interface ligadas ao objetivo do negócio.' },
    { title: 'Foco no usuário', text: 'Jornadas pensadas a partir de quem usa.' },
    { title: 'Hierarquia visual', text: 'O olhar de cinco anos em direção de arte.' },
    { title: 'Consistência visual', text: 'Padrões que o time consegue escalar.' },
  ],
};
