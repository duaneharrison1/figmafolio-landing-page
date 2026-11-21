/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        // Token-backed colours: use these in SEO pages and the kit (see src/styles/tokens.css).
        ff: {
          brand: "var(--ff-color-brand)",
          "brand-hover": "var(--ff-color-brand-hover)",
          "brand-soft": "var(--ff-color-brand-soft)",
          "brand-tint": "var(--ff-color-brand-tint)",
          "on-brand": "var(--ff-color-on-brand)",
          ink: "var(--ff-color-ink)",
          muted: "var(--ff-color-muted)",
          bg: "var(--ff-color-bg)",
          surface: "var(--ff-color-surface)",
          border: "var(--ff-color-border)",
          success: "var(--ff-color-success)",
          warning: "var(--ff-color-warning)",
          "warning-soft": "var(--ff-color-warning-soft)",
          info: "var(--ff-color-info)",
        },
      },
      borderRadius: {
        "ff-sm": "var(--ff-radius-sm)",
        "ff-md": "var(--ff-radius-md)",
        "ff-lg": "var(--ff-radius-lg)",
        "ff-xl": "var(--ff-radius-xl)",
        "ff-pill": "var(--ff-radius-pill)",
      },
      boxShadow: {
        "ff-card": "var(--ff-shadow-card)",
      },
      maxWidth: {
        "ff-measure": "var(--ff-measure)",
        "ff-container": "var(--ff-container)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
