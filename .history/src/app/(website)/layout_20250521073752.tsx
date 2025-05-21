type layoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: Readonly<layoutProps>) {
  return <>{children}</>;
}
