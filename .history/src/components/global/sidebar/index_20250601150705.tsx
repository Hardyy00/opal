type Props = {
  activeWorkspaceId: string;
};

const Sidebar: React.FC<Props> = ({ activeWorkspaceId }) => {
  return (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center">
      Sidebar
    </div>
  );
};

export default Sidebar;
