# Portfolio Interactive UI

This is a fully interactive and customizable **portfolio website** built with **HTML, CSS, and JavaScript**. The project includes modern UI features like light/dark mode, theme color selection, font switching, scroll spy navigation, a responsive carousel, portfolio filtering, and a scroll-to-top button.

---

## Features

### 1. Light & Dark Mode
- Toggle between light and dark modes using a button.
- User preference is saved in `localStorage` so the theme persists across sessions.
- Accessible with `aria-pressed` for better accessibility.

### 2. Scroll Spy Navigation
- Navigation highlights the current section as you scroll.
- Implemented using the **Intersection Observer API** for smooth performance.
- Active link class updates automatically when a section is in view.

### 3. Portfolio Filter
- Filter portfolio items by categories (`all`, `web`, `mobile`, etc.).
- Active filter button is highlighted with gradient colors.
- Accessible with `aria-pressed`.

### 4. Sidebar Toggle
- A settings sidebar can be opened/closed by clicking the toggle button.
- Smooth transition animations with `translate-x-full`.

### 5. Font Selection
- Users can choose different fonts for the website.
- Active font is highlighted, and selection is applied immediately.
- Accessible with `aria-checked`.

### 6. Theme Color Customization
- Change primary and secondary theme colors dynamically.
- Selected colors are highlighted and saved in `localStorage`.
- Reset button available to restore default colors.

### 7. Testimonials Carousel
- Responsive carousel for client testimonials.
- Supports previous/next buttons and indicators.
- Adjusts number of visible cards based on screen width.
- Smooth transitions with dynamic card width calculation.

### 8. Scroll-to-Top Button
- Appears when the user scrolls beyond half of the first section.
- Smoothly scrolls to the top or a designated section.
- Initially hidden for cleaner UI.

---

## Technologies Used

- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **TailwindCSS** for styling
- **LocalStorage** for theme and color persistence
- **Intersection Observer API** for scroll spy
- **Responsive design** for mobile, tablet, and desktop

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-ui.git

