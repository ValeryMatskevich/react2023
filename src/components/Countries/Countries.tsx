import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Countries() {
  const { countries } = useSelector((store: RootState) => store.country);

  return (
    <datalist id="countriesList">
      {countries.map((country) => {
        return <option key={country} value={country} aria-label={country} />;
      })}
    </datalist>
  );
}
export default Countries;
