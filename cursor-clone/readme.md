# Cursor UI Clone (Web Dev Cohort 2026)

This project is a **desktop‑only HTML/CSS clone** of the Cursor landing page UI created for the Web Dev Cohort 2026 assignment. The goal was to replicate the overall layout, spacing, typography, and visual hierarchy using **only HTML and CSS** (no JavaScript, no Tailwind, no animations).


## What’s Inside

- `index.html` — semantic structure of the page and all required sections.
- `styles.css` — complete styling, layout, colors, and typography.
- `assets/` — local images, icons, and screenshots used in the mockup.

## Sections Implemented (Assignment Mapping)

1. **Top Navigation Bar**  
   - Implemented as a fixed `<nav>` with a left logo area, center nav links, and right actions.  
   - Styled with a dark background, subtle blur, and aligned spacing.  
   - See: `index.html` and `.navbar`, `.nav-container`, `.nav-left`, `.nav-links`, `.nav-right` in `styles.css`.

2. **Hero Section**  
   - Primary headline + CTA and a full‑width product screenshot.  
   - Implemented using a two‑part `.hero` layout with `.hero-content` and `.hero-image`.  
   - CTA uses `.btn-download-hero` for pill‑button styling.

3. **Trusted By / Logos**  
   - Horizontal row of brand logos in `.trust` with `.logos` and `.logo-item`.  
   - Logos are placed in flex cards to match the original look and spacing.

4. **Feature Sections (3 blocks)**  
   - Implemented as three stacked feature images in `.feature-section`.  
   - Each image is full‑width with rounded corners to mimic the Cursor layout.

5. **Feature Cards Section**  
   - Implemented as the “Stay on the frontier” grid.  
   - `.frontier-grid` contains three cards with text + image split inside each card.

6. **Testimonials**  
   - `.testimonials` section includes a grid of quote cards with avatar, name, and role.  
   - Follows the original multi‑card layout with consistent spacing and borders.

7. **Use Cases / Stories**  
   - Implemented as “Recent highlights” in `.highlights`.  
   - Cards use strong typography and metadata rows for article‑style content.

8. **Changelog / Updates**  
   - Implemented in `.changelog` with date pills, version tags, and short headings.  
   - Uses a 4‑column grid to match the original update layout.

9. **Team / About**  
   - The “Join the Team” section reuses the `.hero` pattern (headline + CTA + image).  
   - Keeps visual consistency with the main hero for brand feel.

10. **Final CTA**  
   - Implemented in `.cta-section` with a single headline and CTA button.

11. **Footer**  
   - Multi‑column footer grid with link groups and a bottom meta row.  
   - Matches original hierarchy and spacing using `.footer-columns` and `.footer-bottom`.

## Styling & Design Notes

- **Color palette** uses dark browns and warm grays to match Cursor’s theme.  
  Defined in `:root` as CSS variables for consistency.
- **Typography** uses a local font (`Cursor Regular`) loaded via `@font-face`.  
  Fallback is `sans-serif`.
- **Spacing & layout** rely on flex and CSS grid for clean alignment.  
  No responsive rules were added per assignment constraints.
- **No JavaScript** was used. All behavior is static.

## How to View

- **Live Demo:** 🌐 [View live site](https://cursor-clone-css.vercel.app/)
- Open `index.html` directly in a browser.  
- This is a desktop‑only layout as requested by the assignment.

---

Build by Suprabhat (gulabi dil)
