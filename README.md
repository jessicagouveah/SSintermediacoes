# SS Intermediações

Site institucional da SS Intermediações, preparado para apresentação ao cliente e publicação pelo GitHub Pages.

## Ver o site pelo GitHub Pages

Este repositório inclui uma versão estática em `docs/index.html`.

Para publicar pelo GitHub:

1. Acesse **Settings > Pages** no repositório.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch **main** e a pasta **/docs**.
4. Salve e aguarde o GitHub gerar a página.

URL esperada após a publicação:

https://jessicagouveah.github.io/SSintermediacoes/

## Rodar pelo Lovable/localmente

O projeto também tem estrutura `src/` em TanStack Start para continuar editável pelo Lovable.

```sh
npm i
npm run dev
```

Build:

```sh
npm run build
```

## Arquivos principais

- `docs/index.html` - versão estática para GitHub Pages.
- `docs/.nojekyll` - evita processamento do Jekyll no GitHub Pages.
- `src/routes/index.tsx` - página principal do app TanStack Start.
- `src/routes/__root.tsx` - estrutura raiz, metadados e carregamento de estilos.
- `src/styles.css` - tema visual do app.
