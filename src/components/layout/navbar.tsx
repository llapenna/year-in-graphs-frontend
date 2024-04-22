import { css } from '@/styles/css';
import { cva } from '@/styles/css';

const nav = cva({
  base: {
    display: 'flex',

    p: '16px',

    fontSize: '1.5rem',
    bg: 'gray.100',
  },
});

export const Navbar = () => {
  return (
    <nav className={nav()}>
      <a href="/">Year in Graphs 📊</a>
    </nav>
  );
};
