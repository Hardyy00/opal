type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="container h-screen flex border border-white">
      {children}
    </div>
  );
};

export default Layout;
