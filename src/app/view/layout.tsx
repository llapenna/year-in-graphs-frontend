import { LayoutProps } from '@/types/app';

type Props = LayoutProps<{
  modal: React.ReactNode;
}>;
const Layout = ({ children, modal }: Props) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default Layout;
