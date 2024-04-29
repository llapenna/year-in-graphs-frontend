import { sva } from '@/styles/css';

export const input = sva({
  slots: ['input', 'label'],
  base: {
    input: {
      flex: 1,

      borderRadius: '8px',
      padding: '4px',
    },
    label: {
      display: 'flex',
      flexDirection: 'row',
      gap: '8px',
    },
  },
  variants: {
    disabled: {
      true: {
        input: {
          cursor: 'not-allowed',
          backgroundColor: 'rgba(0,0,0, .15)',
          border: '1px solid rgba(0,0,0, .55)',
        },
      },
      false: {
        input: {
          border: '1px solid rgba(0,0,0, .15)',
          cursor: 'text',
          backgroundColor: 'white',
        },
      },
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
