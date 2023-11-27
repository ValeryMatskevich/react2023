import { useRouter } from 'next/router';
import classes from './Overlay.module.css';

function Overlay() {
  const router = useRouter();

  return (
    <div
      className={classes.hidden}
      onClick={() => {
        router.push({
          pathname: router.pathname,
          query: { ...router.query, details: '0' },
        });
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, details: '0' },
          });
        }
      }}
      role="presentation"
      aria-label="overlay"
    />
  );
}
export default Overlay;
