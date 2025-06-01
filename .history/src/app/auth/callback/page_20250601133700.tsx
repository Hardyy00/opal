import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const AuthCallbackPage = async () => {
  const auth = await onAuthenticateUser();

  console.log("Auth status : ", auth);

  if (auth.status == 200 || auth.status == 201) {
    return redirect(`/dashboard/${auth.user?.firstname}`);
  }

  if (auth.status === 400 || auth.status === 404 || auth.status == 403) {
    return redirect("/auth/sign-in");
  }
  return <div>Dashboard</div>;
};

export default AuthCallbackPage;
