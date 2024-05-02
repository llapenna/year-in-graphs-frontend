import { defineSlotRecipe } from '@pandacss/dev';

export const editFormRecipe = defineSlotRecipe({
  className: 'edit-form',
  description: 'Form container',
  slots: ['form', 'fields'],
  base: {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    fields: {
      display: 'grid',
      gridTemplateColumns: '.25fr 1fr',
      gridRowGap: '8px',
      alignItems: 'center',
    },
  },
});
