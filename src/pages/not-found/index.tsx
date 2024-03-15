import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-indigo-600 dark:text-indigo-400">
          404
        </p>
        <h1 className="textColor mt-4 text-3xl font-bold md:text-5xl">
          Cocktails not found
        </h1>
        <p className="mt-6 text-neutral-700 dark:text-neutral-300">
          Sorry, we couldn&#x2019;t find the cocktails you&#x2019;re looking
          for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};
