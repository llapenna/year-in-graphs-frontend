import { sva } from '@/styles/css';

export const main = sva({
  slots: ['wrapper', 'titleContainer'],
  base: {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      marginTop: 32,
      gap: '24px',

      '& code': {
        background: 'rgba(0, 0, 0, 0.05)',

        borderRadius: '0.2em',
        padding: '4px',

        fontWeight: 'bold',
        fontSize: '85%',
        fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',

        '& a': {
          textDecoration: 'underline',
        },
      },
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& h1': {
        fontSize: '7.5rem',
        fontWeight: 800,
        color: 'rgba(0, 0, 0, 0.6)',
        textShadow: '4px 4px rgba(0, 0, 0, 0.1)',
        letterSpacing: '24px',
        lineHeight: '100%',
      },
      '& p': {
        fontSize: '1.5rem',
        color: 'rgba(0,0,0,.5)',
      },
    },
  },
});
