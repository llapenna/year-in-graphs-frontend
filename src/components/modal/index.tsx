import Link from 'next/link';
import { modal } from './styles';

interface Props {
  isOpen?: boolean;
  title: string;
  children?: React.ReactNode;
  onClose?: string;
}
export const Modal = ({ title, isOpen = false, onClose, children }: Props) => {
  const classes = modal({ isOpen });
  return (
    <dialog className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          {title && <h2>{title}</h2>}
          {onClose && (
            <Link className={classes.close} href={onClose}>
              x
            </Link>
          )}
        </div>
        {children}
      </div>
    </dialog>
  );
};
