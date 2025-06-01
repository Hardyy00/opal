type Props = {
  params: {
    workspaceid: string;
  };
};

const UserDashboard = async ({ params }: Props) => {
  return <div>Welcome {params.workspaceid} </div>;
};

export default UserDashboard;
