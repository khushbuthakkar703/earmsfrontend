import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    staffType: yup.string().required(),
  })
  .required();

export default schema;
