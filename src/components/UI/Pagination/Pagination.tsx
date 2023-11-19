import { useSelector } from 'react-redux';
import classes from './Pagination.module.css';
import useActions from '../../../hooks/useActions';
import { usePokemonListQuery } from '../../../API/api';
import { RootState } from '../../../store/store';

function Pagination() {
  const { limit, page } = useSelector((state: RootState) => state.pagination);

  const { data } = usePokemonListQuery({ limit, offset: (page - 1) * limit });
  const { setLimit, setPage } = useActions();

  let totalPages;
  if (data) {
    const { count } = data;
    totalPages = Math.ceil(count / limit);
  }

  return (
    <div className={classes.pagination}>
      <div className={classes.paginationButtons}>
        <button
          type="button"
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>{page}</span>
        <button
          type="button"
          onClick={() => {
            setPage(page + 1);
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
        </select>
      </div>
    </div>
  );
}

export default Pagination;
