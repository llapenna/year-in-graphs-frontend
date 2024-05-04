import { defineConfig } from '@pandacss/dev';

import * as recipes from '@/styles/custom-recipes/';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  // Path configuration
  outdir: 'styled-system',
  importMap: '@/styles',

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        title: recipes.titleRecipe,
        activity: recipes.activityRecipe,
      },
      slotRecipes: {
        editForm: recipes.editFormRecipe,
        activityDay: recipes.activityDayRecipe,
      },
    },
  },
});
