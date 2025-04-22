# 📱 Portfolio Web

A modern, responsive frontend built with Next.js and TypeScript to showcase my personal projects, skills, and experiences. This application consumes data from the [portfolio-api](https://github.com/viniciustakedi/portfolio-api) to dynamically render content.

## 🚀 Technologies Used

- **Next.js** – React framework for server-side rendering and static site generation
- **TypeScript** – Typed superset of JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Tanstack/React-query** - Powerful asynchronous state management for TS/JS, React, Solid, Vue, Svelte and Angular
- **Axios** - Promise based HTTP client for the browser and node.js
- **i18n** - i18next is an internationalization-framework written in and for JavaScript. But it's much more than that!
- **Notistack** - Notistack is a React library which makes it super easy to display notifications on your web apps.
- **React-Icons** - Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
- **React-Hook-Form** - Performant, flexible and extensible forms with easy-to-use validation.

## 📁 Project Structure

```
portfolio-web/
├── config/             # Config providers like react-query and i18n
    └── i18n/     
    └──  react-query/   
    └──  notistack/     
├── public/             # Static assets
├── src/                # Main content folder
    └── app/            # Main files to run de application as layout.tsx and page.tsx
    └── assets/         # Folder to organize images and icons
    └── components/     # Main folder to create and save reusable components
    └── requests/       # Folder to store the requests 
├── package.json        # Project metadata and scripts
└── tsconfig.json       # TypeScript configuration
```

## ⚙️ Setup and Execution

### Prerequisites

- [NodeJs](https://nodejs.org/en/download) installed

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/viniciustakedi/portfolio-web.git
cd portfolio-web
```

2. Install dependencies and run the development server:

```bash
npm run install
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🛠️ Available Scripts

- `npm run dev` – Runs the development server
- `npm run build` – Builds the application for production
- `npm run start` – Starts the production server

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
