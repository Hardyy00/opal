import { onAuthenticateUser } from "@/actions/user";

const Dashboard = () => {
  const auth = await onAuthenticateUser();

  if (auth?.status == 20) return <div>Dashboard</div>;
};

export default Dashboard;
