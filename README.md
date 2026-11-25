# Personal Portfolio

A four-page portfolio for the Web Technologies in Business course. The Home page introduces Maxwell Tawiah and his professional interests. About Me, Projects and Contact provide placeholders for later stages.

## Technologies

React, JavaScript (JSX), React Router, Vite and CSS. Oxlint checks the source code.

## Run locally

From the project directory, install the dependencies and start Vite:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173). Press Ctrl+C in the terminal to stop the server. In Windows PowerShell, you can use `npm.cmd` in place of `npm`.

## Project layout

`src/main.jsx` starts React and connects it to browser history. In `src/App.jsx`, each URL selects a component from `src/pages/`. The navigation and footer in `src/components/` appear on every page. Shared styles live in `src/styles/global.css`.

## Checks

Run `npm run lint` to check the code and `npm run build` to create the production files in `dist/`.
