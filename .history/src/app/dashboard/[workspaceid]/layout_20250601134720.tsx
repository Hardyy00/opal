import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default DashboardLayout;
