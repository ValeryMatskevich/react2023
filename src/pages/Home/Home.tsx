import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Home.module.css';
import Form from '../../components/Unit/Unit';

export default function Home() {
  const { listOfForms } = useSelector((state: RootState) => state.forms);
  return (
    <div className={styles.notFound}>
      {listOfForms.length !== 0 && (
        <>
          <h2>Form Data</h2>
          <Form list={listOfForms} />
        </>
      )}
    </div>
  );
}
