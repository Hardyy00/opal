"use client";

import { getAllUserWorkspaces } from "@/actions/workspace";
import Logo from "../logo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useQueryData } from "@/hooks/use-query-data";
import { useRouter } from "next/navigation";
import { WorkSpace } from "@prisma/client";

type Props = {
  activeWorkspaceId: string;
};

const Sidebar: React.FC<Props> = ({ activeWorkspaceId }) => {
  const router = useRouter();

  const { data, isFetched } = useQueryData(
    ["user-workspaces"],
    getAllUserWorkspaces
  );

  const { data: workspace } = data as WorkSpace;
  const onValueChangeHandler = (value: string) => {
    router.push(`/dashboard/${value}`);
  };
  return (
    <div className="bg-[#111111] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="bg-[#111111] p-4 flex gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0">
        <Logo />
        <p className="text-2xl">Opal</p>
      </div>

      <Select
        defaultValue={activeWorkspaceId}
        onValueChange={onValueChangeHandler}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a Workspace" />
        </SelectTrigger>

        <SelectContent className="bg-[#111111]">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sidebar;
