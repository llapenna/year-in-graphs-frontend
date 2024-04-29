import { button } from './styles';

interface Props {
  children?: React.ReactNode;
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
}
export const Button = ({ type = 'button', onClick, children }: Props) => {
  return (
    <button className={button()} {...{ type, onClick }}>
      {children}
    </button>
  );
};
