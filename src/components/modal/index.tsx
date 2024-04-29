import Link from 'next/link';
import { header, modal } from './styles';

interface HeaderProps {
  title: string;
  onClose?: string;
}
const Header = ({ title, onClose }: HeaderProps) => {
  const classes = header();
  return (
    <div className={classes.header}>
      {title && <h2>{title}</h2>}
      {onClose && (
        <Link className={classes.close} href={onClose}>
          x
        </Link>
      )}
    </div>
  );
};

interface Props extends HeaderProps {
  isOpen?: boolean;
  children?: React.ReactNode;
}
export const Modal = ({ title, isOpen = false, onClose, children }: Props) => {
  const classes = modal({ isOpen });
  return (
    <div className={classes.backdrop}>
      <dialog className={classes.dialog} open={true}>
        <Header {...{ title, onClose }}></Header>
        {children}
      </dialog>
    </div>
  );
};
