# Tulas International School - Homepage Redesign

A responsive, animated, single-page homepage redesign for Tulas International School (TIS). The page is intentionally one page; its React implementation is split into reusable layout, animation, data, hook and section modules.

## Live Demo

- **Live URL:** https://tulas-international-school-homepage.vercel.app/
- **Repository:** https://github.com/Shanmugasrivyshnav/Tulas-International-School-homepage-redesign

## Tech Stack

- **Framework:** React 19 with Vite 8
- **Styling:** styled-components (responsive design system and theme tokens)
- **Animation:** Framer Motion (scroll reveals, scroll progress, transitions)
- **Icons:** Lucide React / React icons
- **Linting:** ESLint
- **Deployment:** Vercel

## Features

Standout features:

1. **Scroll-triggered reveals:** content enters once as sections reach the viewport, with short staggered transitions.
2. **Theme switcher:** light/dark selection is saved in local storage and restored on the next visit.
3. **Scroll progress bar:** a spring-smoothed bar at the top of the viewport reflects page progress.
4. **Custom cursor:** a spring-follow circle that expands over interactive controls on fine-pointer devices and respects reduced-motion settings.

Also included: a responsive navigation menu, selectable sports, and interactive school-story tabs.

## Project Structure

```text
src/
├── App.jsx                    Composes the page, theme preference and scroll progress
├── components/
│   ├── layout/                Site header and footer
│   ├── sections/              Welcome, academics/campus, sports/recognition, stories/admissions
│   │   └── SectionTitle.jsx   Shared section heading pattern
│   └── animation/             Reusable scroll-reveal wrapper
├── hooks/                     Theme persistence and scroll-progress hooks
├── data/
│   └── homepage.js            Navigation and page content
└── styles/
    ├── site.js                Theme tokens, global styles, page shell
    ├── layout.js              Navigation, footer, buttons, layout primitives
    ├── home.js                Hero, impact band, about section
    ├── academics.js           Academic programme and campus sections
    ├── sports.js              Sports selector and recognition grid
    ├── stories.js             Testimonials and admissions call to action
    └── animation.js           Shared reveal primitive
public/
└── images/                    School photographs used by the page
```

## Getting Started

Requires Node.js 20.19+ or 22.12+.

```bash
git clone https://github.com/Shanmugasrivyshnav/Tulas-International-School-homepage-redesign.git
cd Tulas-International-School-homepage-redesign
npm install
npm run dev
```

Open the local URL printed by Vite.

## Environment Variables

None required.

## Development

| Script            | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the development server                  |
| `npm run lint`    | Run ESLint                                    |
| `npm run build`   | Create the production build in `dist/`        |
| `npm run preview` | Serve the production build locally            |

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Import the repository into Vercel or Netlify.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** none

After publishing, add the public URL to the Live Demo section above.

## Responsive Testing

Check the page at **375px** (mobile), **768px** (tablet) and **1280px or wider** (desktop). Confirm there is no horizontal scrolling and that the mobile menu, theme switch, sports selector and story tabs all work on touch and pointer devices.

## Accessibility

- Reduced-motion preferences are respected by the animations and the custom cursor.
- The custom cursor only activates on fine-pointer devices, so touch interaction is unaffected.
- Before submission, also check keyboard navigation, visible focus states and colour contrast in both themes.

## Animation Architecture

- A single reusable reveal wrapper (`src/components/animation/`) drives scroll reveals, so animation settings are not repeated across sections.
- Reveals run once per element, with short staggered transitions.
- The scroll progress bar uses a spring-smoothed value driven by scroll position.
- Shared animated styled components live in `src/styles/animation.js`.

## Performance Notes

- Vite production build with code split into small modules.
- Scroll reveals run once, so elements are not re-animated while scrolling back up.
- School photographs are served from `public/images/`.

## Design Decisions

- **One page, many modules:** the landing page stays a single page, while each section, hook and style file has one clear responsibility.
- **Content separated from UI:** navigation and copy live in `src/data/homepage.js`, so text can change without touching components.
- **Theme tokens:** colours and shared values are defined as theme tokens in `src/styles/site.js`, which keeps light and dark themes consistent.
- **Styles split by section:** each section has its own style module, which keeps files short and easier to review.

## Future Improvements

- Admissions enquiry form with validation.
- Automated accessibility and visual regression checks.
- Optimised responsive image formats and sizes.
- Additional content sections drawn from the official TIS website.

## Brand and Content

Brand identity, copy and school assets are based on the official Tulas International School website, https://tis.edu.in/. This project is a design and engineering assessment and is not the official school website.
