import { useRouter } from 'next/router';
import classes from './Pagination.module.css';
import { usePokemonListQuery } from '../../../API/api';

function Pagination() {
  const router = useRouter();
  const { limit, page } = router.query;

  const { data } = usePokemonListQuery({
    limit: limit as string,
    offset: ((Number(page) - 1) * Number(limit)).toString(),
  });

  let totalPages;
  if (data) {
    const { count } = data;
    totalPages = Math.ceil(count / Number(limit));
  }

  return (
    <div className={classes.pagination}>
      <div className={classes.paginationButtons}>
        <button
          type="button"
          onClick={() => {
            const newPage = (Number(page) - 1).toString();
            router.push({
              pathname: router.pathname,
              query: { ...router.query, page: newPage },
            });
          }}
          disabled={Number(page) === 1}
          data-testid="previous"
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => {
            const newPage = (Number(page) + 1).toString();
            router.push({
              pathname: router.pathname,
              query: { ...router.query, page: newPage },
            });
          }}
          disabled={Number(page) === totalPages}
          data-testid="next"
        >
          Next
        </button>
      </div>

      <div className={classes.itemsPerPage}>
        Pokemons per page:
        <select
          value={limit}
          onChange={(e) => {
            router.push({
              pathname: router.pathname,
              query: { ...router.query, page: '1', limit: e.target.value },
            });
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
