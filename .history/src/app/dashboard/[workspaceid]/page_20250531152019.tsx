type Props = {
  params: {
    workspaceid: string;
  };
};

const UserDashboard = ({ params }: Props) => {
  return <div>Welcome {params.workspaceid} </div>;
};
