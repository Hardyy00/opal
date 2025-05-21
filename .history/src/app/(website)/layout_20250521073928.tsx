type layoutProps = {
  children: React.ReactNode;
};

export default function layout({ children }: Readonly<layoutProps>) {
  return <div className="flex flex-col py-10 px-10 xl:px-0">{children}</div>;
}
