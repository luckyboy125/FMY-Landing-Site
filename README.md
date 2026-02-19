# FMY Landing Site

A modern React single-page application built with a focus on **pixel-perfect** implementation and responsive design. This landing site delivers analytics, reporting, and data visualization across multiple modules.

---

## Features

- **Multi-page SPA** — Home, Tasks, Reports, Investigation, Government, Database, Cases, Networks, NRDS, Web Analysis, and more
- **Data visualization** — Charts and dashboards powered by Chart.js, ECharts, D3, and Vega/Vega-Lite
- **Responsive UI** — Bootstrap 5 and React Bootstrap for consistent, mobile-friendly layouts
- **Client-side routing** — React Router for smooth navigation
- **Pixel-perfect implementation** — Layout and styling are implemented with high fidelity to design specifications

---

## Tech Stack

| Category        | Technologies                          |
|----------------|----------------------------------------|
| Framework      | React 18                               |
| UI             | Bootstrap 5, React Bootstrap           |
| Routing        | React Router DOM v6                    |
| Charts         | Chart.js, ECharts, D3, Vega, Vega-Lite |
| Build          | Create React App (react-scripts 5)     |
| Testing        | Jest, React Testing Library            |

---

## Prerequisites

- **Node.js** 16+ (LTS recommended)
- **npm** 9+ or **yarn**

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

Output is in the `build` folder, ready to deploy to any static host.

### Run tests

```bash
npm test
```

---

## Project Structure (high level)

```
src/
├── components/     # Reusable UI (TopTaskBar, SideTaskBar, buttons, inputs, etc.)
├── pages/          # Route-level pages (Home, Tasks, Reports, Investigation, etc.)
├── helpers/        # Utilities (chart helpers, home helpers)
├── hook/           # Custom React hooks
├── index.js        # App entry point
└── index.css       # Global styles
```

---

## Design & Quality

This project prioritizes **pixel-perfect** implementation. Layout, spacing, typography, and component behavior are aligned with design specs to ensure consistent, high-quality presentation across supported browsers and viewports.

---

## Browser Support

- Production: modern evergreen browsers (>0.2% share, not dead, not Opera Mini)
- Development: latest Chrome, Firefox, and Safari

---

## License

Private project. All rights reserved.
