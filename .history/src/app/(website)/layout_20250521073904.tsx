type layoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: Readonly<layoutProps>) {
  return <div className="">{children}</div>;
}
