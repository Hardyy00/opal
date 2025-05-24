type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Layout;
