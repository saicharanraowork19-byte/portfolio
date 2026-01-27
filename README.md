# React Portfolio Application (Vite + TypeScript)

A modern, fast, and responsive personal portfolio application built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.  
This project is designed to showcase professional experience, skills, projects, and contact information with a clean and scalable component-based architecture.

---

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Package Manager:** npm
- **Environment Configuration:** dotenv

---

## 📁 Project Structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── public
│   │   └── Data_Engineer_v9.pdf
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .env
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md





🧩 Application Overview

This portfolio application follows a component-driven design, where each major section of the website is encapsulated into a reusable React component.

Key Sections

Hero – Introduction and headline section

About – Professional summary

Experience – Work history and roles

Skills – Technical skill set

Projects – Highlighted projects and work samples

Contact – Contact information or form

Header / Footer – Navigation and layout structure

⚙️ Prerequisites

Ensure you have the following installed:

Node.js (v18 or later recommended)

npm (comes with Node.js)

Check versions:

node -v
npm -v

📦 Installation

Clone the repository and install dependencies:

git clone <repository-url>
cd portfolio
npm install

🧪 Running the Application
Start Development Server
npm run dev


The app will be available at:

http://localhost:5173

Build for Production
npm run build

Preview Production Build
npm run preview

🎨 Styling

Tailwind CSS is used for styling

Global styles are defined in src/index.css

Configuration is managed via:

tailwind.config.js

postcss.config.js

🧹 Linting & Code Quality

ESLint is configured to enforce consistent code quality and best practices.

Run linting:

npm run lint

🔧 Environment Variables

Environment variables can be added to the .env file:

VITE_APP_NAME=Portfolio


Note: All Vite environment variables must be prefixed with VITE_.

📌 Build Optimization

Vite provides fast HMR (Hot Module Replacement)

Optimized production bundles

Type-safe development with TypeScript

Tree-shaking enabled by default

🧱 Best Practices Followed

Modular and reusable components

Strong typing with TypeScript

Clean separation of concerns

Scalable folder structure

Responsive design using Tailwind utilities

📄 License

This project is intended for personal and professional portfolio use.

🙌 Acknowledgements

React

Vite

Tailwind CSS

TypeScript

📬 Contact

For questions or collaboration, feel free to reach out via the contact section of the portfolio.


hosted on
https://saicharanraowork19-byte.github.io/portfolio/