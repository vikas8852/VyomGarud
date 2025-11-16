# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# VyomGarud - UAV Systems Landing Page

![VyomGarud Banner](./screenshots/banner.png)

> A modern, dark-themed landing page for VyomGarud - specializing in cutting-edge UAV/drone defense systems with AI-powered autonomous technology.

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📸 Screenshots

### Desktop View
![Desktop Hero](./public/desktop-hero.png)
*Hero Section - Full screen landing with dual CTAs*

![Desktop Capabilities](./public/desktop-capabilities.png)
*Capabilities Section - Showcasing key technologies*



---

## 🎯 Overview

A professional single-page application featuring:
- **Military-grade dark theme** with orange (#FF7B00) accents
- **Fully responsive** design for all devices
- **Smooth animations** and hover effects
- **Contact form** for lead generation
- **Modern UI/UX** with Tailwind CSS

**Target Audience:** Defense contractors, government agencies, UAV technology enthusiasts

---

## ✨ Features

### 🚀 Hero Section
- Full-screen background with gradient overlay
- Dual CTA buttons (Primary + Secondary)
- Smooth scroll indicator
- Responsive typography

### 📊 About Section
- Company mission statement
- 4 live statistics cards:
  - 500+ Flight Hours
  - 99.8% Mission Success
  - 24/7 Operational
  - 15+ Defense Partners

### 🛸 Capabilities Section
4 technology showcases:
- 🛸 **Autonomous Navigation** - AI-powered flight systems
- 📡 **Surveillance Systems** - 24/7 reconnaissance
- 📦 **Payload Delivery** - GPS-guided precision
- 🤖 **AI Control Systems** - Machine learning algorithms

### 🎖️ Highlights Section
3 key differentiators:
- Military-Grade Reliability
- AI-Driven Control
- Precision Engineering

### 📧 Contact Section
- Form with validation (Name, Email, Message)
- Submit handler with success feedback
- Focus states and transitions

### 🔗 Footer
- Company branding and tagline
- Quick navigation links
- Social media icons
- Copyright information

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18+** | UI component library |
| **Tailwind CSS 3+** | Utility-first styling |
| **JavaScript ES6+** | Modern JS features |
| **React Hooks** | State management |

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Ayush-Verma-1613/VyomGarud-Assignment
cd vyomgarud-landing

# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

**Requirements:**
- Node.js 16+
- npm 8+

---

## 📁 Project Structure

```
vyomgarud-landing/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Landing section
│   │   ├── About.jsx          # Company info + stats
│   │   ├── Capabilities.jsx   # Tech showcase
│   │   ├── Highlights.jsx     # Key features
│   │   ├── Contact.jsx        # Contact form
│   │   └── Footer.jsx         # Footer links
│   ├── App.jsx                # Main component
│   ├── index.js               # Entry point
│   └── index.css              # Global styles           
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary */
Orange:     #ff7b00  (rgb(255, 123, 0))

/* Neutrals */
Black:      #0a0a0a  (Background)
Dark Gray:  #171717  (Sections)
Gray:       #262626  (Cards)
Light Gray: #a3a3a3  (Text)
White:      #ffffff  (Headings)
```

### Typography
- **Font Family:** System UI, Sans-serif
- **Headings:** 48px - 144px (Bold)
- **Body:** 16px - 24px (Regular)
- **Small:** 14px (Semibold, Uppercase)

### Spacing
- Sections: `py-24` (96px vertical padding)
- Cards: `p-8` to `p-12` (32px - 48px)
- Gaps: `gap-4` to `gap-8` (16px - 32px)

---

## 🎯 Component Overview

### Hero Component
```jsx
<Hero />
```
- **Props:** None
- **State:** None
- **Features:** Background image, dual CTAs, scroll button

### About Component
```jsx
<About />
```
- **Props:** None
- **State:** None
- **Data:** Stats array with 4 items
- **Features:** Mission text, statistics grid

### Capabilities Component
```jsx
<Capabilities />
```
- **Props:** None
- **State:** None
- **Data:** Capabilities array with 4 items
- **Features:** Icon cards with hover effects

### Highlights Component
```jsx
<Highlights />
```
- **Props:** None
- **State:** None
- **Data:** Highlights array with 3 items
- **Features:** Circular badges, animations

### Contact Component
```jsx
<Contact />
```
- **Props:** None
- **State:** `formData` (name, email, message)
- **Features:** Controlled inputs, validation, submit handler

### Footer Component
```jsx
<Footer />
```
- **Props:** None
- **State:** None
- **Features:** 3-column layout, social icons, links

---

## 🎨 Customization

### Change Brand Colors
```jsx
// Find and replace throughout components:
"orange-500" → "blue-500"
"orange-600" → "blue-600"
```

### Update Content
```jsx
// Hero Section
<h1>Your<span>Company</span></h1>

// Stats
const stats = [
  { value: "Your Value", label: "Your Label" }
];

// Capabilities
const capabilities = [
  { title: "Feature", description: "Description", icon: "🎯" }
];
```

### Add New Section
```jsx
// Create component
const NewSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    {/* Content */}
  </section>
);

// Add to App.jsx
<App>
  <Hero />
  <NewSection /> 
  <About />
</App>
```

---


### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop 'build' folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages



npm run deploy
```

---

## 📱 Responsive Breakpoints

| Device | Width | Columns |
|--------|-------|---------|
| Mobile | < 640px | 1 col |
| Tablet | 768px | 2 cols |
| Desktop | 1024px+ | 3-4 cols |

---

## 🐛 Troubleshooting

**White screen?**
- Check browser console for errors
- Verify React and Tailwind are installed
- Run `npm install` again

**Tailwind not working?**
- Ensure `tailwind.config.js` exists
- Check Tailwind imports in `index.css`
- Rebuild: `npm run build`

**Form not submitting?**
- Check `handleSubmit` function
- Verify form has `onSubmit={handleSubmit}`
- Add console.log for debugging

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 📞 Contact

**Project Lead:** Ayush Kumar Verma   
**Email:** ayushverma1613@gmail.com  
**GitHub:** [Ayush-Verma-1613](https://github.com/Ayush-Verma-1613)

---

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) - Hero background image
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [React](https://reactjs.org) - JavaScript library

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/vyomgarud-landing?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/vyomgarud-landing?style=social)

---

<p align="center">
  Made with ❤️ for VyomGarud | Precision in Every Flight
</p>

---

