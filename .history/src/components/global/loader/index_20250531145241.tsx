import { ReactNode } from "react";

type Props = {
  state: boolean;
  className?: string;
  color?: string;
  children?: ReactNode;
};

const Loader = ({ state, className, color, children }: Props) => {};
