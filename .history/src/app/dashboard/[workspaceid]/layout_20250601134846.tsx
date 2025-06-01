import { onAuthenticateUser } from "@/actions/user";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const auth = await onAuthenticateUser();
  const { workspaceid } = await params;
  return <>{children}</>;
};

export default DashboardLayout;
