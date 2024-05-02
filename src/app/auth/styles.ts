import { sva } from '@/styles/css';

export const auth = sva({
  slots: ['wrapper', 'link'],
  base: {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',

      marginTop: '4rem',
    },
    link: {
      fontStyle: 'italic',
      fontSize: 'l',

      '& a': {
        fontWeight: 'bold',
        textDecoration: 'underline',
      },
    },
  },
});
