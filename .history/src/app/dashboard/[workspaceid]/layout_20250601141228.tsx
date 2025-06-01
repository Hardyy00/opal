import { onAuthenticateUser } from "@/actions/user";
import { verifyAccessToWorkspace } from "@/actions/workspace";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
  params: { workspaceid: string };
};

const DashboardLayout = async ({ children, params }: Props) => {
  const auth = await onAuthenticateUser();
  const { workspaceid } = await params;

  if (!auth.user?.WorkSpace || !auth.user?.WorkSpace.length)
    redirect("/auth/sign-in");

  const hasAccess = await verifyAccessToWorkspace(workspaceid);

  if (hasAccess.status != 200) {
    redirect(`/dashboard/${auth.user?.WorkSpace[0].id}`);
  }

  if (!hasAccess.data?.workspace) {
    return <div>No Such Workspace available</div>;
  }

  const query = new QueryClient();
  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceid),
  });

  await query.prefetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getWorkspaceFolders(workspaceid),
  });

  await query.prefetchQuery({
    queryKey: ["user-workspaces"],
    queryFn: () => getWorkspaceFolders(workspaceid),
  });

  await query.prefetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getWorkspaceFolders(workspaceid),
  });

  if (hasAccess.status == 200) return <>{children}</>;
};

export default DashboardLayout;
