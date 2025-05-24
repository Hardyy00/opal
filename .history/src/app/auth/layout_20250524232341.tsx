type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container h-screen flex justify-center">{children}</div>
  );
};

export default Layout;
