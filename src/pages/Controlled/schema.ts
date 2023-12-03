import * as Yup from 'yup';
import {
  FILE_SIZE,
  SUPPORTED_FORMATS,
  countries,
} from '../../constants/constants';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z]/, 'First letter must be uppercase')
    .required('Required'),
  age: Yup.number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Invalid gender')
    .required('Required'),
  terms: Yup.bool().oneOf([true], 'Must Accept Terms').required('Required'),
  picture: Yup.mixed()
    .required('A file is required')
    .test('fileSize', 'File too large', (value: unknown) => {
      if (value instanceof FileList) {
        return value[0]?.size <= FILE_SIZE;
      }
      return false;
    })
    .test('fileFormat', 'Unsupported Format', (value: unknown) => {
      if (value instanceof FileList) {
        return SUPPORTED_FORMATS.includes(value[0]?.type);
      }
      return false;
    }),
  country: Yup.string()
    .oneOf(countries, 'Invalid country')
    .required('Required'),
});

export default schema;
