/**
 * Layout typing to use with slots and parallel routes
 */
export type LayoutProps<T extends Record<string, React.ReactNode>> = Readonly<
  {
    children: React.ReactNode;
  } & T
>;
