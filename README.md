<div align="center">

<img src="./src/assets/GATO1-1.gif" alt="reactUseState logo" height="96" />

# reactUseState

*Five practical exercises to master React's `useState` hook*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11-666666?style=flat-square)](https://sweetalert2.github.io)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)

[Overview](#overview) • [Exercises](#exercises) • [Getting started](#getting-started) • [Scripts](#scripts) • [Project structure](#project-structure) • [Resources](#resources)

</div>

## Overview

`reactUseState` is a small Vite + React application built for a web development practice exam. It demonstrates the most common uses of the [`useState`](https://react.dev/reference/react/useState) hook through five independent exercises: controlled inputs, arithmetic operations, dynamic styles, object and array state, and form handling.

Every exercise lives in its own component and route, so you can jump straight to the one you want to review from the top navigation bar. Unknown URLs fall back to a custom 404 page.

> [!NOTE]
> The app UI is in Spanish. English explanations are given below, with each original exam statement quoted verbatim in Spanish.

## Features

- **Five focused exercises** covering the main `useState` patterns
- **Client-side routing** with [React Router v6](https://reactrouter.com), plus a catch-all 404 route
- **Form handling with duplicate detection**, using [SweetAlert2](https://sweetalert2.github.io) alerts
- **Fast dev workflow** with [Vite](https://vitejs.dev) and hot module replacement
- **ESLint** configured with React and hooks rules

## Exercises

1. **Greeting** — route `/`
   Renders a live `Bienvenido {name}` greeting as you type a full name.

   > Realiza un componente que capture por medio de inputs: Nombre completo cree el siguiente saludo: “Bienvenido 'Nombre'” (Realizado en clase)

2. **Calculator** — route `/Ejercicio2`
   Two number inputs and four buttons (add, subtract, multiply, divide) that show the result in an `<h2>`.

   > Realiza un programa que realice las 4 operaciones básicas capturando dos números en inputs y mostrando el resultado en un h2(4 botones: sumar, restar, multiplicar, dividir)

3. **Random background** — route `/Ejercicio3`
   A button picks a random color and applies it to the application background.

   > Realice un programa que por medio de un botón genere un color aleatorio y lo coloque en el fondo de la aplicación.

4. **Registration form** — route `/Ejercicio4`
   Name, username, email, phone and password stored in an array state, with alerts when the user already exists.

   > Realice un programa que por medio de un formulario: nombre, usuario, correo, teléfono, contraseña. registre en un array con el objeto de esta persona, en caso de que ya exista devuelva una alerta notificando la novedad.

5. **Task capture** — route `/Ejercicio5`
   Two inputs (task name and description) combined into a single preview field.

   > Realice un programa que capture en un input la tarea que el usuario guarde en 2 input(nombre de la tarea, descripción).

> [!TIP]
> Try the routing by editing the address bar — any path other than the five routes above renders the 404 page.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org) 18 or later
- npm 9 or later (bundled with Node.js)

> [!IMPORTANT]
> Vite 5 requires Node.js 18+. Check your version with `node -v` before installing.

### Installation

```bash
git clone https://github.com/JhoamSebastianMunoz/reactUseState.git
cd reactUseState
npm install
```

### Run the app

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser. The dev server reloads automatically whenever you save a file.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server with HMR. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint over the project. |

> [!NOTE]
> No test runner is configured for this project; `npm run lint` is the available static check.

## Project structure

```
reactUseState/
├── index.html                # Vite entry HTML
├── vite.config.js            # Vite + React plugin configuration
├── eslint.config.js          # Flat ESLint configuration
├── public/
│   └── vite.svg              # Favicon
└── src/
    ├── main.jsx              # Mounts <App/> inside <BrowserRouter>
    ├── App.jsx               # Layout and route definitions
    ├── components/
    │   ├── Ejer1/ … Ejer5/   # The five exercise components
    │   ├── Navbar/           # Top navigation bar
    │   └── NavItem/          # NavLink wrapper used by the navbar
    ├── layouts/
    │   ├── Header/           # Navbar + logo
    │   ├── Main/             # Renders exercise 1 on the home page
    │   └── Footer/
    ├── pages/
    │   ├── Home/             # "/" route
    │   ├── Ejercicio2/ … Ejercicio5/   # One page wrapper per exercise
    │   └── NotFound/         # "*" route
    └── assets/               # Images and GIFs
```

## Resources

- [React — `useState` reference](https://react.dev/reference/react/useState)
- [React — Adding state to a component](https://react.dev/learn/describing-the-ui#adding-state-to-a-component)
- [React Router v6](https://reactrouter.com/en/main)
- [Vite — Getting started](https://vitejs.dev/guide/)
- [SweetAlert2](https://sweetalert2.github.io/)
