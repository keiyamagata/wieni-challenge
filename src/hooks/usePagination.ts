import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePagination = () => {
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const [path, setPath] = useState("/recipes");
  const [page, setPage] = useState(Number(pageNumber) || 1);

  const goToNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const goToPreviousPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  useEffect(() => {
    setPath(`/recipes${page <= 1 ? "" : `/${page}`}`);
    navigate(path);
  }, [page, navigate, path]);

  return { page, goToNextPage, goToPreviousPage };
};
