import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const { workspaceid } = await params;
  return <>{children}</>;
};

export default DashboardLayout;
