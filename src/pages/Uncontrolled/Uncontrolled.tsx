import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import styles from './Uncontrolled.module.css';
import Countries from '../../components/Countries/Countries';
import { IFormData, ISubmitForm } from '../../interface/interface';
import useActions from '../../hooks/useActions';
import schema, { SchemaType } from '../../yup/schema';
import { defaultErrors } from '../../constants/constants';
import convertToBase64 from '../../utils/utils';

function UncontrolledForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(defaultErrors);
  const { setFormInList } = useActions();

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const termsRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  async function validateData(data: IFormData) {
    try {
      await schema.validateSync(data, { abortEarly: false });
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        let errorsArray = defaultErrors;
        error.inner.forEach((err) => {
          if (typeof err.path === 'string') {
            const path = err.path as keyof SchemaType;
            errorsArray = { ...errorsArray, [path]: err.message };
          }
        });
        setErrors(errorsArray);
        if (Object.keys(errorsArray).length === 0) {
          return false;
        }
      }
    }
    return false;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      terms: termsRef.current?.checked,
      picture: pictureRef.current?.files,
      country: countryRef.current?.value,
    } as unknown as IFormData;

    const isValidate = await validateData(data);
    if (isValidate) {
      const imageBase64 = data.picture
        ? await convertToBase64(data.picture[0])
        : '';
      const newData: ISubmitForm = { ...data, picture: imageBase64 };
      setFormInList(newData);
      navigate('/');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" ref={nameRef} required />
      <p>{errors.name ? errors.name : ' '}</p>

      <label htmlFor="age">Age</label>
      <input id="age" type="number" ref={ageRef} min="0" required />
      <p>{errors.age ? errors.age : ' '}</p>

      <label htmlFor="email">Email</label>
      <input id="email" ref={emailRef} required />
      <p>{errors.email ? errors.email : ' '}</p>

      <label htmlFor="password">Password</label>
      <input id="password" ref={passwordRef} type="password" required />
      <p>{errors.password ? errors.password : ' '}</p>

      <label htmlFor="confirmPassword">ConfirmPassword</label>
      <input
        id="confirmPassword"
        ref={confirmPasswordRef}
        type="password"
        required
      />
      <p>{errors.confirmPassword ? errors.confirmPassword : ' '}</p>

      <label htmlFor="gender">Gender</label>
      <select id="gender" ref={genderRef} required>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p>{errors.gender ? errors.gender : ' '}</p>

      <label htmlFor="terms">Terms</label>
      <input id="terms" ref={termsRef} type="checkbox" required />
      <p>{errors.terms ? errors.terms : ' '}</p>

      <label htmlFor="picture">Upload photo:</label>
      <input type="file" ref={pictureRef} />
      <p>
        {errors.picture && typeof errors.picture === 'string'
          ? errors.picture
          : ' '}
      </p>

      <label htmlFor="country">Country</label>
      <input id="country" list="countriesList" ref={countryRef} required />
      <Countries />
      <p>{errors.country ? errors.country : ' '}</p>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default UncontrolledForm;
