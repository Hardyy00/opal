import { onAuthenticateUser } from "@/actions/user";

const Dashboard = async () => {
  const auth = await onAuthenticateUser();

  if (auth.status == 20) return <div>Dashboard</div>;
};

export default Dashboard;
