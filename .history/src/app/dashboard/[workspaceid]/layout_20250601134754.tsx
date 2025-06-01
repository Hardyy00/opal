import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const {} = await params;
  return <>{children}</>;
};

export default DashboardLayout;
