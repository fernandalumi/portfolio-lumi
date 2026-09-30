// Lista de projetos exibida na Home e na página Projetos.
// A ordem aqui é a ordem em que aparecem no site.
import type { ImageMetadata } from 'astro';
import lattafa from '../assets/home/card-lattafa.png';
import whiteMartins from '../assets/home/card-white-martins.png';
import uiDesign from '../assets/home/card-ui-design-customizacao.png';
import balaroti from '../assets/home/card-balaroti.png';
import milium from '../assets/home/card-milium.png';
import itatiaia from '../assets/home/card-itatiaia.png';

export type Category = 'E-commerce' | 'Design systems' | 'Interação e componentes' | 'Identidade visual';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  categories: Category[];
  image: ImageMetadata;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'lattafa',
    title: 'Lattafa',
    description:
      'Site completo para marca de perfumaria árabe de luxo home, departamento, produto e sobre. Liberdade criativa na home dentro de template pré-estabelecido.',
    tags: ['UI Design', 'E-commerce', 'Luxo'],
    categories: ['E-commerce', 'Design systems', 'Identidade visual'],
    image: lattafa,
    imageAlt: 'Tablet com a Home da Lattafa, em tons de dourado, apoiado sobre pedras escuras',
  },
  {
    slug: 'linde-white-martins',
    title: 'White Martins',
    description:
      'Redesign de e-commerce B2B da maior empresa de gases industriais da América do Sul. Do wireframe à alta fidelidade hierarquia, componentes e brandbook aplicado.',
    tags: ['UI Design', 'B2B', 'E-commerce'],
    categories: ['E-commerce', 'Design systems', 'Identidade visual'],
    image: whiteMartins,
    imageAlt: 'Notebook exibindo a Home do e-commerce B2B da White Martins',
  },
  {
    slug: 'ui-design-customizacao',
    title: 'UI Design & Customização de Interface',
    description:
      'Site institucional desenvolvido a partir de um template proprietário, com personalização de componentes e uma identidade visual alinhada ao posicionamento da marca.',
    tags: ['UI Design', 'Página de produto', 'Customização'],
    categories: ['E-commerce', 'Design systems', 'Identidade visual'],
    image: uiDesign,
    imageAlt: 'Notebook sobre uma poltrona exibindo a Home de uma loja de móveis',
  },
  {
    slug: 'balaroti',
    title: 'Balaroti',
    description:
      'Transformar a página de produto em uma experiência completa de montagem de kit, sem interromper a jornada de compra.',
    tags: ['UX/UI Design', 'E-commerce', 'Página de produto'],
    categories: ['E-commerce', 'Interação e componentes'],
    image: balaroti,
    imageAlt: 'Página de produto da Balaroti com o componente Monte seu kit, em desktop e mobile',
  },
  {
    slug: 'milium',
    title: 'Milium',
    description:
      'Uma página que reúne as 85 lojas físicas da rede e ajuda o cliente a encontrar a mais próxima em três escolhas: estado, cidade e os serviços de que ele precisa.',
    tags: ['UX/UI Design', 'E-commerce', 'Busca & Filtros', 'Localizador de Lojas'],
    categories: ['E-commerce', 'Interação e componentes'],
    image: milium,
    imageAlt: 'Página Nossas lojas da Milium, com filtro de estado, cidade e serviços, em desktop e mobile',
  },
  {
    slug: 'itatiaia',
    title: 'Itatiaia',
    description:
      'Uma página que reúne os cupons da loja em um só lugar, com filtros para achar o melhor desconto e cards que mostram na hora se o cupom está ativo, quanto tempo falta e como usar.',
    tags: ['UX/UI Design', 'E-commerce', 'Filtros & Navegação', 'Descoberta'],
    categories: ['E-commerce', 'Interação e componentes'],
    image: itatiaia,
    imageAlt: 'Página de cupons da Itatiaia com filtros e cards de desconto, em desktop e mobile',
  },
];

export const categories: Category[] = ['E-commerce', 'Design systems', 'Interação e componentes', 'Identidade visual'];
