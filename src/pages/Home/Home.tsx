import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Home.module.css';
import Form from '../../components/Unit/Unit';
import Loader from '../../components/UI/Loader/Loader';

export default function Home() {
  const { data } = useSelector((state: RootState) => state.forms);
  return (
    <div className={styles.container}>
      {data.length !== 0 ? (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Form Data</h2>
          <Form list={data} />
        </div>
      ) : (
        <div className={styles.loadingWrapper}>
          <h2 className={styles.loadingTitle}>Ожидается добавление карточек</h2>
          <Loader />
        </div>
      )}
    </div>
  );
}
