# 🚀 Ignite Lab Design System 🚀

> Projeto criado durante o evento Ignite-Lab Design System da RocketSeat

## 👨‍💻 Principais Tecnologias 👩‍💻

- Typescript/Javascript
- Vite Js
- React
- Tailwind
- Storybook

### 📚 bibliotecas adicionais 🗃️

- clsx
- @radix-ui/react-slot
- @radix-ui/react-checkbox
- phosphor-react

## ⚙️ Setup 🔥

- Vite Js

  - npm create vite@latest

          project-name
          react
          typescript

  - npm i

- Tailwind

  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
  - editar tailwind.config.cjs:

        content: ['./src/**/*.tsx'],

  - criar global.css e importar no App.tsx:

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

- Inter font family

  - editar index.html no head:

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

  - editar tailwind.config.cjs:

        extend: {
          fontFamily: {
            sans: 'Inter, sans-serif',
          },
        },

- Storybook

  - npx sb init --builder @storybook/builder-vite --use-npm

  - tema dark criar manager.js na pasta .storybook:

        import { addons } from '@storybook/addons';
        import { themes } from '@storybook/theming';

        addons.setConfig({
          theme: themes.dark,
        });

  - e editar preview.cjs

        import { themes } from '@storybook/theming';

        import '../src/styles/global.css';

        export const parameters = {
          ...,
          docs: {
            theme: themes.dark,
          },
        };

## 🔗 Links uteis 🔍

- https://vitejs.dev/guide/
- https://tailwindcss.com/docs/installation/using-postcss
- https://storybook.js.org/blog/storybook-for-vite/
- https://www.radix-ui.com/docs/primitives/utilities/slot
- https://www.radix-ui.com/docs/primitives/components/checkbox
- https://phosphoricons.com/
