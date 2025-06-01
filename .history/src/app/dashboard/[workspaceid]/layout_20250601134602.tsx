import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { [key: string]: string };
};

const DashboardLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default DashboardLayout;
