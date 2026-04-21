# Project Revamp Audit

## Stack

- Vite + React 18
- `react-router-dom` used, but the app currently renders a single page
- `framer-motion` for UI motion
- `scrollreveal` for section entrance effects
- Form submission handled through Formspree

## Runtime Flow

1. `src/main.jsx` mounts `App` inside `BrowserRouter`.
2. `src/App.jsx` owns global UI state:
   - mobile menu open/close
   - theme toggle and persistence
   - active section tracking
   - header shadow on scroll
   - hash-based scrolling
3. `src/routes/route.jsx` returns only `HomePage`.
4. `src/Pages/Home/index.jsx` assembles the full landing page.
5. `Header` and `Footer` wrap the page globally.

## Main Content Source

Most homepage content lives in `src/ui/Home/homeData.jsx`:

- `navLinks`
- `services`
- `skillRows`
- `otherSkills`
- `projects`
- `experiences`
- `typingTexts`

This file is the main content schema of the site today.

## Component Map

### Layout

- `src/ui/Layout/Header.jsx`
- `src/ui/Layout/Footer.jsx`

### Home Sections

- `src/ui/Home/Hero.jsx`
- `src/ui/Home/About.jsx`
- `src/ui/Home/Services.jsx`
- `src/ui/Home/Skills.jsx`
- `src/ui/Home/Experience.jsx`
- `src/ui/Home/OtherSkills.jsx`
- `src/ui/Home/Projects.jsx`
- `src/ui/Home/Contact.jsx`
- `src/ui/Home/ScrollUp.jsx`

### Shared Logic

- `src/hooks/useTheme.js`
- `src/hooks/useHeaderShadow.js`
- `src/hooks/useActiveSection.js`
- `src/hooks/useHashNavigation.js`
- `src/hooks/useMediaQuery.js`

### Shared UI Primitives

- `src/ui/common/Button.jsx`
- `src/ui/common/NavLinkAnimated.jsx`
- `src/ui/common/SocialLinks.jsx`
- `src/ui/common/AnimatedSection.jsx`
- `src/ui/common/FloatingBlob.jsx`
- `src/ui/common/HeroTitleAnimated.jsx`

### Currently Unused or Legacy UI Helpers

- `src/ui/common/AnimatedCursor.jsx`
- `src/ui/common/GooeyMetaball.jsx`
- `src/ui/common/MagneticButton.jsx`
- `src/ui/common/ZoomLens.jsx`

## Current Interaction Model

- Theme is stored in `localStorage` under `selected-theme`.
- Active nav item is driven by `IntersectionObserver`.
- Hash navigation scrolls smoothly to in-page sections.
- Hero subtitle uses a custom typing effect.
- Section reveal animation is split between:
  - `framer-motion`
  - `scrollreveal`
- Projects section opens a custom modal with image or video switching.
- Contact form posts directly to `https://formspree.io/f/mvgpnwje`.

## Styling Architecture

- All active styling is in `src/styles.css`.
- The file is large and mixed:
  - old portfolio CSS foundation
  - newer "modern polish" overrides layered on top
  - repeated selectors and duplicated section definitions
- `public/assets/css/styles.css` and `public/assets/js/*.js` are legacy copies and are not imported by the React app.
- `dist/` is committed to the repository, which adds noise while refactoring.

## Revamp Risks And Weak Points

1. Single large stylesheet:
   `src/styles.css` is the main bottleneck for a full redesign. It mixes base rules, section styles, responsive rules, dark theme overrides, and legacy remnants in one place.

2. Content is only partially centralized:
   `homeData.jsx` centralizes many sections, but `About`, `Hero`, `Footer`, and some social/contact data still contain hardcoded content in components.

3. Navigation mismatch:
   `Services` exists as a section, but it is not present in `navLinks`.
   `Other Skills` exists with id `other`, but it is not linked from the main navigation.

4. Route layer is placeholder only:
   `src/routes/route.jsx` does not provide a real routing structure yet. Any future multi-page expansion will require route redesign.

5. Mixed motion system:
   `framer-motion` and `scrollreveal` are both active. That increases motion complexity and makes future tuning harder.

6. Text quality issues:
   Several strings in `homeData.jsx` show encoding artifacts or inconsistent wording/spelling. This should be normalized during the revamp.

7. Asset path inconsistency:
   The app correctly uses `assetPath()` for many runtime assets, but `index.html` still references `/assets/img/favicon.png` directly instead of using the Vite base-aware flow.

8. Project metadata inconsistency:
   Some project links, icons, and overlay actions do not align cleanly with their real destination or platform.

9. Local worktree is not clean:
   There is an existing uncommitted change in `src/ui/Home/homeData.jsx`. Any future edits should preserve that work.

## Verified Baseline

- `npm run build` passes successfully on the current codebase.
- Current git status shows a local modification in `src/ui/Home/homeData.jsx`.

## Recommended Revamp Order

1. Freeze and normalize the content model.
2. Split the giant stylesheet into section-level or feature-level files.
3. Centralize all personal/profile/contact data in one content module.
4. Replace mixed motion behavior with one consistent animation strategy.
5. Rebuild layout sections one by one:
   hero -> about -> services -> skills -> experience -> projects -> contact -> footer
6. Remove dead assets and legacy public files after the new UI is stable.
7. Decide whether this stays a one-page portfolio or becomes a real multi-route site.
