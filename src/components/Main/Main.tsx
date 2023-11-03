import PokemonsList from '../PokemonsList';
import classes from './Main.module.css';
import { PokemonData } from '../../interface/PokemonData';

interface MainProps {
  data: PokemonData[];
}

function Main({ data }: MainProps) {
  return (
    <main className={classes.main}>
      <PokemonsList data={data} />
    </main>
  );
}

export default Main;
