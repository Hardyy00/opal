import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const auth = await onAuthenticateUser();

  if (auth.status == 200 || auth.status == 201) {
    return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}`);
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
