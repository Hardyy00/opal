type Props = {
  params: {
    workspaceid: string;
  };
};

const UserDashboard = async ({ params }: Props) => {
  const { workspaceid } = await params;
  return <div>Welcome {workspaceid} </div>;
};

export default UserDashboard;

import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser();

  console.log("Auth status : ", auth);

  if (auth.status == 200 || auth.status == 201) {
    return redirect(`/dashboard/${auth.user?.WorkSpace[0].id}`);
  }

  if (auth.status === 400 || auth.status === 404 || auth.status == 403) {
    return redirect("/auth/sign-in");
  }
  return <div>Dashboard</div>;
};

export default AuthCallbackPage;
