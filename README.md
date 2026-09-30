# Portfólio Lumi

Site de portfólio de Fernanda Lumi Sato, feito com [Astro](https://astro.build) e publicado na Vercel.

## Onde editar os textos

| O que mudar | Arquivo |
|---|---|
| Links de e-mail, LinkedIn, Behance, currículo, menu e rodapé | `src/data/site.ts` |
| Cards de projeto (Home e página Projetos) | `src/data/projects.ts` |
| Página Sobre mim | `src/data/sobre.ts` |
| Página Contato | `src/pages/contato.astro` |
| Textos dos cases | `src/content/cases/<case>-d.json` (desktop) e `<case>-m.json` (mobile): procure a frase e troque só o texto entre aspas, nos dois arquivos |

Troque só o texto entre aspas. Salve, e a Vercel publica a nova versão em cerca de 1 minuto.

## Onde ficam as imagens

- `src/assets/home/`: imagens dos cards de projeto
- `src/assets/sobre/`: foto da página Sobre mim
- `src/assets/brand/`: flores e imagens do ticker
- `public/`: arquivos servidos como estão (coloque aqui o PDF do currículo com o nome `curriculo-fernanda-lumi-sato.pdf`)

## Cores, fontes e espaçamentos

Ficam em `src/styles/tokens.css`, com os mesmos nomes das variáveis do Figma.

## Rodar no computador

```bash
npm install
npm run dev
```

Depois abra http://localhost:4321 no navegador.
