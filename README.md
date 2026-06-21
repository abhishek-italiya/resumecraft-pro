# ResumeCraft Pro 🚀

ResumeCraft Pro is a premium, developer-focused, and highly customizable Resume Builder web application. It features a modern, responsive interface designed to make creating ATS-friendly, professional resumes fast, intuitive, and beautiful.

Built specifically to meet the high standards of **Digital Heroes**, the application integrates sleek visual transitions, dynamic dark/light mode toggles, instant client-side PDF downloads with pixel-perfect accuracy, and secure local storage data persistence.

---

## 🔗 Project Showcase

- **Live Demo:** [resumecraft-pro.vercel.app](https://resumecraft-pro.vercel.app)
- **Built For:** [Digital Heroes](https://digitalheroesco.com)
- **Developer:** Abhishek Italiya ([abhiitaliya5@gmail.com](mailto:abhiitaliya5@gmail.com))

---

## ✨ Features

- **8 Premium ATS-Friendly Templates:** Toggle seamlessly between corporate, tech, creative, elegant, and minimal styling configurations.
  - *Corporate, Creative, Minimal, Executive, Tech Sidebar, Modern Compact, Elegant Accent, Bold Header*
- **Real-Time Live Preview:** See styling, sizing, and content updates in real-time as you fill in forms.
- **Advanced PDF Generation:** High-resolution PDF exports powered by `html2canvas-pro` and `jsPDF`. Preserves custom fonts, scales properly, and supports multi-page resumes.
- **Dynamic Scale Adjustments:** Fine-tune layout sizing, margins, and scaling inside the preview pane to fit content onto single or double pages.
- **Complete Offline Support:** Re-enter the editor at any time and resume your progress. Data is auto-saved locally using `localStorage`.
- **Import & Export:** Export your resume data as a `.json` file to back up, share, or edit later. Import backup files instantly to restore your layout.
- **One-Click Clipboard Sync:** Copy raw resume data directly to your clipboard in a single click.
- **Dark Mode Support:** Smooth, eye-friendly transitions between dark and light interfaces.
- **Fully Responsive Design:** Tailored editing experience on desktops, tablets, and mobile devices (includes tabs to toggle between Form Editor and Live Preview on mobile viewports).

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, JavaScript (ES6+), HTML5, CSS3
- **Styling & Theme:** Tailwind CSS v4.0 (Utilizing `@tailwindcss/vite` plugin for lightning-fast build optimization), Vanilla CSS for custom animations.
- **Animations:** Framer Motion (Micro-interactions, routing transitions, page-tab slide animations).
- **Navigation:** React Router DOM (v7).
- **Icons:** React Icons (`react-icons/fi`).
- **Export Engines:** `jspdf` & `html2canvas-pro` for rendering SVG/canvas representations to PDF vector documents.

---

## 📂 Project Structure

```text
resumecraft-pro/
├── public/                # Public assets, SEO tools, icons, sitemap
│   ├── favicon.svg        # App Favicon
│   ├── icons.svg          # Global SVG sprites
│   ├── robots.txt         # Crawler routing rules
│   ├── sitemap.xml        # Search engine directory map
│   └── og-image.png       # Open Graph social sharing banner
├── src/
│   ├── assets/            # Local asset modules (templates vectors, logos)
│   ├── components/
│   │   ├── common/        # Shared core components (Button, Input, Checkbox)
│   │   ├── layout/        # Navbar, Footer, and Page Shell layout
│   │   ├── forms/         # Section-by-section Resume Forms
│   │   ├── preview/       # Interactive resume visualizer
│   │   └── templates/     # 8 modular Tailwind CSS templates
│   ├── hooks/             # Custom state hooks (useResume, useTheme, usePreviewScale)
│   ├── pages/             # Pages (Home, Features, Templates, About, Contact, Privacy, Terms)
│   ├── routes/            # React Router routing configuration
│   ├── utils/             # Business logic utilities (export/import, storage, validation)
│   ├── App.jsx            # Core Application route wrapper
│   ├── index.css          # Global Tailwind directives & layout utilities
│   └── main.jsx           # Vite application bootstrapper
├── vercel.json            # Vercel configuration for SPA URL rewrites
├── vite.config.js         # Vite dev tool bundler options
├── package.json           # Dependecy registries & build runner scripts
└── eslint.config.js       # ECMAScript lint rules
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js (v18.0.0 or higher)** and **npm** installed.

### 💻 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhishek-italiya/resumecraft-pro.git
   cd resumecraft-pro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`.

4. **Build the production package:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `/dist` directory.

---

## 📸 Screenshots

### Dark Mode Dashboard
*Beautiful, dark-themed dashboard showing templates, sidebar inputs, and resume builder visualizer.*
![Dark Mode Dashboard](/public/og-image.png)

---

## 🚀 Vercel Production Deployment

ResumeCraft Pro is configured for instant, one-click deployments to Vercel:

1. Push your repository to **GitHub**.
2. Log in to your **Vercel** dashboard and click **Add New Project**.
3. Import the `resumecraft-pro` repository.
4. Keep the default build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Vercel will build the Tailwind v4 styles and route index files correctly.

*Note: The routing configurations are managed via [vercel.json](file:///c:/Users/Abhi/Desktop/resumecraft-pro/vercel.json) to handle React Router client-side routes fallback automatically.*

---

## 👤 Author Information

- **Name:** Abhishek Italiya
- **Email:** [abhiitaliya5@gmail.com](mailto:abhiitaliya5@gmail.com)
- **LinkedIn:** [Abhishek Italiya](https://www.linkedin.com/in/abhishek-italiya-765a20298/)
- **GitHub:** [@abhishek-italiya](https://github.com/abhishek-italiya)

---

## 🛡️ License

This project is built under the MIT License. Feel free to use and distribute it.
Designed and coded with ❤️ for **Digital Heroes**.
