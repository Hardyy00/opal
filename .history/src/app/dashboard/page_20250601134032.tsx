import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  // const auth = await onAuthenticateUser();

  // if (auth.status == 200 || auth.status == 201) {
  //   return redirect(`/dashboard/${auth.user?.firstname}${auth.user?.lastname}`);
  // }

  // if (auth.status === 400 || auth.status === 500 || auth.status === 404) {
  //   return redirect("/auth/sign-in");
  // }
  return <div>Dashboard</div>;
};

export default Dashboard;

const auth = await onAuthenticateUser();

console.log("Auth status : ", auth);

if (auth.status == 200 || auth.status == 201) {
  return redirect(`/dashboard/${auth.user?.WorkSpace[0].id}`);
}

if (auth.status === 400 || auth.status === 404 || auth.status == 403) {
  return redirect("/auth/sign-in");
}
return <div>Dashboard</div>;
