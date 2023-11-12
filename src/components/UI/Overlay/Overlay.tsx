import { useNavigate } from 'react-router-dom';
import classes from './Overlay.module.css';

function Overlay() {
  const navigate = useNavigate();

  return (
    <div
      className={classes.hidden}
      onClick={() => navigate('/')}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          navigate('/');
        }
      }}
      role="presentation"
      aria-label="overlay"
    />
  );
}
export default Overlay;
