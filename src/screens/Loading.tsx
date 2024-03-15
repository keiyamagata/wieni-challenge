import { Skeleton } from "../components";

export const Loading = ({ length }: { length: number }) => {
  const skeletonArray = new Array(length);

  return (
    <div className="grid min-h-full grid-cols-1 gap-4 bg-transparent md:grid-cols-2 lg:grid-cols-4">
      {skeletonArray.map(() => (
        <Skeleton />
      ))}
    </div>
  );
};
