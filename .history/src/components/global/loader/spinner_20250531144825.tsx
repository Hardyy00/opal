type Props = {
  color: string;
};

export const Spinner = ({ color }: Props) => {
  return (
    <div role="status">
      <svg></svg>
    </div>
  );
};
