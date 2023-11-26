import { useRouter } from 'next/router';
import classes from './Pagination.module.css';
import { usePokemonListQuery } from '../../../API/api';

function Pagination() {
  const router = useRouter();
  console.log('router: ', router);
  const { limit, page, offset } = router.query;

  const cardsOnPage = ((Number(page) - 1) * Number(limit)).toString();

  const { data } = usePokemonListQuery({
    limit: limit as string,
    page: page as string,
    offset: cardsOnPage,
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
            router.push(`/?page=${newPage}&limit=${limit}&offset=${offset}`);
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
            router.push(`/?page=${newPage}&limit=${limit}&offset=${offset}`);
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
            router.push(`/?page=1&limit=${e.target.value}&offset=${offset}`);
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
