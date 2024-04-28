import { cva, sva } from '@/styles/css';

export const activity = cva({
  base: {
    display: 'grid',
    gridTemplateRows: 7,
    gridAutoFlow: 'column',
    justifyContent: 'center',
    gap: '4px',
  },
});

export const day = sva({
  className: 'day',
  slots: ['wrapper', 'link', 'tooltip'],
  base: {
    wrapper: {
      display: 'block',
      height: '10px',
      width: '10px',

      border: '1px solid black',
      borderRadius: '2px',

      '&:hover': {
        '& .day__link': {
          background: 'black',
        },
        '& .day__tooltip': {
          background: 'black',
          display: 'block',
        },
      },
    },
    link: {
      display: 'block',
      height: '100%',
      width: '100%',
    },
    tooltip: {
      display: 'none',
      position: 'absolute',

      padding: '4px',
      borderRadius: '4px',

      background: 'black',
      color: 'white',
    },
  },
  variants: {
    level: {
      undefined: { wrapper: { bg: 'white' } },
      0: { wrapper: { bg: 'red.300' } },
      1: { wrapper: { bg: 'orange.300' } },
      2: { wrapper: { bg: 'yellow.300' } },
      3: { wrapper: { bg: 'green.300' } },
      4: { wrapper: { bg: 'blue.300' } },
      5: { wrapper: { bg: 'indigo.300' } },
      6: { wrapper: { bg: 'purple.300' } },
      7: { wrapper: { bg: 'pink.300' } },
      8: { wrapper: { bg: 'red.500' } },
      9: { wrapper: { bg: 'orange.500' } },
      10: { wrapper: { bg: 'yellow.500' } },
    },
  },
  defaultVariants: {
    level: undefined,
  },
});
