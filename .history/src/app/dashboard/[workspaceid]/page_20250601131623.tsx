type Props = {
  params: {
    workspaceid: string;
  };
};

const UserDashboard = async ({ params }: Props) => {
  const { workspaceid } = await params;
  return <div>Welcome {params.workspaceid} </div>;
};

export default UserDashboard;
