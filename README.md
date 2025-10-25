# Dipesh Kumar – Portfolio

An expressive React + Tailwind CSS portfolio that highlights Dipesh Kumar Panjiyar’s work across product engineering, data storytelling, and collaborative delivery. The site blends animated visuals with purposeful copy, curated GitHub projects, testimonials, and a prominently placed résumé download.

## ✨ Highlights

- **Hero built for clarity:** Glassmorphism navigation, scroll-progress indicator, and multidimensional hero storytelling with social proof and metrics pulled from GitHub.
- **Résumé everywhere it matters:** A dedicated download CTA lives in the navbar, hero, and footer, serving `public/Dipesh_Resume_FD.pdf` for easy sharing.
- **Curated project gallery:** Featured cards merge hand-authored context with live GitHub metadata when available, keeping project stats fresh while letting copy stay on-brand.
- **Data-rich storytelling:** Skills, experience, testimonials, and contact sections use motion, gradients, and reusable UI primitives to keep the narrative cohesive.
- **Tailwind-first workflow:** Custom utilities (grid patterns, accent rings, animated blobs) and theme extensions (fonts, shadows, animations) allow rapid iteration without leaving the design system.

## 🗂️ Site Structure

- **Navigation & Hero:** Sticky glass navigation with section awareness, animated hero background, role rotation, and high-impact CTAs.
- **Projects:** `src/components/Projects.js` curates five primary repositories, injecting highlights, tags, and live GitHub metrics through `utils/github.js` helpers.
- **About, Skills, Experience, Testimonials:** Storytelling-first sections that combine statistics, principles, toolkits, and social proof.
- **Contact & Footer:** Layered CTA card, social channels, and résumé link to sustain momentum after the scroll experience.

## 📄 Résumé Delivery

- The downloadable PDF lives at `public/Dipesh_Resume_FD.pdf` and is referenced via root-relative paths (`/Dipesh_Resume_FD.pdf`).
- Update the file in `public/` whenever a new résumé is available; no code changes are required once the filename stays consistent.

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/dipeshkumar123/portfolio.git

cd portfolio

# Install dependencies
npm install

# Start the development server
npm start

# Build for production
npm run build
```

The app runs on [http://localhost:3000](http://localhost:3000) by default and uses Create React App tooling (`react-scripts`).

## 🧱 Tech Stack

- **React 19** with functional components and hooks
- **Tailwind CSS 3.4** with extended theme tokens (fonts, shadows, keyframes)
- **lucide-react** iconography
- **GitHub REST API** (unauthenticated) for project and profile metadata
- **gh-pages** script ready for static hosting (optional)

## 🛠 Customisation Notes

- Update featured projects in `FEATURED_PROJECTS` (see `src/components/Projects.js`) to tweak copy, highlights, or ordering. The runtime merge will pull stars, forks, and updated dates automatically when the repositories are public.
- Global styling and utility classes live in `src/index.css`, while Tailwind tokens are defined in `tailwind.config.js`.
- Add or remove sections in `src/App.js` by adjusting the `SECTION_IDS` array and corresponding component imports.

## 📬 Contact

- Email: [panjiyardipesh123@gmail.com](mailto:panjiyardipesh123@gmail.com)
- GitHub: [@dipeshkumar123](https://github.com/dipeshkumar123)
- LinkedIn: [Dipesh Panjiyar](https://www.linkedin.com/in/dipesh-panjiyar)

---

Crafted with curiosity, empathy, and a love for meaningful digital experiences.
