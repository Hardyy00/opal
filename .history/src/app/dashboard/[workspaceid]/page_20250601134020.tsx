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
