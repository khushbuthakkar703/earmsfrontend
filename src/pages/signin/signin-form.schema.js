import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .email('Invalid Email Id')
      .required('Email cannot be empty'),
    password: yup.string().required('Password cannot be empty'),
  })
  .required();

export default schema;
