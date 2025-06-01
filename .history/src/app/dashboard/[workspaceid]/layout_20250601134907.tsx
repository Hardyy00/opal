import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const auth = await onAuthenticateUser();

  if (!auth.user?.WorkSpace) redirect("/auth/sign-in");
  const { workspaceid } = await params;
  return <>{children}</>;
};

export default DashboardLayout;
