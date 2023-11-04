import { PokemonDetails } from '../API/data';
import PokemonsList from '../PokemonsList/PokemonsList';
import classes from './Main.module.css';

interface MainProps {
  data: PokemonDetails[];
}

function Main({ data }: MainProps) {
  return (
    <main className={classes.main}>
      <PokemonsList data={data} />
    </main>
  );
}

export default Main;
