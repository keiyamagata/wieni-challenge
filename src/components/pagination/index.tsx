import { Button } from "../button";
import { Chevron } from "./icons";

type PaginationProps = {
  totalPages: number;
  page: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
};

export const Pagination = ({
  totalPages,
  page,
  goToNextPage,
  goToPreviousPage,
}: PaginationProps) => {
  return (
    <div className="flex w-full justify-center pb-8">
      <div className="flex items-center rounded-full border border-neutral-500">
        <Button
          onClick={goToPreviousPage}
          disabled={page <= 1}
          className="px-3 py-1.5"
        >
          <span className="sr-only">Previous page</span>
          <Chevron />
          Back
        </Button>
        <div className="w-28 text-center">
          <span className="textColor">
            {page} of {totalPages}
          </span>
        </div>
        <Button
          onClick={goToNextPage}
          disabled={page >= totalPages}
          className="px-3 py-1.5"
        >
          <span className="sr-only">Next page</span>
          Next
          <Chevron className="rotate-180" />
        </Button>
      </div>
    </div>
  );
};
