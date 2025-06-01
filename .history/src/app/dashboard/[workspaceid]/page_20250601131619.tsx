type Props = {
  params: {
    workspaceid: string;
  };
};

const UserDashboard = async ({ params }: Props) => {
  const { workSpaceId } = await params;
  return <div>Welcome {params.workspaceid} </div>;
};

export default UserDashboard;
