import { ISubmitForm } from '../../interface/interface';
import styles from './Unit.module.css';

function Unit({ list }: { list: ISubmitForm[] }) {
  return (
    <div className={styles.wrapper}>
      {list.map((element, index) => {
        const { name, age, country, email, gender, password, picture } =
          element;
        return (
          <ul
            key={name}
            className={
              index === 0 ? `${styles.unit} ${styles.active}` : styles.unit
            }
          >
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Country: {country}</li>
            <li>Email: {email}</li>
            <li>Gender: {gender}</li>
            <li>Password: {password.substring(0, 4)}****</li>
            <li>
              Photo:
              <img src={picture} alt="Unit" />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Unit;
