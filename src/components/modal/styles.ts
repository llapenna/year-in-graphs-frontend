import { sva } from '@/styles/css';

export const modal = sva({
  slots: ['wrapper', 'content', 'header', 'close'],
  base: {
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',

      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    content: {
      bg: 'white',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',

      borderRadius: '16px',
      padding: '16px',

      minWidth: '300px',
      maxWidth: '60%',
      minHeight: '200px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    close: {
      cursor: 'pointer',
    },
  },
  variants: {
    isOpen: {
      true: { wrapper: { display: 'flex' } },
      false: { wrapper: { display: 'none' } },
    },
  },
});
