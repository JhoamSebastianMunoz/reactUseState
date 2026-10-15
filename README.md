<div align="center">

<img src="./src/assets/GATO1-1.gif" alt="Logo de reactUseState" height="96" />

# reactUseState

*Cinco ejercicios prácticos para dominar el hook `useState` de React*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-11-666666?style=flat-square)](https://sweetalert2.github.io)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)
[![Demo](https://img.shields.io/badge/Demo-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://react-use-state-ten.vercel.app)

[Descripción](#descripción) • [Ejercicios](#ejercicios) • [Puesta en marcha](#puesta-en-marcha) • [Scripts](#scripts) • [Estructura del proyecto](#estructura-del-proyecto) • [Recursos](#recursos)

**Demo en producción:** [https://react-use-state-ten.vercel.app](https://react-use-state-ten.vercel.app)

</div>

## Descripción

`reactUseState` es una pequeña aplicación construida con Vite + React para una práctica de examen de desarrollo web. Demuestra los usos más comunes del hook [`useState`](https://react.dev/reference/react/useState) mediante cinco ejercicios independientes: inputs controlados, operaciones aritméticas, estilos dinámicos, estado con objetos y arrays, y manejo de formularios.

Cada ejercicio vive en su propio componente y ruta, así que puedes ir directamente al que quieras repasar desde la barra de navegación superior. Las rutas desconocidas muestran una página 404 personalizada.

> [!NOTE]
> Esta práctica fue desarrollada como examen. Cada enunciado se muestra tal como fue planteado originalmente.

## Características

- **Cinco ejercicios enfocados** que cubren los patrones principales de `useState`
- **Enrutamiento del lado del cliente** con [React Router v6](https://reactrouter.com), más una ruta comodín 404
- **Manejo de formularios con detección de duplicados**, usando alertas de [SweetAlert2](https://sweetalert2.github.io)
- **Flujo de desarrollo rápido** con [Vite](https://vitejs.dev) y recarga de módulos en caliente (HMR)
- **ESLint** configurado con reglas de React y hooks

## Ejercicios

1. **Saludo** — ruta `/`
   Muestra en vivo el saludo `Bienvenido {name}` mientras escribes el nombre completo.

   > Realiza un componente que capture por medio de inputs: Nombre completo cree el siguiente saludo: “Bienvenido 'Nombre'” (Realizado en clase)

2. **Calculadora** — ruta `/Ejercicio2`
   Dos campos numéricos y cuatro botones (sumar, restar, multiplicar, dividir) que muestran el resultado en un `<h2>`.

   > Realiza un programa que realice las 4 operaciones básicas capturando dos números en inputs y mostrando el resultado en un h2(4 botones: sumar, restar, multiplicar, dividir)

3. **Fondo aleatorio** — ruta `/Ejercicio3`
   Un botón elige un color al azar y lo aplica al fondo de la aplicación.

   > Realice un programa que por medio de un botón genere un color aleatorio y lo coloque en el fondo de la aplicación.

4. **Formulario de registro** — ruta `/Ejercicio4`
   Nombre, usuario, correo, teléfono y contraseña guardados en un estado de tipo array, con alertas cuando el usuario ya existe.

   > Realice un programa que por medio de un formulario: nombre, usuario, correo, teléfono, contraseña. registre en un array con el objeto de esta persona, en caso de que ya exista devuelva una alerta notificando la novedad.

5. **Captura de tareas** — ruta `/Ejercicio5`
   Dos campos (nombre de la tarea y descripción) combinados en un único campo de vista previa.

   > Realice un programa que capture en un input la tarea que el usuario guarde en 2 input(nombre de la tarea, descripción).

> [!TIP]
> Prueba el enrutamiento editando la barra de direcciones: cualquier ruta distinta a las cinco anteriores muestra la página 404.

## Puesta en marcha

> [!TIP]
> ¿Quieres verla en acción sin instalar nada? Usa la aplicación ya desplegada en [https://react-use-state-ten.vercel.app](https://react-use-state-ten.vercel.app).

### Requisitos previos

- [Node.js](https://nodejs.org) 18 o superior
- npm 9 o superior (incluido con Node.js)

> [!IMPORTANT]
> Vite 5 requiere Node.js 18 o superior. Verifica tu versión con `node -v` antes de instalar.

### Instalación

```bash
git clone https://github.com/JhoamSebastianMunoz/reactUseState.git
cd reactUseState
npm install
```

### Ejecutar la aplicación

```bash
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador. El servidor de desarrollo recarga la aplicación automáticamente cada vez que guardas un archivo.

## Scripts

| Comando | Descripción |
| ------- | ----------- |
| `npm run dev` | Inicia el servidor de desarrollo con HMR. |
| `npm run build` | Crea una compilación optimizada de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

> [!NOTE]
> No hay un ejecutor de pruebas configurado en este proyecto; `npm run lint` es la verificación estática disponible.

## Estructura del proyecto

```
reactUseState/
├── index.html                # HTML de entrada de Vite
├── vite.config.js            # Configuración de Vite + plugin de React
├── eslint.config.js          # Configuración plana de ESLint
├── public/
│   └── vite.svg              # Favicon
└── src/
    ├── main.jsx              # Monta <App/> dentro de <BrowserRouter>
    ├── App.jsx               # Diseño general y definición de rutas
    ├── components/
    │   ├── Ejer1/ … Ejer5/   # Los cinco componentes de ejercicios
    │   ├── Navbar/           # Barra de navegación superior
    │   └── NavItem/          # Envoltorio de NavLink usado por el navbar
    ├── layouts/
    │   ├── Header/           # Navbar + logo
    │   ├── Main/             # Renderiza el ejercicio 1 en la página de inicio
    │   └── Footer/
    ├── pages/
    │   ├── Home/             # Ruta "/"
    │   ├── Ejercicio2/ … Ejercicio5/   # Un wrapper de página por ejercicio
    │   └── NotFound/         # Ruta "*"
    └── assets/               # Imágenes y GIFs
```

## Recursos

- [React — Referencia de `useState`](https://react.dev/reference/react/useState)
- [React — Añadir estado a un componente](https://react.dev/learn/describing-the-ui#adding-state-to-a-component)
- [React Router v6](https://reactrouter.com/en/main)
- [Vite — Primeros pasos](https://vitejs.dev/guide/)
- [SweetAlert2](https://sweetalert2.github.io/)
