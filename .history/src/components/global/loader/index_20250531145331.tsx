import { ReactNode } from "react";
import { Spinner } from "./spinner";

type Props = {
  state: boolean;
  className?: string;
  color?: string;
  children?: ReactNode;
};

const Loader = ({ state, className, color, children }: Props) => {
  if (state) {
    return <Spinner color={color} />;
  }
};
