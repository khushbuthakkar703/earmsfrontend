import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    awardDate: yup.string().required(),
   
  })
  .required();

export default schema;