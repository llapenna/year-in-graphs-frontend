import { cva } from '@/styles/css';

export const button = cva({
  base: {
    // TODO: improve button styles
    cursor: 'pointer',
    padding: '8px 16px',

    border: '1px solid rgba(0, 0, 0, .25)',
    borderRadius: '16px',
  },
});
