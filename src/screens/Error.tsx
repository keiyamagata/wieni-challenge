import { Link } from "react-router-dom";
import { Button } from "../components";

export const Error = () => {
  const refreshPage = () => window.location.reload();

  return (
    <div className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-indigo-600 dark:text-indigo-400">
          404
        </p>
        <h1 className="textColor mt-4 text-3xl font-bold md:text-5xl">
          Cocktails not found
        </h1>
        <p className="mt-6 text-neutral-700 dark:text-neutral-300">
          Sorry, something went wrong.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/" className="hover:underline">
            Go back home
          </Link>
          <span>or</span>
          <Button onClick={refreshPage}>Try again</Button>
        </div>
      </div>
    </div>
  );
};
