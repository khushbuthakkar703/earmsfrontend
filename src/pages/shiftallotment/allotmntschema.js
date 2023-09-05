import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    department: yup.string().required(),
    category: yup.string().required(),
    selectshiftname: yup.string().required(),
    weekoff: yup.string().required(),
    exemptedshift: yup.string().required(),
   
  })
  .required();

export default schema;