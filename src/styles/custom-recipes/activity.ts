import { defineRecipe, defineSlotRecipe } from '@pandacss/dev';

const DAY_SIZE = 10;
const TOOLTIP_WIDTH = 150;

export const activityRecipe = defineRecipe({
  className: 'activity-grid',
  description: 'Activity grid',
  base: {
    display: 'grid',
    gridTemplateRows: 7,
    gridAutoFlow: 'column',
    justifyContent: 'center',
    gap: '4px',
  },
});

export const activityDayRecipe = defineSlotRecipe({
  className: 'activity-day',
  description: 'Day of the week',
  slots: ['box', 'link', 'tooltip'],
  base: {
    box: {
      position: 'relative',
      display: 'block',
      height: `${DAY_SIZE}px`,
      width: `${DAY_SIZE}px`,

      border: '1px solid black',
      borderRadius: '2px',

      '&:hover': {
        '& .activity-day__link': {
          background: 'black',
        },
        '& .activity-day__tooltip': {
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
      zIndex: 1,
      width: `${TOOLTIP_WIDTH}px`,
      left: `-${TOOLTIP_WIDTH / 2 - DAY_SIZE / 2}px`,
      bottom: '16px',

      borderRadius: '4px',
      padding: '4px',
      background: 'black',

      color: 'white',
      textWrap: 'nowrap',
      textAlign: 'center',
    },
  },
  variants: {
    level: {
      undefined: { box: { bg: 'white' } },
      0: { box: { bg: 'red.300' } },
      1: { box: { bg: 'orange.300' } },
      2: { box: { bg: 'yellow.300' } },
      3: { box: { bg: 'green.300' } },
      4: { box: { bg: 'blue.300' } },
      5: { box: { bg: 'indigo.300' } },
      6: { box: { bg: 'purple.300' } },
      7: { box: { bg: 'pink.300' } },
      8: { box: { bg: 'red.500' } },
      9: { box: { bg: 'orange.500' } },
      10: { box: { bg: 'yellow.500' } },
    },
  },
  defaultVariants: {
    level: undefined,
  },
});
