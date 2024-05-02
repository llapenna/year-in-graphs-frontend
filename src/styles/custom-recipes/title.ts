import { defineRecipe } from '@pandacss/dev';

export const titleRecipe = defineRecipe({
  className: 'title',
  description: 'Page title styles',
  base: {
    fontWeight: 800,
    color: 'rgba(0, 0, 0, 0.6)',
    textShadow: '4px 4px rgba(0, 0, 0, 0.1)',

    lineHeight: '100%',
  },
  variants: {
    size: {
      xl: { fontSize: '7.5rem', letterSpacing: '24px' },
      l: { fontSize: '6rem', letterSpacing: '12px' },
      m: { fontSize: '4.5rem', letterSpacing: '6px' },
      s: { fontSize: '3rem', letterSpacing: '4px' },
    },
  },
});
