import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useActions from '../../hooks/useActions';
import schema from './schema';
import { IFormData } from '../../interface/interface';
import { countries } from '../../constants/constants';
import styles from './Controlled.module.css';

function Controlled() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema) as unknown as Resolver<IFormData>,
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const { setFormInList } = useActions();
  const [imageUrl, setImageUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const hadleOnChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const image = event.target.files?.[0];
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const { result } = reader;

        if (result && typeof result === 'string') {
          setImageUrl(result);
        }
      };
      reader.readAsDataURL(image);
    }
  };

  const onSubmit = async (data: IFormData) => {
    if (Object.keys(errors).length) {
      trigger();
      return;
    }
    const imageBase64 = imageUrl;
    const newData = { ...data, picture: imageBase64 };
    console.log('NewDATA', newData);
    setFormInList(newData);
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="name">Name</label>
      <input id="name" {...register('name')} required />
      <p>{errors.name ? errors.name.message : ' '}</p>

      <label htmlFor="age">Age</label>
      <input id="age" {...register('age')} type="number" min="0" required />
      <p>{errors.age ? errors.age.message : ' '}</p>

      <label htmlFor="email">Email</label>
      <input id="email" {...register('email')} required />
      <p>{errors.email ? errors.email.message : ' '}</p>

      <label htmlFor="password">Password</label>
      <input
        id="password"
        {...register('password')}
        type={showPassword ? 'text' : 'password'}
        required
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
      <p>{errors.password ? errors.password.message : ' '}</p>

      <label htmlFor="confirmPassword">ConfirmPassword</label>
      <input
        id="confirmPassword"
        {...register('confirmPassword')}
        type={showConfirmPassword ? 'text' : 'password'}
        required
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      >
        {showConfirmPassword ? 'Hide' : 'Show'} Password
      </button>
      <p>{errors.confirmPassword ? errors.confirmPassword.message : ' '}</p>

      <label htmlFor="gender">Gender</label>
      <select id="gender" {...register('gender')} required>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <p>{errors.gender ? errors.gender.message : ' '}</p>

      <label htmlFor="terms">Terms</label>
      <input id="terms" {...register('terms')} type="checkbox" required />
      <p>{errors.terms ? errors.terms.message : ' '}</p>

      <label htmlFor="picture">Picture</label>
      <input
        id="picture"
        {...register('picture')}
        type="file"
        accept=".png, .jpeg, .jpg"
        onChange={hadleOnChange}
        required
      />
      <p>{errors.picture ? errors.picture.message : ' '}</p>

      <label htmlFor="country">Country</label>
      <input
        id="country"
        list="countriesList"
        {...register('country')}
        required
      />
      <datalist id="countriesList">
        {countries.map((country) => (
          <option key={country} value={country} aria-label={country} />
        ))}
      </datalist>
      <p>{errors.country ? errors.country.message : ' '}</p>

      <input type="submit" disabled={Object.keys(errors).length > 0} />
    </form>
  );
}

export default Controlled;
