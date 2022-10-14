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
- @storybook/addon-a11y
- @storybook/storybook-deployer
- @storybook/addon-interactions
- @storybook/jest
- @storybook/testing-library
- @storybook/test-runner
- axios
- msw
- msw-storybook-addon
- react-hook-form

## 🖼️ Imagens do projeto 👀

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/ignite-lab-ds-01.png" alt="Ignite Lab Design System Imagem 01" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/ignite-lab-ds-02.png" alt="Ignite Lab Design System Imagem 02" width="450"/>

<img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/ignite-lab-ds-03.png" alt="Ignite Lab Design System Imagem 03" width="450"/>

## ⚙️ Setup 🔥

### Vite Js

- npm create vite@latest

        project-name
        react
        typescript

- npm i

### Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- editar tailwind.config.cjs:

      content: ['./src/**/*.tsx'],

- criar global.css e importar no App.tsx:

      @tailwind base;
      @tailwind components;
      @tailwind utilities;

### Inter font family

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

### Storybook

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
- https://storybook.js.org/addons/@storybook/addon-a11y
- https://github.com/storybookjs/storybook-deployer
- https://storybook.js.org/addons/@storybook/addon-interactions
- https://github.com/mswjs/msw-storybook-addon
- https://react-hook-form.com/

## Deploy url

- https://rodolfohok.github.io/rocketseat.lab-design-system/
