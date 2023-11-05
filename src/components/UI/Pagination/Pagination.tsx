import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './Pagination.module.css';

interface PaginationProps {
  page: number;
  limit: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({
  totalPages,
  setPage,
  page,
  limit,
  setLimit,
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(`?page=${page}`);
  }, [setSearchParams, page]);

  useEffect(() => {
    const newPage = searchParams.get('page');
    if (newPage) setPage(Number(newPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.pagination}>
      <div className={classes.paginationBtns}>
        <button
          type="button"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      <div className={classes.itemsPerPage}>
        Pokemons per page:
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
