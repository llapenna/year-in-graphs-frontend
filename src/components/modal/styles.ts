import { sva } from '@/styles/css';

export const modal = sva({
  slots: ['backdrop', 'dialog'],
  base: {
    backdrop: {
      position: 'fixed',
      width: '100%',
      height: '100%',

      top: 0,
      left: 0,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    dialog: {
      bg: 'white',
      boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.5)',

      display: 'flex',
      flexDirection: 'column',

      borderRadius: '16px',

      position: 'relative',
      padding: '16px',
      minWidth: '300px',
      maxWidth: '60%',
      minHeight: '200px',
    },
  },
  variants: {
    isOpen: {
      true: { backdrop: { display: 'flex' } },
      false: { backdrop: { display: 'none' } },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const header = sva({
  slots: ['header', 'close'],
  base: {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    close: {
      cursor: 'pointer',
    },
  },
});
