# Maxwell Tawiah — Personal Portfolio Website

This is a responsive personal portfolio website developed using React as part of the Web Technologies in Business course at Ural Federal University. The website presents my professional identity as a technology entrepreneur, Founder and CEO of MAXI TECHNOLOGY, educational background, professional experience, technical skills and academic projects.

## Project objectives

Build a React application with reusable components, React Router navigation, professional CSS styling, responsive layouts, and form state and validation. Use Git to track changes and GitHub to share the source for assessment.

## Website pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Professional introduction and areas of interest |
| About Me | `/about` | Education, experience, entrepreneurship and skills |
| Projects | `/projects` | Academic and personal projects |
| Contact | `/contact` | Collaboration information and frontend contact form |

## Features

- Four pages share a navigation bar and footer. Links switch pages through React Router, and a hamburger menu provides navigation on small screens.
- Reusable highlight cards introduce professional interests. Project cards show objectives, status, and implemented or planned technologies.
- CSS Grid and Flexbox adapt the layouts to the screen. Interactive elements have hover and keyboard focus styles, with reduced-motion support for transitions.
- The contact form validates the visitor's name, email and message, focuses the first invalid field, and preserves input for correction.

## Technologies

HTML5, CSS3, JavaScript with JSX, React, React DOM, React Router, Vite, npm and Git. Oxlint checks the JavaScript and JSX.

## Project structure

```text
public/
  favicon.svg                   MT browser tab icon
src/
  assets/                       Reserved for personal images
  components/                   Shared navigation, cards and contact form
    Navbar.jsx, Footer.jsx, HighlightCard.jsx, ProjectCard.jsx, ContactForm.jsx
  pages/                        One component per route
    Home.jsx, About.jsx, Projects.jsx, Contact.jsx
  data/
    profile.js, projects.js     Education, skills, experience and project details
  styles/
    global.css, components.css  Site-wide and reusable component styles
    home.css, about.css, projects.css, contact.css
  App.jsx                       Shared layout and routes
  main.jsx                      React entry point and browser router
index.html                      Page metadata and application entry
package.json, package-lock.json Scripts, dependencies and locked versions
vite.config.js                  Vite React integration
.oxlintrc.json                  Lint configuration
.gitignore                      Files excluded from version control
README.md                       Project and setup guide
```

## Prerequisites and installation

Install Node.js and npm. The project's Vite version supports Node.js 20.19 or later in the 20.x series, or Node.js 22.12 or later. Git is needed to clone the repository.

Until the public repository is available, open a terminal in the project folder containing `package.json` and run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. It reloads the application as you edit. In Windows PowerShell, use `npm.cmd ci` and `npm.cmd run dev` if script execution is restricted. Press Ctrl+C to stop the server.

## Code checks and production build

```sh
npm run lint
npm run build
npm run preview
```

Lint checks the source for common mistakes. The build writes optimized files to `dist/`. Preview serves that build locally at the printed URL so you can test the result.

## Contact form limitation

The contact form demonstrates React state management, input validation and frontend submission feedback. It does not use a backend or email delivery service. Messages are not transmitted or permanently stored.

## Author

**Maxwell Tawiah**

Techpreneur | Founder & CEO, MAXI TECHNOLOGY

Master's Student — IT Innovations in Business, Ural Federal University

## Deployment

Public website deployment is planned for Stage 6.

## Academic purpose

Developed as part of Homework Assignment 1 for the Web Technologies in Business course.
