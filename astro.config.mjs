// @ts-check
import { defineConfig } from 'astro/config';

// Endereço oficial do site (links canônicos e compartilhamento).
// Na Vercel, VERCEL_PROJECT_PRODUCTION_URL é o domínio de produção do projeto: o endereço
// .vercel.app enquanto não houver domínio próprio, e fernandalumist.com.br depois que ele
// for adicionado em Settings → Domains. Assim nada precisa ser trocado no código.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

// https://astro.build/config
export default defineConfig({
  site: productionHost ? `https://${productionHost}` : 'https://fernandalumist.com.br',
});
