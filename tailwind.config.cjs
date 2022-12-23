/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        'primary-head': 'rgba(var(--color-primary-head), <alpha-value>)',
        'primary-body': 'rgba(var(--color-primary-body), <alpha-value>)',
        'secondary-head': 'rgba(var(--color-secondary-head), <alpha-value>)',
        'secondary-body': 'rgba(var(--color-secondary-body), <alpha-value>)',
        'accent-head': 'rgba(var(--color-accent-head), <alpha-value>)',
        'accent-body': 'rgba(var(--color-accent-body), <alpha-value>)',
        white: '#EFEFEF',
        black: '#010101'
      },
    },
  },
  plugins: [],
}
